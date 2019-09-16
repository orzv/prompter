export default {
    page: 'settings',
    fontsize: 36,
    background: '#000000',
    color: '#ffffff',
    mirror: {
        horizontal: false,
        vertical: false
    },
    text: localStorage.getItem('text') || '',
    offset: 300,
    timer: null,
    speed: 12
}