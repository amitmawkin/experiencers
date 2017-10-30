webpackJsonp(["components.module"],{

/***/ "../../../../../src/app/pages/components/components-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component__ = __webpack_require__("../../../../../src/app/pages/components/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tree_tree_component__ = __webpack_require__("../../../../../src/app/pages/components/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/pages/components/notifications/notifications.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_component__["a" /* ComponentsComponent */],
        children: [
            {
                path: 'tree',
                component: __WEBPACK_IMPORTED_MODULE_3__tree_tree_component__["a" /* TreeComponent */],
            }, {
                path: 'notifications',
                component: __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__["a" /* NotificationsComponent */],
            },
        ],
    }];
var ComponentsRoutingModule = (function () {
    function ComponentsRoutingModule() {
    }
    return ComponentsRoutingModule;
}());
ComponentsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
    })
], ComponentsRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__components_component__["a" /* ComponentsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__tree_tree_component__["a" /* TreeComponent */],
    __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__["a" /* NotificationsComponent */],
];
//# sourceMappingURL=components-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/components/components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsComponent = (function () {
    function ComponentsComponent() {
    }
    return ComponentsComponent;
}());
ComponentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-components',
        template: "\n    <router-outlet></router-outlet>\n  ",
    })
], ComponentsComponent);

//# sourceMappingURL=components.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_tree__ = __webpack_require__("../../../../ng2-tree/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_routing_module__ = __webpack_require__("../../../../../src/app/pages/components/components-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_routing_module__["a" /* ComponentsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_tree__["TreeModule"],
            __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["c" /* ToasterModule */],
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_4__components_routing_module__["b" /* routedComponents */].slice(),
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/components/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Toaster configuration\n  </nb-card-header>\n  <nb-card-body>\n    <toaster-container [toasterconfig]=\"config\"></toaster-container>\n\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <div class=\"form-group\">\n          <label class=\"form-control-label\">Place to show toast:</label>\n          <div ngbDropdown>\n            <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\n              {{ position }}\n            </button>\n            <ul class=\"dropdown-menu\">\n              <li class=\"dropdown-item\" *ngFor=\"let p of positions\" (click)=\"position = p\">\n                {{ p }}\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"form-control-label\">Animation type:</label>\n          <div ngbDropdown>\n            <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\n              {{ animationType }}\n            </button>\n            <ul class=\"dropdown-menu\">\n              <li class=\"dropdown-item\" *ngFor=\"let at of animations\" (click)=\"animationType = at\">\n                {{ at }}\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"form-control-label\">Title:</label>\n          <input class=\"form-control\" [(ngModel)]=\"title\" name=\"title\">\n        </div>\n        <form>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Content:</label>\n            <input class=\"form-control\" [(ngModel)]=\"content\" name=\"content\">\n          </div>\n        </form>\n        <div class=\"form-group\">\n          <label class=\"form-control-label\">Time to hide toast, ms. 0 to persistent toast:</label>\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"timeout\"name=\"timeout\">\n        </div>\n      </div>\n\n      <div class=\"col-md-6 col-sm-12\">\n        <div class=\"form-group\">\n          <label class=\"form-control-label\">Limit number of toasts:</label>\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"toastsLimit\" name=\"limit\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"form-control-label\">Toast type:</label>\n          <div ngbDropdown>\n            <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\n              {{ type }}\n            </button>\n            <ul class=\"dropdown-menu\">\n              <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"type = t\">{{ t }}</li>\n            </ul>\n          </div>\n        </div>\n\n        <div><nb-checkbox [(ngModel)]=\"isNewestOnTop\">Newest on top</nb-checkbox></div>\n        <div><nb-checkbox [(ngModel)]=\"isHideOnClick\">Hide on click</nb-checkbox></div>\n        <div><nb-checkbox [(ngModel)]=\"isDuplicatesPrevented\">Prevent arising of duplicate toast</nb-checkbox></div>\n        <div><nb-checkbox [(ngModel)]=\"isCloseButton\">Close button</nb-checkbox></div>\n      </div>\n    </div>\n  </nb-card-body>\n\n  <nb-card-footer>\n    <button class=\"btn btn-primary\" (click)=\"makeToast()\">Show toast</button>\n    <button class=\"btn btn-success\" (click)=\"openRandomToast()\">Random toast</button>\n    <button class=\"btn btn-danger\" (click)=\"clearToasts()\">Clear all toasts</button>\n  </nb-card-footer>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/components/notifications/notifications.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /* stylelint-disable */\n  /* stylelint-enable */ }\n  :host-context(.nb-theme-default) nb-card-footer {\n    padding-bottom: 0.25rem; }\n    :host-context(.nb-theme-default) nb-card-footer button {\n      margin: 0 1rem 1rem 0; }\n  :host-context(.nb-theme-default) toaster-container /deep/ #toast-container .toast-close-button {\n    right: 0; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) .dropdown-toggle {\n      font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) {\n  /* stylelint-disable */\n  /* stylelint-enable */ }\n  :host-context(.nb-theme-cosmic) nb-card-footer {\n    padding-bottom: 0.25rem; }\n    :host-context(.nb-theme-cosmic) nb-card-footer button {\n      margin: 0 1rem 1rem 0; }\n  :host-context(.nb-theme-cosmic) toaster-container /deep/ #toast-container .toast-close-button {\n    right: 0; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .dropdown-toggle {\n      font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/components/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_style_loader_angular2_toaster_toaster_css__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = (function () {
    function NotificationsComponent(toasterService) {
        this.toasterService = toasterService;
        this.position = 'toast-top-right';
        this.animationType = 'fade';
        this.title = 'HI there!';
        this.content = "I'm cool toaster!";
        this.timeout = 5000;
        this.toastsLimit = 5;
        this.type = 'default';
        this.isNewestOnTop = true;
        this.isHideOnClick = true;
        this.isDuplicatesPrevented = false;
        this.isCloseButton = true;
        this.types = ['default', 'info', 'success', 'warning', 'error'];
        this.animations = ['fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'];
        this.positions = ['toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center',
            'toast-top-right', 'toast-bottom-right', 'toast-bottom-center', 'toast-bottom-left', 'toast-center'];
        this.quotes = [
            { title: null, body: 'We rock at <i>Angular</i>' },
            { title: null, body: 'Titles are not always needed' },
            { title: null, body: 'Toastr rock!' },
            { title: 'What about nice html?', body: '<b>Sure you <em>can!</em></b>' },
        ];
    }
    NotificationsComponent.prototype.makeToast = function () {
        this.showToast(this.type, this.title, this.content);
    };
    NotificationsComponent.prototype.openRandomToast = function () {
        var typeIndex = Math.floor(Math.random() * this.types.length);
        var quoteIndex = Math.floor(Math.random() * this.quotes.length);
        var type = this.types[typeIndex];
        var quote = this.quotes[quoteIndex];
        this.showToast(type, quote.title, quote.body);
    };
    ;
    NotificationsComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterConfig */]({
            positionClass: this.position,
            timeout: this.timeout,
            newestOnTop: this.isNewestOnTop,
            tapToDismiss: this.isHideOnClick,
            preventDuplicates: this.isDuplicatesPrevented,
            animation: this.animationType,
            limit: this.toastsLimit,
        });
        var toast = {
            type: type,
            title: title,
            body: body,
            timeout: this.timeout,
            showCloseButton: this.isCloseButton,
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    NotificationsComponent.prototype.clearToasts = function () {
        this.toasterService.clear();
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-notifications',
        styles: [__webpack_require__("../../../../../src/app/pages/components/notifications/notifications.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/components/notifications/notifications.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["d" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["d" /* ToasterService */]) === "function" && _a || Object])
], NotificationsComponent);

var _a;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/components/tree/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>Tree</nb-card-header>\n      <nb-card-body>\n        <tree [tree]=\"tree\"></tree>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/components/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TreeComponent = (function () {
    function TreeComponent() {
        this.tree = {
            value: 'Programming languages by programming paradigm',
            children: [{
                    value: 'Object-oriented programming',
                    children: [{
                            value: 'Java',
                        }, {
                            value: 'C++',
                        }, {
                            value: 'C#',
                        }],
                }, {
                    value: 'Prototype-based programming',
                    children: [{
                            value: 'JavaScript',
                        }, {
                            value: 'CoffeeScript',
                        }, {
                            value: 'Lua',
                        }],
                }],
        };
    }
    return TreeComponent;
}());
TreeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-tree',
        template: __webpack_require__("../../../../../src/app/pages/components/tree/tree.component.html"),
    })
], TreeComponent);

//# sourceMappingURL=tree.component.js.map

/***/ }),

/***/ "../../../../angular2-toaster/angular2-toaster.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_toast_component__ = __webpack_require__("../../../../angular2-toaster/src/toast.component.js");
/* unused harmony reexport ToastComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_toaster_container_component__ = __webpack_require__("../../../../angular2-toaster/src/toaster-container.component.js");
/* unused harmony reexport ToasterContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_toaster_service__ = __webpack_require__("../../../../angular2-toaster/src/toaster.service.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toaster_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_toaster_config__ = __webpack_require__("../../../../angular2-toaster/src/toaster-config.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__src_toaster_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_bodyOutputType__ = __webpack_require__("../../../../angular2-toaster/src/bodyOutputType.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__src_bodyOutputType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_toaster_module__ = __webpack_require__("../../../../angular2-toaster/src/toaster.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__src_toaster_module__["a"]; });






//# sourceMappingURL=angular2-toaster.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/bodyOutputType.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyOutputType; });
var BodyOutputType;
(function (BodyOutputType) {
    BodyOutputType[BodyOutputType["Default"] = 0] = "Default";
    BodyOutputType[BodyOutputType["TrustedHtml"] = 1] = "TrustedHtml";
    BodyOutputType[BodyOutputType["Component"] = 2] = "Component";
})(BodyOutputType || (BodyOutputType = {}));
//# sourceMappingURL=bodyOutputType.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toast.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bodyOutputType__ = __webpack_require__("../../../../angular2-toaster/src/bodyOutputType.js");



var ToastComponent = (function () {
    function ToastComponent(sanitizer, componentFactoryResolver, changeDetectorRef) {
        this.sanitizer = sanitizer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.bodyOutputType = __WEBPACK_IMPORTED_MODULE_2__bodyOutputType__["a" /* BodyOutputType */];
        this.clickEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ToastComponent.prototype.ngOnInit = function () {
        if (this.toast.closeHtml) {
            this.safeCloseHtml = this.sanitizer.bypassSecurityTrustHtml(this.toast.closeHtml);
        }
    };
    ToastComponent.prototype.ngAfterViewInit = function () {
        if (this.toast.bodyOutputType === this.bodyOutputType.Component) {
            var component = this.componentFactoryResolver.resolveComponentFactory(this.toast.body);
            var componentInstance = this.componentBody.createComponent(component, undefined, this.componentBody.injector);
            componentInstance.instance.toast = this.toast;
            this.changeDetectorRef.detectChanges();
        }
    };
    ToastComponent.prototype.click = function (event, toast) {
        event.stopPropagation();
        this.clickEvent.emit({
            value: { toast: toast, isCloseButton: true }
        });
    };
    return ToastComponent;
}());

ToastComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: '[toastComp]',
                template: "\n        <i class=\"toaster-icon\" [ngClass]=\"iconClass\"></i>\n        <div class=\"toast-content\">\n            <div [ngClass]=\"toast.toasterConfig?.titleClass\">{{toast.title}}</div>\n            <div [ngClass]=\"toast.toasterConfig?.messageClass\" [ngSwitch]=\"toast.bodyOutputType\">\n                <div *ngSwitchCase=\"bodyOutputType.Component\" #componentBody></div>\n                <div *ngSwitchCase=\"bodyOutputType.TrustedHtml\" [innerHTML]=\"toast.body\"></div>\n                <div *ngSwitchCase=\"bodyOutputType.Default\">{{toast.body}}</div>\n            </div>\n        </div>\n        <div class=\"toast-close-button\" *ngIf=\"toast.showCloseButton\" (click)=\"click($event, toast)\"\n            [innerHTML]=\"safeCloseHtml\">\n        </div>"
            },] },
];
/** @nocollapse */
ToastComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
ToastComponent.propDecorators = {
    'toast': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'iconClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'componentBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['componentBody', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] },] },],
    'clickEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bodyOutputType__ = __webpack_require__("../../../../angular2-toaster/src/bodyOutputType.js");

var ToasterConfig = (function () {
    function ToasterConfig(configOverrides) {
        configOverrides = configOverrides || {};
        this.limit = configOverrides.limit || null;
        this.tapToDismiss = configOverrides.tapToDismiss != null ? configOverrides.tapToDismiss : true;
        this.showCloseButton = configOverrides.showCloseButton != null ? configOverrides.showCloseButton : false;
        this.closeHtml = configOverrides.closeHtml || '<button class="toast-close-button" type="button">&times;</button>';
        this.newestOnTop = configOverrides.newestOnTop != null ? configOverrides.newestOnTop : true;
        this.timeout = configOverrides.timeout != null ? configOverrides.timeout : 5000;
        this.typeClasses = configOverrides.typeClasses || {
            error: 'toast-error',
            info: 'toast-info',
            wait: 'toast-wait',
            success: 'toast-success',
            warning: 'toast-warning'
        };
        this.iconClasses = configOverrides.iconClasses || {
            error: 'icon-error',
            info: 'icon-info',
            wait: 'icon-wait',
            success: 'icon-success',
            warning: 'icon-warning'
        };
        this.bodyOutputType = configOverrides.bodyOutputType || __WEBPACK_IMPORTED_MODULE_0__bodyOutputType__["a" /* BodyOutputType */].Default;
        this.bodyTemplate = configOverrides.bodyTemplate || 'toasterBodyTmpl.html';
        this.defaultTypeClass = configOverrides.defaultTypeClass || 'toast-info';
        this.positionClass = configOverrides.positionClass || 'toast-top-right';
        this.titleClass = configOverrides.titleClass || 'toast-title';
        this.messageClass = configOverrides.messageClass || 'toast-message';
        this.animation = configOverrides.animation || '';
        this.preventDuplicates = configOverrides.preventDuplicates != null ? configOverrides.preventDuplicates : false;
        this.mouseoverTimerStop = configOverrides.mouseoverTimerStop != null ? configOverrides.mouseoverTimerStop : false;
        this.toastContainerId = configOverrides.toastContainerId != null ? configOverrides.toastContainerId : null;
    }
    return ToasterConfig;
}());

//# sourceMappingURL=toaster-config.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toaster_config__ = __webpack_require__("../../../../angular2-toaster/src/toaster-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toaster_service__ = __webpack_require__("../../../../angular2-toaster/src/toaster.service.js");




var ToasterContainerComponent = (function () {
    function ToasterContainerComponent(toasterService, ref) {
        this.ref = ref;
        this.toasts = [];
        this.toasterService = toasterService;
    }
    ToasterContainerComponent.prototype.ngOnInit = function () {
        this.registerSubscribers();
        if (this.toasterconfig === null || typeof this.toasterconfig === 'undefined') {
            this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_2__toaster_config__["a" /* ToasterConfig */]();
        }
    };
    // event handlers
    ToasterContainerComponent.prototype.click = function (toast, isCloseButton) {
        if (this.toasterconfig.tapToDismiss || (toast.showCloseButton && isCloseButton)) {
            var removeToast = true;
            if (toast.clickHandler) {
                if (typeof toast.clickHandler === "function") {
                    removeToast = toast.clickHandler(toast, isCloseButton);
                }
                else {
                    console.log("The toast click handler is not a callable function.");
                    return false;
                }
            }
            if (removeToast) {
                this.removeToast(toast);
            }
        }
    };
    ToasterContainerComponent.prototype.childClick = function ($event) {
        this.click($event.value.toast, $event.value.isCloseButton);
    };
    ToasterContainerComponent.prototype.stopTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            if (toast.timeoutId) {
                window.clearTimeout(toast.timeoutId);
                toast.timeoutId = null;
            }
        }
    };
    ToasterContainerComponent.prototype.restartTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            if (!toast.timeoutId) {
                this.configureTimer(toast);
            }
        }
        else if (toast.timeoutId === null) {
            this.removeToast(toast);
        }
    };
    // private functions
    ToasterContainerComponent.prototype.registerSubscribers = function () {
        var _this = this;
        this.addToastSubscriber = this.toasterService.addToast.subscribe(function (toast) {
            _this.addToast(toast);
        });
        this.clearToastsSubscriber = this.toasterService.clearToasts.subscribe(function (clearWrapper) {
            _this.clearToasts(clearWrapper);
        });
    };
    ToasterContainerComponent.prototype.addToast = function (toast) {
        toast.toasterConfig = this.toasterconfig;
        if (toast.toastContainerId && this.toasterconfig.toastContainerId
            && toast.toastContainerId !== this.toasterconfig.toastContainerId)
            return;
        if (!toast.type) {
            toast.type = this.toasterconfig.defaultTypeClass;
        }
        if (this.toasterconfig.preventDuplicates && this.toasts.length > 0) {
            if (toast.toastId && this.toasts.some(function (t) { return t.toastId === toast.toastId; })) {
                return;
            }
            else if (this.toasts.some(function (t) { return t.body === toast.body; })) {
                return;
            }
        }
        if (toast.showCloseButton === null || typeof toast.showCloseButton === "undefined") {
            if (typeof this.toasterconfig.showCloseButton === "object") {
                toast.showCloseButton = this.toasterconfig.showCloseButton[toast.type];
            }
            else if (typeof this.toasterconfig.showCloseButton === "boolean") {
                toast.showCloseButton = this.toasterconfig.showCloseButton;
            }
        }
        if (toast.showCloseButton) {
            toast.closeHtml = toast.closeHtml || this.toasterconfig.closeHtml;
        }
        toast.bodyOutputType = toast.bodyOutputType || this.toasterconfig.bodyOutputType;
        this.configureTimer(toast);
        if (this.toasterconfig.newestOnTop) {
            this.toasts.unshift(toast);
            if (this.isLimitExceeded()) {
                this.toasts.pop();
            }
        }
        else {
            this.toasts.push(toast);
            if (this.isLimitExceeded()) {
                this.toasts.shift();
            }
        }
        if (toast.onShowCallback) {
            toast.onShowCallback(toast);
        }
    };
    ToasterContainerComponent.prototype.configureTimer = function (toast) {
        var _this = this;
        var timeout = (typeof toast.timeout === "number")
            ? toast.timeout : this.toasterconfig.timeout;
        if (typeof timeout === "object")
            timeout = timeout[toast.type];
        if (timeout > 0) {
            toast.timeoutId = window.setTimeout(function () {
                _this.ref.markForCheck();
                _this.removeToast(toast);
            }, timeout);
        }
    };
    ToasterContainerComponent.prototype.isLimitExceeded = function () {
        return this.toasterconfig.limit && this.toasts.length > this.toasterconfig.limit;
    };
    ToasterContainerComponent.prototype.removeToast = function (toast) {
        var index = this.toasts.indexOf(toast);
        if (index < 0)
            return;
        this.toasts.splice(index, 1);
        if (toast.timeoutId) {
            window.clearTimeout(toast.timeoutId);
            toast.timeoutId = null;
        }
        if (toast.onHideCallback)
            toast.onHideCallback(toast);
        this.toasterService._removeToastSubject.next({ toastId: toast.toastId, toastContainerId: toast.toastContainerId });
    };
    ToasterContainerComponent.prototype.removeAllToasts = function () {
        for (var i = this.toasts.length - 1; i >= 0; i--) {
            this.removeToast(this.toasts[i]);
        }
    };
    ToasterContainerComponent.prototype.clearToasts = function (clearWrapper) {
        var toastId = clearWrapper.toastId;
        var toastContainerId = clearWrapper.toastContainerId;
        if (toastContainerId === null || typeof toastContainerId === 'undefined') {
            this.clearToastsAction(toastId);
        }
        else if (toastContainerId === this.toasterconfig.toastContainerId) {
            this.clearToastsAction(toastId);
        }
    };
    ToasterContainerComponent.prototype.clearToastsAction = function (toastId) {
        if (toastId) {
            this.removeToast(this.toasts.filter(function (t) { return t.toastId === toastId; })[0]);
        }
        else {
            this.removeAllToasts();
        }
    };
    ToasterContainerComponent.prototype.ngOnDestroy = function () {
        if (this.addToastSubscriber) {
            this.addToastSubscriber.unsubscribe();
        }
        if (this.clearToastsSubscriber) {
            this.clearToastsSubscriber.unsubscribe();
        }
    };
    return ToasterContainerComponent;
}());

ToasterContainerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'toaster-container',
                template: "\n        <div id=\"toast-container\" [ngClass]=\"[toasterconfig.positionClass]\">\n            <div toastComp *ngFor=\"let toast of toasts\" class=\"toast\" [toast]=\"toast\"\n                [@toastState]=\"toasterconfig.animation\" \n                [iconClass]=\"toasterconfig.iconClasses[toast.type]\" \n                [ngClass]=\"toasterconfig.typeClasses[toast.type]\"\n                (click)=\"click(toast)\" (clickEvent)=\"childClick($event)\" \n                (mouseover)=\"stopTimer(toast)\" (mouseout)=\"restartTimer(toast)\">\n            </div>\n        </div>\n        ",
                // TODO: use styleUrls once Angular 2 supports the use of relative paths
                // https://github.com/angular/angular/issues/2383
                //styleUrls: ['./toaster.css']
                animations: [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('toastState', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('flyRight, flyLeft, slideDown, slideUp, fade', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'translate(0,0)' })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => flyRight', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateX(100%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.25s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('flyRight => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.25s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateX(100%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => flyLeft', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateX(-100%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.25s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('flyLeft => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.25s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateX(-100%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => slideDown', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateY(-200%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('slideDown => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateY(200%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => slideUp', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateY(200%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('slideUp => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateY(-200%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => fade', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0,
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('fade => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0,
                            }))
                        ])
                    ]),
                ]
            },] },
];
/** @nocollapse */
ToasterContainerComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__toaster_service__["a" /* ToasterService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
ToasterContainerComponent.propDecorators = {
    'toasterconfig': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=toaster-container.component.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_component__ = __webpack_require__("../../../../angular2-toaster/src/toast.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__ = __webpack_require__("../../../../angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toaster_service__ = __webpack_require__("../../../../angular2-toaster/src/toaster.service.js");





var ToasterModule = (function () {
    function ToasterModule() {
    }
    return ToasterModule;
}());

ToasterModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */],
                    __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__["a" /* ToasterContainerComponent */]
                ],
                providers: [__WEBPACK_IMPORTED_MODULE_4__toaster_service__["a" /* ToasterService */]],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__["a" /* ToasterContainerComponent */],
                    __WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */]
                ]
            },] },
];
/** @nocollapse */
ToasterModule.ctorParameters = function () { return []; };
//# sourceMappingURL=toaster.module.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);




var ToasterService = (function () {
    /**
     * Creates an instance of ToasterService.
     */
    function ToasterService() {
        var _this = this;
        this.addToast = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) { return _this._addToast = observer; }).share();
        this.clearToasts = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) { return _this._clearToasts = observer; }).share();
        this._removeToastSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.removeToast = this._removeToastSubject.share();
    }
    /**
     * Synchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Toast}
     *          The newly created Toast instance with a randomly generated GUID Id.
     */
    ToasterService.prototype.pop = function (type, title, body) {
        var toast = typeof type === 'string' ? { type: type, title: title, body: body } : type;
        toast.toastId = Guid.newGuid();
        if (!this._addToast) {
            throw new Error("No Toaster Containers have been initialized to receive toasts.");
        }
        this._addToast.next(toast);
        return toast;
    };
    /**
     * Asynchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Observable<Toast>}
     *          A hot Observable that can be subscribed to in order to receive the Toast instance
     *          with a randomly generated GUID Id.
     */
    ToasterService.prototype.popAsync = function (type, title, body) {
        var _this = this;
        setTimeout(function () {
            _this.pop(type, title, body);
        }, 0);
        return this.addToast;
    };
    /**
     * Clears a toast by toastId and/or toastContainerId.
     *
     * @param {string} toastId The toastId to clear.
     * @param {number=} toastContainerId
     *        The toastContainerId of the container to remove toasts from.
     */
    ToasterService.prototype.clear = function (toastId, toastContainerId) {
        var clearWrapper = {
            toastId: toastId, toastContainerId: toastContainerId
        };
        this._clearToasts.next(clearWrapper);
    };
    return ToasterService;
}());

ToasterService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ToasterService.ctorParameters = function () { return []; };
// http://stackoverflow.com/questions/26501688/a-typescript-guid-class
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
//# sourceMappingURL=toaster.service.js.map

/***/ }),

