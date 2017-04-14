webpackJsonpac__name_([19],{

/***/ "./src/app/cart/cart.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var CartComponent = (function () {
    function CartComponent(router) {
        this.router = router;
    }
    CartComponent.prototype.searchResult = function () {
        this.router.navigate(['/app', 'extra', 'search']);
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            styles: [__webpack_require__("./src/app/cart/cart.style.scss")],
            template: __webpack_require__("./src/app/cart/cart.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], CartComponent);
    return CartComponent;
    var _a;
}());
exports.CartComponent = CartComponent;


/***/ },

/***/ "./src/app/cart/cart.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var cart_component_ts_1 = __webpack_require__("./src/app/cart/cart.component.ts");
exports.routes = [
    { path: '', component: cart_component_ts_1.CartComponent, pathMatch: 'full' }
];
var CartModule = (function () {
    function CartModule() {
    }
    CartModule.routes = exports.routes;
    CartModule = __decorate([
        core_1.NgModule({
            declarations: [
                cart_component_ts_1.CartComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CartModule);
    return CartModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CartModule;


/***/ },

/***/ "./src/app/cart/cart.style.scss":
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ "./src/app/cart/cart.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid cart-page\">\n\n    <h1 class=\"page-heading\">Shopping Cart</h1>\n\n\n\n    <div class=\"row main-row\">\n\n    <div class=\"col-md-8 col-sm-12 col-xs-12 col-lg-7\">  \n        \n         <div class=\"row order-row\">   <!-- order row starts -->\n                  \n\n             <div class=\"col-md-5 col-sm-5 col-xs-12 col-lg-5\">\n\n                <div class=\"order-image\" style=\"background:url(assets/img/block-img.jpg)\">\n                </div>\n\n             </div>\n\n             <div class=\"col-md-6 col-sm-6 col-lg-6 text-data\">\n\n                <div class=\"row\">\n\n                 <p class=\"order-heading\">Luxury Men's Date Watch Stainless Steel Leather Analog Quartz Military Watches</p>\n\n                 <div class=\"order-size\">\n\n                        <div class=\"size-heading\">\n                            <p>Size:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <p>L</p>\n                        </div>\n\n                 </div>\n                 \n                <div class=\"order-color\">\n\n                        <div class=\"size-heading\">\n                            <p>Color:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <p>Brown</p>\n                        </div>\n\n                 </div>\n\n                </div>\n\n\n                <div class=\"row\">\n\n                                    <div class=\"order-quantity\">\n\n                        <div class=\"size-heading\">\n                            <p>Quantity:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <div class=\"selections\">\n                                    <div class=\"fancy_select select-category\">\n                                        <div class=\"select_triger\">\n                                            <span class=\"text\">1</span>\n                                            <i class=\"fa fa-angle-down\"></i>\n                                        </div>\n                                        <div class=\"select_options\">\n                                            <span class=\"selected\">1</span>\n                                            <span>2</span>\n                                            <span>3</span>\n                                            <span>4</span>\n                                            <span>5</span>\n                                        </div>\n                                    </div> \n                            </div>\n                        </div>\n\n                 </div> \n\n                </div>\n\n\n                    <div class=\"row\">\n\n                      <div class=\"order-shipping\">\n\n                        <div class=\"size-heading\">\n                            <p>Shipping:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <p>$4.01</p>\n                        </div>\n\n                    </div> \n\n                </div>\n\n                <div class=\"row\">\n\n                    <div class=\"order-arrival\">\n\n                        <div class=\"size-heading\">\n                            <p>Estimated Arrival:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <p>May 24 - Jun 3</p>\n                        </div>\n\n                    </div> \n\n                </div>\n\n                <div class=\"row\">\n\n                    <div class=\"order-price\">\n\n                        <div class=\"oldPrice\">\n                            <p><del>$46.00</del></p>\n                        </div>\n\n                        <div class=\"newPrice\">\n                            <p>$10.82</p>\n                        </div>\n\n                    </div> \n\n                </div>\n\n                \n            </div>\n\n\n                <div class=\"col-md-1 col-sm-1 col-lg-1 col-xs-12 deleter\">\n                    <div class=\"delete-row\">\n                        <span>x</span>\n                   </div>\n                </div>\n\n\n        </div>   <!-- order row ends -->\n          \n\n\n\n        <div class=\"row order-row\">   <!-- order row starts -->\n\n                \n\n             <div class=\"col-md-5 col-sm-5 col-xs-12 col-lg-5\">\n\n                <div class=\"order-image\" style=\"background:url(assets/img/block-img2.jpg)\">\n                </div>\n\n             </div>\n\n             <div class=\"col-md-6 col-sm-6 col-lg-6 text-data\">\n\n                <div class=\"row\">\n\n                 <p class=\"order-heading\">Luxury Men's Date Watch Stainless Steel Leather Analog Quartz Military Watches</p>\n\n                </div>\n            \n                <div class=\"row\">\n\n                 <div class=\"order-size\">\n\n                        <div class=\"size-heading\">\n                            <p>Size:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <p>L</p>\n                        </div>\n\n                 </div>\n                 \n                <div class=\"order-color\">\n\n                        <div class=\"size-heading\">\n                            <p>Color:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <p>Brown</p>\n                        </div>\n\n                 </div>\n\n                </div>\n\n\n                <div class=\"row\">\n\n                                    <div class=\"order-quantity\">\n\n                        <div class=\"size-heading\">\n                            <p>Quantity:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <div class=\"selections\">\n                                    <div class=\"fancy_select select-category\">\n                                        <div class=\"select_triger\">\n                                            <span class=\"text\">1</span>\n                                            <i class=\"fa fa-angle-down\"></i>\n                                        </div>\n                                        <div class=\"select_options\">\n                                            <span class=\"selected\">1</span>\n                                            <span>2</span>\n                                            <span>3</span>\n                                            <span>4</span>\n                                            <span>5</span>\n                                        </div>\n                                    </div> \n                            </div>\n                        </div>\n\n                 </div> \n\n                </div>\n\n\n                    <div class=\"row\">\n\n                      <div class=\"order-shipping\">\n\n                        <div class=\"size-heading\">\n                            <p>Shipping:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <p>$4.01</p>\n                        </div>\n\n                    </div> \n\n                </div>\n\n                <div class=\"row\">\n\n                    <div class=\"order-arrival\">\n\n                        <div class=\"size-heading\">\n                            <p>Estimated Arrival:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <p>May 24 - Jun 3</p>\n                        </div>\n\n                    </div> \n\n                </div>\n\n                <div class=\"row\">\n\n                    <div class=\"order-price\">\n\n                        <div class=\"oldPrice\">\n                            <p><del>$46.00</del></p>\n                        </div>\n\n                        <div class=\"newPrice\">\n                            <p>$10.82</p>\n                        </div>\n\n                    </div> \n\n                </div>\n\n                \n            </div>\n\n                <div class=\"col-md-1 col-sm-1 col-lg-1 col-xs-12 deleter\">\n                    <div class=\"delete-row\">\n                        <span>x</span>\n                   </div>\n                </div>\n\n            \n        </div>   <!-- order row ends -->\n\n\n\n\n    </div>   \n\n\n    <div class=\"col-md-4 col-sm-8 col-xs-12\">   <!-- Order summary column -->\n\n            <div class=\"order-summary\">  <!-- order -summary div-->\n\n                    <h1 class=\"order-summary-heading\">Order Summary</h1>\n\n                <div class=\"row\">\n                    <div class=\"left-item-total\">\n\n                            <div class=\"item-total-heading\">\n                                <p>Item Total:</p>\n                            </div>\n                            <div class=\"item-total-value\">\n                                <p>$22.82</p>\n                            </div>\n\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"left-estimated-shipping\">\n\n                            <div class=\"item-total-heading\">\n                                <p>Estimated Shipping:</p>\n                            </div>\n                            <div class=\"item-total-value\">\n                                <p>$4.01</p>\n                            </div>\n\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"left-order-total\">\n\n                             <div class=\"item-total-heading\">\n                                <p class=\"final-total\">TOTAL</p>\n                            </div>\n                            <div class=\"item-total-value\">\n                                <p class=\"final-total\">$26.82 <small>USD</small></p>\n                            </div>\n\n                    </div>\n                </div>\n\n            </div>   <!-- order -summary div ends-->\n                    \n                    \n                    \n                    <div class=\"checkout-button\">\n\n                        <button class=\"btn btn-checkout\">Checkout</button>\n\n                    </div>\n\n    </div>  <!-- Order summary column ends -->\n\n\n\n</div>"

/***/ }

});
//# sourceMappingURL=19.map