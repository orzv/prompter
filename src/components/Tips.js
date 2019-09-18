import React from 'react'

export default function () {
    return (
        <div className="tips">
            <pre>{`
使用帮助：
1. 点击开始按钮后，会进入全屏滚动页面；
2. 在全屏页面按ESC或Q退出；
3. 按空格可暂停滚动，按上下方向键可以手动控制滚动，也可以使用鼠标滚轮控制；
4. 手机、平板等设备进入全屏模式后，可点击屏幕暂停/开始滚动；
5. 所有信息仅保存在本地缓存，不会被发送到任何地方。
6. 意见反馈，请联系 微博`}<a style={{ color: '#3d7ddd' }} href="https://www.weibo.com/xiaoteshushu/" target="_blank">@小特叔叔</a></pre>
        </div>
    )
}