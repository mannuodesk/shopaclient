webpackJsonpac__name_([25],{

/***/ "./src/app/cart/cart.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var ng2_modal_1 = __webpack_require__("./node_modules/ng2-modal/index.js");
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
                if (_this.shoppingCartArray.length == 0) {
                    _this.TotalPrice = 0;
                    _this.TotalShippingPrice = 0;
                    _this.LastTotalPrice = 0;
                    jQuery('#checkoutbtn').hide();
                }
                else {
                    jQuery('#checkoutbtn').show();
                }
            });
        }
    }
    CartComponent.prototype.openDeleteConfirmationModal = function (idToDel) {
        this.productToRemove = idToDel;
        this.signUPModalComponent.open();
    };
    CartComponent.prototype.cancle = function () {
        this.signUPModalComponent.close();
    };
    CartComponent.prototype.delete = function () {
        this.deleteCartItem(this.productToRemove);
        var cartcount = jQuery(".header-btn .cart-icon .head_btn .count").text();
        jQuery(".header-btn .cart-icon .head_btn .count").text(--cartcount);
    };
    CartComponent.prototype.onQuantityChange = function (shoppingCartItemId, quantity, index) {
        var _this = this;
        var customerId = JSON.parse(localStorage.getItem('user')).Id;
        this.shoppingCartArray[index].quantity = quantity;
        this._shoppingCartService.updateShoppingCartItem(customerId, shoppingCartItemId, quantity).subscribe(function (a) {
            console.log(a);
            _this.TotalPrice = a.data.TotalPrice;
            _this.TotalShippingPrice = a.data.TotalShippingPrice;
            _this.LastTotalPrice = _this.TotalPrice + _this.TotalShippingPrice;
            _this.shoppingCartArray = a.data.shoppingCartItemDTOList;
        });
        /* this.user = JSON.parse(localStorage.getItem('user'));
         console.log(this.user);
         if (this.user != null) {
           this._shoppingCartService.getAllShoppingCartItems(this.user.Id).subscribe(
             a => {
               this.TotalPrice = a.TotalPrice;
               this.TotalShippingPrice = a.TotalShippingPrice;
               this.LastTotalPrice = this.TotalPrice + this.TotalShippingPrice;
               this.shoppingCartArray = a.shoppingCartItemDTOList;
     
             }
           );
         }*/
    };
    CartComponent.prototype.deleteCartItem = function (shoppingCartItemId) {
        var _this = this;
        this._shoppingCartService.deleteShoppingCartItem(this.user.Id, shoppingCartItemId, 1).subscribe(function (a) {
            _this.TotalPrice = a.data.TotalPrice;
            _this.TotalShippingPrice = a.data.TotalShippingPrice;
            _this.LastTotalPrice = _this.TotalPrice + _this.TotalShippingPrice;
            _this.shoppingCartArray = a.data.shoppingCartItemDTOList;
            if (_this.shoppingCartArray.length == 0) {
                _this.TotalPrice = 0;
                _this.TotalShippingPrice = 0;
                _this.LastTotalPrice = 0;
                jQuery('#checkoutbtn').hide();
            }
            _this.signUPModalComponent.close();
        });
    };
    CartComponent.prototype.checkout = function () {
        this.router.navigate(['/app/checkout']);
    };
    __decorate([
        core_1.ViewChild('itemDeleteConfirmation'), 
        __metadata('design:type', (typeof (_a = typeof ng2_modal_1.Modal !== 'undefined' && ng2_modal_1.Modal) === 'function' && _a) || Object)
    ], CartComponent.prototype, "signUPModalComponent", void 0);
    CartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            styles: [__webpack_require__("./src/app/cart/cart.style.scss")],
            template: __webpack_require__("./src/app/cart/cart.template.html"),
            providers: [ShoppingCartService_1.ShoppingCartService],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof ShoppingCartService_1.ShoppingCartService !== 'undefined' && ShoppingCartService_1.ShoppingCartService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
    ], CartComponent);
    return CartComponent;
    var _a, _b, _c;
}());
exports.CartComponent = CartComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/cart/cart.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var ng2_modal_1 = __webpack_require__("./node_modules/ng2-modal/index.js");
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
                ng2_modal_1.ModalModule,
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

