require.config({

    baseUrl: './',

    paths: {
        //MainController: "Modules/Main/MainController"
    }
});

require(['Modules/Login/LoginController'], function (LoginController) {
    var app = new LoginController.LoginController();
    app.init();
});