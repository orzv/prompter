import React from 'react'

export default function ({ state, close }) {
    return !state.timer && (
        <div className="backbtn" onClick={close}>退出全屏</div>
    )
}