module.exports = "<div class=\"container-fluid cart-page\">\n\n    <h1 class=\"page-heading\">Shopping Cart</h1>\n\n\n\n    <div class=\"row main-row\">\n\n    <div class=\"col-md-8 col-sm-12 col-xs-12 col-lg-8\">  \n        \n         <div *ngFor=\"let shoppingCartItem of shoppingCartArray;let i=index\" class=\"row order-row\">   <!-- order row starts -->\n                  \n\n             <div class=\"col-md-5 col-sm-5 col-xs-12 col-lg-5\">\n\n                <div class=\"order-image\" [ngStyle]=\"{'background-image': 'url(' + shoppingCartItem.pictureUrl + ')'}\">\n                </div>\n\n             </div>\n\n             <div class=\"col-md-6 col-sm-6 col-lg-6 text-data\">\n\n                <div class=\"row\">\n\n                 <p class=\"order-heading\">{{shoppingCartItem.productName}}</p>\n\n                </div>\n\n                <div class=\"row\">\n                    \n                 </div>\n                 <div class=\"row\">\n                 <div class=\"order-size\" [innerHTML]=\"shoppingCartItem.AttributeInfo\">\n                        \n                 </div>\n                 \n\n                \n\n                </div>\n                \n\n\n                <div class=\"row\">\n\n                                    <div class=\"order-quantity\">\n\n                        <div class=\"size-heading\">\n                            <p>Quantity:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <div class=\"selections\">\n                                    <div class=\"fancy_select select-category\">\n                                        <div class=\"select_triger\">\n                                            <span class=\"text\">{{shoppingCartItem.quantity}}</span>\n                                            <i class=\"fa fa-angle-down\"></i>\n                                        </div>\n                                        <div class=\"select_options\">\n                                            <span (click)=\"onQuantityChange(shoppingCartItem.shoppingItemCartId,1,i)\" [ngClass]=\"{'selected': shoppingCartItem.quantity == 1}\">1</span>\n                                            <span (click)=\"onQuantityChange(shoppingCartItem.shoppingItemCartId,2,i)\" [ngClass]=\"{'selected': shoppingCartItem.quantity == 2}\">2</span>\n                                            <span (click)=\"onQuantityChange(shoppingCartItem.shoppingItemCartId,3,i)\" [ngClass]=\"{'selected': shoppingCartItem.quantity == 3}\">3</span>\n                                            <span (click)=\"onQuantityChange(shoppingCartItem.shoppingItemCartId,4,i)\" [ngClass]=\"{'selected': shoppingCartItem.quantity == 4}\">4</span>\n                                            <span (click)=\"onQuantityChange(shoppingCartItem.shoppingItemCartId,5,i)\" [ngClass]=\"{'selected': shoppingCartItem.quantity == 5}\">5</span>\n                                        </div>\n                                    </div> \n                            </div>\n                        </div>\n\n                 </div> \n\n                </div>\n\n\n                    <div class=\"row\">\n\n                      <div class=\"order-shipping\">\n\n                        <div class=\"size-heading\">\n                            <p>Shipping:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <p>{{shoppingCartItem.shippingCost}}</p>\n                        </div>\n\n                    </div> \n\n                </div>\n\n                <div class=\"row\">\n\n                    <div class=\"order-arrival\">\n\n                        <div class=\"size-heading\">\n                            <p>Estimated Arrival:</p>\n                        </div>\n\n                        <div class=\"size-value\">\n                            <p>{{shoppingCartItem.estimatedShippingTime}}</p>\n                        </div>\n\n                    </div> \n\n                </div>\n\n                <div class=\"row\">\n\n                    <div class=\"order-price\">\n\n                        <div *ngIf=\"shoppingCartItem.oldPrice != 0\" class=\"oldPrice\">\n                            <p><del>${{shoppingCartItem.oldPrice}}</del></p>\n                        </div>\n\n                        <div class=\"newPrice\">\n                            <p>Item Price: ${{shoppingCartItem.price}}</p>\n                        </div>\n\n                    </div> \n\n                </div>\n\n                \n            </div>\n\n\n                <div class=\"col-md-1 col-sm-1 col-lg-1 col-xs-12 deleter\">\n                    <div (click)=\"openDeleteConfirmationModal(shoppingCartItem.shoppingItemCartId)\" class=\"delete-row\">\n                        <span>x</span>\n                   </div>\n                </div>\n\n\n        </div>   <!-- order row ends -->\n          \n\n\n\n\n    </div>   \n\n\n    <div class=\"col-md-4 col-sm-8 col-xs-12\">   <!-- Order summary column -->\n\n            <div class=\"order-summary\">  <!-- order -summary div-->\n\n                    <h1 class=\"order-summary-heading\">Order Summary</h1>\n\n                <div class=\"row\">\n                    <div class=\"left-item-total\">\n\n                            <div class=\"item-total-heading\">\n                                <p>Item Total:</p>\n                            </div>\n                            <div class=\"item-total-value\">\n                                <p>${{TotalPrice}}</p>\n                            </div>\n\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"left-estimated-shipping\">\n\n                            <div class=\"item-total-heading\">\n                                <p>Estimated Shipping:</p>\n                            </div>\n                            <div class=\"item-total-value\">\n                                <p>${{TotalShippingPrice}}</p>\n                            </div>\n\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"left-order-total\">\n\n                             <div class=\"item-total-heading\">\n                                <p class=\"final-total\">TOTAL</p>\n                            </div>\n                            <div class=\"item-total-value\">\n                                <p class=\"final-total\">${{LastTotalPrice}} <small>USD</small></p>\n                            </div>\n\n                    </div>\n                </div>\n\n            </div>   <!-- order -summary div ends-->\n                    \n                    \n                    \n                    <div class=\"checkout-button\">\n\n                        <button id=\"checkoutbtn\"  class=\"btn btn-checkout\" (click)=\"checkout()\">Checkout</button>\n\n                    </div>\n\n    </div>  <!-- Order summary column ends -->\n\n<p style=\"font:20px\">To Keep on Shopping, Please Click <a href=\"\">Here</a></p>\n\n\n</div>\n\n<modal #itemDeleteConfirmation \n[closeOnOutsideClick]=\"true\" [closeOnEscape]=\"true\" [hideCloseButton]=\"true\" >\n  <modal-header>\n    <div class=\"modal-logo\">\n    </div>\n  </modal-header>\n  <modal-content>\n    <div class=\"modal-div\">\n       Are you sure that you want to remove this product from the cart?\n       <hr>\n        <div>\n        <div class=\"row semibold signUp-btn-div\">\n            <a (click)=\"delete()\" class=\"btn btn-block socialBtn login\">\n                Yes\n            </a>\n        </div>\n         <div class=\"row semibold signUp-btn-div\">\n            <a (click)=\"cancle()\" class=\"btn btn-block socialBtn login\">\n                No\n            </a>\n        </div>\n        </div>\n    </div>\n    \n  </modal-content>\n</modal>\n"

/***/ }

});
//# sourceMappingURL=25.map