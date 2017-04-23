webpackJsonpac__name_([18],{

/***/ "./src/app/models/AddToCartDTO.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var AddToCartDTO = (function () {
    function AddToCartDTO() {
        this.keyValuePairDtoArray = [];
    }
    return AddToCartDTO;
}());
exports.AddToCartDTO = AddToCartDTO;


/***/ },

/***/ "./src/app/models/KeyValuePairDTO.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var KeyValuePairDTO = (function () {
    function KeyValuePairDTO() {
    }
    return KeyValuePairDTO;
}());
exports.KeyValuePairDTO = KeyValuePairDTO;


/***/ },

/***/ "./src/app/productdetail/productdetail.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
/**
 * Home Component typescript file
 */
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var ProductDetailsService_1 = __webpack_require__("./src/app/services/ProductDetailsService.ts");
var ShoppingCartService_1 = __webpack_require__("./src/app/services/ShoppingCartService.ts");
var KeyValuePairDTO_1 = __webpack_require__("./src/app/models/KeyValuePairDTO.ts");
var AddToCartDTO_1 = __webpack_require__("./src/app/models/AddToCartDTO.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var ProductDetail = (function () {
    function ProductDetail(activatedRoute, _productdetail, _shoppingCartService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._productdetail = _productdetail;
        this._shoppingCartService = _shoppingCartService;
        this.keys = [];
        this.values = [];
        this.productId = 0;
        this.productimages = [];
        this.router = router;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.productId = params['productId'];
            //Here you will call service and populate the model
            _this._productdetail.getProductDetails(_this.productId).subscribe(function (a) {
                console.log(a);
                //alert();
                _this.product = a.data.productDetailsModel;
                _this.productdescription = _this.product.FullDescription;
                _this.productprice = _this.product.ProductPrice.Price;
                _this.producttitle = _this.product.Name;
                _this.productimages = _this.product.PictureModels;
                _this.oldprice = _this.product.ProductPrice.OldPrice;
                _this.mainimage = _this.productimages[0].FullSizeImageUrl;
                _this.ProductAttributes = _this.product.ProductAttributes;
                console.log(_this.product.ProductPrice.OldPrice);
                _this.discountpercentage = a.data.discountPercentage;
                console.log(_this.product.ProductPrice);
            });
        });
    }
    ProductDetail.prototype.changeimage = function (image) {
        this.mainimage = image;
    };
    ProductDetail.prototype.makeKeyValue = function (key, value) {
        this.keys.push(key);
        this.values.push(value);
    };
    ProductDetail.prototype.onBuyNow = function () {
        var _this = this;
        jQuery('#addToCartErrors').hide();
        this.addToCartDTO = new AddToCartDTO_1.AddToCartDTO();
        for (var i = 0; i < this.keys.length; i++) {
            this.keyValuePair = new KeyValuePairDTO_1.KeyValuePairDTO();
            this.keyValuePair.keys = this.keys[i];
            this.keyValuePair.value = this.values[i];
            this.addToCartDTO.keyValuePairDtoArray.push(this.keyValuePair);
            ;
        }
        this.addToCartDTO.customerId = this.user.Id;
        this.addToCartDTO.productId = this.productId;
        this.addToCartDTO.shoppingCartTypeId = 1;
        this.addToCartDTO.quantity = 1;
        this._shoppingCartService.addToCart(this.addToCartDTO).subscribe(function (a) {
            if (a.success == true) {
                _this.router.navigate(['/app/cart']);
            }
            else {
                console.log(a);
                jQuery('#addToCartErrors').show();
                _this.errors = a.message;
            }
        });
    };
    ProductDetail.prototype.onWishList = function () {
        var _this = this;
        jQuery('#addToCartErrors').hide();
        this.addToCartDTO = new AddToCartDTO_1.AddToCartDTO();
        this.addToCartDTO.customerId = this.user.Id;
        this.addToCartDTO.productId = this.productId;
        this.addToCartDTO.shoppingCartTypeId = 2;
        this.addToCartDTO.quantity = 1;
        this._shoppingCartService.addToCart(this.addToCartDTO).subscribe(function (a) {
            if (a.success == true) {
                console.log('Added to Wish List');
            }
            else {
                console.log(a);
                jQuery('#addToCartErrors').show();
                _this.errors = a.message;
            }
        });
    };
    ProductDetail = __decorate([
        core_1.Component({
            selector: 'product-detail',
            template: __webpack_require__("./src/app/productdetail/productdetail.template.html"),
            providers: [ProductDetailsService_1.ProductDetailsService, ShoppingCartService_1.ShoppingCartService],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof ProductDetailsService_1.ProductDetailsService !== 'undefined' && ProductDetailsService_1.ProductDetailsService) === 'function' && _b) || Object, (typeof (_c = typeof ShoppingCartService_1.ShoppingCartService !== 'undefined' && ShoppingCartService_1.ShoppingCartService) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object])
    ], ProductDetail);
    return ProductDetail;
    var _a, _b, _c, _d;
}());
exports.ProductDetail = ProductDetail;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/productdetail/productdetail.module.ts":
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
var productdetail_component_1 = __webpack_require__("./src/app/productdetail/productdetail.component.ts");
exports.routes = [
    { path: '', component: productdetail_component_1.ProductDetail, pathMatch: 'full' }
];
var ProductDetailModule = (function () {
    function ProductDetailModule() {
    }
    ProductDetailModule.routes = exports.routes;
    ProductDetailModule = __decorate([
        core_1.NgModule({
            declarations: [
                productdetail_component_1.ProductDetail
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductDetailModule);
    return ProductDetailModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductDetailModule;


/***/ },

/***/ "./src/app/productdetail/productdetail.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"main-section\">\r\n    <div class=\"container\">\r\n        \r\n        <div class=\"section-main detail-page\">\r\n            <div class=\"prod-detail-top clearfix\">\r\n                <div class=\"prod-zoom\">\r\n                    <div id=\"zoom_prod\" class=\"zoom-main\" [ngStyle]=\"{'background-image': 'url(' + mainimage + ')'}\" imageZoom=\"zoomedImageSrc\" [attr.data-zoom-image]=\"mainimage\">\r\n                        <span class=\"tag medium\"><i class=\"fa fa-arrows-alt\"></i>Mouseover to zoom image</span>\r\n\t\t\t\t\t\t<div class=\"detail-discount-tag\" *ngIf=\"discountpercentage!=0\"><p>-{{discountpercentage}}%</p></div>\r\n                    </div>\r\n                    <ul id=\"gallery-zoom\" class=\"thumbnails clearfix\">\r\n                        \r\n                        <li *ngFor=\"let img of productimages\">\r\n                            <a (click)=\"changeimage(img.FullSizeImageUrl)\" id=\"toprevent\" [attr.data-image]=\"img.ImageUrl\"  [attr.data-zoom-image]=\"img.ImageUrl\">\r\n                                <div id=\"zoom_prod\" class=\"thumb\" [ngStyle]=\"{'background-image': 'url(' + img.ImageUrl + ')'}\">\r\n                                </div>\r\n                              \r\n                            </a>\r\n                        </li>\r\n                        \r\n                    </ul>\r\n                </div>\r\n                <div class=\"detail-content\">\r\n                    <h2 class=\"medium\">{{producttitle}}</h2>\r\n                    <div class=\"star-rating star-3\"></div> <div class=\"rating-count medium\">(45)</div>\r\n                    <div class=\"price\">\r\n                        <span class=\"now medium\"> {{productprice}} </span><span class=\"texxt currency\">USD</span>\r\n                        <del class=\"medium\">{{oldprice}}</del>\r\n                        \r\n                    </div>\r\n                   \r\n                    \r\n                    <div class=\"selections\">\r\n                        <ul class=\"clearfix\">\r\n                            <li *ngFor=\"let productAttribute of ProductAttributes\">\r\n                                <div class=\"fancy_select select-category\">\r\n                                    <div class=\"select_triger\">\r\n                                        <span class=\"text medium\">{{productAttribute.Name}}</span>\r\n                                        <i class=\"fa fa-angle-down\"></i>\r\n                                    </div>\r\n                                    <div class=\"select_options\">\r\n                                       \r\n                                        <span  *ngFor=\"let value of productAttribute.Values\" (click)=\"makeKeyValue(productAttribute.Id,value.Id)\">{{value.Name}}</span>\r\n                                        \r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                           \r\n                        </ul>\r\n                        \r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div id=\"addToCartErrors\" class=\"error\">\r\n                            <label *ngFor=\"let error of errors\" class=\"texxt error-width\">{{error}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"prod-btns clearfix\">\r\n                        <a class=\"buy cart-btn medium\" (click)=\"onBuyNow()\"><img src=\"assets/img/images/thumb_03.png\">&nbsp;&nbsp;&nbsp;Buy</a>\r\n                        <a class=\"save cart-btn medium\" (click)=\"onWishList()\"><img src=\"assets/img/images/thumb_07.png\">&nbsp;&nbsp;&nbsp;Save</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"prod-detail-bottom\">\r\n                <div class=\"tabs-wrapper detail-tabs\">\r\n                    <ul class=\"tabs clearfix semibold\">\r\n                        <li class=\"active\"><a href=\"#tab1\">Overview</a></li>\r\n                        <li><a href=\"#tab2\">Related Products</a></li>\r\n                        <li><a href=\"#tab3\">Description</a></li>\r\n                        <li><a href=\"#tab4\">Ratings</a></li>\r\n                        <li><a href=\"#tab5\">Store Ratings</a></li>\r\n                        <li><a href=\"#tab6\">Shipping</a></li>\r\n                    </ul>\r\n                    <div class=\"tab-panel\">\r\n                        <div id=\"tab1\" class=\"tab-pane active\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Overview</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"tab-overview clearfix\">\r\n                                    <div class=\"review\">\r\n                                        <div class=\"add-review clearfix\">\r\n                                            <h4>add a review</h4>\r\n                                            <div class=\"star-rating add_review_stars\"></div>\r\n                                            <textarea placeholder=\"Max 250 characters...\"></textarea>\r\n                                            <button class=\"btn btn-blue submit\">Submit Review</button>\r\n                                        </div>\r\n                                        <div class=\"prod-reviews small clearfix\">\r\n                                            <h4>recent reviews</h4>\r\n                                            <a class=\"showall\" href=\"#tab4\">VIEW ALL</a>\r\n                                            <div class=\"clearfix\"></div>\r\n                                            <div class=\"unit-wrapper\">\r\n                                                <div class=\"review-unit\">\r\n                                                    <div class=\"star-rating star-3\"></div>\r\n                                                    <h5 class=\"name\">Michael Gaston</h5>\r\n                                                    <p>Got it before delivery date</p>\r\n                                                </div>\r\n                                                <div class=\"review-unit\">\r\n                                                    <div class=\"star-rating star-3\"></div>\r\n                                                    <h5 class=\"name\">Dylan Willingham</h5>\r\n                                                    <p>Really great jacket took a little while to get here but definitely worth it</p>\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"arrival\">\r\n                                        <ul class=\"text-list\">\r\n                                            <li>\r\n                                                <span class=\"text\">estimated arrival</span>\r\n                                                <span class=\"text1\">30 - 40 days</span>\r\n                                            </li>\r\n                                            <li>\r\n                                                <span class=\"text\">shipping</span>\r\n                                                <span class=\"text1\">$ 2.00</span>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab2\" class=\"tab-pane \">\r\n                            <a href=\"#\" class=\"accorTrigger\">Related Products</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"products-wrapper grid-4 products clearfix related\">\r\n                                   \r\n\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    \r\n                                   \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab3\" class=\"tab-pane\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Description</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"prod-description\">\r\n                                    <h4>Description</h4>\r\n                                    <span [innerHtml]=\"productdescription\"></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab4\" class=\"tab-pane\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Ratings</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"total-ratings\">\r\n                                    <div class=\"main\">\r\n                                        <div class=\"star-rating star-4\"></div>\r\n                                        <span class=\"count\">(245)</span>\r\n                                    </div>\r\n                                    <ul>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-5\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-4\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-3\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-2\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"68\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 68%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-1\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                \r\n                                <div class=\"prod-reviews full clearfix\">\r\n                                    <div class=\"unit-wrapper\">\r\n                                        <div class=\"reviews-scroller\">\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Michael Gaston</h5>\r\n                                            <p>Came in on time, it's perfect charges both controllers just fine. The box was damaged when it arrived but the item itself was in perfect condition and works great.</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Dylan Willingham</h5>\r\n                                            <p>I still never got this item..i got a email asking how i liked this product but no product..so after\r\nasking about my order they just went ahead and refunded it..</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Michael Gaston</h5>\r\n                                            <p>Came in on time, it's perfect charges both controllers just fine. The box was damaged when it\r\narrived but the item itself was in perfect condition and works great.</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Dylan Willingham</h5>\r\n                                            <p>I still never got this item..i got a email asking how i liked this product but no product..so after\r\nasking about my order they just went ahead and refunded it..</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab5\" class=\"tab-pane\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Store Ratings</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"total-ratings store-rating clearfix\">\r\n                                    <div class=\"view-stores\">\r\n                                        <figure class=\"storeimg\" style=\"background:url(assets/img/images/store.png)\"></figure>\r\n                                        <a class=\"\" href=\"#\">View Store</a>\r\n                                    </div>\r\n                                    <div class=\"ratings-wraper\">\r\n                                        <div class=\"main\">\r\n                                            <p class=\"store-name\">Lulutops</p>\r\n                                            <div class=\"star-rating star-4\"></div>\r\n                                            <span class=\"count\">(245)</span>\r\n                                        </div>\r\n                                        <ul>\r\n                                            <li>\r\n                                                <div class=\"rating\">\r\n                                                    <div class=\"star-rating star-5\"></div>\r\n                                                </div>\r\n                                                <div class=\"progress\">\r\n                                                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\r\n                                                    <span class=\"sr-only\">40% Complete (success)</span>\r\n                                                  </div>\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"rating\">\r\n                                                    <div class=\"star-rating star-4\"></div>\r\n                                                </div>\r\n                                                <div class=\"progress\">\r\n                                                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\r\n                                                    <span class=\"sr-only\">40% Complete (success)</span>\r\n                                                  </div>\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"rating\">\r\n                                                    <div class=\"star-rating star-3\"></div>\r\n                                                </div>\r\n                                                <div class=\"progress\">\r\n                                                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\r\n                                                    <span class=\"sr-only\">40% Complete (success)</span>\r\n                                                  </div>\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"rating\">\r\n                                                    <div class=\"star-rating star-2\"></div>\r\n                                                </div>\r\n                                                <div class=\"progress\">\r\n                                                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"68\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 68%\">\r\n                                                    <span class=\"sr-only\">40% Complete (success)</span>\r\n                                                  </div>\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"rating\">\r\n                                                    <div class=\"star-rating star-1\"></div>\r\n                                                </div>\r\n                                                <div class=\"progress\">\r\n                                                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%\">\r\n                                                    <span class=\"sr-only\">40% Complete (success)</span>\r\n                                                  </div>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab6\" class=\"tab-pane \">\r\n                            <a href=\"#\" class=\"accorTrigger\">Shipping</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"shipping-detail\">\r\n                                    <h4>Shipping details</h4>\r\n                                    <ul class=\"detail\">\r\n                                        <li><span class=\"title\">Estimated shipping</span><span class=\"values\">$ 4.99</span></li>\r\n                                        <li><span class=\"title\">Availability</span><span class=\"values\">Ships to United States and 32 other countries</span></li>\r\n                                        <li><span class=\"title\">Estimated arrival</span><span class=\"values\">17 - 23 days</span></li>\r\n                                        <li><span class=\"title\">Return policy</span><span class=\"values\">You may return all products within 30 days of delivery.\r\n                                            </span><a class=\"more-detail\" href=\"#\">More Details</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>"

/***/ },

/***/ "./src/app/services/ProductDetailsService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var UrlService_1 = __webpack_require__("./src/app/services/UrlService.ts");
var ProductDetailsService = (function () {
    function ProductDetailsService(http) {
        this.http = http;
        this.urlService = new UrlService_1.UrlService();
    }
    ProductDetailsService.prototype.getProductDetails = function (Id) {
        return this.http.get(this.urlService.baseUrl + 'api/default/ProductDetails/?productId=' + Id)
            .map(function (res) { return res.json(); });
    };
    ProductDetailsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], ProductDetailsService);
    return ProductDetailsService;
    var _a;
}());
exports.ProductDetailsService = ProductDetailsService;


/***/ }

});
//# sourceMappingURL=18.map