webpackJsonpac__name_([17],{

/***/ "./src/app/enums/StatusCodeEnum.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
(function (StatusCodeEnum) {
    StatusCodeEnum[StatusCodeEnum["SUCCESS"] = 200] = "SUCCESS";
    StatusCodeEnum[StatusCodeEnum["FAILURE"] = 400] = "FAILURE";
})(exports.StatusCodeEnum || (exports.StatusCodeEnum = {}));
var StatusCodeEnum = exports.StatusCodeEnum;


/***/ },

/***/ "./src/app/home/Home.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
/**
 * Home Component typescript file
 */
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var ProductService_1 = __webpack_require__("./src/app/services/ProductService.ts");
var ProductDetailsService_1 = __webpack_require__("./src/app/services/ProductDetailsService.ts");
var StatusCodeEnum_1 = __webpack_require__("./src/app/enums/StatusCodeEnum.ts");
var ng2_modal_1 = __webpack_require__("./node_modules/ng2-modal/index.js");
var KeyValuePairDTO_1 = __webpack_require__("./src/app/models/KeyValuePairDTO.ts");
var AddToCartDTO_1 = __webpack_require__("./src/app/models/AddToCartDTO.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var ShoppingCartService_1 = __webpack_require__("./src/app/services/ShoppingCartService.ts");
var Home = (function () {
    /**
     * end
     */
    function Home(_productService, _productdetail, router, _shoppingCartService) {
        var _this = this;
        this._productService = _productService;
        this._productdetail = _productdetail;
        this._shoppingCartService = _shoppingCartService;
        this.topCategories = [];
        this.dropdownCategories = [];
        /*
        productModal
        */
        this.keys = [];
        this.values = [];
        this.productId = 0;
        this.productimages = [];
        /*
        end
        */
        /*
        Pagination Attributes
        * */
        this.pageNumber = 0;
        this.pageSize = 25;
        this.categoryId = -1;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.router = router;
        this._productService.getAllCategories().subscribe(function (a) {
            if (a.code == StatusCodeEnum_1.StatusCodeEnum.SUCCESS) {
                _this.categories = a.data;
                for (var i = 0; i < _this.categories.length; i++) {
                    if (i < 7) {
                        _this.topCategories.push(_this.categories[i]);
                    }
                    else {
                        _this.dropdownCategories.push(_this.categories[i]);
                    }
                }
            }
        });
        this.populateProducts(this.categoryId, 0, this.pageSize);
    }
    Home.prototype.populateProducts = function (categoryId, pageNumber, pageSize) {
        var _this = this;
        this._productService.getAllProducts(categoryId, pageNumber, pageSize).subscribe(function (a) {
            if (a.code == StatusCodeEnum_1.StatusCodeEnum.SUCCESS) {
                if (pageNumber == 0) {
                    if (a.data.length == 0) {
                        jQuery('.no-products').show();
                        _this.products = a.data;
                    }
                    else {
                        jQuery('.no-products').hide();
                        _this.products = a.data;
                    }
                }
                else {
                    if (a.data.length != 0) {
                        for (var i = 0; i < a.data.length; i++) {
                            _this.products.push(a.data[i]);
                        }
                    }
                    else {
                        jQuery('.loader-products').hide();
                    }
                }
            }
        });
    };
    Home.prototype.onCategoryClick = function (categoryId) {
        this.categoryId = categoryId;
        this.pageNumber = 0;
        this.populateProducts(this.categoryId, 0, this.pageSize);
    };
    Home.prototype.makeKeyValue = function (key, value) {
        this.keys.push(key);
        this.values.push(value);
    };
    Home.prototype.onBuyNow = function () {
        var _this = this;
        jQuery('#addToCartErrors').hide();
        this.addToCartDTO = new AddToCartDTO_1.AddToCartDTO();
        for (var i = 0; i < this.keys.length; i++) {
            this.keyValuePair = new KeyValuePairDTO_1.KeyValuePairDTO();
            this.keyValuePair.keys = this.keys[i];
            this.keyValuePair.value = this.values[i];
            this.addToCartDTO.keyValuePairDtoArray.push(this.keyValuePair);
        }
        this.user = JSON.parse(localStorage.getItem('user'));
        this.addToCartDTO.customerId = this.user.Id;
        this.addToCartDTO.productId = this.productId;
        this.addToCartDTO.shoppingCartTypeId = 1;
        this.addToCartDTO.quantity = 1;
        this._shoppingCartService.addToCart(this.addToCartDTO).subscribe(function (a) {
            if (a.success == true) {
                jQuery("body").css('overflow', 'scroll');
                _this.router.navigate(['/app/cart']);
            }
            else {
                console.log(a);
                jQuery('#addToCartErrors').show();
                _this.errors = a.message;
            }
        });
    };
    Home.prototype.rightClick = function (event, productId) {
        var _this = this;
        console.log(event);
        if (event.which == 3) {
            window.open('#/app/product-detail?productId=' + productId, '_newtab'); // To open in new tab
        }
        else {
            console.log(productId);
            this._productdetail.getProductDetails(productId).subscribe(function (a) {
                _this.product = a.data;
                _this.productId = productId;
                _this.productdescription = _this.product.FullDescription;
                _this.productprice = _this.product.ProductPrice.PriceValue;
                _this.producttitle = _this.product.Name;
                _this.productimages = _this.product.PictureModels;
                _this.oldprice = _this.product.ProductPrice.OldPrice;
                _this.mainimage = _this.productimages[0].FullSizeImageUrl;
                _this.ProductAttributes = _this.product.ProductAttributes;
                console.log(_this.mainimage);
                if (_this.oldprice == 0 || _this.oldprice == null) {
                    _this.discountpercentage = 0;
                }
                else {
                }
                jQuery(".prod-detail-modal").fadeIn();
                jQuery("body").css('overflow', 'hidden');
            });
        }
    };
    Home.prototype.onWishList = function () {
        var _this = this;
        jQuery('#addToCartErrors').hide();
        this.addToCartDTO = new AddToCartDTO_1.AddToCartDTO();
        this.user = JSON.parse(localStorage.getItem('user'));
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
    Home.prototype.ngOnInit = function () {
        jQuery("body").on("click", ".close-modal", function (e) {
            var $this = jQuery(this);
            e.preventDefault();
            jQuery(this).parents(".prod-detail-modal").fadeOut();
            jQuery("body").css('overflow', 'scroll');
            jQuery(".zoomContainer").html("");
        });
    };
    Home.prototype.onWindowScroll = function () {
        //In chrome and some browser scroll is given to body tag
        var pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
        var max = document.documentElement.scrollHeight;
        // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
        if (pos == max) {
            console.log('Pagination Called');
            this.pageNumber = this.pageNumber + 1;
            this.populateProducts(this.categoryId, this.pageNumber, this.pageSize);
        }
    };
    __decorate([
        core_1.ViewChild('productModal'), 
        __metadata('design:type', (typeof (_a = typeof ng2_modal_1.Modal !== 'undefined' && ng2_modal_1.Modal) === 'function' && _a) || Object)
    ], Home.prototype, "productModal", void 0);
    __decorate([
        core_1.HostListener("window:scroll", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Home.prototype, "onWindowScroll", null);
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            styles: [__webpack_require__("./src/app/home/home.component.scss")],
            template: __webpack_require__("./src/app/home/home.template.html"),
            providers: [ProductService_1.ProductService, ProductDetailsService_1.ProductDetailsService, ShoppingCartService_1.ShoppingCartService],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof ProductService_1.ProductService !== 'undefined' && ProductService_1.ProductService) === 'function' && _b) || Object, (typeof (_c = typeof ProductDetailsService_1.ProductDetailsService !== 'undefined' && ProductDetailsService_1.ProductDetailsService) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object, (typeof (_e = typeof ShoppingCartService_1.ShoppingCartService !== 'undefined' && ShoppingCartService_1.ShoppingCartService) === 'function' && _e) || Object])
    ], Home);
    return Home;
    var _a, _b, _c, _d, _e;
}());
exports.Home = Home;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/home/home.component.scss":
/***/ function(module, exports) {

module.exports = ".no-products {\n  text-align: center;\n  font-size: 18px;\n  color: #34bac5;\n  display: none;\n  text-decoration: underline; }\n\n.loader-products {\n  background: url(assets/img/loader.svg) no-repeat center center;\n  height: 100px;\n  display: block; }\n"

/***/ },

