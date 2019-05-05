document.addEventListener('DOMContentLoaded', function () {
    // menu
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    // parallax
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
});