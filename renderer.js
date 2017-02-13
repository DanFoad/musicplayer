const remote = require('electron').remote;

$(".titlebar__minimize").on('click', function() {
    var window = remote.getCurrentWindow();
    window.minimize();
});

$(".titlebar__maximize").on('click', function() {
    var window = remote.getCurrentWindow();
    if (!window.isMaximized()){
        window.maximize();
        $(this).html("<i class=\"fa fa-window-restore\"></i>");
    } else {
        window.unmaximize();
        $(this).html("<i class=\"fa fa-window-maximize\"></i>");
    }
});

$(".titlebar__close").on('click', function() {
    var window = remote.getCurrentWindow();
    window.close();
});
