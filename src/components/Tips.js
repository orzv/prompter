import React from 'react'

export default function () {
    return (
        <div className="tips">
            <pre>{`
使用帮助：
1. 点击开始按钮后进入全屏滚动页面
2. 在全屏页面按ESC或Q退出
3. 按空格可暂停滚动，按上下方向键可以手动控制滚动，鼠标滚轮也可以控制
4. 手机、平板等设备进入全屏模式后，可点击屏幕切换滚动、暂停，右划退出全屏
            `}</pre>
        </div>
    )
}