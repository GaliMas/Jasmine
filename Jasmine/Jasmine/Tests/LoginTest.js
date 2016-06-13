define(["require", "exports", "Modules/Login/LoginController", "Libs/jasmine-ajax-master/mock-ajax"], function (require, exports, LoginController) {
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
            var doneFn = jasmine.createSpy("success");
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(args) {
                if (this.readyState == this.DONE) {
                    doneFn(this.responseText);
                }
            };

            //xhr.open("GET", "/some/cool/url");
            //xhr.send();
            //expect(jasmine.Ajax.requests.mostRecent().url).toBe('/some/cool/url');
            //expect(doneFn).not.toHaveBeenCalled();

            jasmine.Ajax.requests.mostRecent().respondWith({
                "status": 200,
                "contentType": 'text/plain',
                "responseText": 'OK'
            });

            controller.setCredentials("Jorge", "Vsn1234");
            controller.login();
            //expect(controller.showError).toHaveBeenCalledTimes(0);
            expect(doneFn).toHaveBeenCalledWith('OK');
        });
    });
});
//# sourceMappingURL=LoginTest.js.map