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
/* WEBPACK VAR INJECTION */(function(jQuery, $) {"use strict";
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
var SharedService_1 = __webpack_require__("./src/app/services/SharedService.ts");
var SigninSignupService_1 = __webpack_require__("./src/app/services/SigninSignupService.ts");
var Home = (function () {
    /**
     * end
     */
    function Home(_productService, sharedService, _productdetail, router, _shoppingCartService) {
        var _this = this;
        this._productService = _productService;
        this.sharedService = sharedService;
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
        var self = this;
        window.onresize = function (event) {
            self.screensize = window.screen.width;
        };
        jQuery(document).ready(function () {
            jQuery(".cat-drop-triger .cat-dropdown,.cat-drop-triger").hover(function () {
                jQuery(".cat-drop-triger>a").css("color", "white");
            }, function () {
                jQuery(".cat-drop-triger>a").css("color", "#34BAC5");
            });
        });
        this._productService.getAllCategories().subscribe(function (a) {
            if (a.code == StatusCodeEnum_1.StatusCodeEnum.SUCCESS) {
                _this.categories = a.data;
                var loop = 7;
                console.log(window.screen.width);
                if (window.screen.width < 1050 && window.screen.width > 860) {
                    loop = 4;
                }
                if (window.screen.width < 1500 && window.screen.width > 1050) {
                    loop = 6;
                }
                if (window.screen.width > 1500 && window.screen.width < 1800) {
                    loop = 8;
                }
                if (window.screen.width > 1800 && window.screen.width < 2100) {
                    loop = 10;
                }
                if (window.screen.width > 2100 && window.screen.width < 2300) {
                    loop = 12;
                }
                if (window.screen.width > 2300 && window.screen.width < 2500) {
                    loop = 14;
                }
                if (window.screen.width > 2500 && window.screen.width < 2800) {
                    loop = 16;
                }
                if (window.screen.width > 900 && window.screen.width < 1050) {
                    loop = 4;
                }
                for (var i = 0; i < _this.categories.length; i++) {
                    if (i < loop) {
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
        this.sharedService.setLogged(this.user.cartCount + 1);
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
        var width = $(window).width();
        console.log(event, width);
        if (width > 768) {
            if (event.which == 3) {
                window.open('#/app/product-detail?productId=' + productId, '_newtab'); // To open in new tab
            }
            else {
                console.log(productId);
                this._productdetail.getProductDetails(productId).subscribe(function (a) {
                    _this.product = a.data.productDetailsModel;
                    _this.productId = productId;
                    _this.productdescription = _this.product.FullDescription;
                    _this.productprice = _this.product.ProductPrice.PriceValue;
                    _this.producttitle = _this.product.Name;
                    _this.productimages = _this.product.PictureModels;
                    _this.oldprice = _this.product.ProductPrice.OldPrice;
                    _this.mainimage = _this.productimages[0].FullSizeImageUrl;
                    _this.ProductAttributes = _this.product.ProductAttributes;
                    console.log(_this.mainimage);
                    var native_width = _this.mainimage.width;
                    var native_height = _this.mainimage.height;
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
                    _this.discountpercentage = a.data.discountPercentage;
                    jQuery(".prod-detail-modal").fadeIn();
                    jQuery("body").css('overflow', 'hidden');
                });
            }
        }
        else {
            window.open('#/app/product-detail?productId=' + productId, '_newtab'); // To open in new tab
        }
    };
    Home.prototype.openFilterDialog = function () {
        jQuery("#filter-content").toggle('show');
        return false;
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
        var one = $("#catsCaraousel");
        var two = $("#tagsCaraousel");
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoWidth: true,
            nav: false,
            dots: false,
        });
        $('.owl-2').owlCarousel({
            loop: true,
            margin: 10,
            autoWidth: true,
            nav: false,
            dots: false,
        });
        $(".sliding").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 6
                },
                1000: {
                    items: 5
                }
            }
        });
        var self = this;
        jQuery("body").on("click", ".close-modal", function (e) {
            self.errors = [];
            jQuery('#addToCartErrors').hide();
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
    Home.prototype.changeimage = function (image) {
        this.mainimage = image;
        var native_width = this.mainimage.width;
        var native_height = this.mainimage.height;
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
            providers: [ProductService_1.ProductService, ProductDetailsService_1.ProductDetailsService, ShoppingCartService_1.ShoppingCartService, SigninSignupService_1.SigninSignupService, SharedService_1.SharedService],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof ProductService_1.ProductService !== 'undefined' && ProductService_1.ProductService) === 'function' && _b) || Object, (typeof (_c = typeof SharedService_1.SharedService !== 'undefined' && SharedService_1.SharedService) === 'function' && _c) || Object, (typeof (_d = typeof ProductDetailsService_1.ProductDetailsService !== 'undefined' && ProductDetailsService_1.ProductDetailsService) === 'function' && _d) || Object, (typeof (_e = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _e) || Object, (typeof (_f = typeof ShoppingCartService_1.ShoppingCartService !== 'undefined' && ShoppingCartService_1.ShoppingCartService) === 'function' && _f) || Object])
    ], Home);
    return Home;
    var _a, _b, _c, _d, _e, _f;
}());
exports.Home = Home;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery/dist/jquery.js")))

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
var ng2_owl_carousel_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ng2-owl-carousel\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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
                ng2_owl_carousel_1.OwlModule,
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

