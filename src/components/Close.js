import React from 'react'

export default function ({ state, close }) {
    return !state.timer && (
        <div className="backbtn" onClick={close}>返回</div>
    )
}