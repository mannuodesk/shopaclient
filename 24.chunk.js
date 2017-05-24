webpackJsonpac__name_([24],{

/***/ "./src/app/changepassword/changepassword.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var router_2 = __webpack_require__("./node_modules/@angular/router/index.js");
var ForgotPasswordService_1 = __webpack_require__("./src/app/services/ForgotPasswordService.ts");
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(activatedRoute, router, _forgotPasswordService) {
        this.activatedRoute = activatedRoute;
        this._forgotPasswordService = _forgotPasswordService;
        this.router = router;
    }
    ChangePasswordComponent.prototype.submitNewPassword = function () {
        if (this.Password == undefined || this.Password == "") {
            jQuery("#rpasswordRequiredError").show();
            return;
        }
        else if (this.Password != this.ConfirmPassword) {
            jQuery("#rpasswordRequiredError").hide();
            jQuery("#passwordMustMatch").show();
            return;
        }
        else if (!this.checkStringComplexity(this.Password)) {
            jQuery("#rpasswordRequiredError").hide();
            jQuery("#passwordMustMatch").hide();
            jQuery("#passwordMustMatchcom").show();
        }
        else {
            jQuery("#passwordMustMatchcom").hide();
            jQuery("#rpasswordRequiredError").hide();
            jQuery("#passwordMustMatch").hide();
            jQuery("#rpasswordRequiredError").hide();
            this.verifyUser();
        }
    };
    ChangePasswordComponent.prototype.checkStringComplexity = function (pwd) {
        var letter = /[a-zA-Z]/;
        var number = /[0-9]/;
        var valid = number.test(pwd) && letter.test(pwd); //match a letter _and_ a number
        return valid;
    };
    ChangePasswordComponent.prototype.verifyUser = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.UserEmail = params['email'];
            _this.UserGuid = params['reset'];
            _this._forgotPasswordService.verifyResetRequest(_this.UserEmail, _this.UserGuid, _this.Password).subscribe(function (a) {
                if (a.code == 200) {
                    console.log("Password Successfully Updated");
                    jQuery("#passwordMustMatchv").html("Password Successfully Updated");
                    _this.Password = "";
                    _this.ConfirmPassword = "";
                    jQuery("#passwordMustMatchv").show();
                }
                else if (a.code == 100) {
                    //console.log("Password Successfully Updated");
                    jQuery("#passwordMustMatchv").html("Invalid Reset request");
                }
                else {
                    console.log("Error!");
                }
            });
        });
    };
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'changepassword',
            styles: [__webpack_require__("./src/app/changepassword/changepassword.style.scss")],
            template: __webpack_require__("./src/app/changepassword/changepassword.template.html"),
            providers: [ForgotPasswordService_1.ForgotPasswordService],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_2.ActivatedRoute !== 'undefined' && router_2.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof ForgotPasswordService_1.ForgotPasswordService !== 'undefined' && ForgotPasswordService_1.ForgotPasswordService) === 'function' && _c) || Object])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
    var _a, _b, _c;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/changepassword/changepassword.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var ng2_modal_1 = __webpack_require__("./node_modules/ng2-modal/index.js");
var changepassword_component_ts_1 = __webpack_require__("./src/app/changepassword/changepassword.component.ts");
exports.routes = [
    { path: '', component: changepassword_component_ts_1.ChangePasswordComponent, pathMatch: 'full' }
];
var ChangePasswordModule = (function () {
    function ChangePasswordModule() {
    }
    ChangePasswordModule.routes = exports.routes;
    ChangePasswordModule = __decorate([
        core_1.NgModule({
            declarations: [
                changepassword_component_ts_1.ChangePasswordComponent
            ],
            imports: [
                common_1.CommonModule,
                ng2_modal_1.ModalModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ChangePasswordModule);
    return ChangePasswordModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChangePasswordModule;


/***/ },

/***/ "./src/app/changepassword/changepassword.style.scss":
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ "./src/app/changepassword/changepassword.template.html":
/***/ function(module, exports) {

module.exports = "\r\n       \r\n           <div id=\"changePassword\">\r\n    \r\n              \r\n        <div class=\"row signup-title almost-done\">\r\n            <h3 class=\"bold modal-heading\">Please enter your new password!</h3>\r\n        </div>\r\n        <div class=\"row input-row\">\r\n            <div class=\"input-login texxt\">\r\n                <input type=\"password\" [(ngModel)]=\"Password\" class=\"form-control\" placeholder=\"Password..\"/>\r\n            </div>\r\n            <div id=\"rpasswordRequiredError\" class=\"error\">\r\n                <label class=\"texxt\">Password is Required</label>\r\n            </div>\r\n            <div id=\"rpasswordSeverityError\" class=\"error\">\r\n                <label class=\"texxt\">Password must contains alpha numeric characters</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"row input-row\">\r\n            <div class=\"input-login texxt\">\r\n                <input type=\"password\"  [(ngModel)]=\"ConfirmPassword\" class=\"form-control\" placeholder=\"Confirm Password..\"/>\r\n            </div>\r\n            <div id=\"rpasswordRequiredError\" class=\"error\">\r\n                <label class=\"texxt\">Confirm Password is Required</label>\r\n            </div>\r\n            <div id=\"rpasswordSeverityError\" class=\"error\">\r\n                <label class=\"texxt\">Confirm Password must contains alpha numeric characters</label>\r\n            </div>\r\n            \r\n             <div id=\"passwordMustMatch\" class=\"error\">\r\n                <label class=\"texxt\">Password must match</label>\r\n            </div>\r\n             <div id=\"passwordMustMatchcom\" class=\"error\">\r\n                <label class=\"texxt\">Password must consists of Alpha numeric characters</label>\r\n            </div>\r\n             <div id=\"passwordMustMatchv\" class=\"error\">\r\n                <label class=\"texxt\">Password must consists of Alpha numeric characters</label>\r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"row semibold signUp-btn-div\">\r\n            <a (click)=\"submitNewPassword()\" class=\"btn btn-block reg-signUp socialBtn login\">\r\n                Submit\r\n            </a>\r\n        </div>\r\n\r\n        <div id=\"invalidRegistration\" class=\"error\">\r\n            <label class=\"texxt\"></label>\r\n        </div>\r\n\r\n        </div>\r\n"

/***/ }

});
//# sourceMappingURL=24.map