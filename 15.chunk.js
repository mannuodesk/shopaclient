webpackJsonpac__name_([15],{

/***/ "./node_modules/ng2-owl-carousel/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var owl_carousel_component_1 = __webpack_require__("./node_modules/ng2-owl-carousel/src/owl-carousel.component.js");
var owl_child_component_1 = __webpack_require__("./node_modules/ng2-owl-carousel/src/owl-child.component.js");
__webpack_require__("./node_modules/owl.carousel/dist/owl.carousel.js");
__export(__webpack_require__("./node_modules/ng2-owl-carousel/src/owl-carousel.component.js"));
var OwlModule = (function () {
    function OwlModule() {
    }
    OwlModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                owl_carousel_component_1.OwlCarousel, owl_child_component_1.OwlChild
            ],
            exports: [
                owl_carousel_component_1.OwlCarousel,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], OwlModule);
    return OwlModule;
}());
exports.OwlModule = OwlModule;
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/ng2-owl-carousel/src/owl-carousel.component.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var owl_child_component_1 = __webpack_require__("./node_modules/ng2-owl-carousel/src/owl-child.component.js");
var OwlCarousel = (function () {
    function OwlCarousel(differs) {
        this.differs = differs;
        this.carouselClasses = "";
        this.options = {};
        this.show = true;
    }
    Object.defineProperty(OwlCarousel.prototype, "items", {
        set: function (coll) {
            this._items = coll;
            if (coll && !this.differ) {
                this.differ = this.differs.find(coll).create(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    OwlCarousel.prototype.ngDoCheck = function () {
        if (this.differ) {
            var changes = this.differ.diff(this._items);
            if (changes) {
                var changed = false;
                var changedFn = function () {
                    changed = true;
                };
                changes.forEachAddedItem(changedFn);
                changes.forEachMovedItem(changedFn);
                changes.forEachRemovedItem(changedFn);
                if (changed) {
                    this.refresh();
                }
            }
        }
    };
    OwlCarousel.prototype.refresh = function () {
        var _this = this;
        this.show = false;
        setTimeout(function () {
            _this.show = true;
        }, 0);
    };
    OwlCarousel.prototype.next = function (options) {
        this.trigger('next.owl.carousel', options);
    };
    OwlCarousel.prototype.previous = function (options) {
        this.trigger('prev.owl.carousel', options);
    };
    OwlCarousel.prototype.to = function (options) {
        this.trigger('to.owl.carousel', options);
    };
    OwlCarousel.prototype.trigger = function (action, options) {
        this.$owlChild.trigger(action, options);
    };
    __decorate([
        core_1.ViewChild('owl'), 
        __metadata('design:type', owl_child_component_1.OwlChild)
    ], OwlCarousel.prototype, "$owlChild", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "carouselClasses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], OwlCarousel.prototype, "items", null);
    OwlCarousel = __decorate([
        core_1.Component({
            selector: 'owl-carousel',
            template: '<owl-carousel-child *ngIf="show" #owl [ngClass]="carouselClasses" [options]="options">' +
                '<ng-content></ng-content></owl-carousel-child>',
        }), 
        __metadata('design:paramtypes', [core_1.IterableDiffers])
    ], OwlCarousel);
    return OwlCarousel;
}());
exports.OwlCarousel = OwlCarousel;
//# sourceMappingURL=owl-carousel.component.js.map

/***/ },

/***/ "./node_modules/ng2-owl-carousel/src/owl-child.component.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, jQuery) {"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var OwlChild = (function () {
    function OwlChild(el) {
        this.el = el;
        this.owlClass = true;
        this.options = {};
        $ = $ || jQuery;
    }
    OwlChild.prototype.ngAfterViewInit = function () {
        this.$owl = $(this.el.nativeElement).owlCarousel(this.options);
    };
    OwlChild.prototype.trigger = function (action, options) {
        this.$owl.trigger(action, options);
    };
    OwlChild.prototype.ngOnDestroy = function () {
        this.$owl.trigger('destroy.owl.carousel').removeClass('owl-loaded');
        delete this.$owl;
    };
    __decorate([
        core_1.HostBinding('class.owl-carousel'), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "owlClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "options", void 0);
    OwlChild = __decorate([
        core_1.Component({
            selector: 'owl-carousel-child',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OwlChild);
    return OwlChild;
}());
exports.OwlChild = OwlChild;
//# sourceMappingURL=owl-child.component.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./node_modules/owl.carousel/dist/owl.carousel.js":
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, jQuery) {/**
 * Owl Carousel v2.2.0
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

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
var ReviewsRatingsService_1 = __webpack_require__("./src/app/services/ReviewsRatingsService.ts");
var AddReviewModel_1 = __webpack_require__("./src/app/models/AddReviewModel.ts");
var ShoppingCartService_1 = __webpack_require__("./src/app/services/ShoppingCartService.ts");
var SharedService_1 = __webpack_require__("./src/app/services/SharedService.ts");
var SigninSignupService_1 = __webpack_require__("./src/app/services/SigninSignupService.ts");
var Home = (function () {
    /**
     * end
     */
    function Home(_productService, sharedService, _productdetail, router, _shoppingCartService, _reviewsAndRatingsService) {
        var _this = this;
        this._productService = _productService;
        this.sharedService = sharedService;
        this._productdetail = _productdetail;
        this._shoppingCartService = _shoppingCartService;
        this._reviewsAndRatingsService = _reviewsAndRatingsService;
        this.topCategories = [];
        this.dropdownCategories = [];
        /*
        productModal
        */
        this.keys = [];
        this.values = [];
        this.productId = 0;
        this.productimages = [];
        this.productReviewList = [];
        this.ProductAttributes = [];
        this.productRecentReviewList = [];
        /*
        end
        */
        /*
        Pagination Attributes
        * */
        this.pageNumber = 0;
        this.pageSize = 25;
        this.categoryId = -1;
        this.rating = 0;
        this.isReviewedNow = 0;
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
    Home.prototype.selectRating = function (val) {
        for (var i = 1; i <= 5; i++) {
            jQuery('#st' + i).removeClass('coloredStar');
        }
        for (var i = 1; i <= val; i++) {
            jQuery('#st' + i).addClass('coloredStar');
        }
        this.rating = val;
    };
    Home.prototype.AddReview = function () {
        var _this = this;
        console.log(this.reviewDescription);
        this.addReviewModel = new AddReviewModel_1.AddReviewModel();
        this.addReviewModel.customerId = this.user.Id;
        this.addReviewModel.productId = this.productId;
        this.addReviewModel.reviewDescription = this.reviewDescription;
        this.addReviewModel.customerId = this.user.Id;
        this.addReviewModel.rating = this.rating;
        this._reviewsAndRatingsService.addReview(this.addReviewModel).subscribe(function (data) {
            if (data.code == 200) {
                _this.successMsgAfterReview = "Your Review is Submitted Successfully.";
                _this.isAllowedReview = 0;
                _this.isReviewedNow = 1;
            }
            console.log(data);
        });
    };
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
                this.user = JSON.parse(localStorage.getItem('user'));
                this._productdetail.getProductDetails(productId, this.user.Id).subscribe(function (a) {
                    _this.isAllowedReview = a.data.isAllowedForReview;
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
                this._reviewsAndRatingsService.getReviewsAndRatings(productId, 0, 10).subscribe(function (data) {
                    _this.reviewsRatings = data.data;
                    _this.productReviewList = _this.reviewsRatings.productReviewList;
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
        $('.owl-2').owlCarousel({
            loop: true,
            margin: 10,
            autoWidth: true,
            nav: false,
            dots: false,
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
            providers: [ProductService_1.ProductService, ProductDetailsService_1.ProductDetailsService, ShoppingCartService_1.ShoppingCartService, SigninSignupService_1.SigninSignupService, SharedService_1.SharedService, ReviewsRatingsService_1.ReviewsRatingsService],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof ProductService_1.ProductService !== 'undefined' && ProductService_1.ProductService) === 'function' && _b) || Object, (typeof (_c = typeof SharedService_1.SharedService !== 'undefined' && SharedService_1.SharedService) === 'function' && _c) || Object, (typeof (_d = typeof ProductDetailsService_1.ProductDetailsService !== 'undefined' && ProductDetailsService_1.ProductDetailsService) === 'function' && _d) || Object, (typeof (_e = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _e) || Object, (typeof (_f = typeof ShoppingCartService_1.ShoppingCartService !== 'undefined' && ShoppingCartService_1.ShoppingCartService) === 'function' && _f) || Object, (typeof (_g = typeof ReviewsRatingsService_1.ReviewsRatingsService !== 'undefined' && ReviewsRatingsService_1.ReviewsRatingsService) === 'function' && _g) || Object])
    ], Home);
    return Home;
    var _a, _b, _c, _d, _e, _f, _g;
}());
exports.Home = Home;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/home/home.component.scss":
/***/ function(module, exports) {

module.exports = ".no-products {\n  text-align: center;\n  font-size: 18px;\n  color: #34bac5;\n  display: none;\n  text-decoration: underline; }\n\n.loader-products {\n  background: url(assets/img/loader.svg) no-repeat center center;\n  height: 100px;\n  display: block;\n  margin-bottom: 50px;\n  position: relative; }\n"

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
var ng2_owl_carousel_1 = __webpack_require__("./node_modules/ng2-owl-carousel/index.js");
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

module.exports = "<!--========================================\r\nMain\r\n===========================================-->\r\n\r\n<!-- Main Container -->\r\n<div class=\"main-section\">\r\n    <div class=\"category-list\">\r\n        <div class=\"container-fluid\">\r\n            <a class=\"category-triger\" href=\"#\">\r\n                <i class=\"fa fa-bars\"></i>\r\n                <i class=\"fa fa-caret-down\"></i>\r\n            </a>\r\n            <ul class=\"semibold\" id=\"largeDevices\">\r\n                <li class=\"active\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(-1)\">Featured</a></li>\r\n                <li *ngFor=\"let category of topCategories\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(category.Id)\">{{category.Name}}</a></li>\r\n                \r\n                <!--<li><a class=\"btn btn-block\" href=\"#\">MORE +</a></li>-->\r\n                <li class=\"cat-drop-triger\"><a class=\"btn btn-block\" href=\"#\">MORE +</a>\r\n                    <ul class=\"cat-dropdown semibold\">\r\n                        <li *ngFor=\"let category of dropdownCategories\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(category.Id)\">{{category.Name}}</a></li>\r\n                    </ul>    \r\n                </li>\r\n            </ul>\r\n\r\n\r\n           <!--  <ul class=\"semibold\">  id=\"smallDevices\"  \r\n                <li class=\"active\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(-1)\">Featured</a></li>\r\n                <li *ngFor=\"let category of topCategories\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(category.Id)\">{{category.Name}}</a></li>\r\n                <li *ngFor=\"let category of dropdownCategories\"><a class=\"btn btn-block\" href=\"#\" (click)=\"onCategoryClick(category.Id)\">{{category.Name}}</a></li>\r\n                \r\n            </ul>-->\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"tags-list\">\r\n        <div class=\"container-fluid\">\r\n            <a class=\"category-triger\" href=\"#\">\r\n                <i class=\"fa fa-bars\"></i>\r\n                <i class=\"fa fa-caret-down\"></i>\r\n            </a>\r\n            <div class=\"filter-icon\"><button class=\"icon\" (click)=\"openFilterDialog()\"><img src=\"assets/img/images/filterIcon_03.png\"></button></div>\r\n            <ul class=\"texxt hash-tags\">\r\n                <li><a class=\"\" href=\"#\">#Latest</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Phone</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n                <li><a class=\"\" href=\"#\">#Gadgets</a></li>\r\n                <li><a class=\"\" href=\"#\">#Hobbies</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n                <li><a class=\"\" href=\"#\">#Gadgets</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n            </ul>\r\n\r\n    <div class=\"dropdown hashtagDropDown\">\r\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">#Tags\r\n        <span class=\"caret\"></span></button>\r\n\r\n\r\n\r\n        <ul class=\"texxt  dropdown-menu\">\r\n                <li><a class=\"\" href=\"#\">#Latest</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Phone</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n                <li><a class=\"\" href=\"#\">#Gadgets</a></li>\r\n                <li><a class=\"\" href=\"#\">#Hobbies</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n                <li><a class=\"\" href=\"#\">#Gadgets</a></li>\r\n                <li><a class=\"\" href=\"#\">#Fashion</a></li>\r\n                <li><a class=\"\" href=\"#\">#Upgrades</a></li>\r\n        </ul>\r\n    </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n<div class=\"mobile-caraousel-cats\">\r\n\r\n<owl-carousel #owlElement\r\n     [options]=\"{ dots: false, navigation: false, margin:10}\"\r\n     [items]=\"dropdownCategories\"\r\n     [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n     <div class=\"item\" *ngFor=\"let category of dropdownCategories;let i = index\">\r\n        <a class=\"cat-btns\" href=\"#\" (click)=\"onCategoryClick(category.Id)\">{{category.Name}}</a>\r\n     </div>\r\n </owl-carousel>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"mobile-caraousel\">\r\n<div class=\"filter-icon-carousel\"><button class=\"\" (click)=\"openFilterDialog()\"><img src=\"assets/img/images/filterIcon_03.png\"></button></div>\r\n<div class=\"owl-carousel owl-2 owl-theme\" id=\"tagsCaraousel\">\r\n    \r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Latest</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Upgrades</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Gadgets</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Upgrades</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Gadgets</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Upgrades</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Gadgets</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Upgrades</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Gadgets</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Upgrades</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Gadgets</a></div>\r\n    <div class=\"item\"><a class=\"\" href=\"#\">#Upgrades</a></div>\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n    <div class=\"container-fluid\">\r\n\r\n\r\n                <div id=\"filter-content\">\r\n\r\n            <div class=\"row filter-btns-row\" >\r\n\r\n                 <div class=\"col-md-6 col-xs-8\">\r\n\r\n                    <h4 class=\"filter-heading\">Filter by</h4>\r\n\r\n                 </div>\r\n\r\n                 <div class=\"col-md-6 col-xs-4\">\r\n\r\n                        <div class=\"x-holder pull-right\">\r\n                            <button (click)=\"openFilterDialog()\" class=\"close-holder\">\r\n                            <img src=\"assets/img/images/x.png\">\r\n                            </button>\r\n                        </div>\r\n\r\n                 </div>\r\n    \r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"row all-filters\" >\r\n\r\n                <div class=\"col-md-3\">\r\n\r\n                        <h4 class=\"filter-subheading\">price</h4>\r\n\r\n\r\n                    <ul class=\"brand-filter price-filter\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"forid1\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"forid1\"><i class=\"fa\"></i>Low to High</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"forid2\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"forid2\"><i class=\"fa\"></i>High to Low</label>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n\r\n                   \r\n\r\n                    <div class=\"price-filter clearfix\">\r\n                            <div class=\"min-price\">\r\n                                <input type=\"text\" class=\"search-fields\" placeholder=\"MIN\">\r\n                            </div>\r\n                            <div class=\"dash\">-</div>\r\n                            <div class=\"max-price\">\r\n                                <input type=\"text\" class=\"search-fields\" placeholder=\"MAX\">\r\n                            </div>\r\n                    </div>\r\n\r\n\r\n                    <h4 class=\"filter-subheading second-sub\">Shipping</h4>\r\n\r\n\r\n                    <ul class=\"brand-filter ship-filter\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Free\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Free\"><i class=\"fa\"></i>Free</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"days3\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"days3\"><i class=\"fa\"></i>3 days or less</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"days7\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"days7\"><i class=\"fa\"></i>7 days or less</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"days14\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"days14\"><i class=\"fa\"></i>14 days or less</label>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n\r\n\r\n\r\n\r\n                </div>\r\n\r\n                <div class=\"col-md-2 col-xs-6\">\r\n\r\n                    <div class=\"second-column\">\r\n\r\n                        <h4 class=\"filter-subheading\">Sold</h4>\r\n\r\n\r\n                        <ul class=\"brand-filter rank-filter\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Highest\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Highest\"><i class=\"fa\"></i>Highest</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Lowest\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Lowest\"><i class=\"fa\"></i>Lowest</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Newproduct\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Newproduct\"><i class=\"fa\"></i>NEW Product</label>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n\r\n\r\n                        <h4 class=\"filter-subheading second-sub\">Gender</h4>\r\n\r\n\r\n                        <ul class=\"brand-filter gender-filter\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Women\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Women\"><i class=\"fa\"></i>Women</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Men\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Men\"><i class=\"fa\"></i>Men</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Girl\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Girl\"><i class=\"fa\"></i>Girl</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"Boy\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Boy\"><i class=\"fa\"></i>Boy</label>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col-md-2 col-xs-6\">\r\n\r\n                    <div class=\"third-column\">\r\n                    \r\n                    <h4 class=\"filter-subheading\">SIZE</h4>\r\n\r\n\r\n                        <ul class=\"brand-filter size-filter\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XXS\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XXS\"><i class=\"fa\"></i>XXS</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XS\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XS\"><i class=\"fa\"></i>XS</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"S\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"S\"><i class=\"fa\"></i>S</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"M\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"M\"><i class=\"fa\"></i>M</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"L\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"L\"><i class=\"fa\"></i>L</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XL\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XL\"><i class=\"fa\"></i>XL</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XXL\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XXL\"><i class=\"fa\"></i>XXL</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XXXL\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XXXL\"><i class=\"fa\"></i>XXXL</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XXXXL\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XXXXL\"><i class=\"fa\"></i>XXXXL</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <input id=\"XXXXXL\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"XXXXXL\"><i class=\"fa\"></i>XXXXXL</label>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n\r\n                        </div>\r\n\r\n                </div>\r\n\r\n\r\n              <div class=\"col-md-2  col-xs-5\">\r\n\r\n\r\n                <h4 class=\"filter-subheading\">COLOR</h4>\r\n\r\n                    <div class=\"fourth-column\">\r\n\r\n                        <ul class=\"brand-filter colorsList\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:grey\"></div>\r\n                                <input id=\"Gray\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Gray\"><i class=\"fa\"></i>Gray</label>\r\n                            </div>\r\n                        </li>\r\n                         <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:black\"></div>\r\n                                <input id=\"Black\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Black\"><i class=\"fa\"></i>Black</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#fffafa\"></div>\r\n                                <input id=\"White\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"White\"><i class=\"fa\"></i>White</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#fe5c5c\"></div>\r\n                                <input id=\"Red\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Red\"><i class=\"fa\"></i>Red</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#ff9325\"></div>\r\n                                <input id=\"Orange\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Orange\"><i class=\"fa\"></i>Orange</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#ffdf00\"></div>\r\n                                <input id=\"Yellow\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Yellow\"><i class=\"fa\"></i>Yellow</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#05e177\"></div>\r\n                                <input id=\"Green\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Green\"><i class=\"fa\"></i>Green</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#7788ee\"></div>\r\n                                <input id=\"Blue\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Blue\"><i class=\"fa\"></i>Blue</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#aa83cb\"></div>\r\n                                <input id=\"Voilet\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Voilet\"><i class=\"fa\"></i>Voilet</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#c653ff\"></div>\r\n                                <input id=\"Purple\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Purple\"><i class=\"fa\"></i>Purple</label>\r\n                            </div>\r\n                        </li>           \r\n                    </ul>\r\n\r\n\r\n                    </div>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            <div class=\"col-md-2 col-xs-7\">\r\n\r\n                <div class=\"fifth-column\">\r\n\r\n                        <ul class=\"brand-filter colorsList\">\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#d64ecf\"></div>\r\n                                <input id=\"Magneta\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Magneta\"><i class=\"fa\"></i>Magenta</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#4ed6cb\"></div>\r\n                                <input id=\"Cyan\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Cyan\"><i class=\"fa\"></i>Cyan</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#fcc6e2\"></div>\r\n                                <input id=\"Pink\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Pink\"><i class=\"fa\"></i>Pink</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#ece7d6\"></div>\r\n                                <input id=\"Beige\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Beige\"><i class=\"fa\"></i>Beige</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#994c04\"></div>\r\n                                <input id=\"Brown\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Brown\"><i class=\"fa\"></i>Brown</label>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#7b8ea5\"></div>\r\n                                <input id=\"Silver\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Silver\"><i class=\"fa\"></i>Silver</label>\r\n                            </div>\r\n                        </li>\r\n                         <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#c9ac66\"></div>\r\n                                <input id=\"Gold\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Gold\"><i class=\"fa\"></i>Gold</label>\r\n                            </div>\r\n                        </li>\r\n                         <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#cd7f32\"></div>\r\n                                <input id=\"Bronze\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Bronze\"><i class=\"fa\"></i>Bronze</label>\r\n                            </div>\r\n                        </li>\r\n                         <li>\r\n                            <div class=\"custom-form-wid check\">\r\n                                <div class=\"color-box\" style=\"background:#c653ff\"></div>\r\n                                <input id=\"Multi\" name=\"checkbox\" type=\"checkbox\" value=\"\">\r\n                                <label for=\"Multi\"><i class=\"fa\"></i>Multi-color</label>\r\n                            </div>\r\n                        </li>\r\n                        </ul>\r\n\r\n                    </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"action-buttons\">\r\n                    <div class=\"left-btn\">\r\n                 <button class=\"btn  searchBtn\">Search</button>\r\n                    </div>\r\n                    <div class=\"right-btn\">\r\n                 <button class=\"btn  clearBtn\" (click)=\"clearAll()\">Clear all</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n \r\n\r\n\r\n\r\n        \r\n        <div class=\"products-main gif-loading\">\r\n            <div class=\"products-wrapper grid-4 products clearfix loading\">\r\n                <div class=\"product\" *ngFor=\"let product of products\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                    <div class=\"product-inner\" [ngStyle]=\"{'background-image': 'url(' + product.imageUrl + ')'}\">\r\n                        <span *ngIf=\"product.discount != 0\" class=\"discount-tag semibold\">-{{product.discount}}%</span>\r\n                    </div>\r\n                    <div class=\"product-description\">\r\n                       <span *ngIf=\"product.oldPrice != 0\" class=\"old-price medium\">$ {{product.oldPrice}}</span>\r\n                        <span class=\"new-price medium\">${{product.productPrice}}</span>\r\n                        <span *ngIf=\"product.orderCount != 0\" class=\"item-sold medium\">{{product.orderCount}}+ sold</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"semibold no-products\">\r\n                    No Products Found!\r\n                </div>\r\n            </div>\r\n        </div>\r\n                \r\n    </div>\r\n</div>\r\n\r\n<div class=\"loader-products\">\r\n        </div> \r\n        \r\n<div class=\"my-modal prod-detail-modal\">\r\n    <div class=\"modal_style\">\r\n        <div class=\"modal-inner\">\r\n        <a class=\"close-modal\" href=\"#\">Close<i class=\"fa fa-remove\"></i></a>\r\n        <div class=\"detail-page modal-view\">\r\n            <div class=\"prod-detail-top clearfix\">\r\n                <div class=\"prod-zoom\">\r\n\r\n                   <!-- <div id=\"zoom_prod\" class=\"zoom-main\" [ngStyle]=\"{'background-image': 'url(' + mainimage + ')'}\" [attr.data-zoom-image]=\"mainimage\">\r\n                        <span class=\"tag medium\"><i class=\"fa fa-arrows-alt\"></i>Mouseover to zoom image</span>\r\n\t\t\t\t\t\t<div class=\"detail-discount-tag\" *ngIf=\"discountpercentage!=0\"><p>-{{discountpercentage}}%</p></div>\r\n                    </div> -->\r\n                    <div class=\"magnify\">\r\n                    \t<div class=\"large\"></div>\r\n                    <img class=\"small\" src=\"{{mainimage}}\">\r\n                    </div>\r\n                    <ul id=\"gallery-zoom\" class=\"thumbnails clearfix\">\r\n                        \r\n                        <li *ngFor=\"let img of productimages\">\r\n                            <a (click)=\"changeimage(img.FullSizeImageUrl)\" id=\"toprevent\" [attr.data-image]=\"img.ImageUrl\" [attr.data-zoom-image]=\"img.ImageUrl\">\r\n                                <div id=\"zoom_prod\" class=\"thumb\" [ngStyle]=\"{'background-image': 'url(' + img.ImageUrl + ')'}\">\r\n                                </div>\r\n                              \r\n                            </a>\r\n                        </li>\r\n                        \r\n                    </ul>\r\n                </div>\r\n                <div class=\"detail-content\">\r\n                    <h2 class=\"medium\">{{producttitle}}</h2>\r\n                     <div class=\"star-rating star-{{ratingAverage}}\"></div>\r\n                                        <div class=\"rating-count medium\">({{totalRating}})</div>\r\n                    <div class=\"price\">\r\n                        <span class=\"now medium\"> {{productprice}} </span><span class=\"texxt currency\">USD</span>\r\n                        <del class=\"medium\">{{oldprice}}</del>\r\n                        \r\n                    </div>\r\n                   \r\n                    \r\n                    <div class=\"selections\">\r\n                        <ul class=\"clearfix\">\r\n                            <li *ngFor=\"let productAttribute of ProductAttributes\">\r\n                                <div class=\"fancy_select select-category\">\r\n                                    <div class=\"select_triger\">\r\n                                        <span class=\"text medium\">{{productAttribute.Name}}</span>\r\n                                        <i class=\"fa fa-angle-down\"></i>\r\n                                    </div>\r\n                                    <div class=\"select_options\">\r\n                                       \r\n                                        <span *ngFor=\"let value of productAttribute.Values\" (click)=\"makeKeyValue(productAttribute.Id,value.Id)\">{{value.Name}}</span>\r\n                                        \r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                           \r\n                        </ul>\r\n                        \r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div id=\"addToCartErrors\" class=\"error\">\r\n                            <label *ngFor=\"let error of errors\" class=\"texxt error-width\">{{error}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"prod-btns clearfix\">\r\n                        <a class=\"buy cart-btn medium\" (click)=\"onBuyNow()\"><img src=\"assets/img/images/thumb_03.png\">&nbsp;&nbsp;&nbsp;Buy</a>\r\n                        <a class=\"save cart-btn medium\" (click)=\"onWishList()\"><img src=\"assets/img/images/thumb_07.png\">&nbsp;&nbsp;&nbsp;Save</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"prod-detail-bottom\">\r\n                <div class=\"tabs-wrapper detail-tabs\">\r\n                    <ul class=\"tabs clearfix semibold\">\r\n                        <li class=\"active\"><a href=\"#tab1\">Overview</a></li>\r\n                        <li><a href=\"#tab2\">Related Products</a></li>\r\n                        <li><a href=\"#tab3\">Description</a></li>\r\n                        <li><a href=\"#tab4\">Ratings</a></li>\r\n                        <li><a href=\"#tab6\">Shipping</a></li>\r\n                    </ul>\r\n                    <div class=\"tab-panel\">\r\n                        <div id=\"tab1\" class=\"tab-pane active\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Overview</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"tab-overview clearfix\">\r\n                                    <div class=\"review\">\r\n                                        <div *ngIf=\"isReviewedNow==1\">\r\n                                           <b> Your Review is Submitted Successfully.</b>\r\n                                        </div>\r\n                                       <div *ngIf=\"isAllowedReview==1\" class=\"add-review clearfix\">\r\n                                            <h4>add a review</h4>\r\n                                            <div class=\"add_review_stars\">\r\n                                                <i id=\"st1\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"selectRating(1)\"></i>\r\n                                                <i id=\"st2\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"selectRating(2)\"></i>\r\n                                                <i id=\"st3\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"selectRating(3)\"></i>\r\n                                                <i id=\"st4\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"selectRating(4)\"></i>\r\n                                                <i id=\"st5\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"selectRating(5)\"></i>\r\n                                            </div>\r\n                                            <textarea [(ngModel)]=\"reviewDescription\" placeholder=\"Max 250 characters...\"></textarea>\r\n                                            <button (click)=\"AddReview()\" class=\"btn btn-blue submit\">Submit Review</button>\r\n                                        </div>\r\n                                        <div class=\"prod-reviews small clearfix\">\r\n                                            <h4>recent reviews</h4>\r\n                                            <a class=\"showall\" href=\"#tab4\">VIEW ALL</a>\r\n                                            <div class=\"clearfix\"></div>\r\n                                            <div class=\"unit-wrapper\">\r\n                                                \r\n                                                   <div class=\"review-unit\"  *ngFor=\"let value of productRecentReviewList\">\r\n                                           <figure  class=\"visual\" [ngStyle]=\"{'background-image': 'url(' + value.imageUrl + ')'}\"></figure>\r\n                                            <div class=\"star-rating star-{{value.customerRatings}}\"></div>\r\n                                            <h5 class=\"name\">{{value.customerName}}</h5>\r\n                                            <p>{{value.reviewDescription}}</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"arrival\">\r\n                                        <ul class=\"text-list\">\r\n                                            <li>\r\n                                                <span class=\"text\">estimated arrival</span>\r\n                                                <span class=\"text1\">30 - 40 days</span>\r\n                                            </li>\r\n                                            <li>\r\n                                                <span class=\"text\">shipping</span>\r\n                                                <span class=\"text1\">$ 2.00</span>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab2\" class=\"tab-pane \">\r\n                            <a href=\"#\" class=\"accorTrigger\">Related Products</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"products-wrapper grid-4 products clearfix related\">\r\n                                   \r\n\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"product\" (mousedown)=\"rightClick($event, product.Id)\">\r\n                                        <div class=\"product-inner\" style=\"background:url(assets/img/block-img.jpg)\">\r\n                                            <span class=\"discount-tag semibold\">-70%</span>\r\n                                        </div>\r\n                                        <div class=\"product-description\">\r\n                                        <span class=\"old-price medium\">$ 50</span>\r\n                                            <span class=\"new-price medium\">$ 80-</span>\r\n                                            <span class=\"item-sold medium\"> 2+ sold</span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    \r\n                                   \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab3\" class=\"tab-pane\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Description</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"prod-description\">\r\n                                    <h4>Description</h4>\r\n                                    <span [innerHtml]=\"productdescription\"></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab4\" class=\"tab-pane\">\r\n                            <a href=\"#\" class=\"accorTrigger\">Ratings</a>\r\n                            <div class=\"accorContent\">\r\n                                <div class=\"total-ratings\">\r\n                                <div class=\"main\">\r\n                                          <div class=\"star-rating star-{{ratingAverage}}\"></div>\r\n                                        <span class=\"count\">({{totalRating}})</span>\r\n                                    </div>\r\n                                    <ul>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-5\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-4\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-3\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-2\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"68\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 68%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"rating\">\r\n                                                <div class=\"star-rating star-1\"></div>\r\n                                            </div>\r\n                                            <div class=\"progress\">\r\n                                              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%\">\r\n                                                <span class=\"sr-only\">40% Complete (success)</span>\r\n                                              </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                \r\n                                <div class=\"prod-reviews full clearfix\">\r\n                                    <div class=\"unit-wrapper\">\r\n                                        <div class=\"reviews-scroller\">\r\n                                      \r\n                                        <div class=\"review-unit\" *ngFor=\"let value of productReviewList\">\r\n                                            <figure class=\"visual\" [ngStyle]=\"{'background-image': 'url(' + value.imageUrl + ')'}\"></figure>\r\n                                            <div class=\"star-rating star-{{value.customerRatings}}\"></div>\r\n                                            <h5 class=\"name\">{{value.customerName}}</h5>\r\n                                            <p>{{value.reviewDescription}}</p>\r\n                                            <span class=\"time\">about 9 hours ago</span>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div id=\"tab6\" class=\"tab-pane \">\r\n                            <a href=\"#\" class=\"accorTrigger\">Shipping</a>\r\n                             <div class=\"accorContent\">\r\n                                <div class=\"shipping-detail\">\r\n                                    <h4>Shipping details</h4>\r\n                                    <ul class=\"detail\">\r\n                                        <li><span class=\"title\">Estimated shipping</span><span class=\"values\">$ 4.99</span></li>\r\n                                        <li><span class=\"title\">Availability</span><span class=\"values\">Ships to United States and 32 other countries</span></li>\r\n                                        <li><span class=\"title\">Estimated arrival</span><span class=\"values\">17 - 23 days</span></li>\r\n                                        <li><span class=\"title\">Return policy</span><span class=\"values\">You may return all products within 30 days of delivery.\r\n                                            </span><a class=\"more-detail\" href=\"#\">More Details</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

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
//# sourceMappingURL=15.map