/***/ "../../../../exports-loader/index.js?module.exports.toString()!../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular2-toaster/toaster.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Toastr\r\n * Version 2.0.1\r\n * Copyright 2012 John Papa and Hans Fjallemark.  \r\n * All Rights Reserved.  \r\n * Use, reproduction, distribution, and modification of this code is subject to the terms and \r\n * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php\r\n *\r\n * Author: John Papa and Hans Fjallemark\r\n * Project: https://github.com/CodeSeven/toastr\r\n */\r\n .toaster-icon {\r\n    position: absolute;\r\n    left: 0.0em;\r\n    top: 0.0em;\r\n    font-weight: normal;\r\n    color: #ffffff;\r\n}\r\n.toast-title {\r\n  font-weight: bold;\r\n}\r\n.toast-message {\r\n  -ms-word-wrap: break-word;\r\n  word-wrap: break-word;\r\n}\r\n.toast-message a,\r\n.toast-message label {\r\n  color: #ffffff;\r\n}\r\n.toast-message a:hover {\r\n  color: #cccccc;\r\n  text-decoration: none;\r\n}\r\n.toast-close-button {\r\n  position: relative;\r\n  right: -0.3em;\r\n  top: -0.3em;\r\n  float: right;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n  -webkit-text-shadow: 0 1px 0 #ffffff;\r\n  text-shadow: 0 1px 0 #ffffff;\r\n  opacity: 0.8;\r\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\r\n  filter: alpha(opacity=80);\r\n  z-index: 999;\r\n}\r\n.toast-close-button:hover,\r\n.toast-close-button:focus {\r\n  color: #000000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  opacity: 0.4;\r\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);\r\n  filter: alpha(opacity=40);\r\n}\r\n\r\n/*Additional properties for button version\r\n iOS requires the button element instead of an anchor tag.\r\n If you want the anchor version, it requires `href=\"#\"`.*/\r\nbutton.toast-close-button {\r\n  padding: 0;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border: 0;\r\n  -webkit-appearance: none;\r\n}\r\n.toast-content {\r\n  display: inline-block;\r\n  width: 95%;\r\n}\r\n.toast-top-full-width {\r\n  top: 0;\r\n  right: 0;\r\n  width: 100%;\r\n}\r\n.toast-bottom-full-width {\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 100%;\r\n}\r\n.toast-top-left {\r\n  top: 12px;\r\n  left: 12px;\r\n}\r\n.toast-top-center {\r\n  top: 12px;\r\n}\r\n.toast-top-right {\r\n  top: 12px;\r\n  right: 12px;\r\n}\r\n.toast-bottom-right {\r\n  right: 12px;\r\n  bottom: 12px;\r\n}\r\n.toast-bottom-center {\r\n  bottom: 12px;\r\n}\r\n.toast-bottom-left {\r\n  bottom: 12px;\r\n  left: 12px;\r\n}\r\n.toast-center {\r\n  top: 45%;\r\n}\r\n#toast-container {\r\n  position: fixed;\r\n  z-index: 999999;\r\n  /*overrides*/\r\n  pointer-events: auto;\r\n}\r\n#toast-container.toast-center,\r\n#toast-container.toast-top-center,\r\n#toast-container.toast-bottom-center{\r\n  width: 100%;\r\n  pointer-events: none;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n#toast-container.toast-center > div,\r\n#toast-container.toast-top-center > div,\r\n#toast-container.toast-bottom-center > div{\r\n  margin: 6px auto;\r\n  pointer-events: auto;\r\n}\r\n#toast-container.toast-center > button,\r\n#toast-container.toast-top-center > button,\r\n#toast-container.toast-bottom-center > button{\r\n  pointer-events: auto;\r\n}\r\n#toast-container * {\r\n  box-sizing: border-box;\r\n}\r\n#toast-container > div {\r\n  margin: 0 0 6px;\r\n  padding: 15px 15px 15px 50px;\r\n  width: 300px;\r\n  border-radius: 3px 3px 3px 3px;\r\n  background-position: 15px center;\r\n  background-repeat: no-repeat;\r\n  box-shadow: 0 0 12px #999999;\r\n  color: #ffffff;\r\n  opacity: 0.8;\r\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\r\n  filter: alpha(opacity=80);\r\n}\r\n#toast-container > :hover {\r\n  box-shadow: 0 0 12px #000000;\r\n  opacity: 1;\r\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\r\n  filter: alpha(opacity=100);\r\n  cursor: pointer;\r\n}\r\n.icon-info {\r\n  width:35px;\r\n  height:100%;\r\n  display:inline-block;\r\n  background-repeat: no-repeat;\r\n  background-position: 100% 50%;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=\") !important;\r\n}\r\n.icon-wait {\r\n  width:35px;\r\n  height:100%;\r\n  display:inline-block;\r\n  background-repeat: no-repeat;\r\n  background-position: 100% 50%;\r\n  background-image: url(\"data:image/gif;base64,R0lGODlhIAAgAIQAAAQCBISGhMzKzERCROTm5CQiJKyurHx+fPz+/ExOTOzu7Dw+PIyOjCwqLFRWVAwKDIyKjMzOzOzq7CQmJLy6vFRSVPTy9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAXACwAAAAAIAAgAAAF3eAljmRpnmh6VRSVqLDpIDTixOdUlFSNUDhSQUAT7ES9GnD0SFQAKWItMqr4bqKHVPDI+WiTkaOFFVlrFe83rDrT0qeIjwrT0iLdU0GOiBxhAA4VeSk6QYeIOAsQEAuJKgw+EI8nA18IA48JBAQvFxCXDI8SNAQikV+iiaQIpheWX5mJmxKeF6g0qpQmA4yOu8C7EwYWCgZswRcTFj4KyMAGlwYxDwcHhCXMXxYxBzQHKNo+3DDeCOAn0V/TddbYJA0K48gAEAFQicMWFsfwNA3JSgAIAAFfwIMIL4QAACH5BAkJABoALAAAAAAgACAAhAQCBIyKjERCRMzOzCQiJPTy9DQyNGRmZMTCxOTm5CwqLHx+fBQWFJyenNTW1Pz6/Dw6PGxubAwKDIyOjNTS1CQmJCwuLPz+/Dw+PHRydAAAAAAAAAAAAAAAAAAAAAAAAAXboCaOZGmeaKoxWcSosMkk15W8cZ7VdZaXkcEgQtrxfD9RhHchima1GwlCGUBSFCaFxMrgRtnLFhWujWHhs2nJc8KoVlWGQnEn7/i8XgOwWAB7JwoONQ4KgSQAZRcOgHgSCwsSIhZMNRZ5CzULIgaWF5h4mhecfIQ8jXmQkiODhYeIiRYGjrG2PxgBARi3IhNMAbcCnwI5BAQpAZ8TIwK6vCQVDwUVKL+WzAANTA210g/VJ8OWxQefByQE4dZMzBoInwh4zrtgn2p725YNthUFTNRuGYB3AYGBHCEAACH5BAkJAB0ALAAAAAAgACAAhAQCBISChFRWVMzKzCQiJOTm5GxqbCwuLJSWlPz6/NTW1AwODJSSlGRmZCwqLOzu7HR2dDQ2NAQGBISGhFxaXNTS1CQmJOzq7GxubDQyNKSmpPz+/Nza3AAAAAAAAAAAAAXfYCeOZGmeaKqurHBdAiuP17Zdc0lMAVHWt9yI8LA9fCPB4xEjARoNSWpis01kBpshFahurqzsZosiGpErScMAUO0maKF8Tq/bTQCIQgFp30cQXhB1BHEcXhx0FgkJFiOHVYlzi42AgoRxeRx8fn+en3UABwedKgsBAwMBCygOCjYKDisLFV4VrCUAtVUKpSZdXl8mB8EbByQWcQPFAyYZxccdB7sV0cvBzbmvvG0LBV4FrFTBYCWuNhyyHRTFFB20trh4BxmdYl4YIqepq0IRxRE+IfDCAFQHARo0NGERAgAh+QQJCQAgACwAAAAAIAAgAIUEAgSEgoRMTkzMyswcHhzk5uR0cnQUFhRcXlwsKiz09vQMCgyMiozU1tQkJiR8fnxkZmT8/vwEBgSEhoRcWlzU0tQkIiT08vR0dnQcGhxkYmQ0MjT8+vwMDgyMjozc2twAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG+UCQcEgsGo/IpHLJXDweC6Z0+IhEHlOjRGIMWLHZoUZx0RQlAajxkFFKFFYFl5m5KNpIySU+X2bIBEoQZBBZGQdMElFhjI2Oj5AgHQEDAw8dQxYeDBaNHRVWVhWYCXsRFwmMXqFWEyAerB6MA6xWA6+xs7URt6VWqIwTu64gDh4eDp6goaORQ5OVAZjO1EgEGhB4RwAYDQ0YAEwIcBEKFEgYrBhLBORxgUYfrB9LELuF8fNDAAaVBuEg7NXCVyRdqHVCGLBiIIQAB1Yc4BXh9uEbwAXuyi2iQI7DuSwHdiFqCEGDtizLRFUDsaGAlQIbVoJYIEDAIiZBAAAh+QQJCQAbACwAAAAAIAAgAIQEAgSMioxcWlz08vQcHhysqqwMDgx8enwsKiykoqRkZmT8+vzEwsQMCgyUlpQkJiS0srQEBgSMjoxcXlz09vQkIiSsrqwUEhQ0MjRsamz8/vwAAAAAAAAAAAAAAAAAAAAF7+AmjmRpnmiqruz2PG0sIssCj4CQJAIgj4/abRNJaI6agu9kCAQaphdJgEQKUIFjgGWsahJYLdf7RTWfLKr3+jsBClVlG5Xb9eb4fImgUBBKDVB4ExRHFGwbGRQLGXMEhUgUfw2QC4IyCmSNDQtHlm2ZXgoiGQsUjW0EnUgLfyKBeYSeiHojfH61uS0GBisVEgEVLRcWRxAXKAgDRwMILMVIECgSVRIrBmS9JtRI1iMVBweuGxerSNolyszOIhjLGs0jEFXSKA8SEkMbcEgWIxfzNBxrw6AKgxIGkM05UOWALhERHJhysOThBgAVWYQAACH5BAkJABkALAAAAAAgACAAhAQGBIyKjERCRMzOzCwuLGRiZPz6/OTm5AwODLSytFRSVNTW1Dw6PHx6fAwKDJSSlERGRNTS1DQyNGxqbPz+/BQSFLy6vFRWVNza3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAXqYCaO5FgFwxBUZeu61ULNFMa+eBvQdJD/owFvFhkBBAwHsBQZUooZyWF2YOQkBNJu6ANMaQeli0AxSEwymi0DcUJeEgPlbEJFAghRe/h+Eeg/Dl9UYks5DF9VhksOAgKFi5GSSwh5kzgVCXIJNxknD5aSCTwJIw8zD5MITpanFKmSCHI8NxUPoJejNKWXLZkznL0vCJ3CxsckDpA/ChYJFzkTBgYTSxc80C4OswbLLhY8Fi/bMwYAJVgl4DTiL9LUJADrFuci1zTZLwD1IwU8BSQuWLCQb1EDHg2QiSDALYvCDAISJLDy8FIIACH5BAkJAB4ALAAAAAAgACAAhAQGBISGhFRSVNTW1CQiJKyqrGRmZOzu7CwuLIyOjGxubPz6/BQSFGRiZOTi5CwqLLy6vDQ2NIyKjFRWVCQmJKyurGxqbPT29DQyNJSSlHRydPz+/BQWFOzq7AAAAAAAAAXhoCeOJElYClGubOs117YtjWuvxCLLi3qbhc6h4FPsdorfiNI5dige43GT9AAkHUcCwCpMNxVP7tgTJY4J1uF7EBl0M8Ooueuo2SOCIkVa11kVX2E2EmgsFH4yBz4uAAkdHVstBAUHQ4xKmZqbnJ2bAhAQAiURGJ4eE0cTIxgzpp0QRxCsrp6xO7MjpaepO6unKxOhv8DFxsfIJBwaChw2DAkZDEocDjIOzi0ZMhlKUjIaLtsb3T8aR+EtDBkJ0yQUBQVQI9XX2ZsDMgMlyxr3mzE2XEgmotCGAARFIHiQ0FMIACH5BAkJABgALAAAAAAgACAAhAQCBISGhDw+POTi5CwuLLS2tPTy9BQSFJyenGRiZDQ2NIyOjLy+vPz6/BweHIyKjFRSVOzq7DQyNLy6vBQWFHRydDw6PPz+/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXXICaOZHkcZaquIjVd10SxtFrAcFGrVhBYIwoON9uNAsOA6DCEFTEKBEKxEjQvAtELNxkpGrAGNfW4Plpb2QgxRKjKzfPoVGLj3CnLNUv7hscpSDhKOxJSgDwPP0ZGAACMjAQFDQYFBJA0BAZDBpeYGBQVFUU3TV2YFAMwAzNgTQ2PkBVDFRiuQ7CYszi1pUOnkKmrM5qcnqiiTwQTDQ2Wn9DR0tPUfRKQEBEREDQSFw3XRhEwEd3f4TvjF+XWKgJ8JNnb0QkwCdUlCzAL+CQODAwc9BtIMAQAOw==\") !important;\r\n}\r\n.icon-error {\r\n  width:35px;\r\n  height:100%;\r\n  display:inline-block;\r\n  background-repeat: no-repeat;\r\n  background-position: 100% 50%;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=\") !important;\r\n}\r\n.icon-success {\r\n  width:35px;\r\n  height:100%;\r\n  display:inline-block;\r\n  background-repeat: no-repeat;\r\n  background-position: 100% 50%;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==\") !important;\r\n}\r\n.icon-warning {\r\n  width:35px;\r\n  height:100%;\r\n  display:inline-block;\r\n  background-repeat: no-repeat;\r\n  background-position: 100% 50%;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=\") !important;\r\n}\r\n#toast-container.toast-top-full-width > div,\r\n#toast-container.toast-bottom-full-width > div {\r\n  width: 96%;\r\n  margin: auto;\r\n}\r\n.toast {\r\n  position:relative;\r\n  background-color: #030303;\r\n}\r\n.toast-success {\r\n  background-color: #51a351;\r\n}\r\n.toast-error {\r\n  background-color: #bd362f;\r\n}\r\n.toast-info {\r\n  background-color: #2f96b4;\r\n}\r\n.toast-wait {\r\n  background-color: #2f96b4;\r\n}\r\n.toast-warning {\r\n  background-color: #f89406;\r\n}\r\n/*Responsive Design*/\r\n@media all and (max-width: 240px) {\r\n  #toast-container > div {\r\n    padding: 8px 8px 8px 50px;\r\n    width: 11em;\r\n  }\r\n  #toast-container .toast-close-button {\r\n    right: -0.2em;\r\n    top: -0.2em;\r\n}\r\n  }\r\n@media all and (min-width: 241px) and (max-width: 480px) {\r\n  #toast-container  > div {\r\n    padding: 8px 8px 8px 50px;\r\n    width: 18em;\r\n  }\r\n  #toast-container .toast-close-button {\r\n    right: -0.2em;\r\n    top: -0.2em;\r\n}\r\n}\r\n@media all and (min-width: 481px) and (max-width: 768px) {\r\n  #toast-container > div {\r\n    padding: 15px 15px 15px 50px;\r\n    width: 25em;\r\n  }\r\n}\r\n\r\n /*\r\n  * AngularJS-Toaster\r\n  * Version 0.3\r\n */\r\n:not(.no-enter)#toast-container > div.ng-enter,\r\n:not(.no-leave)#toast-container > div.ng-leave\r\n{\r\n    transition: 1000ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\r\n} \r\n\r\n:not(.no-enter)#toast-container > div.ng-enter.ng-enter-active, \r\n:not(.no-leave)#toast-container > div.ng-leave {\r\n    opacity: 0.8;\r\n}\r\n\r\n:not(.no-leave)#toast-container > div.ng-leave.ng-leave-active,\r\n:not(.no-enter)#toast-container > div.ng-enter {\r\n    opacity: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../ng2-tree/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tree_types_1 = __webpack_require__("../../../../ng2-tree/src/tree.types.js");
exports.TreeModelSettings = tree_types_1.TreeModelSettings;
exports.FoldingType = tree_types_1.FoldingType;
var tree_1 = __webpack_require__("../../../../ng2-tree/src/tree.js");
exports.Tree = tree_1.Tree;
var tree_events_1 = __webpack_require__("../../../../ng2-tree/src/tree.events.js");
exports.NodeEvent = tree_events_1.NodeEvent;
exports.NodeCreatedEvent = tree_events_1.NodeCreatedEvent;
exports.NodeRemovedEvent = tree_events_1.NodeRemovedEvent;
exports.NodeRenamedEvent = tree_events_1.NodeRenamedEvent;
exports.NodeMovedEvent = tree_events_1.NodeMovedEvent;
exports.NodeSelectedEvent = tree_events_1.NodeSelectedEvent;
exports.NodeDestructiveEvent = tree_events_1.NodeDestructiveEvent;
var tree_component_1 = __webpack_require__("../../../../ng2-tree/src/tree.component.js");
exports.TreeComponent = tree_component_1.TreeComponent;
var tree_module_1 = __webpack_require__("../../../../ng2-tree/src/tree.module.js");
exports.TreeModule = tree_module_1.TreeModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/draggable/captured-node.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var CapturedNode = (function () {
    function CapturedNode(anElement, aTree) {
        this.anElement = anElement;
        this.aTree = aTree;
    }
    CapturedNode.prototype.canBeDroppedAt = function (element) {
        return !this.sameAs(element) && !this.contains(element);
    };
    CapturedNode.prototype.contains = function (other) {
        return this.element.nativeElement.contains(other.nativeElement);
    };
    CapturedNode.prototype.sameAs = function (other) {
        return this.element === other;
    };
    Object.defineProperty(CapturedNode.prototype, "element", {
        get: function () {
            return this.anElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CapturedNode.prototype, "tree", {
        get: function () {
            return this.aTree;
        },
        enumerable: true,
        configurable: true
    });
    return CapturedNode;
}());
exports.CapturedNode = CapturedNode;
//# sourceMappingURL=captured-node.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/draggable/draggable.events.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NodeDraggableEvent = (function () {
    function NodeDraggableEvent(captured, target) {
        this.captured = captured;
        this.target = target;
    }
    return NodeDraggableEvent;
}());
exports.NodeDraggableEvent = NodeDraggableEvent;
//# sourceMappingURL=draggable.events.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/draggable/node-draggable.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var node_draggable_service_1 = __webpack_require__("../../../../ng2-tree/src/draggable/node-draggable.service.js");
var captured_node_1 = __webpack_require__("../../../../ng2-tree/src/draggable/captured-node.js");
var NodeDraggableDirective = (function () {
    function NodeDraggableDirective(element, nodeDraggableService, renderer) {
        this.element = element;
        this.nodeDraggableService = nodeDraggableService;
        this.renderer = renderer;
        this.disposersForDragListeners = [];
        this.nodeNativeElement = element.nativeElement;
    }
    NodeDraggableDirective.prototype.ngOnInit = function () {
        if (!this.tree.isStatic()) {
            this.renderer.setElementAttribute(this.nodeNativeElement, 'draggable', 'true');
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragenter', this.handleDragEnter.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragover', this.handleDragOver.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragstart', this.handleDragStart.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragleave', this.handleDragLeave.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'drop', this.handleDrop.bind(this)));
            this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, 'dragend', this.handleDragEnd.bind(this)));
        }
    };
    NodeDraggableDirective.prototype.ngOnDestroy = function () {
        this.disposersForDragListeners.forEach(function (dispose) { return dispose(); });
    };
    NodeDraggableDirective.prototype.handleDragStart = function (e) {
        e.stopPropagation();
        this.nodeDraggableService.captureNode(new captured_node_1.CapturedNode(this.nodeDraggable, this.tree));
        e.dataTransfer.setData('text', NodeDraggableDirective.DATA_TRANSFER_STUB_DATA);
        e.dataTransfer.effectAllowed = 'move';
    };
    NodeDraggableDirective.prototype.handleDragOver = function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };
    NodeDraggableDirective.prototype.handleDragEnter = function (e) {
        e.preventDefault();
        if (this.containsElementAt(e)) {
            this.addClass('over-drop-target');
        }
    };
    NodeDraggableDirective.prototype.handleDragLeave = function (e) {
        if (!this.containsElementAt(e)) {
            this.removeClass('over-drop-target');
        }
    };
    NodeDraggableDirective.prototype.handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.removeClass('over-drop-target');
        if (!this.isDropPossible(e)) {
            return false;
        }
        if (this.nodeDraggableService.getCapturedNode()) {
            return this.notifyThatNodeWasDropped();
        }
    };
    NodeDraggableDirective.prototype.isDropPossible = function (e) {
        var capturedNode = this.nodeDraggableService.getCapturedNode();
        return capturedNode
            && capturedNode.canBeDroppedAt(this.nodeDraggable)
            && this.containsElementAt(e);
    };
    NodeDraggableDirective.prototype.handleDragEnd = function (e) {
        this.removeClass('over-drop-target');
        this.nodeDraggableService.releaseCapturedNode();
    };
    NodeDraggableDirective.prototype.containsElementAt = function (e) {
        var _a = e.x, x = _a === void 0 ? e.clientX : _a, _b = e.y, y = _b === void 0 ? e.clientY : _b;
        return this.nodeNativeElement.contains(document.elementFromPoint(x, y));
    };
    NodeDraggableDirective.prototype.addClass = function (className) {
        var classList = this.nodeNativeElement.classList;
        classList.add(className);
    };
    NodeDraggableDirective.prototype.removeClass = function (className) {
        var classList = this.nodeNativeElement.classList;
        classList.remove(className);
    };
    NodeDraggableDirective.prototype.notifyThatNodeWasDropped = function () {
        this.nodeDraggableService.fireNodeDragged(this.nodeDraggableService.getCapturedNode(), this.nodeDraggable);
    };
    NodeDraggableDirective.DATA_TRANSFER_STUB_DATA = 'some browsers enable drag-n-drop only when dataTransfer has data';
    NodeDraggableDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[nodeDraggable]'
                },] },
    ];
    NodeDraggableDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
        { type: node_draggable_service_1.NodeDraggableService, decorators: [{ type: core_1.Inject, args: [node_draggable_service_1.NodeDraggableService,] },] },
        { type: core_1.Renderer, decorators: [{ type: core_1.Inject, args: [core_1.Renderer,] },] },
    ]; };
    NodeDraggableDirective.propDecorators = {
        'nodeDraggable': [{ type: core_1.Input },],
        'tree': [{ type: core_1.Input },],
    };
    return NodeDraggableDirective;
}());
exports.NodeDraggableDirective = NodeDraggableDirective;
//# sourceMappingURL=node-draggable.directive.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/draggable/node-draggable.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Rx_1 = __webpack_require__("../../../../rxjs/Rx.js");
var draggable_events_1 = __webpack_require__("../../../../ng2-tree/src/draggable/draggable.events.js");
var NodeDraggableService = (function () {
    function NodeDraggableService() {
        this.draggableNodeEvents$ = new Rx_1.Subject();
    }
    NodeDraggableService.prototype.fireNodeDragged = function (captured, target) {
        if (!captured.tree || captured.tree.isStatic()) {
            return;
        }
        this.draggableNodeEvents$.next(new draggable_events_1.NodeDraggableEvent(captured, target));
    };
    NodeDraggableService.prototype.captureNode = function (node) {
        this.capturedNode = node;
    };
    NodeDraggableService.prototype.getCapturedNode = function () {
        return this.capturedNode;
    };
    NodeDraggableService.prototype.releaseCapturedNode = function () {
        this.capturedNode = null;
    };
    NodeDraggableService.decorators = [
        { type: core_1.Injectable },
    ];
    NodeDraggableService.ctorParameters = function () { return []; };
    return NodeDraggableService;
}());
exports.NodeDraggableService = NodeDraggableService;
//# sourceMappingURL=node-draggable.service.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/editable/editable.events.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(function (NodeEditableEventAction) {
    NodeEditableEventAction[NodeEditableEventAction["Cancel"] = 0] = "Cancel";
})(exports.NodeEditableEventAction || (exports.NodeEditableEventAction = {}));
var NodeEditableEventAction = exports.NodeEditableEventAction;
//# sourceMappingURL=editable.events.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/editable/node-editable.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var editable_events_1 = __webpack_require__("../../../../ng2-tree/src/editable/editable.events.js");
var NodeEditableDirective = (function () {
    function NodeEditableDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.valueChanged = new core_1.EventEmitter(false);
    }
    NodeEditableDirective.prototype.ngOnInit = function () {
        var nativeElement = this.elementRef.nativeElement;
        this.renderer.invokeElementMethod(nativeElement, 'focus', []);
        this.renderer.setElementProperty(nativeElement, 'value', this.nodeValue);
    };
    NodeEditableDirective.prototype.applyNewValue = function (newNodeValue) {
        this.valueChanged.emit({ type: 'keyup', value: newNodeValue });
    };
    NodeEditableDirective.prototype.applyNewValueByLoosingFocus = function (newNodeValue) {
        this.valueChanged.emit({ type: 'blur', value: newNodeValue });
    };
    NodeEditableDirective.prototype.cancelEditing = function () {
        this.valueChanged.emit({
            type: 'keyup',
            value: this.nodeValue,
            action: editable_events_1.NodeEditableEventAction.Cancel
        });
    };
    NodeEditableDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[nodeEditable]'
                },] },
    ];
    NodeEditableDirective.ctorParameters = function () { return [
        { type: core_1.Renderer, decorators: [{ type: core_1.Inject, args: [core_1.Renderer,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    NodeEditableDirective.propDecorators = {
        'nodeValue': [{ type: core_1.Input, args: ['nodeEditable',] },],
        'valueChanged': [{ type: core_1.Output },],
        'applyNewValue': [{ type: core_1.HostListener, args: ['keyup.enter', ['$event.target.value'],] },],
        'applyNewValueByLoosingFocus': [{ type: core_1.HostListener, args: ['blur', ['$event.target.value'],] },],
        'cancelEditing': [{ type: core_1.HostListener, args: ['keyup.esc',] },],
    };
    return NodeEditableDirective;
}());
exports.NodeEditableDirective = NodeEditableDirective;
//# sourceMappingURL=node-editable.directive.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/menu/menu.events.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(function (NodeMenuItemAction) {
    NodeMenuItemAction[NodeMenuItemAction["NewFolder"] = 0] = "NewFolder";
    NodeMenuItemAction[NodeMenuItemAction["NewTag"] = 1] = "NewTag";
    NodeMenuItemAction[NodeMenuItemAction["Rename"] = 2] = "Rename";
    NodeMenuItemAction[NodeMenuItemAction["Remove"] = 3] = "Remove";
})(exports.NodeMenuItemAction || (exports.NodeMenuItemAction = {}));
var NodeMenuItemAction = exports.NodeMenuItemAction;
(function (NodeMenuAction) {
    NodeMenuAction[NodeMenuAction["Close"] = 0] = "Close";
})(exports.NodeMenuAction || (exports.NodeMenuAction = {}));
var NodeMenuAction = exports.NodeMenuAction;
//# sourceMappingURL=menu.events.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/menu/node-menu.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var node_menu_service_1 = __webpack_require__("../../../../ng2-tree/src/menu/node-menu.service.js");
var menu_events_1 = __webpack_require__("../../../../ng2-tree/src/menu/menu.events.js");
var event_utils_1 = __webpack_require__("../../../../ng2-tree/src/utils/event.utils.js");
var NodeMenuComponent = (function () {
    function NodeMenuComponent(renderer, nodeMenuService) {
        this.renderer = renderer;
        this.nodeMenuService = nodeMenuService;
        this.menuItemSelected = new core_1.EventEmitter();
        this.availableMenuItems = [
            {
                name: 'New tag',
                action: menu_events_1.NodeMenuItemAction.NewTag,
                cssClass: 'new-tag'
            },
            {
                name: 'New folder',
                action: menu_events_1.NodeMenuItemAction.NewFolder,
                cssClass: 'new-folder'
            },
            {
                name: 'Rename',
                action: menu_events_1.NodeMenuItemAction.Rename,
                cssClass: 'rename'
            },
            {
                name: 'Remove',
                action: menu_events_1.NodeMenuItemAction.Remove,
                cssClass: 'remove'
            }
        ];
        this.disposersForGlobalListeners = [];
    }
    NodeMenuComponent.prototype.ngOnInit = function () {
        this.disposersForGlobalListeners.push(this.renderer.listenGlobal('document', 'keyup', this.closeMenu.bind(this)));
        this.disposersForGlobalListeners.push(this.renderer.listenGlobal('document', 'click', this.closeMenu.bind(this)));
    };
    NodeMenuComponent.prototype.ngOnDestroy = function () {
        this.disposersForGlobalListeners.forEach(function (dispose) { return dispose(); });
    };
    NodeMenuComponent.prototype.onMenuItemSelected = function (e, selectedMenuItem) {
        if (event_utils_1.isLeftButtonClicked(e)) {
            this.menuItemSelected.emit({ nodeMenuItemAction: selectedMenuItem.action });
        }
    };
    NodeMenuComponent.prototype.closeMenu = function (e) {
        var mouseClicked = e instanceof MouseEvent;
        if (mouseClicked || event_utils_1.isEscapePressed(e)) {
            this.nodeMenuService.fireMenuEvent(e.target, menu_events_1.NodeMenuAction.Close);
        }
    };
    NodeMenuComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'node-menu',
                    template: "\n    <div class=\"node-menu\">\n      <ul class=\"node-menu-content\">\n        <li class=\"node-menu-item\" *ngFor=\"let menuItem of availableMenuItems\"\n            (click)=\"onMenuItemSelected($event, menuItem)\">\n          <div class=\"node-menu-item-icon {{menuItem.cssClass}}\"></div>\n          <span class=\"node-menu-item-value\">{{menuItem.name}}</span>\n        </li>\n      </ul>\n    </div>\n  "
                },] },
    ];
    NodeMenuComponent.ctorParameters = function () { return [
        { type: core_1.Renderer, decorators: [{ type: core_1.Inject, args: [core_1.Renderer,] },] },
        { type: node_menu_service_1.NodeMenuService, decorators: [{ type: core_1.Inject, args: [node_menu_service_1.NodeMenuService,] },] },
    ]; };
    NodeMenuComponent.propDecorators = {
        'menuItemSelected': [{ type: core_1.Output },],
    };
    return NodeMenuComponent;
}());
exports.NodeMenuComponent = NodeMenuComponent;
//# sourceMappingURL=node-menu.component.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/menu/node-menu.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Rx_1 = __webpack_require__("../../../../rxjs/Rx.js");
var menu_events_1 = __webpack_require__("../../../../ng2-tree/src/menu/menu.events.js");
var NodeMenuService = (function () {
    function NodeMenuService() {
        this.nodeMenuEvents$ = new Rx_1.Subject();
    }
    NodeMenuService.prototype.fireMenuEvent = function (sender, action) {
        var nodeMenuEvent = { sender: sender, action: action };
        this.nodeMenuEvents$.next(nodeMenuEvent);
    };
    NodeMenuService.prototype.hideMenuStream = function (treeElementRef) {
        return this.nodeMenuEvents$
            .filter(function (e) { return treeElementRef.nativeElement !== e.sender; })
            .filter(function (e) { return e.action === menu_events_1.NodeMenuAction.Close; });
    };
    NodeMenuService.prototype.hideMenuForAllNodesExcept = function (treeElementRef) {
        this.nodeMenuEvents$.next({
            sender: treeElementRef.nativeElement,
            action: menu_events_1.NodeMenuAction.Close
        });
    };
    NodeMenuService.decorators = [
        { type: core_1.Injectable },
    ];
    NodeMenuService.ctorParameters = function () { return []; };
    return NodeMenuService;
}());
exports.NodeMenuService = NodeMenuService;
//# sourceMappingURL=node-menu.service.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree-internal.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tree_1 = __webpack_require__("../../../../ng2-tree/src/tree.js");
var node_menu_service_1 = __webpack_require__("../../../../ng2-tree/src/menu/node-menu.service.js");
var menu_events_1 = __webpack_require__("../../../../ng2-tree/src/menu/menu.events.js");
var editable_events_1 = __webpack_require__("../../../../ng2-tree/src/editable/editable.events.js");
var tree_service_1 = __webpack_require__("../../../../ng2-tree/src/tree.service.js");
var EventUtils = __webpack_require__("../../../../ng2-tree/src/utils/event.utils.js");
var TreeInternalComponent = (function () {
    function TreeInternalComponent(nodeMenuService, treeService, element) {
        this.nodeMenuService = nodeMenuService;
        this.treeService = treeService;
        this.element = element;
        this.isSelected = false;
        this.isMenuVisible = false;
    }
    TreeInternalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings = this.settings || { rootIsVisible: true };
        this.nodeMenuService.hideMenuStream(this.element)
            .subscribe(function () { return _this.isMenuVisible = false; });
        this.treeService.unselectStream(this.tree)
            .subscribe(function () { return _this.isSelected = false; });
        this.treeService.draggedStream(this.tree, this.element)
            .subscribe(function (e) {
            if (_this.tree.hasSibling(e.captured.tree)) {
                _this.swapWithSibling(e.captured.tree, _this.tree);
            }
            else if (_this.tree.isBranch()) {
                _this.moveNodeToThisTreeAndRemoveFromPreviousOne(e, _this.tree);
            }
            else {
                _this.moveNodeToParentTreeAndRemoveFromPreviousOne(e, _this.tree);
            }
        });
    };
    TreeInternalComponent.prototype.swapWithSibling = function (sibling, tree) {
        tree.swapWithSibling(sibling);
        this.treeService.fireNodeMoved(sibling, sibling.parent);
    };
    TreeInternalComponent.prototype.moveNodeToThisTreeAndRemoveFromPreviousOne = function (e, tree) {
        this.treeService.fireNodeRemoved(e.captured.tree);
        var addedChild = tree.addChild(e.captured.tree);
        this.treeService.fireNodeMoved(addedChild, e.captured.tree.parent);
    };
    TreeInternalComponent.prototype.moveNodeToParentTreeAndRemoveFromPreviousOne = function (e, tree) {
        this.treeService.fireNodeRemoved(e.captured.tree);
        var addedSibling = tree.addSibling(e.captured.tree, tree.positionInParent);
        this.treeService.fireNodeMoved(addedSibling, e.captured.tree.parent);
    };
    TreeInternalComponent.prototype.onNodeSelected = function (e) {
        if (EventUtils.isLeftButtonClicked(e)) {
            this.isSelected = true;
            this.treeService.fireNodeSelected(this.tree);
        }
    };
    TreeInternalComponent.prototype.showMenu = function (e) {
        if (this.tree.isStatic()) {
            return;
        }
        if (EventUtils.isRightButtonClicked(e)) {
            this.isMenuVisible = !this.isMenuVisible;
            this.nodeMenuService.hideMenuForAllNodesExcept(this.element);
        }
        e.preventDefault();
    };
    TreeInternalComponent.prototype.onMenuItemSelected = function (e) {
        switch (e.nodeMenuItemAction) {
            case menu_events_1.NodeMenuItemAction.NewTag:
                this.onNewSelected(e);
                break;
            case menu_events_1.NodeMenuItemAction.NewFolder:
                this.onNewSelected(e);
                break;
            case menu_events_1.NodeMenuItemAction.Rename:
                this.onRenameSelected();
                break;
            case menu_events_1.NodeMenuItemAction.Remove:
                this.onRemoveSelected();
                break;
            default:
                throw new Error("Chosen menu item doesn't exist");
        }
    };
    TreeInternalComponent.prototype.onNewSelected = function (e) {
        this.tree.createNode(e.nodeMenuItemAction === menu_events_1.NodeMenuItemAction.NewFolder);
        this.isMenuVisible = false;
    };
    TreeInternalComponent.prototype.onRenameSelected = function () {
        this.tree.markAsBeingRenamed();
        this.isMenuVisible = false;
    };
    TreeInternalComponent.prototype.onRemoveSelected = function () {
        this.treeService.fireNodeRemoved(this.tree);
    };
    TreeInternalComponent.prototype.applyNewValue = function (e) {
        if ((e.action === editable_events_1.NodeEditableEventAction.Cancel || this.tree.isNew()) && tree_1.Tree.isValueEmpty(e.value)) {
            return this.treeService.fireNodeRemoved(this.tree);
        }
        if (this.tree.isNew()) {
            this.tree.value = e.value;
            this.treeService.fireNodeCreated(this.tree);
        }
        if (this.tree.isBeingRenamed()) {
            var oldValue = this.tree.value;
            this.tree.value = e.value;
            this.treeService.fireNodeRenamed(oldValue, this.tree);
        }
        this.tree.markAsModified();
    };
    TreeInternalComponent.prototype.shouldShowInputForTreeValue = function () {
        return this.tree.isNew() || this.tree.isBeingRenamed();
    };
    TreeInternalComponent.prototype.isRootHidden = function () {
        return this.tree.isRoot() && !this.settings.rootIsVisible;
    };
    TreeInternalComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'tree-internal',
                    template: "\n  <ul class=\"tree\" *ngIf=\"tree\" [ngClass]=\"{rootless: isRootHidden()}\">\n    <li>\n      <div class=\"value-container\"\n        [ngClass]=\"{rootless: isRootHidden()}\"\n        (contextmenu)=\"showMenu($event)\"\n        [nodeDraggable]=\"element\"\n        [tree]=\"tree\">\n\n        <div class=\"folding\" (click)=\"tree.switchFoldingType()\" [ngClass]=\"tree.foldingType.cssClass\"></div>\n        <div class=\"node-value\"\n          *ngIf=\"!shouldShowInputForTreeValue()\"\n          [class.node-selected]=\"isSelected\"\n          (click)=\"onNodeSelected($event)\">\n            {{tree.value}}<span class=\"loading-children\" *ngIf=\"tree.childrenAreBeingLoaded()\"></span>\n        </div>\n\n        <input type=\"text\" class=\"node-value\"\n           *ngIf=\"shouldShowInputForTreeValue()\"\n           [nodeEditable]=\"tree.value\"\n           (valueChanged)=\"applyNewValue($event)\"/>\n      </div>\n\n      <node-menu *ngIf=\"isMenuVisible\" (menuItemSelected)=\"onMenuItemSelected($event)\"></node-menu>\n\n      <template [ngIf]=\"tree.isNodeExpanded()\">\n        <tree-internal *ngFor=\"let child of tree.childrenAsync | async\" [tree]=\"child\"></tree-internal>\n      </template>\n    </li>\n  </ul>\n  "
                },] },
    ];
    TreeInternalComponent.ctorParameters = function () { return [
        { type: node_menu_service_1.NodeMenuService, decorators: [{ type: core_1.Inject, args: [node_menu_service_1.NodeMenuService,] },] },
        { type: tree_service_1.TreeService, decorators: [{ type: core_1.Inject, args: [tree_service_1.TreeService,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    TreeInternalComponent.propDecorators = {
        'tree': [{ type: core_1.Input },],
        'settings': [{ type: core_1.Input },],
    };
    return TreeInternalComponent;
}());
exports.TreeInternalComponent = TreeInternalComponent;
//# sourceMappingURL=tree-internal.component.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tree_service_1 = __webpack_require__("../../../../ng2-tree/src/tree.service.js");
var tree_1 = __webpack_require__("../../../../ng2-tree/src/tree.js");
var TreeComponent = (function () {
    function TreeComponent(treeService) {
        this.treeService = treeService;
        this.nodeCreated = new core_1.EventEmitter();
        this.nodeRemoved = new core_1.EventEmitter();
        this.nodeRenamed = new core_1.EventEmitter();
        this.nodeSelected = new core_1.EventEmitter();
        this.nodeMoved = new core_1.EventEmitter();
    }
    TreeComponent.prototype.ngOnChanges = function (changes) {
        if (!this.treeModel) {
            this.tree = TreeComponent.EMPTY_TREE;
        }
        else {
            this.tree = new tree_1.Tree(this.treeModel);
        }
    };
    TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.treeService.nodeRemoved$.subscribe(function (e) {
            _this.nodeRemoved.emit(e);
        });
        this.treeService.nodeRenamed$.subscribe(function (e) {
            _this.nodeRenamed.emit(e);
        });
        this.treeService.nodeCreated$.subscribe(function (e) {
            _this.nodeCreated.emit(e);
        });
        this.treeService.nodeSelected$.subscribe(function (e) {
            _this.nodeSelected.emit(e);
        });
        this.treeService.nodeMoved$.subscribe(function (e) {
            _this.nodeMoved.emit(e);
        });
    };
    TreeComponent.EMPTY_TREE = new tree_1.Tree({ value: '' });
    TreeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'tree',
                    template: "<tree-internal [tree]=\"tree\" [settings]=\"settings\"></tree-internal>",
                    providers: [tree_service_1.TreeService]
                },] },
    ];
    TreeComponent.ctorParameters = function () { return [
        { type: tree_service_1.TreeService, decorators: [{ type: core_1.Inject, args: [tree_service_1.TreeService,] },] },
    ]; };
    TreeComponent.propDecorators = {
        'treeModel': [{ type: core_1.Input, args: ['tree',] },],
        'settings': [{ type: core_1.Input },],
        'nodeCreated': [{ type: core_1.Output },],
        'nodeRemoved': [{ type: core_1.Output },],
        'nodeRenamed': [{ type: core_1.Output },],
        'nodeSelected': [{ type: core_1.Output },],
        'nodeMoved': [{ type: core_1.Output },],
    };
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=tree.component.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree.events.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NodeEvent = (function () {
    function NodeEvent(node) {
        this.node = node;
    }
    return NodeEvent;
}());
exports.NodeEvent = NodeEvent;
var NodeSelectedEvent = (function (_super) {
    __extends(NodeSelectedEvent, _super);
    function NodeSelectedEvent(node) {
        _super.call(this, node);
    }
    return NodeSelectedEvent;
}(NodeEvent));
exports.NodeSelectedEvent = NodeSelectedEvent;
var NodeDestructiveEvent = (function (_super) {
    __extends(NodeDestructiveEvent, _super);
    function NodeDestructiveEvent(node) {
        _super.call(this, node);
    }
    return NodeDestructiveEvent;
}(NodeEvent));
exports.NodeDestructiveEvent = NodeDestructiveEvent;
var NodeMovedEvent = (function (_super) {
    __extends(NodeMovedEvent, _super);
    function NodeMovedEvent(node, previousParent) {
        _super.call(this, node);
        this.previousParent = previousParent;
    }
    return NodeMovedEvent;
}(NodeDestructiveEvent));
exports.NodeMovedEvent = NodeMovedEvent;
var NodeRemovedEvent = (function (_super) {
    __extends(NodeRemovedEvent, _super);
    function NodeRemovedEvent(node) {
        _super.call(this, node);
    }
    return NodeRemovedEvent;
}(NodeDestructiveEvent));
exports.NodeRemovedEvent = NodeRemovedEvent;
var NodeCreatedEvent = (function (_super) {
    __extends(NodeCreatedEvent, _super);
    function NodeCreatedEvent(node) {
        _super.call(this, node);
    }
    return NodeCreatedEvent;
}(NodeDestructiveEvent));
exports.NodeCreatedEvent = NodeCreatedEvent;
var NodeRenamedEvent = (function (_super) {
    __extends(NodeRenamedEvent, _super);
    function NodeRenamedEvent(node, oldValue, newValue) {
        _super.call(this, node);
        this.oldValue = oldValue;
        this.newValue = newValue;
    }
    return NodeRenamedEvent;
}(NodeDestructiveEvent));
exports.NodeRenamedEvent = NodeRenamedEvent;
//# sourceMappingURL=tree.events.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _ = __webpack_require__("../../../../lodash/lodash.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var tree_types_1 = __webpack_require__("../../../../ng2-tree/src/tree.types.js");
var ChildrenLoadingState;
(function (ChildrenLoadingState) {
    ChildrenLoadingState[ChildrenLoadingState["NotStarted"] = 0] = "NotStarted";
    ChildrenLoadingState[ChildrenLoadingState["Loading"] = 1] = "Loading";
    ChildrenLoadingState[ChildrenLoadingState["Completed"] = 2] = "Completed";
})(ChildrenLoadingState || (ChildrenLoadingState = {}));
var Tree = (function () {
    function Tree(node, parent, isBranch) {
        if (parent === void 0) { parent = null; }
        if (isBranch === void 0) { isBranch = false; }
        this._childrenLoadingState = ChildrenLoadingState.NotStarted;
        this.buildTreeFromModel(node, parent, isBranch);
    }
    Tree.prototype.buildTreeFromModel = function (model, parent, isBranch) {
        var _this = this;
        this.parent = parent;
        this.node = _.extend(_.omit(model, 'children'), {
            settings: tree_types_1.TreeModelSettings.merge(model, _.get(parent, 'node'))
        });
        if (_.isFunction(this.node.loadChildren)) {
            this._loadChildren = this.node.loadChildren;
        }
        else {
            _.forEach(_.get(model, 'children'), function (child, index) {
                _this._addChild(new Tree(child, _this), index);
            });
        }
        if (!Array.isArray(this._children)) {
            this._children = this.node.loadChildren || isBranch ? [] : null;
        }
    };
    Tree.prototype.childrenAreBeingLoaded = function () {
        return (this._childrenLoadingState === ChildrenLoadingState.Loading);
    };
    Tree.prototype.canLoadChildren = function () {
        return (this._childrenLoadingState === ChildrenLoadingState.NotStarted)
            && (this.foldingType === tree_types_1.FoldingType.Expanded)
            && (!!this._loadChildren);
    };
    Tree.prototype.childrenShouldBeLoaded = function () {
        return !!this._loadChildren;
    };
    Object.defineProperty(Tree.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tree.prototype, "childrenAsync", {
        get: function () {
            var _this = this;
            if (this.canLoadChildren()) {
                setTimeout(function () { return _this._childrenLoadingState = ChildrenLoadingState.Loading; });
                return new rxjs_1.Observable(function (observer) {
                    _this._loadChildren(function (children) {
                        _this._children = _.map(children, function (child) { return new Tree(child, _this); });
                        _this._childrenLoadingState = ChildrenLoadingState.Completed;
                        observer.next(_this.children);
                        observer.complete();
                    });
                });
            }
            return rxjs_1.Observable.of(this.children);
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.createNode = function (isBranch) {
        var tree = new Tree({ value: '' }, null, isBranch);
        tree.markAsNew();
        if (this.isLeaf()) {
            return this.addSibling(tree);
        }
        else {
            return this.addChild(tree);
        }
    };
    ;
    Object.defineProperty(Tree.prototype, "value", {
        get: function () {
            return this.node.value;
        },
        set: function (value) {
            if (typeof value !== 'string' && !Tree.isRenamable(value)) {
                return;
            }
            if (Tree.isRenamable(this.value)) {
                var newValue = typeof value === 'string' ? value : _.toString(value);
                this.node.value = Tree.applyNewValueToRenamable(this.value, newValue);
            }
            else {
                this.node.value = Tree.isValueEmpty(value) ? this.node.value : _.toString(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.addSibling = function (sibling, position) {
        if (_.isArray(_.get(this.parent, 'children'))) {
            return this.parent.addChild(sibling, position);
        }
        return null;
    };
    Tree.prototype.addChild = function (child, position) {
        return this._addChild(Tree.cloneTreeShallow(child), position);
    };
    Tree.prototype._addChild = function (child, position) {
        if (position === void 0) { position = _.size(this._children) || 0; }
        child.parent = this;
        if (Array.isArray(this._children)) {
            this._children.splice(position, 0, child);
        }
        else {
            this._children = [child];
        }
        return child;
    };
    Tree.prototype.swapWithSibling = function (sibling) {
        if (!this.hasSibling(sibling)) {
            return;
        }
        var siblingIndex = sibling.positionInParent;
        var thisTreeIndex = this.positionInParent;
        this.parent._children[siblingIndex] = this;
        this.parent._children[thisTreeIndex] = sibling;
    };
    Object.defineProperty(Tree.prototype, "positionInParent", {
        get: function () {
            return _.indexOf(this.parent.children, this);
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.isStatic = function () {
        return _.get(this.node.settings, 'static', false);
    };
    Tree.prototype.isLeaf = function () {
        return !this.isBranch();
    };
    Tree.prototype.isBranch = function () {
        return Array.isArray(this._children);
    };
    Tree.prototype.isRoot = function () {
        return this.parent === null;
    };
    Tree.prototype.hasSibling = function (tree) {
        return !this.isRoot() && _.includes(this.parent.children, tree);
    };
    Tree.prototype.hasChild = function (tree) {
        return _.includes(this._children, tree);
    };
    Tree.prototype.removeChild = function (tree) {
        var childIndex = _.findIndex(this._children, function (child) { return child === tree; });
        if (childIndex >= 0) {
            this._children.splice(childIndex, 1);
        }
    };
    Tree.prototype.removeItselfFromParent = function () {
        if (!this.parent) {
            return;
        }
        this.parent.removeChild(this);
    };
    Tree.prototype.switchFoldingType = function () {
        if (this.isLeaf()) {
            return;
        }
        this.node._foldingType = this.isNodeExpanded() ? tree_types_1.FoldingType.Collapsed : tree_types_1.FoldingType.Expanded;
    };
    Tree.prototype.isNodeExpanded = function () {
        return this.foldingType === tree_types_1.FoldingType.Expanded;
    };
    Object.defineProperty(Tree.prototype, "foldingType", {
        get: function () {
            if (!this.node._foldingType) {
                if (this.childrenShouldBeLoaded()) {
                    this.node._foldingType = tree_types_1.FoldingType.Collapsed;
                }
                else if (this._children) {
                    this.node._foldingType = tree_types_1.FoldingType.Expanded;
                }
                else {
                    this.node._foldingType = tree_types_1.FoldingType.Leaf;
                }
            }
            return this.node._foldingType;
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.isNew = function () {
        return this.node._status === tree_types_1.TreeStatus.New;
    };
    Tree.prototype.markAsNew = function () {
        this.node._status = tree_types_1.TreeStatus.New;
    };
    Tree.prototype.isBeingRenamed = function () {
        return this.node._status === tree_types_1.TreeStatus.IsBeingRenamed;
    };
    Tree.prototype.markAsBeingRenamed = function () {
        this.node._status = tree_types_1.TreeStatus.IsBeingRenamed;
    };
    Tree.prototype.isModified = function () {
        return this.node._status === tree_types_1.TreeStatus.Modified;
    };
    Tree.prototype.markAsModified = function () {
        this.node._status = tree_types_1.TreeStatus.Modified;
    };
    Tree.isValueEmpty = function (value) {
        return _.isEmpty(_.trim(value));
    };
    Tree.isRenamable = function (value) {
        return (_.has(value, 'setName') && _.isFunction(value.setName))
            && (_.has(value, 'toString') && _.isFunction(value.toString) && value.toString !== Object.toString);
    };
    Tree.cloneTreeShallow = function (origin) {
        var tree = new Tree(_.clone(origin.node));
        tree._children = origin._children;
        return tree;
    };
    ;
    Tree.applyNewValueToRenamable = function (value, newValue) {
        var renamableValue = _.merge({}, value);
        renamableValue.setName(newValue);
        return renamableValue;
    };
    return Tree;
}());
exports.Tree = Tree;
//# sourceMappingURL=tree.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var tree_component_1 = __webpack_require__("../../../../ng2-tree/src/tree.component.js");
var tree_internal_component_1 = __webpack_require__("../../../../ng2-tree/src/tree-internal.component.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var node_draggable_directive_1 = __webpack_require__("../../../../ng2-tree/src/draggable/node-draggable.directive.js");
var node_draggable_service_1 = __webpack_require__("../../../../ng2-tree/src/draggable/node-draggable.service.js");
var node_editable_directive_1 = __webpack_require__("../../../../ng2-tree/src/editable/node-editable.directive.js");
var node_menu_component_1 = __webpack_require__("../../../../ng2-tree/src/menu/node-menu.component.js");
var node_menu_service_1 = __webpack_require__("../../../../ng2-tree/src/menu/node-menu.service.js");
var tree_service_1 = __webpack_require__("../../../../ng2-tree/src/tree.service.js");
var TreeModule = (function () {
    function TreeModule() {
    }
    TreeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [node_draggable_directive_1.NodeDraggableDirective, tree_component_1.TreeComponent, node_editable_directive_1.NodeEditableDirective, node_menu_component_1.NodeMenuComponent, tree_internal_component_1.TreeInternalComponent],
                    exports: [tree_component_1.TreeComponent],
                    providers: [node_draggable_service_1.NodeDraggableService, node_menu_service_1.NodeMenuService, tree_service_1.TreeService]
                },] },
    ];
    TreeModule.ctorParameters = function () { return []; };
    return TreeModule;
}());
exports.TreeModule = TreeModule;
//# sourceMappingURL=tree.module.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tree_events_1 = __webpack_require__("../../../../ng2-tree/src/tree.events.js");
var Rx_1 = __webpack_require__("../../../../rxjs/Rx.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var node_draggable_service_1 = __webpack_require__("../../../../ng2-tree/src/draggable/node-draggable.service.js");
var TreeService = (function () {
    function TreeService(nodeDraggableService) {
        this.nodeDraggableService = nodeDraggableService;
        this.nodeMoved$ = new Rx_1.Subject();
        this.nodeRemoved$ = new Rx_1.Subject();
        this.nodeRenamed$ = new Rx_1.Subject();
        this.nodeCreated$ = new Rx_1.Subject();
        this.nodeSelected$ = new Rx_1.Subject();
        this.nodeRemoved$.subscribe(function (e) { return e.node.removeItselfFromParent(); });
    }
    TreeService.prototype.unselectStream = function (tree) {
        return this.nodeSelected$.filter(function (e) { return tree !== e.node; });
    };
    TreeService.prototype.fireNodeRemoved = function (tree) {
        this.nodeRemoved$.next(new tree_events_1.NodeRemovedEvent(tree));
    };
    TreeService.prototype.fireNodeCreated = function (tree) {
        this.nodeCreated$.next(new tree_events_1.NodeCreatedEvent(tree));
    };
    TreeService.prototype.fireNodeSelected = function (tree) {
        this.nodeSelected$.next(new tree_events_1.NodeSelectedEvent(tree));
    };
    TreeService.prototype.fireNodeRenamed = function (oldValue, tree) {
        this.nodeRenamed$.next(new tree_events_1.NodeRenamedEvent(tree, oldValue, tree.value));
    };
    TreeService.prototype.fireNodeMoved = function (tree, parent) {
        this.nodeMoved$.next(new tree_events_1.NodeMovedEvent(tree, parent));
    };
    TreeService.prototype.draggedStream = function (tree, element) {
        return this.nodeDraggableService.draggableNodeEvents$
            .filter(function (e) { return e.target === element; })
            .filter(function (e) { return !e.captured.tree.hasChild(tree); });
    };
    TreeService.decorators = [
        { type: core_1.Injectable },
    ];
    TreeService.ctorParameters = function () { return [
        { type: node_draggable_service_1.NodeDraggableService, decorators: [{ type: core_1.Inject, args: [node_draggable_service_1.NodeDraggableService,] },] },
    ]; };
    return TreeService;
}());
exports.TreeService = TreeService;
//# sourceMappingURL=tree.service.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/tree.types.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _ = __webpack_require__("../../../../lodash/lodash.js");
var FoldingType = (function () {
    function FoldingType(_cssClass) {
        this._cssClass = _cssClass;
    }
    Object.defineProperty(FoldingType.prototype, "cssClass", {
        get: function () {
            return this._cssClass;
        },
        enumerable: true,
        configurable: true
    });
    FoldingType.Expanded = new FoldingType('node-expanded');
    FoldingType.Collapsed = new FoldingType('node-collapsed');
    FoldingType.Leaf = new FoldingType('node-leaf');
    return FoldingType;
}());
exports.FoldingType = FoldingType;
var TreeModelSettings = (function () {
    function TreeModelSettings() {
    }
    TreeModelSettings.merge = function (sourceA, sourceB) {
        return _.defaults({}, _.get(sourceA, 'settings'), _.get(sourceB, 'settings'), { static: false });
    };
    return TreeModelSettings;
}());
exports.TreeModelSettings = TreeModelSettings;
(function (TreeStatus) {
    TreeStatus[TreeStatus["New"] = 0] = "New";
    TreeStatus[TreeStatus["Modified"] = 1] = "Modified";
    TreeStatus[TreeStatus["IsBeingRenamed"] = 2] = "IsBeingRenamed";
})(exports.TreeStatus || (exports.TreeStatus = {}));
var TreeStatus = exports.TreeStatus;
//# sourceMappingURL=tree.types.js.map

/***/ }),

/***/ "../../../../ng2-tree/src/utils/event.utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isLeftButtonClicked(e) {
    return e.button === MouseButtons.Left;
}
exports.isLeftButtonClicked = isLeftButtonClicked;
function isRightButtonClicked(e) {
    return e.button === MouseButtons.Right;
}
exports.isRightButtonClicked = isRightButtonClicked;
function isEscapePressed(e) {
    return e.keyCode === Keys.Escape;
}
exports.isEscapePressed = isEscapePressed;
(function (Keys) {
    Keys[Keys["Escape"] = 27] = "Escape";
})(exports.Keys || (exports.Keys = {}));
var Keys = exports.Keys;
(function (MouseButtons) {
    MouseButtons[MouseButtons["Left"] = 0] = "Left";
    MouseButtons[MouseButtons["Right"] = 2] = "Right";
})(exports.MouseButtons || (exports.MouseButtons = {}));
var MouseButtons = exports.MouseButtons;
//# sourceMappingURL=event.utils.js.map

/***/ }),

/***/ "../../../../rxjs/AsyncSubject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
/**
 * @class AsyncSubject<T>
 */
var AsyncSubject = (function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        _super.apply(this, arguments);
        this.value = null;
        this.hasNext = false;
        this.hasCompleted = false;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(Subject_1.Subject));
exports.AsyncSubject = AsyncSubject;
//# sourceMappingURL=AsyncSubject.js.map

/***/ }),

/***/ "../../../../rxjs/Rx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
exports.Subject = Subject_1.Subject;
exports.AnonymousSubject = Subject_1.AnonymousSubject;
/* tslint:enable:no-unused-variable */
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
exports.Observable = Observable_1.Observable;
// statics
/* tslint:disable:no-use-before-declare */
__webpack_require__("../../../../rxjs/add/observable/bindCallback.js");
__webpack_require__("../../../../rxjs/add/observable/bindNodeCallback.js");
__webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
__webpack_require__("../../../../rxjs/add/observable/concat.js");
__webpack_require__("../../../../rxjs/add/observable/defer.js");
__webpack_require__("../../../../rxjs/add/observable/empty.js");
__webpack_require__("../../../../rxjs/add/observable/forkJoin.js");
__webpack_require__("../../../../rxjs/add/observable/from.js");
__webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
__webpack_require__("../../../../rxjs/add/observable/fromEventPattern.js");
__webpack_require__("../../../../rxjs/add/observable/fromPromise.js");
__webpack_require__("../../../../rxjs/add/observable/generate.js");
__webpack_require__("../../../../rxjs/add/observable/if.js");
__webpack_require__("../../../../rxjs/add/observable/interval.js");
__webpack_require__("../../../../rxjs/add/observable/merge.js");
__webpack_require__("../../../../rxjs/add/observable/race.js");
__webpack_require__("../../../../rxjs/add/observable/never.js");
__webpack_require__("../../../../rxjs/add/observable/of.js");
__webpack_require__("../../../../rxjs/add/observable/onErrorResumeNext.js");
__webpack_require__("../../../../rxjs/add/observable/pairs.js");
__webpack_require__("../../../../rxjs/add/observable/range.js");
__webpack_require__("../../../../rxjs/add/observable/using.js");
__webpack_require__("../../../../rxjs/add/observable/throw.js");
__webpack_require__("../../../../rxjs/add/observable/timer.js");
__webpack_require__("../../../../rxjs/add/observable/zip.js");
//dom
__webpack_require__("../../../../rxjs/add/observable/dom/ajax.js");
__webpack_require__("../../../../rxjs/add/observable/dom/webSocket.js");
//operators
__webpack_require__("../../../../rxjs/add/operator/buffer.js");
__webpack_require__("../../../../rxjs/add/operator/bufferCount.js");
__webpack_require__("../../../../rxjs/add/operator/bufferTime.js");
__webpack_require__("../../../../rxjs/add/operator/bufferToggle.js");
__webpack_require__("../../../../rxjs/add/operator/bufferWhen.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/combineAll.js");
__webpack_require__("../../../../rxjs/add/operator/combineLatest.js");
__webpack_require__("../../../../rxjs/add/operator/concat.js");
__webpack_require__("../../../../rxjs/add/operator/concatAll.js");
__webpack_require__("../../../../rxjs/add/operator/concatMap.js");
__webpack_require__("../../../../rxjs/add/operator/concatMapTo.js");
__webpack_require__("../../../../rxjs/add/operator/count.js");
__webpack_require__("../../../../rxjs/add/operator/dematerialize.js");
__webpack_require__("../../../../rxjs/add/operator/debounce.js");
__webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
__webpack_require__("../../../../rxjs/add/operator/defaultIfEmpty.js");
__webpack_require__("../../../../rxjs/add/operator/delay.js");
__webpack_require__("../../../../rxjs/add/operator/delayWhen.js");
__webpack_require__("../../../../rxjs/add/operator/distinct.js");
__webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
__webpack_require__("../../../../rxjs/add/operator/distinctUntilKeyChanged.js");
__webpack_require__("../../../../rxjs/add/operator/do.js");
__webpack_require__("../../../../rxjs/add/operator/exhaust.js");
__webpack_require__("../../../../rxjs/add/operator/exhaustMap.js");
__webpack_require__("../../../../rxjs/add/operator/expand.js");
__webpack_require__("../../../../rxjs/add/operator/elementAt.js");
__webpack_require__("../../../../rxjs/add/operator/filter.js");
__webpack_require__("../../../../rxjs/add/operator/finally.js");
__webpack_require__("../../../../rxjs/add/operator/find.js");
__webpack_require__("../../../../rxjs/add/operator/findIndex.js");
__webpack_require__("../../../../rxjs/add/operator/first.js");
__webpack_require__("../../../../rxjs/add/operator/groupBy.js");
__webpack_require__("../../../../rxjs/add/operator/ignoreElements.js");
__webpack_require__("../../../../rxjs/add/operator/isEmpty.js");
__webpack_require__("../../../../rxjs/add/operator/audit.js");
__webpack_require__("../../../../rxjs/add/operator/auditTime.js");
__webpack_require__("../../../../rxjs/add/operator/last.js");
__webpack_require__("../../../../rxjs/add/operator/let.js");
__webpack_require__("../../../../rxjs/add/operator/every.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
__webpack_require__("../../../../rxjs/add/operator/mapTo.js");
__webpack_require__("../../../../rxjs/add/operator/materialize.js");
__webpack_require__("../../../../rxjs/add/operator/max.js");
__webpack_require__("../../../../rxjs/add/operator/merge.js");
__webpack_require__("../../../../rxjs/add/operator/mergeAll.js");
__webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
__webpack_require__("../../../../rxjs/add/operator/mergeMapTo.js");
__webpack_require__("../../../../rxjs/add/operator/mergeScan.js");
__webpack_require__("../../../../rxjs/add/operator/min.js");
__webpack_require__("../../../../rxjs/add/operator/multicast.js");
__webpack_require__("../../../../rxjs/add/operator/observeOn.js");
__webpack_require__("../../../../rxjs/add/operator/onErrorResumeNext.js");
__webpack_require__("../../../../rxjs/add/operator/pairwise.js");
__webpack_require__("../../../../rxjs/add/operator/partition.js");
__webpack_require__("../../../../rxjs/add/operator/pluck.js");
__webpack_require__("../../../../rxjs/add/operator/publish.js");
__webpack_require__("../../../../rxjs/add/operator/publishBehavior.js");
__webpack_require__("../../../../rxjs/add/operator/publishReplay.js");
__webpack_require__("../../../../rxjs/add/operator/publishLast.js");
__webpack_require__("../../../../rxjs/add/operator/race.js");
__webpack_require__("../../../../rxjs/add/operator/reduce.js");
__webpack_require__("../../../../rxjs/add/operator/repeat.js");
__webpack_require__("../../../../rxjs/add/operator/repeatWhen.js");
__webpack_require__("../../../../rxjs/add/operator/retry.js");
__webpack_require__("../../../../rxjs/add/operator/retryWhen.js");
__webpack_require__("../../../../rxjs/add/operator/sample.js");
__webpack_require__("../../../../rxjs/add/operator/sampleTime.js");
__webpack_require__("../../../../rxjs/add/operator/scan.js");
__webpack_require__("../../../../rxjs/add/operator/sequenceEqual.js");
__webpack_require__("../../../../rxjs/add/operator/share.js");
__webpack_require__("../../../../rxjs/add/operator/shareReplay.js");
__webpack_require__("../../../../rxjs/add/operator/single.js");
__webpack_require__("../../../../rxjs/add/operator/skip.js");
__webpack_require__("../../../../rxjs/add/operator/skipLast.js");
__webpack_require__("../../../../rxjs/add/operator/skipUntil.js");
__webpack_require__("../../../../rxjs/add/operator/skipWhile.js");
__webpack_require__("../../../../rxjs/add/operator/startWith.js");
__webpack_require__("../../../../rxjs/add/operator/subscribeOn.js");
__webpack_require__("../../../../rxjs/add/operator/switch.js");
__webpack_require__("../../../../rxjs/add/operator/switchMap.js");
__webpack_require__("../../../../rxjs/add/operator/switchMapTo.js");
__webpack_require__("../../../../rxjs/add/operator/take.js");
__webpack_require__("../../../../rxjs/add/operator/takeLast.js");
__webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
__webpack_require__("../../../../rxjs/add/operator/takeWhile.js");
__webpack_require__("../../../../rxjs/add/operator/throttle.js");
__webpack_require__("../../../../rxjs/add/operator/throttleTime.js");
__webpack_require__("../../../../rxjs/add/operator/timeInterval.js");
__webpack_require__("../../../../rxjs/add/operator/timeout.js");
__webpack_require__("../../../../rxjs/add/operator/timeoutWith.js");
__webpack_require__("../../../../rxjs/add/operator/timestamp.js");
__webpack_require__("../../../../rxjs/add/operator/toArray.js");
__webpack_require__("../../../../rxjs/add/operator/toPromise.js");
__webpack_require__("../../../../rxjs/add/operator/window.js");
__webpack_require__("../../../../rxjs/add/operator/windowCount.js");
__webpack_require__("../../../../rxjs/add/operator/windowTime.js");
__webpack_require__("../../../../rxjs/add/operator/windowToggle.js");
__webpack_require__("../../../../rxjs/add/operator/windowWhen.js");
__webpack_require__("../../../../rxjs/add/operator/withLatestFrom.js");
__webpack_require__("../../../../rxjs/add/operator/zip.js");
__webpack_require__("../../../../rxjs/add/operator/zipAll.js");
/* tslint:disable:no-unused-variable */
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
exports.Subscription = Subscription_1.Subscription;
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
exports.Subscriber = Subscriber_1.Subscriber;
var AsyncSubject_1 = __webpack_require__("../../../../rxjs/AsyncSubject.js");
exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
var ReplaySubject_1 = __webpack_require__("../../../../rxjs/ReplaySubject.js");
exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
var ConnectableObservable_1 = __webpack_require__("../../../../rxjs/observable/ConnectableObservable.js");
exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
var Notification_1 = __webpack_require__("../../../../rxjs/Notification.js");
exports.Notification = Notification_1.Notification;
var EmptyError_1 = __webpack_require__("../../../../rxjs/util/EmptyError.js");
exports.EmptyError = EmptyError_1.EmptyError;
var ArgumentOutOfRangeError_1 = __webpack_require__("../../../../rxjs/util/ArgumentOutOfRangeError.js");
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
var ObjectUnsubscribedError_1 = __webpack_require__("../../../../rxjs/util/ObjectUnsubscribedError.js");
exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
var TimeoutError_1 = __webpack_require__("../../../../rxjs/util/TimeoutError.js");
exports.TimeoutError = TimeoutError_1.TimeoutError;
var UnsubscriptionError_1 = __webpack_require__("../../../../rxjs/util/UnsubscriptionError.js");
exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
var timeInterval_1 = __webpack_require__("../../../../rxjs/operator/timeInterval.js");
exports.TimeInterval = timeInterval_1.TimeInterval;
var timestamp_1 = __webpack_require__("../../../../rxjs/operator/timestamp.js");
exports.Timestamp = timestamp_1.Timestamp;
var TestScheduler_1 = __webpack_require__("../../../../rxjs/testing/TestScheduler.js");
exports.TestScheduler = TestScheduler_1.TestScheduler;
var VirtualTimeScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/VirtualTimeScheduler.js");
exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
var AjaxObservable_1 = __webpack_require__("../../../../rxjs/observable/dom/AjaxObservable.js");
exports.AjaxResponse = AjaxObservable_1.AjaxResponse;
exports.AjaxError = AjaxObservable_1.AjaxError;
exports.AjaxTimeoutError = AjaxObservable_1.AjaxTimeoutError;
var asap_1 = __webpack_require__("../../../../rxjs/scheduler/asap.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var queue_1 = __webpack_require__("../../../../rxjs/scheduler/queue.js");
var animationFrame_1 = __webpack_require__("../../../../rxjs/scheduler/animationFrame.js");
var rxSubscriber_1 = __webpack_require__("../../../../rxjs/symbol/rxSubscriber.js");
var iterator_1 = __webpack_require__("../../../../rxjs/symbol/iterator.js");
var observable_1 = __webpack_require__("../../../../rxjs/symbol/observable.js");
/* tslint:enable:no-unused-variable */
/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
var Scheduler = {
    asap: asap_1.asap,
    queue: queue_1.queue,
    animationFrame: animationFrame_1.animationFrame,
    async: async_1.async
};
exports.Scheduler = Scheduler;
/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
var Symbol = {
    rxSubscriber: rxSubscriber_1.rxSubscriber,
    observable: observable_1.observable,
    iterator: iterator_1.iterator
};
exports.Symbol = Symbol;
//# sourceMappingURL=Rx.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/bindCallback.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bindCallback_1 = __webpack_require__("../../../../rxjs/observable/bindCallback.js");
Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/bindNodeCallback.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bindNodeCallback_1 = __webpack_require__("../../../../rxjs/observable/bindNodeCallback.js");
Observable_1.Observable.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/combineLatest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var combineLatest_1 = __webpack_require__("../../../../rxjs/observable/combineLatest.js");
Observable_1.Observable.combineLatest = combineLatest_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/concat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var concat_1 = __webpack_require__("../../../../rxjs/observable/concat.js");
Observable_1.Observable.concat = concat_1.concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/defer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var defer_1 = __webpack_require__("../../../../rxjs/observable/defer.js");
Observable_1.Observable.defer = defer_1.defer;
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/dom/ajax.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var ajax_1 = __webpack_require__("../../../../rxjs/observable/dom/ajax.js");
Observable_1.Observable.ajax = ajax_1.ajax;
//# sourceMappingURL=ajax.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/dom/webSocket.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var webSocket_1 = __webpack_require__("../../../../rxjs/observable/dom/webSocket.js");
Observable_1.Observable.webSocket = webSocket_1.webSocket;
//# sourceMappingURL=webSocket.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/empty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var empty_1 = __webpack_require__("../../../../rxjs/observable/empty.js");
Observable_1.Observable.empty = empty_1.empty;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/forkJoin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var forkJoin_1 = __webpack_require__("../../../../rxjs/observable/forkJoin.js");
Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var from_1 = __webpack_require__("../../../../rxjs/observable/from.js");
Observable_1.Observable.from = from_1.from;
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/fromEventPattern.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var fromEventPattern_1 = __webpack_require__("../../../../rxjs/observable/fromEventPattern.js");
Observable_1.Observable.fromEventPattern = fromEventPattern_1.fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/fromPromise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var fromPromise_1 = __webpack_require__("../../../../rxjs/observable/fromPromise.js");
Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/generate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var GenerateObservable_1 = __webpack_require__("../../../../rxjs/observable/GenerateObservable.js");
Observable_1.Observable.generate = GenerateObservable_1.GenerateObservable.create;
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/if.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var if_1 = __webpack_require__("../../../../rxjs/observable/if.js");
Observable_1.Observable.if = if_1._if;
//# sourceMappingURL=if.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/interval.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var interval_1 = __webpack_require__("../../../../rxjs/observable/interval.js");
Observable_1.Observable.interval = interval_1.interval;
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/merge.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var merge_1 = __webpack_require__("../../../../rxjs/observable/merge.js");
Observable_1.Observable.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/never.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var never_1 = __webpack_require__("../../../../rxjs/observable/never.js");
Observable_1.Observable.never = never_1.never;
//# sourceMappingURL=never.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/onErrorResumeNext.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var onErrorResumeNext_1 = __webpack_require__("../../../../rxjs/operator/onErrorResumeNext.js");
Observable_1.Observable.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNextStatic;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/pairs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var pairs_1 = __webpack_require__("../../../../rxjs/observable/pairs.js");
Observable_1.Observable.pairs = pairs_1.pairs;
//# sourceMappingURL=pairs.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/race.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var race_1 = __webpack_require__("../../../../rxjs/operator/race.js");
Observable_1.Observable.race = race_1.raceStatic;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/range.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var range_1 = __webpack_require__("../../../../rxjs/observable/range.js");
Observable_1.Observable.range = range_1.range;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/throw.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var throw_1 = __webpack_require__("../../../../rxjs/observable/throw.js");
Observable_1.Observable.throw = throw_1._throw;
//# sourceMappingURL=throw.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/using.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var using_1 = __webpack_require__("../../../../rxjs/observable/using.js");
Observable_1.Observable.using = using_1.using;
//# sourceMappingURL=using.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/zip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var zip_1 = __webpack_require__("../../../../rxjs/observable/zip.js");
Observable_1.Observable.zip = zip_1.zip;
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/audit.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var audit_1 = __webpack_require__("../../../../rxjs/operator/audit.js");
Observable_1.Observable.prototype.audit = audit_1.audit;
//# sourceMappingURL=audit.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/auditTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var auditTime_1 = __webpack_require__("../../../../rxjs/operator/auditTime.js");
Observable_1.Observable.prototype.auditTime = auditTime_1.auditTime;
//# sourceMappingURL=auditTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/buffer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var buffer_1 = __webpack_require__("../../../../rxjs/operator/buffer.js");
Observable_1.Observable.prototype.buffer = buffer_1.buffer;
//# sourceMappingURL=buffer.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/bufferCount.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bufferCount_1 = __webpack_require__("../../../../rxjs/operator/bufferCount.js");
Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
//# sourceMappingURL=bufferCount.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/bufferTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bufferTime_1 = __webpack_require__("../../../../rxjs/operator/bufferTime.js");
Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
//# sourceMappingURL=bufferTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/bufferToggle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bufferToggle_1 = __webpack_require__("../../../../rxjs/operator/bufferToggle.js");
Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
//# sourceMappingURL=bufferToggle.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/bufferWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bufferWhen_1 = __webpack_require__("../../../../rxjs/operator/bufferWhen.js");
Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
//# sourceMappingURL=bufferWhen.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/combineAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var combineAll_1 = __webpack_require__("../../../../rxjs/operator/combineAll.js");
Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
//# sourceMappingURL=combineAll.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/combineLatest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var combineLatest_1 = __webpack_require__("../../../../rxjs/operator/combineLatest.js");
Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/concat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var concat_1 = __webpack_require__("../../../../rxjs/operator/concat.js");
Observable_1.Observable.prototype.concat = concat_1.concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/concatAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var concatAll_1 = __webpack_require__("../../../../rxjs/operator/concatAll.js");
Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/concatMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var concatMap_1 = __webpack_require__("../../../../rxjs/operator/concatMap.js");
Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
//# sourceMappingURL=concatMap.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/concatMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var concatMapTo_1 = __webpack_require__("../../../../rxjs/operator/concatMapTo.js");
Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/count.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var count_1 = __webpack_require__("../../../../rxjs/operator/count.js");
Observable_1.Observable.prototype.count = count_1.count;
//# sourceMappingURL=count.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var debounce_1 = __webpack_require__("../../../../rxjs/operator/debounce.js");
Observable_1.Observable.prototype.debounce = debounce_1.debounce;
//# sourceMappingURL=debounce.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/defaultIfEmpty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var defaultIfEmpty_1 = __webpack_require__("../../../../rxjs/operator/defaultIfEmpty.js");
Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/delayWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var delayWhen_1 = __webpack_require__("../../../../rxjs/operator/delayWhen.js");
Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
//# sourceMappingURL=delayWhen.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/dematerialize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var dematerialize_1 = __webpack_require__("../../../../rxjs/operator/dematerialize.js");
Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
//# sourceMappingURL=dematerialize.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/distinct.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var distinct_1 = __webpack_require__("../../../../rxjs/operator/distinct.js");
Observable_1.Observable.prototype.distinct = distinct_1.distinct;
//# sourceMappingURL=distinct.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/distinctUntilKeyChanged.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var distinctUntilKeyChanged_1 = __webpack_require__("../../../../rxjs/operator/distinctUntilKeyChanged.js");
Observable_1.Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/elementAt.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var elementAt_1 = __webpack_require__("../../../../rxjs/operator/elementAt.js");
Observable_1.Observable.prototype.elementAt = elementAt_1.elementAt;
//# sourceMappingURL=elementAt.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/every.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var every_1 = __webpack_require__("../../../../rxjs/operator/every.js");
Observable_1.Observable.prototype.every = every_1.every;
//# sourceMappingURL=every.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/exhaust.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var exhaust_1 = __webpack_require__("../../../../rxjs/operator/exhaust.js");
Observable_1.Observable.prototype.exhaust = exhaust_1.exhaust;
//# sourceMappingURL=exhaust.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/exhaustMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var exhaustMap_1 = __webpack_require__("../../../../rxjs/operator/exhaustMap.js");
Observable_1.Observable.prototype.exhaustMap = exhaustMap_1.exhaustMap;
//# sourceMappingURL=exhaustMap.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/expand.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var expand_1 = __webpack_require__("../../../../rxjs/operator/expand.js");
Observable_1.Observable.prototype.expand = expand_1.expand;
//# sourceMappingURL=expand.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/finally.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var finally_1 = __webpack_require__("../../../../rxjs/operator/finally.js");
Observable_1.Observable.prototype.finally = finally_1._finally;
Observable_1.Observable.prototype._finally = finally_1._finally;
//# sourceMappingURL=finally.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/find.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var find_1 = __webpack_require__("../../../../rxjs/operator/find.js");
Observable_1.Observable.prototype.find = find_1.find;
//# sourceMappingURL=find.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/findIndex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var findIndex_1 = __webpack_require__("../../../../rxjs/operator/findIndex.js");
Observable_1.Observable.prototype.findIndex = findIndex_1.findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/first.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var first_1 = __webpack_require__("../../../../rxjs/operator/first.js");
Observable_1.Observable.prototype.first = first_1.first;
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/groupBy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var groupBy_1 = __webpack_require__("../../../../rxjs/operator/groupBy.js");
Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/ignoreElements.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var ignoreElements_1 = __webpack_require__("../../../../rxjs/operator/ignoreElements.js");
Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
//# sourceMappingURL=ignoreElements.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/isEmpty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var isEmpty_1 = __webpack_require__("../../../../rxjs/operator/isEmpty.js");
Observable_1.Observable.prototype.isEmpty = isEmpty_1.isEmpty;
//# sourceMappingURL=isEmpty.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/last.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var last_1 = __webpack_require__("../../../../rxjs/operator/last.js");
Observable_1.Observable.prototype.last = last_1.last;
//# sourceMappingURL=last.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/let.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var let_1 = __webpack_require__("../../../../rxjs/operator/let.js");
Observable_1.Observable.prototype.let = let_1.letProto;
Observable_1.Observable.prototype.letBind = let_1.letProto;
//# sourceMappingURL=let.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/mapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var mapTo_1 = __webpack_require__("../../../../rxjs/operator/mapTo.js");
Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
//# sourceMappingURL=mapTo.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/materialize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var materialize_1 = __webpack_require__("../../../../rxjs/operator/materialize.js");
Observable_1.Observable.prototype.materialize = materialize_1.materialize;
//# sourceMappingURL=materialize.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/max.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var max_1 = __webpack_require__("../../../../rxjs/operator/max.js");
Observable_1.Observable.prototype.max = max_1.max;
//# sourceMappingURL=max.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/merge.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var merge_1 = __webpack_require__("../../../../rxjs/operator/merge.js");
Observable_1.Observable.prototype.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/mergeAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var mergeAll_1 = __webpack_require__("../../../../rxjs/operator/mergeAll.js");
Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/mergeMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var mergeMap_1 = __webpack_require__("../../../../rxjs/operator/mergeMap.js");
Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/mergeMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var mergeMapTo_1 = __webpack_require__("../../../../rxjs/operator/mergeMapTo.js");
Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
//# sourceMappingURL=mergeMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/mergeScan.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var mergeScan_1 = __webpack_require__("../../../../rxjs/operator/mergeScan.js");
Observable_1.Observable.prototype.mergeScan = mergeScan_1.mergeScan;
//# sourceMappingURL=mergeScan.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var min_1 = __webpack_require__("../../../../rxjs/operator/min.js");
Observable_1.Observable.prototype.min = min_1.min;
//# sourceMappingURL=min.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/multicast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var multicast_1 = __webpack_require__("../../../../rxjs/operator/multicast.js");
Observable_1.Observable.prototype.multicast = multicast_1.multicast;
//# sourceMappingURL=multicast.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/observeOn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var observeOn_1 = __webpack_require__("../../../../rxjs/operator/observeOn.js");
Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/onErrorResumeNext.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var onErrorResumeNext_1 = __webpack_require__("../../../../rxjs/operator/onErrorResumeNext.js");
Observable_1.Observable.prototype.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/partition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var partition_1 = __webpack_require__("../../../../rxjs/operator/partition.js");
Observable_1.Observable.prototype.partition = partition_1.partition;
//# sourceMappingURL=partition.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/pluck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var pluck_1 = __webpack_require__("../../../../rxjs/operator/pluck.js");
Observable_1.Observable.prototype.pluck = pluck_1.pluck;
//# sourceMappingURL=pluck.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/publishBehavior.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var publishBehavior_1 = __webpack_require__("../../../../rxjs/operator/publishBehavior.js");
Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/publishLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var publishLast_1 = __webpack_require__("../../../../rxjs/operator/publishLast.js");
Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/publishReplay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var publishReplay_1 = __webpack_require__("../../../../rxjs/operator/publishReplay.js");
Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/race.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var race_1 = __webpack_require__("../../../../rxjs/operator/race.js");
Observable_1.Observable.prototype.race = race_1.race;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/reduce.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var reduce_1 = __webpack_require__("../../../../rxjs/operator/reduce.js");
Observable_1.Observable.prototype.reduce = reduce_1.reduce;
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/repeat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var repeat_1 = __webpack_require__("../../../../rxjs/operator/repeat.js");
Observable_1.Observable.prototype.repeat = repeat_1.repeat;
//# sourceMappingURL=repeat.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/repeatWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var repeatWhen_1 = __webpack_require__("../../../../rxjs/operator/repeatWhen.js");
Observable_1.Observable.prototype.repeatWhen = repeatWhen_1.repeatWhen;
//# sourceMappingURL=repeatWhen.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/retry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var retry_1 = __webpack_require__("../../../../rxjs/operator/retry.js");
Observable_1.Observable.prototype.retry = retry_1.retry;
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/retryWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var retryWhen_1 = __webpack_require__("../../../../rxjs/operator/retryWhen.js");
Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
//# sourceMappingURL=retryWhen.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/sample.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var sample_1 = __webpack_require__("../../../../rxjs/operator/sample.js");
Observable_1.Observable.prototype.sample = sample_1.sample;
//# sourceMappingURL=sample.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/sampleTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var sampleTime_1 = __webpack_require__("../../../../rxjs/operator/sampleTime.js");
Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
//# sourceMappingURL=sampleTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/scan.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var scan_1 = __webpack_require__("../../../../rxjs/operator/scan.js");
Observable_1.Observable.prototype.scan = scan_1.scan;
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/sequenceEqual.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var sequenceEqual_1 = __webpack_require__("../../../../rxjs/operator/sequenceEqual.js");
Observable_1.Observable.prototype.sequenceEqual = sequenceEqual_1.sequenceEqual;
//# sourceMappingURL=sequenceEqual.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/shareReplay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var shareReplay_1 = __webpack_require__("../../../../rxjs/operator/shareReplay.js");
Observable_1.Observable.prototype.shareReplay = shareReplay_1.shareReplay;
//# sourceMappingURL=shareReplay.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/single.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var single_1 = __webpack_require__("../../../../rxjs/operator/single.js");
Observable_1.Observable.prototype.single = single_1.single;
//# sourceMappingURL=single.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/skip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var skip_1 = __webpack_require__("../../../../rxjs/operator/skip.js");
Observable_1.Observable.prototype.skip = skip_1.skip;
//# sourceMappingURL=skip.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/skipLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var skipLast_1 = __webpack_require__("../../../../rxjs/operator/skipLast.js");
Observable_1.Observable.prototype.skipLast = skipLast_1.skipLast;
//# sourceMappingURL=skipLast.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/skipUntil.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var skipUntil_1 = __webpack_require__("../../../../rxjs/operator/skipUntil.js");
Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
//# sourceMappingURL=skipUntil.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/skipWhile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var skipWhile_1 = __webpack_require__("../../../../rxjs/operator/skipWhile.js");
Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
//# sourceMappingURL=skipWhile.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/subscribeOn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var subscribeOn_1 = __webpack_require__("../../../../rxjs/operator/subscribeOn.js");
Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/switch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var switch_1 = __webpack_require__("../../../../rxjs/operator/switch.js");
Observable_1.Observable.prototype.switch = switch_1._switch;
Observable_1.Observable.prototype._switch = switch_1._switch;
//# sourceMappingURL=switch.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/switchMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var switchMapTo_1 = __webpack_require__("../../../../rxjs/operator/switchMapTo.js");
Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
//# sourceMappingURL=switchMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/take.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var take_1 = __webpack_require__("../../../../rxjs/operator/take.js");
Observable_1.Observable.prototype.take = take_1.take;
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/takeLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var takeLast_1 = __webpack_require__("../../../../rxjs/operator/takeLast.js");
Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/takeUntil.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var takeUntil_1 = __webpack_require__("../../../../rxjs/operator/takeUntil.js");
Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/throttle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var throttle_1 = __webpack_require__("../../../../rxjs/operator/throttle.js");
Observable_1.Observable.prototype.throttle = throttle_1.throttle;
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/throttleTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var throttleTime_1 = __webpack_require__("../../../../rxjs/operator/throttleTime.js");
Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/timeInterval.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var timeInterval_1 = __webpack_require__("../../../../rxjs/operator/timeInterval.js");
Observable_1.Observable.prototype.timeInterval = timeInterval_1.timeInterval;
//# sourceMappingURL=timeInterval.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/timeout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var timeout_1 = __webpack_require__("../../../../rxjs/operator/timeout.js");
Observable_1.Observable.prototype.timeout = timeout_1.timeout;
//# sourceMappingURL=timeout.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/timeoutWith.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var timeoutWith_1 = __webpack_require__("../../../../rxjs/operator/timeoutWith.js");
Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
//# sourceMappingURL=timeoutWith.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/timestamp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var timestamp_1 = __webpack_require__("../../../../rxjs/operator/timestamp.js");
Observable_1.Observable.prototype.timestamp = timestamp_1.timestamp;
//# sourceMappingURL=timestamp.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/toArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var toArray_1 = __webpack_require__("../../../../rxjs/operator/toArray.js");
Observable_1.Observable.prototype.toArray = toArray_1.toArray;
//# sourceMappingURL=toArray.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/window.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var window_1 = __webpack_require__("../../../../rxjs/operator/window.js");
Observable_1.Observable.prototype.window = window_1.window;
//# sourceMappingURL=window.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/windowCount.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var windowCount_1 = __webpack_require__("../../../../rxjs/operator/windowCount.js");
Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
//# sourceMappingURL=windowCount.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/windowTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var windowTime_1 = __webpack_require__("../../../../rxjs/operator/windowTime.js");
Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
//# sourceMappingURL=windowTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/windowToggle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var windowToggle_1 = __webpack_require__("../../../../rxjs/operator/windowToggle.js");
Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
//# sourceMappingURL=windowToggle.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/windowWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var windowWhen_1 = __webpack_require__("../../../../rxjs/operator/windowWhen.js");
Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
//# sourceMappingURL=windowWhen.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/zip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var zip_1 = __webpack_require__("../../../../rxjs/operator/zip.js");
Observable_1.Observable.prototype.zip = zip_1.zipProto;
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/zipAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var zipAll_1 = __webpack_require__("../../../../rxjs/operator/zipAll.js");
Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ }),

/***/ "../../../../rxjs/observable/BoundCallbackObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var AsyncSubject_1 = __webpack_require__("../../../../rxjs/AsyncSubject.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundCallbackObservable = (function (_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a callback API to a function that returns an Observable.
     *
     * <span class="informal">Give it a function `f` of type `f(x, callback)` and
     * it will return a function `g` that when called as `g(x)` will output an
     * Observable.</span>
     *
     * `bindCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done.
     *
     * The output of `bindCallback` is a function that takes the same parameters
     * as `func`, except the last one (the callback). When the output function
     * is called with arguments, it will return an Observable. If `func` function
     * calls its callback with one argument, the Observable will emit that value.
     * If on the other hand callback is called with multiple values, resulting
     * Observable will emit an array with these arguments.
     *
     * It is very important to remember, that input function `func` is not called
     * when output function is, but rather when Observable returned by output
     * function is subscribed. This means if `func` makes AJAX request, that request
     * will be made every time someone subscribes to resulting Observable, but not before.
     *
     * Optionally, selector function can be passed to `bindObservable`. That function
     * takes the same arguments as callback, and returns value
     * that will be emitted by Observable instead of callback parameters themselves.
     * Even though by default multiple arguments passed to callback appear in the stream as array,
     * selector function will be called with arguments directly, just as callback would.
     * This means you can imagine default selector (when one is not provided explicitly)
     * as function that aggregates all its arguments into array, or simply returns first argument,
     * if there is only one.
     *
     * Last optional parameter - {@link Scheduler} - can be used to control when call
     * to `func` happens after someone subscribes to Observable, as well as when results
     * passed to callback will be emitted. By default subscription to Observable calls `func`
     * synchronously, but using `Scheduler.async` as last parameter will defer call to input function,
     * just like wrapping that call in `setTimeout` with time `0` would. So if you use async Scheduler
     * and call `subscribe` on output Observable, all function calls that are currently executing,
     * will end before `func` is invoked.
     *
     * When it comes to emitting results passed to callback, by default they are emitted
     * immediately after `func` invokes callback. In particular, if callback is called synchronously,
     * then subscription to resulting Observable will call `next` function synchronously as well.
     * If you want to defer that call, using `Scheduler.async` will, again, do the job.
     * This means that by using `Scheduler.async` you can, in a sense, ensure that `func`
     * always calls its callback asynchronously, thus avoiding terrifying Zalgo.
     *
     * Note that Observable created by output function will always emit only one value
     * and then complete right after. Even if `func` calls callback multiple times, values from
     * second and following calls will never appear in the stream. If you need to
     * listen for multiple calls, you probably want to use {@link fromEvent} or
     * {@link fromEventPattern} instead.
     *
     * If `func` depends on some context (`this` property), that context will be set
     * to the same context that output function has at call time. In particular, if `func`
     * is called as method of some object, in order to preserve proper behaviour,
     * it is recommended to set context of output function to that object as well,
     * provided `func` is not already bound.
     *
     * If input function calls its callback in "node style" (i.e. first argument to callback is
     * optional error parameter signaling whether call failed or not), {@link bindNodeCallback}
     * provides convenient error handling and probably is a better choice.
     * `bindCallback` will treat such functions without any difference and error parameter
     * (whether passed or not) will always be interpreted as regular callback argument.
     *
     *
     * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
     * // Suppose we have jQuery.getJSON('/my/url', callback)
     * var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
     * var result = getJSONAsObservable('/my/url');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Receive array of arguments passed to callback</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 5
     *   console.log(b); // 'some string'
     *   console.log(c); // {someProperty: 'someValue'}
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction);
     * boundSomeFunction().subscribe(values => {
     *   console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
     * });
     *
     *
     * @example <caption>Use bindCallback with selector function</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 'a'
     *   console.log(b); // 'b'
     *   console.log(c); // 'c'
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction, (a, b, c) => a + b + c);
     * boundSomeFunction().subscribe(value => {
     *   console.log(value) // 'abc'
     * });
     *
     *
     * @example <caption>Compare behaviour with and without async Scheduler</caption>
     * function iCallMyCallbackSynchronously(cb) {
     *   cb();
     * }
     *
     * const boundSyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously);
     * const boundAsyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);
     *
     * boundSyncFn().subscribe(() => console.log('I was sync!'));
     * boundAsyncFn().subscribe(() => console.log('I was async!'));
     * console.log('This happened...');
     *
     * // Logs:
     * // I was sync!
     * // This happened...
     * // I was async!
     *
     *
     * @example <caption>Use bindCallback on object method</caption>
     * const boundMethod = Rx.Observable.bindCallback(someObject.methodWithCallback);
     * boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
     * .subscribe(subscriber);
     *
     *
     * @see {@link bindNodeCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps those to a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the callback would deliver.
     * @static true
     * @name bindCallback
     * @owner Observable
     */
    BoundCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) { selector = undefined; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new AsyncSubject_1.AsyncSubject();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    if (selector) {
                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                        if (result_1 === errorObject_1.errorObject) {
                            subject.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = tryCatch_1.tryCatch(callbackFunc).apply(this.context, args.concat(handler));
                if (result === errorObject_1.errorObject) {
                    subject.error(errorObject_1.errorObject.e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(BoundCallbackObservable.dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    BoundCallbackObservable.dispatch = function (state) {
        var self = this;
        var source = state.source, subscriber = state.subscriber, context = state.context;
        var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
        var subject = source.subject;
        if (!subject) {
            subject = source.subject = new AsyncSubject_1.AsyncSubject();
            var handler = function handlerFn() {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i - 0] = arguments[_i];
                }
                var source = handlerFn.source;
                var selector = source.selector, subject = source.subject;
                if (selector) {
                    var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                    if (result_2 === errorObject_1.errorObject) {
                        self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                    }
                    else {
                        self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                    }
                }
                else {
                    var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                    self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
                }
            };
            // use named function to pass values in without closure
            handler.source = source;
            var result = tryCatch_1.tryCatch(callbackFunc).apply(context, args.concat(handler));
            if (result === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
            }
        }
        self.add(subject.subscribe(subscriber));
    };
    return BoundCallbackObservable;
}(Observable_1.Observable));
exports.BoundCallbackObservable = BoundCallbackObservable;
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundCallbackObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/BoundNodeCallbackObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var AsyncSubject_1 = __webpack_require__("../../../../rxjs/AsyncSubject.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundNodeCallbackObservable = (function (_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a Node.js-style callback API to a function that returns an
     * Observable.
     *
     * <span class="informal">It's just like {@link bindCallback}, but the
     * callback is expected to be of type `callback(error, result)`.</span>
     *
     * `bindNodeCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done. The callback function is expected to follow Node.js conventions,
     * where the first argument to the callback is an error object, signaling
     * whether call was successful. If that object is passed to callback, it means
     * something went wrong.
     *
     * The output of `bindNodeCallback` is a function that takes the same
     * parameters as `func`, except the last one (the callback). When the output
     * function is called with arguments, it will return an Observable.
     * If `func` calls its callback with error parameter present, Observable will
     * error with that value as well. If error parameter is not passed, Observable will emit
     * second parameter. If there are more parameters (third and so on),
     * Observable will emit an array with all arguments, except first error argument.
     *
     * Optionally `bindNodeCallback` accepts selector function, which allows you to
     * make resulting Observable emit value computed by selector, instead of regular
     * callback arguments. It works similarly to {@link bindCallback} selector, but
     * Node.js-style error argument will never be passed to that function.
     *
     * Note that `func` will not be called at the same time output function is,
     * but rather whenever resulting Observable is subscribed. By default call to
     * `func` will happen synchronously after subscription, but that can be changed
     * with proper {@link Scheduler} provided as optional third parameter. Scheduler
     * can also control when values from callback will be emitted by Observable.
     * To find out more, check out documentation for {@link bindCallback}, where
     * Scheduler works exactly the same.
     *
     * As in {@link bindCallback}, context (`this` property) of input function will be set to context
     * of returned function, when it is called.
     *
     * After Observable emits value, it will complete immediately. This means
     * even if `func` calls callback again, values from second and consecutive
     * calls will never appear on the stream. If you need to handle functions
     * that call callbacks multiple times, check out {@link fromEvent} or
     * {@link fromEventPattern} instead.
     *
     * Note that `bindNodeCallback` can be used in non-Node.js environments as well.
     * "Node.js-style" callbacks are just a convention, so if you write for
     * browsers or any other environment and API you use implements that callback style,
     * `bindNodeCallback` can be safely used on that API functions as well.
     *
     * Remember that Error object passed to callback does not have to be an instance
     * of JavaScript built-in `Error` object. In fact, it does not even have to an object.
     * Error parameter of callback function is interpreted as "present", when value
     * of that parameter is truthy. It could be, for example, non-zero number, non-empty
     * string or boolean `true`. In all of these cases resulting Observable would error
     * with that value. This means usually regular style callbacks will fail very often when
     * `bindNodeCallback` is used. If your Observable errors much more often then you
     * would expect, check if callback really is called in Node.js-style and, if not,
     * switch to {@link bindCallback} instead.
     *
     * Note that even if error parameter is technically present in callback, but its value
     * is falsy, it still won't appear in array emitted by Observable or in selector function.
     *
     *
     * @example <caption>Read a file from the filesystem and get the data as an Observable</caption>
     * import * as fs from 'fs';
     * var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
     * var result = readFileAsObservable('./roadNames.txt', 'utf8');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Use on function calling callback with multiple arguments</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // null
     *   console.log(a); // 5
     *   console.log(b); // "some string"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // [5, "some string"]
     * });
     *
     *
     * @example <caption>Use with selector function</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // undefined
     *   console.log(a); // "abc"
     *   console.log(b); // "DEF"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction, (a, b) => a + b);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // "abcDEF"
     * });
     *
     *
     * @example <caption>Use on function calling callback in regular style</caption>
     * someFunction(a => {
     *   console.log(a); // 5
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(
     *   value => {}             // never gets called
     *   err => console.log(err) // 5
     *);
     *
     *
     * @see {@link bindCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a Node.js-style callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps those to a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the Node.js callback would
     * deliver.
     * @static true
     * @name bindNodeCallback
     * @owner Observable
     */
    BoundNodeCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) { selector = undefined; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundNodeCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new AsyncSubject_1.AsyncSubject();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    var err = innerArgs.shift();
                    if (err) {
                        subject.error(err);
                    }
                    else if (selector) {
                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                        if (result_1 === errorObject_1.errorObject) {
                            subject.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = tryCatch_1.tryCatch(callbackFunc).apply(this.context, args.concat(handler));
                if (result === errorObject_1.errorObject) {
                    subject.error(errorObject_1.errorObject.e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    return BoundNodeCallbackObservable;
}(Observable_1.Observable));
exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
function dispatch(state) {
    var self = this;
    var source = state.source, subscriber = state.subscriber, context = state.context;
    // XXX: cast to `any` to access to the private field in `source`.
    var _a = source, callbackFunc = _a.callbackFunc, args = _a.args, scheduler = _a.scheduler;
    var subject = source.subject;
    if (!subject) {
        subject = source.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector, subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
                self.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else if (selector) {
                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                if (result_2 === errorObject_1.errorObject) {
                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                }
                else {
                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                }
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        // use named function to pass values in without closure
        handler.source = source;
        var result = tryCatch_1.tryCatch(callbackFunc).apply(context, args.concat(handler));
        if (result === errorObject_1.errorObject) {
            self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
        }
    }
    self.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundNodeCallbackObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/GenerateObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var isScheduler_1 = __webpack_require__("../../../../rxjs/util/isScheduler.js");
var selfSelector = function (value) { return value; };
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var GenerateObservable = (function (_super) {
    __extends(GenerateObservable, _super);
    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
        _super.call(this);
        this.initialState = initialState;
        this.condition = condition;
        this.iterate = iterate;
        this.resultSelector = resultSelector;
        this.scheduler = scheduler;
    }
    GenerateObservable.create = function (initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
        if (arguments.length == 1) {
            return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
        }
        if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
            return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
        }
        return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
    };
    GenerateObservable.prototype._subscribe = function (subscriber) {
        var state = this.initialState;
        if (this.scheduler) {
            return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
                subscriber: subscriber,
                iterate: this.iterate,
                condition: this.condition,
                resultSelector: this.resultSelector,
                state: state });
        }
        var _a = this, condition = _a.condition, resultSelector = _a.resultSelector, iterate = _a.iterate;
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        } while (true);
    };
    GenerateObservable.dispatch = function (state) {
        var subscriber = state.subscriber, condition = state.condition;
        if (subscriber.closed) {
            return;
        }
        if (state.needIterate) {
            try {
                state.state = state.iterate(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        }
        else {
            state.needIterate = true;
        }
        if (condition) {
            var conditionResult = void 0;
            try {
                conditionResult = condition(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            if (!conditionResult) {
                subscriber.complete();
                return;
            }
            if (subscriber.closed) {
                return;
            }
        }
        var value;
        try {
            value = state.resultSelector(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return;
        }
        if (subscriber.closed) {
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        return this.schedule(state);
    };
    return GenerateObservable;
}(Observable_1.Observable));
exports.GenerateObservable = GenerateObservable;
//# sourceMappingURL=GenerateObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/IfObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IfObservable = (function (_super) {
    __extends(IfObservable, _super);
    function IfObservable(condition, thenSource, elseSource) {
        _super.call(this);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
    }
    IfObservable.create = function (condition, thenSource, elseSource) {
        return new IfObservable(condition, thenSource, elseSource);
    };
    IfObservable.prototype._subscribe = function (subscriber) {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        return new IfSubscriber(subscriber, condition, thenSource, elseSource);
    };
    return IfObservable;
}(Observable_1.Observable));
exports.IfObservable = IfObservable;
var IfSubscriber = (function (_super) {
    __extends(IfSubscriber, _super);
    function IfSubscriber(destination, condition, thenSource, elseSource) {
        _super.call(this, destination);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
        this.tryIf();
    }
    IfSubscriber.prototype.tryIf = function () {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        var result;
        try {
            result = condition();
            var source = result ? thenSource : elseSource;
            if (source) {
                this.add(subscribeToResult_1.subscribeToResult(this, source));
            }
            else {
                this._complete();
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return IfSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=IfObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/IntervalObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isNumeric_1 = __webpack_require__("../../../../rxjs/util/isNumeric.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IntervalObservable = (function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        _super.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = async_1.async;
        }
    }
    /**
     * Creates an Observable that emits sequential numbers every specified
     * interval of time, on a specified IScheduler.
     *
     * <span class="informal">Emits incremental numbers periodically in time.
     * </span>
     *
     * <img src="./img/interval.png" width="100%">
     *
     * `interval` returns an Observable that emits an infinite sequence of
     * ascending integers, with a constant interval of time of your choosing
     * between those emissions. The first emission is not sent immediately, but
     * only after the first period has passed. By default, this operator uses the
     * `async` IScheduler to provide a notion of time, but you may pass any
     * IScheduler to it.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
     * var numbers = Rx.Observable.interval(1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link delay}
     *
     * @param {number} [period=0] The interval size in milliseconds (by default)
     * or the time unit determined by the scheduler's clock.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a sequential number each time
     * interval.
     * @static true
     * @name interval
     * @owner Observable
     */
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
        var index = state.index, subscriber = state.subscriber, period = state.period;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };
    return IntervalObservable;
}(Observable_1.Observable));
exports.IntervalObservable = IntervalObservable;
//# sourceMappingURL=IntervalObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/NeverObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var noop_1 = __webpack_require__("../../../../rxjs/util/noop.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var NeverObservable = (function (_super) {
    __extends(NeverObservable, _super);
    function NeverObservable() {
        _super.call(this);
    }
    /**
     * Creates an Observable that emits no items to the Observer.
     *
     * <span class="informal">An Observable that never emits anything.</span>
     *
     * <img src="./img/never.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that emits
     * neither values nor errors nor the completion notification. It can be used
     * for testing purposes or for composing with other Observables. Please note
     * that by never emitting a complete notification, this Observable keeps the
     * subscription from being disposed automatically. Subscriptions need to be
     * manually disposed.
     *
     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
     * function info() {
     *   console.log('Will not be called');
     * }
     * var result = Rx.Observable.never().startWith(7);
     * result.subscribe(x => console.log(x), info, info);
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link of}
     * @see {@link throw}
     *
     * @return {Observable} A "never" Observable: never emits anything.
     * @static true
     * @name never
     * @owner Observable
     */
    NeverObservable.create = function () {
        return new NeverObservable();
    };
    NeverObservable.prototype._subscribe = function (subscriber) {
        noop_1.noop();
    };
    return NeverObservable;
}(Observable_1.Observable));
exports.NeverObservable = NeverObservable;
//# sourceMappingURL=NeverObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/PairsObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
function dispatch(state) {
    var obj = state.obj, keys = state.keys, length = state.length, index = state.index, subscriber = state.subscriber;
    if (index === length) {
        subscriber.complete();
        return;
    }
    var key = keys[index];
    subscriber.next([key, obj[key]]);
    state.index = index + 1;
    this.schedule(state);
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var PairsObservable = (function (_super) {
    __extends(PairsObservable, _super);
    function PairsObservable(obj, scheduler) {
        _super.call(this);
        this.obj = obj;
        this.scheduler = scheduler;
        this.keys = Object.keys(obj);
    }
    /**
     * Convert an object into an observable sequence of [key, value] pairs
     * using an optional IScheduler to enumerate the object.
     *
     * @example <caption>Converts a javascript object to an Observable</caption>
     * var obj = {
     *   foo: 42,
     *   bar: 56,
     *   baz: 78
     * };
     *
     * var source = Rx.Observable.pairs(obj);
     *
     * var subscription = source.subscribe(
     *   function (x) {
     *     console.log('Next: %s', x);
     *   },
     *   function (err) {
     *     console.log('Error: %s', err);
     *   },
     *   function () {
     *     console.log('Completed');
     *   });
     *
     * @param {Object} obj The object to inspect and turn into an
     * Observable sequence.
     * @param {Scheduler} [scheduler] An optional IScheduler to run the
     * enumeration of the input sequence on.
     * @returns {(Observable<Array<string | T>>)} An observable sequence of
     * [key, value] pairs from the object.
     */
    PairsObservable.create = function (obj, scheduler) {
        return new PairsObservable(obj, scheduler);
    };
    PairsObservable.prototype._subscribe = function (subscriber) {
        var _a = this, keys = _a.keys, scheduler = _a.scheduler;
        var length = keys.length;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                obj: this.obj, keys: keys, length: length, index: 0, subscriber: subscriber
            });
        }
        else {
            for (var idx = 0; idx < length; idx++) {
                var key = keys[idx];
                subscriber.next([key, this.obj[key]]);
            }
            subscriber.complete();
        }
    };
    return PairsObservable;
}(Observable_1.Observable));
exports.PairsObservable = PairsObservable;
//# sourceMappingURL=PairsObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/RangeObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var RangeObservable = (function (_super) {
    __extends(RangeObservable, _super);
    function RangeObservable(start, count, scheduler) {
        _super.call(this);
        this.start = start;
        this._count = count;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits a sequence of numbers within a specified
     * range.
     *
     * <span class="informal">Emits a sequence of numbers in a range.</span>
     *
     * <img src="./img/range.png" width="100%">
     *
     * `range` operator emits a range of sequential integers, in order, where you
     * select the `start` of the range and its `length`. By default, uses no
     * IScheduler and just delivers the notifications synchronously, but may use
     * an optional IScheduler to regulate those deliveries.
     *
     * @example <caption>Emits the numbers 1 to 10</caption>
     * var numbers = Rx.Observable.range(1, 10);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link interval}
     *
     * @param {number} [start=0] The value of the first integer in the sequence.
     * @param {number} [count=0] The number of sequential integers to generate.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emissions of the notifications.
     * @return {Observable} An Observable of numbers that emits a finite range of
     * sequential integers.
     * @static true
     * @name range
     * @owner Observable
     */
    RangeObservable.create = function (start, count, scheduler) {
        if (start === void 0) { start = 0; }
        if (count === void 0) { count = 0; }
        return new RangeObservable(start, count, scheduler);
    };
    RangeObservable.dispatch = function (state) {
        var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(start);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        state.start = start + 1;
        this.schedule(state);
    };
    RangeObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var start = this.start;
        var count = this._count;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(RangeObservable.dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(start++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
    };
    return RangeObservable;
}(Observable_1.Observable));
exports.RangeObservable = RangeObservable;
//# sourceMappingURL=RangeObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/SubscribeOnObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var asap_1 = __webpack_require__("../../../../rxjs/scheduler/asap.js");
var isNumeric_1 = __webpack_require__("../../../../rxjs/util/isNumeric.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var SubscribeOnObservable = (function (_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
        if (delayTime === void 0) { delayTime = 0; }
        if (scheduler === void 0) { scheduler = asap_1.asap; }
        _super.call(this);
        this.source = source;
        this.delayTime = delayTime;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
            this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = asap_1.asap;
        }
    }
    SubscribeOnObservable.create = function (source, delay, scheduler) {
        if (delay === void 0) { delay = 0; }
        if (scheduler === void 0) { scheduler = asap_1.asap; }
        return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function (arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return this.add(source.subscribe(subscriber));
    };
    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source: source, subscriber: subscriber
        });
    };
    return SubscribeOnObservable;
}(Observable_1.Observable));
exports.SubscribeOnObservable = SubscribeOnObservable;
//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/UsingObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var UsingObservable = (function (_super) {
    __extends(UsingObservable, _super);
    function UsingObservable(resourceFactory, observableFactory) {
        _super.call(this);
        this.resourceFactory = resourceFactory;
        this.observableFactory = observableFactory;
    }
    UsingObservable.create = function (resourceFactory, observableFactory) {
        return new UsingObservable(resourceFactory, observableFactory);
    };
    UsingObservable.prototype._subscribe = function (subscriber) {
        var _a = this, resourceFactory = _a.resourceFactory, observableFactory = _a.observableFactory;
        var resource;
        try {
            resource = resourceFactory();
            return new UsingSubscriber(subscriber, resource, observableFactory);
        }
        catch (err) {
            subscriber.error(err);
        }
    };
    return UsingObservable;
}(Observable_1.Observable));
exports.UsingObservable = UsingObservable;
var UsingSubscriber = (function (_super) {
    __extends(UsingSubscriber, _super);
    function UsingSubscriber(destination, resource, observableFactory) {
        _super.call(this, destination);
        this.resource = resource;
        this.observableFactory = observableFactory;
        destination.add(resource);
        this.tryUse();
    }
    UsingSubscriber.prototype.tryUse = function () {
        try {
            var source = this.observableFactory.call(this, this.resource);
            if (source) {
                this.add(subscribeToResult_1.subscribeToResult(this, source));
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return UsingSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=UsingObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/bindCallback.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var BoundCallbackObservable_1 = __webpack_require__("../../../../rxjs/observable/BoundCallbackObservable.js");
exports.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ "../../../../rxjs/observable/bindNodeCallback.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var BoundNodeCallbackObservable_1 = __webpack_require__("../../../../rxjs/observable/BoundNodeCallbackObservable.js");
exports.bindNodeCallback = BoundNodeCallbackObservable_1.BoundNodeCallbackObservable.create;
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),

/***/ "../../../../rxjs/observable/concat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var concat_1 = __webpack_require__("../../../../rxjs/operator/concat.js");
exports.concat = concat_1.concatStatic;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "../../../../rxjs/observable/dom/AjaxObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var map_1 = __webpack_require__("../../../../rxjs/operator/map.js");
function getCORSRequest() {
    if (root_1.root.XMLHttpRequest) {
        return new root_1.root.XMLHttpRequest();
    }
    else if (!!root_1.root.XDomainRequest) {
        return new root_1.root.XDomainRequest();
    }
    else {
        throw new Error('CORS is not supported by your browser');
    }
}
function getXMLHttpRequest() {
    if (root_1.root.XMLHttpRequest) {
        return new root_1.root.XMLHttpRequest();
    }
    else {
        var progId = void 0;
        try {
            var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
            for (var i = 0; i < 3; i++) {
                try {
                    progId = progIds[i];
                    if (new root_1.root.ActiveXObject(progId)) {
                        break;
                    }
                }
                catch (e) {
                }
            }
            return new root_1.root.ActiveXObject(progId);
        }
        catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
        }
    }
}
function ajaxGet(url, headers) {
    if (headers === void 0) { headers = null; }
    return new AjaxObservable({ method: 'GET', url: url, headers: headers });
}
exports.ajaxGet = ajaxGet;
;
function ajaxPost(url, body, headers) {
    return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
}
exports.ajaxPost = ajaxPost;
;
function ajaxDelete(url, headers) {
    return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
}
exports.ajaxDelete = ajaxDelete;
;
function ajaxPut(url, body, headers) {
    return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
}
exports.ajaxPut = ajaxPut;
;
function ajaxPatch(url, body, headers) {
    return new AjaxObservable({ method: 'PATCH', url: url, body: body, headers: headers });
}
exports.ajaxPatch = ajaxPatch;
;
function ajaxGetJSON(url, headers) {
    return new AjaxObservable({ method: 'GET', url: url, responseType: 'json', headers: headers })
        .lift(new map_1.MapOperator(function (x, index) { return x.response; }, null));
}
exports.ajaxGetJSON = ajaxGetJSON;
;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var AjaxObservable = (function (_super) {
    __extends(AjaxObservable, _super);
    function AjaxObservable(urlOrRequest) {
        _super.call(this);
        var request = {
            async: true,
            createXHR: function () {
                return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();
            },
            crossDomain: false,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
        };
        if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
        }
        else {
            for (var prop in urlOrRequest) {
                if (urlOrRequest.hasOwnProperty(prop)) {
                    request[prop] = urlOrRequest[prop];
                }
            }
        }
        this.request = request;
    }
    AjaxObservable.prototype._subscribe = function (subscriber) {
        return new AjaxSubscriber(subscriber, this.request);
    };
    /**
     * Creates an observable for an Ajax request with either a request object with
     * url, headers, etc or a string for a URL.
     *
     * @example
     * source = Rx.Observable.ajax('/products');
     * source = Rx.Observable.ajax({ url: 'products', method: 'GET' });
     *
     * @param {string|Object} request Can be one of the following:
     *   A string of the URL to make the Ajax call.
     *   An object with the following properties
     *   - url: URL of the request
     *   - body: The body of the request
     *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
     *   - async: Whether the request is async
     *   - headers: Optional headers
     *   - crossDomain: true if a cross domain request, else false
     *   - createXHR: a function to override if you need to use an alternate
     *   XMLHttpRequest implementation.
     *   - resultSelector: a function to use to alter the output value type of
     *   the Observable. Gets {@link AjaxResponse} as an argument.
     * @return {Observable} An observable sequence containing the XMLHttpRequest.
     * @static true
     * @name ajax
     * @owner Observable
    */
    AjaxObservable.create = (function () {
        var create = function (urlOrRequest) {
            return new AjaxObservable(urlOrRequest);
        };
        create.get = ajaxGet;
        create.post = ajaxPost;
        create.delete = ajaxDelete;
        create.put = ajaxPut;
        create.patch = ajaxPatch;
        create.getJSON = ajaxGetJSON;
        return create;
    })();
    return AjaxObservable;
}(Observable_1.Observable));
exports.AjaxObservable = AjaxObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AjaxSubscriber = (function (_super) {
    __extends(AjaxSubscriber, _super);
    function AjaxSubscriber(destination, request) {
        _super.call(this, destination);
        this.request = request;
        this.done = false;
        var headers = request.headers = request.headers || {};
        // force CORS if requested
        if (!request.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }
        // ensure content type is set
        if (!('Content-Type' in headers) && !(root_1.root.FormData && request.body instanceof root_1.root.FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        }
        // properly serialize body
        request.body = this.serializeBody(request.body, request.headers['Content-Type']);
        this.send();
    }
    AjaxSubscriber.prototype.next = function (e) {
        this.done = true;
        var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
        var response = new AjaxResponse(e, xhr, request);
        destination.next(response);
    };
    AjaxSubscriber.prototype.send = function () {
        var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
        var createXHR = request.createXHR;
        var xhr = tryCatch_1.tryCatch(createXHR).call(request);
        if (xhr === errorObject_1.errorObject) {
            this.error(errorObject_1.errorObject.e);
        }
        else {
            this.xhr = xhr;
            // set up the events before open XHR
            // https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
            // You need to add the event listeners before calling open() on the request.
            // Otherwise the progress events will not fire.
            this.setupEvents(xhr, request);
            // open XHR
            var result = void 0;
            if (user) {
                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async, user, password);
            }
            else {
                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async);
            }
            if (result === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
                return null;
            }
            // timeout, responseType and withCredentials can be set once the XHR is open
            if (async) {
                xhr.timeout = request.timeout;
                xhr.responseType = request.responseType;
            }
            if ('withCredentials' in xhr) {
                xhr.withCredentials = !!request.withCredentials;
            }
            // set headers
            this.setHeaders(xhr, headers);
            // finally send the request
            result = body ? tryCatch_1.tryCatch(xhr.send).call(xhr, body) : tryCatch_1.tryCatch(xhr.send).call(xhr);
            if (result === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
                return null;
            }
        }
        return xhr;
    };
    AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
        if (!body || typeof body === 'string') {
            return body;
        }
        else if (root_1.root.FormData && body instanceof root_1.root.FormData) {
            return body;
        }
        if (contentType) {
            var splitIndex = contentType.indexOf(';');
            if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
            }
        }
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(function (key) { return (encodeURI(key) + "=" + encodeURI(body[key])); }).join('&');
            case 'application/json':
                return JSON.stringify(body);
            default:
                return body;
        }
    };
    AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    };
    AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
        var progressSubscriber = request.progressSubscriber;
        function xhrTimeout(e) {
            var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (progressSubscriber) {
                progressSubscriber.error(e);
            }
            subscriber.error(new AjaxTimeoutError(this, request)); //TODO: Make betterer.
        }
        ;
        xhr.ontimeout = xhrTimeout;
        xhrTimeout.request = request;
        xhrTimeout.subscriber = this;
        xhrTimeout.progressSubscriber = progressSubscriber;
        if (xhr.upload && 'withCredentials' in xhr) {
            if (progressSubscriber) {
                var xhrProgress_1;
                xhrProgress_1 = function (e) {
                    var progressSubscriber = xhrProgress_1.progressSubscriber;
                    progressSubscriber.next(e);
                };
                if (root_1.root.XDomainRequest) {
                    xhr.onprogress = xhrProgress_1;
                }
                else {
                    xhr.upload.onprogress = xhrProgress_1;
                }
                xhrProgress_1.progressSubscriber = progressSubscriber;
            }
            var xhrError_1;
            xhrError_1 = function (e) {
                var _a = xhrError_1, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                subscriber.error(new AjaxError('ajax error', this, request));
            };
            xhr.onerror = xhrError_1;
            xhrError_1.request = request;
            xhrError_1.subscriber = this;
            xhrError_1.progressSubscriber = progressSubscriber;
        }
        function xhrReadyStateChange(e) {
            var _a = xhrReadyStateChange, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (this.readyState === 4) {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status_1 = this.status === 1223 ? 204 : this.status;
                var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status_1 === 0) {
                    status_1 = response ? 200 : 0;
                }
                if (200 <= status_1 && status_1 < 300) {
                    if (progressSubscriber) {
                        progressSubscriber.complete();
                    }
                    subscriber.next(e);
                    subscriber.complete();
                }
                else {
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
                }
            }
        }
        ;
        xhr.onreadystatechange = xhrReadyStateChange;
        xhrReadyStateChange.subscriber = this;
        xhrReadyStateChange.progressSubscriber = progressSubscriber;
        xhrReadyStateChange.request = request;
    };
    AjaxSubscriber.prototype.unsubscribe = function () {
        var _a = this, done = _a.done, xhr = _a.xhr;
        if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
            xhr.abort();
        }
        _super.prototype.unsubscribe.call(this);
    };
    return AjaxSubscriber;
}(Subscriber_1.Subscriber));
exports.AjaxSubscriber = AjaxSubscriber;
/**
 * A normalized AJAX response.
 *
 * @see {@link ajax}
 *
 * @class AjaxResponse
 */
