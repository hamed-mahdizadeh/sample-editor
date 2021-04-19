(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+lBW":
/*!**************************************************************!*\
  !*** ./src/app/editor-container/editor-container.service.ts ***!
  \**************************************************************/
/*! exports provided: EditorContainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorContainerService", function() { return EditorContainerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EditorContainerService {
    constructor() {
        this._activeSidebar = '';
        this.activeSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this._activeSidebar);
    }
}
EditorContainerService.ɵfac = function EditorContainerService_Factory(t) { return new (t || EditorContainerService)(); };
EditorContainerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EditorContainerService, factory: EditorContainerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Personal Projects\lab-forward\lab-docs\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EQmg":
/*!*************************************************************!*\
  !*** ./src/app/editor-container/editor/editor.component.ts ***!
  \*************************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.service */ "taxe");
/* harmony import */ var _search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.service */ "UgU/");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");




const _c0 = ["textArea"];
const _c1 = ["backgroundArea"];
const _c2 = ["highlights"];
class EditorComponent {
    constructor(editorService, searchService, dataService) {
        this.editorService = editorService;
        this.searchService = searchService;
        this.dataService = dataService;
        this.report = {
            matchedNo: 0,
            similarDic: {},
            similars: []
        };
    }
    onInput(text) {
        this.editorService.documentText.next(text);
        this.doc.content = text;
        this.dataService.currentDoc.next(this.doc);
        this.searchService.report.next(this.report);
        this.searchService.Highlights.next('');
        this.highlights.nativeElement.innerHTML = '';
    }
    onScroll(event) {
        const scrollTop = this.textArea.nativeElement.scrollTop;
        this.backgroundArea.nativeElement.scrollTop = scrollTop;
    }
    ngAfterViewInit() {
        this.searchService.Highlights.subscribe(newHighlight => {
            this.highlights.nativeElement.innerHTML = newHighlight;
        });
        this.dataService.currentDoc.subscribe(newDoc => {
            this.doc = newDoc;
            this.textArea.nativeElement.innerHTML = newDoc.content;
        });
        this.searchService.Highlights.subscribe(newVal => {
            this.highlights.nativeElement.innerHTML = newVal;
        });
    }
    ngOnInit() {
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_editor_service__WEBPACK_IMPORTED_MODULE_1__["EditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], viewQuery: function EditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textArea = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.backgroundArea = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.highlights = _t.first);
    } }, decls: 8, vars: 0, consts: [[1, "editor-input-container"], [1, "panel-header"], [1, "backgroundArea"], ["backgroundArea", ""], [1, "highlights"], ["highlights", ""], [3, "input", "scroll"], ["textArea", ""]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditorComponent_Template_textarea_input_6_listener($event) { return ctx.onInput($event.target.value); })("scroll", function EditorComponent_Template_textarea_scroll_6_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["textarea[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: absolute;\r\n    z-index: 2;\r\n    margin: 0;\r\n    border: 2px solid #74637f;\r\n    border-radius: 0;\r\n    color: #444;\r\n    background-color: transparent;\r\n    overflow: auto;\r\n    resize: none;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.container[_ngcontent-%COMP%], .backgroundArea[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    width: 98%;\r\n    box-sizing: border-box;\r\n    height: 95vh;\r\n}\r\n\r\n.highlights[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    font: 20px/28px \"Open Sans\", sans-serif;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.highlights[_ngcontent-%COMP%] {\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n    color: transparent;\r\n}\r\n\r\n.backgroundArea[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    border: 2px solid #685972;\r\n    background-color: #fff;\r\n    overflow: auto;\r\n    pointer-events: none;\r\n    transition: transform 1s;\r\n}\r\n\r\n.editor-input-container[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.panel-header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBOzs7SUFHSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6ImVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzc0NjM3ZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvbnRhaW5lcixcclxuLmJhY2tncm91bmRBcmVhLFxyXG50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogOTV2aDtcclxufVxyXG5cclxuLmhpZ2hsaWdodHMsXHJcbnRleHRhcmVhIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250OiAyMHB4LzI4cHggXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5oaWdobGlnaHRzIHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJhY2tncm91bmRBcmVhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjg1OTcyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbn1cclxuXHJcbi5lZGl0b3ItaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function LandingComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_div_14_Template_div_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const doc_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onDocRemove(doc_r1.offlineId, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_div_14_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const doc_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onLoadOfflineDoc(doc_r1.offlineId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doc_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Title: ", doc_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Last Modified: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 2, doc_r1.lastModifiedDate, "short"), " ");
} }
class LandingComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.newFileTitle = '';
    }
    onSaveOffline($event) {
        $event.stopPropagation();
        const docOfflineId = this.dataService.generateNewDoc(this.newFileTitle);
        this.newFileTitle = '';
        this.router.navigate([`document/${docOfflineId}`]);
    }
    onDocRemove(offlineId, $event) {
        $event.stopPropagation();
        this.dataService.removeOfflieDoc(offlineId);
    }
    onLoadOfflineDoc(offlineId) {
        this.router.navigate([`document/${offlineId}`]);
    }
    ngOnInit() {
        this.dataService.userDocIndex.subscribe(index => {
            this.userDocIndex = index;
        });
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 16, vars: 2, consts: [[1, "landing"], [1, "new-doc"], [1, "panel-heading"], [1, "panel-body"], [1, "doc-file"], ["title", "Create Offline File", 1, "doc-add-icon", "fas", "fa-plus-square", 3, "click"], [1, "doc-icon", "fas", "fa-file"], [1, "doc-name"], ["placeholder", "Please Enter Title of the New Document Here", 3, "ngModel", "ngModelChange"], [1, "doc-index"], [1, "doc-card-container"], ["class", "doc-card", 4, "ngFor", "ngForOf"], [1, "doc-card"], [1, "doc-remove-icon", "fas", "fa-trash-alt", 3, "click"], [1, "doc-icon", "load-doc", "fas", "fa-file", 3, "click"], [1, "doc-info"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create New Offline Document ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_div_click_6_listener($event) { return ctx.onSaveOffline($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_9_listener($event) { return ctx.newFileTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Your Offline Files ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LandingComponent_div_14_Template, 10, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newFileTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userDocIndex.docIndex);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".landing[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows: 1fr auto;\r\n}\r\n\r\n.panel-heading[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #fff;\r\n    background-color: #00a693;\r\n    padding: 10px;\r\n    margin: 10px 0;\r\n}\r\n\r\n.panel-body[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.doc-file[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows: 20px 20px 100px;\r\n    grid-template-columns: 70px 20px 20px;\r\n}\r\n\r\n.doc-add-icon[_ngcontent-%COMP%], .doc-remove-icon[_ngcontent-%COMP%] {\r\n    grid-row: 1 / 3;\r\n    grid-column: 2 / 4;\r\n    z-index: 1;\r\n    font-size: 25px;\r\n    place-self: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.doc-add-icon[_ngcontent-%COMP%] {\r\n    color: rgb(29, 228, 39);\r\n}\r\n\r\n.doc-remove-icon[_ngcontent-%COMP%] {\r\n    color: rgb(199, 22, 146);\r\n}\r\n\r\n.doc-icon[_ngcontent-%COMP%] {\r\n    color: rgb(226 203 38);\r\n    font-size: 120px;\r\n    margin: 10px;\r\n}\r\n\r\n.doc-info[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n}\r\n\r\n.doc-card-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    row-gap: 10px;\r\n    column-gap: 10px;\r\n}\r\n\r\n.doc-card[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    padding: 5px;\r\n    background-color: rgb(239 251 250);\r\n    color: #4e66dd;\r\n}\r\n\r\n.doc-name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    padding: 3px;\r\n    height: 30px;\r\n    width: 300px;\r\n    margin: 10px;\r\n}\r\n\r\n.load-doc[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMscUNBQXFDO0FBQ3pDOztBQUdBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcclxufVxyXG5cclxuLnBhbmVsLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjkzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4ucGFuZWwtYm9keSB7XHJcblxyXG59XHJcblxyXG4uZG9jLWZpbGUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweCAyMHB4IDEwMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MHB4IDIwcHggMjBweDtcclxufVxyXG5cclxuXHJcbi5kb2MtYWRkLWljb24sIC5kb2MtcmVtb3ZlLWljb24ge1xyXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRvYy1hZGQtaWNvbiB7XHJcbiAgICBjb2xvcjogcmdiKDI5LCAyMjgsIDM5KTtcclxufVxyXG5cclxuLmRvYy1yZW1vdmUtaWNvbiB7XHJcbiAgICBjb2xvcjogcmdiKDE5OSwgMjIsIDE0Nik7XHJcbn1cclxuLmRvYy1pY29uIHtcclxuICAgIGNvbG9yOiByZ2IoMjI2IDIwMyAzOCk7XHJcbiAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5kb2MtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbn1cclxuXHJcbi5kb2MtY2FyZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgcm93LWdhcDogMTBweDtcclxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5kb2MtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5IDI1MSAyNTApO1xyXG4gICAgY29sb3I6ICM0ZTY2ZGQ7XHJcbn1cclxuXHJcbi5kb2MtbmFtZSBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5sb2FkLWRvYyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "L01u":
/*!****************************************************************!*\
  !*** ./src/app/editor-container/editor-contaiter.component.ts ***!
  \****************************************************************/
/*! exports provided: EditorContaiterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorContaiterComponent", function() { return EditorContaiterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _editor_container_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-container.service */ "+lBW");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "mtiB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor/editor.component */ "EQmg");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "Xd3y");








function EditorContaiterComponent_app_search_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search");
} }
const _c0 = function (a0) { return { "closed": a0 }; };
class EditorContaiterComponent {
    constructor(editorContainerService, dataService, route) {
        this.editorContainerService = editorContainerService;
        this.dataService = dataService;
        this.route = route;
    }
    ngOnInit() {
        this.docId = this.route.snapshot.paramMap.get('id');
        this.dataService.loadDoc(this.docId);
        this.editorContainerService.activeSidebar.subscribe(activeItem => {
            this.activeSidebar = activeItem;
        });
    }
}
EditorContaiterComponent.ɵfac = function EditorContaiterComponent_Factory(t) { return new (t || EditorContaiterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_editor_container_service__WEBPACK_IMPORTED_MODULE_1__["EditorContainerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
EditorContaiterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorContaiterComponent, selectors: [["app-editor-contaiter"]], decls: 7, vars: 4, consts: [[1, "editor-container"], [1, "navbar"], [1, "side-bar", 3, "ngClass"], [4, "ngIf"], [1, "text-area-container"]], template: function EditorContaiterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditorContaiterComponent_app_search_4_Template, 1, 0, "app-search", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.activeSidebar !== "search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeSidebar === "search");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _editor_editor_component__WEBPACK_IMPORTED_MODULE_6__["EditorComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]], styles: [".editor-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    background-color: #ddd;\r\n    grid-template-columns: 40px 1fr 600fr;\r\n    grid-template-areas: \"nav sidebar auto\"\r\n}\r\n\r\n\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n    background-color: #aaa;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 50px 50px auto;\r\n    height: 100%;\r\n    grid-area: nav;\r\n}\r\n\r\n\r\n\r\n.side-bar[_ngcontent-%COMP%] {\r\n    grid-area: sidebar;\r\n    width: 250px;\r\n    background-color: #ccc;\r\n}\r\n\r\n\r\n\r\n.closed[_ngcontent-%COMP%] {\r\n    width: 0 !important;\r\n}\r\n\r\n\r\n\r\n.text-area-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\n.search-nav[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    padding: 10px;\r\n    color: #fff;\r\n}\r\n\r\n\r\n\r\n.similar-item[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    border: 1px solid #aaa;\r\n    color: #888;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n    margin: 5px;\r\n    margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci1jb250YWl0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFDckM7QUFDSjs7OztBQUlBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixjQUFjO0FBQ2xCOzs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7QUFDZjs7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImVkaXRvci1jb250YWl0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3ItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMWZyIDYwMGZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJuYXYgc2lkZWJhciBhdXRvXCJcclxufVxyXG5cclxuXHJcblxyXG4ubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggNTBweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ3JpZC1hcmVhOiBuYXY7XHJcbn1cclxuXHJcbi5zaWRlLWJhciB7XHJcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4uY2xvc2VkIHtcclxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWFyZWEtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLW5hdiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zaW1pbGFyLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataService {
    constructor() {
        //Test user name for storing offline Docs per user
        this.currentUser = {
            userCode: 'a1Q2e'
        };
        this.userDocIndex = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.currentDoc = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        const userDocIndex = this.getUserDocIndex();
        this.userDocIndex.next(userDocIndex);
    }
    randomOfflineId() {
        return Math.floor(Math.random() * 10000000).toString(36);
    }
    getUserDocIndex() {
        let currentUseDocIndexStr = localStorage.getItem(this.currentUser.userCode);
        let currentUseDocIndex;
        if (currentUseDocIndexStr) {
            currentUseDocIndex = JSON.parse(currentUseDocIndexStr);
        }
        else {
            currentUseDocIndex = {
                docIndex: []
            };
        }
        return currentUseDocIndex;
    }
    removeDocIndexItem(offlineId) {
        const index = this.getUserDocIndex();
        index.docIndex = index.docIndex.filter(i => i.offlineId !== offlineId);
        localStorage.setItem(this.currentUser.userCode, JSON.stringify(index));
        this.userDocIndex.next(index);
    }
    generateNewDoc(docTitle) {
        const newDoc = {
            offlineId: this.randomOfflineId(),
            title: docTitle,
            createdDate: new Date(),
            lastModifiedDate: new Date(),
            content: '',
        };
        let currentUseDocIndex = this.getUserDocIndex();
        currentUseDocIndex.docIndex.push({
            offlineId: newDoc.offlineId,
            title: newDoc.title,
            lastModifiedDate: newDoc.lastModifiedDate,
            createdDate: newDoc.createdDate
        });
        let currentUseDocIndexStr = JSON.stringify(currentUseDocIndex);
        localStorage.setItem(this.currentUser.userCode, currentUseDocIndexStr);
        const newDocStr = JSON.stringify(newDoc);
        localStorage.setItem(newDoc.offlineId, newDocStr);
        this.userDocIndex.next(currentUseDocIndex);
        return newDoc.offlineId;
    }
    getDoc(offlineId) {
        const docStr = localStorage.getItem(offlineId);
        return JSON.parse(docStr);
    }
    loadDoc(offlineId) {
        const doc = this.getDoc(offlineId);
        this.currentDoc.next(doc);
    }
    saveDoc(doc) {
        localStorage.setItem(doc.offlineId, JSON.stringify(doc));
    }
    removeOfflieDoc(offlineId) {
        this.removeDocIndexItem(offlineId);
        localStorage.removeItem(offlineId);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'lab-docs';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "app-container"], [1, "app-header"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lab Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".app-container[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "UgU/":
/*!***********************************************************!*\
  !*** ./src/app/editor-container/search/search.service.ts ***!
  \***********************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchService {
    constructor() {
        this.spliterRegex = /[\s]+|[\.\)\(;!?,][\s]+/;
        this._report = {
            matchedNo: 0,
            similarDic: {},
            similars: []
        };
        this.report = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this._report);
        this.key = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.Highlights = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
    }
    levenshtein(a, b) {
        if (a.length == 0)
            return b.length;
        if (b.length == 0)
            return a.length;
        var matrix = [];
        // increment along the first column of each row
        var i;
        for (i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        // increment each column in the first row
        var j;
        for (j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }
        // Fill in the rest of the matrix
        for (i = 1; i <= b.length; i++) {
            for (j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) == a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                }
                else {
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(matrix[i][j - 1] + 1, // insertion
                    matrix[i - 1][j] + 1)); // deletion
                }
            }
        }
        return matrix[b.length][a.length];
    }
    ;
    findSimilar(text, key) {
        let words = text.split(this.spliterRegex);
        const similars = [];
        let matchedNo = 0;
        const keyLength = key.length;
        for (let word of words) {
            if (word.length === key.length) {
                if (word === key) {
                    matchedNo++;
                    continue;
                }
            }
            if (Math.abs(word.length - key.length) <= 1) {
                if (this.levenshtein(word, key) === 1) {
                    similars.push(word);
                }
            }
        }
        const similarDic = {};
        for (let k of similars) {
            if (similars[k]) {
                similarDic[k] = similarDic[k]++;
            }
            else {
                similarDic[k] = 1;
            }
        }
        return {
            matchedNo,
            similars,
            similarDic
        };
    }
    applyHighlights(text, key, exact) {
        const targetRegex = new RegExp(`(?<=[\\s]|^)${key}(?=([\\.?,!:]){0,1}[\\s]+|[.?,!:]$|$)`, 'g');
        const marker = exact ?
            '<mark class="exact">$&</mark>' :
            '<mark class="similar">$&</mark>';
        return text
            .replace(/\n$/g, '\n\n')
            .replace(targetRegex, marker);
    }
    findAllandHighlight(text, key) {
        const result = this.findSimilar(text, key);
        this.report.next(result);
        result.similars.forEach(w => {
            text = this.applyHighlights(text, w, false);
        });
        text = this.applyHighlights(text, key, true);
        this.Highlights.next(text);
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Xd3y":
/*!*************************************************************!*\
  !*** ./src/app/editor-container/search/search.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.service */ "UgU/");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SearchComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" x", item_r1.value, " ");
} }
class SearchComponent {
    constructor(searchService, dataService) {
        this.searchService = searchService;
        this.dataService = dataService;
        this.report = {
            matchedNo: 0,
            similarDic: {},
            similars: []
        };
        this.key = '';
    }
    onSearchClick() {
        this.searchService.findAllandHighlight(this.dataService.currentDoc.value.content, this.key);
    }
    onSearchKeyInput() {
        this.searchService.report.next({
            matchedNo: 0,
            similarDic: {},
            similars: []
        });
        this.searchService.Highlights.next('');
        this.searchService.key.next(this.key);
    }
    ngAfterViewInit() {
        this.searchService.report.subscribe(newReport => {
            this.report = newReport;
        });
    }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 15, vars: 5, consts: [[1, "search-sidebar"], [1, "search-box"], ["type", "search", "name", "search", "id", "search", 3, "ngModel", "ngModelChange", "input", "keyup.enter"], [1, "fas", "fa-search", 3, "click"], [1, "search-report"], [1, "report-row"], [1, "match-no"], ["class", "similar-item", 4, "ngFor", "ngForOf"], [1, "similar-item"], [1, "item-number"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_2_listener($event) { return ctx.key = $event; })("input", function SearchComponent_Template_input_input_2_listener() { return ctx.onSearchKeyInput(); })("keyup.enter", function SearchComponent_Template_input_keyup_enter_2_listener() { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_div_click_3_listener() { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Match:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Similars:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SearchComponent_div_13_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.report.matchedNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 3, ctx.report.similarDic));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]], styles: [".search-box[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 3fr 1fr;\r\n    width: 160px;\r\n    height: 40px;\r\n    border-radius: 100px;\r\n    background-color: #fff;\r\n    margin: 10px;\r\n}\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    color: #444;\r\n    border: none;\r\n    border-radius: 100px 0 0 100px;\r\n    padding: 5px 16px;\r\n    height: 40px;\r\n}\r\n.search-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    padding: 10px;\r\n    border-radius: 0 100px 100px 0;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    color: #777;\r\n}\r\n.search-report[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.similar-item[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    border: 1px solid #aaa;\r\n    margin: 3px;\r\n    border-radius: 100px;\r\n    color: #555;\r\n    background-color: #aed5d3;\r\n    display: inline-block;\r\n}\r\n.item-number[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    color: #fff;\r\n    background-color: #68d6d1;\r\n    border-radius: 100%;\r\n    padding: 2px;\r\n}\r\n.search-sidebar[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows: 70px auto;\r\n    justify-items: start;\r\n}\r\n.report-row[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #aaa;\r\n    border-top: 1px solid #aaa;\r\n    padding: 10px;\r\n    color: #003e5f;\r\n}\r\n.match-no[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    margin: 3px;\r\n    background-color: #46a2f1;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztBQUNmIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1ib3gge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4uc2VhcmNoLWJveCBpbnB1dCB7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4IDAgMCAxMDBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxNnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBkaXYge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTAwcHggMTAwcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVwb3J0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2ltaWxhci1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVkNWQzO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaXRlbS1udW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhkNmQxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuLnNlYXJjaC1zaWRlYmFyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggYXV0bztcclxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xyXG59XHJcblxyXG4ucmVwb3J0LXJvdyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjMDAzZTVmO1xyXG59XHJcbi5tYXRjaC1ubyB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NmEyZjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _editor_container_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor-container/search/search.component */ "Xd3y");
/* harmony import */ var _editor_container_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor-container/navbar/navbar.component */ "mtiB");
/* harmony import */ var _editor_container_editor_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor-container/editor/editor.component */ "EQmg");
/* harmony import */ var _editor_container_editor_contaiter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor-container/editor-contaiter.component */ "L01u");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"],
        _editor_container_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
        _editor_container_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _editor_container_editor_editor_component__WEBPACK_IMPORTED_MODULE_6__["EditorComponent"],
        _editor_container_editor_contaiter_component__WEBPACK_IMPORTED_MODULE_7__["EditorContaiterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "mtiB":
/*!*************************************************************!*\
  !*** ./src/app/editor-container/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _editor_container_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editor-container.service */ "+lBW");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NavbarComponent {
    constructor(editorContainerService, dataservice) {
        this.editorContainerService = editorContainerService;
        this.dataservice = dataservice;
    }
    onToggleSearchbar() {
        this._activeSidebar = this._activeSidebar !== 'search' ? 'search' : '';
        this.editorContainerService.activeSidebar.next(this._activeSidebar);
    }
    onSaveDoc() {
        this.dataservice.saveDoc(this.dataservice.currentDoc.value);
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_editor_container_service__WEBPACK_IMPORTED_MODULE_1__["EditorContainerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 4, vars: 1, consts: [[1, "navbar"], [1, "fas", "fa-home", "nav-icon", 3, "routerLink"], [1, "fas", "fa-search", "nav-icon", 3, "click"], [1, "fas", "fa-save", "nav-icon", 2, "color", "#236323", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_2_listener() { return ctx.onToggleSearchbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_3_listener() { return ctx.onSaveDoc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".nav-icon[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    padding: 10px;\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0FBQ2YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggNTBweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59ICovXHJcblxyXG4ubmF2LWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "taxe":
/*!***********************************************************!*\
  !*** ./src/app/editor-container/editor/editor.service.ts ***!
  \***********************************************************/
/*! exports provided: EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EditorService {
    constructor() {
        this.documentText = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
    }
}
EditorService.ɵfac = function EditorService_Factory(t) { return new (t || EditorService)(); };
EditorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EditorService, factory: EditorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editor_container_editor_contaiter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-container/editor-contaiter.component */ "L01u");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'document/:id', component: _editor_container_editor_contaiter_component__WEBPACK_IMPORTED_MODULE_1__["EditorContaiterComponent"] },
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map