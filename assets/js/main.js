

jQuery(function($) {
    "use strict";

    
    
    /*====Header====*/
    $("body").on("click",".admin-options-triger",function(e){
        var $this = $(this);
        e.preventDefault();
        $(this).parent(".header-admin").find(".admin-options").slideToggle(250);
    });
    
    $('body').on("click", function (e) {
        if ($(e.target).closest('.admin-options-triger').length === 0) {
            $(".header-admin .admin-options").slideUp();
            
        }
    });
    
    $("body").on("click",".category-triger",function(e){
        var $this = $(this);
        e.preventDefault();
        $(this).parents(".category-list").find("#smallDevices").slideToggle();
    });
    
    $("body").on("click",".nav-triger",function(e){
        var $this = $(this);
        e.preventDefault();
        $(this).parents(".doc-header").find(".toggle-content").slideToggle();
        if(window.width > 768)
        $(this).parents(".doc-header").find(".header-search").slideUp();
    });
    
    $("body").on("click",".search-triger",function(e){
        var $this = $(this);
        e.preventDefault();
        $(this).parents(".doc-header").find(".header-search").slideToggle();
        if(window.width > 768)
        $(this).parents(".doc-header").find(".toggle-content").slideUp();
    });
    
    var winWidth;
    $(window).resize(function(e){
        winWidth = $(window).width();
        if(winWidth>767){
            $(".doc-header .header-search").show();
        }
        if(winWidth>860){
            $(".category-list ul").show();
        }
        if(winWidth>1080){
            $(".doc-header .toggle-content").hide();
        }
        
    }).resize();
    
    
    $("body").on("click",".category-list li",function(e){
        var $this = $(this);
        e.preventDefault();
        $(".category-list li").removeClass("active");
        $(this).addClass("active")
    });
    
    $("body").on("click",".color-filter li a",function(e){
        var $this = $(this);
        e.preventDefault();
        $(".color-filter li").removeClass("selected");
        $(this).parent("li").addClass("selected");
        
        
    });
    /*====Header====*/
	
	
	/*====Product Detail ====*/
	

	
	
	/*====Product Detail ====*/
	
	
	
    /*=====Checkout====*/
    
    /*=====counter====*/
    if ($('.countdown').length) {
            $('.countdown').each(function(num, ele) {
                var $this = $(this);
                $this.downCount({
                    date: '09/09/2017 00:59:00',
                    offset: 0
                }, function() {
                    alert('WOOT WOOT, done!');
                });
            });
        };
    
    /*===Fancy Select===*/
    $("body").on("click",".select_triger",function(e){
        var $this = $(this);
        $(this).parent(".fancy_select").find(".select_options").slideToggle();
    });
    $("body").on("click",".select_options span",function(e){
        var $this = $(this);
        var text;
        $(".select_options span").removeClass("selected");
        $(this).addClass("selected");
        text = $(this).text();
        $(this).parents(".fancy_select").find("span.text").text(text);
        $(this).parents(".fancy_select").find(".select_options").slideUp();
    });
    
    $('body').on("click", function (e) {
        if ($(e.target).closest('.select_triger').length === 0) {
            $(".fancy_select .select_options").slideUp();
            
        }
    });
    
    $("body").on("click",".color-select .select_options span",function(e){
        var $this = $(this);
        var text;
        $(".select_options span").removeClass("selected");
        $(this).addClass("selected");
        text = $(this).html();
        $(this).parents(".fancy_select").find(".select_triger span").html(text);
        $(this).parents(".fancy_select").find(".select_options").slideUp();
    });
    
    
    
  
    /*=========*/
    var qtimer;

    function qtyMsg(alertMsg, p, defaultVal) {
        p.find(".alert-msg").remove();
        p.append('<span class="alert-msg">' + alertMsg + '</span>');
        if (typeof defaultVal != "undefined") {
            p.find("input").val(defaultVal);
        }
        qtimer = setInterval(function(e) {
            if (qtimer !== null) {
                clearTimeout(qtimer);
                qtimer = null;
            }
            p.find(".alert-msg").remove();
        }, 4000);
    }
    
        /*=======================================
	sliders
	=======================================*/

        var owl = $(".owl-carousel");
        owl.each(function() {
            var $this = $(this),
                viewDots = $this.data("dots"),
                isLoop = $this.data("loop"),
                isNav = $this.data("nav"),
                viewSlides = +$this.data("slides"),
                viewSlides_md = +$this.data("slides-md"),
                viewSlides_sm = +$this.data("slides-sm"),
                slideMargin = +$this.data("margin"),
                slidesCenter = $this.data("center"),
                slidesHash = $this.data("hash"),
                nextIcon = $this.data("next"),
                prevIcon = $this.data("prev"),
                slideDrag = $this.data("drag");

            $this.owlCarousel({
                autoHeight: false,
                loop: isLoop,
                margin: slideMargin,
                nav: isNav,
                dots: viewDots,
                center: slidesCenter,
                URLhashListener: slidesHash,
                mouseDrag: slideDrag,
                navText: ["<i class='" + prevIcon + "'></i>", "<i class='" + nextIcon + "'></i>"],
                responsive: {
                    0: {
                        items: viewSlides_sm
                    },
                    600: {
                        items: viewSlides_md
                    },
                    1000: {
                        items: viewSlides
                    }
                }
            }); /*owl end*/
        }); /*each*/

    /*=======================================
	Quantity control and cart
	=======================================*/

        $('body').on("click", ".quantity-control .btn-plus", function(e) {
            var p = $(this).parent(),
                tInput = p.find("input"),
                tValue = +tInput.val(),
                maxAllowed = +tInput.attr("data-max"),
                alertMsg = tInput.attr("data-maxalert");
            if (tValue < maxAllowed) {
                tInput.val(tValue + 1);
            } else if (!p.find(".alert-msg").length) {
                qtyMsg(alertMsg, p);
            }
        });
    

        $('body').on("click", ".quantity-control .btn-minus", function(e) {
            var p = $(this).parent(),
                tInput = p.find("input"),
                tValue = +tInput.val(),
                minAllowed = +tInput.attr("data-min"),
                alertMsg = tInput.attr("data-minalert");
            if (tValue > minAllowed) {
                tInput.val(tValue - 1);
            } else if (!p.find(".alert-msg").length) {
                qtyMsg(alertMsg, p);
            }
        });

        $(".quantity-control input").keyup(function() {
            var $this = $(this),
                p = $this.parent(),
                val = $this.val(),
                minAllowed = +$this.attr("data-min"),
                maxAllowed = +$this.attr("data-max"),
                msgMax = $this.attr("data-maxalert"),
                msgMin = $this.attr("data-minalert"),
                msginvalid = $this.attr("data-invalid");
            if ($.isNumeric(val)) {
                if (val > maxAllowed) {
                    qtyMsg(msgMax, p, maxAllowed);
                } else if (val < minAllowed) {
                    qtyMsg(msgMin, p, minAllowed);
                }
            } else {

                $this.val(minAllowed);
                qtyMsg(msginvalid, p);
            }
        });

        $('body').on("click", ".openCart", function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            $(this).toggleClass("active").parent().find('.table-responsive').fadeToggle();
        });

        $('body').on("click", function(e) {
            if (!$(e.target).closest('.doc-header').length) {
                $(".cart-calculations").slideUp();
                $(".openCart").removeClass("active");
            }
        });

        $('.custome-select select').on('change', function() {
            var p = $(this).parent(".custome-select");
            p.find('span').html($(this).find('option:selected').text());
        });
    


    /*=======================================
	Accordian
	=======================================*/

    $("body").on("click", ".accordian-trigger", function(e) {
        e.preventDefault();
        $(this).parents(".accordian-wrapper").toggleClass("active");
        $(this).parents(".accordian-wrapper").find(".accordian-pane").slideToggle();
    });
    
    /*=====
    Zoom images
    =====*/
    
    $('#zoom_prod').elevateZoom({
        gallery:'gallery-zoom',
        zoomType: "inner",
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750,
        scrollZoom : true,
        galleryActiveClass: 'active',
        loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
    }); 
    
   /* $("#zoom_prod").elevateZoom({
        gallery:'gallery-zoom',
        cursor: 'pointer'
        galleryActiveClass: 'active', 
        imageCrossfade: true, 
        loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
    });*/
    
    /*======Tabs======*/
    
    $("body").on("click",".tabs a",function(e){
        e.preventDefault();
        $(".tabs li").removeClass("active");
        $(this).parent().addClass("active");
        $(".tab-pane").removeClass("active");
        $($(this).attr("href")+".tab-pane").addClass("active");
        $($(this).attr("href")+".tab-pane").addClass("opened");
        
    });
    
    $("body").on("click",".accorTrigger",function(e){
        e.preventDefault();
        $(this).parent().toggleClass("opened");
    });
    
    
    $("body").on("click",".showall",function(e){
        var $this = $(this);
        e.preventDefault();
        $(".tabs li").removeClass("active");
        $(".detail-tabs .tabs li:nth-child(4)").addClass("active");
        $(".tab-pane").removeClass("active");
        $($(this).attr("href")+".tab-pane").addClass("active");
    });
    /*=====
    Price slider
    ======*/
    var rangeSlider = document.getElementById('price-slider');
   
       noUiSlider.create(rangeSlider, {
            start: [200, 800],
            step: 1,
            margin: 10,
           connect: true,
            range: {
                'min': 0,
                'max': 1000
            }

        });
    
    var marginMin = document.getElementById('minimumprice'),
	    marginMax = document.getElementById('maximumprice');
    
    rangeSlider.noUiSlider.on('update', function ( values, handle ) {
        if ( handle ) {
            marginMax.innerHTML = values[handle];
        } else {
            marginMin.innerHTML = values[handle];
        }
    });
    rangeSlider.noUiSlider.on('change', function (values, handle) {
        search('0', '0');
    });
    /*=====
    Scrollers
    =====*/
    $(".products-scroller").mCustomScrollbar({
       autoHideScrollbar: false
    });
    $(".reviews-scroller").mCustomScrollbar({
       autoHideScrollbar: false
    });
    
    /*===Quantity Controll*/
    var qtimer;

    function qtyMsg(alertMsg, p, defaultVal) {
        p.find(".alert-msg").remove();
        p.append('<span class="alert-msg">' + alertMsg + '</span>');
        if (typeof defaultVal != "undefined") {
            p.find("input").val(defaultVal);
        }
        qtimer = setInterval(function (e) {
            if (qtimer !== null) {
                clearTimeout(qtimer);
                qtimer = null;
            }
            p.find(".alert-msg").remove();
        }, 4000);
    }

    $('body').on("click", ".quantity-control .btn-plus", function (e) {
        var p = $(this).parent(),
            tInput = p.find("input"),
            tValue = +tInput.val(),
            maxAllowed = +tInput.attr("data-max"),
            alertMsg = tInput.attr("data-maxalert");
        if (tValue < maxAllowed) {
            tInput.val(tValue + 1);
        } else if (!p.find(".alert-msg").length) {
            qtyMsg(alertMsg, p);
        }
    });

    $('body').on("click", ".quantity-control .btn-minus", function (e) {
        var p = $(this).parent(),
            tInput = p.find("input"),
            tValue = +tInput.val(),
            minAllowed = +tInput.attr("data-min"),
            alertMsg = tInput.attr("data-minalert");
        if (tValue > minAllowed) {
            tInput.val(tValue - 1);
        } else if (!p.find(".alert-msg").length) {
            qtyMsg(alertMsg, p);
        }
    });

    $(".quantity-control input").keyup(function () {
        var $this = $(this),
            p = $this.parent(),
            val = $this.val(),
            minAllowed = +$this.attr("data-min"),
            maxAllowed = +$this.attr("data-max"),
            msgMax = $this.attr("data-maxalert"),
            msgMin = $this.attr("data-minalert"),
            msginvalid = $this.attr("data-invalid");
        if ($.isNumeric(val)) {
            if (val > maxAllowed) {
                qtyMsg(msgMax, p, maxAllowed);
            } else if (val < minAllowed) {
                qtyMsg(msgMin, p, minAllowed);
            }
        } else {

            $this.val(minAllowed);
            qtyMsg(msginvalid, p);
        }
    });
    
    
    
    
    
    
    
}); /*end ready*/ /*end*/