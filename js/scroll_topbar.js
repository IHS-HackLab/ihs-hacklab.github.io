const dyntopbar = document.getElementById('dynamictopbar');
const topbar = document.getElementById('topbar');

if (dyntopbar && topbar) {
    window.onscroll = () => {
        if (scrollY >= topbar.offsetHeight / 2) {
            dyntopbar.style.transform = 'translateY(0%)';
        } else {
            dyntopbar.style.transform = 'translateY(-100%)';
        }
    }
}