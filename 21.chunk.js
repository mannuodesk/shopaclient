webpackJsonpac__name_([21],{

/***/ "./src/app/cart/cart.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var ShoppingCartService_1 = __webpack_require__("./src/app/services/ShoppingCartService.ts");
var CartComponent = (function () {
    function CartComponent(_shoppingCartService, router) {
        var _this = this;
        this._shoppingCartService = _shoppingCartService;
        this.router = router;
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
        if (this.user != null) {
            this._shoppingCartService.getAllShoppingCartItems(this.user.Id).subscribe(function (a) {
                _this.TotalPrice = a.TotalPrice;
                _this.TotalShippingPrice = a.TotalShippingPrice;
                _this.LastTotalPrice = _this.TotalPrice + _this.TotalShippingPrice;
                _this.shoppingCartArray = a.shoppingCartItemDTOList;
            });
        }
    }
    CartComponent.prototype.deleteCartItem = function (shoppingCartItemId) {
        var _this = this;
        this._shoppingCartService.deleteShoppingCartItem(this.user.Id, shoppingCartItemId, 1).subscribe(function (a) {
            for (var i = 0; i < _this.shoppingCartArray.length; i++) {
                if (_this.shoppingCartArray[i].shoppingItemCartId == shoppingCartItemId) {
                    _this.shoppingCartArray.splice(i, 1);
                }
            }
        });
    };
    CartComponent.prototype.checkout = function () {
        this.router.navigate(['/app/checkout']);
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            styles: [__webpack_require__("./src/app/cart/cart.style.scss")],
            template: __webpack_require__("./src/app/cart/cart.template.html"),
            providers: [ShoppingCartService_1.ShoppingCartService],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ShoppingCartService_1.ShoppingCartService !== 'undefined' && ShoppingCartService_1.ShoppingCartService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], CartComponent);
    return CartComponent;
    var _a, _b;
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

module.exports = "<div class=\"container-fluid cart-page\">\n\n    <h1 class=\"page-heading\">Shopping Cart</h1>\n\n\n\n    <div class=\"row main-row\">\n\n    <div class=\"col-md-8 col-sm-12 col-xs-12 col-lg-7\">  \n        \n         <div *ngFor=\"let shoppingCartItem of shoppingCartArray\" class=\"row order-row\">   <!-- order row starts -->\n                  \n\n             <div class=\"col-md-5 col-sm-5 col-xs-12 col-lg-5\">\n\n                <div class=\"order-image\" [ngStyle]=\"{'background-image': 'url(' + shoppingCartItem.pictureUrl + ')'}\">\n                </div>\n\n             </div>\n\n             <div class=\"col-md-6 col-sm-6 col-lg-6 text-data\">\n\n                <div class=\"row\">\n\n                 <p class=\"order-heading\">{{shoppingCartItem.productName}}</p>\n\n                </div>\n\n                <div class=\"row\">\n                    \n                 </div>\n                 <div class=\"row\">\n                 <div class=\"order-size\" [innerHTML]=\"shoppingCartItem.AttributeInfo\">\n                        \n                 </div>\n                 \n\n                \n\n                </div>\n                \n\n\n                <div class=\"row\">\n\n                                    <div class=\"order-quantity\">\n\n                        <div class=\"size-heading\">\n                            <p>Quantity:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <div class=\"selections\">\n                                    <div class=\"fancy_select select-category\">\n                                        <div class=\"select_triger\">\n                                            <span class=\"text\">1</span>\n                                            <i class=\"fa fa-angle-down\"></i>\n                                        </div>\n                                        <div class=\"select_options\">\n                                            <span class=\"selected\">1</span>\n                                            <span>2</span>\n                                            <span>3</span>\n                                            <span>4</span>\n                                            <span>5</span>\n                                        </div>\n                                    </div> \n                            </div>\n                        </div>\n\n                 </div> \n\n                </div>\n\n\n                    <div class=\"row\">\n\n                      <div class=\"order-shipping\">\n\n                        <div class=\"size-heading\">\n                            <p>Shipping:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <p>{{shoppingCartItem.shippingCost}}</p>\n                        </div>\n\n                    </div> \n\n                </div>\n\n                <div class=\"row\">\n\n                    <div class=\"order-arrival\">\n\n                        <div class=\"size-heading\">\n                            <p>Estimated Arrival:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <p>{{shoppingCartItem.estimatedShippingTime}}</p>\n                        </div>\n\n                    </div> \n\n                </div>\n\n                <div class=\"row\">\n\n                    <div class=\"order-price\">\n\n                        <div *ngIf=\"shoppingCartItem.oldPrice != 0\" class=\"oldPrice\">\n                            <p><del>${{shoppingCartItem.oldPrice}}</del></p>\n                        </div>\n\n                        <div class=\"newPrice\">\n                            <p>${{shoppingCartItem.price}}</p>\n                        </div>\n\n                    </div> \n\n                </div>\n\n                \n            </div>\n\n\n                <div class=\"col-md-1 col-sm-1 col-lg-1 col-xs-12 deleter\">\n                    <div (click)=\"deleteCartItem(shoppingCartItem.shoppingItemCartId)\" class=\"delete-row\">\n                        <span>x</span>\n                   </div>\n                </div>\n\n\n        </div>   <!-- order row ends -->\n          \n\n\n\n\n    </div>   \n\n\n    <div class=\"col-md-4 col-sm-8 col-xs-12\">   <!-- Order summary column -->\n\n            <div class=\"order-summary\">  <!-- order -summary div-->\n\n                    <h1 class=\"order-summary-heading\">Order Summary</h1>\n\n                <div class=\"row\">\n                    <div class=\"left-item-total\">\n\n                            <div class=\"item-total-heading\">\n                                <p>Item Total:</p>\n                            </div>\n                            <div class=\"item-total-value\">\n                                <p>${{TotalPrice}}</p>\n                            </div>\n\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"left-estimated-shipping\">\n\n                            <div class=\"item-total-heading\">\n                                <p>Estimated Shipping:</p>\n                            </div>\n                            <div class=\"item-total-value\">\n                                <p>${{TotalShippingPrice}}</p>\n                            </div>\n\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"left-order-total\">\n\n                             <div class=\"item-total-heading\">\n                                <p class=\"final-total\">TOTAL</p>\n                            </div>\n                            <div class=\"item-total-value\">\n                                <p class=\"final-total\">${{LastTotalPrice}} <small>USD</small></p>\n                            </div>\n\n                    </div>\n                </div>\n\n            </div>   <!-- order -summary div ends-->\n                    \n                    \n                    \n                    <div class=\"checkout-button\">\n\n                        <button class=\"btn btn-checkout\" (click)=\"checkout()\">Checkout</button>\n\n                    </div>\n\n    </div>  <!-- Order summary column ends -->\n\n\n\n</div>"

/***/ }

});
//# sourceMappingURL=21.map