var AjaxResponse = (function () {
    function AjaxResponse(originalEvent, xhr, request) {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        switch (this.responseType) {
            case 'json':
                if ('response' in xhr) {
                    //IE does not support json as responseType, parse it internally
                    this.response = xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
                }
                else {
                    this.response = JSON.parse(xhr.responseText || 'null');
                }
                break;
            case 'xml':
                this.response = xhr.responseXML;
                break;
            case 'text':
            default:
                this.response = ('response' in xhr) ? xhr.response : xhr.responseText;
                break;
        }
    }
    return AjaxResponse;
}());
exports.AjaxResponse = AjaxResponse;
/**
 * A normalized AJAX error.
 *
 * @see {@link ajax}
 *
 * @class AjaxError
 */
var AjaxError = (function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, xhr, request) {
        _super.call(this, message);
        this.message = message;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
    }
    return AjaxError;
}(Error));
exports.AjaxError = AjaxError;
/**
 * @see {@link ajax}
 *
 * @class AjaxTimeoutError
 */
var AjaxTimeoutError = (function (_super) {
    __extends(AjaxTimeoutError, _super);
    function AjaxTimeoutError(xhr, request) {
        _super.call(this, 'ajax timeout', xhr, request);
    }
    return AjaxTimeoutError;
}(AjaxError));
exports.AjaxTimeoutError = AjaxTimeoutError;
//# sourceMappingURL=AjaxObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/dom/WebSocketSubject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
var ReplaySubject_1 = __webpack_require__("../../../../rxjs/ReplaySubject.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var assign_1 = __webpack_require__("../../../../rxjs/util/assign.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var WebSocketSubject = (function (_super) {
    __extends(WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
        if (urlConfigOrSource instanceof Observable_1.Observable) {
            _super.call(this, destination, urlConfigOrSource);
        }
        else {
            _super.call(this);
            this.WebSocketCtor = root_1.root.WebSocket;
            this._output = new Subject_1.Subject();
            if (typeof urlConfigOrSource === 'string') {
                this.url = urlConfigOrSource;
            }
            else {
                // WARNING: config object could override important members here.
                assign_1.assign(this, urlConfigOrSource);
            }
            if (!this.WebSocketCtor) {
                throw new Error('no WebSocket constructor can be found');
            }
            this.destination = new ReplaySubject_1.ReplaySubject();
        }
    }
    WebSocketSubject.prototype.resultSelector = function (e) {
        return JSON.parse(e.data);
    };
    /**
     * Wrapper around the w3c-compatible WebSocket object provided by the browser.
     *
     * @example <caption>Wraps browser WebSocket</caption>
     *
     * let socket$ = Observable.webSocket('ws://localhost:8081');
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @example <caption>Wraps WebSocket from nodejs-websocket (using node.js)</caption>
     *
     * import { w3cwebsocket } from 'websocket';
     *
     * let socket$ = Observable.webSocket({
     *   url: 'ws://localhost:8081',
     *   WebSocketCtor: w3cwebsocket
     * });
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @param {string | WebSocketSubjectConfig} urlConfigOrSource the source of the websocket as an url or a structure defining the websocket object
     * @return {WebSocketSubject}
     * @static true
     * @name webSocket
     * @owner Observable
     */
    WebSocketSubject.create = function (urlConfigOrSource) {
        return new WebSocketSubject(urlConfigOrSource);
    };
    WebSocketSubject.prototype.lift = function (operator) {
        var sock = new WebSocketSubject(this, this.destination);
        sock.operator = operator;
        return sock;
    };
    WebSocketSubject.prototype._resetState = function () {
        this.socket = null;
        if (!this.source) {
            this.destination = new ReplaySubject_1.ReplaySubject();
        }
        this._output = new Subject_1.Subject();
    };
    // TODO: factor this out to be a proper Operator/Subscriber implementation and eliminate closures
    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
        var self = this;
        return new Observable_1.Observable(function (observer) {
            var result = tryCatch_1.tryCatch(subMsg)();
            if (result === errorObject_1.errorObject) {
                observer.error(errorObject_1.errorObject.e);
            }
            else {
                self.next(result);
            }
            var subscription = self.subscribe(function (x) {
                var result = tryCatch_1.tryCatch(messageFilter)(x);
                if (result === errorObject_1.errorObject) {
                    observer.error(errorObject_1.errorObject.e);
                }
                else if (result) {
                    observer.next(x);
                }
            }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
            return function () {
                var result = tryCatch_1.tryCatch(unsubMsg)();
                if (result === errorObject_1.errorObject) {
                    observer.error(errorObject_1.errorObject.e);
                }
                else {
                    self.next(result);
                }
                subscription.unsubscribe();
            };
        });
    };
    WebSocketSubject.prototype._connectSocket = function () {
        var _this = this;
        var WebSocketCtor = this.WebSocketCtor;
        var observer = this._output;
        var socket = null;
        try {
            socket = this.protocol ?
                new WebSocketCtor(this.url, this.protocol) :
                new WebSocketCtor(this.url);
            this.socket = socket;
            if (this.binaryType) {
                this.socket.binaryType = this.binaryType;
            }
        }
        catch (e) {
            observer.error(e);
            return;
        }
        var subscription = new Subscription_1.Subscription(function () {
            _this.socket = null;
            if (socket && socket.readyState === 1) {
                socket.close();
            }
        });
        socket.onopen = function (e) {
            var openObserver = _this.openObserver;
            if (openObserver) {
                openObserver.next(e);
            }
            var queue = _this.destination;
            _this.destination = Subscriber_1.Subscriber.create(function (x) { return socket.readyState === 1 && socket.send(x); }, function (e) {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                if (e && e.code) {
                    socket.close(e.code, e.reason);
                }
                else {
                    observer.error(new TypeError('WebSocketSubject.error must be called with an object with an error code, ' +
                        'and an optional reason: { code: number, reason: string }'));
                }
                _this._resetState();
            }, function () {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                socket.close();
                _this._resetState();
            });
            if (queue && queue instanceof ReplaySubject_1.ReplaySubject) {
                subscription.add(queue.subscribe(_this.destination));
            }
        };
        socket.onerror = function (e) {
            _this._resetState();
            observer.error(e);
        };
        socket.onclose = function (e) {
            _this._resetState();
            var closeObserver = _this.closeObserver;
            if (closeObserver) {
                closeObserver.next(e);
            }
            if (e.wasClean) {
                observer.complete();
            }
            else {
                observer.error(e);
            }
        };
        socket.onmessage = function (e) {
            var result = tryCatch_1.tryCatch(_this.resultSelector)(e);
            if (result === errorObject_1.errorObject) {
                observer.error(errorObject_1.errorObject.e);
            }
            else {
                observer.next(result);
            }
        };
    };
    WebSocketSubject.prototype._subscribe = function (subscriber) {
        var _this = this;
        var source = this.source;
        if (source) {
            return source.subscribe(subscriber);
        }
        if (!this.socket) {
            this._connectSocket();
        }
        var subscription = new Subscription_1.Subscription();
        subscription.add(this._output.subscribe(subscriber));
        subscription.add(function () {
            var socket = _this.socket;
            if (_this._output.observers.length === 0) {
                if (socket && socket.readyState === 1) {
                    socket.close();
                }
                _this._resetState();
            }
        });
        return subscription;
    };
    WebSocketSubject.prototype.unsubscribe = function () {
        var _a = this, source = _a.source, socket = _a.socket;
        if (socket && socket.readyState === 1) {
            socket.close();
            this._resetState();
        }
        _super.prototype.unsubscribe.call(this);
        if (!source) {
            this.destination = new ReplaySubject_1.ReplaySubject();
        }
    };
    return WebSocketSubject;
}(Subject_1.AnonymousSubject));
exports.WebSocketSubject = WebSocketSubject;
//# sourceMappingURL=WebSocketSubject.js.map

/***/ }),

