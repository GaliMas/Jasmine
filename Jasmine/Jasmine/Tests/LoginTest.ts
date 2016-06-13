import LoginController = require("Modules/Login/LoginController");
import Ajax = require("Libs/jasmine-ajax-master/mock-ajax");

describe("Test login", function () {
    var controller;

    beforeEach(function () {
        controller = new LoginController.LoginController();
        spyOn(controller, "showError");
        spyOn(controller, "callWS").and.returnValue("error");

        jasmine.Ajax.install();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    it("no credentials", function () {
        expect(controller.getCredentials().user).toBe("");
        expect(controller.getCredentials().password).toBe("");
    });

    it("set credentials", function () {
        controller.setCredentials("jorge", "Vsn1234");
        expect(controller.getCredentials().user).toBe("jorge");
        expect(controller.getCredentials().password).toBe("Vsn1234");
    });

    it("login try with invalid credentials", function () {
        controller.setCredentials("AAA", "BBB");
        controller.login();
        expect(controller.showError).toHaveBeenCalled();
    });

    it("login try with valid credentials", function () {
        controller.setCredentials("Jorge", "Vsn1234");
        controller.login();
        expect(controller.showError).toHaveBeenCalledTimes(0);
    });
});