import LoginView = require("Modules/Login/LoginView");

export class LoginController {

    loginView: LoginView.LoginView
    user: string
    password: string

    constructor() {
        this.loginView = new LoginView.LoginView();
        this.user = "";
        this.password = "";
    }

    init() {
        this.loginView.render();
    }

    getCredentials() {
        return {
            user: this.user,
            password: this.password
        }
    }

    setCredentials(user: string, password: string) {
        this.user = user;
        this.password = password;
    }

    login() {
        var response = this.callWS(this.user, this.password);
        if (response == "error") {
            this.showError();
        }
    }

    callWS(user: string, password: string) {
        var response = "";
        return response;
    }

    showError() {
        this.loginView.showError();
    }
}