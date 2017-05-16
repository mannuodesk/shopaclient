webpackJsonpac__name_([19],{

/***/ "./src/app/checkout/checkout.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var ShippingAddressModel_1 = __webpack_require__("./src/app/models/ShippingAddressModel.ts");
var CheckoutService_1 = __webpack_require__("./src/app/services/CheckoutService.ts");
var ShoppingCartService_1 = __webpack_require__("./src/app/services/ShoppingCartService.ts");
var core_2 = __webpack_require__("./node_modules/@angular/core/index.js");
var PaymentService_1 = __webpack_require__("./src/app/services/PaymentService.ts");
var CheckoutComponent = (function () {
    function CheckoutComponent(_shoppingCartService, _checkoutService, _paymentService, router, _zone) {
        var _this = this;
        this._shoppingCartService = _shoppingCartService;
        this._checkoutService = _checkoutService;
        this._paymentService = _paymentService;
        this._zone = _zone;
        this.CountryId = -1;
        this.states = [];
        // public _shippingAddress: ShippingAddress[]=[];
        this.countries = [];
        this.router = router;
        this.Guest = "Guests";
        this.userRole = JSON.parse(localStorage.getItem('user')).role;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.shippingAddress = new ShippingAddressModel_1.ShippingAddress();
        this.populateAllCountries();
        this.shippingAddress = new ShippingAddressModel_1.ShippingAddress();
        //this.paymentModel.CreditCardNumber="444";
        this._shoppingCartService.getAllShoppingCartItems(this.user.Id).subscribe(function (a) {
            _this.TotalPrice = a.TotalPrice;
            _this.TotalShippingPrice = a.TotalShippingPrice;
            _this.LastTotalPrice = _this.TotalPrice + _this.TotalShippingPrice;
            _this.shoppingCartArray = a.shoppingCartItemDTOList;
            console.log(a.shoppingCartItemDTOList);
        });
    }
    CheckoutComponent.prototype.onCountryChange = function () {
        this.CountryId = jQuery('#countryId').val();
        this.Country = jQuery("#countryId option[value=" + this.CountryId + "]").text().trim();
        this.getStatesByCountry(this.CountryId);
    };
    CheckoutComponent.prototype.onStateChange = function () {
        this.StateProvinceId = jQuery('#stateId').val();
        for (var i = 0; i < this.states.length; i++) {
            if (this.states[i].stateId == this.StateProvinceId) {
                this.StateProvinceText = this.states[i].stateName;
                break;
            }
        }
        this.getStatesByCountry(this.CountryId);
    };
    CheckoutComponent.prototype.populateAllCountries = function () {
        var _this = this;
        this._checkoutService.getAllCountries().subscribe(function (a) {
            _this.countries = a.data;
            _this.populateShippingInfo();
        });
    };
    CheckoutComponent.prototype.getStatesByCountry = function (countryId) {
        var _this = this;
        this._checkoutService.getAllStatesOfConutry(countryId).subscribe(function (a) {
            console.log(a);
            _this.states = a.data;
            jQuery('#stateId').val(_this.StateProvinceId);
        });
    };
    CheckoutComponent.prototype.getToken = function () {
        var _this = this;
        this.message = 'Loading...';
        window.Stripe.card.createToken({
            number: this.cardNumber,
            exp_month: jQuery('#expiryMonth').val(),
            exp_year: jQuery('#expiryYear').val(),
            cvc: this.cvc
        }, function (status, response) {
            // Wrapping inside the Angular zone
            _this._zone.run(function () {
                if (status === 200) {
                    _this.message = "Success! Card token " + response.card.id + ".";
                    _this._paymentService.charge(_this.Email, response.card.id).subscribe(function (data) {
                        console.log(data);
                    });
                }
                else {
                    _this.message = response.error.message;
                }
            });
        });
    };
    CheckoutComponent.prototype.populateShippingInfo = function () {
        var _this = this;
        this._checkoutService.getShippingAddress(this.user.Id).subscribe(function (a) {
            console.log(a);
            if (a.data.shippingAddress != null) {
                _this.shippingAddress = a.data.shippingAddress;
                _this.FirstName = _this.shippingAddress.FirstName;
                _this.Address1 = _this.shippingAddress.Address1;
                _this.Address2 = _this.shippingAddress.Address2;
                _this.City = _this.shippingAddress.City;
                _this.Country = _this.shippingAddress.Country;
                _this.CountryId = _this.shippingAddress.CountryId;
                jQuery('#countryId').val(_this.CountryId);
                _this.getStatesByCountry(_this.CountryId);
                _this.FaxNumber = _this.shippingAddress.FaxNumber;
                _this.CreatedOnUtc = _this.shippingAddress.CreatedOnUtc;
                _this.PhoneNumber = _this.shippingAddress.PhoneNumber;
                _this.ZipPostalCode = _this.shippingAddress.ZipPostalCode;
                _this.StateProvinceId = _this.shippingAddress.StateProvinceId;
                _this.StateProvinceText = _this.shippingAddress.StateProvinceText;
                _this.Email = _this.shippingAddress.Email.trim();
                if (_this.Email == "") {
                    console.log("No Email");
                }
            }
        });
    };
    CheckoutComponent.prototype.populateShippingModel = function () {
        var checkErrorCount = 0;
        if (this.FirstName !== undefined && this.FirstName != "" && this.FirstName.trim().length != 0) {
            this.shippingAddress.FirstName = this.FirstName;
        }
        else {
            jQuery('#firstNameRequiredError').show();
            checkErrorCount = checkErrorCount + 1;
        }
        if (this.userRole == "Guests") {
            if (this.Email !== undefined && this.Email != "" && this.Email.trim().length != 0) {
                if (this.validateEmail(this.Email) == false) {
                    checkErrorCount = checkErrorCount + 1;
                    jQuery('#emailNotValidError').show();
                }
                else
                    this.shippingAddress.Email = this.Email;
            }
            else {
                jQuery('#EmailRequiredError').show();
                checkErrorCount = checkErrorCount + 1;
            }
        }
        if (this.Address1 !== undefined && this.Address1 != "") {
            this.shippingAddress.Address1 = this.Address1;
        }
        else {
            jQuery('#addressLineOneRequiredError').show();
            checkErrorCount = checkErrorCount + 1;
        }
        if (this.City !== undefined && this.City != "") {
            this.shippingAddress.City = this.City;
        }
        else {
            jQuery('#cityRequiredError').show();
            checkErrorCount = checkErrorCount + 1;
        }
        if (jQuery('#countryId').val() !== null) {
            this.shippingAddress.CountryId = jQuery('#countryId').val();
        }
        else {
            jQuery('#countryRequiredError').show();
            checkErrorCount = checkErrorCount + 1;
        }
        if (this.PhoneNumber == undefined || this.PhoneNumber == "" || this.PhoneNumber.trim().length == 0) {
            jQuery('#telephoneNumberRequiredError').show();
            checkErrorCount = checkErrorCount + 1;
        }
        else {
            this.shippingAddress.PhoneNumber = this.PhoneNumber;
        }
        if (this.ZipPostalCode !== undefined && this.ZipPostalCode != "") {
            this.shippingAddress.ZipPostalCode = this.ZipPostalCode;
        }
        else {
            jQuery('#zipPostalCodeRequiredError').show();
            checkErrorCount = checkErrorCount + 1;
        }
        if (this.StateProvinceText !== undefined && this.StateProvinceText != "") {
            this.shippingAddress.StateProvinceText = this.StateProvinceText;
        }
        else {
            jQuery('#stateProvinceRequiredError').show();
            checkErrorCount = checkErrorCount + 1;
        }
        if (checkErrorCount == 0) {
            this.shippingAddress.Address2 = this.Address2;
            this.shippingAddress.StateProvinceId = this.StateProvinceId;
            this.shippingAddress.PhoneNumber = this.PhoneNumber;
            return true;
        }
        else {
            return false;
        }
    };
    CheckoutComponent.prototype.populatePaymentModel = function () {
        var checkErrorCount = 0;
        if (this.creditCardNumber == undefined || this.creditCardNumber == "" || this.creditCardNumber.trim().length == 0) {
            console.log("No credit information");
            jQuery('#creditCardNumberRequiredError').show();
            checkErrorCount = checkErrorCount + 1;
        }
        if (checkErrorCount == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    CheckoutComponent.prototype.addPaymentInfo = function () {
        jQuery('.error').hide();
        var flag = this.populatePaymentModel();
        if (flag == false) {
            jQuery(".checkout-form .step1").hide();
            jQuery(".checkout-form .step3").hide();
            jQuery(".checkout-form .step2").show();
            jQuery(".checkout-tabs li").removeClass("active");
            jQuery(".checkout-tabs li:nth-child(2)").addClass("active");
        }
    };
    CheckoutComponent.prototype.validateEmail = function (email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
    CheckoutComponent.prototype.addShippingInfo = function () {
        console.log(jQuery("#countryId").val());
        jQuery('.error').hide();
        var flag = this.populateShippingModel();
        this.shippingAddress.customerId = this.user.Id;
        this.shippingAddress.orderId = 0;
        if (flag == true) {
            console.log(this.shippingAddress);
            this._checkoutService.addShippingInformation(this.shippingAddress).subscribe(function (a) {
                if (a.code == 200) {
                    console.log(a);
                    jQuery(".checkout-form .step1").hide();
                    jQuery(".checkout-form .step3").hide();
                    jQuery(".checkout-form .step2").show();
                    jQuery(".checkout-tabs li").removeClass("active");
                    jQuery(".checkout-tabs li:nth-child(2)").addClass("active");
                }
            });
        }
    };
    CheckoutComponent.prototype.ngOnInit = function () {
        jQuery("body").on("click", ".checkout-form .step2-next", function (e) {
            var $this = $(this);
            e.preventDefault();
            $(".checkout-form .step1").hide();
            $(".checkout-form .step2").hide();
            $(".checkout-form .step3").show();
            $(".checkout-tabs li").removeClass("active");
            $(".checkout-tabs li:nth-child(3)").addClass("active");
        });
        jQuery("body").on("click", ".checkout-form .edit-step1", function (e) {
            var $this = jQuery(this);
            e.preventDefault();
            $(".checkout-form .step2").hide();
            $(".checkout-form .step3").hide();
            $(".checkout-form .step1").show();
            $(".checkout-tabs li").removeClass("active");
            $(".checkout-tabs li:nth-child(1)").addClass("active");
        });
        jQuery("body").on("click", ".checkout-form .edit-step2", function (e) {
            var $this = jQuery(this);
            e.preventDefault();
            jQuery(".checkout-form .step1").hide();
            jQuery(".checkout-form .step3").hide();
            jQuery(".checkout-form .step2").show();
            jQuery(".checkout-tabs li").removeClass("active");
            jQuery(".checkout-tabs li:nth-child(2)").addClass("active");
        });
    };
    CheckoutComponent.prototype.onPlaceOrder = function () {
        var _this = this;
        console.log('Place Order');
        this._checkoutService.placeOrder(this.user.Id).subscribe(function (a) {
            if (a.code == 200) {
                console.log('Place Order');
                _this.router.navigate(['/app/index']);
            }
            else if (a.code == 400) {
                console.log("Error" + a.data);
            }
        });
    };
    CheckoutComponent = __decorate([
        core_1.Component({
            selector: 'checkout',
            styles: [__webpack_require__("./src/app/checkout/checkout.style.scss")],
            template: __webpack_require__("./src/app/checkout/checkout.template.html"),
            providers: [CheckoutService_1.CheckoutService, ShoppingCartService_1.ShoppingCartService, PaymentService_1.PaymentService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ShoppingCartService_1.ShoppingCartService !== 'undefined' && ShoppingCartService_1.ShoppingCartService) === 'function' && _a) || Object, (typeof (_b = typeof CheckoutService_1.CheckoutService !== 'undefined' && CheckoutService_1.CheckoutService) === 'function' && _b) || Object, (typeof (_c = typeof PaymentService_1.PaymentService !== 'undefined' && PaymentService_1.PaymentService) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object, (typeof (_e = typeof core_2.NgZone !== 'undefined' && core_2.NgZone) === 'function' && _e) || Object])
    ], CheckoutComponent);
    return CheckoutComponent;
    var _a, _b, _c, _d, _e;
}());
exports.CheckoutComponent = CheckoutComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/checkout/checkout.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var checkout_component_ts_1 = __webpack_require__("./src/app/checkout/checkout.component.ts");
exports.routes = [
    { path: '', component: checkout_component_ts_1.CheckoutComponent, pathMatch: 'full' }
];
var CheckoutModule = (function () {
    function CheckoutModule() {
    }
    CheckoutModule.routes = exports.routes;
    CheckoutModule = __decorate([
        core_1.NgModule({
            declarations: [
                checkout_component_ts_1.CheckoutComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckoutModule);
    return CheckoutModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CheckoutModule;


/***/ },

/***/ "./src/app/checkout/checkout.style.scss":
/***/ function(module, exports) {

module.exports = "/* Osama khawar's Code for checkout */\n.nav-pills.nav-wizard > li {\n  position: relative;\n  overflow: visible;\n  border-right: 15px solid transparent;\n  border-left: 15px solid transparent; }\n\n.nav-pills.nav-wizard > li + li {\n  margin-left: 0; }\n\n.nav-pills.nav-wizard > li:first-child {\n  border-left: 0; }\n\n.nav-pills.nav-wizard > li:first-child a {\n  border-radius: 5px 0 0 5px; }\n\n.nav-pills.nav-wizard > li:last-child {\n  border-right: 0; }\n\n.nav-pills.nav-wizard > li:last-child a {\n  border-radius: 0 5px 5px 0; }\n\n.nav-pills.nav-wizard > li a {\n  border-radius: 0;\n  background-color: #eee; }\n\n.nav-pills.nav-wizard > li:not(:last-child) a:after {\n  position: absolute;\n  content: \"\";\n  top: 0px;\n  right: -20px;\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 20px 0 20px 20px;\n  border-color: transparent transparent transparent #eee;\n  z-index: 150; }\n\n.nav-pills.nav-wizard > li:not(:first-child) a:before {\n  position: absolute;\n  content: \"\";\n  top: 0px;\n  left: -20px;\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 20px 0 20px 20px;\n  border-color: #eee #eee #eee transparent;\n  z-index: 150; }\n\n.nav-pills.nav-wizard > li:hover:not(:last-child) a:after {\n  border-color: transparent transparent transparent #aaa; }\n\n.nav-pills.nav-wizard > li:hover:not(:first-child) a:before {\n  border-color: #aaa #aaa #aaa transparent; }\n\n.nav-pills.nav-wizard > li:hover a {\n  background-color: #aaa;\n  color: #fff; }\n\n.nav-pills.nav-wizard > li.active:not(:last-child) a:after {\n  border-color: transparent transparent transparent #428bca; }\n\n.nav-pills.nav-wizard > li.active:not(:first-child) a:before {\n  border-color: #428bca #428bca #428bca transparent; }\n\n.nav-pills.nav-wizard > li.active a {\n  background-color: #428bca; }\n\n#telephoneNumberRequiredError {\n  display: none; }\n\n#zipPostalCodeRequiredError {\n  display: none; }\n\n#stateProvinceRequiredError {\n  display: none; }\n\n#cityRequiredError {\n  display: none; }\n\n#countryRequiredError {\n  display: none; }\n\n#addressLineOneRequiredError {\n  display: none; }\n\n#firstNameSeverityError {\n  display: none; }\n\n#firstNameRequiredError {\n  display: none; }\n\n.error label {\n  margin-top: 0px;\n  color: red !important; }\n\n.error {\n  margin-top: 0px; }\n"

/***/ },

/***/ "./src/app/checkout/checkout.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"main-section\">\n        {{message}}\n    <div class=\"container\">\n        <div class=\"checkout-page\">\n            \n            <div class=\"my-checkout\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-7 col-lg-7 col-xs-12\"> <!-- Left column starts -->\n                        <div class=\"checkout-form clearfix\">\n                            <ul class=\"checkout-tabs clearfix\">\n                                <li class=\"active\">Ship to</li>\n                                <li>Payment</li>\n                                <li>Review</li>\n                            </ul>\n\n                            <div class=\"heading-top\">\n                                \n                    \n                            <div class=\"step1\">\n                                   <div class=\"left-page-heading\">\n                                    <h5 class=\"ship-to\">SHIP TO</h5>\n                                </div>\n                                <div class=\"right-required\">\n                                    <p><span class=\"required\">*</span>Required</p>\n                                </div>\n\n                                <div class=\"clearfix\"></div>\n                                <ul class=\"form-details\">\n                                    <li class=\"clearfix\">\n                                        <div class=\"text\"><label class=\"required\">Full name</label></div>\n                                        <div class=\"selection\">\n                                            <input type=\"text\" [(ngModel)]=\"FirstName\" >\n                                        </div>\n                                        <div id=\"firstNameRequiredError\" class=\"error\">\n                                            <label class=\"texxt\">Full Name is Required</label>\n                                        </div>\n                                        <div id=\"firstNameSeverityError\" class=\"error\">\n                                            <label class=\"texxt\">Name cannot contain numbers</label>\n                                        </div>\n                                    </li>\n                                   \n\n                                    <li class=\"clearfix\" *ngIf=\"userRole==Guest\">\n                                        <div class=\"text\"><label class=\"required\">Email</label></div>\n                                        <div class=\"selection\">\n                                            <input type=\"email\" required  [(ngModel)]=\"Email\"/>\n                                        </div>\n                                        <div id=\"EmailRequiredError\" class=\"error\">\n                                            <label class=\"texxt\">Email is Required</label>\n                                        </div>\n                                        <div id=\"emailNotValidError\" class=\"error\">\n                                            <label class=\"texxt\">Email is Invalid</label>\n                                        </div>\n                                    </li>\n\n                                    <li class=\"clearfix\">\n                                        <div class=\"text\"><label class=\"required\">Address Line 1</label></div>\n                                        <div class=\"selection\">\n                                            <input type=\"text\" [(ngModel)]=\"Address1\"/>\n                                        </div>\n                                        <div id=\"addressLineOneRequiredError\" class=\"error\">\n                                            <label class=\"texxt\">Address Line 1 is Required</label>\n                                        </div>\n                                    </li>\n                                    <li class=\"clearfix\">\n                                        <div class=\"text\"><label class=\"\">Address Line 2</label></div>\n                                        <div class=\"selection\">\n                                            <input type=\"text\"   [(ngModel)]=\"Address2\"/>\n                                        </div>\n                                    </li>\n                                    <li class=\"clearfix\">\n                                        <div class=\"text\"><label class=\"required\">Country</label></div>\n                                        <select id=\"countryId\" [(ngModel)]=\"CountryId\" (change)=\"onCountryChange()\" class=\"countryDropDown\">\n                                      \n                                            <option *ngFor=\"let country of countries\" value=\"{{country.countryId}}\">{{country.countryName}}\n                                            </option>\n                                        </select>\n                                        <div id=\"countryRequiredError\" class=\"error\">\n                                            <label class=\"texxt\">Country is Required</label>\n                                        </div>\n                                    </li>\n                                     <li class=\"clearfix\">\n                                        <div class=\"text\"><label class=\"required\">State/Province</label></div>\n                                        \n                                            <select id=\"stateId\" [(ngModel)]=\"StateProvinceId\" (change)=\"onStateChange(1)\" class=\"countryDropDown\">\n                                                <option *ngFor=\"let state of states\" value=\"{{state.stateId}}\">{{state.stateName}}\n                                                </option>\n                                            </select>\n                                        <div id=\"stateProvinceRequiredError\" class=\"error\">\n                                            <label class=\"texxt\">State/Province is Required</label>\n                                        </div>\n                                    </li>\n                                    <li class=\"clearfix\">\n                                        <div class=\"text\"><label class=\"required\">City</label></div>\n                                        <div class=\"selection\">\n                                            <input type=\"text\"    [(ngModel)]=\"City\"/>\n                                        </div>\n                                        <div id=\"cityRequiredError\" class=\"error\">\n                                            <label class=\"texxt\">City is Required</label>\n                                        </div>\n                                    </li>\n                                    <li class=\"clearfix\">\n                                        <div class=\"text\"><label class=\"required\">Zip/Postal code</label></div>\n                                        <div class=\"selection\">\n                                            <input type=\"text\"  [(ngModel)]=\"ZipPostalCode\"/>\n                                        </div>\n                                        <div id=\"zipPostalCodeRequiredError\" class=\"error\">\n                                            <label class=\"texxt\">Zip/Postal code is Required</label>\n                                        </div>\n                                    </li>\n                                    <li class=\"clearfix\">\n                                        <div class=\"text\"><label class=\"required\">Telephone number</label></div>\n                                        <div class=\"selection\">\n                                            <input type=\"text\" id=\"phoneNumber\" [(ngModel)]=\"PhoneNumber\"/>\n                                        </div>\n                                        <div id=\"telephoneNumberRequiredError\" class=\"error\">\n                                            <label class=\"texxt\">Telephone Number is Required</label>\n                                        </div>\n                                    </li>\n                                </ul>\n                                <div class=\"control-btns clearfix\">\n                                    <a (click)=\"addShippingInfo()\" class=\"btn btn-blue next-btn step1-next pull-right\">Next</a>\n                                </div>\n                            </div>\n                            <!--===-->\n                            \n                            <div class=\"step2\">\n                                <ul class=\"form-details\">\n                                     <li class=\"clearfix\">\n                                        \n                                        <div class=\"text\"><label class=\"required\">Credit card number</label></div>\n                                        <div class=\"selection\">\n                                         <div class=\"input-group input-group-transparent\"><input [(ngModel)]=\"cardNumber\" placeholder=\"\" id=\"transparent-input\" class=\"form-control\" type=\"text\"> <span class=\"input-group-addon\" style=\"background:#FBFCFD;\"></span></div>\n                                        </div>\n                                         <div id=\"creditCardNumberRequiredError\" class=\"error\">\n                                            <label class=\"texxt\">Credit Card Number is Required</label>\n                                        </div>\n                                    </li>\n                                     <li class=\"clearfix\">\n                                        <div class=\"text\"><label class=\"required\">CVC</label></div>\n                                        <div class=\"selection\">\n                                            <input [(ngModel)]=\"cvc\" type=\"text\">\n                                        </div>\n                                    </li>\n                                    <li class=\"clearfix\">\n                                        <div class=\"text\"><label class=\"required\">Expiration date</label></div>\n                                        <div class=\"selection\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-6\">\n                                                    <div class=\"custome-select clearfix\">\n                                                        <b class=\"fa fa-caret-down\"></b>\n                                                        <span>MM</span>\n                                                        <select id=\"expiryMonth\" required>\n                                                            <option value=\"1\">January</option>\n                                                            <option value=\"2\">Feburary</option>  \n                                                            <option value=\"3\">March</option>\n                                                            <option value=\"4\">April</option>  \n                                                            <option value=\"5\">May</option>\n                                                            <option value=\"6\">June</option>  \n                                                            <option value=\"7\">July</option>\n                                                            <option value=\"8\">August</option>  \n                                                            <option value=\"9\">September</option>\n                                                            <option value=\"10\">October</option>  \n                                                            <option value=\"11\">November</option>\n                                                            <option value=\"12\">December</option>               \n                                                        </select>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-6\">\n                                                    <div class=\"custome-select clearfix\">\n                                                        <b class=\"fa fa-caret-down\"></b>\n                                                        <span>YY</span>\n                                                        <select id=\"expiryYear\" required>\n                                                            <option value=\"2017\">2017</option>\n                                                            <option value=\"2018\">2018</option> \n                                                            <option value=\"2019\">2019</option>\n                                                            <option value=\"2020\">2020</option> \n                                                            <option value=\"2021\">2021</option>\n                                                            <option value=\"2022\">2022</option>\n                                                            <option value=\"2023\">2023</option>                 \n                                                        </select>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </li>\n                                    <li class=\"clearfix\">\n                                        <div class=\"text\"><label class=\"required\">Billing Zip/Postal code</label></div>\n                                        <div class=\"selection\">\n                                            <input [(ngModel)]=\"ZipPostal\" type=\"text\" placeholder=\"Zip/postal code from the address registered\">\n                                        </div>\n                                    </li>\n                                </ul>\n                                <div class=\"control-btns clearfix\">\n                                    <a (click)=\"getToken()\" class=\"btn btn-blue next-btn step2-next pull-right\">Next</a>\n                                </div>\n                            </div>\n                            <!--====-->\n                            \n                            <div class=\"step3\">\n                                <div class=\"review-order\">\n                                    <h5>Order summary</h5>\n                                    <div class=\"price-review\">\n                                       <!-- <ul class=\"total-shipping\">\n                                            <li>\n                                                <span class=\"tag\" style=\"color:black;\">Item total</span>\n                                                <span class=\"price\">$ {{TotalPrice}}</span>\n                                            </li>\n                                            <li>\n                                                <span class=\"tag\" style=\"color:black;\">Shipping Charges</span>\n                                                <span class=\"\">$ {{TotalShippingPrice}}</span>\n                                            </li>\n                                        </ul> -->\n                                        <table class=\"total-shipping\">\n                                            <tbody>\n                                            <tr>\n                                                <td style=\"padding-top:15px;\"><span class=\"tag\" style=\"color:black;\">Item total</span></td>\n                                                <td style=\"text-align:right;padding-top:15px;\"><span class=\"price\">$ {{TotalPrice}}</span></td>\n                                            </tr>\n                                            <tr>\n                                               <td style=\"padding-top:15px;\"><span class=\"tag\" style=\"color:black;\">Shipping Charges</span></td>\n                                                <td style=\"text-align:right;padding-top:15px;\"><span class=\"price\">$ {{TotalShippingPrice}}</span></td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n                                        <hr>\n                                        <ul class=\"big bigTotal\">\n                                            <li class=\"total\">\n                                                <span class=\"tag\">Order Total</span>\n                                                <span class=\"price\">US $ {{LastTotalPrice}}</span>\n                                            </li>\n                                        </ul>\n                                        <a (click)=\"onPlaceOrder()\" class=\"pull-right placeOrderBtn\">Place Order</a>\n                                    </div>\n                                    \n                                    <h5>Billing information</h5>\n                                    <div class=\"price-review withBG \">\n                                        <p>Credit card </p>\n                                        <p class=\"no-margin\">MasterCard ****7234</p>\n                                        <a class=\"edit-btn edit-step2\" href=\"#\">Edit</a>\n                                    </div>\n                                    \n                                    <h5>Shipping information</h5>\n                                    <div class=\"price-review withBG\">\n                                        <p>{{FirstName}}</p>\n                                        <p class=\"no-margin\">{{Address1}}</p>\n                                        <p class=\"no-margin\">{{Country}}, {{ZipPostalCode}}</p>\n                                        <a class=\"edit-btn edit-step1\" href=\"#\">Edit</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n                    <div class=\"col-md-5 col-sm-12 col-lg-5 col-xs-12\">\n                        <div class=\"cart-preview-outer\">\n                            <div class=\"cart-preview\">\n                                <h3>Shopping Cart</h3>\n                                <div *ngFor=\"let shoppingCartItem of shoppingCartArray\" class=\"preview-unit\">\n                                    <figure class=\"visual\" [ngStyle]=\"{'background-image': 'url(' + shoppingCartItem.pictureUrl + ')'}\"></figure>\n                                    <span class=\"name\">{{shoppingCartItem.productName}}</span>\n\n                                    <ul class=\"type\">\n                                        <li>\n                                            <span class=\"tag\">Quantity:</span>\n                                            <span class=\"value\">{{\tshoppingCartItem.quantity}}</span>\n                                        </li>\n                                        <li>\n                                            <span class=\"tag\">Shipping: </span>\n                                            <span class=\"value\">${{shoppingCartItem.shippingCost}}</span>\n                                        </li>\n                                        <li>\n                                            <span class=\"tag\">Estimated Arrival: </span>\n                                            <span class=\"value\">{{shoppingCartItem.estimatedShippingTime}}</span>\n                                        </li>\n                                    </ul>\n                                    <div class=\"old-new-price\">\n                                    <del class=\"previous-price\" *ngIf=\"shoppingCartItem.oldPrice != 0\">$ {{shoppingCartItem.oldPrice}}</del>\n                                    <span class=\"discounted\">$ {{shoppingCartItem.price}} </span>\n                                    </div>\n                                </div>\n                            </div>\n                            \n                        </div>\n                    </div>\n                    </div>\n              <!--  </div>    Left column ends -->\n\n            </div>\n        </div>\n    </div>\n </div>"

/***/ },

/***/ "./src/app/models/ShippingAddressModel.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var ShippingAddress = (function () {
    function ShippingAddress() {
    }
    return ShippingAddress;
}());
exports.ShippingAddress = ShippingAddress;
var UserAddressModel = (function () {
    function UserAddressModel() {
    }
    return UserAddressModel;
}());
exports.UserAddressModel = UserAddressModel;


/***/ },

/***/ "./src/app/services/CheckoutService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var UrlService_1 = __webpack_require__("./src/app/services/UrlService.ts");
var CheckoutService = (function () {
    function CheckoutService(http) {
        this.http = http;
        this.urlService = new UrlService_1.UrlService();
    }
    CheckoutService.prototype.getAllCountries = function () {
        return this.http.get(this.urlService.baseUrl + 'api/default/getListOfCountries')
            .map(function (res) { return res.json(); });
    };
    CheckoutService.prototype.getShippingAddress = function (customerId) {
        return this.http.get(this.urlService.baseUrl + 'api/default/getShippingInfoBillingInfo/?customerId=' + customerId)
            .map(function (res) { return res.json(); });
    };
    CheckoutService.prototype.addShippingInformation = function (model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "api/default/AddShippingInfo", body, options)
            .map(function (res) { return res.json(); });
    };
    CheckoutService.prototype.placeOrder = function (customerId) {
        return this.http.get(this.urlService.baseUrl + "api/default/PlaceOrder/?customerId=" + customerId)
            .map(function (res) { return res.json(); });
    };
    CheckoutService.prototype.getAllStatesOfConutry = function (countryId) {
        return this.http.get(this.urlService.baseUrl + 'api/default/getListOfStates/?countryId=' + countryId)
            .map(function (res) { return res.json(); });
    };
    CheckoutService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], CheckoutService);
    return CheckoutService;
    var _a;
}());
exports.CheckoutService = CheckoutService;


/***/ },

/***/ "./src/app/services/PaymentService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var UrlService_1 = __webpack_require__("./src/app/services/UrlService.ts");
var PaymentService = (function () {
    function PaymentService(http) {
        this.http = http;
        this.urlService = new UrlService_1.UrlService();
    }
    PaymentService.prototype.charge = function (email, stripeToken) {
        return this.http.get(this.urlService.baseUrl + 'api/default/Charge/?stripeEmail=' + email + '&stripeToken=' + stripeToken)
            .map(function (res) { return res.json(); });
    };
    PaymentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], PaymentService);
    return PaymentService;
    var _a;
}());
exports.PaymentService = PaymentService;


/***/ }

});
//# sourceMappingURL=19.map