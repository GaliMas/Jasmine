require.config({
    baseUrl: './',
    paths: {}
});
require(['Modules/Login/LoginController'], function (LoginController) {
    var app = new LoginController.LoginController();
    app.init();
});
//# sourceMappingURL=AppConfig.js.map