define(["require", "exports"], function (require, exports) {
    var MainView = (function () {
        function MainView(scope) {
            this.$el = scope;
        }
        MainView.prototype.render = function () {
            this.$el.innerHTML = "Hello World!";
        };
        return MainView;
    })();
    exports.MainView = MainView;
});
//# sourceMappingURL=MainView.js.map