/***/ "../../../../rxjs/observable/dom/ajax.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AjaxObservable_1 = __webpack_require__("../../../../rxjs/observable/dom/AjaxObservable.js");
exports.ajax = AjaxObservable_1.AjaxObservable.create;
//# sourceMappingURL=ajax.js.map

/***/ }),

/***/ "../../../../rxjs/observable/dom/webSocket.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var WebSocketSubject_1 = __webpack_require__("../../../../rxjs/observable/dom/WebSocketSubject.js");
exports.webSocket = WebSocketSubject_1.WebSocketSubject.create;
//# sourceMappingURL=webSocket.js.map

/***/ }),

/***/ "../../../../rxjs/observable/empty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var EmptyObservable_1 = __webpack_require__("../../../../rxjs/observable/EmptyObservable.js");
exports.empty = EmptyObservable_1.EmptyObservable.create;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "../../../../rxjs/observable/if.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IfObservable_1 = __webpack_require__("../../../../rxjs/observable/IfObservable.js");
exports._if = IfObservable_1.IfObservable.create;
//# sourceMappingURL=if.js.map

/***/ }),

/***/ "../../../../rxjs/observable/interval.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IntervalObservable_1 = __webpack_require__("../../../../rxjs/observable/IntervalObservable.js");
exports.interval = IntervalObservable_1.IntervalObservable.create;
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "../../../../rxjs/observable/never.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NeverObservable_1 = __webpack_require__("../../../../rxjs/observable/NeverObservable.js");
exports.never = NeverObservable_1.NeverObservable.create;
//# sourceMappingURL=never.js.map