/***/ "./src/app/home/home.module.ts":
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
var ng2_modal_1 = __webpack_require__("./node_modules/ng2-modal/index.js");
var Home_component_1 = __webpack_require__("./src/app/home/Home.component.ts");
exports.routes = [
    { path: '', component: Home_component_1.Home, pathMatch: 'full' }
];
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule.routes = exports.routes;
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [
                Home_component_1.Home
            ],
            imports: [
                ng2_modal_1.ModalModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeModule;


/***/ },

/***/ "./src/app/home/home.template.html":
/***/ function(module, exports) {

module.exports = "<!--========================================\r\nMain\r\n===========================================-->\r\n\r\n<!-- Main Container -->\r\n<div class=\"main-section\">\r\n    <div class=\"category-list\">\r\n        <div class=\"container-fluid\">\r\n            <a class=\"category-triger\" href=\"#\">\r\n                <i class=\"fa fa-bars\"></i>\r\n                <i class=\"fa fa-caret-down\"></i>\r\n            </a>\r\n            <ul class=\"semibold\">\r\n                <li class=\"active\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(-1)\">Featured</a></li>\r\n                <li *ngFor=\"let category of topCategories\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(category.Id)\">{{category.Name}}</a></li>\r\n                \r\n                <!--<li><a class=\"btn btn-block\" href=\"#\">MORE +</a></li>-->\r\n                <li class=\"cat-drop-triger\"><a class=\"btn btn-block\" href=\"#\">MORE +</a>\r\n                    <ul class=\"cat-dropdown semibold\">\r\n                        <li *ngFor=\"let category of dropdownCategories\"><a class=\"\" href=\"#\" (click)=\"onCategoryClick(category.Id)\">{{category.Name}}</a></li>\r\n                    </ul>    \r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"tags-list\">\r\n        <div class=\"container-fluid\">\r\n            <a class=\"category-triger\" href=\"#\">\r\n                <i class=\"fa fa-bars\"></i>\r\n                <i class=\"fa fa-caret-down\"></i>\r\n            </a>\r\n            <div class=\"filter-icon\"><a class=\"icon\" href=\"#\"><img src=\"assets/img/images/filterIcon_03.png\"></a></div>\r\n            <ul class=\"texxt hash-tags\">\r\n                <li><a class=\"\" href=\"#\">#Latest</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Phone</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n                <li><a class=\"\" href=\"#\">#Gadgets</a></li>\r\n                <li><a class=\"\" href=\"#\">#Hobbies</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n                <li><a class=\"\" href=\"#\">#Gadgets</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"products-main gif-loading\">\r\n            <div class=\"products-wrapper grid-4 products clearfix loading\">\r\n                <div class=\"product\" *ngFor=\"let product of products\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                    <div class=\"product-inner\" [ngStyle]=\"{'background-image': 'url(' + product.imageUrl + ')'}\">\r\n                        <span *ngIf=\"product.discount != 0\" class=\"discount-tag semibold\">-{{product.discount}}%</span>\r\n                    </div>\r\n                    <div class=\"product-description\">\r\n                       <span *ngIf=\"product.oldPrice != 0\" class=\"old-price medium\">$ {{product.oldPrice}}</span>\r\n                        <span class=\"new-price medium\">${{product.productPrice}}</span>\r\n                        <span *ngIf=\"product.orderCount != 0\" class=\"item-sold medium\">{{product.orderCount}}+ sold</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"semibold no-products\">\r\n                    No Products Found!\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"loader-products\">\r\n        </div>         \r\n    </div>\r\n</div>\r\n<div class=\"my-modal prod-detail-modal\">\r\n    <div class=\"modal_style\">\r\n        <div class=\"modal-inner\">\r\n        <a class=\"close-modal\" href=\"#\">Close<i class=\"fa fa-remove\"></i></a>\r\n        <div class=\"detail-page modal-view\">\r\n            <div class=\"prod-detail-top clearfix\">\r\n                <div class=\"prod-zoom\">\r\n                    <div id=\"zoom_prod\" class=\"zoom-main\" [ngStyle]=\"{'background-image': 'url(' + mainimage + ')'}\" [attr.data-zoom-image]=\"mainimage\">\r\n                        <span class=\"tag medium\"><i class=\"fa fa-arrows-alt\"></i>Mouseover to zoom image</span>\r\n\t\t\t\t\t\t<div class=\"detail-discount-tag\" *ngIf=\"discountpercentage!=0\"><p>-70%</p></div>\r\n                    </div>\r\n                    <ul id=\"gallery-zoom\" class=\"thumbnails clearfix\">\r\n                        \r\n                        <li *ngFor=\"let img of productimages\">\r\n                            <a (click)=\"changeimage(img.FullSizeImageUrl)\" id=\"toprevent\" [attr.data-image]=\"img.ImageUrl\" [attr.data-zoom-image]=\"img.ImageUrl\">\r\n                                <div id=\"zoom_prod\" class=\"thumb\" [ngStyle]=\"{'background-image': 'url(' + img.ImageUrl + ')'}\">\r\n                                </div>\r\n                              \r\n                            </a>\r\n                        </li>\r\n                        \r\n                    </ul>\r\n                </div>\r\n                <div class=\"detail-content\">\r\n                    <h2 class=\"medium\">{{producttitle}}</h2>\r\n                    <div class=\"star-rating star-3\"></div> <div class=\"rating-count medium\">(45)</div>\r\n                    <div class=\"price\">\r\n                        <span class=\"now medium\"> {{productprice}} </span><span class=\"texxt currency\">USD</span>\r\n                        <del class=\"medium\">{{oldprice}}</del>\r\n                        \r\n                    </div>\r\n                   \r\n                    \r\n                    <div class=\"selections\">\r\n                        <ul class=\"clearfix\">\r\n                            <li *ngFor=\"let productAttribute of ProductAttributes\">\r\n                                <div class=\"fancy_select select-category\">\r\n                                    <div class=\"select_triger\">\r\n                                        <span class=\"text medium\">{{productAttribute.Name}}</span>\r\n                                        <i class=\"fa fa-angle-down\"></i>\r\n                                    </div>\r\n                                    <div class=\"select_options\">\r\n                                       \r\n                                        <span *ngFor=\"let value of productAttribute.Values\" (click)=\"makeKeyValue(productAttribute.Id,value.Id)\">{{value.Name}}</span>\r\n                                        \r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                           \r\n                        </ul>\r\n                        \r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div id=\"addToCartErrors\" class=\"error\">\r\n                            <label *ngFor=\"let error of errors\" class=\"texxt error-width\">{{error}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"prod-btns clearfix\">\r\n                        <a class=\"buy cart-btn medium\" (click)=\"onBuyNow()\"><img src=\"assets/img/images/thumb_03.png\">&nbsp;&nbsp;&nbsp;Buy</a>\r\n                        <a class=\"save cart-btn medium\" (click)=\"onWishList()\"><img src=\"assets/img/images/thumb_07.png\">&nbsp;&nbsp;&nbsp;Save</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"prod-detail-bottom\">\r\n                <div class=\"tabs-wrapper detail-tabs\">\r\n                    <ul class=\"tabs clearfix semibold\">\r\n                        <li class=\"active\"><a href=\"#tab1\">Overview</a></li>\r\n                        <li><a href=\"#tab2\">Related Products</a></li>\r\n                        <li><a href=\"#tab3\">Description</a></li>\r\n                        <li><a href=\"#tab4\">Ratings</a></li>\r\n                        <li><a href=\"#tab5\">Store Ratings</a></li>\r\n                        <li><a href=\"#tab6\">Shipping</a></li>\r\n                    </ul>\r\n                    <div class=\"tab-panel\">\r\n                        <div id=\"tab1\" class=\"tab-pane active\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Overview</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"tab-overview clearfix\">\r\n                                    <div class=\"review\">\r\n                                        <div class=\"add-review clearfix\">\r\n                                            <h4>add a review</h4>\r\n                                            <div class=\"star-rating add_review_stars\"></div>\r\n                                            <textarea placeholder=\"Max 250 characters...\"></textarea>\r\n                                            <button class=\"btn btn-blue submit\">Submit Review</button>\r\n                                        </div>\r\n                                        <div class=\"prod-reviews small clearfix\">\r\n                                            <h4>recent reviews</h4>\r\n                                            <a class=\"showall\" href=\"#tab4\">VIEW ALL</a>\r\n                                            <div class=\"clearfix\"></div>\r\n                                            <div class=\"unit-wrapper\">\r\n                                                <div class=\"review-unit\">\r\n                                                    <div class=\"star-rating star-3\"></div>\r\n                                                    <h5 class=\"name\">Michael Gaston</h5>\r\n                                                    <p>Got it before delivery date</p>\r\n                                                </div>\r\n                                                <div class=\"review-unit\">\r\n                                                    <div class=\"star-rating star-3\"></div>\r\n                                                    <h5 class=\"name\">Dylan Willingham</h5>\r\n                                                    <p>Really great jacket took a little while to get here but definitely worth it</p>\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"arrival\">\r\n                                        <ul class=\"text-list\">\r\n                                            <li>\r\n                                                <span class=\"text\">estimated arrival</span>\r\n                                                <span class=\"text1\">30 - 40 days</span>\r\n                                            </li>\r\n                                            <li>\r\n                                                <span class=\"text\">shipping</span>\r\n                                                <span class=\"text1\">$ 2.00</span>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab2\" class=\"tab-pane \">\r\n                            <a href=\"#\" class=\"accorTrigger\">Related Products</a>\r\n                            <div class=\"accorContent\">\r\n                                <!--<div class=\"products-wrapper grid-4 products clearfix related\">\r\n                                    <div class=\"products-scroller\">\r\n                                    <div class=\"product\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img2.jpg)\">\r\n                                            <div class=\"time-left\">\r\n                                                <span class=\"text\">Hourly Deal</span>\r\n                                                <ul class=\"countdown clearfix\">\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"minutes\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"seconds\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                            <span class=\"discount-tag\">-10%</span>\r\n                                            <span class=\"item-left\">only 10 left</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <div class=\"time-left\">\r\n                                                <span class=\"text\">Hourly Deal</span>\r\n                                                <ul class=\"countdown clearfix\">\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"minutes\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"seconds\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                            <span class=\"discount-tag\">-10%</span>\r\n                                            <span class=\"item-left\">only 10 left</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img2.jpg)\">\r\n                                            <div class=\"time-left\">\r\n                                                <span class=\"text\">Hourly Deal</span>\r\n                                                <ul class=\"countdown clearfix\">\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"minutes\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"seconds\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                            <span class=\"discount-tag\">-10%</span>\r\n                                            <span class=\"item-left\">only 10 left</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <div class=\"time-left\">\r\n                                                <span class=\"text\">Hourly Deal</span>\r\n                                                <ul class=\"countdown clearfix\">\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"minutes\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"seconds\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                            <span class=\"discount-tag\">-10%</span>\r\n                                            <span class=\"item-left\">only 10 left</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img2.jpg)\">\r\n                                            <div class=\"time-left\">\r\n                                                <span class=\"text\">Hourly Deal</span>\r\n                                                <ul class=\"countdown clearfix\">\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"minutes\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"seconds\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                            <span class=\"discount-tag\">-10%</span>\r\n                                            <span class=\"item-left\">only 10 left</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <div class=\"time-left\">\r\n                                                <span class=\"text\">Hourly Deal</span>\r\n                                                <ul class=\"countdown clearfix\">\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"minutes\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"seconds\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                            <span class=\"discount-tag\">-10%</span>\r\n                                            <span class=\"item-left\">only 10 left</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img2.jpg)\">\r\n                                            <div class=\"time-left\">\r\n                                                <span class=\"text\">Hourly Deal</span>\r\n                                                <ul class=\"countdown clearfix\">\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"minutes\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"seconds\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                            <span class=\"discount-tag\">-10%</span>\r\n                                            <span class=\"item-left\">only 10 left</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <div class=\"time-left\">\r\n                                                <span class=\"text\">Hourly Deal</span>\r\n                                                <ul class=\"countdown clearfix\">\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"minutes\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                    <li> \r\n                                                        <div class=\"text\">\r\n                                                            <span class=\"seconds\">00</span>\r\n                                                        </div>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                            <span class=\"discount-tag\">-10%</span>\r\n                                            <span class=\"item-left\">only 10 left</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>-->\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab3\" class=\"tab-pane\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Description</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"prod-description\">\r\n                                    <h4>Description</h4>\r\n                                    <span [innerHtml]=\"productdescription\"></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab4\" class=\"tab-pane\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Ratings</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"total-ratings\">\r\n                                    <div class=\"main\">\r\n                                        <div class=\"star-rating star-4\"></div>\r\n                                        <span class=\"count\">(245)</span>\r\n                                    </div>\r\n                                    <ul>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-5\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-4\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-3\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-2\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"68\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 68%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-1\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                \r\n                                <div class=\"prod-reviews full clearfix\">\r\n                                    <div class=\"unit-wrapper\">\r\n                                        <div class=\"reviews-scroller\">\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Michael Gaston</h5>\r\n                                            <p>Came in on time, it's perfect charges both controllers just fine. The box was damaged when it\r\narrived but the item itself was in perfect condition and works great.</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Dylan Willingham</h5>\r\n                                            <p>I still never got this item..i got a email asking how i liked this product but no product..so after\r\nasking about my order they just went ahead and refunded it..</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Michael Gaston</h5>\r\n                                            <p>Came in on time, it's perfect charges both controllers just fine. The box was damaged when it\r\narrived but the item itself was in perfect condition and works great.</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Dylan Willingham</h5>\r\n                                            <p>I still never got this item..i got a email asking how i liked this product but no product..so after\r\nasking about my order they just went ahead and refunded it..</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab5\" class=\"tab-pane\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Store Ratings</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"total-ratings store-rating clearfix\">\r\n                                    <div class=\"view-stores\">\r\n                                        <figure class=\"storeimg\" style=\"background:url(assets/img/store-icon.png)\"></figure>\r\n                                        <a class=\"\" href=\"#\">View Stores</a>\r\n                                    </div>\r\n                                    <div class=\"ratings-wraper\">\r\n                                        <div class=\"main\">\r\n                                            <span class=\"store-name\">Lulutops</span>\r\n                                            <div class=\"star-rating star-4\"></div>\r\n                                            <span class=\"count\">(245)</span>\r\n                                        </div>\r\n                                        <ul>\r\n                                            <li>\r\n                                                <div class=\"rating\">\r\n                                                    <div class=\"star-rating star-5\"></div>\r\n                                                </div>\r\n                                                <div class=\"progress\">\r\n                                                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\r\n                                                    <span class=\"sr-only\">40% Complete (success)</span>\r\n                                                  </div>\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"rating\">\r\n                                                    <div class=\"star-rating star-4\"></div>\r\n                                                </div>\r\n                                                <div class=\"progress\">\r\n                                                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\r\n                                                    <span class=\"sr-only\">40% Complete (success)</span>\r\n                                                  </div>\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"rating\">\r\n                                                    <div class=\"star-rating star-3\"></div>\r\n                                                </div>\r\n                                                <div class=\"progress\">\r\n                                                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\r\n                                                    <span class=\"sr-only\">40% Complete (success)</span>\r\n                                                  </div>\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"rating\">\r\n                                                    <div class=\"star-rating star-2\"></div>\r\n                                                </div>\r\n                                                <div class=\"progress\">\r\n                                                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"68\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 68%\">\r\n                                                    <span class=\"sr-only\">40% Complete (success)</span>\r\n                                                  </div>\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"rating\">\r\n                                                    <div class=\"star-rating star-1\"></div>\r\n                                                </div>\r\n                                                <div class=\"progress\">\r\n                                                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%\">\r\n                                                    <span class=\"sr-only\">40% Complete (success)</span>\r\n                                                  </div>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                                <div class=\"prod-reviews full clearfix\">\r\n                                    <div class=\"unit-wrapper\">\r\n                                        <div class=\"reviews-scroller\">\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Michael Gaston</h5>\r\n                                            <p>Came in on time, it's perfect charges both controllers just fine. The box was damaged when it\r\narrived but the item itself was in perfect condition and works great.</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Dylan Willingham</h5>\r\n                                            <p>I still never got this item..i got a email asking how i liked this product but no product..so after\r\nasking about my order they just went ahead and refunded it..</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Michael Gaston</h5>\r\n                                            <p>Came in on time, it's perfect charges both controllers just fine. The box was damaged when it\r\narrived but the item itself was in perfect condition and works great.</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Dylan Willingham</h5>\r\n                                            <p>I still never got this item..i got a email asking how i liked this product but no product..so after\r\nasking about my order they just went ahead and refunded it..</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab6\" class=\"tab-pane \">\r\n                            <a href=\"#\" class=\"accorTrigger\">Shipping</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"shipping-detail\">\r\n                                    <h4>Shipping details</h4>\r\n                                    <ul class=\"detail\">\r\n                                        <li><span class=\"title\">Estimated shipping</span>$ 4.99</li>\r\n                                        <li><span class=\"title\">Availability</span>Ships to United States and 32 other countries</li>\r\n                                        <li><span class=\"title\">Estimated arrival</span>17 - 23 days</li>\r\n                                        <li><span class=\"title\">Return policy</span>You may return all products within 30 days of delivery.\r\n                                            <a class=\"more-detail\" href=\"#\">More Details</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ },

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


/***/ },

/***/ "./src/app/services/ProductService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var UrlService_1 = __webpack_require__("./src/app/services/UrlService.ts");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.urlService = new UrlService_1.UrlService();
    }
    ProductService.prototype.getAllCategories = function () {
        return this.http.get(this.urlService.baseUrl + 'api/default/GetAllCategoriesDisplayedOnHomePage')
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getAllProducts = function (Id, pageNumber, pageSize) {
        return this.http.get(this.urlService.baseUrl + 'api/default/GetAllProductsDisplayedOnHomePage?categoryId=' + Id + '&pageNumber=' + pageNumber + '&pageSize=' + pageSize)
            .map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], ProductService);
    return ProductService;
    var _a;
}());
exports.ProductService = ProductService;


/***/ }

});
//# sourceMappingURL=17.map