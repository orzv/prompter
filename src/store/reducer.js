export default function (state, { type, payload }) {
    switch (type) {
        case 'update_fontsize':
            return Object.assign({}, state, { fontsize: payload })
        case 'update_background':
            return Object.assign({}, state, { background: payload })
        case 'update_color':
            return Object.assign({}, state, { color: payload })
        case 'update_speed':
            return Object.assign({}, state, { speed: payload })
        case 'update_mirror':
            let mirror = { ...state.mirror }
            mirror[payload] = !mirror[payload]
            return Object.assign({}, state, { mirror })
        case 'switch_page':
            if (payload === 'display') {
                if (typeof document.documentElement.requestFullscreen === 'function') {
                    document.documentElement.requestFullscreen()
                } else if (typeof document.documentElement.webkitRequestFullscreen === 'function') {
                    document.documentElement.webkitRequestFullscreen()
                }
            } else {
                localStorage.setItem('text', state.text)
            }
            return Object.assign({}, state, { page: payload, offset: 300 })
        case 'update_text':
            return Object.assign({}, state, { text: payload })
        case 'update_up':
            return Object.assign({}, state, { offset: state.offset - state.speed })
        case 'update_down':
            return Object.assign({}, state, { offset: state.offset + state.speed })
        case 'update_offset':
            return Object.assign({}, state, { offset: payload })
        case 'update_timer':
            clearInterval(state.timer)
            return Object.assign({}, state, { timer: payload })
        default:
            return state
    }
}