/***/ }),

/***/ "../../../../rxjs/observable/pairs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PairsObservable_1 = __webpack_require__("../../../../rxjs/observable/PairsObservable.js");
exports.pairs = PairsObservable_1.PairsObservable.create;
//# sourceMappingURL=pairs.js.map

/***/ }),

/***/ "../../../../rxjs/observable/range.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var RangeObservable_1 = __webpack_require__("../../../../rxjs/observable/RangeObservable.js");
exports.range = RangeObservable_1.RangeObservable.create;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "../../../../rxjs/observable/using.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UsingObservable_1 = __webpack_require__("../../../../rxjs/observable/UsingObservable.js");
exports.using = UsingObservable_1.UsingObservable.create;
//# sourceMappingURL=using.js.map

/***/ }),

/***/ "../../../../rxjs/observable/zip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var zip_1 = __webpack_require__("../../../../rxjs/operator/zip.js");
exports.zip = zip_1.zipStatic;
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "../../../../rxjs/operator/audit.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Ignores source values for a duration determined by another Observable, then
 * emits the most recent value from the source Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link auditTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/audit.png" width="100%">
 *
 * `audit` is similar to `throttle`, but emits the last value from the silenced
 * time window, instead of the first value. `audit` emits the most recent value
 * from the source Observable on the output Observable as soon as its internal
 * timer becomes disabled, and ignores source values while the timer is enabled.
 * Initially, the timer is disabled. As soon as the first source value arrives,
 * the timer is enabled by calling the `durationSelector` function with the
 * source value, which returns the "duration" Observable. When the duration
 * Observable emits a value or completes, the timer is disabled, then the most
 * recent source value is emitted on the output Observable, and this process
 * repeats for the next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method audit
 * @owner Observable
 */
function audit(durationSelector) {
    return this.lift(new AuditOperator(durationSelector));
}
exports.audit = audit;
var AuditOperator = (function () {
    function AuditOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    AuditOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    };
    return AuditOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AuditSubscriber = (function (_super) {
    __extends(AuditSubscriber, _super);
    function AuditSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
    }
    AuditSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
            if (duration === errorObject_1.errorObject) {
                this.destination.error(errorObject_1.errorObject.e);
            }
            else {
                var innerSubscription = subscribeToResult_1.subscribeToResult(this, duration);
                if (innerSubscription.closed) {
                    this.clearThrottle();
                }
                else {
                    this.add(this.throttled = innerSubscription);
                }
            }
        }
    };
    AuditSubscriber.prototype.clearThrottle = function () {
        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = null;
            this.hasValue = false;
            this.destination.next(value);
        }
    };
    AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        this.clearThrottle();
    };
    AuditSubscriber.prototype.notifyComplete = function () {
        this.clearThrottle();
    };
    return AuditSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=audit.js.map

/***/ }),

/***/ "../../../../rxjs/operator/buffer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return this.lift(new BufferOperator(closingNotifier));
}
exports.buffer = buffer;
var BufferOperator = (function () {
    function BufferOperator(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    BufferOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    };
    return BufferOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferSubscriber = (function (_super) {
    __extends(BufferSubscriber, _super);
    function BufferSubscriber(destination, closingNotifier) {
        _super.call(this, destination);
        this.buffer = [];
        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
    }
    BufferSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    };
    return BufferSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=buffer.js.map

/***/ }),

/***/ "../../../../rxjs/operator/bufferCount.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) { startBufferEvery = null; }
    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
}
exports.bufferCount = bufferCount;
var BufferCountOperator = (function () {
    function BufferCountOperator(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        if (!startBufferEvery || bufferSize === startBufferEvery) {
            this.subscriberClass = BufferCountSubscriber;
        }
        else {
            this.subscriberClass = BufferSkipCountSubscriber;
        }
    }
    BufferCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
    };
    return BufferCountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferCountSubscriber = (function (_super) {
    __extends(BufferCountSubscriber, _super);
    function BufferCountSubscriber(destination, bufferSize) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.buffer = [];
    }
    BufferCountSubscriber.prototype._next = function (value) {
        var buffer = this.buffer;
        buffer.push(value);
        if (buffer.length == this.bufferSize) {
            this.destination.next(buffer);
            this.buffer = [];
        }
    };
    BufferCountSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer.length > 0) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    return BufferCountSubscriber;
}(Subscriber_1.Subscriber));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferSkipCountSubscriber = (function (_super) {
    __extends(BufferSkipCountSubscriber, _super);
    function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        this.buffers = [];
        this.count = 0;
    }
    BufferSkipCountSubscriber.prototype._next = function (value) {
        var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count = _a.count;
        this.count++;
        if (count % startBufferEvery === 0) {
            buffers.push([]);
        }
        for (var i = buffers.length; i--;) {
            var buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                buffers.splice(i, 1);
                this.destination.next(buffer);
            }
        }
    };
    BufferSkipCountSubscriber.prototype._complete = function () {
        var _a = this, buffers = _a.buffers, destination = _a.destination;
        while (buffers.length > 0) {
            var buffer = buffers.shift();
            if (buffer.length > 0) {
                destination.next(buffer);
            }
        }
        _super.prototype._complete.call(this);
    };
    return BufferSkipCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=bufferCount.js.map

/***/ }),

/***/ "../../../../rxjs/operator/bufferTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var isScheduler_1 = __webpack_require__("../../../../rxjs/util/isScheduler.js");
/* tslint:enable:max-line-length */
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = async_1.async;
    if (isScheduler_1.isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
}
exports.bufferTime = bufferTime;
var BufferTimeOperator = (function () {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    BufferTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    };
    return BufferTimeOperator;
}());
var Context = (function () {
    function Context() {
        this.buffer = [];
    }
    return Context;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferTimeSubscriber = (function (_super) {
    __extends(BufferTimeSubscriber, _super);
    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        _super.call(this, destination);
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
        this.contexts = [];
        var context = this.openContext();
        this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (this.timespanOnly) {
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
        else {
            var closeState = { subscriber: this, context: context };
            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
    }
    BufferTimeSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for (var i = 0; i < len; i++) {
            var context = contexts[i];
            var buffer = context.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) {
                filledBufferContext = context;
            }
        }
        if (filledBufferContext) {
            this.onBufferFull(filledBufferContext);
        }
    };
    BufferTimeSubscriber.prototype._error = function (err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber.prototype._complete = function () {
        var _a = this, contexts = _a.contexts, destination = _a.destination;
        while (contexts.length > 0) {
            var context = contexts.shift();
            destination.next(context.buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber.prototype._unsubscribe = function () {
        this.contexts = null;
    };
    BufferTimeSubscriber.prototype.onBufferFull = function (context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
            context = this.openContext();
            var bufferTimeSpan = this.bufferTimeSpan;
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    };
    BufferTimeSubscriber.prototype.openContext = function () {
        var context = new Context();
        this.contexts.push(context);
        return context;
    };
    BufferTimeSubscriber.prototype.closeContext = function (context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
            contexts.splice(contexts.indexOf(context), 1);
        }
    };
    return BufferTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevContext = state.context;
    if (prevContext) {
        subscriber.closeContext(prevContext);
    }
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
    var context = subscriber.openContext();
    var action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    var subscriber = arg.subscriber, context = arg.context;
    subscriber.closeContext(context);
}
//# sourceMappingURL=bufferTime.js.map

/***/ }),

/***/ "../../../../rxjs/operator/bufferToggle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return this.lift(new BufferToggleOperator(openings, closingSelector));
}
exports.bufferToggle = bufferToggle;
var BufferToggleOperator = (function () {
    function BufferToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    BufferToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return BufferToggleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferToggleSubscriber = (function (_super) {
    __extends(BufferToggleSubscriber, _super);
    function BufferToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(subscribeToResult_1.subscribeToResult(this, openings));
    }
    BufferToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
            contexts[i].buffer.push(value);
        }
    };
    BufferToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
    };
    BufferToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            this.destination.next(context.buffer);
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
    };
    BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    };
    BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
        this.closeBuffer(innerSub.context);
    };
    BufferToggleSubscriber.prototype.openBuffer = function (value) {
        try {
            var closingSelector = this.closingSelector;
            var closingNotifier = closingSelector.call(this, value);
            if (closingNotifier) {
                this.trySubscribe(closingNotifier);
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
        var contexts = this.contexts;
        if (contexts && context) {
            var buffer = context.buffer, subscription = context.subscription;
            this.destination.next(buffer);
            contexts.splice(contexts.indexOf(context), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        }
    };
    BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
        var contexts = this.contexts;
        var buffer = [];
        var subscription = new Subscription_1.Subscription();
        var context = { buffer: buffer, subscription: subscription };
        contexts.push(context);
        var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) {
            this.closeBuffer(context);
        }
        else {
            innerSubscription.context = context;
            this.add(innerSubscription);
            subscription.add(innerSubscription);
        }
    };
    return BufferToggleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=bufferToggle.js.map

/***/ }),

/***/ "../../../../rxjs/operator/bufferWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return this.lift(new BufferWhenOperator(closingSelector));
}
exports.bufferWhen = bufferWhen;
var BufferWhenOperator = (function () {
    function BufferWhenOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    BufferWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
    };
    return BufferWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferWhenSubscriber = (function (_super) {
    __extends(BufferWhenSubscriber, _super);
    function BufferWhenSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.closingSelector = closingSelector;
        this.subscribing = false;
        this.openBuffer();
    }
    BufferWhenSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferWhenSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferWhenSubscriber.prototype._unsubscribe = function () {
        this.buffer = null;
        this.subscribing = false;
    };
    BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openBuffer();
    };
    BufferWhenSubscriber.prototype.notifyComplete = function () {
        if (this.subscribing) {
            this.complete();
        }
        else {
            this.openBuffer();
        }
    };
    BufferWhenSubscriber.prototype.openBuffer = function () {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
            this.remove(closingSubscription);
            closingSubscription.unsubscribe();
        }
        var buffer = this.buffer;
        if (this.buffer) {
            this.destination.next(buffer);
        }
        this.buffer = [];
        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
        if (closingNotifier === errorObject_1.errorObject) {
            this.error(errorObject_1.errorObject.e);
        }
        else {
            closingSubscription = new Subscription_1.Subscription();
            this.closingSubscription = closingSubscription;
            this.add(closingSubscription);
            this.subscribing = true;
            closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
            this.subscribing = false;
        }
    };
    return BufferWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=bufferWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operator/combineAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var combineLatest_1 = __webpack_require__("../../../../rxjs/operator/combineLatest.js");