module.exports = "<!--========================================\r\nMain\r\n===========================================-->\r\n\r\n<!-- Main Container -->\r\n<div class=\"main-section\">\r\n    <div class=\"category-list\">\r\n        <div class=\"container-fluid\">\r\n            <a class=\"category-triger\" href=\"#\">\r\n                <i class=\"fa fa-bars\"></i>\r\n                <i class=\"fa fa-caret-down\"></i>\r\n            </a>\r\n            <ul class=\"semibold\" id=\"largeDevices\">\r\n                <li class=\"active\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(-1)\">Featured</a></li>\r\n                <li *ngFor=\"let category of topCategories\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(category.Id)\">{{category.Name}}</a></li>\r\n                \r\n                <!--<li><a class=\"btn btn-block\" href=\"#\">MORE +</a></li>-->\r\n                <li class=\"cat-drop-triger\"><a class=\"btn btn-block\" href=\"#\">MORE +</a>\r\n                    <ul class=\"cat-dropdown semibold\">\r\n                        <li *ngFor=\"let category of dropdownCategories\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(category.Id)\">{{category.Name}}</a></li>\r\n                    </ul>    \r\n                </li>\r\n            </ul>\r\n\r\n\r\n             <ul class=\"semibold\" id=\"smallDevices\">\r\n                <li class=\"active\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(-1)\">Featured</a></li>\r\n                <li *ngFor=\"let category of topCategories\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(category.Id)\">{{category.Name}}</a></li>\r\n                <li *ngFor=\"let category of dropdownCategories\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(category.Id)\">{{category.Name}}</a></li>\r\n                \r\n            </ul>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"tags-list\">\r\n        <div class=\"container-fluid\">\r\n            <a class=\"category-triger\" href=\"#\">\r\n                <i class=\"fa fa-bars\"></i>\r\n                <i class=\"fa fa-caret-down\"></i>\r\n            </a>\r\n            <div class=\"filter-icon\"><button class=\"icon\" (click)=\"openFilterDialog()\"><img src=\"assets/img/images/filterIcon_03.png\"></button></div>\r\n            <ul class=\"texxt hash-tags\">\r\n                <li><a class=\"\" href=\"#\">#Latest</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Phone</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n                <li><a class=\"\" href=\"#\">#Gadgets</a></li>\r\n                <li><a class=\"\" href=\"#\">#Hobbies</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n                <li><a class=\"\" href=\"#\">#Gadgets</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n            </ul>\r\n\r\n    <div class=\"dropdown hashtagDropDown\">\r\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">#Tags\r\n        <span class=\"caret\"></span></button>\r\n\r\n\r\n\r\n        <ul class=\"texxt  dropdown-menu\">\r\n                <li><a class=\"\" href=\"#\">#Latest</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Phone</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n                <li><a class=\"\" href=\"#\">#Gadgets</a></li>\r\n                <li><a class=\"\" href=\"#\">#Hobbies</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n                <li><a class=\"\" href=\"#\">#Gadgets</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n        </ul>\r\n    </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n<div class=\"mobile-caraousel-cats\">\r\n\r\n<owl-carousel #owlElement\r\n     [options]=\"{items: 3, dots: false, navigation: false, margin:10}\"\r\n     [items]=\"dropdownCategories\"\r\n     [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n     <div class=\"item\" *ngFor=\"let category of dropdownCategories;let i = index\">\r\n        <a class=\"cat-btns\" href=\"#\" (click)=\"onCategoryClick(category.Id)\">{{category.Name}}</a>\r\n     </div>\r\n </owl-carousel>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"mobile-caraousel\">\r\n<div class=\"filter-icon-carousel\"><button class=\"\" (click)=\"openFilterDialog()\"><img src=\"assets/img/images/filterIcon_03.png\"></button></div>\r\n<div class=\"owl-carousel owl-2 owl-theme\" id=\"tagsCaraousel\">\r\n    \r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Latest</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Upgrades</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Gadgets</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Upgrades</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Gadgets</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Upgrades</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Gadgets</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Upgrades</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Gadgets</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Upgrades</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Gadgets</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Upgrades</a></div>\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n    <div class=\"container-fluid\">\r\n\r\n\r\n                <div id=\"filter-content\">\r\n\r\n            <div class=\"row filter-btns-row\" >\r\n\r\n                 <div class=\"col-md-6 col-xs-8\">\r\n\r\n                    <h4 class=\"filter-heading\">Filter by</h4>\r\n\r\n                 </div>\r\n\r\n                 <div class=\"col-md-6 col-xs-4\">\r\n\r\n                        <div class=\"x-holder pull-right\">\r\n                            <button (click)=\"openFilterDialog()\" class=\"close-holder\">\r\n                            <img src=\"assets/img/images/x.png\">\r\n                            </button>\r\n                        </div>\r\n\r\n                 </div>\r\n    \r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"row all-filters\" >\r\n\r\n                <div class=\"col-md-3\">\r\n\r\n                        <h4 class=\"filter-subheading\">price</h4>\r\n\r\n\r\n                    <ul class=\"brand-filter price-filter\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"forid1\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"forid1\"><i class=\"fa\"></i>Low to High</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"forid2\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"forid2\"><i class=\"fa\"></i>High to Low</label>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n\r\n                   \r\n\r\n                    <div class=\"price-filter clearfix\">\r\n                            <div class=\"min-price\">\r\n                                <input type=\"text\" class=\"search-fields\" placeholder=\"MIN\">\r\n                            </div>\r\n                            <div class=\"dash\">-</div>\r\n                            <div class=\"max-price\">\r\n                                <input type=\"text\" class=\"search-fields\" placeholder=\"MAX\">\r\n                            </div>\r\n                    </div>\r\n\r\n\r\n                    <h4 class=\"filter-subheading second-sub\">Shipping</h4>\r\n\r\n\r\n                    <ul class=\"brand-filter ship-filter\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Free\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Free\"><i class=\"fa\"></i>Free</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"days3\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"days3\"><i class=\"fa\"></i>3 days or less</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"days7\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"days7\"><i class=\"fa\"></i>7 days or less</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"days14\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"days14\"><i class=\"fa\"></i>14 days or less</label>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n\r\n\r\n\r\n\r\n                </div>\r\n\r\n                <div class=\"col-md-2 col-xs-6\">\r\n\r\n                    <div class=\"second-column\">\r\n\r\n                        <h4 class=\"filter-subheading\">Sold</h4>\r\n\r\n\r\n                        <ul class=\"brand-filter rank-filter\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Highest\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Highest\"><i class=\"fa\"></i>Highest</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Lowest\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Lowest\"><i class=\"fa\"></i>Lowest</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Newproduct\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Newproduct\"><i class=\"fa\"></i>NEW Product</label>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n\r\n\r\n                        <h4 class=\"filter-subheading second-sub\">Gender</h4>\r\n\r\n\r\n                        <ul class=\"brand-filter gender-filter\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Women\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Women\"><i class=\"fa\"></i>Women</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Men\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Men\"><i class=\"fa\"></i>Men</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Girl\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Girl\"><i class=\"fa\"></i>Girl</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Boy\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Boy\"><i class=\"fa\"></i>Boy</label>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col-md-2 col-xs-6\">\r\n\r\n                    <div class=\"third-column\">\r\n                    \r\n                    <h4 class=\"filter-subheading\">SIZE</h4>\r\n\r\n\r\n                        <ul class=\"brand-filter size-filter\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XXS\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XXS\"><i class=\"fa\"></i>XXS</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XS\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XS\"><i class=\"fa\"></i>XS</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"S\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"S\"><i class=\"fa\"></i>S</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"M\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"M\"><i class=\"fa\"></i>M</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"L\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"L\"><i class=\"fa\"></i>L</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XL\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XL\"><i class=\"fa\"></i>XL</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XXL\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XXL\"><i class=\"fa\"></i>XXL</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XXXL\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XXXL\"><i class=\"fa\"></i>XXXL</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XXXXL\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XXXXL\"><i class=\"fa\"></i>XXXXL</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XXXXXL\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XXXXXL\"><i class=\"fa\"></i>XXXXXL</label>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n\r\n                        </div>\r\n\r\n                </div>\r\n\r\n\r\n              <div class=\"col-md-2  col-xs-5\">\r\n\r\n\r\n                <h4 class=\"filter-subheading\">COLOR</h4>\r\n\r\n                    <div class=\"fourth-column\">\r\n\r\n                        <ul class=\"brand-filter colorsList\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:grey\"></div>\r\n                                <input id=\"Gray\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Gray\"><i class=\"fa\"></i>Gray</label>\r\n                            </div>\r\n                        </li>\r\n                         <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:black\"></div>\r\n                                <input id=\"Black\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Black\"><i class=\"fa\"></i>Black</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#fffafa\"></div>\r\n                                <input id=\"White\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"White\"><i class=\"fa\"></i>White</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#fe5c5c\"></div>\r\n                                <input id=\"Red\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Red\"><i class=\"fa\"></i>Red</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#ff9325\"></div>\r\n                                <input id=\"Orange\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Orange\"><i class=\"fa\"></i>Orange</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#ffdf00\"></div>\r\n                                <input id=\"Yellow\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Yellow\"><i class=\"fa\"></i>Yellow</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#05e177\"></div>\r\n                                <input id=\"Green\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Green\"><i class=\"fa\"></i>Green</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#7788ee\"></div>\r\n                                <input id=\"Blue\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Blue\"><i class=\"fa\"></i>Blue</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#aa83cb\"></div>\r\n                                <input id=\"Voilet\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Voilet\"><i class=\"fa\"></i>Voilet</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#c653ff\"></div>\r\n                                <input id=\"Purple\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Purple\"><i class=\"fa\"></i>Purple</label>\r\n                            </div>\r\n                        </li>           \r\n                    </ul>\r\n\r\n\r\n                    </div>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            <div class=\"col-md-2 col-xs-7\">\r\n\r\n                <div class=\"fifth-column\">\r\n\r\n                        <ul class=\"brand-filter colorsList\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#d64ecf\"></div>\r\n                                <input id=\"Magneta\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Magneta\"><i class=\"fa\"></i>Magenta</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#4ed6cb\"></div>\r\n                                <input id=\"Cyan\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Cyan\"><i class=\"fa\"></i>Cyan</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#fcc6e2\"></div>\r\n                                <input id=\"Pink\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Pink\"><i class=\"fa\"></i>Pink</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#ece7d6\"></div>\r\n                                <input id=\"Beige\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Beige\"><i class=\"fa\"></i>Beige</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#994c04\"></div>\r\n                                <input id=\"Brown\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Brown\"><i class=\"fa\"></i>Brown</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#7b8ea5\"></div>\r\n                                <input id=\"Silver\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Silver\"><i class=\"fa\"></i>Silver</label>\r\n                            </div>\r\n                        </li>\r\n                         <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#c9ac66\"></div>\r\n                                <input id=\"Gold\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Gold\"><i class=\"fa\"></i>Gold</label>\r\n                            </div>\r\n                        </li>\r\n                         <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#cd7f32\"></div>\r\n                                <input id=\"Bronze\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Bronze\"><i class=\"fa\"></i>Bronze</label>\r\n                            </div>\r\n                        </li>\r\n                         <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#c653ff\"></div>\r\n                                <input id=\"Multi\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Multi\"><i class=\"fa\"></i>Multi-color</label>\r\n                            </div>\r\n                        </li>\r\n                        </ul>\r\n\r\n                    </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"action-buttons\">\r\n                    <div class=\"left-btn\">\r\n                 <button class=\"btn  searchBtn\">Search</button>\r\n                    </div>\r\n                    <div class=\"right-btn\">\r\n                 <button class=\"btn  clearBtn\" (click)=\"clearAll()\">Clear all</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n \r\n\r\n\r\n\r\n        \r\n        <div class=\"products-main gif-loading\">\r\n            <div class=\"products-wrapper grid-4 products clearfix loading\">\r\n                <div class=\"product\" *ngFor=\"let product of products\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                    <div class=\"product-inner\" [ngStyle]=\"{'background-image': 'url(' + product.imageUrl + ')'}\">\r\n                        <span *ngIf=\"product.discount != 0\" class=\"discount-tag semibold\">-{{product.discount}}%</span>\r\n                    </div>\r\n                    <div class=\"product-description\">\r\n                       <span *ngIf=\"product.oldPrice != 0\" class=\"old-price medium\">$ {{product.oldPrice}}</span>\r\n                        <span class=\"new-price medium\">${{product.productPrice}}</span>\r\n                        <span *ngIf=\"product.orderCount != 0\" class=\"item-sold medium\">{{product.orderCount}}+ sold</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"semibold no-products\">\r\n                    No Products Found!\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"loader-products\">\r\n        </div>         \r\n    </div>\r\n</div>\r\n<div class=\"my-modal prod-detail-modal\">\r\n    <div class=\"modal_style\">\r\n        <div class=\"modal-inner\">\r\n        <a class=\"close-modal\" href=\"#\">Close<i class=\"fa fa-remove\"></i></a>\r\n        <div class=\"detail-page modal-view\">\r\n            <div class=\"prod-detail-top clearfix\">\r\n                <div class=\"prod-zoom\">\r\n\r\n                   <!-- <div id=\"zoom_prod\" class=\"zoom-main\" [ngStyle]=\"{'background-image': 'url(' + mainimage + ')'}\" [attr.data-zoom-image]=\"mainimage\">\r\n                        <span class=\"tag medium\"><i class=\"fa fa-arrows-alt\"></i>Mouseover to zoom image</span>\r\n\t\t\t\t\t\t<div class=\"detail-discount-tag\" *ngIf=\"discountpercentage!=0\"><p>-{{discountpercentage}}%</p></div>\r\n                    </div> -->\r\n                    <div class=\"magnify\">\r\n                    \t<div class=\"large\"></div>\r\n                    <img class=\"small\" src=\"{{mainimage}}\">\r\n                    </div>\r\n                    <ul id=\"gallery-zoom\" class=\"thumbnails clearfix\">\r\n                        \r\n                        <li *ngFor=\"let img of productimages\">\r\n                            <a (click)=\"changeimage(img.FullSizeImageUrl)\" id=\"toprevent\" [attr.data-image]=\"img.ImageUrl\" [attr.data-zoom-image]=\"img.ImageUrl\">\r\n                                <div id=\"zoom_prod\" class=\"thumb\" [ngStyle]=\"{'background-image': 'url(' + img.ImageUrl + ')'}\">\r\n                                </div>\r\n                              \r\n                            </a>\r\n                        </li>\r\n                        \r\n                    </ul>\r\n                </div>\r\n                <div class=\"detail-content\">\r\n                    <h2 class=\"medium\">{{producttitle}}</h2>\r\n                    <div class=\"star-rating star-3\"></div> <div class=\"rating-count medium\">(45)</div>\r\n                    <div class=\"price\">\r\n                        <span class=\"now medium\"> {{productprice}} </span><span class=\"texxt currency\">USD</span>\r\n                        <del class=\"medium\">{{oldprice}}</del>\r\n                        \r\n                    </div>\r\n                   \r\n                    \r\n                    <div class=\"selections\">\r\n                        <ul class=\"clearfix\">\r\n                            <li *ngFor=\"let productAttribute of ProductAttributes\">\r\n                                <div class=\"fancy_select select-category\">\r\n                                    <div class=\"select_triger\">\r\n                                        <span class=\"text medium\">{{productAttribute.Name}}</span>\r\n                                        <i class=\"fa fa-angle-down\"></i>\r\n                                    </div>\r\n                                    <div class=\"select_options\">\r\n                                       \r\n                                        <span *ngFor=\"let value of productAttribute.Values\" (click)=\"makeKeyValue(productAttribute.Id,value.Id)\">{{value.Name}}</span>\r\n                                        \r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                           \r\n                        </ul>\r\n                        \r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div id=\"addToCartErrors\" class=\"error\">\r\n                            <label *ngFor=\"let error of errors\" class=\"texxt error-width\">{{error}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"prod-btns clearfix\">\r\n                        <a class=\"buy cart-btn medium\" (click)=\"onBuyNow()\"><img src=\"assets/img/images/thumb_03.png\">&nbsp;&nbsp;&nbsp;Buy</a>\r\n                        <a class=\"save cart-btn medium\" (click)=\"onWishList()\"><img src=\"assets/img/images/thumb_07.png\">&nbsp;&nbsp;&nbsp;Save</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"prod-detail-bottom\">\r\n                <div class=\"tabs-wrapper detail-tabs\">\r\n                    <ul class=\"tabs clearfix semibold\">\r\n                        <li class=\"active\"><a href=\"#tab1\">Overview</a></li>\r\n                        <li><a href=\"#tab2\">Related Products</a></li>\r\n                        <li><a href=\"#tab3\">Description</a></li>\r\n                        <li><a href=\"#tab4\">Ratings</a></li>\r\n                        <li><a href=\"#tab6\">Shipping</a></li>\r\n                    </ul>\r\n                    <div class=\"tab-panel\">\r\n                        <div id=\"tab1\" class=\"tab-pane active\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Overview</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"tab-overview clearfix\">\r\n                                    <div class=\"review\">\r\n                                        <div class=\"add-review clearfix\">\r\n                                            <h4>add a review</h4>\r\n                                            <div class=\"star-rating add_review_stars\"></div>\r\n                                            <textarea placeholder=\"Max 250 characters...\"></textarea>\r\n                                            <button class=\"btn btn-blue submit\">Submit Review</button>\r\n                                        </div>\r\n                                        <div class=\"prod-reviews small clearfix\">\r\n                                            <h4>recent reviews</h4>\r\n                                            <a class=\"showall\" href=\"#tab4\">VIEW ALL</a>\r\n                                            <div class=\"clearfix\"></div>\r\n                                            <div class=\"unit-wrapper\">\r\n                                                <div class=\"review-unit\">\r\n                                                    <div class=\"star-rating star-3\"></div>\r\n                                                    <h5 class=\"name\">Michael Gaston</h5>\r\n                                                    <p>Got it before delivery date</p>\r\n                                                </div>\r\n                                                <div class=\"review-unit\">\r\n                                                    <div class=\"star-rating star-3\"></div>\r\n                                                    <h5 class=\"name\">Dylan Willingham</h5>\r\n                                                    <p>Really great jacket took a little while to get here but definitely worth it</p>\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"arrival\">\r\n                                        <ul class=\"text-list\">\r\n                                            <li>\r\n                                                <span class=\"text\">estimated arrival</span>\r\n                                                <span class=\"text1\">30 - 40 days</span>\r\n                                            </li>\r\n                                            <li>\r\n                                                <span class=\"text\">shipping</span>\r\n                                                <span class=\"text1\">$ 2.00</span>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab2\" class=\"tab-pane \">\r\n                            <a href=\"#\" class=\"accorTrigger\">Related Products</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"products-wrapper grid-4 products clearfix related\">\r\n                                   \r\n\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    \r\n                                   \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab3\" class=\"tab-pane\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Description</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"prod-description\">\r\n                                    <h4>Description</h4>\r\n                                    <span [innerHtml]=\"productdescription\"></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab4\" class=\"tab-pane\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Ratings</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"total-ratings\">\r\n                                    <div class=\"main\">\r\n                                        <div class=\"star-rating star-4\"></div>\r\n                                        <span class=\"count\">(245)</span>\r\n                                    </div>\r\n                                    <ul>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-5\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-4\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-3\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-2\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"68\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 68%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-1\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                \r\n                                <div class=\"prod-reviews full clearfix\">\r\n                                    <div class=\"unit-wrapper\">\r\n                                        <div class=\"reviews-scroller\">\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Michael Gaston</h5>\r\n                                            <p>Came in on time, it's perfect charges both controllers just fine. The box was damaged when it\r\narrived but the item itself was in perfect condition and works great.</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Dylan Willingham</h5>\r\n                                            <p>I still never got this item..i got a email asking how i liked this product but no product..so after\r\nasking about my order they just went ahead and refunded it..</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Michael Gaston</h5>\r\n                                            <p>Came in on time, it's perfect charges both controllers just fine. The box was damaged when it\r\narrived but the item itself was in perfect condition and works great.</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        <div class=\"review-unit\">\r\n                                            <figure class=\"visual\" style=\"background:url(assets/img/dp.png)\"></figure>\r\n                                            <div class=\"star-rating star-3\"></div>\r\n                                            <h5 class=\"name\">Dylan Willingham</h5>\r\n                                            <p>I still never got this item..i got a email asking how i liked this product but no product..so after\r\nasking about my order they just went ahead and refunded it..</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab6\" class=\"tab-pane \">\r\n                            <a href=\"#\" class=\"accorTrigger\">Shipping</a>\r\n                             <div class=\"accorContent\">\r\n                                <div class=\"shipping-detail\">\r\n                                    <h4>Shipping details</h4>\r\n                                    <ul class=\"detail\">\r\n                                        <li><span class=\"title\">Estimated shipping</span><span class=\"values\">$ 4.99</span></li>\r\n                                        <li><span class=\"title\">Availability</span><span class=\"values\">Ships to United States and 32 other countries</span></li>\r\n                                        <li><span class=\"title\">Estimated arrival</span><span class=\"values\">17 - 23 days</span></li>\r\n                                        <li><span class=\"title\">Return policy</span><span class=\"values\">You may return all products within 30 days of delivery.\r\n                                            </span><a class=\"more-detail\" href=\"#\">More Details</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

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