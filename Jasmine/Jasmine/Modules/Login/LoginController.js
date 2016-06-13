define(["require", "exports", "Modules/Login/LoginView"], function (require, exports, LoginView) {
    var LoginController = (function () {
        function LoginController() {
            this.loginView = new LoginView.LoginView();
            this.user = "";
            this.password = "";
        }
        LoginController.prototype.init = function () {
            this.loginView.render();
        };
        LoginController.prototype.getCredentials = function () {
            return {
                user: this.user,
                password: this.password
            };
        };
        LoginController.prototype.setCredentials = function (user, password) {
            this.user = user;
            this.password = password;
        };
        LoginController.prototype.login = function () {
            var response = this.callWS(this.user, this.password);
            if (response == "error") {
                this.showError();
            }
        };
        LoginController.prototype.callWS = function (user, password) {
            var response = "";
            return response;
        };
        LoginController.prototype.showError = function () {
            this.loginView.showError();
        };
        return LoginController;
    })();
    exports.LoginController = LoginController;
});
//# sourceMappingURL=LoginController.js.map