/**
 * Converts a higher-order Observable into a first-order Observable by waiting
 * for the outer Observable to complete, then applying {@link combineLatest}.
 *
 * <span class="informal">Flattens an Observable-of-Observables by applying
 * {@link combineLatest} when the Observable-of-Observables completes.</span>
 *
 * <img src="./img/combineAll.png" width="100%">
 *
 * Takes an Observable of Observables, and collects all Observables from it.
 * Once the outer Observable completes, it subscribes to all collected
 * Observables and combines their values using the {@link combineLatest}
 * strategy, such that:
 * - Every time an inner Observable emits, the output Observable emits.
 * - When the returned observable emits, it emits all of the latest values by:
 *   - If a `project` function is provided, it is called with each recent value
 *     from each inner Observable in whatever order they arrived, and the result
 *     of the `project` function is what is emitted by the output Observable.
 *   - If there is no `project` function, an array of all of the most recent
 *     values is emitted by the output Observable.
 *
 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev =>
 *   Rx.Observable.interval(Math.random()*2000).take(3)
 * ).take(2);
 * var result = higherOrder.combineAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 * @see {@link mergeAll}
 *
 * @param {function} [project] An optional function to map the most recent
 * values from each inner Observable into a new result. Takes each of the most
 * recent values from each collected inner Observable as arguments, in order.
 * @return {Observable} An Observable of projected results or arrays of recent
 * values.
 * @method combineAll
 * @owner Observable
 */
function combineAll(project) {
    return this.lift(new combineLatest_1.CombineLatestOperator(project));
}
exports.combineAll = combineAll;
//# sourceMappingURL=combineAll.js.map

/***/ }),

/***/ "../../../../rxjs/operator/concatMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mergeMapTo_1 = __webpack_require__("../../../../rxjs/operator/mergeMapTo.js");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable, resultSelector) {
    return this.lift(new mergeMapTo_1.MergeMapToOperator(innerObservable, resultSelector, 1));
}
exports.concatMapTo = concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/operator/count.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting a value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 4
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return this.lift(new CountOperator(predicate, this));
}
exports.count = count;
var CountOperator = (function () {
    function CountOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    CountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    };
    return CountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CountSubscriber = (function (_super) {
    __extends(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.count = 0;
        this.index = 0;
    }
    CountSubscriber.prototype._next = function (value) {
        if (this.predicate) {
            this._tryPredicate(value);
        }
        else {
            this.count++;
        }
    };
    CountSubscriber.prototype._tryPredicate = function (value) {
        var result;
        try {
            result = this.predicate(value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.count++;
        }
    };
    CountSubscriber.prototype._complete = function () {
        this.destination.next(this.count);
        this.destination.complete();
    };
    return CountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=count.js.map

/***/ }),

/***/ "../../../../rxjs/operator/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return this.lift(new DebounceOperator(durationSelector));
}
exports.debounce = debounce;
var DebounceOperator = (function () {
    function DebounceOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    };
    return DebounceOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceSubscriber = (function (_super) {
    __extends(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
        this.durationSubscription = null;
    }
    DebounceSubscriber.prototype._next = function (value) {
        try {
            var result = this.durationSelector.call(this, value);
            if (result) {
                this._tryNext(value, result);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DebounceSubscriber.prototype._complete = function () {
        this.emitValue();
        this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function (value, duration) {
        var subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
            subscription.unsubscribe();
            this.remove(subscription);
        }
        subscription = subscribeToResult_1.subscribeToResult(this, duration);
        if (!subscription.closed) {
            this.add(this.durationSubscription = subscription);
        }
    };
    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            var value = this.value;
            var subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = null;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = null;
            this.hasValue = false;
            _super.prototype._next.call(this, value);
        }
    };
    return DebounceSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=debounce.js.map

/***/ }),

/***/ "../../../../rxjs/operator/defaultIfEmpty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/* tslint:enable:max-line-length */
/**
 * Emits a given value if the source Observable completes without emitting any
 * `next` value, otherwise mirrors the source Observable.
 *
 * <span class="informal">If the source Observable turns out to be empty, then
 * this operator will emit a default value.</span>
 *
 * <img src="./img/defaultIfEmpty.png" width="100%">
 *
 * `defaultIfEmpty` emits the values emitted by the source Observable or a
 * specified default value if the source Observable is empty (completes without
 * having emitted any `next` value).
 *
 * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
 * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link empty}
 * @see {@link last}
 *
 * @param {any} [defaultValue=null] The default value used if the source
 * Observable is empty.
 * @return {Observable} An Observable that emits either the specified
 * `defaultValue` if the source Observable emits no items, or the values emitted
 * by the source Observable.
 * @method defaultIfEmpty
 * @owner Observable
 */
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return this.lift(new DefaultIfEmptyOperator(defaultValue));
}
exports.defaultIfEmpty = defaultIfEmpty;
var DefaultIfEmptyOperator = (function () {
    function DefaultIfEmptyOperator(defaultValue) {
        this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DefaultIfEmptySubscriber = (function (_super) {
    __extends(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
        _super.call(this, destination);
        this.defaultValue = defaultValue;
        this.isEmpty = true;
    }
    DefaultIfEmptySubscriber.prototype._next = function (value) {
        this.isEmpty = false;
        this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function () {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ "../../../../rxjs/operator/delayWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return new SubscriptionDelayObservable(this, subscriptionDelay)
            .lift(new DelayWhenOperator(delayDurationSelector));
    }
    return this.lift(new DelayWhenOperator(delayDurationSelector));
}
exports.delayWhen = delayWhen;
var DelayWhenOperator = (function () {
    function DelayWhenOperator(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DelayWhenSubscriber = (function (_super) {
    __extends(DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
        _super.call(this, destination);
        this.delayDurationSelector = delayDurationSelector;
        this.completed = false;
        this.delayNotifierSubscriptions = [];
        this.values = [];
    }
    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        var value = this.removeSubscription(innerSub);
        if (value) {
            this.destination.next(value);
        }
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function (value) {
        try {
            var delayNotifier = this.delayDurationSelector(value);
            if (delayNotifier) {
                this.tryDelay(delayNotifier, value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DelayWhenSubscriber.prototype._complete = function () {
        this.completed = true;
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
        subscription.unsubscribe();
        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        var value = null;
        if (subscriptionIdx !== -1) {
            value = this.values[subscriptionIdx];
            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
            this.values.splice(subscriptionIdx, 1);
        }
        return value;
    };
    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
        var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
        if (notifierSubscription && !notifierSubscription.closed) {
            this.add(notifierSubscription);
            this.delayNotifierSubscriptions.push(notifierSubscription);
        }
        this.values.push(value);
    };
    DelayWhenSubscriber.prototype.tryComplete = function () {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
            this.destination.complete();
        }
    };
    return DelayWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubscriptionDelayObservable = (function (_super) {
    __extends(SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
        _super.call(this);
        this.source = source;
        this.subscriptionDelay = subscriptionDelay;
    }
    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
}(Observable_1.Observable));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubscriptionDelaySubscriber = (function (_super) {
    __extends(SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
        _super.call(this);
        this.parent = parent;
        this.source = source;
        this.sourceSubscribed = false;
    }
    SubscriptionDelaySubscriber.prototype._next = function (unused) {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function (err) {
        this.unsubscribe();
        this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function () {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    };
    return SubscriptionDelaySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=delayWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operator/dematerialize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Results in:
 * // A
 * // B
 * // TypeError: x.toUpperCase is not a function
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return this.lift(new DeMaterializeOperator());
}
exports.dematerialize = dematerialize;
var DeMaterializeOperator = (function () {
    function DeMaterializeOperator() {
    }
    DeMaterializeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DeMaterializeSubscriber(subscriber));
    };
    return DeMaterializeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DeMaterializeSubscriber = (function (_super) {
    __extends(DeMaterializeSubscriber, _super);
    function DeMaterializeSubscriber(destination) {
        _super.call(this, destination);
    }
    DeMaterializeSubscriber.prototype._next = function (value) {
        value.observe(this.destination);
    };
    return DeMaterializeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=dematerialize.js.map

/***/ }),

/***/ "../../../../rxjs/operator/distinct.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var Set_1 = __webpack_require__("../../../../rxjs/util/Set.js");
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
 *   .distinct()
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 *
 * @example <caption>An example using a keySelector function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     .distinct((p: Person) => p.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 *
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(keySelector, flushes) {
    return this.lift(new DistinctOperator(keySelector, flushes));
}
exports.distinct = distinct;
var DistinctOperator = (function () {
    function DistinctOperator(keySelector, flushes) {
        this.keySelector = keySelector;
        this.flushes = flushes;
    }
    DistinctOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
    };
    return DistinctOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctSubscriber = (function (_super) {
    __extends(DistinctSubscriber, _super);
    function DistinctSubscriber(destination, keySelector, flushes) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.values = new Set_1.Set();
        if (flushes) {
            this.add(subscribeToResult_1.subscribeToResult(this, flushes));
        }
    }
    DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values.clear();
    };
    DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DistinctSubscriber.prototype._next = function (value) {
        if (this.keySelector) {
            this._useKeySelector(value);
        }
        else {
            this._finalizeNext(value, value);
        }
    };
    DistinctSubscriber.prototype._useKeySelector = function (value) {
        var key;
        var destination = this.destination;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this._finalizeNext(key, value);
    };
    DistinctSubscriber.prototype._finalizeNext = function (key, value) {
        var values = this.values;
        if (!values.has(key)) {
            values.add(key);
            this.destination.next(value);
        }
    };
    return DistinctSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.DistinctSubscriber = DistinctSubscriber;
//# sourceMappingURL=distinct.js.map

/***/ }),

/***/ "../../../../rxjs/operator/distinctUntilKeyChanged.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var distinctUntilChanged_1 = __webpack_require__("../../../../rxjs/operator/distinctUntilChanged.js");
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>An example comparing the name of persons</caption>
 *
 *  interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilKeyChanged('name')
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @example <caption>An example comparing the first letters of the name</caption>
 *
 * interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo1'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo2'},
 *     { age: 6, name: 'Foo3'})
 *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo1' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo2' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 *
 * @param {string} key String key for object property lookup on each item.
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged_1.distinctUntilChanged.call(this, function (x, y) {
        if (compare) {
            return compare(x[key], y[key]);
        }
        return x[key] === y[key];
    });
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),

/***/ "../../../../rxjs/operator/elementAt.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var ArgumentOutOfRangeError_1 = __webpack_require__("../../../../rxjs/util/ArgumentOutOfRangeError.js");
/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // click 1 = nothing
 * // click 2 = nothing
 * // click 3 = MouseEvent object logged to console
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return this.lift(new ElementAtOperator(index, defaultValue));
}
exports.elementAt = elementAt;
var ElementAtOperator = (function () {
    function ElementAtOperator(index, defaultValue) {
        this.index = index;
        this.defaultValue = defaultValue;
        if (index < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    ElementAtOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ElementAtSubscriber(subscriber, this.index, this.defaultValue));
    };
    return ElementAtOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ElementAtSubscriber = (function (_super) {
    __extends(ElementAtSubscriber, _super);
    function ElementAtSubscriber(destination, index, defaultValue) {
        _super.call(this, destination);
        this.index = index;
        this.defaultValue = defaultValue;
    }
    ElementAtSubscriber.prototype._next = function (x) {
        if (this.index-- === 0) {
            this.destination.next(x);
            this.destination.complete();
        }
    };
    ElementAtSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index >= 0) {
            if (typeof this.defaultValue !== 'undefined') {
                destination.next(this.defaultValue);
            }
            else {
                destination.error(new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError);
            }
        }
        destination.complete();
    };
    return ElementAtSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=elementAt.js.map

/***/ }),

/***/ "../../../../rxjs/operator/exhaust.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
 * exclusively until it completes before subscribing to the next.
 * @method exhaust
 * @owner Observable
 */
function exhaust() {
    return this.lift(new SwitchFirstOperator());
}
exports.exhaust = exhaust;
var SwitchFirstOperator = (function () {
    function SwitchFirstOperator() {
    }
    SwitchFirstOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchFirstSubscriber(subscriber));
    };
    return SwitchFirstOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchFirstSubscriber = (function (_super) {
    __extends(SwitchFirstSubscriber, _super);
    function SwitchFirstSubscriber(destination) {
        _super.call(this, destination);
        this.hasCompleted = false;
        this.hasSubscription = false;
    }
    SwitchFirstSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.hasSubscription = true;
            this.add(subscribeToResult_1.subscribeToResult(this, value));
        }
    };
    SwitchFirstSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=exhaust.js.map

/***/ }),

/***/ "../../../../rxjs/operator/exhaustMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000).take(5));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 * @method exhaustMap
 * @owner Observable
 */
function exhaustMap(project, resultSelector) {
    return this.lift(new SwitchFirstMapOperator(project, resultSelector));
}
exports.exhaustMap = exhaustMap;
var SwitchFirstMapOperator = (function () {
    function SwitchFirstMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchFirstMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchFirstMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchFirstMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchFirstMapSubscriber = (function (_super) {
    __extends(SwitchFirstMapSubscriber, _super);
    function SwitchFirstMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.hasSubscription = false;
        this.hasCompleted = false;
        this.index = 0;
    }
    SwitchFirstMapSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.tryNext(value);
        }
    };
    SwitchFirstMapSubscriber.prototype.tryNext = function (value) {
        var index = this.index++;
        var destination = this.destination;
        try {
            var result = this.project(value, index);
            this.hasSubscription = true;
            this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
        }
        catch (err) {
            destination.error(err);
        }
    };
    SwitchFirstMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    SwitchFirstMapSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        try {
            var result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
            destination.next(result);
        }
        catch (err) {
            destination.error(err);
        }
    };
    SwitchFirstMapSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SwitchFirstMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=exhaustMap.js.map

/***/ }),

/***/ "../../../../rxjs/operator/expand.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (scheduler === void 0) { scheduler = undefined; }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return this.lift(new ExpandOperator(project, concurrent, scheduler));
}
exports.expand = expand;
var ExpandOperator = (function () {
    function ExpandOperator(project, concurrent, scheduler) {
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
    }
    ExpandOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    };
    return ExpandOperator;
}());
exports.ExpandOperator = ExpandOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ExpandSubscriber = (function (_super) {
    __extends(ExpandSubscriber, _super);
    function ExpandSubscriber(destination, project, concurrent, scheduler) {
        _super.call(this, destination);
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
        this.index = 0;
        this.active = 0;
        this.hasCompleted = false;
        if (concurrent < Number.POSITIVE_INFINITY) {
            this.buffer = [];
        }
    }
    ExpandSubscriber.dispatch = function (arg) {
        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
        subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (destination.closed) {
            this._complete();
            return;
        }
        var index = this.index++;
        if (this.active < this.concurrent) {
            destination.next(value);
            var result = tryCatch_1.tryCatch(this.project)(value, index);
            if (result === errorObject_1.errorObject) {
                destination.error(errorObject_1.errorObject.e);
            }
            else if (!this.scheduler) {
                this.subscribeToProjection(result, value, index);
            }
            else {
                var state = { subscriber: this, result: result, value: value, index: index };
                this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
        this.active++;
        this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    ExpandSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._next(innerValue);
    };
    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer && buffer.length > 0) {
            this._next(buffer.shift());
        }
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    return ExpandSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.ExpandSubscriber = ExpandSubscriber;
//# sourceMappingURL=expand.js.map

/***/ }),

/***/ "../../../../rxjs/operator/find.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/* tslint:enable:max-line-length */
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate is not a function');
    }
    return this.lift(new FindValueOperator(predicate, this, false, thisArg));
}
exports.find = find;
var FindValueOperator = (function () {
    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
    }
    FindValueOperator.prototype.call = function (observer, source) {
        return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    };
    return FindValueOperator;
}());
exports.FindValueOperator = FindValueOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FindValueSubscriber = (function (_super) {
    __extends(FindValueSubscriber, _super);
    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
        this.index = 0;
    }
    FindValueSubscriber.prototype.notifyComplete = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    FindValueSubscriber.prototype._next = function (value) {
        var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
        var index = this.index++;
        try {
            var result = predicate.call(thisArg || this, value, index, this.source);
            if (result) {
                this.notifyComplete(this.yieldIndex ? index : value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    FindValueSubscriber.prototype._complete = function () {
        this.notifyComplete(this.yieldIndex ? -1 : undefined);
    };
    return FindValueSubscriber;
}(Subscriber_1.Subscriber));
exports.FindValueSubscriber = FindValueSubscriber;
//# sourceMappingURL=find.js.map

/***/ }),

/***/ "../../../../rxjs/operator/findIndex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var find_1 = __webpack_require__("../../../../rxjs/operator/find.js");
/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return this.lift(new find_1.FindValueOperator(predicate, this, true, thisArg));
}
exports.findIndex = findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ }),

/***/ "../../../../rxjs/operator/groupBy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var Map_1 = __webpack_require__("../../../../rxjs/util/Map.js");
var FastMap_1 = __webpack_require__("../../../../rxjs/util/FastMap.js");
/* tslint:enable:max-line-length */
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @example <caption>Group objects by id and return as array</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs3'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *     )
 *     .groupBy(p => p.id)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // [ { id: 1, name: 'aze1' },
 * //   { id: 1, name: 'erg1' },
 * //   { id: 1, name: 'df1' } ]
 * //
 * // [ { id: 2, name: 'sf2' },
 * //   { id: 2, name: 'dg2' },
 * //   { id: 2, name: 'sfqfb2' },
 * //   { id: 2, name: 'qsgqsfg2' } ]
 * //
 * // [ { id: 3, name: 'qfs3' } ]
 *
 * @example <caption>Pivot data on the id field</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs1'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *                   )
 *     .groupBy(p => p.id, p => p.name)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
 *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
 * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
 * // { id: 3, values: [ 'qfs1' ] }
 *
 * @param {function(value: T): K} keySelector A function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] A function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * A function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return this.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
}
exports.groupBy = groupBy;
var GroupByOperator = (function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var GroupBySubscriber = (function (_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
        this.groups = null;
        this.attemptedToUnsubscribe = false;
        this.count = 0;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = this.subjectSelector ? this.subjectSelector() : new Subject_1.Subject();
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(Subscriber_1.Subscriber));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var GroupDurationSubscriber = (function (_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        _super.call(this, group);
        this.key = key;
        this.group = group;
        this.parent = parent;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(Subscriber_1.Subscriber));
/**
 * An Observable representing values belonging to the same group represented by
 * a common key. The values emitted by a GroupedObservable come from the source
 * Observable. The common key is available as the field `key` on a
 * GroupedObservable instance.
 *
 * @class GroupedObservable<K, T>
 */
var GroupedObservable = (function (_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        _super.call(this);
        this.key = key;
        this.groupSubject = groupSubject;
        this.refCountSubscription = refCountSubscription;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new Subscription_1.Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(Observable_1.Observable));
exports.GroupedObservable = GroupedObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerRefCountSubscription = (function (_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        _super.call(this);
        this.parent = parent;
        parent.count++;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(Subscription_1.Subscription));
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ "../../../../rxjs/operator/ignoreElements.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var noop_1 = __webpack_require__("../../../../rxjs/util/noop.js");
/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} An empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return this.lift(new IgnoreElementsOperator());
}
exports.ignoreElements = ignoreElements;
;
var IgnoreElementsOperator = (function () {
    function IgnoreElementsOperator() {
    }
    IgnoreElementsOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new IgnoreElementsSubscriber(subscriber));
    };
    return IgnoreElementsOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var IgnoreElementsSubscriber = (function (_super) {
    __extends(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
        _super.apply(this, arguments);
    }
    IgnoreElementsSubscriber.prototype._next = function (unused) {
        noop_1.noop();
    };
    return IgnoreElementsSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ignoreElements.js.map

/***/ }),

/***/ "../../../../rxjs/operator/isEmpty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
 *
 * <img src="./img/isEmpty.png" width="100%">
 *
 * @return {Observable} An Observable that emits a Boolean.
 * @method isEmpty
 * @owner Observable
 */
function isEmpty() {
    return this.lift(new IsEmptyOperator());
}
exports.isEmpty = isEmpty;
var IsEmptyOperator = (function () {
    function IsEmptyOperator() {
    }
    IsEmptyOperator.prototype.call = function (observer, source) {
        return source.subscribe(new IsEmptySubscriber(observer));
    };
    return IsEmptyOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var IsEmptySubscriber = (function (_super) {
    __extends(IsEmptySubscriber, _super);
    function IsEmptySubscriber(destination) {
        _super.call(this, destination);
    }
    IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
        var destination = this.destination;
        destination.next(isEmpty);
        destination.complete();
    };
    IsEmptySubscriber.prototype._next = function (value) {
        this.notifyComplete(false);
    };
    IsEmptySubscriber.prototype._complete = function () {
        this.notifyComplete(true);
    };
    return IsEmptySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=isEmpty.js.map

/***/ }),

/***/ "../../../../rxjs/operator/mapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return this.lift(new MapToOperator(value));
}
exports.mapTo = mapTo;
var MapToOperator = (function () {
    function MapToOperator(value) {
        this.value = value;
    }
    MapToOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapToSubscriber = (function (_super) {
    __extends(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
        _super.call(this, destination);
        this.value = value;
    }
    MapToSubscriber.prototype._next = function (x) {
        this.destination.next(this.value);
    };
    return MapToSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=mapTo.js.map

/***/ }),

/***/ "../../../../rxjs/operator/materialize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var Notification_1 = __webpack_require__("../../../../rxjs/Notification.js");
/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
 * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
 * // - Notification {kind: "E", value: undefined, error: TypeError:
 * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
 * //   [as project] (http://1…, hasValue: false}
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return this.lift(new MaterializeOperator());
}
exports.materialize = materialize;
var MaterializeOperator = (function () {
    function MaterializeOperator() {
    }
    MaterializeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MaterializeSubscriber(subscriber));
    };
    return MaterializeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MaterializeSubscriber = (function (_super) {
    __extends(MaterializeSubscriber, _super);
    function MaterializeSubscriber(destination) {
        _super.call(this, destination);
    }
    MaterializeSubscriber.prototype._next = function (value) {
        this.destination.next(Notification_1.Notification.createNext(value));
    };
    MaterializeSubscriber.prototype._error = function (err) {
        var destination = this.destination;
        destination.next(Notification_1.Notification.createError(err));
        destination.complete();
    };
    MaterializeSubscriber.prototype._complete = function () {
        var destination = this.destination;
        destination.next(Notification_1.Notification.createComplete());
        destination.complete();
    };
    return MaterializeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=materialize.js.map

/***/ }),

/***/ "../../../../rxjs/operator/max.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var reduce_1 = __webpack_require__("../../../../rxjs/operator/reduce.js");
/**
 * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the largest value.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @example <caption>Get the maximal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .max()
 *   .subscribe(x => console.log(x)); // -> 8
 *
 * @example <caption>Use a comparer function to get the maximal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
 * }
 *
 * @see {@link min}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable} An Observable that emits item with the largest value.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    var max = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) > 0 ? x : y; }
        : function (x, y) { return x > y ? x : y; };
    return this.lift(new reduce_1.ReduceOperator(max));
}
exports.max = max;
//# sourceMappingURL=max.js.map

/***/ }),

/***/ "../../../../rxjs/operator/mergeMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
        resultSelector = null;
    }
    return this.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent));
}
exports.mergeMapTo = mergeMapTo;
// TODO: Figure out correct signature here: an Operator<Observable<T>, R>
//       needs to implement call(observer: Subscriber<R>): Subscriber<Observable<T>>
var MergeMapToOperator = (function () {
    function MergeMapToOperator(ish, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        this.ish = ish;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
    }
    MergeMapToOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
    };
    return MergeMapToOperator;
}());
exports.MergeMapToOperator = MergeMapToOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeMapToSubscriber = (function (_super) {
    __extends(MergeMapToSubscriber, _super);
    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        _super.call(this, destination);
        this.ish = ish;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeMapToSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var resultSelector = this.resultSelector;
            var index = this.index++;
            var ish = this.ish;
            var destination = this.destination;
            this.active++;
            this._innerSub(ish, destination, resultSelector, value, index);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapToSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
    };
    MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    MergeMapToSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        var result;
        try {
            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        destination.next(result);
    };
    MergeMapToSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapToSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeMapToSubscriber = MergeMapToSubscriber;
//# sourceMappingURL=mergeMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/operator/mergeScan.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * @example <caption>Count the number of click events</caption>
 * const click$ = Rx.Observable.fromEvent(document, 'click');
 * const one$ = click$.mapTo(1);
 * const seed = 0;
 * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * 1
 * 2
 * 3
 * 4
 * // ...and so on for each click
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return this.lift(new MergeScanOperator(accumulator, seed, concurrent));
}
exports.mergeScan = mergeScan;
var MergeScanOperator = (function () {
    function MergeScanOperator(accumulator, seed, concurrent) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.concurrent = concurrent;
    }
    MergeScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
    };
    return MergeScanOperator;
}());
exports.MergeScanOperator = MergeScanOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeScanSubscriber = (function (_super) {
    __extends(MergeScanSubscriber, _super);
    function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
        _super.call(this, destination);
        this.accumulator = accumulator;
        this.acc = acc;
        this.concurrent = concurrent;
        this.hasValue = false;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeScanSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var index = this.index++;
            var ish = tryCatch_1.tryCatch(this.accumulator)(this.acc, value);
            var destination = this.destination;
            if (ish === errorObject_1.errorObject) {
                destination.error(errorObject_1.errorObject.e);
            }
            else {
                this.active++;
                this._innerSub(ish, value, index);
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeScanSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var destination = this.destination;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
    };
    MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    return MergeScanSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeScanSubscriber = MergeScanSubscriber;
//# sourceMappingURL=mergeScan.js.map

/***/ }),

/***/ "../../../../rxjs/operator/min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var reduce_1 = __webpack_require__("../../../../rxjs/operator/reduce.js");
/**
 * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the smallest value.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @example <caption>Get the minimal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .min()
 *   .subscribe(x => console.log(x)); // -> 2
 *
 * @example <caption>Use a comparer function to get the minimal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
 * }
 *
 * @see {@link max}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable<R>} An Observable that emits item with the smallest value.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    var min = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) < 0 ? x : y; }
        : function (x, y) { return x < y ? x : y; };
    return this.lift(new reduce_1.ReduceOperator(min));
}
exports.min = min;
//# sourceMappingURL=min.js.map

/***/ }),

/***/ "../../../../rxjs/operator/onErrorResumeNext.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FromObservable_1 = __webpack_require__("../../../../rxjs/observable/FromObservable.js");
var isArray_1 = __webpack_require__("../../../../rxjs/util/isArray.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * <img src="./img/onErrorResumeNext.png" width="100%">
 *
 * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
 * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
 * as the source.
 *
 * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
 * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
 * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
 * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
 * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
 * be happening until there is no more Observables left in the series, at which point returned Observable will
 * complete - even if the last subscribed stream ended with an error.
 *
 * `onErrorResumeNext` can be therefore though of as version of {@link concat} operator, which is more permissive
 * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
 * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
 * an error.
 *
 * Note that you do not get any access to errors emitted by the Observables. In particular do not
 * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
 * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
 *
 *
 * @example <caption>Subscribe to the next Observable after map fails</caption>
 * Rx.Observable.of(1, 2, 3, 0)
 *   .map(x => {
 *       if (x === 0) { throw Error(); }
         return 10 / x;
 *   })
 *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
 *   .subscribe(
 *     val => console.log(val),
 *     err => console.log(err),          // Will never be called.
 *     () => console.log('that\'s it!')
 *   );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "that's it!"
 *
 * @see {@link concat}
 * @see {@link catch}
 *
 * @param {...ObservableInput} observables Observables passed either directly or as an array.
 * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
 * to the next passed Observable and so on, until it completes or runs out of Observables.
 * @method onErrorResumeNext
 * @owner Observable
 */
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
        nextSources = nextSources[0];
    }
    return this.lift(new OnErrorResumeNextOperator(nextSources));
}
exports.onErrorResumeNext = onErrorResumeNext;
/* tslint:enable:max-line-length */
function onErrorResumeNextStatic() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    var source = null;
    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
        nextSources = nextSources[0];
    }
    source = nextSources.shift();
    return new FromObservable_1.FromObservable(source, null).lift(new OnErrorResumeNextOperator(nextSources));
}
exports.onErrorResumeNextStatic = onErrorResumeNextStatic;
var OnErrorResumeNextOperator = (function () {
    function OnErrorResumeNextOperator(nextSources) {
        this.nextSources = nextSources;
    }
    OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
    };
    return OnErrorResumeNextOperator;
}());
var OnErrorResumeNextSubscriber = (function (_super) {
    __extends(OnErrorResumeNextSubscriber, _super);
    function OnErrorResumeNextSubscriber(destination, nextSources) {
        _super.call(this, destination);
        this.destination = destination;
        this.nextSources = nextSources;
    }
    OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._error = function (err) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._complete = function () {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
        var next = this.nextSources.shift();
        if (next) {
            this.add(subscribeToResult_1.subscribeToResult(this, next));
        }
        else {
            this.destination.complete();
        }
    };
    return OnErrorResumeNextSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "../../../../rxjs/operator/partition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var not_1 = __webpack_require__("../../../../rxjs/util/not.js");
var filter_1 = __webpack_require__("../../../../rxjs/operator/filter.js");
/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return [
        filter_1.filter.call(this, predicate, thisArg),
        filter_1.filter.call(this, not_1.not(predicate, thisArg))
    ];
}
exports.partition = partition;
//# sourceMappingURL=partition.js.map

/***/ }),

/***/ "../../../../rxjs/operator/pluck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var map_1 = __webpack_require__("../../../../rxjs/operator/map.js");
/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} A new Observable of property values from the source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i - 0] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return map_1.map.call(this, plucker(properties, length));
}
exports.pluck = pluck;
function plucker(props, length) {
    var mapper = function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp[props[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    };
    return mapper;
}
//# sourceMappingURL=pluck.js.map

/***/ }),

/***/ "../../../../rxjs/operator/publishBehavior.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
var multicast_1 = __webpack_require__("../../../../rxjs/operator/multicast.js");
/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
}
exports.publishBehavior = publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ }),

/***/ "../../../../rxjs/operator/publishLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsyncSubject_1 = __webpack_require__("../../../../rxjs/AsyncSubject.js");
var multicast_1 = __webpack_require__("../../../../rxjs/operator/multicast.js");
/**
 * @return {ConnectableObservable<T>}
 * @method publishLast
 * @owner Observable
 */
function publishLast() {
    return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
}
exports.publishLast = publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ }),

/***/ "../../../../rxjs/operator/publishReplay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ReplaySubject_1 = __webpack_require__("../../../../rxjs/ReplaySubject.js");
var multicast_1 = __webpack_require__("../../../../rxjs/operator/multicast.js");
/**
 * @param bufferSize
 * @param windowTime
 * @param scheduler
 * @return {ConnectableObservable<T>}
 * @method publishReplay
 * @owner Observable
 */
function publishReplay(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
}
exports.publishReplay = publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ }),

