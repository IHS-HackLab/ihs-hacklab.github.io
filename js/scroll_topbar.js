const dyntopbar = document.getElementById('dynamictopbar');
const topbar = document.getElementById('topbar');

if (dyntopbar && topbar) {
    var t = 'translateY(-100%)';

    window.onscroll = () => {
        if (scrollY >= topbar.offsetHeight / 2) {
            t = 'translateY(0%)';
        } else {
            t = 'translateY(-100%)';
        }

        if (dyntopbar.style.transform !== t) {
            dyntopbar.style.transform = t;
        }
    }
}