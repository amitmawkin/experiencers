webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/pages-menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Tle',
        icon: 'nb-compose',
        children: [
            {
                title: 'Humble',
                link: '/pages/tle/inputs',
            },
            {
                title: 'Sierra',
                link: '/pages/tle/sierrainputs'
            }
        ],
    },
];
//# sourceMappingURL=pages-menu.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */],
        children: [{
                path: 'tle',
                loadChildren: './tle/Tle.module#TleModule',
            }
        ],
    }];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    return PagesRoutingModule;
}());
PagesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
    })
], PagesRoutingModule);

//# sourceMappingURL=pages-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_menu__ = __webpack_require__("../../../../../src/app/pages/pages-menu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagesComponent = (function () {
    function PagesComponent() {
        this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["a" /* MENU_ITEMS */];
    }
    return PagesComponent;
}());
PagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'ngx-pages',
        template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  ",
    })
], PagesComponent);

//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_routing_module__ = __webpack_require__("../../../../../src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PAGES_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* PagesComponent */],
];
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__pages_routing_module__["a" /* PagesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__["a" /* ThemeModule */],
        ],
        declarations: PAGES_COMPONENTS.slice(),
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map