let refConfig = localStorage.getItem('settings')
if (refConfig) {
    refConfig = JSON.parse(refConfig)
} else {
    refConfig = {}
}

export default {
    page: 'settings',
    fontsize: refConfig.fontsize || 48,
    background: refConfig.background || '#000000',
    color: refConfig.color || '#ffffff',
    mirror: {
        horizontal: refConfig.mirror ? refConfig.mirror.horizontal : false,
        vertical: refConfig.mirror ? refConfig.mirror.vertical : true
    },
    text: localStorage.getItem('text') || '',
    offset: 300,
    timer: null,
    speed: refConfig.speed || 16
}