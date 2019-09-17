import React, { useContext } from 'react'
import Preview from '../components/Preview'
import context from '../store/context'
import Tips from '../components/Tips'

export default function ({ state }) {
    const dispatch = useContext(context)

    return (
        <div className="settings-view">
            <div className="opts-list">
                <div className="item">
                    <div className="title">字体大小</div>
                    <div className="content">
                        <input type="text" value={state.fontsize} onChange={e => dispatch({ type: 'update_fontsize', payload: +e.target.value })} />
                    </div>
                </div>
                <div className="item">
                    <div className="title">字体颜色</div>
                    <div className="content">
                        <input type="text" value={state.color} onChange={e => dispatch({ type: 'update_color', payload: e.target.value })} />
                    </div>
                </div>
                <div className="item">
                    <div className="title">背景颜色</div>
                    <div className="content">
                        <input type="text" value={state.background} onChange={e => dispatch({ type: 'update_background', payload: e.target.value })} />
                    </div>
                </div>
                <div className="item">
                    <div className="title">镜像</div>
                    <div className="content checkboxs">
                        <label>
                            <input type="checkbox" defaultChecked={state.mirror.horizontal} value="horizontal" onChange={e => dispatch({ type: 'update_mirror', payload: 'horizontal' })} />左右
                            </label>
                        <label>
                            <input type="checkbox" defaultChecked={state.mirror.vertical} value="vertical" onChange={e => dispatch({ type: 'update_mirror', payload: 'vertical' })} />上下
                            </label>
                    </div>
                </div>
                <div className="item">
                    <div className="title">滚动速度</div>
                    <div className="content">
                        <input type="text" value={state.speed} onChange={e => dispatch({ type: 'update_speed', payload: +e.target.value })} />
                    </div>
                </div>
            </div>

            <Preview state={state} />

            <textarea defaultValue={state.text} onInput={e => dispatch({ type: 'update_text', payload: e.target.value })}></textarea>

            <div className="start-btn" onClick={() => dispatch({ type: 'switch_page', payload: 'display' })}>开始</div>
            <Tips />
        </div >
    )
}