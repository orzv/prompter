import React from 'react'

export default function ({ state }) {
    const outer = { background: state.background, color: state.color, fontSize: state.fontsize }
    let classes = 'preview'
    if (state.mirror.vertical && state.mirror.horizontal) {
        classes += ' mirror-all'
    } else if (state.mirror.vertical) {
        classes += ' mirror-vertical'
    } else if (state.mirror.horizontal) {
        classes += ' mirror-horizontal'
    }
    return (
        <div className={classes} style={outer}>
            <div>
                <pre>{`
这是预览
这也是预览
                    `}</pre>
            </div>
        </div>
    )
}