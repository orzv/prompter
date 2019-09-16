import React, { useContext, useEffect, useRef } from 'react'
import { Swipeable } from 'react-touch'
import context from '../store/context'
import Close from '../components/Close'

export default function ({ state }) {
    const dispatch = useContext(context)
    const ref = useRef()

    /**
     * 清除所有监听器，返回设置页面
     */
    function destroy() {
        dispatch({ type: 'switch_page', payload: 'settings' })
        document.fullscreenElement && document.exitFullscreen()
        window.onkeydown = null
        window.onwheel = null
        dispatch({ type: 'update_timer', payload: null })
    }

    function pause() {
        dispatch({ type: 'update_timer', payload: null })
    }
    function resume() {
        dispatch({ type: 'update_timer', payload: setInterval(roll, 200) })
    }
    function switchPlayState() {
        state.timer ? pause() : resume()
    }

    function bindKey(e) {
        if (e.keyCode === 81 || e.keyCode === 27) {
            // Q和ESC键退出全屏
            destroy()
        } else if (e.keyCode === 32) {
            // 空格键控制播放暂停
            switchPlayState()
        } else if (e.keyCode === 38 || e.keyCode === 40) {
            // 方向键
            dispatch({ type: `update_${({ "38": 'up', "40": 'down' })[e.keyCode]}` })
        } else {
            console.log(e.keyCode)
        }
    }

    /**
     * 滚动方法
     * 到达顶部之后关闭定时器
     */
    function roll() {
        if (!ref.current) return
        dispatch({ type: 'update_up' })
        let rect = ref.current.getBoundingClientRect()
        if (rect.bottom <= 0) {
            console.log('end')
            pause()
        }
    }

    window.onkeydown = bindKey
    window.onwheel = function (e) {
        dispatch({ type: `update_${e.deltaY > 0 ? 'down' : 'up'}` })
    }
    document.onfullscreenchange = function () {
        /**
         * 当系统触发被动退出全屏后
         * 清除其他副作用
         */
        if (!document.fullscreenElement) {
            destroy()
        }
    }

    useEffect(() => resume(), [])
    // !state.timer && dispatch({ type: 'update_timer', payload: setInterval(roll, 200) })

    let style = {
        color: state.color,
        background: state.background,
        fontSize: state.fontsize,
        transform: `translateY(${state.offset}px)`
    }

    if (state.mirror.horizontal) {
        style.transform += ' rotateY(180deg)'
    }
    return (
        <Swipeable onSwipeRight={destroy}>
            <div className="display-view" onClick={switchPlayState} style={{ background: state.background, transform: state.mirror.vertical ? 'rotateX(180deg)' : '' }}>
                <div className="text" style={style} ref={ref}>
                    <pre>{state.text}</pre>
                </div>
                <Close state={state} close={destroy} />
            </div>
        </Swipeable>
    )
}