webpackJsonpac__name_([18],{

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

/***/ "./src/app/models/AddReviewModel.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var AddReviewModel = (function () {
    function AddReviewModel() {
    }
    return AddReviewModel;
}());
exports.AddReviewModel = AddReviewModel;


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

/***/ "./src/app/productdetail/productdetail.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {"use strict";
/**
 * Home Component typescript file
 */
var StatusCodeEnum_1 = __webpack_require__("./src/app/enums/StatusCodeEnum.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var core_2 = __webpack_require__("./node_modules/@angular/core/index.js");
var ProductService_1 = __webpack_require__("./src/app/services/ProductService.ts");
var ProductDetailsService_1 = __webpack_require__("./src/app/services/ProductDetailsService.ts");
var ReviewsRatingsService_1 = __webpack_require__("./src/app/services/ReviewsRatingsService.ts");
var ShoppingCartService_1 = __webpack_require__("./src/app/services/ShoppingCartService.ts");
var KeyValuePairDTO_1 = __webpack_require__("./src/app/models/KeyValuePairDTO.ts");
var AddReviewModel_1 = __webpack_require__("./src/app/models/AddReviewModel.ts");
var AddToCartDTO_1 = __webpack_require__("./src/app/models/AddToCartDTO.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var ng2_modal_1 = __webpack_require__("./node_modules/ng2-modal/index.js");
var ng2_facebook_sdk_1 = __webpack_require__("./node_modules/ng2-facebook-sdk/dist/esm/index.js");
var ProductDetail = (function () {
    function ProductDetail(activatedRoute, _productdetail, fb, _productService, _shoppingCartService, _reviewsAndRatingsService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._productdetail = _productdetail;
        this.fb = fb;
        this._productService = _productService;
        this._shoppingCartService = _shoppingCartService;
        this._reviewsAndRatingsService = _reviewsAndRatingsService;
        this.keys = [];
        this.values = [];
        this.productId = 0;
        this.productimages = [];
        this.ProductAttributes = [];
        this.productReviewList = [];
        this.productRecentReviewList = [];
        this.rating = 0;
        this.router = router;
        this.isReviewedNow = 0;
        this.addReviewModel = new AddReviewModel_1.AddReviewModel();
        this.user = JSON.parse(localStorage.getItem('user'));
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.productId = params['productId'];
            _this.categoryId = params['categoryId'];
            //Here you will call service and populate the model
            _this._productdetail.getProductDetails(_this.productId, _this.user.Id).subscribe(function (a) {
                console.log(a);
                //alert();
                _this.product = a.data.productDetailsModel;
                if (_this.user.role == "Guests") {
                    _this.isAllowedReview = 0;
                }
                else
                    _this.isAllowedReview = a.data.isAllowedForReview;
                _this.productdescription = _this.product.FullDescription;
                _this.populateRelatedProducts(_this.categoryId, 0, 25);
                _this.productprice = _this.product.ProductPrice.Price;
                _this.producttitle = _this.product.Name;
                _this.productimages = _this.product.PictureModels;
                _this.oldprice = _this.product.ProductPrice.OldPrice;
                _this.mainimage = _this.productimages[0].FullSizeImageUrl;
                _this.ProductAttributes = _this.product.ProductAttributes;
                console.log(_this.product.ProductPrice.OldPrice);
                _this.discountpercentage = a.data.discountPercentage;
                _this.reviewDescription = "";
                console.log(_this.product.ProductPrice);
                var native_width = 0;
                var native_height = 0;
                jQuery(".large").css("background", "url('" + _this.mainimage + "') no-repeat");
                //Now the mousemove function
                jQuery(".magnify").mousemove(function (e) {
                    //When the user hovers on the image, the script will first calculate
                    //the native dimensions if they don't exist. Only after the native dimensions
                    //are available, the script will show the zoomed version.
                    if (!native_width && !native_height) {
                        //This will create a new image object with the same image as that in .small
                        //We cannot directly get the dimensions from .small because of the 
                        //width specified to 200px in the html. To get the actual dimensions we have
                        //created this image object.
                        var image_object = new Image();
                        image_object.src = jQuery(".small").attr("src");
                        //This code is wrapped in the .load function which is important.
                        //width and height of the object would return 0 if accessed before 
                        //the image gets loaded.
                        native_width = image_object.width;
                        native_height = image_object.height;
                    }
                    else {
                        //x/y coordinates of the mouse
                        //This is the position of .magnify with respect to the document.
                        var magnify_offset = jQuery(this).offset();
                        //We will deduct the positions of .magnify from the mouse positions with
                        //respect to the document to get the mouse positions with respect to the 
                        //container(.magnify)
                        var mx = e.pageX - magnify_offset.left;
                        var my = e.pageY - magnify_offset.top;
                        //Finally the code to fade out the glass if the mouse is outside the container
                        if (mx < jQuery(this).width() && my < jQuery(this).height() && mx > 0 && my > 0) {
                            $(".large").fadeIn(100);
                        }
                        else {
                            $(".large").fadeOut(100);
                        }
                        if ($(".large").is(":visible")) {
                            //The background position of .large will be changed according to the position
                            //of the mouse over the .small image. So we will get the ratio of the pixel
                            //under the mouse pointer with respect to the image and use that to position the 
                            //large image inside the magnifying glass
                            var rx = Math.round(mx / jQuery(".small").width() * native_width - jQuery(".large").width() / 2) * -1;
                            var ry = Math.round(my / jQuery(".small").height() * native_height - jQuery(".large").height() / 2) * -1;
                            var bgp = rx + "px " + ry + "px";
                            //Time to move the magnifying glass with the mouse
                            var px = mx - jQuery(".large").width() / 2;
                            var py = my - jQuery(".large").height() / 2;
                            //Now the glass moves with the mouse
                            //The logic is to deduct half of the glass's width and height from the 
                            //mouse coordinates to place it with its center at the mouse coordinates
                            //If you hover on the image now, you should see the magnifying glass in action
                            jQuery(".large").css({ left: px, top: py, backgroundPosition: bgp });
                        }
                    }
                });
            });
        });
        this._reviewsAndRatingsService.getReviewsAndRatings(this.productId, 0, 10).subscribe(function (data) {
            console.log(data);
            _this.reviewsRatings = data.data;
            _this.productReviewList = _this.reviewsRatings.productReviewList;
            _this.productReviewList.forEach(function (element) {
                if (element.customerName == "" || element.customerName == undefined || element.customerName == null || element.customerName.trim().length == 0) {
                    element.customerName = "Registered with Email";
                }
                if (element.imageUrl == "noimage.png") {
                    element.imageUrl = "assets/img/noimage.png";
                }
            });
            if (_this.reviewsRatings.productReviewList[0] != undefined) {
                _this.productRecentReviewList = [];
                _this.productRecentReviewList[0] = _this.reviewsRatings.productReviewList[0];
            }
            else {
                _this.productRecentReviewList = null;
            }
            _this.totalRating = _this.reviewsRatings.totalRating;
            _this.ratingAverage = _this.reviewsRatings.ratingAverage;
            console.log(_this.reviewsRatings);
        });
    }
    ProductDetail.prototype.selectRating = function (val) {
        for (var i = 1; i <= 5; i++) {
            jQuery('#st' + i).removeClass('coloredStar');
        }
        for (var i = 1; i <= val; i++) {
            jQuery('#st' + i).addClass('coloredStar');
        }
        this.rating = val;
    };
    ProductDetail.prototype.populateRelatedProducts = function (categoryId, pageNumber, pageSize) {
        var _this = this;
        this._productService.getAllProducts(categoryId, pageNumber, pageSize).subscribe(function (a) {
            if (a.code == StatusCodeEnum_1.StatusCodeEnum.SUCCESS) {
                _this.relatedProducts = a.data;
            }
        });
    };
    ProductDetail.prototype.AddReview = function () {
        var _this = this;
        console.log(this.reviewDescription);
        this.addReviewModel.customerId = this.user.Id;
        this.addReviewModel.productId = this.productId;
        this.addReviewModel.reviewDescription = this.reviewDescription;
        this.addReviewModel.rating = this.rating;
        this._reviewsAndRatingsService.addReview(this.addReviewModel).subscribe(function (data) {
            if (data.code == 200) {
                _this.successMsgAfterReview = "Your Review is Submitted Successfully.";
                _this.isAllowedReview = 0;
                _this.isReviewedNow = 1;
            }
        });
    };
    ProductDetail.prototype.closemodal = function () {
        this.wishlistModalComponent.close();
    };
    ProductDetail.prototype.changeimage = function (image) {
        this.mainimage = image;
        jQuery(".large").css("background", "url('" + this.mainimage + "') no-repeat");
        //Now the mousemove function
        jQuery(".magnify").mousemove(function (e) {
            //When the user hovers on the image, the script will first calculate
            //the native dimensions if they don't exist. Only after the native dimensions
            //are available, the script will show the zoomed version.
            if (!native_width && !native_height) {
                //This will create a new image object with the same image as that in .small
                //We cannot directly get the dimensions from .small because of the 
                //width specified to 200px in the html. To get the actual dimensions we have
                //created this image object.
                var image_object = new Image();
                image_object.src = jQuery(".small").attr("src");
                //This code is wrapped in the .load function which is important.
                //width and height of the object would return 0 if accessed before 
                //the image gets loaded.
                native_width = image_object.width;
                native_height = image_object.height;
            }
            else {
                //x/y coordinates of the mouse
                //This is the position of .magnify with respect to the document.
                var magnify_offset = jQuery(this).offset();
                //We will deduct the positions of .magnify from the mouse positions with
                //respect to the document to get the mouse positions with respect to the 
                //container(.magnify)
                var mx = e.pageX - magnify_offset.left;
                var my = e.pageY - magnify_offset.top;
                //Finally the code to fade out the glass if the mouse is outside the container
                if (mx < jQuery(this).width() && my < jQuery(this).height() && mx > 0 && my > 0) {
                    $(".large").fadeIn(100);
                }
                else {
                    $(".large").fadeOut(100);
                }
                if ($(".large").is(":visible")) {
                    //The background position of .large will be changed according to the position
                    //of the mouse over the .small image. So we will get the ratio of the pixel
                    //under the mouse pointer with respect to the image and use that to position the 
                    //large image inside the magnifying glass
                    var rx = Math.round(mx / jQuery(".small").width() * native_width - jQuery(".large").width() / 2) * -1;
                    var ry = Math.round(my / jQuery(".small").height() * native_height - jQuery(".large").height() / 2) * -1;
                    var bgp = rx + "px " + ry + "px";
                    //Time to move the magnifying glass with the mouse
                    var px = mx - jQuery(".large").width() / 2;
                    var py = my - jQuery(".large").height() / 2;
                    //Now the glass moves with the mouse
                    //The logic is to deduct half of the glass's width and height from the 
                    //mouse coordinates to place it with its center at the mouse coordinates
                    //If you hover on the image now, you should see the magnifying glass in action
                    jQuery(".large").css({ left: px, top: py, backgroundPosition: bgp });
                }
            }
        });
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
        }
        this.addToCartDTO.customerId = this.user.Id;
        this.addToCartDTO.productId = this.productId;
        this.addToCartDTO.shoppingCartTypeId = 1;
        this.addToCartDTO.quantity = 1;
        this._shoppingCartService.addToCart(this.addToCartDTO).subscribe(function (a) {
            if (a.success == true) {
                var cartcount = jQuery(".header-btn .cart-icon .head_btn .count").text();
                jQuery(".header-btn .cart-icon .head_btn .count").text(++cartcount);
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
        this.addToCartDTO.quantity = 2;
        this._shoppingCartService.addToWishlist(this.addToCartDTO).subscribe(function (a) {
            if (a.success == true) {
                console.log('Added to Wish List');
                //this.router.navigate(['/app/cart']);
                _this.wishlistModalComponent.open();
            }
            else {
                console.log(a);
                jQuery('#addToCartErrors').show();
                _this.errors = a.message;
            }
        });
    };
    ProductDetail.prototype.ngOnInit = function () {
    };
    ProductDetail.prototype.shareWithFacebook = function () {
        var params = {
            href: window.location.href,
            method: 'share'
        };
        this.fb.ui(params)
            .then(function (res) { return console.log(res); })
            .catch(function (e) { return console.error(e); });
    };
    ProductDetail.prototype.shareWithTwitter = function () {
        window.open("http://twitter.com/share?text=Sharing A Product of SHOPA&url=" + window.location.href + "&hashtags=shopa," + this.producttitle);
    };
    __decorate([
        core_1.ViewChild('onWishlistSuccess'), 
        __metadata('design:type', (typeof (_a = typeof ng2_modal_1.Modal !== 'undefined' && ng2_modal_1.Modal) === 'function' && _a) || Object)
    ], ProductDetail.prototype, "wishlistModalComponent", void 0);
    ProductDetail = __decorate([
        core_2.Component({
            selector: 'product-detail',
            template: __webpack_require__("./src/app/productdetail/productdetail.template.html"),
            providers: [ProductDetailsService_1.ProductDetailsService, ShoppingCartService_1.ShoppingCartService, ReviewsRatingsService_1.ReviewsRatingsService, ProductService_1.ProductService],
            encapsulation: core_2.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof ProductDetailsService_1.ProductDetailsService !== 'undefined' && ProductDetailsService_1.ProductDetailsService) === 'function' && _c) || Object, (typeof (_d = typeof ng2_facebook_sdk_1.FacebookService !== 'undefined' && ng2_facebook_sdk_1.FacebookService) === 'function' && _d) || Object, (typeof (_e = typeof ProductService_1.ProductService !== 'undefined' && ProductService_1.ProductService) === 'function' && _e) || Object, (typeof (_f = typeof ShoppingCartService_1.ShoppingCartService !== 'undefined' && ShoppingCartService_1.ShoppingCartService) === 'function' && _f) || Object, (typeof (_g = typeof ReviewsRatingsService_1.ReviewsRatingsService !== 'undefined' && ReviewsRatingsService_1.ReviewsRatingsService) === 'function' && _g) || Object, (typeof (_h = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _h) || Object])
    ], ProductDetail);
    return ProductDetail;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
exports.ProductDetail = ProductDetail;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery/dist/jquery.js")))

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
var ng2_modal_1 = __webpack_require__("./node_modules/ng2-modal/index.js");
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
                ng2_modal_1.ModalModule,
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

module.exports = "<div class=\"main-section\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"section-main detail-page\">\r\n            <div class=\"prod-detail-top clearfix\">\r\n                <div class=\"prod-zoom\">\r\n                    <div class=\"magnify\">\r\n                    \t<div class=\"large\"></div>\r\n                   <!-- <div id=\"zoom_prod\" class=\"zoom-main\" [ngStyle]=\"{'background-image': 'url(' + mainimage + ')'}\" imageZoom=\"zoomedImageSrc\" [attr.data-zoom-image]=\"mainimage\">\r\n                        <span class=\"tag medium\"><i class=\"fa fa-arrows-alt\"></i>Mouseover to zoom image</span>\r\n\t\t\t\t\t\t<div class=\"detail-discount-tag\" *ngIf=\"discountpercentage!=0\"><p>-{{discountpercentage}}%</p></div>\r\n                    </div>-->\r\n                    <img class=\"small\" src=\"{{mainimage}}\">\r\n                    </div>\r\n\t\t\t\t\t\r\n                    <ul id=\"gallery-zoom\" class=\"thumbnails clearfix\">\r\n                        \r\n                        <li *ngFor=\"let img of productimages\">\r\n                            <a (click)=\"changeimage(img.FullSizeImageUrl)\" id=\"toprevent\" [attr.data-image]=\"img.ImageUrl\"  [attr.data-zoom-image]=\"img.ImageUrl\">\r\n                                <div id=\"zoom_prod\" class=\"thumb\" [ngStyle]=\"{'background-image': 'url(' + img.ImageUrl + ')'}\">\r\n                                </div>\r\n                              \r\n                            </a>\r\n                        </li>\r\n                        \r\n                    </ul>\r\n                </div>\r\n                <div class=\"detail-content\">\r\n                    <h2 class=\"medium\">{{producttitle}}</h2>\r\n                    <div class=\"star-rating star-{{ratingAverage}}\"></div>\r\n                                        <div class=\"rating-count medium\">({{totalRating}})</div>\r\n                    <div class=\"price\">\r\n                        <span class=\"now medium\"> {{productprice}} </span><span class=\"texxt currency\">USD</span>\r\n                        <del class=\"medium\">{{oldprice}}</del>\r\n                        \r\n                    </div>\r\n                   \r\n                    \r\n                    <div class=\"selections\">\r\n                        <ul class=\"clearfix\">\r\n                            <li *ngFor=\"let productAttribute of ProductAttributes\">\r\n                                <div class=\"fancy_select select-category\">\r\n                                    <div class=\"select_triger\">\r\n                                        <span class=\"text medium\">{{productAttribute.Name}}</span>\r\n                                        <i class=\"fa fa-angle-down\"></i>\r\n                                    </div>\r\n                                    <div class=\"select_options\">\r\n                                       \r\n                                        <span  *ngFor=\"let value of productAttribute.Values\" (click)=\"makeKeyValue(productAttribute.Id,value.Id)\">{{value.Name}}</span>\r\n                                        \r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                           \r\n                        </ul>\r\n                        \r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div id=\"addToCartErrors\" class=\"error\">\r\n                            <label *ngFor=\"let error of errors\" class=\"texxt error-width\">{{error}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"prod-btns clearfix\">\r\n                        <a class=\"buy cart-btn medium\" (click)=\"onBuyNow()\"><img src=\"assets/img/images/thumb_03.png\">&nbsp;&nbsp;&nbsp;Buy</a>\r\n                        <a class=\"save cart-btn medium\" (click)=\"onWishList()\"><img src=\"assets/img/images/thumb_07.png\">&nbsp;&nbsp;&nbsp;Save</a>\r\n                    </div>\r\n\r\n                    <div class=\"share-btns clearfix\">\r\n                    <div (click)=\"shareWithFacebook()\" class=\"fb-share\">\r\n                            <div class=\"logo-left\"><img src=\"assets/img/fb.png\"></div>\r\n                            <div class=\"vertical-line\"></div>\r\n                            <div class=\"text-share\">\r\n                            Share\r\n                            </div>\r\n                    </div>\r\n\r\n                    <div (click)=\"shareWithTwitter()\" class=\"tw-share\">\r\n                            <div class=\"logo-left\"><img src=\"assets/img/tw.png\"></div>\r\n                            <div class=\"vertical-line\"></div>\r\n                            <div class=\"text-share\">\r\n                            Share\r\n                            </div>\r\n                    </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"prod-detail-bottom\">\r\n                <div class=\"tabs-wrapper detail-tabs\">\r\n                    <ul class=\"tabs clearfix semibold\">\r\n                        <li class=\"active\"><a href=\"#tab1\">Overview</a></li>\r\n                        <li><a href=\"#tab2\">Related Products</a></li>\r\n                        <li><a href=\"#tab3\">Description</a></li>\r\n                        <li><a href=\"#tab4\">Ratings</a></li>\r\n                        <li><a href=\"#tab6\">Shipping</a></li>\r\n                    </ul>\r\n                    <div class=\"tab-panel\">\r\n                        <div id=\"tab1\" class=\"tab-pane active\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Overview</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"tab-overview clearfix\">\r\n                                    <div class=\"review\">\r\n                                        <div *ngIf=\"isReviewedNow==1\">\r\n                                           <b> Your Review is Submitted Successfully.</b>\r\n                                        </div>\r\n                                        <div *ngIf=\"isAllowedReview==1\" class=\"add-review clearfix\">\r\n                                            <h4>add a review</h4>\r\n                                            <div class=\"add_review_stars\">\r\n                                                <i id=\"st1\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"selectRating(1)\"></i>\r\n                                                <i id=\"st2\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"selectRating(2)\"></i>\r\n                                                <i id=\"st3\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"selectRating(3)\"></i>\r\n                                                <i id=\"st4\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"selectRating(4)\"></i>\r\n                                                <i id=\"st5\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"selectRating(5)\"></i>\r\n                                            </div>\r\n                                            <textarea [(ngModel)]=\"reviewDescription\" maxlength=\"250\"  placeholder=\"Max 250 characters...\"></textarea>\r\n                                            <button (click)=\"AddReview()\" class=\"btn btn-blue submit\">Submit Review</button>\r\n                                        </div>\r\n                                        <div class=\"prod-reviews small clearfix\">\r\n                                            <h4>recent reviews</h4>\r\n                                            <a class=\"showall\" href=\"#tab4\">VIEW ALL</a>\r\n                                            <div class=\"clearfix\"></div>\r\n                                            <div class=\"unit-wrapper\">\r\n                                                \r\n                                                <div class=\"review-unit\" *ngFor=\"let value of productRecentReviewList\">\r\n                                         <figure class=\"visual recentreview\" [ngStyle]=\"{'background-image': 'url(' + value.imageUrl + ')'}\"></figure>\r\n                                            <div class=\"star-rating star-{{value.customerRatings}}\"></div>\r\n                                            <h5 class=\"name\">{{value.customerName}}</h5>\r\n                                            <p style=\"text-align: justify;\">{{value.reviewDescription}}</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"arrival\">\r\n                                        <ul class=\"text-list\">\r\n                                            <li>\r\n                                                <span class=\"text\">estimated arrival</span>\r\n                                                <span class=\"text1\">30 - 40 days</span>\r\n                                            </li>\r\n                                            <li>\r\n                                                <span class=\"text\">shipping</span>\r\n                                                <span class=\"text1\">$ 2.00</span>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab2\" class=\"tab-pane \">\r\n                            <a href=\"#\" class=\"accorTrigger\">Related Products</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"products-wrapper grid-4 products clearfix related\">\r\n                                   \r\n\r\n                                    \r\n                                 \r\n  <div class=\"product\" *ngFor=\"let product of relatedProducts\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                    <div class=\"product-inner\" [ngStyle]=\"{'background-image': 'url(' + product.imageUrl + ')'}\">\r\n                        <span *ngIf=\"product.discount != 0\" class=\"discount-tag semibold\">-{{product.discount}}%</span>\r\n                    </div>\r\n                    <div class=\"product-description\">\r\n                       <span *ngIf=\"product.oldPrice != 0\" class=\"old-price medium\">${{product.oldPrice}}</span>\r\n                        <span class=\"new-price medium\">${{product.productPrice}}</span>\r\n                        <span *ngIf=\"product.orderCount != 0\" class=\"item-sold medium\">{{product.orderCount}}+ sold</span>\r\n                    </div>\r\n                </div>\r\n                                    \r\n                                   \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab3\" class=\"tab-pane\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Description</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"prod-description\">\r\n                                    <h4>Description</h4>\r\n                                    <span [innerHtml]=\"productdescription\"></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab4\" class=\"tab-pane\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Ratings</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"total-ratings\">\r\n                                    <div class=\"main\">\r\n                                        <div class=\"star-rating star-{{ratingAverage}}\"></div>\r\n                                        <span class=\"count\">({{totalRating}})</span>\r\n                                    </div>\r\n                                    <ul>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-5\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-4\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-3\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-2\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"68\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 68%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-1\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                \r\n                                <div class=\"prod-reviews full clearfix\">\r\n                                    <div class=\"unit-wrapper\">\r\n                                        <div class=\"reviews-scroller\">\r\n                                        <div class=\"review-unit\" *ngFor=\"let value of productReviewList\">\r\n                                            <figure class=\"visual\" [ngStyle]=\"{'background-image': 'url(' + value.imageUrl + ')'}\"></figure>\r\n                                            <div class=\"star-rating star-{{value.customerRatings}}\"></div>\r\n                                            <h5 class=\"name\">{{value.customerName}}</h5>\r\n                                            <p>{{value.reviewDescription}}</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                       \r\n                                       \r\n                                        \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                        </div>\r\n\r\n                        <div id=\"tab6\" class=\"tab-pane \">\r\n                            <a href=\"#\" class=\"accorTrigger\">Shipping</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"shipping-detail\">\r\n                                    <h4>Shipping details</h4>\r\n                                    <ul class=\"detail\">\r\n                                        <li><span class=\"title\">Estimated shipping</span><span class=\"values\">$ 4.99</span></li>\r\n                                        <li><span class=\"title\">Availability</span><span class=\"values\">Ships to United States and 32 other countries</span></li>\r\n                                        <li><span class=\"title\">Estimated arrival</span><span class=\"values\">17 - 23 days</span></li>\r\n                                        <li><span class=\"title\">Return policy</span><span class=\"values\">You may return all products within 30 days of delivery.\r\n                                            </span><a class=\"more-detail\" href=\"#\">More Details</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<modal #onWishlistSuccess \r\n[closeOnOutsideClick]=\"true\" [closeOnEscape]=\"true\" [hideCloseButton]=\"true\" >\r\n  <modal-header>\r\n    <div class=\"modal-logo\">\r\n    </div>\r\n  </modal-header>\r\n  <modal-content>\r\n    <div class=\"modal-div\">\r\n      Product Successfully Added to wishlist\r\n       <hr>\r\n        <div>\r\n        <div class=\"row semibold signUp-btn-div\">\r\n            <a (click)=\"closemodal()\" class=\"btn btn-block socialBtn login\">\r\n               OK\r\n            </a>\r\n        </div>\r\n         \r\n        </div>\r\n    </div>\r\n    \r\n  </modal-content>\r\n</modal>"

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
    ProductDetailsService.prototype.getProductDetails = function (Id, customerId) {
        return this.http.get(this.urlService.baseUrl + 'api/default/ProductDetails/?productId=' + Id + '&customerId=' + customerId)
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

/***/ "./src/app/services/ReviewsRatingsService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var UrlService_1 = __webpack_require__("./src/app/services/UrlService.ts");
var ReviewsRatingsService = (function () {
    function ReviewsRatingsService(http) {
        this.http = http;
        this.urlService = new UrlService_1.UrlService();
    }
    ReviewsRatingsService.prototype.getReviewsAndRatings = function (productid, pageNum, pageSize) {
        return this.http.get(this.urlService.baseUrl + 'api/default/getProductReviewsByProductId/?productid=' + productid
            + "&pageNum=" + pageNum + "&pageSize=" + pageSize)
            .map(function (res) { return res.json(); });
    };
    ReviewsRatingsService.prototype.addReview = function (model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "api/default/addProductReviews", body, options)
            .map(function (res) { return res.json(); });
    };
    ReviewsRatingsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], ReviewsRatingsService);
    return ReviewsRatingsService;
    var _a;
}());
exports.ReviewsRatingsService = ReviewsRatingsService;


/***/ }

});
//# sourceMappingURL=18.map