/***/ "../../../../rxjs/operator/race.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isArray_1 = __webpack_require__("../../../../rxjs/util/isArray.js");
var ArrayObservable_1 = __webpack_require__("../../../../rxjs/observable/ArrayObservable.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables.
 * @param {...Observables} ...observables Sources used to race for which Observable emits first.
 * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    // if the only argument is an array, it was most likely called with
    // `pair([obs1, obs2, ...])`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return this.lift.call(raceStatic.apply(void 0, [this].concat(observables)));
}
exports.race = race;
function raceStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    // if the only argument is an array, it was most likely called with
    // `race([obs1, obs2, ...])`
    if (observables.length === 1) {
        if (isArray_1.isArray(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new RaceOperator());
}
exports.raceStatic = raceStatic;
var RaceOperator = (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());
exports.RaceOperator = RaceOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RaceSubscriber = (function (_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        _super.call(this, destination);
        this.hasFirst = false;
        this.observables = [];
        this.subscriptions = [];
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.RaceSubscriber = RaceSubscriber;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "../../../../rxjs/operator/repeat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var EmptyObservable_1 = __webpack_require__("../../../../rxjs/observable/EmptyObservable.js");
/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) { count = -1; }
    if (count === 0) {
        return new EmptyObservable_1.EmptyObservable();
    }
    else if (count < 0) {
        return this.lift(new RepeatOperator(-1, this));
    }
    else {
        return this.lift(new RepeatOperator(count - 1, this));
    }
}
exports.repeat = repeat;
var RepeatOperator = (function () {
    function RepeatOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RepeatOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    };
    return RepeatOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RepeatSubscriber = (function (_super) {
    __extends(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
        _super.call(this, destination);
        this.count = count;
        this.source = source;
    }
    RepeatSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.complete.call(this);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RepeatSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=repeat.js.map

/***/ }),

/***/ "../../../../rxjs/operator/repeatWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return this.lift(new RepeatWhenOperator(notifier));
}
exports.repeatWhen = repeatWhen;
var RepeatWhenOperator = (function () {
    function RepeatWhenOperator(notifier) {
        this.notifier = notifier;
    }
    RepeatWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
    };
    return RepeatWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RepeatWhenSubscriber = (function (_super) {
    __extends(RepeatWhenSubscriber, _super);
    function RepeatWhenSubscriber(destination, notifier, source) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.source = source;
        this.sourceIsBeingSubscribedTo = true;
    }
    RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.sourceIsBeingSubscribedTo = true;
        this.source.subscribe(this);
    };
    RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        if (this.sourceIsBeingSubscribedTo === false) {
            return _super.prototype.complete.call(this);
        }
    };
    RepeatWhenSubscriber.prototype.complete = function () {
        this.sourceIsBeingSubscribedTo = false;
        if (!this.isStopped) {
            if (!this.retries) {
                this.subscribeToRetries();
            }
            else if (this.retriesSubscription.closed) {
                return _super.prototype.complete.call(this);
            }
            this._unsubscribeAndRecycle();
            this.notifications.next();
        }
    };
    RepeatWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
        if (notifications) {
            notifications.unsubscribe();
            this.notifications = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, notifications = _a.notifications, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
        this.notifications = null;
        this.retries = null;
        this.retriesSubscription = null;
        _super.prototype._unsubscribeAndRecycle.call(this);
        this.notifications = notifications;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        return this;
    };
    RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
        this.notifications = new Subject_1.Subject();
        var retries = tryCatch_1.tryCatch(this.notifier)(this.notifications);
        if (retries === errorObject_1.errorObject) {
            return _super.prototype.complete.call(this);
        }
        this.retries = retries;
        this.retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
    };
    return RepeatWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=repeatWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operator/retry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) { count = -1; }
    return this.lift(new RetryOperator(count, this));
}
exports.retry = retry;
var RetryOperator = (function () {
    function RetryOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RetryOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    };
    return RetryOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RetrySubscriber = (function (_super) {
    __extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
        _super.call(this, destination);
        this.count = count;
        this.source = source;
    }
    RetrySubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.error.call(this, err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RetrySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ "../../../../rxjs/operator/retryWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return this.lift(new RetryWhenOperator(notifier, this));
}
exports.retryWhen = retryWhen;
var RetryWhenOperator = (function () {
    function RetryWhenOperator(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RetryWhenSubscriber = (function (_super) {
    __extends(RetryWhenSubscriber, _super);
    function RetryWhenSubscriber(destination, notifier, source) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var errors = this.errors;
            var retries = this.retries;
            var retriesSubscription = this.retriesSubscription;
            if (!retries) {
                errors = new Subject_1.Subject();
                retries = tryCatch_1.tryCatch(this.notifier)(errors);
                if (retries === errorObject_1.errorObject) {
                    return _super.prototype.error.call(this, errorObject_1.errorObject.e);
                }
                retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
            }
            else {
                this.errors = null;
                this.retriesSubscription = null;
            }
            this._unsubscribeAndRecycle();
            this.errors = errors;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            errors.next(err);
        }
    };
    RetryWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
        if (errors) {
            errors.unsubscribe();
            this.errors = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, errors = _a.errors, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
        this.errors = null;
        this.retries = null;
        this.retriesSubscription = null;
        this._unsubscribeAndRecycle();
        this.errors = errors;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        this.source.subscribe(this);
    };
    return RetryWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=retryWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operator/sample.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return this.lift(new SampleOperator(notifier));
}
exports.sample = sample;
var SampleOperator = (function () {
    function SampleOperator(notifier) {
        this.notifier = notifier;
    }
    SampleOperator.prototype.call = function (subscriber, source) {
        var sampleSubscriber = new SampleSubscriber(subscriber);
        var subscription = source.subscribe(sampleSubscriber);
        subscription.add(subscribeToResult_1.subscribeToResult(sampleSubscriber, this.notifier));
        return subscription;
    };
    return SampleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SampleSubscriber = (function (_super) {
    __extends(SampleSubscriber, _super);
    function SampleSubscriber() {
        _super.apply(this, arguments);
        this.hasValue = false;
    }
    SampleSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
    };
    SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    SampleSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    SampleSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.value);
        }
    };
    return SampleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=sample.js.map

/***/ }),

/***/ "../../../../rxjs/operator/sampleTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new SampleTimeOperator(period, scheduler));
}
exports.sampleTime = sampleTime;
var SampleTimeOperator = (function () {
    function SampleTimeOperator(period, scheduler) {
        this.period = period;
        this.scheduler = scheduler;
    }
    SampleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    };
    return SampleTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SampleTimeSubscriber = (function (_super) {
    __extends(SampleTimeSubscriber, _super);
    function SampleTimeSubscriber(destination, period, scheduler) {
        _super.call(this, destination);
        this.period = period;
        this.scheduler = scheduler;
        this.hasValue = false;
        this.add(scheduler.schedule(dispatchNotification, period, { subscriber: this, period: period }));
    }
    SampleTimeSubscriber.prototype._next = function (value) {
        this.lastValue = value;
        this.hasValue = true;
    };
    SampleTimeSubscriber.prototype.notifyNext = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.lastValue);
        }
    };
    return SampleTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNotification(state) {
    var subscriber = state.subscriber, period = state.period;
    subscriber.notifyNext();
    this.schedule(state, period);
}
//# sourceMappingURL=sampleTime.js.map

/***/ }),

/***/ "../../../../rxjs/operator/scan.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * <img src="./img/scan.png" width="100%">
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var ones = clicks.mapTo(1);
 * var seed = 0;
 * var count = ones.scan((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
function scan(accumulator, seed) {
    var hasSeed = false;
    // providing a seed of `undefined` *should* be valid and trigger
    // hasSeed! so don't use `seed !== undefined` checks!
    // For this reason, we have to check it here at the original call site
    // otherwise inside Operator/Subscriber we won't know if `undefined`
    // means they didn't provide anything or if they literally provided `undefined`
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return this.lift(new ScanOperator(accumulator, seed, hasSeed));
}
exports.scan = scan;
var ScanOperator = (function () {
    function ScanOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) { hasSeed = false; }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ScanSubscriber = (function (_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
        _super.call(this, destination);
        this.accumulator = accumulator;
        this._seed = _seed;
        this.hasSeed = hasSeed;
        this.index = 0;
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        set: function (value) {
            this.hasSeed = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber.prototype._next = function (value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        }
        else {
            return this._tryNext(value);
        }
    };
    ScanSubscriber.prototype._tryNext = function (value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        }
        catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ "../../../../rxjs/operator/sequenceEqual.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Rx.Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo The observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence.
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return this.lift(new SequenceEqualOperator(compareTo, comparor));
}
exports.sequenceEqual = sequenceEqual;
var SequenceEqualOperator = (function () {
    function SequenceEqualOperator(compareTo, comparor) {
        this.compareTo = compareTo;
        this.comparor = comparor;
    }
    SequenceEqualOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparor));
    };
    return SequenceEqualOperator;
}());
exports.SequenceEqualOperator = SequenceEqualOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SequenceEqualSubscriber = (function (_super) {
    __extends(SequenceEqualSubscriber, _super);
    function SequenceEqualSubscriber(destination, compareTo, comparor) {
        _super.call(this, destination);
        this.compareTo = compareTo;
        this.comparor = comparor;
        this._a = [];
        this._b = [];
        this._oneComplete = false;
        this.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, this)));
    }
    SequenceEqualSubscriber.prototype._next = function (value) {
        if (this._oneComplete && this._b.length === 0) {
            this.emit(false);
        }
        else {
            this._a.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber.prototype._complete = function () {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
    };
    SequenceEqualSubscriber.prototype.checkValues = function () {
        var _c = this, _a = _c._a, _b = _c._b, comparor = _c.comparor;
        while (_a.length > 0 && _b.length > 0) {
            var a = _a.shift();
            var b = _b.shift();
            var areEqual = false;
            if (comparor) {
                areEqual = tryCatch_1.tryCatch(comparor)(a, b);
                if (areEqual === errorObject_1.errorObject) {
                    this.destination.error(errorObject_1.errorObject.e);
                }
            }
            else {
                areEqual = a === b;
            }
            if (!areEqual) {
                this.emit(false);
            }
        }
    };
    SequenceEqualSubscriber.prototype.emit = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    SequenceEqualSubscriber.prototype.nextB = function (value) {
        if (this._oneComplete && this._a.length === 0) {
            this.emit(false);
        }
        else {
            this._b.push(value);
            this.checkValues();
        }
    };
    return SequenceEqualSubscriber;
}(Subscriber_1.Subscriber));
exports.SequenceEqualSubscriber = SequenceEqualSubscriber;
var SequenceEqualCompareToSubscriber = (function (_super) {
    __extends(SequenceEqualCompareToSubscriber, _super);
    function SequenceEqualCompareToSubscriber(destination, parent) {
        _super.call(this, destination);
        this.parent = parent;
    }
    SequenceEqualCompareToSubscriber.prototype._next = function (value) {
        this.parent.nextB(value);
    };
    SequenceEqualCompareToSubscriber.prototype._error = function (err) {
        this.parent.error(err);
    };
    SequenceEqualCompareToSubscriber.prototype._complete = function () {
        this.parent._complete();
    };
    return SequenceEqualCompareToSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=sequenceEqual.js.map

/***/ }),

/***/ "../../../../rxjs/operator/shareReplay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var multicast_1 = __webpack_require__("../../../../rxjs/operator/multicast.js");
var ReplaySubject_1 = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/**
 * @method shareReplay
 * @owner Observable
 */
function shareReplay(bufferSize, windowTime, scheduler) {
    var subject;
    var connectable = multicast_1.multicast.call(this, function shareReplaySubjectFactory() {
        if (this._isComplete) {
            return subject;
        }
        else {
            return (subject = new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
        }
    });
    return connectable.refCount();
}
exports.shareReplay = shareReplay;
;
//# sourceMappingURL=shareReplay.js.map

/***/ }),

/***/ "../../../../rxjs/operator/single.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var EmptyError_1 = __webpack_require__("../../../../rxjs/util/EmptyError.js");
/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return this.lift(new SingleOperator(predicate, this));
}
exports.single = single;
var SingleOperator = (function () {
    function SingleOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    SingleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    };
    return SingleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SingleSubscriber = (function (_super) {
    __extends(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.seenValue = false;
        this.index = 0;
    }
    SingleSubscriber.prototype.applySingleValue = function (value) {
        if (this.seenValue) {
            this.destination.error('Sequence contains more than one element');
        }
        else {
            this.seenValue = true;
            this.singleValue = value;
        }
    };
    SingleSubscriber.prototype._next = function (value) {
        var index = this.index++;
        if (this.predicate) {
            this.tryNext(value, index);
        }
        else {
            this.applySingleValue(value);
        }
    };
    SingleSubscriber.prototype.tryNext = function (value, index) {
        try {
            if (this.predicate(value, index, this.source)) {
                this.applySingleValue(value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    SingleSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index > 0) {
            destination.next(this.seenValue ? this.singleValue : undefined);
            destination.complete();
        }
        else {
            destination.error(new EmptyError_1.EmptyError);
        }
    };
    return SingleSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=single.js.map

/***/ }),

/***/ "../../../../rxjs/operator/skip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return this.lift(new SkipOperator(count));
}
exports.skip = skip;
var SkipOperator = (function () {
    function SkipOperator(total) {
        this.total = total;
    }
    SkipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipSubscriber = (function (_super) {
    __extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    SkipSubscriber.prototype._next = function (x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    };
    return SkipSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=skip.js.map

/***/ }),

/***/ "../../../../rxjs/operator/skipLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var ArgumentOutOfRangeError_1 = __webpack_require__("../../../../rxjs/util/ArgumentOutOfRangeError.js");
/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * <img src="./img/skipLast.png" width="100%">
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * @example <caption>Skip the last 2 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 5);
 * var skipLastTwo = many.skipLast(2);
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
function skipLast(count) {
    return this.lift(new SkipLastOperator(count));
}
exports.skipLast = skipLast;
var SkipLastOperator = (function () {
    function SkipLastOperator(_skipCount) {
        this._skipCount = _skipCount;
        if (this._skipCount < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    SkipLastOperator.prototype.call = function (subscriber, source) {
        if (this._skipCount === 0) {
            // If we don't want to skip any values then just subscribe
            // to Subscriber without any further logic.
            return source.subscribe(new Subscriber_1.Subscriber(subscriber));
        }
        else {
            return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
        }
    };
    return SkipLastOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipLastSubscriber = (function (_super) {
    __extends(SkipLastSubscriber, _super);
    function SkipLastSubscriber(destination, _skipCount) {
        _super.call(this, destination);
        this._skipCount = _skipCount;
        this._count = 0;
        this._ring = new Array(_skipCount);
    }
    SkipLastSubscriber.prototype._next = function (value) {
        var skipCount = this._skipCount;
        var count = this._count++;
        if (count < skipCount) {
            this._ring[count] = value;
        }
        else {
            var currentIndex = count % skipCount;
            var ring = this._ring;
            var oldValue = ring[currentIndex];
            ring[currentIndex] = value;
            this.destination.next(oldValue);
        }
    };
    return SkipLastSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=skipLast.js.map

/***/ }),

/***/ "../../../../rxjs/operator/skipUntil.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return this.lift(new SkipUntilOperator(notifier));
}
exports.skipUntil = skipUntil;
var SkipUntilOperator = (function () {
    function SkipUntilOperator(notifier) {
        this.notifier = notifier;
    }
    SkipUntilOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
    };
    return SkipUntilOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipUntilSubscriber = (function (_super) {
    __extends(SkipUntilSubscriber, _super);
    function SkipUntilSubscriber(destination, notifier) {
        _super.call(this, destination);
        this.hasValue = false;
        this.isInnerStopped = false;
        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    SkipUntilSubscriber.prototype._next = function (value) {
        if (this.hasValue) {
            _super.prototype._next.call(this, value);
        }
    };
    SkipUntilSubscriber.prototype._complete = function () {
        if (this.isInnerStopped) {
            _super.prototype._complete.call(this);
        }
        else {
            this.unsubscribe();
        }
    };
    SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.hasValue = true;
    };
    SkipUntilSubscriber.prototype.notifyComplete = function () {
        this.isInnerStopped = true;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    return SkipUntilSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=skipUntil.js.map

/***/ }),

/***/ "../../../../rxjs/operator/skipWhile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
 * true, but emits all further source items as soon as the condition becomes false.
 *
 * <img src="./img/skipWhile.png" width="100%">
 *
 * @param {Function} predicate - A function to test each item emitted from the source Observable.
 * @return {Observable<T>} An Observable that begins emitting items emitted by the source Observable when the
 * specified predicate becomes false.
 * @method skipWhile
 * @owner Observable
 */
function skipWhile(predicate) {
    return this.lift(new SkipWhileOperator(predicate));
}
exports.skipWhile = skipWhile;
var SkipWhileOperator = (function () {
    function SkipWhileOperator(predicate) {
        this.predicate = predicate;
    }
    SkipWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    };
    return SkipWhileOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipWhileSubscriber = (function (_super) {
    __extends(SkipWhileSubscriber, _super);
    function SkipWhileSubscriber(destination, predicate) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.skipping = true;
        this.index = 0;
    }
    SkipWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (this.skipping) {
            this.tryCallPredicate(value);
        }
        if (!this.skipping) {
            destination.next(value);
        }
    };
    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
        try {
            var result = this.predicate(value, this.index++);
            this.skipping = Boolean(result);
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    return SkipWhileSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=skipWhile.js.map

/***/ }),

/***/ "../../../../rxjs/operator/subscribeOn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SubscribeOnObservable_1 = __webpack_require__("../../../../rxjs/observable/SubscribeOnObservable.js");
/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return this.lift(new SubscribeOnOperator(scheduler, delay));
}
exports.subscribeOn = subscribeOn;
var SubscribeOnOperator = (function () {
    function SubscribeOnOperator(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    SubscribeOnOperator.prototype.call = function (subscriber, source) {
        return new SubscribeOnObservable_1.SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
    };
    return SubscribeOnOperator;
}());
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ "../../../../rxjs/operator/switch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Converts a higher-order Observable into a first-order Observable by
 * subscribing to only the most recently emitted of those inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * previous inner Observable once a new one appears.</span>
 *
 * <img src="./img/switch.png" width="100%">
 *
 * `switch` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable subscribes to the inner Observable and
 * begins emitting the items emitted by that. So far, it behaves
 * like {@link mergeAll}. However, when a new inner Observable is emitted,
 * `switch` unsubscribes from the earlier-emitted inner Observable and
 * subscribes to the new inner Observable and begins emitting items from it. It
 * continues to behave like this for subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * // Each click event is mapped to an Observable that ticks every second
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var switched = higherOrder.switch();
 * // The outcome is that `switched` is essentially a timer that restarts
 * // on every click. The interval Observables from older clicks do not merge
 * // with the current interval Observable.
 * switched.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switchMap}
 * @see {@link switchMapTo}
 * @see {@link zipAll}
 *
 * @return {Observable<T>} An Observable that emits the items emitted by the
 * Observable most recently emitted by the source Observable.
 * @method switch
 * @name switch
 * @owner Observable
 */
function _switch() {
    return this.lift(new SwitchOperator());
}
exports._switch = _switch;
var SwitchOperator = (function () {
    function SwitchOperator() {
    }
    SwitchOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchSubscriber(subscriber));
    };
    return SwitchOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchSubscriber = (function (_super) {
    __extends(SwitchSubscriber, _super);
    function SwitchSubscriber(destination) {
        _super.call(this, destination);
        this.active = 0;
        this.hasCompleted = false;
    }
    SwitchSubscriber.prototype._next = function (value) {
        this.unsubscribeInner();
        this.active++;
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
    };
    SwitchSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    SwitchSubscriber.prototype.unsubscribeInner = function () {
        this.active = this.active > 0 ? this.active - 1 : 0;
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
            this.remove(innerSubscription);
        }
    };
    SwitchSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    SwitchSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SwitchSubscriber.prototype.notifyComplete = function () {
        this.unsubscribeInner();
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    return SwitchSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switch.js.map

/***/ }),

/***/ "../../../../rxjs/operator/switchMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable, resultSelector) {
    return this.lift(new SwitchMapToOperator(innerObservable, resultSelector));
}
exports.switchMapTo = switchMapTo;
var SwitchMapToOperator = (function () {
    function SwitchMapToOperator(observable, resultSelector) {
        this.observable = observable;
        this.resultSelector = resultSelector;
    }
    SwitchMapToOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
    };
    return SwitchMapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapToSubscriber = (function (_super) {
    __extends(SwitchMapToSubscriber, _super);
    function SwitchMapToSubscriber(destination, inner, resultSelector) {
        _super.call(this, destination);
        this.inner = inner;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapToSubscriber.prototype._next = function (value) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
    };
    SwitchMapToSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapToSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        var result;
        try {
            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        destination.next(result);
    };
    return SwitchMapToSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switchMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/operator/take.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var ArgumentOutOfRangeError_1 = __webpack_require__("../../../../rxjs/util/ArgumentOutOfRangeError.js");
var EmptyObservable_1 = __webpack_require__("../../../../rxjs/observable/EmptyObservable.js");
/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    if (count === 0) {
        return new EmptyObservable_1.EmptyObservable();
    }
    else {
        return this.lift(new TakeOperator(count));
    }
}
exports.take = take;
var TakeOperator = (function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeSubscriber = (function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "../../../../rxjs/operator/takeLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var ArgumentOutOfRangeError_1 = __webpack_require__("../../../../rxjs/util/ArgumentOutOfRangeError.js");
var EmptyObservable_1 = __webpack_require__("../../../../rxjs/observable/EmptyObservable.js");
/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * <img src="./img/takeLast.png" width="100%">
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * @example <caption>Take the last 3 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 100);
 * var lastThree = many.takeLast(3);
 * lastThree.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
function takeLast(count) {
    if (count === 0) {
        return new EmptyObservable_1.EmptyObservable();
    }
    else {
        return this.lift(new TakeLastOperator(count));
    }
}
exports.takeLast = takeLast;
var TakeLastOperator = (function () {
    function TakeLastOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeLastOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeLastSubscriber = (function (_super) {
    __extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.ring = new Array();
        this.count = 0;
    }
    TakeLastSubscriber.prototype._next = function (value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) {
            ring.push(value);
        }
        else {
            var index = count % total;
            ring[index] = value;
        }
    };
    TakeLastSubscriber.prototype._complete = function () {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
            var total = this.count >= this.total ? this.total : this.count;
            var ring = this.ring;
            for (var i = 0; i < total; i++) {
                var idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    };
    return TakeLastSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ "../../../../rxjs/operator/throttle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
exports.defaultThrottleConfig = {
    leading: true,
    trailing: false
};
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) { config = exports.defaultThrottleConfig; }
    return this.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing));
}
exports.throttle = throttle;
var ThrottleOperator = (function () {
    function ThrottleOperator(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    };
    return ThrottleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc
 * @ignore
 * @extends {Ignored}
 */
var ThrottleSubscriber = (function (_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
        _super.call(this, destination);
        this.destination = destination;
        this.durationSelector = durationSelector;
        this._leading = _leading;
        this._trailing = _trailing;
        this._hasTrailingValue = false;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this._trailing) {
                this._hasTrailingValue = true;
                this._trailingValue = value;
            }
        }
        else {
            var duration = this.tryDurationSelector(value);
            if (duration) {
                this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
            }
            if (this._leading) {
                this.destination.next(value);
                if (this._trailing) {
                    this._hasTrailingValue = true;
                    this._trailingValue = value;
                }
            }
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        try {
            return this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return null;
        }
    };
    ThrottleSubscriber.prototype._unsubscribe = function () {
        var _a = this, throttled = _a.throttled, _trailingValue = _a._trailingValue, _hasTrailingValue = _a._hasTrailingValue, _trailing = _a._trailing;
        this._trailingValue = null;
        this._hasTrailingValue = false;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
    };
    ThrottleSubscriber.prototype._sendTrailing = function () {
        var _a = this, destination = _a.destination, throttled = _a.throttled, _trailing = _a._trailing, _trailingValue = _a._trailingValue, _hasTrailingValue = _a._hasTrailingValue;
        if (throttled && _trailing && _hasTrailingValue) {
            destination.next(_trailingValue);
            this._trailingValue = null;
            this._hasTrailingValue = false;
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._sendTrailing();
        this._unsubscribe();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this._sendTrailing();
        this._unsubscribe();
    };
    return ThrottleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ "../../../../rxjs/operator/throttleTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var throttle_1 = __webpack_require__("../../../../rxjs/operator/throttle.js");
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (config === void 0) { config = throttle_1.defaultThrottleConfig; }
    return this.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing));
}
exports.throttleTime = throttleTime;
var ThrottleTimeOperator = (function () {
    function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    };
    return ThrottleTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ThrottleTimeSubscriber = (function (_super) {
    __extends(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
        this._hasTrailingValue = false;
        this._trailingValue = null;
    }
    ThrottleTimeSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
        else {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
            if (this.leading) {
                this.destination.next(value);
            }
        }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ "../../../../rxjs/operator/timeInterval.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
/**
 * @param scheduler
 * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timeInterval
 * @owner Observable
 */
function timeInterval(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new TimeIntervalOperator(scheduler));
}
exports.timeInterval = timeInterval;
var TimeInterval = (function () {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}());
exports.TimeInterval = TimeInterval;
;
var TimeIntervalOperator = (function () {
    function TimeIntervalOperator(scheduler) {
        this.scheduler = scheduler;
    }
    TimeIntervalOperator.prototype.call = function (observer, source) {
        return source.subscribe(new TimeIntervalSubscriber(observer, this.scheduler));
    };
    return TimeIntervalOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeIntervalSubscriber = (function (_super) {
    __extends(TimeIntervalSubscriber, _super);
    function TimeIntervalSubscriber(destination, scheduler) {
        _super.call(this, destination);
        this.scheduler = scheduler;
        this.lastTime = 0;
        this.lastTime = scheduler.now();
    }
    TimeIntervalSubscriber.prototype._next = function (value) {
        var now = this.scheduler.now();
        var span = now - this.lastTime;
        this.lastTime = now;
        this.destination.next(new TimeInterval(value, span));
    };
    return TimeIntervalSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=timeInterval.js.map

/***/ }),

/***/ "../../../../rxjs/operator/timeout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var isDate_1 = __webpack_require__("../../../../rxjs/util/isDate.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var TimeoutError_1 = __webpack_require__("../../../../rxjs/util/TimeoutError.js");
/**
 * @param {number} due
 * @param {Scheduler} [scheduler]
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method timeout
 * @owner Observable
 */
function timeout(due, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, scheduler, new TimeoutError_1.TimeoutError()));
}
exports.timeout = timeout;
var TimeoutOperator = (function () {
    function TimeoutOperator(waitFor, absoluteTimeout, scheduler, errorInstance) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.scheduler = scheduler;
        this.errorInstance = errorInstance;
    }
    TimeoutOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.scheduler, this.errorInstance));
    };
    return TimeoutOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeoutSubscriber = (function (_super) {
    __extends(TimeoutSubscriber, _super);
    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, scheduler, errorInstance) {
        _super.call(this, destination);
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.scheduler = scheduler;
        this.errorInstance = errorInstance;
        this.action = null;
        this.scheduleTimeout();
    }
    TimeoutSubscriber.dispatchTimeout = function (subscriber) {
        subscriber.error(subscriber.errorInstance);
    };
    TimeoutSubscriber.prototype.scheduleTimeout = function () {
        var action = this.action;
        if (action) {
            // Recycle the action if we've already scheduled one. All the production
            // Scheduler Actions mutate their state/delay time and return themeselves.
            // VirtualActions are immutable, so they create and return a clone. In this
            // case, we need to set the action reference to the most recent VirtualAction,
            // to ensure that's the one we clone from next time.
            this.action = action.schedule(this, this.waitFor);
        }
        else {
            this.add(this.action = this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, this));
        }
    };
    TimeoutSubscriber.prototype._next = function (value) {
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
        _super.prototype._next.call(this, value);
    };
    TimeoutSubscriber.prototype._unsubscribe = function () {
        this.action = null;
        this.scheduler = null;
        this.errorInstance = null;
    };
    return TimeoutSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=timeout.js.map

/***/ }),

/***/ "../../../../rxjs/operator/timeoutWith.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var isDate_1 = __webpack_require__("../../../../rxjs/util/isDate.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * @param due
 * @param withObservable
 * @param scheduler
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
}
exports.timeoutWith = timeoutWith;
var TimeoutWithOperator = (function () {
    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }
    TimeoutWithOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    };
    return TimeoutWithOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeoutWithSubscriber = (function (_super) {
    __extends(TimeoutWithSubscriber, _super);
    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
        _super.call(this, destination);
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
        this.action = null;
        this.scheduleTimeout();
    }
    TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
        var withObservable = subscriber.withObservable;
        subscriber._unsubscribeAndRecycle();
        subscriber.add(subscribeToResult_1.subscribeToResult(subscriber, withObservable));
    };
    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
        var action = this.action;
        if (action) {
            // Recycle the action if we've already scheduled one. All the production
            // Scheduler Actions mutate their state/delay time and return themeselves.
            // VirtualActions are immutable, so they create and return a clone. In this
            // case, we need to set the action reference to the most recent VirtualAction,
            // to ensure that's the one we clone from next time.
            this.action = action.schedule(this, this.waitFor);
        }
        else {
            this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
        }
    };
    TimeoutWithSubscriber.prototype._next = function (value) {
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
        _super.prototype._next.call(this, value);
    };
    TimeoutWithSubscriber.prototype._unsubscribe = function () {
        this.action = null;
        this.scheduler = null;
        this.withObservable = null;
    };
    return TimeoutWithSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=timeoutWith.js.map

/***/ }),

/***/ "../../../../rxjs/operator/timestamp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new TimestampOperator(scheduler));
}
exports.timestamp = timestamp;
var Timestamp = (function () {
    function Timestamp(value, timestamp) {
        this.value = value;
        this.timestamp = timestamp;
    }
    return Timestamp;
}());
exports.Timestamp = Timestamp;
;
var TimestampOperator = (function () {
    function TimestampOperator(scheduler) {
        this.scheduler = scheduler;
    }
    TimestampOperator.prototype.call = function (observer, source) {
        return source.subscribe(new TimestampSubscriber(observer, this.scheduler));
    };
    return TimestampOperator;
}());
var TimestampSubscriber = (function (_super) {
    __extends(TimestampSubscriber, _super);
    function TimestampSubscriber(destination, scheduler) {
        _super.call(this, destination);
        this.scheduler = scheduler;
    }
    TimestampSubscriber.prototype._next = function (value) {
        var now = this.scheduler.now();
        this.destination.next(new Timestamp(value, now));
    };
    return TimestampSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=timestamp.js.map

/***/ }),

/***/ "../../../../rxjs/operator/toArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
 * @method toArray
 * @owner Observable
 */
function toArray() {
    return this.lift(new ToArrayOperator());
}
exports.toArray = toArray;
var ToArrayOperator = (function () {
    function ToArrayOperator() {
    }
    ToArrayOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ToArraySubscriber(subscriber));
    };
    return ToArrayOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ToArraySubscriber = (function (_super) {
    __extends(ToArraySubscriber, _super);
    function ToArraySubscriber(destination) {
        _super.call(this, destination);
        this.array = [];
    }
    ToArraySubscriber.prototype._next = function (x) {
        this.array.push(x);
    };
    ToArraySubscriber.prototype._complete = function () {
        this.destination.next(this.array);
        this.destination.complete();
    };
    return ToArraySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=toArray.js.map

/***/ }),

/***/ "../../../../rxjs/operator/window.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return this.lift(new WindowOperator(windowBoundaries));
}
exports.window = window;
var WindowOperator = (function () {
    function WindowOperator(windowBoundaries) {
        this.windowBoundaries = windowBoundaries;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        var windowSubscriber = new WindowSubscriber(subscriber);
        var sourceSubscription = source.subscribe(windowSubscriber);
        if (!sourceSubscription.closed) {
            windowSubscriber.add(subscribeToResult_1.subscribeToResult(windowSubscriber, this.windowBoundaries));
        }
        return sourceSubscription;
    };
    return WindowOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowSubscriber = (function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination) {
        _super.call(this, destination);
        this.window = new Subject_1.Subject();
        destination.next(this.window);
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow();
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this._complete();
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
    };
    WindowSubscriber.prototype._unsubscribe = function () {
        this.window = null;
    };
    WindowSubscriber.prototype.openWindow = function () {
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var destination = this.destination;
        var newWindow = this.window = new Subject_1.Subject();
        destination.next(newWindow);
    };
    return WindowSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=window.js.map

/***/ }),

/***/ "../../../../rxjs/operator/windowCount.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) { startWindowEvery = 0; }
    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
}
exports.windowCount = windowCount;
var WindowCountOperator = (function () {
    function WindowCountOperator(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    };
    return WindowCountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowCountSubscriber = (function (_super) {
    __extends(WindowCountSubscriber, _super);
    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
        _super.call(this, destination);
        this.destination = destination;
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
        this.windows = [new Subject_1.Subject()];
        this.count = 0;
        destination.next(this.windows[0]);
    }
    WindowCountSubscriber.prototype._next = function (value) {
        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
        var destination = this.destination;
        var windowSize = this.windowSize;
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len && !this.closed; i++) {
            windows[i].next(value);
        }
        var c = this.count - windowSize + 1;
        if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
            windows.shift().complete();
        }
        if (++this.count % startWindowEvery === 0 && !this.closed) {
            var window_1 = new Subject_1.Subject();
            windows.push(window_1);
            destination.next(window_1);
        }
    };
    WindowCountSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().error(err);
            }
        }
        this.destination.error(err);
    };
    WindowCountSubscriber.prototype._complete = function () {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().complete();
            }
        }
        this.destination.complete();
    };
    WindowCountSubscriber.prototype._unsubscribe = function () {
        this.count = 0;
        this.windows = null;
    };
    return WindowCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=windowCount.js.map

/***/ }),

