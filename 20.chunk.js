webpackJsonpac__name_([20],{

/***/ "./src/app/stripe-form/stripe-form.component.css":
/***/ function(module, exports) {

module.exports = ":host {\r\n  display: block;\r\n  padding: 0 16px;\r\n}\r\n\r\nh2 {\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  letter-spacing: 0.005em;\r\n  margin-bottom: 0;\r\n  margin-top: 0.83em;\r\n}\r\n"

/***/ },

/***/ "./src/app/stripe-form/stripe-form.component.html":
/***/ function(module, exports) {

module.exports = "<h1>Default Stripe Form</h1>\r\n\r\n<button (click)=\"openCheckout()\">Purchase</button>\r\n\r\n\r\n"

/***/ },

/***/ "./src/app/stripe-form/stripe-form.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var StripeFormComponent = (function () {
    function StripeFormComponent(renderer) {
        this.renderer = renderer;
    }
    StripeFormComponent.prototype.openCheckout = function () {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_wnGqHBw1kFKlaajQctUrLaNi',
            locale: 'auto',
            token: function (token) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
            }
        });
        handler.open({
            name: 'Demo Site',
            description: '2 widgets',
            amount: 2000
        });
        this.globalListener = this.renderer.listenGlobal('window', 'popstate', function () {
            handler.close();
        });
    };
    StripeFormComponent.prototype.ngOnDestroy = function () {
        this.globalListener();
    };
    StripeFormComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'sd-stripe-form',
            template: __webpack_require__("./src/app/stripe-form/stripe-form.component.html"),
            styles: [__webpack_require__("./src/app/stripe-form/stripe-form.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _a) || Object])
    ], StripeFormComponent);
    return StripeFormComponent;
    var _a;
}());
exports.StripeFormComponent = StripeFormComponent;


/***/ },

/***/ "./src/app/stripe-form/stripe.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/**
 * New typescript file
 */
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var stripe_form_component_1 = __webpack_require__("./src/app/stripe-form/stripe-form.component.ts");
exports.routes = [
    { path: '', component: stripe_form_component_1.StripeFormComponent, pathMatch: 'full' }
];
var StripeFormModule = (function () {
    function StripeFormModule() {
    }
    StripeFormModule.routes = exports.routes;
    StripeFormModule = __decorate([
        core_1.NgModule({
            declarations: [
                stripe_form_component_1.StripeFormComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], StripeFormModule);
    return StripeFormModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StripeFormModule;


/***/ }

});
//# sourceMappingURL=20.map