/***/ "../../../../rxjs/operator/windowTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var isNumeric_1 = __webpack_require__("../../../../rxjs/util/isNumeric.js");
var isScheduler_1 = __webpack_require__("../../../../rxjs/util/isScheduler.js");
function windowTime(windowTimeSpan) {
    var scheduler = async_1.async;
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (isScheduler_1.isScheduler(arguments[3])) {
        scheduler = arguments[3];
    }
    if (isScheduler_1.isScheduler(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (isNumeric_1.isNumeric(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (isScheduler_1.isScheduler(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (isNumeric_1.isNumeric(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
}
exports.windowTime = windowTime;
var WindowTimeOperator = (function () {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
    }
    WindowTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
    };
    return WindowTimeOperator;
}());
var CountedSubject = (function (_super) {
    __extends(CountedSubject, _super);
    function CountedSubject() {
        _super.apply(this, arguments);
        this._numberOfNextedValues = 0;
    }
    CountedSubject.prototype.next = function (value) {
        this._numberOfNextedValues++;
        _super.prototype.next.call(this, value);
    };
    Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
        get: function () {
            return this._numberOfNextedValues;
        },
        enumerable: true,
        configurable: true
    });
    return CountedSubject;
}(Subject_1.Subject));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowTimeSubscriber = (function (_super) {
    __extends(WindowTimeSubscriber, _super);
    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        _super.call(this, destination);
        this.destination = destination;
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
        this.windows = [];
        var window = this.openWindow();
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            var closeState = { subscriber: this, window: window, context: null };
            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        }
        else {
            var timeSpanOnlyState = { subscriber: this, window: window, windowTimeSpan: windowTimeSpan };
            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
    }
    WindowTimeSubscriber.prototype._next = function (value) {
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len; i++) {
            var window_1 = windows[i];
            if (!window_1.closed) {
                window_1.next(value);
                if (window_1.numberOfNextedValues >= this.maxWindowSize) {
                    this.closeWindow(window_1);
                }
            }
        }
    };
    WindowTimeSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    };
    WindowTimeSubscriber.prototype._complete = function () {
        var windows = this.windows;
        while (windows.length > 0) {
            var window_2 = windows.shift();
            if (!window_2.closed) {
                window_2.complete();
            }
        }
        this.destination.complete();
    };
    WindowTimeSubscriber.prototype.openWindow = function () {
        var window = new CountedSubject();
        this.windows.push(window);
        var destination = this.destination;
        destination.next(window);
        return window;
    };
    WindowTimeSubscriber.prototype.closeWindow = function (window) {
        window.complete();
        var windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
    if (window) {
        subscriber.closeWindow(window);
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = { action: action, subscription: null };
    var timeSpanState = { subscriber: subscriber, window: window, context: context };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(state) {
    var subscriber = state.subscriber, window = state.window, context = state.context;
    if (context && context.action && context.subscription) {
        context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
}
//# sourceMappingURL=windowTime.js.map

/***/ }),

/***/ "../../../../rxjs/operator/windowToggle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return this.lift(new WindowToggleOperator(openings, closingSelector));
}
exports.windowToggle = windowToggle;
var WindowToggleOperator = (function () {
    function WindowToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    WindowToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return WindowToggleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowToggleSubscriber = (function (_super) {
    __extends(WindowToggleSubscriber, _super);
    function WindowToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
    }
    WindowToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        if (contexts) {
            var len = contexts.length;
            for (var i = 0; i < len; i++) {
                contexts[i].window.next(value);
            }
        }
    };
    WindowToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.error(err);
                context.subscription.unsubscribe();
            }
        }
        _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.complete();
                context.subscription.unsubscribe();
            }
        }
        _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber.prototype._unsubscribe = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.unsubscribe();
                context.subscription.unsubscribe();
            }
        }
    };
    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (outerValue === this.openings) {
            var closingSelector = this.closingSelector;
            var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
            if (closingNotifier === errorObject_1.errorObject) {
                return this.error(errorObject_1.errorObject.e);
            }
            else {
                var window_1 = new Subject_1.Subject();
                var subscription = new Subscription_1.Subscription();
                var context = { window: window_1, subscription: subscription };
                this.contexts.push(context);
                var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
                if (innerSubscription.closed) {
                    this.closeWindow(this.contexts.length - 1);
                }
                else {
                    innerSubscription.context = context;
                    subscription.add(innerSubscription);
                }
                this.destination.next(window_1);
            }
        }
        else {
            this.closeWindow(this.contexts.indexOf(outerValue));
        }
    };
    WindowToggleSubscriber.prototype.notifyError = function (err) {
        this.error(err);
    };
    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
        if (inner !== this.openSubscription) {
            this.closeWindow(this.contexts.indexOf(inner.context));
        }
    };
    WindowToggleSubscriber.prototype.closeWindow = function (index) {
        if (index === -1) {
            return;
        }
        var contexts = this.contexts;
        var context = contexts[index];
        var window = context.window, subscription = context.subscription;
        contexts.splice(index, 1);
        window.complete();
        subscription.unsubscribe();
    };
    return WindowToggleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=windowToggle.js.map

/***/ }),

/***/ "../../../../rxjs/operator/windowWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return this.lift(new WindowOperator(closingSelector));
}
exports.windowWhen = windowWhen;
var WindowOperator = (function () {
    function WindowOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
    };
    return WindowOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowSubscriber = (function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.destination = destination;
        this.closingSelector = closingSelector;
        this.openWindow();
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
        if (this.closingNotification) {
            this.closingNotification.unsubscribe();
        }
    };
    WindowSubscriber.prototype.openWindow = function (innerSub) {
        if (innerSub === void 0) { innerSub = null; }
        if (innerSub) {
            this.remove(innerSub);
            innerSub.unsubscribe();
        }
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var window = this.window = new Subject_1.Subject();
        this.destination.next(window);
        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
        if (closingNotifier === errorObject_1.errorObject) {
            var err = errorObject_1.errorObject.e;
            this.destination.error(err);
            this.window.error(err);
        }
        else {
            this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
        }
    };
    return WindowSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=windowWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operator/zip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArrayObservable_1 = __webpack_require__("../../../../rxjs/observable/ArrayObservable.js");
var isArray_1 = __webpack_require__("../../../../rxjs/util/isArray.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var iterator_1 = __webpack_require__("../../../../rxjs/symbol/iterator.js");
/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return this.lift.call(zipStatic.apply(void 0, [this].concat(observables)));
}
exports.zipProto = zipProto;
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each
 * of its input Observables.
 *
 * If the latest parameter is a function, this function is used to compute the created value from the input values.
 * Otherwise, an array of the input values is returned.
 *
 * @example <caption>Combine age and name from different sources</caption>
 *
 * let age$ = Observable.of<number>(27, 25, 29);
 * let name$ = Observable.of<string>('Foo', 'Bar', 'Beer');
 * let isDev$ = Observable.of<boolean>(true, true, false);
 *
 * Observable
 *     .zip(age$,
 *          name$,
 *          isDev$,
 *          (age: number, name: string, isDev: boolean) => ({ age, name, isDev }))
 *     .subscribe(x => console.log(x));
 *
 * // outputs
 * // { age: 27, name: 'Foo', isDev: true }
 * // { age: 25, name: 'Bar', isDev: true }
 * // { age: 29, name: 'Beer', isDev: false }
 *
 * @param observables
 * @return {Observable<R>}
 * @static true
 * @name zip
 * @owner Observable
 */
function zipStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = observables[observables.length - 1];
    if (typeof project === 'function') {
        observables.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
}
exports.zipStatic = zipStatic;
var ZipOperator = (function () {
    function ZipOperator(project) {
        this.project = project;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.project));
    };
    return ZipOperator;
}());
exports.ZipOperator = ZipOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipSubscriber = (function (_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, project, values) {
        if (values === void 0) { values = Object.create(null); }
        _super.call(this, destination);
        this.iterators = [];
        this.active = 0;
        this.project = (typeof project === 'function') ? project : null;
        this.values = values;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (isArray_1.isArray(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[iterator_1.iterator] === 'function') {
            iterators.push(new StaticIterator(value[iterator_1.iterator]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                this.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--; // not an observable
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        // abort if not all of them have values
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            // check to see if it's completed now that you've gotten
            // the next value.
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.project) {
            this._tryProject(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(Subscriber_1.Subscriber));
exports.ZipSubscriber = ZipSubscriber;
var StaticIterator = (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipBufferIterator = (function (_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        _super.call(this, destination);
        this.parent = parent;
        this.observable = observable;
        this.stillUnsubscribed = true;
        this.buffer = [];
        this.isComplete = false;
    }
    ZipBufferIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
    //    this is legit because `next()` will never be called by a subscription in this case.
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "../../../../rxjs/operator/zipAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var zip_1 = __webpack_require__("../../../../rxjs/operator/zip.js");
/**
 * @param project
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method zipAll
 * @owner Observable
 */
function zipAll(project) {
    return this.lift(new zip_1.ZipOperator(project));
}
exports.zipAll = zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/AnimationFrameAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncAction.js");
var AnimationFrame_1 = __webpack_require__("../../../../rxjs/util/AnimationFrame.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AnimationFrameAction = (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If an animation frame has already been requested, don't request another
        // one. If an animation frame hasn't been requested yet, request one. Return
        // the current animation frame request id.
        return scheduler.scheduled || (scheduler.scheduled = AnimationFrame_1.AnimationFrame.requestAnimationFrame(scheduler.flush.bind(scheduler, null)));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested animation frame and
        // set the scheduled flag to undefined so the next AnimationFrameAction will
        // request its own.
        if (scheduler.actions.length === 0) {
            AnimationFrame_1.AnimationFrame.cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction));
exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/AnimationFrameScheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncScheduler.js");
var AnimationFrameScheduler = (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        _super.apply(this, arguments);
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/AsapAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Immediate_1 = __webpack_require__("../../../../rxjs/util/Immediate.js");
var AsyncAction_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncAction.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsapAction = (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If a microtask has already been scheduled, don't schedule another
        // one. If a microtask hasn't been scheduled yet, schedule one now. Return
        // the current scheduled microtask id.
        return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested microtask and
        // set the scheduled flag to undefined so the next AsapAction will schedule
        // its own.
        if (scheduler.actions.length === 0) {
            Immediate_1.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AsapAction;
}(AsyncAction_1.AsyncAction));
exports.AsapAction = AsapAction;
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/AsapScheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncScheduler.js");
var AsapScheduler = (function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        _super.apply(this, arguments);
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AsapScheduler = AsapScheduler;
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/VirtualTimeScheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncScheduler.js");
var VirtualTimeScheduler = (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        var _this = this;
        if (SchedulerAction === void 0) { SchedulerAction = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Number.POSITIVE_INFINITY; }
        _super.call(this, SchedulerAction, function () { return _this.frame; });
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.index = -1;
    }
    /**
     * Prompt the Scheduler to execute all of its queued actions, therefore
     * clearing its queue.
     * @return {void}
     */
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.VirtualTimeScheduler = VirtualTimeScheduler;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = scheduler.index += 1; }
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
        this.active = true;
        this.index = scheduler.index = index;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        // If an action is rescheduled, we save allocations by mutating its state,
        // pushing it to the end of the scheduler queue, and recycling the action.
        // But since the VirtualTimeScheduler is used for testing, VirtualActions
        // must be immutable so they can be inspected later.
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction));
exports.VirtualAction = VirtualAction;
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/animationFrame.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AnimationFrameAction_1 = __webpack_require__("../../../../rxjs/scheduler/AnimationFrameAction.js");
var AnimationFrameScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/AnimationFrameScheduler.js");
/**
 *
 * Animation Frame Scheduler
 *
 * <span class="informal">Perform task when `window.requestAnimationFrame` would fire</span>
 *
 * When `animationFrame` scheduler is used with delay, it will fall back to {@link async} scheduler
 * behaviour.
 *
 * Without delay, `animationFrame` scheduler can be used to create smooth browser animations.
 * It makes sure scheduled task will happen just before next browser content repaint,
 * thus performing animations as efficiently as possible.
 *
 * @example <caption>Schedule div height animation</caption>
 * const div = document.querySelector('.some-div');
 *
 * Rx.Scheduler.schedule(function(height) {
 *   div.style.height = height + "px";
 *
 *   this.schedule(height + 1);  // `this` references currently executing Action,
 *                               // which we reschedule with new state
 * }, 0, 0);
 *
 * // You will see .some-div element growing in height
 *
 *
 * @static true
 * @name animationFrame
 * @owner Scheduler
 */
exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
//# sourceMappingURL=animationFrame.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/asap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsapAction_1 = __webpack_require__("../../../../rxjs/scheduler/AsapAction.js");
var AsapScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/AsapScheduler.js");
/**
 *
 * Asap Scheduler
 *
 * <span class="informal">Perform task as fast as it can be performed asynchronously</span>
 *
 * `asap` scheduler behaves the same as {@link async} scheduler when you use it to delay task
 * in time. If however you set delay to `0`, `asap` will wait for current synchronously executing
 * code to end and then it will try to execute given task as fast as possible.
 *
 * `asap` scheduler will do its best to minimize time between end of currently executing code
 * and start of scheduled task. This makes it best candidate for performing so called "deferring".
 * Traditionally this was achieved by calling `setTimeout(deferredTask, 0)`, but that technique involves
 * some (although minimal) unwanted delay.
 *
 * Note that using `asap` scheduler does not necessarily mean that your task will be first to process
 * after currently executing code. In particular, if some task was also scheduled with `asap` before,
 * that task will execute first. That being said, if you need to schedule task asynchronously, but
 * as soon as possible, `asap` scheduler is your best bet.
 *
 * @example <caption>Compare async and asap scheduler</caption>
 *
 * Rx.Scheduler.async.schedule(() => console.log('async')); // scheduling 'async' first...
 * Rx.Scheduler.asap.schedule(() => console.log('asap'));
 *
 * // Logs:
 * // "asap"
 * // "async"
 * // ... but 'asap' goes first!
 *
 * @static true
 * @name asap
 * @owner Scheduler
 */
exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ "../../../../rxjs/testing/ColdObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var SubscriptionLoggable_1 = __webpack_require__("../../../../rxjs/testing/SubscriptionLoggable.js");
var applyMixins_1 = __webpack_require__("../../../../rxjs/util/applyMixins.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ColdObservable = (function (_super) {
    __extends(ColdObservable, _super);
    function ColdObservable(messages, scheduler) {
        _super.call(this, function (subscriber) {
            var observable = this;
            var index = observable.logSubscribedFrame();
            subscriber.add(new Subscription_1.Subscription(function () {
                observable.logUnsubscribedFrame(index);
            }));
            observable.scheduleMessages(subscriber);
            return subscriber;
        });
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    ColdObservable.prototype.scheduleMessages = function (subscriber) {
        var messagesLength = this.messages.length;
        for (var i = 0; i < messagesLength; i++) {
            var message = this.messages[i];
            subscriber.add(this.scheduler.schedule(function (_a) {
                var message = _a.message, subscriber = _a.subscriber;
                message.notification.observe(subscriber);
            }, message.frame, { message: message, subscriber: subscriber }));
        }
    };
    return ColdObservable;
}(Observable_1.Observable));
exports.ColdObservable = ColdObservable;
applyMixins_1.applyMixins(ColdObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
//# sourceMappingURL=ColdObservable.js.map

/***/ }),

/***/ "../../../../rxjs/testing/HotObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var SubscriptionLoggable_1 = __webpack_require__("../../../../rxjs/testing/SubscriptionLoggable.js");
var applyMixins_1 = __webpack_require__("../../../../rxjs/util/applyMixins.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var HotObservable = (function (_super) {
    __extends(HotObservable, _super);
    function HotObservable(messages, scheduler) {
        _super.call(this);
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    HotObservable.prototype._subscribe = function (subscriber) {
        var subject = this;
        var index = subject.logSubscribedFrame();
        subscriber.add(new Subscription_1.Subscription(function () {
            subject.logUnsubscribedFrame(index);
        }));
        return _super.prototype._subscribe.call(this, subscriber);
    };
    HotObservable.prototype.setup = function () {
        var subject = this;
        var messagesLength = subject.messages.length;
        /* tslint:disable:no-var-keyword */
        for (var i = 0; i < messagesLength; i++) {
            (function () {
                var message = subject.messages[i];
                /* tslint:enable */
                subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
            })();
        }
    };
    return HotObservable;
}(Subject_1.Subject));
exports.HotObservable = HotObservable;
applyMixins_1.applyMixins(HotObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
//# sourceMappingURL=HotObservable.js.map

/***/ }),

/***/ "../../../../rxjs/testing/SubscriptionLog.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SubscriptionLog = (function () {
    function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
        if (unsubscribedFrame === void 0) { unsubscribedFrame = Number.POSITIVE_INFINITY; }
        this.subscribedFrame = subscribedFrame;
        this.unsubscribedFrame = unsubscribedFrame;
    }
    return SubscriptionLog;
}());
exports.SubscriptionLog = SubscriptionLog;
//# sourceMappingURL=SubscriptionLog.js.map

/***/ }),

/***/ "../../../../rxjs/testing/SubscriptionLoggable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SubscriptionLog_1 = __webpack_require__("../../../../rxjs/testing/SubscriptionLog.js");
var SubscriptionLoggable = (function () {
    function SubscriptionLoggable() {
        this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new SubscriptionLog_1.SubscriptionLog(this.scheduler.now()));
        return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
        var subscriptionLogs = this.subscriptions;
        var oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new SubscriptionLog_1.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
}());
exports.SubscriptionLoggable = SubscriptionLoggable;
//# sourceMappingURL=SubscriptionLoggable.js.map

/***/ }),

/***/ "../../../../rxjs/testing/TestScheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var Notification_1 = __webpack_require__("../../../../rxjs/Notification.js");
var ColdObservable_1 = __webpack_require__("../../../../rxjs/testing/ColdObservable.js");
var HotObservable_1 = __webpack_require__("../../../../rxjs/testing/HotObservable.js");
var SubscriptionLog_1 = __webpack_require__("../../../../rxjs/testing/SubscriptionLog.js");
var VirtualTimeScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/VirtualTimeScheduler.js");
var defaultMaxFrame = 750;
var TestScheduler = (function (_super) {
    __extends(TestScheduler, _super);
    function TestScheduler(assertDeepEqual) {
        _super.call(this, VirtualTimeScheduler_1.VirtualAction, defaultMaxFrame);
        this.assertDeepEqual = assertDeepEqual;
        this.hotObservables = [];
        this.coldObservables = [];
        this.flushTests = [];
    }
    TestScheduler.prototype.createTime = function (marbles) {
        var indexOf = marbles.indexOf('|');
        if (indexOf === -1) {
            throw new Error('marble diagram for time should have a completion marker "|"');
        }
        return indexOf * TestScheduler.frameTimeFactor;
    };
    TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
        if (marbles.indexOf('^') !== -1) {
            throw new Error('cold observable cannot have subscription offset "^"');
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('cold observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var cold = new ColdObservable_1.ColdObservable(messages, this);
        this.coldObservables.push(cold);
        return cold;
    };
    TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
        if (marbles.indexOf('!') !== -1) {
            throw new Error('hot observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var subject = new HotObservable_1.HotObservable(messages, this);
        this.hotObservables.push(subject);
        return subject;
    };
    TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
        var _this = this;
        var messages = [];
        observable.subscribe(function (value) {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createNext(value) });
        }, function (err) {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createError(err) });
        }, function () {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createComplete() });
        });
        return messages;
    };
    TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
        var _this = this;
        if (unsubscriptionMarbles === void 0) { unsubscriptionMarbles = null; }
        var actual = [];
        var flushTest = { actual: actual, ready: false };
        var unsubscriptionFrame = TestScheduler
            .parseMarblesAsSubscriptions(unsubscriptionMarbles).unsubscribedFrame;
        var subscription;
        this.schedule(function () {
            subscription = observable.subscribe(function (x) {
                var value = x;
                // Support Observable-of-Observables
                if (x instanceof Observable_1.Observable) {
                    value = _this.materializeInnerObservable(value, _this.frame);
                }
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createNext(value) });
            }, function (err) {
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createError(err) });
            }, function () {
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createComplete() });
            });
        }, 0);
        if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
            this.schedule(function () { return subscription.unsubscribe(); }, unsubscriptionFrame);
        }
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles, values, errorValue) {
                flushTest.ready = true;
                flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true);
            }
        };
    };
    TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
        var flushTest = { actual: actualSubscriptionLogs, ready: false };
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles) {
                var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
                flushTest.ready = true;
                flushTest.expected = marblesArray.map(function (marbles) {
                    return TestScheduler.parseMarblesAsSubscriptions(marbles);
                });
            }
        };
    };
    TestScheduler.prototype.flush = function () {
        var hotObservables = this.hotObservables;
        while (hotObservables.length > 0) {
            hotObservables.shift().setup();
        }
        _super.prototype.flush.call(this);
        var readyFlushTests = this.flushTests.filter(function (test) { return test.ready; });
        while (readyFlushTests.length > 0) {
            var test = readyFlushTests.shift();
            this.assertDeepEqual(test.actual, test.expected);
        }
    };
    TestScheduler.parseMarblesAsSubscriptions = function (marbles) {
        if (typeof marbles !== 'string') {
            return new SubscriptionLog_1.SubscriptionLog(Number.POSITIVE_INFINITY);
        }
        var len = marbles.length;
        var groupStart = -1;
        var subscriptionFrame = Number.POSITIVE_INFINITY;
        var unsubscriptionFrame = Number.POSITIVE_INFINITY;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '^':
                    if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    subscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                case '!':
                    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                default:
                    throw new Error('there can only be \'^\' and \'!\' markers in a ' +
                        'subscription marble diagram. Found instead \'' + c + '\'.');
            }
        }
        if (unsubscriptionFrame < 0) {
            return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame);
        }
        else {
            return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
        }
    };
    TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables) {
        if (materializeInnerObservables === void 0) { materializeInnerObservables = false; }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('conventional marble diagrams cannot have the ' +
                'unsubscription marker "!"');
        }
        var len = marbles.length;
        var testMessages = [];
        var subIndex = marbles.indexOf('^');
        var frameOffset = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
        var getValue = typeof values !== 'object' ?
            function (x) { return x; } :
            function (x) {
                // Support Observable-of-Observables
                if (materializeInnerObservables && values[x] instanceof ColdObservable_1.ColdObservable) {
                    return values[x].messages;
                }
                return values[x];
            };
        var groupStart = -1;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor + frameOffset;
            var notification = void 0;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '|':
                    notification = Notification_1.Notification.createComplete();
                    break;
                case '^':
                    break;
                case '#':
                    notification = Notification_1.Notification.createError(errorValue || 'error');
                    break;
                default:
                    notification = Notification_1.Notification.createNext(getValue(c));
                    break;
            }
            if (notification) {
                testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
            }
        }
        return testMessages;
    };
    return TestScheduler;
}(VirtualTimeScheduler_1.VirtualTimeScheduler));
exports.TestScheduler = TestScheduler;
//# sourceMappingURL=TestScheduler.js.map

/***/ }),

/***/ "../../../../rxjs/util/AnimationFrame.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
var RequestAnimationFrameDefinition = (function () {
    function RequestAnimationFrameDefinition(root) {
        if (root.requestAnimationFrame) {
            this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
        }
        else if (root.mozRequestAnimationFrame) {
            this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
        }
        else if (root.webkitRequestAnimationFrame) {
            this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
        }
        else if (root.msRequestAnimationFrame) {
            this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
        }
        else if (root.oRequestAnimationFrame) {
            this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
        }
        else {
            this.cancelAnimationFrame = root.clearTimeout.bind(root);
            this.requestAnimationFrame = function (cb) { return root.setTimeout(cb, 1000 / 60); };
        }
    }
    return RequestAnimationFrameDefinition;
}());
exports.RequestAnimationFrameDefinition = RequestAnimationFrameDefinition;
exports.AnimationFrame = new RequestAnimationFrameDefinition(root_1.root);
//# sourceMappingURL=AnimationFrame.js.map

/***/ }),

/***/ "../../../../rxjs/util/ArgumentOutOfRangeError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an element was queried at a certain index of an
 * Observable, but no such index or position exists in that sequence.
 *
 * @see {@link elementAt}
 * @see {@link take}
 * @see {@link takeLast}
 *
 * @class ArgumentOutOfRangeError
 */
var ArgumentOutOfRangeError = (function (_super) {
    __extends(ArgumentOutOfRangeError, _super);
    function ArgumentOutOfRangeError() {
        var err = _super.call(this, 'argument out of range');
        this.name = err.name = 'ArgumentOutOfRangeError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ArgumentOutOfRangeError;
}(Error));
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ "../../../../rxjs/util/FastMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FastMap = (function () {
    function FastMap() {
        this.values = {};
    }
    FastMap.prototype.delete = function (key) {
        this.values[key] = null;
        return true;
    };
    FastMap.prototype.set = function (key, value) {
        this.values[key] = value;
        return this;
    };
    FastMap.prototype.get = function (key) {
        return this.values[key];
    };
    FastMap.prototype.forEach = function (cb, thisArg) {
        var values = this.values;
        for (var key in values) {
            if (values.hasOwnProperty(key) && values[key] !== null) {
                cb.call(thisArg, values[key], key);
            }
        }
    };
    FastMap.prototype.clear = function () {
        this.values = {};
    };
    return FastMap;
}());
exports.FastMap = FastMap;
//# sourceMappingURL=FastMap.js.map

/***/ }),

/***/ "../../../../rxjs/util/Immediate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
*/

var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
var ImmediateDefinition = (function () {
    function ImmediateDefinition(root) {
        this.root = root;
        if (root.setImmediate && typeof root.setImmediate === 'function') {
            this.setImmediate = root.setImmediate.bind(root);
            this.clearImmediate = root.clearImmediate.bind(root);
        }
        else {
            this.nextHandle = 1;
            this.tasksByHandle = {};
            this.currentlyRunningATask = false;
            // Don't get fooled by e.g. browserify environments.
            if (this.canUseProcessNextTick()) {
                // For Node.js before 0.9
                this.setImmediate = this.createProcessNextTickSetImmediate();
            }
            else if (this.canUsePostMessage()) {
                // For non-IE10 modern browsers
                this.setImmediate = this.createPostMessageSetImmediate();
            }
            else if (this.canUseMessageChannel()) {
                // For web workers, where supported
                this.setImmediate = this.createMessageChannelSetImmediate();
            }
            else if (this.canUseReadyStateChange()) {
                // For IE 6–8
                this.setImmediate = this.createReadyStateChangeSetImmediate();
            }
            else {
                // For older browsers
                this.setImmediate = this.createSetTimeoutSetImmediate();
            }
            var ci = function clearImmediate(handle) {
                delete clearImmediate.instance.tasksByHandle[handle];
            };
            ci.instance = this;
            this.clearImmediate = ci;
        }
    }
    ImmediateDefinition.prototype.identify = function (o) {
        return this.root.Object.prototype.toString.call(o);
    };
    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
        return this.identify(this.root.process) === '[object process]';
    };
    ImmediateDefinition.prototype.canUseMessageChannel = function () {
        return Boolean(this.root.MessageChannel);
    };
    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
        var document = this.root.document;
        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
    };
    ImmediateDefinition.prototype.canUsePostMessage = function () {
        var root = this.root;
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `root.postMessage` means something completely different and can't be used for this purpose.
        if (root.postMessage && !root.importScripts) {
            var postMessageIsAsynchronous_1 = true;
            var oldOnMessage = root.onmessage;
            root.onmessage = function () {
                postMessageIsAsynchronous_1 = false;
            };
            root.postMessage('', '*');
            root.onmessage = oldOnMessage;
            return postMessageIsAsynchronous_1;
        }
        return false;
    };
    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fn = function result() {
            var _a = result, handler = _a.handler, args = _a.args;
            if (typeof handler === 'function') {
                handler.apply(undefined, args);
            }
            else {
                (new Function('' + handler))();
            }
        };
        fn.handler = handler;
        fn.args = args;
        return fn;
    };
    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
        return this.nextHandle++;
    };
    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
        var root = this.root;
        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
        var onGlobalMessage = function globalMessageHandler(event) {
            var instance = globalMessageHandler.instance;
            if (event.source === root &&
                typeof event.data === 'string' &&
                event.data.indexOf(messagePrefix) === 0) {
                instance.runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };
        onGlobalMessage.instance = this;
        root.addEventListener('message', onGlobalMessage, false);
        var fn = function setImmediate() {
            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.postMessage(messagePrefix + handle, '*');
            return handle;
        };
        fn.instance = this;
        fn.messagePrefix = messagePrefix;
        return fn;
    };
    ImmediateDefinition.prototype.runIfPresent = function (handle) {
        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
        // So if we're currently running a task, we'll need to delay this invocation.
        if (this.currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // 'too much recursion' error.
            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
        }
        else {
            var task = this.tasksByHandle[handle];
            if (task) {
                this.currentlyRunningATask = true;
                try {
                    task();
                }
                finally {
                    this.clearImmediate(handle);
                    this.currentlyRunningATask = false;
                }
            }
        }
    };
    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
        var _this = this;
        var channel = new this.root.MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            _this.runIfPresent(handle);
        };
        var fn = function setImmediate() {
            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
        fn.channel = channel;
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var root = instance.root;
            var doc = root.document;
            var html = doc.documentElement;
            var handle = instance.addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement('script');
            script.onreadystatechange = function () {
                instance.runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    return ImmediateDefinition;
}());
exports.ImmediateDefinition = ImmediateDefinition;
exports.Immediate = new ImmediateDefinition(root_1.root);
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ "../../../../rxjs/util/Map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
var MapPolyfill_1 = __webpack_require__("../../../../rxjs/util/MapPolyfill.js");
exports.Map = root_1.root.Map || (function () { return MapPolyfill_1.MapPolyfill; })();
//# sourceMappingURL=Map.js.map

/***/ }),

/***/ "../../../../rxjs/util/MapPolyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MapPolyfill = (function () {
    function MapPolyfill() {
        this.size = 0;
        this._values = [];
        this._keys = [];
    }
    MapPolyfill.prototype.get = function (key) {
        var i = this._keys.indexOf(key);
        return i === -1 ? undefined : this._values[i];
    };
    MapPolyfill.prototype.set = function (key, value) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            this._keys.push(key);
            this._values.push(value);
            this.size++;
        }
        else {
            this._values[i] = value;
        }
        return this;
    };
    MapPolyfill.prototype.delete = function (key) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            return false;
        }
        this._values.splice(i, 1);
        this._keys.splice(i, 1);
        this.size--;
        return true;
    };
    MapPolyfill.prototype.clear = function () {
        this._keys.length = 0;
        this._values.length = 0;
        this.size = 0;
    };
    MapPolyfill.prototype.forEach = function (cb, thisArg) {
        for (var i = 0; i < this.size; i++) {
            cb.call(thisArg, this._values[i], this._keys[i]);
        }
    };
    return MapPolyfill;
}());
exports.MapPolyfill = MapPolyfill;
//# sourceMappingURL=MapPolyfill.js.map

/***/ }),

/***/ "../../../../rxjs/util/Set.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
function minimalSetImpl() {
    // THIS IS NOT a full impl of Set, this is just the minimum
    // bits of functionality we need for this library.
    return (function () {
        function MinimalSet() {
            this._values = [];
        }
        MinimalSet.prototype.add = function (value) {
            if (!this.has(value)) {
                this._values.push(value);
            }
        };
        MinimalSet.prototype.has = function (value) {
            return this._values.indexOf(value) !== -1;
        };
        Object.defineProperty(MinimalSet.prototype, "size", {
            get: function () {
                return this._values.length;
            },
            enumerable: true,
            configurable: true
        });
        MinimalSet.prototype.clear = function () {
            this._values.length = 0;
        };
        return MinimalSet;
    }());
}
exports.minimalSetImpl = minimalSetImpl;
exports.Set = root_1.root.Set || minimalSetImpl();
//# sourceMappingURL=Set.js.map

/***/ }),

/***/ "../../../../rxjs/util/TimeoutError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when duetime elapses.
 *
 * @see {@link timeout}
 *
 * @class TimeoutError
 */
var TimeoutError = (function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError() {
        var err = _super.call(this, 'Timeout has occurred');
        this.name = err.name = 'TimeoutError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return TimeoutError;
}(Error));
exports.TimeoutError = TimeoutError;
//# sourceMappingURL=TimeoutError.js.map

/***/ }),

/***/ "../../../../rxjs/util/applyMixins.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function applyMixins(derivedCtor, baseCtors) {
    for (var i = 0, len = baseCtors.length; i < len; i++) {
        var baseCtor = baseCtors[i];
        var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
            var name_1 = propertyKeys[j];
            derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
        }
    }
}
exports.applyMixins = applyMixins;
//# sourceMappingURL=applyMixins.js.map

/***/ }),

/***/ "../../../../rxjs/util/assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
function assignImpl(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var len = sources.length;
    for (var i = 0; i < len; i++) {
        var source = sources[i];
        for (var k in source) {
            if (source.hasOwnProperty(k)) {
                target[k] = source[k];
            }
        }
    }
    return target;
}
exports.assignImpl = assignImpl;
;
function getAssign(root) {
    return root.Object.assign || assignImpl;
}
exports.getAssign = getAssign;
exports.assign = getAssign(root_1.root);
//# sourceMappingURL=assign.js.map

/***/ }),

/***/ "../../../../rxjs/util/noop.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-empty */
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "../../../../rxjs/util/not.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
exports.not = not;
//# sourceMappingURL=not.js.map

/***/ }),

/***/ "../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../exports-loader/index.js?module.exports.toString()!../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular2-toaster/toaster.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../exports-loader/index.js?module.exports.toString()!../css-loader/index.js??ref--4-1!../postcss-loader/index.js??postcss!./toaster.css", function() {
			var newContent = require("!!../exports-loader/index.js?module.exports.toString()!../css-loader/index.js??ref--4-1!../postcss-loader/index.js??postcss!./toaster.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=components.module.chunk.js.map