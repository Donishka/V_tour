(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color:red;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<flash-messages></flash-messages>\r\n<router-outlet></router-outlet>\r\n<app-travel-agent-payment></app-travel-agent-payment>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _modules_password_reset_password_reset_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/password-reset/password-reset.module */ "./src/app/modules/password-reset/password-reset.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/index.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_sharedata_sharedata_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/sharedata/sharedata.service */ "./src/app/services/sharedata/sharedata.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _modules_signin_signin_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/signin/signin.module */ "./src/app/modules/signin/signin.module.ts");
/* harmony import */ var _modules_signup_signup_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/signup/signup.module */ "./src/app/modules/signup/signup.module.ts");
/* harmony import */ var _modules_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/user-account/user-account.module */ "./src/app/modules/user-account/user-account.module.ts");
/* harmony import */ var _modules_user_account_edit_user_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/user-account/edit-user.module */ "./src/app/modules/user-account/edit-user.module.ts");
/* harmony import */ var _modules_user_account_view_user_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/user-account/view-user.module */ "./src/app/modules/user-account/view-user.module.ts");
/* harmony import */ var _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/app-routing.module */ "./src/app/modules/app-routing.module.ts");
/* harmony import */ var _modules_header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/header-bar/header-bar.module */ "./src/app/modules/header-bar/header-bar.module.ts");
/* harmony import */ var _modules_payment_payment_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/payment/payment.module */ "./src/app/modules/payment/payment.module.ts");
/* harmony import */ var _modules_itinerary_itinerary_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/itinerary/itinerary.module */ "./src/app/modules/itinerary/itinerary.module.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var _app_services_sharedata_sp_package_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../app/services/sharedata/sp-package.service */ "./src/app/services/sharedata/sp-package.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_23__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _modules_signin_signin_module__WEBPACK_IMPORTED_MODULE_14__["SigninModule"],
                _modules_signup_signup_module__WEBPACK_IMPORTED_MODULE_15__["SignupModule"],
                _modules_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_16__["UserAccountModule"],
                _modules_user_account_edit_user_module__WEBPACK_IMPORTED_MODULE_17__["EditUserModule"],
                _modules_user_account_view_user_module__WEBPACK_IMPORTED_MODULE_18__["ViewUserModule"],
                _modules_header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_20__["HeaderBarModule"],
                _modules_payment_payment_module__WEBPACK_IMPORTED_MODULE_21__["PaymentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__["TypeaheadModule"].forRoot(),
                _modules_itinerary_itinerary_module__WEBPACK_IMPORTED_MODULE_22__["ItineraryModule"],
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__["NgxSmartModalModule"].forRoot(),
                _modules_password_reset_password_reset_module__WEBPACK_IMPORTED_MODULE_0__["PasswordResetModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _services_sharedata_sharedata_service__WEBPACK_IMPORTED_MODULE_11__["SharedataService"], _app_services_sharedata_sp_package_service__WEBPACK_IMPORTED_MODULE_24__["SpPackageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/client/add-new-clients/add-new-clients.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/client/add-new-clients/add-new-clients.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/client/add-new-clients/add-new-clients.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/client/add-new-clients/add-new-clients.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class = \"container\">\r\n    <div class=\"row\">\r\n      <div class =\"col\"></div>  \r\n      <div class=\"col-6\">\r\n        <div class=\"main-login main-center\">\r\n              <form style=\"margin-top:25px;\" #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\">\r\n                <fieldset>\r\n                  <legend><h3>Add Client</h3></legend> \r\n                <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"clientService.selectedClient._id\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"fname\" class=\"cols-sm-2 control-label\">First Name</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"fname\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.fname\"  required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"lname\" class=\"cols-sm-2 control-label\">Last Name</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"lname\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.lname\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"email\" class=\"cols-sm-2 control-label\">Email</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fas fa-envelope\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"email\" #emailref=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.email\"\r\n                        required>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class=\"aler alert-danger\">\r\n                    <div [hidden]=\"!emailref.errors?.pattern\">\r\n                      Invalid Email Address\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"password\" class=\"form-control\" name=\"password\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.password\"  required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"password\" class=\"cols-sm-2 control-label\">Re Enter Password</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"password\" class=\"form-control\" name=\"rePassword\" #name=\"ngModel\" [(ngModel)]=\"rePassword\" required>\r\n                    </div>\r\n                    <p style=\"color:red\" *ngIf=\"clientService.selectedClient.password!='' && clientService.selectedClient.password!=rePassword\">Passwords\r\n                      Do Not Match !</p>\r\n                  </div>\r\n                </div>\r\n                \r\n                <div class=\"form-group\">\r\n                  <label for=\"telephone\" class=\"cols-sm-2 control-label\">Telephone No</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fas fa-phone-square\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"telephone\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.telephone\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>                \r\n                <div class=\"form-group\">\r\n                  <label for=\"address\" class=\"cols-sm-2 control-label\">Address</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fas fa-home\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"address\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.address\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"city\" class=\"cols-sm-2 control-label\">City</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                        <i class=\"fas fa-building\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"city\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.city\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"country\" class=\"cols-sm-2 control-label\">Country</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                        <i class=\"fas fa-globe\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"country\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.country\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"datefrom\" class=\"cols-sm-2 control-label\">Date From</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                        <i class=\"far fa-calendar-alt\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                      <input type=\"date\" class=\"form-control\" name=\"datefrom\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.datefrom\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"dateto\" class=\"cols-sm-2 control-label\">Date To</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                        <i class=\"far fa-calendar-alt\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                      <input type=\"date\" class=\"form-control\" name=\"dateto\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.dateto\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"noofvisitors\" class=\"cols-sm-2 control-label\">No of Visitors</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fas fa-user\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"number\" class=\"form-control\" name=\"noofvisitors\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.noofvisitors\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"foodprefer\" class=\"cols-sm-2 control-label\">food Prefered</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fas fa-utensils\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"foodprefer\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.foodprefer\"  >\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"intactivities\" class=\"cols-sm-2 control-label\">Intrested Activities</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fas fa-gamepad\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"intactivities\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.intactivities\"  >\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"agegroup\" class=\"cols-sm-2 control-label\">Age Group</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fas fa-sort-numeric-down\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"agegroup\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.agegroup\"  >\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <flash-messages></flash-messages>\r\n                <div class=\"form-group \">\r\n                    <button style=\"margin-top:5px;\" class=\"btn btn-primary btn-lg btn-block login-button\" type=\"submit\" [disabled]=\"!userForm.valid\">Add Client</button>\r\n                    <button style=\"margin-top:5px;\" class=\"btn btn-primary btn-lg btn-block\" type=\"button\" (click)=\"resetForm(userForm)\">Reset</button>\r\n                </div>\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n            <div class=\"col\"></div>\r\n        </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/components/client/add-new-clients/add-new-clients.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/client/add-new-clients/add-new-clients.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddNewClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewClientsComponent", function() { return AddNewClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user-service/client/client.service */ "./src/app/services/user-service/client/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNewClientsComponent = /** @class */ (function () {
    function AddNewClientsComponent(clientService, flashMessage, router) {
        this.clientService = clientService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    AddNewClientsComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    AddNewClientsComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.clientService.selectedClient = {
            _id: "",
            fname: "",
            lname: "",
            password: "",
            email: "",
            telephone: [""],
            address: "",
            city: "",
            country: "",
            noofvisitors: null,
            foodprefer: [""],
            intactivities: [""],
            agegroup: "",
            datefrom: "",
            dateto: ""
        };
    };
    AddNewClientsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value._id == "") {
            this.clientService.postClient(form.value).subscribe(function (res) {
                _this.resetForm(form);
                _this.flashMessage.show('Client Saved', { cssClass: 'alert-success', timeout: 4000 });
                alert('Client Saved');
                console.log("Saved");
                _this.router.navigateByUrl('/travelagent-account');
            });
        }
        else {
            this.clientService.putClient(form.value).subscribe(function (res) {
                _this.resetForm(form);
                _this.flashMessage.show('Client Updated', { cssClass: 'alert-success', timeout: 4000 });
                alert('Client Updated');
                console.log("Updated");
                _this.router.navigateByUrl('/travelagent-account');
            });
        }
    };
    AddNewClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-clients',
            template: __webpack_require__(/*! ./add-new-clients.component.html */ "./src/app/components/client/add-new-clients/add-new-clients.component.html"),
            styles: [__webpack_require__(/*! ./add-new-clients.component.css */ "./src/app/components/client/add-new-clients/add-new-clients.component.css")],
            providers: [_services_user_service_client_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service_client_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddNewClientsComponent);
    return AddNewClientsComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client-account/client-account.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/client/client-account/client-account.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-color:white;;\r\n    background-attachment:scroll;\r\n    background-repeat:no-repeat;\r\n    background-position:center;\r\n    background-size:cover;\r\n    height:2000px;\r\n    }\r\n    /*----------------Containers--------------------*/\r\n    #top-container-fluid-nav\r\n    {\r\n    background-color:inherit;\t\r\n    background-attachment:scroll;\r\n    background-repeat:no-repeat;\r\n    background-position:center;\r\n    background-size:cover\t;\r\n    }\r\n    #body-container-fluid\r\n    {\r\n    background-color:inherit;\t\r\n    background-attachment:scroll;\r\n    background-repeat:no-repeat;\r\n    background-position:center;\r\n    background-size:cover;\r\n    }\r\n    #footer-container-fluid\r\n    {\r\n    background-color:inherit;\t\r\n    background-attachment:scroll;\r\n    background-repeat:no-repeat;\r\n    background-position:center;\r\n    background-size:cover;\r\n    padding-bottom:25px;\r\n    padding-top:25px;\t\r\n    }\r\n    .card \r\n    {\r\n    background-color: lightblue;\r\n    border:0px solid white;\r\n    box-shadow:0px 7px 16px 0px rgba(0, 0, 0, 0.09);\r\n    align-content: center;\r\n    align-items: center;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    padding: 10px;\r\n    }\r\n    .card-title\r\n    {\r\n    color:black;\r\n    font-size:16px;\r\n    text-align:center;\r\n    }\r\n    .card-text\r\n    {\r\n    color:black;\r\n    font-size:12px;\t\r\n    text-align:center;\r\n    \r\n    }\r\n    .list-inline-item \r\n    {\r\n    font-size:13px;\r\n    color:black;\r\n     }\r\n    .address .w3-ul li\r\n     {\r\n        border:0px solid white;\r\n        line-height:1px;\r\n    }\r\n    span \r\n    {\r\n    font-size:10px;\r\n    float:right;\r\n    background-color:#F4F7F9;\r\n    border-radius:10px;\r\n    padding:3px 8px;\r\n    color:#84919B;\r\n    }\r\n    .lower-case\r\n    {\r\n    color:#84919B;\r\n    font-size:12px;\r\n    text-align:center;\r\n    }\r\n    .l1{\r\n        list-style: none;\r\n        color: black;\r\n}\r\n    \r\n \r\n     \r\n     "

/***/ }),

/***/ "./src/app/components/client/client-account/client-account.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/client/client-account/client-account.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container-fluid\" id=\"body-container-fluid\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"card\" style=\"width:100%\">\r\n          <img *ngIf=\"user.profilepic==null\" class=\"image card-img-top\" src=\"../../../../assets/default.png\" alt=\"Card image\" style=\"width:300px;height:100%\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title\">{{user.fname}} {{user.lname}}</h4>\r\n            <div class=\"address\">\r\n              <ul class=\" l1 w3-ul w3-small\">\r\n                <br>\r\n                <li><i class=\"fas fa-envelope\" aria-hidden=\"true\"></i> Email : {{user.email}}</li><br>\r\n                <li><i class=\"fas fa-phone-square\" aria-hidden=\"true\"></i> Telephone : {{user.telephone}}</li><br>\r\n                <li><i class=\"fas fa-home\" aria-hidden=\"true\"></i> Address : {{user.address}}</li><br>\r\n                <li><i class=\"fas fa-building\" aria-hidden=\"true\"></i> City : {{user.city}}</li><br>\r\n                <li><i class=\"fas fa-globe\" aria-hidden=\"true\"></i> Country : {{user.country}}</li><br>\r\n                <li><i class=\"fas fa-utensils\" aria-hidden=\"true\"></i> foodprefer : {{user.foodprefer}}</li><br>\r\n                <li><i class=\"fas fa-gamepad\" aria-hidden=\"true\"></i> Activities : {{user.intactivities}}</li><br>\r\n                <li><i class=\"fas fa-sort-numeric-down\" aria-hidden=\"true\"></i> Age Group : {{user.agegroup}}</li><br>\r\n                <li><i class=\"far fa-calendar-alt\" aria-hidden=\"true\"> Date From : {{user.datefrom}}</i></li><br>\r\n                <li><i class=\"far fa-calendar-alt\" aria-hidden=\"true\"> Date To : {{user.dateto}}</i></li><br>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\" style=\"background-color:lightblue;\">\r\n        <br>\r\n        <h3>Your Trip</h3>\r\n        <div class=\"card\" *ngFor=\"let iT of itineraryService.itenarary; let i = index\">\r\n          <div *ngIf=\"user._id==iT.clientId\">\r\n            <div class=\"card-header\">\r\n              <h4>Itinerary Name: {{iT.name}}</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"card-title\" *ngFor=\"let event of iT.events; let i = index\">\r\n                <h5>{{i+1}}. {{event.name}}</h5>\r\n                <p>{{event.venue}}</p>\r\n              </div>\r\n              <h5>Total Amount : {{iT.totalPrice}}</h5>\r\n              <div *ngFor=\"let sp of itenararyPaymentService.itenararypayment\">\r\n                <div *ngIf=\"user._id==sp.clientid\">\r\n                  <div class=\"mb-1 text-muted\"> Payment Status : {{sp.status}}</div>\r\n                </div>\r\n              </div>\r\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"onPayment(i)\">Make Payment</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\" style=\"background-color:brown;\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/client/client-account/client-account.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/client/client-account/client-account.component.ts ***!
  \******************************************************************************/
/*! exports provided: ClientAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAccountComponent", function() { return ClientAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/itinerary-service/itinerary.service */ "./src/app/services/itinerary-service/itinerary.service.ts");
/* harmony import */ var _services_itinerary_service_model_itinerary_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/itinerary-service/model/itinerary.model */ "./src/app/services/itinerary-service/model/itinerary.model.ts");
/* harmony import */ var _services_sharedata_sharedata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/sharedata/sharedata.service */ "./src/app/services/sharedata/sharedata.service.ts");
/* harmony import */ var _services_payment_service_itenarary_payment_itenarary_payment_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/payment-service/itenarary-payment/itenarary-payment.model */ "./src/app/services/payment-service/itenarary-payment/itenarary-payment.model.ts");
/* harmony import */ var _services_payment_service_itenarary_payment_itenarary_payment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/payment-service/itenarary-payment/itenarary-payment.service */ "./src/app/services/payment-service/itenarary-payment/itenarary-payment.service.ts");
/* harmony import */ var _services_sharedata_client_payment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/sharedata/client-payment.service */ "./src/app/services/sharedata/client-payment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ClientAccountComponent = /** @class */ (function () {
    function ClientAccountComponent(authService, router, itenararyPaymentService, itenararyPayment, dataS, itineraryService, clientPaymentService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.itenararyPaymentService = itenararyPaymentService;
        this.itenararyPayment = itenararyPayment;
        this.dataS = dataS;
        this.itineraryService = itineraryService;
        this.clientPaymentService = clientPaymentService;
        this.itinerary = new _services_itinerary_service_model_itinerary_model__WEBPACK_IMPORTED_MODULE_4__["Itinerary"]();
        this.view = true;
        this.isPopupOpened = false;
        this.dataS.shareUserData();
        this.dataS.currentMessge.subscribe(function (traveAgentdata) {
            _this.itinerary.traveAgentName = traveAgentdata.username;
            _this.refreshItinerryList();
        });
    }
    ClientAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.data.user;
        });
        this.refreshPaymentList();
        this.refreshItinerryList();
    };
    ClientAccountComponent.prototype.refreshPaymentList = function () {
        var _this = this;
        this.itenararyPaymentService.getItenararyPaymentList().subscribe(function (res) {
            _this.itenararyPaymentService.itenararypayment = res;
        });
    };
    ClientAccountComponent.prototype.refreshItinerryList = function () {
        var _this = this;
        this.itineraryService.getItinerrytList1().subscribe(function (res) {
            _this.itineraryService.itenarary = res;
        });
    };
    ClientAccountComponent.prototype.onPayment = function (i) {
        this.clientPaymentService.amount = this.itineraryService.itenarary[i].totalPrice;
        this.clientPaymentService.itenararyid = this.itineraryService.itenarary[i]._id;
        this.clientPaymentService.itenararyname = this.itineraryService.itenarary[i].name;
        this.router.navigateByUrl('/client-payment');
    };
    ClientAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-account',
            template: __webpack_require__(/*! ./client-account.component.html */ "./src/app/components/client/client-account/client-account.component.html"),
            styles: [__webpack_require__(/*! ./client-account.component.css */ "./src/app/components/client/client-account/client-account.component.css")],
            providers: [_services_payment_service_itenarary_payment_itenarary_payment_service__WEBPACK_IMPORTED_MODULE_7__["ItenararyPaymentService"], _services_payment_service_itenarary_payment_itenarary_payment_model__WEBPACK_IMPORTED_MODULE_6__["ItenararyPayment"], _services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_3__["ItineraryService"]]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_payment_service_itenarary_payment_itenarary_payment_service__WEBPACK_IMPORTED_MODULE_7__["ItenararyPaymentService"],
            _services_payment_service_itenarary_payment_itenarary_payment_model__WEBPACK_IMPORTED_MODULE_6__["ItenararyPayment"],
            _services_sharedata_sharedata_service__WEBPACK_IMPORTED_MODULE_5__["SharedataService"],
            _services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_3__["ItineraryService"],
            _services_sharedata_client_payment_service__WEBPACK_IMPORTED_MODULE_8__["ClientPaymentService"]])
    ], ClientAccountComponent);
    return ClientAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client-filter.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/client/client-filter.pipe.ts ***!
  \*********************************************************/
/*! exports provided: ClientFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientFilterPipe", function() { return ClientFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClientFilterPipe = /** @class */ (function () {
    function ClientFilterPipe() {
    }
    ClientFilterPipe.prototype.transform = function (clients, searchKeyword, Client) {
        if (!clients || !searchKeyword) {
            return clients;
        }
        else {
            return clients.filter(function (clients) {
                return clients.fname.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                    clients.address.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                    clients.telephone.toString().indexOf(searchKeyword.toString()) !== -1 ||
                    clients.email.toString().indexOf(searchKeyword.toString()) !== -1;
            });
        }
    };
    ClientFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'ClientFilter'
        })
    ], ClientFilterPipe);
    return ClientFilterPipe;
}());



/***/ }),

/***/ "./src/app/components/client/client-payment/client-payment.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/client/client-payment/client-payment.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input1{\r\n    margin: 2px;\r\n    background-color:lightsteelblue;\r\n    \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/client/client-payment/client-payment.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/client/client-payment/client-payment.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-6\">\r\n      <div class=\"main-login main-center\">\r\n        <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\" method=\"POST\" target=\"_blank\" action=\"https://sandbox.payhere.lk/pay/checkout\"\r\n          #form>\r\n          <fieldset>\r\n\r\n            <input type=\"hidden\" name=\"merchant_id\" value=\"1211720\">\r\n            <input type=\"hidden\" name=\"return_url\" value=\"http://localhost:4200/client-account\">\r\n            <input type=\"hidden\" name=\"cancel_url\" value=\"http://localhost:4200/client-account\">\r\n            <input type=\"hidden\" name=\"notify_url\" value=\"http://sample.com/notify\">\r\n            <input type=\"hidden\" name=\"order_id\" value={{user._id}}>\r\n            <input type=\"hidden\" name=\"items\" value=\"clientPaymentService.itenararyname\"><br>\r\n            <input type=\"hidden\" name=\"currency\" value=\"USD\">\r\n\r\n            <h3>Client Details</h3>\r\n\r\n            First Name : \r\n            <input class=\"input1\" type=\"text\" name=\"first_name\" value=\"{{user.fname}}\" readonly><br>\r\n            Last Name :\r\n            <input class=\"input1\" type=\"text\" name=\"last_name\" value=\"{{user.lname}}\" readonly><br>\r\n            Email : \r\n            <input class=\"input1\" type=\"text\" name=\"email\" value=\"{{user.email}}\" readonly><br>\r\n            Telephone : \r\n            <input class=\"input1\" type=\"text\" name=\"phone\" value=\"{{user.telephone}}\"readonly><br>\r\n            Address : \r\n            <input class=\"input1\" type=\"text\" name=\"address\" value=\"{{user.address}}\"readonly><br>\r\n            City:\r\n            <input class=\"input1\" type=\"text\" name=\"city\" value=\"{{user.city}}\"readonly><br>\r\n            Country:\r\n            <input class=\"input1\" type=\"text\" name=\"country\" value=\"{{user.country}}\"readonly><br><br>\r\n            \r\n            <input type=\"hidden\" name=\"clientname\" #name=\"ngModel\" [(ngModel)]=user.fname>\r\n            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"itenararyPaymentService.selectedItenararyPayment._id\">\r\n\r\n            <h3>Payment Details</h3>\r\n            <input type=\"hidden\" name=\"clientid\" #name=\"ngModel\" [(ngModel)]=\"user._id\" required>\r\n            Amount : \r\n            <input class=\"input1\" type=\"text\" name=\"amount\" #name=\"ngModel\" [(ngModel)]=\"amount\" readonly ><br>\r\n            Date :\r\n            <input class=\"input1\" type=\"text\" name=\"date\" #name=\"ngModel\" [(ngModel)]=\"current_date\"><br>\r\n            <br>\r\n\r\n            <h3>Itenarary Details</h3>\r\n            <input type=\"hidden\" name=\"itenararyid\" #name=\"ngModel\" [(ngModel)]=\"itid\">\r\n            Itenarary Name :\r\n            <input class=\"input1\" type=\"text\" name=\"itenararyname\" #name=\"ngModel\" [(ngModel)]=\"itname\"><br><br><br>\r\n\r\n            <flash-messages></flash-messages>\r\n            <div class=\"form-group \">\r\n              <button class=\"btn btn-primary btn-lg btn-block login-button\" type=\"submit\" (click)=\"form.submit()\"[disabled]=\"!userForm.valid\">Make ItenararyPayment</button>\r\n              <!--button class=\"btn btn-primary btn-lg btn-block login-button\" type=\"button\" >Reset</button-->\r\n            </div>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/client/client-payment/client-payment.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/client/client-payment/client-payment.component.ts ***!
  \******************************************************************************/
/*! exports provided: ClientPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPaymentComponent", function() { return ClientPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_payment_service_itenarary_payment_itenarary_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/payment-service/itenarary-payment/itenarary-payment.service */ "./src/app/services/payment-service/itenarary-payment/itenarary-payment.service.ts");
/* harmony import */ var _services_sharedata_client_payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/sharedata/client-payment.service */ "./src/app/services/sharedata/client-payment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientPaymentComponent = /** @class */ (function () {
    function ClientPaymentComponent(authService, router, itenararyPaymentService, flashMessage, clientPaymentService) {
        this.authService = authService;
        this.router = router;
        this.itenararyPaymentService = itenararyPaymentService;
        this.flashMessage = flashMessage;
        this.clientPaymentService = clientPaymentService;
        this.today = Date.now();
        this.current_date = new Date();
    }
    ClientPaymentComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.getProfileDetails();
        this.itname = this.clientPaymentService.itenararyname;
        this.amount = this.clientPaymentService.amount;
        this.itid = this.clientPaymentService.itenararyid;
    };
    ClientPaymentComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.itenararyPaymentService.selectedItenararyPayment = {
            _id: "",
            clientid: "",
            clientname: "",
            itenararyid: "",
            itenararyname: "",
            amount: "",
            date: "",
            status: "",
        };
    };
    ClientPaymentComponent.prototype.resetForm1 = function (form) {
        if (form)
            this.itenararyPaymentService.selectedItenararyPayment = {
                _id: "",
                clientid: "",
                clientname: "",
                itenararyid: "",
                itenararyname: "",
                amount: "",
                date: "",
                status: "",
            };
    };
    ClientPaymentComponent.prototype.onSubmit = function (form) {
        var _this = this;
        confirm("Please confirm to proceed");
        this.itenararyPaymentService.postItenararyPayment(form.value).subscribe(function (res) {
            _this.flashMessage.show('Purchased', { cssClass: 'alert-success', timeout: 4000 });
            _this.resetForm1(form);
            console.log(form.value);
        });
    };
    ClientPaymentComponent.prototype.getProfileDetails = function () {
        var _this = this;
        console.log('get details');
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.data.user;
            console.log(_this.user);
        });
    };
    ClientPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-payment',
            template: __webpack_require__(/*! ./client-payment.component.html */ "./src/app/components/client/client-payment/client-payment.component.html"),
            styles: [__webpack_require__(/*! ./client-payment.component.css */ "./src/app/components/client/client-payment/client-payment.component.css")],
            providers: [_services_payment_service_itenarary_payment_itenarary_payment_service__WEBPACK_IMPORTED_MODULE_4__["ItenararyPaymentService"]]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_payment_service_itenarary_payment_itenarary_payment_service__WEBPACK_IMPORTED_MODULE_4__["ItenararyPaymentService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_sharedata_client_payment_service__WEBPACK_IMPORTED_MODULE_5__["ClientPaymentService"]])
    ], ClientPaymentComponent);
    return ClientPaymentComponent;
}());



/***/ }),

/***/ "./src/app/components/client/view-clients/view-clients.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/client/view-clients/view-clients.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search{\r\n    margin-top:30px;\r\n}\r\n.image{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n    margin-right: 20px;\r\n}"

/***/ }),

/***/ "./src/app/components/client/view-clients/view-clients.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/client/view-clients/view-clients.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container bg-info\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-10\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\" search form-control\" name=\"search\" placeholder=\"search for...\" [(ngModel)]=\"searchKeyword\">\r\n      </div>\r\n      <div>\r\n        <table class=\"table table-responsive-sm\t\">\r\n          <tr *ngFor=\"let client of clientService.client | ClientFilter:searchKeyword\">\r\n            <td align=\"center\">\r\n              <div class=\"col-md-8\">\r\n                <div class=\"card bg-light flex-md-row mb-4 shadow-sm h-md-250\">\r\n                  <div class=\"card-body d-flex flex-column align-items-start\">\r\n                    <strong class=\"d-inline-block mb-2 text-primary\">{{client.fname}} {{client.lname}}</strong>\r\n                    <h6 class=\"mb-0\"></h6>\r\n                    <div class=\"mb-1 text-muted small\">{{client.email}}</div>\r\n                    <br>\r\n                    <p class=\"card-text mb-auto\">Telephone : {{client.telephone}}\r\n                      <br>Address : {{client.address}}\r\n                      <br>City : {{client.city}}\r\n                      <br>Country : {{client.country}}\r\n                      <br>Date From : {{client.datefrom}}\r\n                      <br>Date To : {{client.dateto}}\r\n                      <br>No Of Visitors : {{client.noofvisitors}}\r\n                      <br>Food : {{client.foodprefer}}\r\n                      <br>Activities : {{client.intactivities}}\r\n                      <br>Age Group : {{client.agegroup}}</p>\r\n                    <a class=\"action-btn\" (click)=\"onEdit(client)\">\r\n                      <i class=\"fas fa-pencil-alt  btn-outline-primary btn-sm\" (click)=\"showDialog()\"> edit</i>\r\n                    </a>\r\n                    <a class=\"action-btn\" (click)=\"onDelete(client._id)\">\r\n                      <i class=\"fas fa-trash-alt  btn-outline-primary btn-sm\"> delete</i>\r\n                    </a>\r\n                  </div>\r\n                  <img class=\"image card-img-top\" src=\"../../../../assets/default.png\" alt=\"Card image\" style=\"width: 200px; height: 80%;\">\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>\r\n<p-dialog [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"600\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-10\">\r\n      <div class=\"main-login main-center\">\r\n        <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\">\r\n          <fieldset>\r\n            <legend>Edit Client :</legend>\r\n            <br>\r\n            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"clientService.selectedClient._id\">\r\n            <div class=\"form-group\">\r\n              <label for=\"fname\" class=\"cols-sm-2 control-label\">First Name</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"fname\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.fname\"\r\n                    required>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"lname\" class=\"cols-sm-2 control-label\">Last Name</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"lname\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.lname\"\r\n                    required>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"email\" class=\"cols-sm-2 control-label\">Email</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fas fa-envelope\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"email\" #emailref=\"ngModel\"\r\n                    [(ngModel)]=\"clientService.selectedClient.email\" required>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class=\"aler alert-danger\">\r\n                <div [hidden]=\"!emailref.errors?.pattern\">\r\n                  Invalid Email Address\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n              <label for=\"telephone\" class=\"cols-sm-2 control-label\">Telephone No</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"telephone\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.telephone\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"address\" class=\"cols-sm-2 control-label\">Address</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"address\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.address\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"city\" class=\"cols-sm-2 control-label\">City</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\">\r\n                    <i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i>\r\n                  </span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"city\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.city\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"country\" class=\"cols-sm-2 control-label\">Country</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\">\r\n                    <i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i>\r\n                  </span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"country\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.country\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"datefrom\" class=\"cols-sm-2 control-label\">Date From</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\">\r\n                    <i class=\"far fa-calendar-alt\" aria-hidden=\"true\"></i>\r\n                  </span>\r\n                  <input type=\"date\" class=\"form-control\" name=\"datefrom\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.datefrom\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"dateto\" class=\"cols-sm-2 control-label\">Date To</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\">\r\n                    <i class=\"far fa-calendar-alt\" aria-hidden=\"true\"></i>\r\n                  </span>\r\n                  <input type=\"date\" class=\"form-control\" name=\"dateto\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.dateto\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"noofvisitors\" class=\"cols-sm-2 control-label\">No of Visitors</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"noofvisitors\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.noofvisitors\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"foodprefer\" class=\"cols-sm-2 control-label\">Food Prefered</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"foodprefer\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.foodprefer\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"intactivities\" class=\"cols-sm-2 control-label\">Intrested Activities</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"intactivities\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.intactivities\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"agegroup\" class=\"cols-sm-2 control-label\">Age Group</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"agegroup\" #name=\"ngModel\" [(ngModel)]=\"clientService.selectedClient.agegroup\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <flash-messages></flash-messages>\r\n            <div class=\"form-group \">\r\n              <button style=\"margin-top:5px;\" class=\"btn btn-primary btn-lg btn-block login-button\" type=\"submit\" [disabled]=\"!userForm.valid\">\r\n                Update Client</button>\r\n              <button style=\"margin-top:5px;\" class=\"btn btn-primary btn-lg btn-block\" type=\"button\" (click)=\"resetForm(userForm)\">Reset</button>\r\n            </div>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/components/client/view-clients/view-clients.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/client/view-clients/view-clients.component.ts ***!
  \**************************************************************************/
/*! exports provided: ViewClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClientsComponent", function() { return ViewClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user-service/client/client.service */ "./src/app/services/user-service/client/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewClientsComponent = /** @class */ (function () {
    function ViewClientsComponent(clientService, flashMessage, router) {
        this.clientService = clientService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.display = false;
    }
    ViewClientsComponent.prototype.ngOnInit = function () {
        this.refreshClientList();
        this.resetForm();
    };
    ViewClientsComponent.prototype.showDialog = function () {
        this.display = true;
    };
    ViewClientsComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.clientService.selectedClient = {
            _id: "",
            fname: "",
            lname: "",
            password: "",
            email: "",
            telephone: [""],
            address: "",
            city: "",
            country: "",
            noofvisitors: null,
            foodprefer: [""],
            intactivities: [""],
            agegroup: "",
            datefrom: "",
            dateto: ""
        };
    };
    ViewClientsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value._id == "") {
            this.clientService.postClient(form.value).subscribe(function (res) {
                _this.refreshClientList();
                _this.resetForm(form);
            });
        }
        else {
            this.clientService.putClient(form.value).subscribe(function (res) {
                _this.resetForm(form);
                _this.refreshClientList();
                alert('Client Updated');
                _this.display = false;
            });
        }
    };
    ViewClientsComponent.prototype.refreshClientList = function () {
        var _this = this;
        this.clientService.getClientList().subscribe(function (res) {
            _this.clientService.client = res;
        });
    };
    ViewClientsComponent.prototype.onEdit = function (client) {
        this.clientService.selectedClient = client;
    };
    ViewClientsComponent.prototype.onDelete = function (_id) {
        var _this = this;
        if (confirm('Are you sure to delete this record ?') == true) {
            this.clientService.deleteClient(_id).subscribe(function (res) {
                _this.refreshClientList();
            });
        }
    };
    ViewClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-clients',
            template: __webpack_require__(/*! ./view-clients.component.html */ "./src/app/components/client/view-clients/view-clients.component.html"),
            styles: [__webpack_require__(/*! ./view-clients.component.css */ "./src/app/components/client/view-clients/view-clients.component.css")],
            providers: [_services_user_service_client_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service_client_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewClientsComponent);
    return ViewClientsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-login></app-login>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/itinerary/edit-itinerary/edit-itinerary.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/itinerary/edit-itinerary/edit-itinerary.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/itinerary/edit-itinerary/edit-itinerary.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/itinerary/edit-itinerary/edit-itinerary.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\" height: 500px; overflow:auto;\">\r\n<mat-card >\r\n  <mat-card-content>\r\n    <div class=\"container\">\r\n      <div >\r\n          <div class=\"row\" >\r\n              <h1>Itinerary</h1>\r\n              <hr>\r\n            </div>\r\n            <div class=\"row\">\r\n                <input type=\"text\" [(ngModel)]=\"note\" class=\"col-sm\">\r\n                <input type=\"text\" [(ngModel)]=\"itineraryName\" class=\"col-sm\">\r\n              <button  class=\" btn btn-primary col-sm\" (click)=\"addEvent()\"style=\"margin:10px \">Add event</button>\r\n              <button class=\" btn btn-primary col-sm\" (click)=\"addItinerary()\" style=\"margin:10px \" >Update</button>\r\n              \r\n            </div>\r\n      </div>\r\n      \r\n      <br>\r\n      <div class=\"container\">\r\n      <cdk-drop (dropped)=\"onDrop($event)\">\r\n          <div *ngFor=\"let item of EventList; let i = index\" cdkDrag>\r\n              <div class=\"card text-center\">\r\n                  <div class=\"card-header\" cdkDragHandle>\r\n                    Event {{i+1}}\r\n                  </div>\r\n                  <div class=\"card-body\" >\r\n                    <h5 class=\"card-title\" >{{item.name}}</h5>\r\n                    <p class=\"card-text\">{{item.venue}}</p>\r\n                    <button class=\"btn btn-primary\" (click)=\"editEvent(item.id)\" style=\"margin: 5px;\">Edit</button>\r\n                    <button class=\"btn btn-primary\" (click)=\"deleteEvent(item.id)\">Delete</button>\r\n                  </div>\r\n                  <div class=\"card-footer text-muted\">\r\n                    2 days ago\r\n                  </div>\r\n                </div>\r\n          </div>\r\n        </cdk-drop>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/itinerary/edit-itinerary/edit-itinerary.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/itinerary/edit-itinerary/edit-itinerary.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditItineraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItineraryComponent", function() { return EditItineraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/itinerary-service/itinerary.service */ "./src/app/services/itinerary-service/itinerary.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event/event.component */ "./src/app/components/itinerary/event/event.component.ts");
/* harmony import */ var _services_sharedata_sharedata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/sharedata/sharedata.service */ "./src/app/services/sharedata/sharedata.service.ts");
/* harmony import */ var _services_itinerary_service_model_itinerary_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/itinerary-service/model/itinerary.model */ "./src/app/services/itinerary-service/model/itinerary.model.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var EditItineraryComponent = /** @class */ (function () {
    function EditItineraryComponent(data, formBuilder, dataS, dialogRef, dialog, itineraryService) {
        this.data = data;
        this.formBuilder = formBuilder;
        this.dataS = dataS;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.itineraryService = itineraryService;
        this.note = "Add a note here...";
        this.itineraryName = "Itinerary Name here";
        this.itinerary = new _services_itinerary_service_model_itinerary_model__WEBPACK_IMPORTED_MODULE_6__["Itinerary"]();
        this.isPopupOpened = false;
    }
    EditItineraryComponent.prototype.onDrop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(this.itineraryService.eventList, event.previousIndex, event.currentIndex);
    };
    EditItineraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataS.shareUserData();
        this.dataS.currentMessge.subscribe(function (traveAgentdata) {
            _this.itinerary.traveAgentName = traveAgentdata.username;
        });
        this.id = this.data.id;
        this.itineraryName = this.data.itineraryName;
        this.note = this.data.note;
        this.editItinerary(this.id);
        console.log("Id of ininerty" + this.id);
    };
    Object.defineProperty(EditItineraryComponent.prototype, "EventList", {
        get: function () {
            //console.log(JSON.stringify(this.eventService.getAllEvents()));
            return this.itineraryService.getAllEvents();
        },
        enumerable: true,
        configurable: true
    });
    EditItineraryComponent.prototype.editItinerary = function (id) {
        var _this = this;
        this.itineraryService.getOneItinerry(id).subscribe(function (res) {
            _this.Itinerary = res;
            _this.events = _this.Itinerary.events;
            //console.log("events"+JSON.stringify(this.events));
            for (var i in _this.events) {
                _this.evnetForm = _this.formBuilder.group({
                    id: [_this.events[i].id],
                    price: [_this.events[i].price, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                    name: [_this.events[i].name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                    venue: [_this.events[i].venue, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
                });
                _this.itineraryService.addEvent(_this.evnetForm.value);
            }
        });
    };
    EditItineraryComponent.prototype.getTotalAmount = function (eventList) {
        var tot = 0;
        for (var i in eventList) {
            tot = tot + eventList[i].price;
        }
        return tot;
    };
    EditItineraryComponent.prototype.addEvent = function () {
        var _this = this;
        this.isPopupOpened = true;
        var dialogRef = this.dialog.open(_event_event_component__WEBPACK_IMPORTED_MODULE_4__["EventComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.isPopupOpened = false;
        });
    };
    EditItineraryComponent.prototype.editEvent = function (id) {
        var _this = this;
        this.isPopupOpened = true;
        var event = this.itineraryService.getAllEvents().find(function (c) { return c.id === id; });
        console.log(event);
        var dialogRef = this.dialog.open(_event_event_component__WEBPACK_IMPORTED_MODULE_4__["EventComponent"], {
            data: event
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.isPopupOpened = false;
        });
    };
    EditItineraryComponent.prototype.deleteEvent = function (id) {
        this.itineraryService.removeEvent(id);
    };
    EditItineraryComponent.prototype.addItinerary = function () {
        var _this = this;
        this.itinerary.date_time = this.itineraryService.getDate();
        this.itinerary.name = this.itineraryName;
        this.itinerary.note = this.note;
        this.itinerary._id = this.id;
        this.itinerary.events = this.itineraryService.getAllEvents();
        this.itinerary.totalPrice = this.getTotalAmount(this.EventList);
        this.itineraryService.putItinerry(this.itinerary).subscribe(function (res) {
            alert('Itinerary Updated');
            console.log("Saved");
            _this.dialogRef.close();
        });
    };
    EditItineraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-itinerary',
            template: __webpack_require__(/*! ./edit-itinerary.component.html */ "./src/app/components/itinerary/edit-itinerary/edit-itinerary.component.html"),
            styles: [__webpack_require__(/*! ./edit-itinerary.component.css */ "./src/app/components/itinerary/edit-itinerary/edit-itinerary.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_sharedata_sharedata_service__WEBPACK_IMPORTED_MODULE_5__["SharedataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_1__["ItineraryService"]])
    ], EditItineraryComponent);
    return EditItineraryComponent;
}());



/***/ }),

/***/ "./src/app/components/itinerary/event/event.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/itinerary/event/event.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/itinerary/event/event.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/itinerary/event/event.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-header>\r\n  <mat-toolbar class=\"toolbar\">\r\n    <mat-card-title>Event Information</mat-card-title>\r\n    <span class=\"toobar-spacer\"></span>\r\n    <mat-icon (click)=\"onNoClick()\">cancle</mat-icon>\r\n  </mat-toolbar>\r\n</mat-card-header>\r\n<mat-card-content>\r\n\r\n\r\n\r\n\r\n  <!-- from this to -->\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-5 col-md-5\">\r\n        <div class=\"tabulation animate-box\">\r\n\r\n          <!-- Nav tabs -->\r\n          <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n            <li role=\"presentation\">\r\n              <a href=\"#custom\" aria-controls=\"custom\" role=\"tab\" data-toggle=\"tab\" class=\"nav-link\">Custom Event</a>\r\n            </li>\r\n            <li role=\"presentation\" class=\"nav-item\">\r\n              <a href=\"#foods\" aria-controls=\"foods\" role=\"tab\" data-toggle=\"tab\" class=\"nav-link\">Food</a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n              <a href=\"#hotels\" aria-controls=\"hotels\" role=\"tab\" data-toggle=\"tab\" class=\"nav-link\">Hotels</a>\r\n            </li>\r\n            <li role=\"presentation\">\r\n              <a href=\"#packages\" aria-controls=\"packages\" role=\"tab\" data-toggle=\"tab\" class=\"nav-link\">Packages</a>\r\n            </li>\r\n          </ul>\r\n\r\n          <!-- Tab panes -->\r\n          <div class=\"tab-content\">\r\n\r\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"custom\">\r\n              <div class=\"tab-pane active\">\r\n                <form action=\"\" [formGroup]=\"evnetForm\" (submit)=\"onSubmit()\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                        <label for=\"Name\">Event Name</label>\r\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\">\r\n                      </div>\r\n\r\n                      <div class=\"col-md-6\">\r\n                        <label for=\"Name\">Venue</label>\r\n                        <input type=\"text\" formControlName=\"venue\" class=\"form-control\">\r\n                      </div>\r\n\r\n                      <div class=\"col-md-6\">\r\n                        <label for=\"Name\">price</label>\r\n                        <input type=\"number\" formControlName=\"price\" class=\"form-control\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <button type=\"submit\" class=\"btn btn-success\">Add event</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"foods\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xxs-12 col-xs-6 mt\">\r\n                  <div class=\"input-field\">\r\n                    <label for=\"from\">From:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"from-place\" placeholder=\"Los Angeles, USA\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt\">\r\n                  <div class=\"input-field\">\r\n                    <label for=\"from\">To:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"to-place\" placeholder=\"Tokyo, Japan\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt alternate\">\r\n                  <div class=\"input-field\">\r\n                    <label for=\"date-start\">Check In:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"date-start\" placeholder=\"mm/dd/yyyy\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt alternate\">\r\n                  <div class=\"input-field\">\r\n                    <label for=\"date-end\">Check Out:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"date-end\" placeholder=\"mm/dd/yyyy\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 mt\">\r\n                  <section>\r\n                    <label for=\"class\">Class:</label>\r\n                    <select class=\"cs-select cs-skin-border\">\r\n                      <option value=\"\" disabled selected>Economy</option>\r\n                      <option value=\"economy\">Economy</option>\r\n                      <option value=\"first\">First</option>\r\n                      <option value=\"business\">Business</option>\r\n                    </select>\r\n                  </section>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt\">\r\n                  <section>\r\n                    <label for=\"class\">Adult:</label>\r\n                    <select class=\"cs-select cs-skin-border\">\r\n                      <option value=\"\" disabled selected>1</option>\r\n                      <option value=\"1\">1</option>\r\n                      <option value=\"2\">2</option>\r\n                      <option value=\"3\">3</option>\r\n                      <option value=\"4\">4</option>\r\n                    </select>\r\n                  </section>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt\">\r\n                  <section>\r\n                    <label for=\"class\">Children:</label>\r\n                    <select class=\"cs-select cs-skin-border\">\r\n                      <option value=\"\" disabled selected>1</option>\r\n                      <option value=\"1\">1</option>\r\n                      <option value=\"2\">2</option>\r\n                      <option value=\"3\">3</option>\r\n                      <option value=\"4\">4</option>\r\n                    </select>\r\n                  </section>\r\n                </div>\r\n                <div class=\"col-xs-12\">\r\n                  <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Search Packages\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"hotels\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xxs-12 col-xs-12 mt\">\r\n                  <div class=\"input-field\">\r\n                    <label for=\"from\">City:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"from-place\" placeholder=\"Los Angeles, USA\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt alternate\">\r\n                  <div class=\"input-field\">\r\n                    <label for=\"date-start\">Return:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"date-start\" placeholder=\"mm/dd/yyyy\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt alternate\">\r\n                  <div class=\"input-field\">\r\n                    <label for=\"date-end\">Check Out:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"date-end\" placeholder=\"mm/dd/yyyy\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 mt\">\r\n                  <section>\r\n                    <label for=\"class\">Rooms:</label>\r\n                    <select class=\"cs-select cs-skin-border\">\r\n                      <option value=\"\" disabled selected>1</option>\r\n                      <option value=\"economy\">1</option>\r\n                      <option value=\"first\">2</option>\r\n                      <option value=\"business\">3</option>\r\n                    </select>\r\n                  </section>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt\">\r\n                  <section>\r\n                    <label for=\"class\">Adult:</label>\r\n                    <select class=\"cs-select cs-skin-border\">\r\n                      <option value=\"\" disabled selected>1</option>\r\n                      <option value=\"1\">1</option>\r\n                      <option value=\"2\">2</option>\r\n                      <option value=\"3\">3</option>\r\n                      <option value=\"4\">4</option>\r\n                    </select>\r\n                  </section>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt\">\r\n                  <section>\r\n                    <label for=\"class\">Children:</label>\r\n                    <select class=\"cs-select cs-skin-border\">\r\n                      <option value=\"\" disabled selected>1</option>\r\n                      <option value=\"1\">1</option>\r\n                      <option value=\"2\">2</option>\r\n                      <option value=\"3\">3</option>\r\n                      <option value=\"4\">4</option>\r\n                    </select>\r\n                  </section>\r\n                </div>\r\n                <div class=\"col-xs-12\">\r\n                  <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Search Hotel\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"packages\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xxs-12 col-xs-6 mt\">\r\n                  <div class=\"input-field\">\r\n                    <label for=\"from\">City:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"from-place\" placeholder=\"Los Angeles, USA\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt\">\r\n                  <div class=\"input-field\">\r\n                    <label for=\"from\">Destination:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"to-place\" placeholder=\"Tokyo, Japan\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt alternate\">\r\n                  <div class=\"input-field\">\r\n                    <label for=\"date-start\">Departs:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"date-start\" placeholder=\"mm/dd/yyyy\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt alternate\">\r\n                  <div class=\"input-field\">\r\n                    <label for=\"date-end\">Return:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"date-end\" placeholder=\"mm/dd/yyyy\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 mt\">\r\n                  <section>\r\n                    <label for=\"class\">Rooms:</label>\r\n                    <select class=\"cs-select cs-skin-border\">\r\n                      <option value=\"\" disabled selected>1</option>\r\n                      <option value=\"economy\">1</option>\r\n                      <option value=\"first\">2</option>\r\n                      <option value=\"business\">3</option>\r\n                    </select>\r\n                  </section>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt\">\r\n                  <section>\r\n                    <label for=\"class\">Adult:</label>\r\n                    <select class=\"cs-select cs-skin-border\">\r\n                      <option value=\"\" disabled selected>1</option>\r\n                      <option value=\"1\">1</option>\r\n                      <option value=\"2\">2</option>\r\n                      <option value=\"3\">3</option>\r\n                      <option value=\"4\">4</option>\r\n                    </select>\r\n                  </section>\r\n                </div>\r\n                <div class=\"col-xxs-12 col-xs-6 mt\">\r\n                  <section>\r\n                    <label for=\"class\">Children:</label>\r\n                    <select class=\"cs-select cs-skin-border\">\r\n                      <option value=\"\" disabled selected>1</option>\r\n                      <option value=\"1\">1</option>\r\n                      <option value=\"2\">2</option>\r\n                      <option value=\"3\">3</option>\r\n                      <option value=\"4\">4</option>\r\n                    </select>\r\n                  </section>\r\n                </div>\r\n                <div class=\"col-xs-12\">\r\n                  <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Search Packages\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"desc2 animate-box\">\r\n        <div class=\"col-sm-7 col-sm-push-1 col-md-7 col-md-push-1\">\r\n          <p>Create new Event</p>\r\n          <h2>vTour Itinerary</h2>\r\n          <h3>Itinerary One</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- to here -->\r\n\r\n\r\n  <!-- </mat-card-content> -->"

/***/ }),

/***/ "./src/app/components/itinerary/event/event.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/itinerary/event/event.component.ts ***!
  \***************************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/itinerary-service/itinerary.service */ "./src/app/services/itinerary-service/itinerary.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EventComponent = /** @class */ (function () {
    function EventComponent(formBuilder, dialogRef, eventService, data) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.eventService = eventService;
        this.data = data;
    }
    EventComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EventComponent.prototype.ngOnInit = function () {
        this.evnetForm = this.formBuilder.group({
            id: [this.data.id],
            price: [this.data.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            name: [this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            venue: [this.data.venue, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EventComponent.prototype.onSubmit = function () {
        if (isNaN(this.data.id)) {
            this.eventService.addEvent(this.evnetForm.value);
            this.dialogRef.close();
        }
        else {
            this.eventService.editEvent(this.evnetForm.value);
            this.dialogRef.close();
        }
    };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/components/itinerary/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/components/itinerary/event/event.component.css")],
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_3__["ItineraryService"], Object])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/components/itinerary/itinerary.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/itinerary/itinerary.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/itinerary/itinerary.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/itinerary/itinerary.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<mat-card>\r\n  <mat-card-content>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <h1>Itinerary Information</h1>\r\n        <hr>\r\n      </div>\r\n      <div>\r\n        <form class=\"example-form\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Client Name\" aria-label=\"Client\" [matAutocomplete]=\"auto\" [formControl]=\"clientCtrl\" >\r\n          </mat-form-field>\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let client of filteredClients | async\" [value]=\"client.email\">\r\n                <span>{{client.fname}} </span>\r\n                <small>City : {{client.city}}</small>\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          <br>\r\n        </form>\r\n      </div>\r\n      <div class=\"row\">\r\n        <input type=\"text\" [(ngModel)]=\"note\">\r\n        <input type=\"text\" [(ngModel)]=\"itineraryName\">\r\n        <button class=\"btn btn-primary\" (click)=\"addEvent()\">Add event</button>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <br>\r\n      <cdk-drop (dropped)=\"onDrop($event)\">\r\n        <div *ngFor=\"let item of EventList; let i = index\" cdkDrag>\r\n          <div class=\"card text-center\">\r\n            <div class=\"card-header\" cdkDragHandle>\r\n              Event {{i+1}}\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">{{item.name}}</h5>\r\n              <p class=\"card-text\">{{item.venue}}</p>\r\n              <button class=\"btn btn-primary\" (click)=\"editEvent(item.id)\" style=\"margin: 5px;\">Edit</button>\r\n              <button class=\"btn btn-primary\" (click)=\"deleteEvent(item.id)\">Delete</button>\r\n            </div>\r\n            <div class=\"card-footer text-muted\">\r\n              2 days ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </cdk-drop>\r\n      <button class=\"btn btn-primary\" (click)=\"addItinerary()\">Save</button>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/itinerary/itinerary.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/itinerary/itinerary.component.ts ***!
  \*************************************************************/
/*! exports provided: ItineraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryComponent", function() { return ItineraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/itinerary-service/itinerary.service */ "./src/app/services/itinerary-service/itinerary.service.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event/event.component */ "./src/app/components/itinerary/event/event.component.ts");
/* harmony import */ var _services_itinerary_service_model_itinerary_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/itinerary-service/model/itinerary.model */ "./src/app/services/itinerary-service/model/itinerary.model.ts");
/* harmony import */ var _services_sharedata_sharedata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sharedata/sharedata.service */ "./src/app/services/sharedata/sharedata.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service_client_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/user-service/client/client.service */ "./src/app/services/user-service/client/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ItineraryComponent = /** @class */ (function () {
    function ItineraryComponent(clientService, dataS, dialog, eventService, itineraryService) {
        var _this = this;
        this.clientService = clientService;
        this.dataS = dataS;
        this.dialog = dialog;
        this.eventService = eventService;
        this.itineraryService = itineraryService;
        this.clientCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.itinerary = new _services_itinerary_service_model_itinerary_model__WEBPACK_IMPORTED_MODULE_4__["Itinerary"]();
        this.isPopupOpened = false;
        this.itineraryName = "New Itinerary Name";
        this.note = "New note";
        this.clientId = "";
        this.clients = [];
        console.log("In constructor" + this.itineraryName);
        this.filteredClients = this.clientCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (client) { return client ? _this._filterStates(client) : _this.clients.slice(); }));
    }
    ItineraryComponent.prototype.onDrop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.eventService.eventList, event.previousIndex, event.currentIndex);
    };
    ItineraryComponent.prototype._filterStates = function (value) {
        var filterValue = value.toLowerCase();
        return this.clients.filter(function (client) { return client.fname.toLowerCase().indexOf(filterValue) === 0; });
    };
    ItineraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClientList().subscribe(function (res) {
            _this.clientService.client = res;
            _this.clients = _this.clientService.client;
        });
        console.log("DAte " + this.itineraryService.getDate());
        this.itineraryService.eventList = [];
        this.dataS.shareUserData();
        this.dataS.currentMessge.subscribe(function (traveAgentdata) {
            _this.itinerary.traveAgentName = traveAgentdata.username;
        });
    };
    Object.defineProperty(ItineraryComponent.prototype, "EventList", {
        get: function () {
            //console.log(JSON.stringify(this.eventService.getAllEvents()));
            return this.eventService.getAllEvents();
        },
        enumerable: true,
        configurable: true
    });
    ItineraryComponent.prototype.getTotalAmount = function (eventList) {
        var tot = 0;
        for (var i in eventList) {
            tot = tot + eventList[i].price;
        }
        return tot;
    };
    ItineraryComponent.prototype.getClientId = function () {
        console.log("cntrl vl: " + this.clientCtrl.value);
        for (var i in this.clients) {
            if (this.clients[i].email == this.clientCtrl.value) {
                this.clientId = this.clients[i]._id;
            }
        }
        this.clients;
    };
    ItineraryComponent.prototype.addEvent = function () {
        var _this = this;
        this.isPopupOpened = true;
        var dialogRef = this.dialog.open(_event_event_component__WEBPACK_IMPORTED_MODULE_3__["EventComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.isPopupOpened = false;
            // this.items = this.EventList;
        });
    };
    ItineraryComponent.prototype.editEvent = function (id) {
        var _this = this;
        this.isPopupOpened = true;
        var event = this.eventService.getAllEvents().find(function (c) { return c.id === id; });
        console.log(event);
        var dialogRef = this.dialog.open(_event_event_component__WEBPACK_IMPORTED_MODULE_3__["EventComponent"], {
            data: event
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.isPopupOpened = false;
        });
    };
    ItineraryComponent.prototype.deleteEvent = function (id) {
        this.eventService.removeEvent(id);
    };
    ItineraryComponent.prototype.addItinerary = function () {
        this.getClientId();
        console.log("In add itinerary" + this.itineraryName);
        this.itinerary.name = this.itineraryName;
        this.itinerary.note = this.note;
        this.itinerary.date_time = this.itineraryService.getDate();
        this.itinerary.totalPrice = this.getTotalAmount(this.EventList);
        this.itinerary.clientId = this.clientId;
        // this.itinerary.itineraryName = this.eventService;
        this.itinerary.events = this.eventService.getAllEvents();
        this.itineraryService.postItinerary(this.itinerary).subscribe(function (res) {
            alert('Itinerary Saved');
            console.log("Saved");
        });
    };
    ItineraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-itinerary',
            template: __webpack_require__(/*! ./itinerary.component.html */ "./src/app/components/itinerary/itinerary.component.html"),
            styles: [__webpack_require__(/*! ./itinerary.component.css */ "./src/app/components/itinerary/itinerary.component.css")],
            providers: [_services_user_service_client_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service_client_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
            _services_sharedata_sharedata_service__WEBPACK_IMPORTED_MODULE_5__["SharedataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_2__["ItineraryService"],
            _services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_2__["ItineraryService"]])
    ], ItineraryComponent);
    return ItineraryComponent;
}());



/***/ }),

/***/ "./src/app/components/itinerary/view-itinerary/view-itinerary.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/itinerary/view-itinerary/view-itinerary.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/itinerary/view-itinerary/view-itinerary.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/itinerary/view-itinerary/view-itinerary.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container\" *ngIf=\"view\">\r\n  <div class=\"card\" *ngFor = \"let iT of itineraryService.iT; let i = index\" >\r\n    <div class=\"card-header\">\r\n      <h4>Itinerary name: {{iT.name}}</h4>\r\n      <h5>{{i+1}}.Tranvel Agent: {{iT.traveAgentName}}</h5>\r\n      <h6>Note: {{iT.note}}</h6>\r\n      <h6>Last updated {{iT.date_time}}</h6>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\" *ngFor=\"let event of iT.events; let i = index\">{{i+1}}. {{event.name}} </h5>\r\n      <button href=\"#\" class=\"btn btn-primary\" (click)=\"editItinerary(iT)\"  >Edit</button> <hr>\r\n      <button href=\"#\" class=\"btn btn-primary\" (click)=\"deleteItinerary(iT._id)\"  >Delete</button> \r\n      <!-- [routerLink]=\"['/edit-itinerary']\" -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"!view\">\r\n  <h2>\r\n    No Itineraries created yet...!\r\n  </h2>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/itinerary/view-itinerary/view-itinerary.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/itinerary/view-itinerary/view-itinerary.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewItineraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewItineraryComponent", function() { return ViewItineraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/itinerary-service/itinerary.service */ "./src/app/services/itinerary-service/itinerary.service.ts");
/* harmony import */ var _services_itinerary_service_model_itinerary_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/itinerary-service/model/itinerary.model */ "./src/app/services/itinerary-service/model/itinerary.model.ts");
/* harmony import */ var _services_sharedata_sharedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/sharedata/sharedata.service */ "./src/app/services/sharedata/sharedata.service.ts");
/* harmony import */ var _edit_itinerary_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-itinerary/edit-itinerary.component */ "./src/app/components/itinerary/edit-itinerary/edit-itinerary.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewItineraryComponent = /** @class */ (function () {
    function ViewItineraryComponent(itineraryService, dataS, dialog) {
        var _this = this;
        this.itineraryService = itineraryService;
        this.dataS = dataS;
        this.dialog = dialog;
        this.itinerary = new _services_itinerary_service_model_itinerary_model__WEBPACK_IMPORTED_MODULE_2__["Itinerary"]();
        this.view = true;
        this.isPopupOpened = false;
        this.dataS.shareUserData();
        this.dataS.currentMessge.subscribe(function (traveAgentdata) {
            _this.itinerary.traveAgentName = traveAgentdata.username;
            _this.refreshItinerryList();
        });
    }
    ViewItineraryComponent.prototype.editItinerary = function (itinerary) {
        var _this = this;
        this.isPopupOpened = true;
        this.itineraryService.id = itinerary._id;
        console.log("id " + this.itineraryService.id);
        var dialogRef = this.dialog.open(_edit_itinerary_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_4__["EditItineraryComponent"], {
            data: { id: this.itineraryService.id,
                itineraryName: itinerary.name,
                note: itinerary.note
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            _this.isPopupOpened = false;
            _this.refreshItinerryList();
        });
        this.itineraryService.eventList = [];
    };
    ViewItineraryComponent.prototype.deleteItinerary = function (id) {
        var _this = this;
        this.itineraryService.deleteItinerary(id).subscribe(function (res) {
            alert("Itinerary deleted");
            _this.refreshItinerryList();
        });
    };
    ViewItineraryComponent.prototype.ngOnInit = function () {
    };
    ViewItineraryComponent.prototype.refreshItinerryList = function () {
        var _this = this;
        this.itineraryService.getItinerrytList(this.itinerary).subscribe(function (res) {
            _this.itineraryService.iT = res;
            // if (this.itineraryService.iT.length == 0) {
            //   this.view = false;
            // }
        });
    };
    ViewItineraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-itinerary',
            template: __webpack_require__(/*! ./view-itinerary.component.html */ "./src/app/components/itinerary/view-itinerary/view-itinerary.component.html"),
            styles: [__webpack_require__(/*! ./view-itinerary.component.css */ "./src/app/components/itinerary/view-itinerary/view-itinerary.component.css")]
        }),
        __metadata("design:paramtypes", [_services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_1__["ItineraryService"],
            _services_sharedata_sharedata_service__WEBPACK_IMPORTED_MODULE_3__["SharedataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ViewItineraryComponent);
    return ViewItineraryComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    width: 50%;\r\n    margin-top: 50px;\r\n    border-style: solid;\r\n    border-radius: 5px;\r\n    border-color:rgb(0, 119, 255);\r\n    background-color:lightblue;\r\n}\r\n\r\n.i1{\r\n    margin-left:35%; \r\n    margin-top: 5%;\r\n    margin-right: 35%;\r\n}\r\n\r\n.responsive {\r\n    width: 100%;\r\n    height: auto;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<flash-messages></flash-messages>\r\n<div id=\"c1\" class=\"container\" >\r\n<img class=\"i1\" src=\"../../../../source/logo.png\" style=\"height: 225px ;width:200px;\">\r\n<form style=\"margin:10px\" (ngSubmit)=\"loginUser()\">\r\n    <fieldset>\r\n      <legend></legend>\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">Email address</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" name = \"email\" [(ngModel)]=\"email\">\r\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputPassword1\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" name=\"password\" [(ngModel)] = \"password\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\" style=\"float: right\">Login</button>\r\n    </fieldset>\r\n  </form>\r\n  <button type=\"submit\" class=\"btn btn-primary\" [routerLink]='[\"/app-password-reset\"]' style=\"float: right\">Forget Password</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (res) {
            console.log(res);
            if (res.state) {
                _this.flashMessage.show('You are logged in', { cssClass: 'alert-success', timeout: 4000 });
                _this.authService.storeData(res.token, res.user);
                _this.selectProfile();
            }
            else {
                _this.flashMessage.show(res.msg, { cssClass: 'alert-success', timeout: 4000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent.prototype.selectProfile = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.data.user;
            console.log(_this.user);
            if (_this.user.usertype === "client") {
                console.log("client age group " + _this.user.agegroup);
                _this.router.navigate(['/client-account']);
            }
            else if (_this.user.usertype === "serviceprovider") {
                console.log("service proveide desi " + _this.user.discription);
                _this.router.navigate(['/service-provider-account']);
            }
            else if (_this.user.usertype === "travelagent") {
                console.log("agent aadmin " + _this.user.isadmin);
                _this.router.navigate(['/travelagent-account']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".i1{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right:5px; \r\n}\r\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <img class=\"i1 responsive\" src=\"../../../../source/logo.png\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <h2 style=\"color:lightcyan\">V Tour</h2>\r\n  </a>\r\n  <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div *ngIf=\"authService.loggedIn()\" style=\"margin-left: 100px\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    \r\n    <ul class=\" nav navbar-nav\">\r\n      <li *ngIf=\"user.usertype=='travelagent'\" style=\"margin-right: 5px\" class=\"dropdown nav-item\" dropdown>\r\n        <a class=\"nav-link\" dropdownToggle role=\"button\"><i class=\"fas fa-copy\"></i> Itenarary<span class=\"caret\"></span></a>\r\n        <div *dropdownMenu class=\"dropdown-menu dropdown-primary\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/itinerary']\">Create New Itenarary</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/view-itinerary']\">View Itenararies</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li *ngIf=\"user.usertype=='travelagent'\" style=\"margin-right: 5px\" class=\"dropdown nav-item \" dropdown>\r\n        <a class=\"nav-link\" dropdownToggle role=\"button\"><i class=\"fas fa-user\"></i> Travel Agent<span class=\"caret\"></span></a>\r\n        <div *dropdownMenu class=\"dropdown-menu\">\r\n          <a *ngIf=\"user.isadmin==true\" class=\"dropdown-item\" [routerLink]=\"['/addnewtravelagent']\">Add New Agent</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/viewtravelagents']\">View Agents</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li *ngIf=\"user.usertype=='travelagent'\" style=\"margin-right: 5px\" class=\"dropdown nav-item \" dropdown>\r\n        <a class=\"nav-link\" dropdownToggle role=\"button\"><i class=\"fab fa-servicestack\"></i> Service Provider<span class=\"caret\"></span></a>\r\n        <div *dropdownMenu class=\"dropdown-menu\">\r\n          <a *ngIf=\"user.isadmin==true\" class=\"dropdown-item\" [routerLink]=\"['/addnewserviceprovider']\">Add Service Provider</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/viewserviceproviders']\">View Service Providers</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li *ngIf=\"user.usertype=='travelagent'\" style=\"margin-right: 5px\" class=\"dropdown nav-item \" dropdown>\r\n        <a class=\"nav-link\" dropdownToggle role=\"button\"><i class=\"fas fa-users\"></i> Clients<span class=\"caret\"></span></a>\r\n        <div *dropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/addnewclient']\">Add New Client</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/viewclients']\">View Clients</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li *ngIf=\"user.usertype!='client'\" style=\"margin-right: 5px\" class=\"dropdown nav-item \" dropdown>\r\n        <a class=\"nav-link\" dropdownToggle role=\"button\"><i class=\"fas fa-dollar-sign\"></i> Payments & Bookings<span class=\"caret\"></span></a>\r\n        <div *dropdownMenu class=\"dropdown-menu\">\r\n          <a *ngIf=\"user.usertype=='travelagent'\" class=\"dropdown-item\" [routerLink]=\"['/viewclientpayment']\">View Client Payments</a>\r\n          <a class=\"dropdown-item\">Make Payment</a>\r\n          <a class=\"dropdown-item\" href=\"#\">View Bookings</a>\r\n          <a class=\"dropdown-item\">Make Booking</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li style=\"margin-right: 5px\" class=\"dropdown nav-item \" dropdown>\r\n        <a class=\"nav-link\" dropdownToggle role=\"button\"><i class=\"far fa-user\"></i> Account<span class=\"caret\"></span></a>\r\n        <div *dropdownMenu class=\"dropdown-menu\">\r\n          <a class=\" dropdown-item\" (click)=\"selectProfile()\">Profile</a>\r\n          <a class=\"dropdown-item\">Settings</a>\r\n          <a class=\"dropdown-item\" href=\"\" (click)=\"logoutUser()\">Logout</a>\r\n        </div>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n  <div style=\"float: right\">\r\n    <ul>\r\n      <li  *ngIf=\"!authService.loggedIn()\" class=\"nav navbar-nav\">\r\n        <a  class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n      </li>\r\n      <li  *ngIf=\"authService.loggedIn()\" class=\"nav navbar-nav\">\r\n        <a class=\"nav-link\" href=\"\" (click)=\"logoutUser()\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(router, authService, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.vroute = "Profile";
    }
    NavComponent.prototype.ngOnInit = function () {
        this.getProfileDetails();
    };
    NavComponent.prototype.selectProfile = function () {
        var us = localStorage.getItem("user");
        this.user = JSON.parse(us);
        if (this.user.usertype === "client") {
            this.router.navigate(['/client-account']);
        }
        else if (this.user.usertype === "serviceprovider") {
            this.router.navigate(['/service-provider-account']);
        }
        else if (this.user.usertype === "travelagent") {
            this.router.navigate(['/travelagent-account']);
        }
    };
    NavComponent.prototype.logoutUser = function () {
        this.authService.logoutUser();
        this.router.navigate(['/login']);
        this.flashMessage.show("You are logged out", { cssClass: 'alert-success', timeout: 1000 });
        return false;
    };
    NavComponent.prototype.getProfileDetails = function () {
        var _this = this;
        console.log('get details');
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.data.user;
        });
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/package/add-new-package/add-new-package.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/package/add-new-package/add-new-package.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bt1{\r\n    margin: 5px;\r\n}\r\n\r\n.card{\r\n    width: 100%;\r\n    height: 75%;\r\n}"

/***/ }),

/***/ "./src/app/components/package/add-new-package/add-new-package.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/package/add-new-package/add-new-package.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n  <div class='col col_2'>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col\"></div>\r\n        <div class=\"col-12\">\r\n          <div>\r\n            <table class=\"table table-responsive-sm\t\">\r\n              <legend>\r\n                <h3>Available Packages</h3>\r\n              </legend>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\" search form-control\" name=\"search\" placeholder=\"Search Here...\" [(ngModel)]=\"searchKeyword\">\r\n              </div>\r\n              <tr *ngFor=\"let pkg of packageService.package | PackageFilter:searchKeyword\">\r\n                <td align=\"center\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"card flex-md-row mb-4 bg-light shadow-sm h-md-250\">\r\n                      <div class=\"card-body d-flex flex-column align-items-start\">\r\n                        <strong class=\"d-inline-block mb-2 text-primary\">{{pkg.name}}</strong>\r\n                        <h6 class=\"mb-0\"></h6>\r\n                        <div class=\"mb-1 text-muted small\">Type : {{pkg.type}}</div>\r\n                        <p class=\"card-text mb-auto small\">Availability : {{pkg.availability}} <br>Discription :\r\n                          {{pkg.discription}} <br>Prize : {{pkg.price}}</p>\r\n                        <a class=\"action-btn\" (click)=\"onEdit(pkg)\">\r\n                          <i class=\"fas fa-pencil-alt  btn-outline-primary btn-sm\"> edit</i>\r\n                        </a>\r\n                        <a class=\"action-btn\" (click)=\"onDelete(pkg._id)\">\r\n                          <i class=\"fas fa-trash-alt  btn-outline-primary btn-sm\"> delete</i>\r\n                        </a>\r\n                        <a class=\"action-btn\">\r\n                          <i class=\"fas fa-trash-alt  btn-outline-primary btn-sm\" (click)=\"showDialog3()\" (click)=\"sendProfilePic(pkg._id)\">\r\n                            add image</i>\r\n                        </a>\r\n                      </div>\r\n                      <img *ngIf=\"pkg.picture!=null\" class=\"card-img-right flex-auto d-none d-lg-block\" alt=\"Thumbnail [200x250]\" src=\"../../../../assets/{{pkg.picture}}\" style=\"width: 200px; height: 250px;\">\r\n                      <img *ngIf=\"pkg.picture==null\" class=\"card-img-right flex-auto d-none d-lg-block\" alt=\"Thumbnail [200x250]\" src=\"../../../../assets//package.png\" style=\"width: 200px; height: 250px;\">\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class='col col_3'>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col\"></div>\r\n        <div class=\"col-12\">\r\n          <div class=\"main-login main-center\">\r\n            <form #packageForm=\"ngForm\" (ngSubmit)=\"onSubmit(packageForm)\">\r\n              <fieldset>\r\n                <legend>\r\n                  <h3>Add/Modify New Package</h3>\r\n                </legend>\r\n                <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"packageService.selectedPackage._id\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"name\" class=\"cols-sm-2 control-label\">Name</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                        <i class=\"fa fa-user fa\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"packageService.selectedPackage.name\"\r\n                        required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"availability\" class=\"cols-sm-2 control-label\">Availability</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                        <i class=\"fas fa-clipboard-list\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"availability\" #name=\"ngModel\" [(ngModel)]=\"packageService.selectedPackage.availability\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"type\" class=\"cols-sm-2 control-label\">Type</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                        <i class=\"fab fa-typo3\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"type\" #name=\"ngModel\" [(ngModel)]=\"packageService.selectedPackage.type\"\r\n                        required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"discription\" class=\"cols-sm-2 control-label\">Discription</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                        <i class=\"fas fa-clipboard-list\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"discription\" #name=\"ngModel\" [(ngModel)]=\"packageService.selectedPackage.discription\"\r\n                        required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"price\" class=\"cols-sm-2 control-label\">Price</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">\r\n                        <i class=\"fas fa-dollar-sign\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                      <input type=\"number\" class=\"form-control\" name=\"price\" #name=\"ngModel\" [(ngModel)]=\"packageService.selectedPackage.price\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <input type=\"hidden\" class=\"form-control\" name=\"spid\" #name=\"ngModel\" [(ngModel)]=\"user._id\">\r\n                <input type=\"hidden\" class=\"form-control\" name=\"spname\" #name=\"ngModel\" [(ngModel)]=\"user.fname\">\r\n                <flash-messages></flash-messages>\r\n                <div class=\"form-group \">\r\n                  <button class=\" bt1 btn btn-primary btn-lg btn-block login-button\" type=\"submit\">Add Package</button>\r\n                  <button class=\" bt1 btn btn-primary right\" type=\"button\" (click)=\"resetForm(packageForm)\">Reset</button>\r\n                </div>\r\n              </fieldset>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-dialog [(visible)]=\"display3\" [modal]=\"true\" [responsive]=\"true\">\r\n  <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\">\r\n  <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload\r\n    an Image</button>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/components/package/add-new-package/add-new-package.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/package/add-new-package/add-new-package.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddNewPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewPackageComponent", function() { return AddNewPackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user-service/serviceProvider/serviceprovider.service */ "./src/app/services/user-service/serviceProvider/serviceprovider.service.ts");
/* harmony import */ var _services_package_service_package_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/package-service/package.service */ "./src/app/services/package-service/package.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var URL = 'http://localhost:4201/packages/api/upload';
var AddNewPackageComponent = /** @class */ (function () {
    function AddNewPackageComponent(packageService, flashMessage, router, authService, serviceProviderService, zone, http) {
        this.packageService = packageService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.authService = authService;
        this.serviceProviderService = serviceProviderService;
        this.zone = zone;
        this.http = http;
        this.title = 'app';
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: URL, itemAlias: 'photo' });
        this.display3 = false;
    }
    AddNewPackageComponent.prototype.ngOnInit = function () {
        this.refreshPackageList();
        this.resetForm();
        this.getProfileDetails();
        this.fileUpload();
    };
    AddNewPackageComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.packageService.selectedPackage = {
            _id: "",
            name: "",
            availability: "",
            type: "",
            discription: "",
            picture: null,
            price: null,
            spid: "",
        };
    };
    AddNewPackageComponent.prototype.resetForm1 = function (form) {
        if (form)
            this.packageService.selectedPackage = {
                _id: "",
                name: "",
                availability: "",
                type: "",
                discription: "",
                picture: null,
                price: null,
                spid: "",
            };
    };
    AddNewPackageComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value._id == "") {
            this.packageService.postPackage(form.value).subscribe(function (res) {
                _this.resetForm1(form);
                _this.refreshPackageList();
                _this.flashMessage.show('Package  Saved', { cssClass: 'alert-success', timeout: 4000 });
            });
        }
        else {
            this.packageService.putPackage(form.value).subscribe(function (res) {
                _this.resetForm1(form);
                _this.refreshPackageList();
                _this.flashMessage.show('Package Updated', { cssClass: 'alert-success', timeout: 4000 });
            });
        }
    };
    AddNewPackageComponent.prototype.refreshPackageList = function () {
        var _this = this;
        console.log("packages");
        this.packageService.getPackageList().subscribe(function (res) {
            _this.packageService.package = res;
        });
    };
    AddNewPackageComponent.prototype.onEdit = function (pkg) {
        this.packageService.selectedPackage = pkg;
    };
    AddNewPackageComponent.prototype.onDelete = function (_id) {
        var _this = this;
        if (confirm('Are you sure to delete this record ?') == true) {
            this.packageService.deletePackage(_id).subscribe(function (res) {
                _this.refreshPackageList();
            });
        }
    };
    AddNewPackageComponent.prototype.getProfileDetails = function () {
        var _this = this;
        console.log('get details');
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.data.user;
            console.log(_this.user);
        });
    };
    AddNewPackageComponent.prototype.showDialog3 = function () {
        this.display3 = true;
    };
    AddNewPackageComponent.prototype.sendProfilePic = function (_id) {
        this.packageService.putPackagePic(_id).subscribe(function (res) {
        });
    };
    AddNewPackageComponent.prototype.fileUpload = function () {
        var _this = this;
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.display3 = false;
            alert('File uploaded successfully');
        };
    };
    AddNewPackageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-package',
            template: __webpack_require__(/*! ./add-new-package.component.html */ "./src/app/components/package/add-new-package/add-new-package.component.html"),
            styles: [__webpack_require__(/*! ./add-new-package.component.css */ "./src/app/components/package/add-new-package/add-new-package.component.css")],
            providers: [_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_7__["PackageService"],
                _services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_6__["ServiceProviderService"]]
        }),
        __metadata("design:paramtypes", [_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_7__["PackageService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_6__["ServiceProviderService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AddNewPackageComponent);
    return AddNewPackageComponent;
}());



/***/ }),

/***/ "./src/app/components/package/package.filter.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/package/package.filter.pipe.ts ***!
  \***********************************************************/
/*! exports provided: PackageFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageFilterPipe", function() { return PackageFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PackageFilterPipe = /** @class */ (function () {
    function PackageFilterPipe() {
    }
    PackageFilterPipe.prototype.transform = function (packages, searchKeyword, pkg) {
        if (!packages || !searchKeyword) {
            return packages;
        }
        else {
            return packages.filter(function (packages) {
                return packages.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                    packages.type.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1;
            });
        }
    };
    PackageFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'PackageFilter'
        })
    ], PackageFilterPipe);
    return PackageFilterPipe;
}());



/***/ }),

/***/ "./src/app/components/package/view-packages/view-packages.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/package/view-packages/view-packages.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search{\r\n    margin-top: 25px;\r\n}"

/***/ }),

/***/ "./src/app/components/package/view-packages/view-packages.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/package/view-packages/view-packages.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container bg-info\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-10\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\" search form-control\" name=\"search\" placeholder=\"search for...\" [(ngModel)]=\"searchKeyword\">\r\n      </div>\r\n      <div>\r\n        <table class=\"table table-responsive-sm\t\">\r\n          <legend>\r\n            <h3>Available Packages</h3>\r\n          </legend>\r\n          <p></p>\r\n          <tr *ngFor=\"let pkg of packageService.package | PackageFilter:searchKeyword\">\r\n              <td *ngIf=\"pkg.spid==spid\" align=\"center\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card flex-md-row mb-4 bg-light shadow-sm h-md-250\">\r\n                    <div class=\"card-body d-flex flex-column align-items-start\">\r\n                      <strong class=\"d-inline-block mb-2 text-primary\">{{pkg.name}}</strong>\r\n                      <h6 class=\"mb-0\"></h6>\r\n                      <div class=\"mb-1 text-muted small\">Type : {{pkg.type}}</div>\r\n                      <p class=\"card-text mb-auto small\">Availability : {{pkg.availability}} <br>Discription :\r\n                        {{pkg.discription}} <br>Prize : {{pkg.price}}</p>\r\n                    </div>\r\n                    <img *ngIf=\"pkg.picture!=null\" class=\"card-img-right flex-auto d-none d-lg-block\" alt=\"Thumbnail [200x250]\" src=\"../../../../assets/{{pkg.picture}}\"\r\n                      style=\"width: 200px; height: 250px;\">\r\n                    <img *ngIf=\"pkg.picture==null\" class=\"card-img-right flex-auto d-none d-lg-block\" alt=\"Thumbnail [200x250]\" src=\"../../../../assets//package.png\"\r\n                      style=\"width: 200px; height: 250px;\">\r\n                  </div>\r\n                </div>\r\n              </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/package/view-packages/view-packages.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/package/view-packages/view-packages.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ViewPackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPackagesComponent", function() { return ViewPackagesComponent; });
/* harmony import */ var _services_sharedata_sp_package_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/sharedata/sp-package.service */ "./src/app/services/sharedata/sp-package.service.ts");
/* harmony import */ var _services_package_service_package_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/package-service/package.model */ "./src/app/services/package-service/package.model.ts");
/* harmony import */ var _services_package_service_package_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/package-service/package.service */ "./src/app/services/package-service/package.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewPackagesComponent = /** @class */ (function () {
    function ViewPackagesComponent(packageService, flashMessage, pkg, router, authService, shared) {
        this.packageService = packageService;
        this.flashMessage = flashMessage;
        this.pkg = pkg;
        this.router = router;
        this.authService = authService;
        this.shared = shared;
    }
    ViewPackagesComponent.prototype.ngOnInit = function () {
        this.getProfileDetails();
        this.refreshPackageList();
        this.spid = this.shared.spid;
    };
    ViewPackagesComponent.prototype.refreshPackageList = function () {
        var _this = this;
        this.packageService.getPackageList().subscribe(function (res) {
            _this.packageService.package = res;
        });
    };
    ViewPackagesComponent.prototype.getProfileDetails = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.data.user;
        });
    };
    ViewPackagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-view-packages',
            template: __webpack_require__(/*! ./view-packages.component.html */ "./src/app/components/package/view-packages/view-packages.component.html"),
            styles: [__webpack_require__(/*! ./view-packages.component.css */ "./src/app/components/package/view-packages/view-packages.component.css")],
            providers: [_services_package_service_package_model__WEBPACK_IMPORTED_MODULE_1__["Package"], _services_package_service_package_service__WEBPACK_IMPORTED_MODULE_2__["PackageService"]],
        }),
        __metadata("design:paramtypes", [_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_2__["PackageService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_package_service_package_model__WEBPACK_IMPORTED_MODULE_1__["Package"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_sharedata_sp_package_service__WEBPACK_IMPORTED_MODULE_0__["SpPackageService"]])
    ], ViewPackagesComponent);
    return ViewPackagesComponent;
}());



/***/ }),

/***/ "./src/app/components/password-reset/password-reset.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/password-reset/password-reset.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/password-reset/password-reset.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/password-reset/password-reset.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <form style=\"margin-top: 25px;\" #pwForm=\"ngForm\" (ngSubmit)=\"onSubmit(pwForm)\">\r\n    <fieldset>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">Email address</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"\r\n          pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"email\" #emailref=\"ngModel\" [(ngModel)]=\"email\" required>\r\n        <div *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class=\"aler alert-danger\">\r\n          <div [hidden]=\"!emailref.errors?.pattern\">\r\n            Invalid Email Address\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group \">\r\n        <button class=\"btn btn-primary btn-lg btn-block login-button\" type=\"submit\" [disabled]=\"!pwForm.valid\">Save</button>\r\n      </div>\r\n    </fieldset>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/password-reset/password-reset.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/password-reset/password-reset.component.ts ***!
  \***********************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var _services_password_reset_service_password_reset_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/password-reset-service/password-reset.service */ "./src/app/services/password-reset-service/password-reset.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent(passwordResetService, authService, router, flashMessage, zone, http) {
        this.passwordResetService = passwordResetService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.zone = zone;
        this.http = http;
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
    };
    PasswordResetComponent.prototype.onSubmit = function (form) {
        console.log(form.value);
        this.passwordResetService.postEmail(form.value).subscribe(function (res) {
        });
    };
    PasswordResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-password-reset',
            template: __webpack_require__(/*! ./password-reset.component.html */ "./src/app/components/password-reset/password-reset.component.html"),
            styles: [__webpack_require__(/*! ./password-reset.component.css */ "./src/app/components/password-reset/password-reset.component.css")]
        }),
        __metadata("design:paramtypes", [_services_password_reset_service_password_reset_service__WEBPACK_IMPORTED_MODULE_0__["PasswordResetService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/components/payments/view-client-payments/client-payment-fliter.pipe.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/payments/view-client-payments/client-payment-fliter.pipe.ts ***!
  \****************************************************************************************/
/*! exports provided: ClientPaymentFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPaymentFilterPipe", function() { return ClientPaymentFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClientPaymentFilterPipe = /** @class */ (function () {
    function ClientPaymentFilterPipe() {
    }
    ClientPaymentFilterPipe.prototype.transform = function (payments, searchKeyword, Payments) {
        if (!payments || !searchKeyword) {
            return payments;
        }
        else {
            return payments.filter(function (payments) {
                return payments.clientname.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                    payments.status.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1;
            });
        }
    };
    ClientPaymentFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'ClientPaymentFilter'
        })
    ], ClientPaymentFilterPipe);
    return ClientPaymentFilterPipe;
}());



/***/ }),

/***/ "./src/app/components/payments/view-client-payments/view-client-payments.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/payments/view-client-payments/view-client-payments.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search{\r\n    margin-top: 25px;\r\n}"

/***/ }),

/***/ "./src/app/components/payments/view-client-payments/view-client-payments.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/payments/view-client-payments/view-client-payments.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container bg-info\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-10\">\r\n      <div class=\" search form-group\">\r\n        <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"search Here...\" [(ngModel)]=\"searchKeyword\">\r\n      </div>\r\n      <div>\r\n        <table class=\"table table-responsive-sm\t\">\r\n          <tr *ngFor=\"let sp of itenararyPaymentService.itenararypayment| ClientPaymentFilter:searchKeyword\">\r\n            <td align=\"center\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"card bg-light flex-md-row mb-4 shadow-sm h-md-250\">\r\n                  <div class=\"card-body d-flex flex-column align-items-start\">\r\n                    <strong class=\"d-inline-block mb-2 text-primary\">Client Name : {{sp.clientname}}</strong>\r\n                    <h6 class=\"mb-0\"></h6>\r\n                    <div class=\"mb-1 text-muted\">Amount : {{sp.amount}}</div>\r\n                    <div class=\"mb-1 text-muted\">Date : {{sp.date}}</div>\r\n                    <div class=\"mb-1 text-muted\">Status : {{sp.status}}</div>\r\n                    <a *ngIf=\"sp.status=='Waiting for Confirmation'\" class=\"action-btn\" (click)=\"onConfirm(sp)\">\r\n                      <i class=\"fas fa-money-alt  btn-outline-primary btn-sm\">Confirm Payment</i>\r\n                    </a>\r\n                    <!--a class=\"action-btn\" (click)=\"onDelete(sp._id)\">\r\n                      <i class=\"fas fa-trash-alt  btn-outline-primary btn-sm\"> delete</i>\r\n                    </a-->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/payments/view-client-payments/view-client-payments.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/payments/view-client-payments/view-client-payments.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ViewClientPaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClientPaymentsComponent", function() { return ViewClientPaymentsComponent; });
/* harmony import */ var _services_payment_service_itenarary_payment_itenarary_payment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/payment-service/itenarary-payment/itenarary-payment.model */ "./src/app/services/payment-service/itenarary-payment/itenarary-payment.model.ts");
/* harmony import */ var _services_payment_service_itenarary_payment_itenarary_payment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/payment-service/itenarary-payment/itenarary-payment.service */ "./src/app/services/payment-service/itenarary-payment/itenarary-payment.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewClientPaymentsComponent = /** @class */ (function () {
    function ViewClientPaymentsComponent(itenararyPaymentService, itenararyPayment, flashMessage, router) {
        this.itenararyPaymentService = itenararyPaymentService;
        this.itenararyPayment = itenararyPayment;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ViewClientPaymentsComponent.prototype.ngOnInit = function () {
        this.refreshPaymentList();
    };
    ViewClientPaymentsComponent.prototype.refreshPaymentList = function () {
        var _this = this;
        this.itenararyPaymentService.getItenararyPaymentList().subscribe(function (res) {
            _this.itenararyPaymentService.itenararypayment = res;
        });
    };
    ViewClientPaymentsComponent.prototype.onConfirm = function (itenararypayment) {
        var _this = this;
        this.itenararyPaymentService.putItenararyPayment(itenararypayment).subscribe(function (res) {
            _this.refreshPaymentList();
            _this.flashMessage.show('Payment Status Updated', { cssClass: 'alert-success', timeout: 4000 });
            console.log("Updated");
            console.log(itenararypayment);
        });
    };
    ViewClientPaymentsComponent.prototype.onDelete = function (_id) {
        var _this = this;
        if (confirm('Are you sure to delete this record ?') == true) {
            this.itenararyPaymentService.deleteItenararyPayment(_id).subscribe(function (res) {
                _this.refreshPaymentList();
            });
        }
    };
    ViewClientPaymentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view-client-payments',
            template: __webpack_require__(/*! ./view-client-payments.component.html */ "./src/app/components/payments/view-client-payments/view-client-payments.component.html"),
            styles: [__webpack_require__(/*! ./view-client-payments.component.css */ "./src/app/components/payments/view-client-payments/view-client-payments.component.css")],
            providers: [_services_payment_service_itenarary_payment_itenarary_payment_service__WEBPACK_IMPORTED_MODULE_1__["ItenararyPaymentService"], _services_payment_service_itenarary_payment_itenarary_payment_model__WEBPACK_IMPORTED_MODULE_0__["ItenararyPayment"]]
        }),
        __metadata("design:paramtypes", [_services_payment_service_itenarary_payment_itenarary_payment_service__WEBPACK_IMPORTED_MODULE_1__["ItenararyPaymentService"],
            _services_payment_service_itenarary_payment_itenarary_payment_model__WEBPACK_IMPORTED_MODULE_0__["ItenararyPayment"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ViewClientPaymentsComponent);
    return ViewClientPaymentsComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header-bar></app-header-bar> -->\n<flash-messages></flash-messages>\n<app-travel-agent-account></app-travel-agent-account>\n<!--app-service-provider-account></app-service-provider-account-->"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/serviceProvider/add-new-service-provider/add-new-service-provider.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/serviceProvider/add-new-service-provider/add-new-service-provider.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/serviceProvider/add-new-service-provider/add-new-service-provider.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/serviceProvider/add-new-service-provider/add-new-service-provider.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class = \"container\">\r\n    <div class=\"row\">\r\n      <div class =\"col\"></div>  \r\n      <div class=\"col-6\">\r\n        <div class=\"main-login main-center\">\r\n              <form style=\"margin-top:25px;\" #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\">\r\n                <fieldset>\r\n                  <legend><h3>Add Service Provider</h3></legend>\r\n                \r\n                <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider._id\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"fname\" class=\"cols-sm-2 control-label\">First Name</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"fname\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.fname\"  required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!--div class=\"form-group\">\r\n                  <label for=\"username\" class=\"cols-sm-2 control-label\">User Name</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"username\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.username\"  required>\r\n                    </div>\r\n                  </div>\r\n                </div-->\r\n                <div class=\"form-group\">\r\n                  <label for=\"email\" class=\"cols-sm-2 control-label\">Email</label>\r\n                    <div class=\"cols-sm-10\">\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\"><i class=\"fas fa-envelope\" aria-hidden=\"true\"></i></span>\r\n                        <input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"email\" #emailref=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.email\" required>\r\n                    </div>\r\n                    <div *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class=\"aler alert-danger\">\r\n                      <div [hidden]=\"!emailref.errors?.pattern\">\r\n                        Invalid Email Address\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"password\" class=\"form-control\" name=\"password\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.password\"  required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"password\" class=\"cols-sm-2 control-label\">Re Enter Password</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"password\" class=\"form-control\" name=\"rePassword\" #name=\"ngModel\" [(ngModel)]=\"rePassword\" required>\r\n                    </div>\r\n                    <p style=\"color:red\" *ngIf=\"serviceProviderService.selectedServiceProvider.password!='' && serviceProviderService.selectedServiceProvider.password!=rePassword\">Passwords\r\n                      Do Not Match !</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"telephone\" class=\"cols-sm-2 control-label\">Telephone No</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fas fa-phone-square\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"telephone\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.telephone\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"address\" class=\"cols-sm-2 control-label\">Address</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fas fa-home\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"address\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.address\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"type\" class=\"cols-sm-2 control-label\">Type</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fab fa-typo3\" aria-hidden=\"true\"></i></span>\r\n                      <select type=\"text\" class=\"form-control\" name=\"type\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.type\" required>\r\n                        <option value=\"Transport\">Transport</option>\r\n                        <option value=\"Hotel\">Hotel</option>\r\n                        <option value=\"Resort\">Resort</option>\r\n                        <option value=\"Park\">Park</option>\r\n                        <option value=\"Playground\">Playground</option>\r\n                        <option value=\"Other\">Other</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"discription\" class=\"cols-sm-2 control-label\">Discription</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fas fa-clipboard-list\" aria-hidden=\"true\"></i></span>\r\n                      <textarea class=\"form-control\" name=\"discription\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.discription\"  ></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>  \r\n                <flash-messages></flash-messages>\r\n                <div class=\"form-group \">\r\n                  <button style=\"margin-top:5px;\" class=\"btn btn-primary btn-lg btn-block login-button\" type=\"submit\" [disabled]=\"!userForm.valid\">Add Service Provider</button>\r\n                  <button style=\"margin-top:5px;\" class=\"btn btn-primary btn-lg btn-block\" type=\"button\" (click)=\"resetForm(userForm)\">Reset</button>\r\n                </div>\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n            <div class=\"col\"></div>\r\n        </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/components/serviceProvider/add-new-service-provider/add-new-service-provider.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/serviceProvider/add-new-service-provider/add-new-service-provider.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddNewServiceProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewServiceProviderComponent", function() { return AddNewServiceProviderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user-service/serviceProvider/serviceprovider.service */ "./src/app/services/user-service/serviceProvider/serviceprovider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNewServiceProviderComponent = /** @class */ (function () {
    function AddNewServiceProviderComponent(serviceProviderService, flashMessage, router) {
        this.serviceProviderService = serviceProviderService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    AddNewServiceProviderComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    AddNewServiceProviderComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.serviceProviderService.selectedServiceProvider = {
            _id: "",
            fname: "",
            username: "",
            password: "",
            email: "",
            telephone: [null],
            address: "",
            type: "",
            discription: "",
            profilepic: "",
        };
    };
    AddNewServiceProviderComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.rePassword == form.value.password) {
            if (form.value._id == "") {
                this.serviceProviderService.postServiceProvider(form.value).subscribe(function (res) {
                    _this.resetForm(form);
                    _this.flashMessage.show('Service Provider Saved', { cssClass: 'alert-success', timeout: 4000 });
                    alert('Service Provider Saved');
                    _this.router.navigateByUrl('/travelagent-account');
                });
            }
            else {
                this.serviceProviderService.putServiceProvider(form.value).subscribe(function (res) {
                    _this.resetForm(form);
                    _this.flashMessage.show('Service Provider Updated', { cssClass: 'alert-success', timeout: 4000 });
                    alert('Service Provider Updates');
                    _this.router.navigateByUrl('/travelagent-account');
                });
            }
        }
        else {
            alert("Passwords Do Not Match !");
        }
    };
    AddNewServiceProviderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-service-provider',
            template: __webpack_require__(/*! ./add-new-service-provider.component.html */ "./src/app/components/serviceProvider/add-new-service-provider/add-new-service-provider.component.html"),
            styles: [__webpack_require__(/*! ./add-new-service-provider.component.css */ "./src/app/components/serviceProvider/add-new-service-provider/add-new-service-provider.component.css")],
            providers: [_services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_3__["ServiceProviderService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_3__["ServiceProviderService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddNewServiceProviderComponent);
    return AddNewServiceProviderComponent;
}());



/***/ }),

/***/ "./src/app/components/serviceProvider/edit-service-provider/edit-service-provider.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/serviceProvider/edit-service-provider/edit-service-provider.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/serviceProvider/edit-service-provider/edit-service-provider.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/serviceProvider/edit-service-provider/edit-service-provider.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div *ngFor=\"let sp of serviceProviderService.sp\">\r\n  <div *ngIf=\"user._id==sp._id\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col\"></div>\r\n        <div class=\"col-6\">\r\n          <div style=\"margin-top: 20px\" class=\"main-login main-center\">\r\n            <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\">\r\n              <fieldset>\r\n                <legend>Edit Service Provider</legend>\r\n                <br>\r\n                <input type=\"hidden\" value={{user._id}} name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"sp._id\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"fname\" class=\"cols-sm-2 control-label\">First Name</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" value={{user.fname}} class=\"form-control\" name=\"fname\" #name=\"ngModel\"\r\n                        [(ngModel)]=\"sp.fname\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"username\" class=\"cols-sm-2 control-label\">User Name</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" value={{user.username}} class=\"form-control\" name=\"username\" #name=\"ngModel\"\r\n                        [(ngModel)]=\"sp.username\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"email\" class=\"cols-sm-2 control-label\">Email</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-user fa-lg\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"email\" value={{user.email}} class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\r\n                        name=\"email\" #emailref=\"ngModel\" [(ngModel)]=\"sp.email\">\r\n                    </div>\r\n                    <div *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class=\"aler alert-danger\">\r\n                      <div [hidden]=\"!emailref.errors?.pattern\">\r\n                        Invalid Email Address\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"telephone\" class=\"cols-sm-2 control-label\">Telephone No</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" value={{user.telephone}} class=\"form-control\" name=\"telephone\" #name=\"ngModel\"\r\n                        [(ngModel)]=\"sp.telephone\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"address\" class=\"cols-sm-2 control-label\">Address</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" value={{user.address}} class=\"form-control\" name=\"address\" #name=\"ngModel\"\r\n                        [(ngModel)]=\"sp.address\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"type\" class=\"cols-sm-2 control-label\">Type</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" value={{user.type}} class=\"form-control\" name=\"type\" #name=\"ngModel\"\r\n                        [(ngModel)]=\"sp.type\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"discription\" class=\"cols-sm-2 control-label\">Discription</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" value={{user.discription}} class=\"form-control\" name=\"discription\" #name=\"ngModel\"\r\n                        [(ngModel)]=\"sp.discription\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <flash-messages></flash-messages>\r\n                <div class=\"form-group \">\r\n                  <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Update Service Provider</button>\r\n                </div>\r\n              </fieldset>\r\n            </form>\r\n            <hr>\r\n            <button class=\"btn btn-info\" (click)=\"showDialog1()\">Change Password</button>\r\n            <hr>\r\n            <button class=\"btn btn-info\" (click)=\"showDialog3()\">Change Profile Picture</button>\r\n            <hr>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<p-dialog [(visible)]=\"display1\" [modal]=\"true\" [responsive]=\"true\">\r\n  <div id=\"c1\" class=\"container\">\r\n    <form style=\"margin:10px\" (ngSubmit)=\"loginUser()\">\r\n      <fieldset>\r\n        <h5>Please Re Enter Email & Password</h5>\r\n        <hr>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputEmail1\">Email address</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"\r\n            pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"email\" #emailref=\"ngModel\" [(ngModel)]=\"email\">\r\n          <div *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class=\"aler alert-danger\">\r\n            <div [hidden]=\"!emailref.errors?.pattern\">\r\n              Invalid Email Address\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputPassword1\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" name=\"password\"\r\n            [(ngModel)]=\"password\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"float: right\">Login</button>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</p-dialog>\r\n\r\n<p-dialog [(visible)]=\"display2\" [modal]=\"true\" [responsive]=\"true\">\r\n  <div class=\"container-fluid\">\r\n    <form style=\"margin-top: 25px;\" #pwForm=\"ngForm\" (ngSubmit)=\"sendPassword(pwForm)\">\r\n      <fieldset>\r\n        <legend>\r\n        </legend>\r\n        <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"user._id\">\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n          <div class=\"cols-sm-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\r\n              <input type=\"password\" class=\"form-control\" name=\"password\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.password\"\r\n                required>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\" class=\"cols-sm-2 control-label\">Re Enter Password</label>\r\n          <div class=\"cols-sm-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\r\n              <input type=\"password\" class=\"form-control\" name=\"rePassword\" #name=\"ngModel\" [(ngModel)]=\"rePassword\"\r\n                required>\r\n            </div>\r\n            <p style=\"color:red\" *ngIf=\"serviceProviderService.selectedServiceProvider.password!='' && serviceProviderService.selectedServiceProvider.password!=rePassword\">Passwords\r\n              Do Not Match !</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group \">\r\n          <button class=\"btn btn-primary btn-lg btn-block login-button\" type=\"submit\" [disabled]=\"!pwForm.valid\">Save</button>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</p-dialog>\r\n<p-dialog [(visible)]=\"display3\" [modal]=\"true\" [responsive]=\"true\">\r\n  <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\r\n  <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload\r\n    an Image</button>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/components/serviceProvider/edit-service-provider/edit-service-provider.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/serviceProvider/edit-service-provider/edit-service-provider.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditServiceProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServiceProviderComponent", function() { return EditServiceProviderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user-service/serviceProvider/serviceprovider.service */ "./src/app/services/user-service/serviceProvider/serviceprovider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var URL = 'http://localhost:4201/serviceproviders/api/upload';
var EditServiceProviderComponent = /** @class */ (function () {
    function EditServiceProviderComponent(serviceProviderService, authService, router, flashMessage, zone, http) {
        this.serviceProviderService = serviceProviderService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.zone = zone;
        this.http = http;
        this.title = 'app';
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: URL, itemAlias: 'photo' });
        this.display1 = false;
        this.display2 = false;
        this.display3 = false;
    }
    EditServiceProviderComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.refreshServiceProviderList();
        this.getProfileDetails();
        this.fileUpload();
    };
    EditServiceProviderComponent.prototype.getProfileDetails = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.data.user;
        });
    };
    EditServiceProviderComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.serviceProviderService.selectedServiceProvider = {
            _id: "",
            fname: "",
            username: "",
            password: "",
            email: "",
            telephone: [null],
            address: "",
            type: "",
            discription: "",
            profilepic: "",
        };
    };
    EditServiceProviderComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value._id == "") {
            this.serviceProviderService.postServiceProvider(form.value).subscribe(function (res) {
                alert('Details Saved');
                _this.resetForm(form);
                _this.zone.run(function () {
                    _this.router.navigateByUrl('/service-provider-account');
                });
            });
        }
        else {
            this.serviceProviderService.putServiceProvider(form.value).subscribe(function (res) {
                _this.getProfileDetails();
                alert('Details Saved');
                _this.resetForm(form);
                _this.zone.run(function () {
                    _this.router.navigateByUrl('/service-provider-account');
                });
            });
        }
    };
    EditServiceProviderComponent.prototype.refreshServiceProviderList = function () {
        var _this = this;
        this.serviceProviderService.getServiceProviderList().subscribe(function (res) {
            _this.serviceProviderService.sp = res;
        });
    };
    EditServiceProviderComponent.prototype.onEdit = function (sp) {
        this.serviceProviderService.selectedServiceProvider = sp;
        this.getProfileDetails();
    };
    EditServiceProviderComponent.prototype.showDialog1 = function () {
        this.display1 = true;
    };
    EditServiceProviderComponent.prototype.showDialog2 = function () {
        this.display2 = true;
    };
    EditServiceProviderComponent.prototype.showDialog3 = function () {
        this.display3 = true;
    };
    EditServiceProviderComponent.prototype.loginUser = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (res) {
            if (res.state) {
                _this.showDialog2();
                _this.display1 = false;
            }
            else {
                alert(res.msg);
            }
        });
    };
    EditServiceProviderComponent.prototype.sendPassword = function (form) {
        var _this = this;
        if (this.rePassword == form.value.password) {
            this.serviceProviderService.putServiceProviderPw(form.value).subscribe(function (res) {
                alert('Password Updated');
                _this.display2 = false;
            });
        }
        else {
            alert("Passwords Do Not Match !");
        }
    };
    EditServiceProviderComponent.prototype.sendProfilePic = function () {
        this.serviceProviderService.putServiceProviderPic(this.user).subscribe(function (res) {
        });
    };
    EditServiceProviderComponent.prototype.fileUpload = function () {
        var _this = this;
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.sendProfilePic();
            _this.display3 = false;
            alert('File uploaded successfully');
        };
    };
    EditServiceProviderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-service-provider',
            template: __webpack_require__(/*! ./edit-service-provider.component.html */ "./src/app/components/serviceProvider/edit-service-provider/edit-service-provider.component.html"),
            styles: [__webpack_require__(/*! ./edit-service-provider.component.css */ "./src/app/components/serviceProvider/edit-service-provider/edit-service-provider.component.css")],
            providers: [_services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_6__["ServiceProviderService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_6__["ServiceProviderService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], EditServiceProviderComponent);
    return EditServiceProviderComponent;
}());



/***/ }),

/***/ "./src/app/components/serviceProvider/service-provider-account/service-provider-account.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/serviceProvider/service-provider-account/service-provider-account.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-color:white;;\r\n    background-attachment:scroll;\r\n    background-repeat:no-repeat;\r\n    background-position:center;\r\n    background-size:cover;\r\n    height:2000px;\r\n    }\r\n    /*----------------Containers--------------------*/\r\n    .card \r\n    {\r\n    padding: 20px;\r\n    margin: 10px;\r\n    border:0px solid white;\r\n    box-shadow:0px 7px 16px 0px rgba(0, 0, 0, 0.09);\r\n    align-content: center;\r\n    align-items: center;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    }\r\n    .card-title\r\n    {\r\n    color:black;\r\n    font-size:16px;\r\n    text-align:center;\r\n    }\r\n    .card-text\r\n    {\r\n    color:black;\r\n    font-size:12px;\t\r\n    text-align:center;\r\n    \r\n    }\r\n    .list-inline-item \r\n    {\r\n    font-size:13px;\r\n    color:black;\r\n     }\r\n    .address .w3-ul li\r\n     {\r\n        border:0px solid white;\r\n        line-height:1px;\r\n    }\r\n    .l1{\r\n        list-style: none;\r\n        color: black;\r\n    }\r\n    #courses  {\r\n    text-align:center;\r\n    }\r\n    .profile{\r\n    margin: 20px;\r\n}\r\n    .image{\r\n    padding: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/serviceProvider/service-provider-account/service-provider-account.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/serviceProvider/service-provider-account/service-provider-account.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n  <div class=\"container-fluid\" id=\"body-container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"card\" style=\"width:100%\">\r\n          <img *ngIf=\"user.profilepic==null\" class=\"image card-img-top\" src=\"../../../../assets/default.png\" alt=\"Card image\" style=\"width:auto;height:300px\">\r\n          <img *ngIf=\"user.profilepic!=null\" class=\"image card-img-top\" src=\"../../../../assets/{{user.profilepic}}\" alt=\"Card image\"style=\"width:auto;height:400px\">            \r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title\">{{user.fname}}</h4>\r\n            <div class=\"address\">\t\t\t\t\t\t\t\t\r\n              <ul class=\" l1 w3-ul w3-small\">\r\n                <br>\r\n                <li><i class=\"fas fa-envelope\" aria-hidden=\"true\"></i> Email : {{user.email}}</li><br>\r\n                <li><i class=\"fas fa-phone-square\" aria-hidden=\"true\"></i> Telephone : {{user.telephone}}</li><br>\r\n                <li><i class=\"fas fa-home\" aria-hidden=\"true\"></i> Address : {{user.address}}</li><br>\r\n                <li><i class=\"fab fa-typo3\" aria-hidden=\"true\"></i> Type : {{user.type}}</li><br>\r\n                <li><i class=\"fas fa-clipboard-list\" aria-hidden=\"true\"></i> Discription : {{user.discription}}</li><br>\r\n              </ul>\r\n              <button class=\"btn btn-primary\" type=\"button\" [routerLink]='[\"/editserviceprovider\"]'>Edit</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-8\" style=\"background-color:lightblue;\">\r\n        \r\n        <br><br>\r\n        <div class='container-fluid'>\r\n          <app-add-new-package></app-add-new-package>\r\n        </div>\r\n      </div>\r\n    </div>    \r\n  </div>\r\n        \r\n  "

/***/ }),

/***/ "./src/app/components/serviceProvider/service-provider-account/service-provider-account.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/serviceProvider/service-provider-account/service-provider-account.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ServiceProviderAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderAccountComponent", function() { return ServiceProviderAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user-service/serviceProvider/serviceprovider.service */ "./src/app/services/user-service/serviceProvider/serviceprovider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceProviderAccountComponent = /** @class */ (function () {
    function ServiceProviderAccountComponent(authService, router, serviceProviderService, zone) {
        this.authService = authService;
        this.router = router;
        this.serviceProviderService = serviceProviderService;
        this.zone = zone;
    }
    ServiceProviderAccountComponent.prototype.ngOnInit = function () {
        this.getProfileDetails();
    };
    ServiceProviderAccountComponent.prototype.getProfileDetails = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.data.user;
            console.log(_this.user);
        });
    };
    ServiceProviderAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-provider-account',
            template: __webpack_require__(/*! ./service-provider-account.component.html */ "./src/app/components/serviceProvider/service-provider-account/service-provider-account.component.html"),
            styles: [__webpack_require__(/*! ./service-provider-account.component.css */ "./src/app/components/serviceProvider/service-provider-account/service-provider-account.component.css")],
            providers: [_services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_3__["ServiceProviderService"]]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_3__["ServiceProviderService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ServiceProviderAccountComponent);
    return ServiceProviderAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/serviceProvider/service-provider-filter.pipe.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/serviceProvider/service-provider-filter.pipe.ts ***!
  \****************************************************************************/
/*! exports provided: ServiceProviderFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderFilterPipe", function() { return ServiceProviderFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServiceProviderFilterPipe = /** @class */ (function () {
    function ServiceProviderFilterPipe() {
    }
    ServiceProviderFilterPipe.prototype.transform = function (serviceproviders, searchKeyword, ServiceProvider) {
        if (!serviceproviders || !searchKeyword) {
            return serviceproviders;
        }
        else {
            return serviceproviders.filter(function (serviceproviders) {
                return serviceproviders.fname.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                    serviceproviders.address.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                    serviceproviders.telephone.toString().indexOf(searchKeyword.toString()) !== -1 ||
                    serviceproviders.type.toString().indexOf(searchKeyword.toString()) !== -1 ||
                    serviceproviders.email.toString().indexOf(searchKeyword.toString()) !== -1;
            });
        }
    };
    ServiceProviderFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'ServiceProviderFilter'
        })
    ], ServiceProviderFilterPipe);
    return ServiceProviderFilterPipe;
}());



/***/ }),

/***/ "./src/app/components/serviceProvider/view-service-providers/view-service-providers.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/serviceProvider/view-service-providers/view-service-providers.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search{\r\n    margin-top:30px;\r\n}\r\n.image{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n    margin-right: 20px;\r\n}"

/***/ }),

/***/ "./src/app/components/serviceProvider/view-service-providers/view-service-providers.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/serviceProvider/view-service-providers/view-service-providers.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container bg-info\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-10\">\r\n      <div class=\"search form-group\">\r\n        <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"search for...\" [(ngModel)]=\"searchKeyword\">\r\n      </div>\r\n      <div>\r\n        <table class=\"table table-responsive-sm\t\">\r\n          <tr *ngFor=\"let sp of serviceProviderService.sp | ServiceProviderFilter:searchKeyword\">\r\n            <td align=\"center\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"card bg-light flex-md-row mb-4 shadow-sm h-md-250\">\r\n                  <div class=\"card-body d-flex flex-column align-items-start\">\r\n                    <strong class=\"d-inline-block mb-2 text-primary\">{{sp.fname}}</strong>\r\n                    <h6 class=\"mb-0\"></h6>\r\n                    <div class=\"mb-1 text-muted small\">{{sp.email}}</div>\r\n                    <br>\r\n                    <p class=\"card-text mb-auto\">Telephone : {{sp.telephone}}\r\n                      <br>Address : {{sp.address}}\r\n                      <br>Type : {{sp.type}}\r\n                      <br><br>{{sp.discription}}</p>\r\n                    <a *ngIf=\"user.isadmin==true\" class=\"action-btn\" (click)=\"onEdit(sp)\">\r\n                      <i class=\"fas fa-pencil-alt  btn-outline-primary btn-sm\" (click)=\"showDialog()\"> edit</i>\r\n                    </a>\r\n                    <a *ngIf=\"user.isadmin==true\" class=\"action-btn\" (click)=\"onDelete(sp._id)\">\r\n                      <i class=\"fas fa-trash-alt  btn-outline-primary btn-sm\"> delete</i>\r\n                    </a>\r\n                    <a class=\"action-btn\" (click)=\"onViewPackages(sp._id)\">\r\n                      <i class=\"fas fa-  btn-outline-primary btn-sm\"> View Packages</i>\r\n                    </a>\r\n                  </div>\r\n                  <img *ngIf=\"sp.profilepic==null\" class=\"image card-img-top\" src=\"../../../../assets/default.png\" alt=\"Card image\" style=\"width: 200px; height: 80%;\">\r\n                  <img *ngIf=\"sp.profilepic!=null\" class=\"image card-img-top\" src=\"../../../../assets/{{sp.profilepic}}\" alt=\"Card image\" style=\"width: 200px; height: 220px;\">\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>\r\n<p-dialog [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"600\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-10\">\r\n      <div class=\"main-login main-center\">\r\n          <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\">\r\n            <fieldset>\r\n              <legend>Update Service Provider :</legend>\r\n              <br>\r\n              <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider._id\">\r\n              <div class=\"form-group\">\r\n                <label for=\"fname\" class=\"cols-sm-2 control-label\">First Name</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"fname\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.fname\"\r\n                      required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"username\" class=\"cols-sm-2 control-label\">User Name</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.username\"\r\n                      required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"email\" class=\"cols-sm-2 control-label\">Email</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fas fa-envelope\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"email\" #emailref=\"ngModel\"\r\n                      [(ngModel)]=\"serviceProviderService.selectedServiceProvider.email\" required>\r\n                  </div>\r\n                  <div *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class=\"aler alert-danger\">\r\n                    <div [hidden]=\"!emailref.errors?.pattern\">\r\n                      Invalid Email Address\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"telephone\" class=\"cols-sm-2 control-label\">Telephone No</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"telephone\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.telephone\" required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"address\" class=\"cols-sm-2 control-label\">Address</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"address\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.address\" required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"type\" class=\"cols-sm-2 control-label\">Type</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"type\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.type\" required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"discription\" class=\"cols-sm-2 control-label\">Discription</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"discription\" #name=\"ngModel\" [(ngModel)]=\"serviceProviderService.selectedServiceProvider.discription\" required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <flash-messages></flash-messages>\r\n              <div class=\"form-group \">\r\n                <button style=\"margin-top:5px;\" class=\"btn btn-primary btn-lg btn-block login-button\" type=\"submit\" [disabled]=\"!userForm.valid\">Update Service Provider</button>\r\n                <button style=\"margin-top:5px;\" class=\"btn btn-primary btn-lg btn-block\" type=\"button\" (click)=\"resetForm(userForm)\">Reset</button>\r\n              </div>\r\n            </fieldset>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\"></div>\r\n    </div>\r\n  </div>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/components/serviceProvider/view-service-providers/view-service-providers.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/serviceProvider/view-service-providers/view-service-providers.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ViewServiceProvidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewServiceProvidersComponent", function() { return ViewServiceProvidersComponent; });
/* harmony import */ var _services_sharedata_sp_package_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/sharedata/sp-package.service */ "./src/app/services/sharedata/sp-package.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user-service/serviceProvider/serviceprovider.service */ "./src/app/services/user-service/serviceProvider/serviceprovider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewServiceProvidersComponent = /** @class */ (function () {
    function ViewServiceProvidersComponent(serviceProviderService, flashMessage, router, authService, shared) {
        this.serviceProviderService = serviceProviderService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.authService = authService;
        this.shared = shared;
        this.display = false;
    }
    ViewServiceProvidersComponent.prototype.ngOnInit = function () {
        this.getProfileDetails();
        this.resetForm();
        this.refreshServiceProviderList();
    };
    ViewServiceProvidersComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.serviceProviderService.selectedServiceProvider = {
            _id: "",
            fname: "",
            username: "",
            password: "",
            email: "",
            telephone: [null],
            address: "",
            type: "",
            discription: "",
            profilepic: "",
        };
    };
    ViewServiceProvidersComponent.prototype.showDialog = function () {
        this.display = true;
    };
    ViewServiceProvidersComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value._id == "") {
            this.serviceProviderService.postServiceProvider(form.value).subscribe(function (res) {
                _this.resetForm(form);
                _this.refreshServiceProviderList();
            });
        }
        else {
            this.serviceProviderService.putServiceProvider(form.value).subscribe(function (res) {
                _this.resetForm(form);
                _this.refreshServiceProviderList();
                alert('Service Provider Updated');
                _this.display = false;
            });
        }
    };
    ViewServiceProvidersComponent.prototype.refreshServiceProviderList = function () {
        var _this = this;
        this.serviceProviderService.getServiceProviderList().subscribe(function (res) {
            _this.serviceProviderService.sp = res;
        });
    };
    ViewServiceProvidersComponent.prototype.onEdit = function (sp) {
        console.log(sp);
        this.serviceProviderService.selectedServiceProvider = sp;
    };
    ViewServiceProvidersComponent.prototype.onDelete = function (_id) {
        var _this = this;
        if (confirm('Are you sure to delete this record ?') == true) {
            this.serviceProviderService.deleteServiceProvider(_id).subscribe(function (res) {
                _this.refreshServiceProviderList();
            });
        }
    };
    ViewServiceProvidersComponent.prototype.onViewPackages = function (_id) {
        this.shared.setValue(_id);
        this.router.navigateByUrl('/view-packages');
    };
    ViewServiceProvidersComponent.prototype.getProfileDetails = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.data.user;
        });
    };
    ViewServiceProvidersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view-service-providers',
            template: __webpack_require__(/*! ./view-service-providers.component.html */ "./src/app/components/serviceProvider/view-service-providers/view-service-providers.component.html"),
            styles: [__webpack_require__(/*! ./view-service-providers.component.css */ "./src/app/components/serviceProvider/view-service-providers/view-service-providers.component.css")],
            providers: [_services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_5__["ServiceProviderService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service_serviceProvider_serviceprovider_service__WEBPACK_IMPORTED_MODULE_5__["ServiceProviderService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_sharedata_sp_package_service__WEBPACK_IMPORTED_MODULE_0__["SpPackageService"]])
    ], ViewServiceProvidersComponent);
    return ViewServiceProvidersComponent;
}());



/***/ }),

/***/ "./src/app/components/travelAgent/add-new-travel-agent/add-new-travel-agent.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/travelAgent/add-new-travel-agent/add-new-travel-agent.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/travelAgent/add-new-travel-agent/add-new-travel-agent.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/travelAgent/add-new-travel-agent/add-new-travel-agent.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-6\">\r\n      <div class=\"main-login main-center\">\r\n        <form style=\"margin-top: 25px;\" #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\">\r\n          <fieldset>\r\n            <legend>\r\n              <h3>Add New Travel Agent</h3><hr>\r\n            </legend>\r\n            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent._id\">\r\n            <div class=\"form-group\">\r\n              <label for=\"fname\" class=\"cols-sm-2 control-label\">First Name</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"fname\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.fname\"\r\n                    required>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"lname\" class=\"cols-sm-2 control-label\">Last Name</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"lname\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.lname\" required>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"username\" class=\"cols-sm-2 control-label\">User Name</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"username\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.username\"\r\n                    required>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"email\" class=\"cols-sm-2 control-label\">Email</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fas fa-envelope\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"email\" #emailref=\"ngModel\"\r\n                    [(ngModel)]=\"travelAgentService.selectedTravelAgent.email\" required>\r\n                </div>\r\n                <div *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class=\"aler alert-danger\">\r\n                  <div [hidden]=\"!emailref.errors?.pattern\">\r\n                    Invalid Email Address\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"password\" class=\"form-control\" name=\"password\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.password\"\r\n                    required>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\" class=\"cols-sm-2 control-label\">Re Enter Password</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"password\" class=\"form-control\" name=\"rePassword\" #name=\"ngModel\" [(ngModel)]=\"rePassword\"\r\n                    required>\r\n                </div>\r\n                <p style =\"color:red\" *ngIf=\"travelAgentService.selectedTravelAgent.password!='' && travelAgentService.selectedTravelAgent.password!=rePassword\">Passwords Do Not Match !</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"telephone\" class=\"cols-sm-2 control-label\">Telephone No</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fas fa-phone-square\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"number\" class=\"form-control\" name=\"telephone\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.telephone\" required>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"address\" class=\"cols-sm-2 control-label\">Address</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fas fa-home\" aria-hidden=\"true\"></i></span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"address\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.address\" required>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"isadmin\" class=\"cols-sm-2 control-label\">Admin Privilage</label>\r\n              <div class=\"cols-sm-10\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                  <select class=\"form-control\" name=\"isadmin\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.isadmin\" required>\r\n                    <option value=\"true\">True</option>\r\n                    <option value=\"false\">False</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <flash-messages></flash-messages>\r\n            <div class=\"form-group \">\r\n              <button style=\"margin-top:5px;\" class=\"btn btn-primary btn-lg btn-block login-button\" type=\"submit\" [disabled]=\"!userForm.valid\">Add Travel Agent</button>\r\n              <button style=\"margin-top:5px;\" class=\"btn btn-primary btn-lg btn-block\" type=\"button\" (click)=\"resetForm(userForm)\">Reset</button>\r\n            </div>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/travelAgent/add-new-travel-agent/add-new-travel-agent.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/travelAgent/add-new-travel-agent/add-new-travel-agent.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddNewTravelAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewTravelAgentComponent", function() { return AddNewTravelAgentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_travelAgent_travelagent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user-service/travelAgent/travelagent.service */ "./src/app/services/user-service/travelAgent/travelagent.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNewTravelAgentComponent = /** @class */ (function () {
    function AddNewTravelAgentComponent(travelAgentService, flashMessage, router) {
        this.travelAgentService = travelAgentService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    AddNewTravelAgentComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    AddNewTravelAgentComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.travelAgentService.selectedTravelAgent = {
            _id: "",
            fname: "",
            lname: "",
            username: "",
            password: "",
            email: "",
            telephone: [""],
            address: "",
            profilepic: "",
            isadmin: false,
        };
    };
    AddNewTravelAgentComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.rePassword == form.value.password) {
            if (form.value._id == "") {
                this.travelAgentService.postTravelAgent(form.value).subscribe(function (res) {
                    _this.flashMessage.show('Travel Agent Saved', { cssClass: 'alert-success', timeout: 4000 });
                    _this.resetForm(form);
                    alert('Travel Agent Saved');
                    console.log("Saved");
                    _this.router.navigateByUrl('/travelagent-account');
                });
            }
            else {
                this.travelAgentService.putTravelAgent(form.value).subscribe(function (res) {
                    _this.resetForm(form);
                    _this.flashMessage.show('Travel Agent Updated', { cssClass: 'alert-success', timeout: 4000 });
                    console.log("Updated");
                    alert('Travel Agent Updated');
                    _this.router.navigateByUrl('/travelagent-account');
                });
            }
        }
        else {
            alert("Passwords Do Not Match");
            console.log(this.rePassword);
            console.log(form.value.password);
        }
    };
    AddNewTravelAgentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-travel-agent',
            template: __webpack_require__(/*! ./add-new-travel-agent.component.html */ "./src/app/components/travelAgent/add-new-travel-agent/add-new-travel-agent.component.html"),
            styles: [__webpack_require__(/*! ./add-new-travel-agent.component.css */ "./src/app/components/travelAgent/add-new-travel-agent/add-new-travel-agent.component.css")],
            providers: [_services_user_service_travelAgent_travelagent_service__WEBPACK_IMPORTED_MODULE_3__["TravelAgentService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service_travelAgent_travelagent_service__WEBPACK_IMPORTED_MODULE_3__["TravelAgentService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddNewTravelAgentComponent);
    return AddNewTravelAgentComponent;
}());



/***/ }),

/***/ "./src/app/components/travelAgent/edit-travel-agent/edit-travel-agent.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/travelAgent/edit-travel-agent/edit-travel-agent.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/travelAgent/edit-travel-agent/edit-travel-agent.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/travelAgent/edit-travel-agent/edit-travel-agent.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div *ngFor=\"let tagent of travelAgentService.tagent\">\r\n  <div *ngIf=\"user._id==tagent._id\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col\"></div>\r\n        <div class=\"col-6\">\r\n          <div style=\"margin-top: 20px\" class=\"main-login main-center\">\r\n            <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\">\r\n              <fieldset>\r\n                <legend>Update Travel Agent</legend>\r\n                <hr>\r\n                <input type=\"hidden\" value=\"\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"tagent._id\">\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"fname\" class=\"cols-sm-2 control-label\">First Name</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"fname\" #name=\"ngModel\" [(ngModel)]=\"tagent.fname\"\r\n                        required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"lname\" class=\"cols-sm-2 control-label\">Last Name</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"lname\" #name=\"ngModel\" [(ngModel)]=\"tagent.lname\"\r\n                        required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"username\" class=\"cols-sm-2 control-label\">User Name</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"username\" #name=\"ngModel\" [(ngModel)]=\"tagent.username\"\r\n                        required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"email\" class=\"cols-sm-2 control-label\">Email</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fas fa-envelope\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"email\"\r\n                        #emailref=\"ngModel\" [(ngModel)]=\"tagent.email\" required>\r\n                    </div>\r\n                    <div *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class=\"aler alert-danger\">\r\n                      <div [hidden]=\"!emailref.errors?.pattern\">\r\n                        Invalid Email Address\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"telephone\" class=\"cols-sm-2 control-label\">Telephone No</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fas fa-phone-square\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"telephone\" #name=\"ngModel\" [(ngModel)]=\"tagent.telephone\"\r\n                        required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"address\" class=\"cols-sm-2 control-label\">Address</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fas fa-home\" aria-hidden=\"true\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\" name=\"address\" #name=\"ngModel\" [(ngModel)]=\"tagent.address\"\r\n                        required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"isadmin\" class=\"cols-sm-2 control-label\">Admin Privilage</label>\r\n                  <div class=\"cols-sm-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                      <select class=\"form-control\" name=\"isadmin\" #name=\"ngModel\" [(ngModel)]=\"tagent.isadmin\" required>\r\n                        <option value=\"true\">True</option>\r\n                        <option value=\"false\">False</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <flash-messages></flash-messages>\r\n                <div class=\"form-group \">\r\n                  <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\" [disabled]=\"!userForm.valid\">Update\r\n                    Agent</button>\r\n                </div>\r\n              </fieldset>\r\n            </form>\r\n            <hr>\r\n            <button class=\"btn btn-info\" (click)=\"showDialog1()\">Change Password</button>\r\n            <hr>\r\n            <button class=\"btn btn-info\" (click)=\"showDialog3()\">Change Profile Picture</button>\r\n            <hr>\r\n            <flash-messages></flash-messages>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-dialog [(visible)]=\"display1\" [modal]=\"true\" [responsive]=\"true\">\r\n  <div id=\"c1\" class=\"container\">\r\n    <form style=\"margin:10px\" (ngSubmit)=\"loginUser()\">\r\n      <fieldset>\r\n        <h5>Please Re Enter Email & Password</h5>\r\n        <hr>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputEmail1\">Email address</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"\r\n            pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"email\" #emailref=\"ngModel\" [(ngModel)]=\"email\"\r\n            required>\r\n          <div *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class=\"aler alert-danger\">\r\n            <div [hidden]=\"!emailref.errors?.pattern\">\r\n              Invalid Email Address\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputPassword1\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" name=\"password\"\r\n            [(ngModel)]=\"password\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"float: right\">Login</button>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</p-dialog>\r\n\r\n<p-dialog [(visible)]=\"display2\" [modal]=\"true\" [responsive]=\"true\">\r\n  <div class=\"container-fluid\">\r\n    <form style=\"margin-top: 25px;\" #pwForm=\"ngForm\" (ngSubmit)=\"sendPassword(pwForm)\">\r\n      <fieldset>\r\n        <legend>\r\n        </legend>\r\n        <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"user._id\">\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\" class=\"cols-sm-2 control-label\">Enter New Password</label>\r\n          <div class=\"cols-sm-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\r\n              <input type=\"password\" class=\"form-control\" name=\"password\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.password\"\r\n                required>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\" class=\"cols-sm-2 control-label\">Re Enter New Password</label>\r\n          <div class=\"cols-sm-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\r\n              <input type=\"password\" class=\"form-control\" name=\"rePassword\" #name=\"ngModel\" [(ngModel)]=\"rePassword\"\r\n                required>\r\n            </div>\r\n            <p style=\"color:red\" *ngIf=\"travelAgentService.selectedTravelAgent.password!='' && travelAgentService.selectedTravelAgent.password!=rePassword\">Passwords\r\n              Do Not Match !</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group \">\r\n          <button class=\"btn btn-primary btn-lg btn-block login-button\" type=\"submit\" [disabled]=\"!pwForm.valid\">Save</button>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</p-dialog>\r\n\r\n<p-dialog [(visible)]=\"display3\" [modal]=\"true\" [responsive]=\"true\">\r\n  <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\r\n  <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload\r\n    an Image</button>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/components/travelAgent/edit-travel-agent/edit-travel-agent.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/travelAgent/edit-travel-agent/edit-travel-agent.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditTravelAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTravelAgentComponent", function() { return EditTravelAgentComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_user_service_travelAgent_travelagent_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user-service/travelAgent/travelagent.service */ "./src/app/services/user-service/travelAgent/travelagent.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var URL = 'http://localhost:4201/travelagents/api/upload';
var EditTravelAgentComponent = /** @class */ (function () {
    function EditTravelAgentComponent(travelAgentService, authService, router, flashMessage, zone, http) {
        this.travelAgentService = travelAgentService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.zone = zone;
        this.http = http;
        this.title = 'app';
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: URL, itemAlias: 'photo' });
        this.display1 = false;
        this.display2 = false;
        this.display3 = false;
    }
    EditTravelAgentComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.refreshTravelAgentList();
        this.getProfileDetails();
        this.fileUpload();
    };
    EditTravelAgentComponent.prototype.getProfileDetails = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.data.user;
        });
    };
    EditTravelAgentComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.travelAgentService.selectedTravelAgent = {
            _id: "",
            fname: "",
            lname: "",
            username: "",
            password: "",
            email: "",
            telephone: [""],
            address: "",
            profilepic: "",
            isadmin: false,
        };
    };
    EditTravelAgentComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value._id == "") {
            this.travelAgentService.postTravelAgent(form.value).subscribe(function (res) {
                alert('Details Saved');
                _this.resetForm(form);
                _this.getProfileDetails();
                _this.zone.run(function () {
                    _this.router.navigateByUrl('/travelagent-account');
                });
            });
        }
        else {
            this.travelAgentService.putTravelAgent(form.value).subscribe(function (res) {
                _this.resetForm(form);
                alert('Details Updated');
                _this.getProfileDetails();
                _this.zone.run(function () {
                    _this.router.navigateByUrl('/travelagent-account');
                });
            });
        }
    };
    EditTravelAgentComponent.prototype.refreshTravelAgentList = function () {
        var _this = this;
        this.travelAgentService.getTravelAgentList().subscribe(function (res) {
            _this.travelAgentService.tagent = res;
        });
    };
    EditTravelAgentComponent.prototype.onEdit = function (tagent) {
        this.travelAgentService.selectedTravelAgent = tagent;
    };
    EditTravelAgentComponent.prototype.showDialog1 = function () {
        this.display1 = true;
    };
    EditTravelAgentComponent.prototype.showDialog2 = function () {
        this.display2 = true;
    };
    EditTravelAgentComponent.prototype.showDialog3 = function () {
        this.display3 = true;
    };
    EditTravelAgentComponent.prototype.loginUser = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (res) {
            if (res.state) {
                _this.showDialog2();
                _this.display1 = false;
            }
            else {
                alert(res.msg);
            }
        });
    };
    EditTravelAgentComponent.prototype.sendPassword = function (form) {
        var _this = this;
        if (this.rePassword == form.value.password) {
            this.travelAgentService.putTravelAgentPw(form.value).subscribe(function (res) {
                alert('Password Updated');
                _this.display2 = false;
            });
        }
        else {
            alert('Passwords Do Not Match !');
        }
    };
    EditTravelAgentComponent.prototype.sendProfilePic = function () {
        this.travelAgentService.putTravelAgentProfilePic(this.user).subscribe(function (res) {
        });
    };
    EditTravelAgentComponent.prototype.fileUpload = function () {
        var _this = this;
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.sendProfilePic();
            _this.display3 = false;
            alert('File uploaded successfully');
        };
    };
    EditTravelAgentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-travel-agent',
            template: __webpack_require__(/*! ./edit-travel-agent.component.html */ "./src/app/components/travelAgent/edit-travel-agent/edit-travel-agent.component.html"),
            styles: [__webpack_require__(/*! ./edit-travel-agent.component.css */ "./src/app/components/travelAgent/edit-travel-agent/edit-travel-agent.component.css")],
            providers: [_services_user_service_travelAgent_travelagent_service__WEBPACK_IMPORTED_MODULE_6__["TravelAgentService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service_travelAgent_travelagent_service__WEBPACK_IMPORTED_MODULE_6__["TravelAgentService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], EditTravelAgentComponent);
    return EditTravelAgentComponent;
}());



/***/ }),

/***/ "./src/app/components/travelAgent/travel-agent-account/travel-agent-account.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/travelAgent/travel-agent-account/travel-agent-account.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    /*----------------Containers--------------------*/\r\n    \r\n    #top-container-fluid-nav\r\n    {\r\n    background-color:inherit;\t\r\n    background-attachment:scroll;\r\n    background-repeat:no-repeat;\r\n    background-position:center;\r\n    background-size:cover\t;\r\n    }\r\n    \r\n    #body-container-fluid\r\n    {\r\n    background-color:inherit;\t\r\n    background-attachment:scroll;\r\n    background-repeat:no-repeat;\r\n    background-position:center;\r\n    background-size:cover;\r\n    margin-top:10px;\t\t\r\n    }\r\n    \r\n    #footer-container-fluid\r\n    {\r\n    background-color:inherit;\t\r\n    background-attachment:scroll;\r\n    background-repeat:no-repeat;\r\n    background-position:center;\r\n    background-size:cover;\r\n    padding-bottom:25px;\r\n    padding-top:25px;\t\r\n    }\r\n    \r\n    .card \r\n    {\r\n    padding:10px;\r\n    border:0px solid white;\r\n    box-shadow:0px 7px 16px 0px rgba(0, 0, 0, 0.09);\r\n    background-color:lightblue ;\r\n    align-content: center;\r\n    align-items: center;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    }\r\n    \r\n    .card-title\r\n    {\r\n    color:black;\r\n    font-size:16px;\r\n    text-align:center;\r\n    }\r\n    \r\n    .card-text\r\n    {\r\n    color:#84919B;\r\n    font-size:12px;\t\r\n    text-align:center;\r\n    \r\n    }\r\n    \r\n    #courses  \r\n    {\r\n    text-align:center;\r\n    }\r\n    \r\n    .list-inline-item \r\n    {\r\n    font-size:13px;\r\n    color:black;\r\n     }\r\n    \r\n    .address .w3-ul li\r\n     {\r\n        border:0px solid white;\r\n        line-height:1px;\r\n    }\r\n    \r\n    span \r\n    {\r\n    font-size:10px;\r\n    float:right;\r\n    background-color:#F4F7F9;\r\n    border-radius:10px;\r\n    padding:3px 8px;\r\n    color:#84919B;\r\n    }\r\n    \r\n    .lower-case\r\n    {\r\n    color:#84919B;\r\n    font-size:12px;\r\n    text-align:center;\r\n    }\r\n    \r\n    .ratings .fa\r\n    {\r\n    color:indigo;\r\n    font-size:25px;\r\n    }\r\n    \r\n    .ratings .fa:hover\r\n    {\r\n    color:yellow;\r\n    }\r\n    \r\n    .ratings .list-inline\r\n    {\r\n    text-align:center;\r\n    }\r\n    \r\n    .list1{\r\n        color:black;\r\n        list-style: none;\r\n}\r\n    \r\n    .btn{\r\n    margin-top: 5px;\r\n}"

/***/ }),

/***/ "./src/app/components/travelAgent/travel-agent-account/travel-agent-account.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/travelAgent/travel-agent-account/travel-agent-account.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container-fluid\" id=\"body-container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\" style=\"width:100%\">\r\n        <img *ngIf=\"user.profilepic==null\" class=\"image card-img-top\" src=\"../../../../assets/default.png\" alt=\"Card image\" style=\"width:auto;height:300px\">\r\n        <img *ngIf=\"user.profilepic!=null\" class=\"image card-img-top\" src=\"../../../../assets/{{user.profilepic}}\" alt=\"Card image\"  style=\"width:auto;height:400px\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">{{user.fname}} {{user.lname}}</h4>\r\n          <div class=\"address\">\t\t\t\t\t\t\t\t\r\n            <ul class=\"list1 w3-ul w3-small\">\r\n              <br>\r\n              <li><i class=\"fas fa-envelope\" aria-hidden=\"true\"></i> Email : {{user.email}}</li><br>\r\n              <li><i class=\"fas fa-phone-square\" aria-hidden=\"true\"></i> Telephone : {{user.telephone}}</li><br>\r\n              <li><i class=\"fas fa-home\" aria-hidden=\"true\"></i> Address : {{user.address}}</li><br>\r\n            </ul>\r\n            <button class=\"btn btn-primary\" type=\"button\" [routerLink]='[\"/edittravelagent\"]'>Edit Details</button><br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8\" style=\"background-color:lightblue;\">\r\n      <div class ='container-fluid'>\r\n        <div class = 'row'>\r\n          <div class ='col col_2'>\r\n          </div>\r\n        </div>\r\n        <br><br>\r\n        <div class ='container-fluid'>\r\n          <div class = 'row'>  \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n  "

/***/ }),

/***/ "./src/app/components/travelAgent/travel-agent-account/travel-agent-account.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/travelAgent/travel-agent-account/travel-agent-account.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TravelAgentAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelAgentAccountComponent", function() { return TravelAgentAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_travelAgent_travelagent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user-service/travelAgent/travelagent.service */ "./src/app/services/user-service/travelAgent/travelagent.service.ts");
/* harmony import */ var _services_sharedata_sharedata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/sharedata/sharedata.service */ "./src/app/services/sharedata/sharedata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TravelAgentAccountComponent = /** @class */ (function () {
    function TravelAgentAccountComponent(travelAgentService, authService, router, zone, dataS) {
        this.travelAgentService = travelAgentService;
        this.authService = authService;
        this.router = router;
        this.zone = zone;
        this.dataS = dataS;
        this.user = { fname: "First name", lname: "Last name" };
    }
    TravelAgentAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProfileDetails();
        this.dataS.shareUserData();
        this.dataS.currentMessge.subscribe(function (traveAgentdata) {
            _this.user = traveAgentdata;
            console.log("user in account " + JSON.stringify(_this.user));
        });
    };
    TravelAgentAccountComponent.prototype.getProfileDetails = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.data.user;
        });
    };
    TravelAgentAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-agent-account',
            template: __webpack_require__(/*! ./travel-agent-account.component.html */ "./src/app/components/travelAgent/travel-agent-account/travel-agent-account.component.html"),
            styles: [__webpack_require__(/*! ./travel-agent-account.component.css */ "./src/app/components/travelAgent/travel-agent-account/travel-agent-account.component.css")],
            providers: [_services_user_service_travelAgent_travelagent_service__WEBPACK_IMPORTED_MODULE_3__["TravelAgentService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service_travelAgent_travelagent_service__WEBPACK_IMPORTED_MODULE_3__["TravelAgentService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _services_sharedata_sharedata_service__WEBPACK_IMPORTED_MODULE_4__["SharedataService"]])
    ], TravelAgentAccountComponent);
    return TravelAgentAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/travelAgent/travel-agent-filter.pipe.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/travelAgent/travel-agent-filter.pipe.ts ***!
  \********************************************************************/
/*! exports provided: TravelAgentFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelAgentFilterPipe", function() { return TravelAgentFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TravelAgentFilterPipe = /** @class */ (function () {
    function TravelAgentFilterPipe() {
    }
    TravelAgentFilterPipe.prototype.transform = function (travelagents, searchKeyword, TravelAgent) {
        if (!travelagents || !searchKeyword) {
            return travelagents;
        }
        else {
            return travelagents.filter(function (travelagents) {
                return travelagents.fname.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                    travelagents.address.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1 ||
                    travelagents.telephone.toString().indexOf(searchKeyword.toString()) !== -1 ||
                    travelagents.email.toString().indexOf(searchKeyword.toString()) !== -1;
            });
        }
    };
    TravelAgentFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'TravelAgentFilter'
        })
    ], TravelAgentFilterPipe);
    return TravelAgentFilterPipe;
}());



/***/ }),

/***/ "./src/app/components/travelAgent/travel-agent-payment/travel-agent-payment/travel-agent-payment.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/travelAgent/travel-agent-payment/travel-agent-payment/travel-agent-payment.component.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/travelAgent/travel-agent-payment/travel-agent-payment/travel-agent-payment.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/travelAgent/travel-agent-payment/travel-agent-payment/travel-agent-payment.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  travel-agent-payment works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/travelAgent/travel-agent-payment/travel-agent-payment/travel-agent-payment.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/travelAgent/travel-agent-payment/travel-agent-payment/travel-agent-payment.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: TravelAgentPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelAgentPaymentComponent", function() { return TravelAgentPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TravelAgentPaymentComponent = /** @class */ (function () {
    function TravelAgentPaymentComponent() {
    }
    TravelAgentPaymentComponent.prototype.ngOnInit = function () {
    };
    TravelAgentPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-agent-payment',
            template: __webpack_require__(/*! ./travel-agent-payment.component.html */ "./src/app/components/travelAgent/travel-agent-payment/travel-agent-payment/travel-agent-payment.component.html"),
            styles: [__webpack_require__(/*! ./travel-agent-payment.component.css */ "./src/app/components/travelAgent/travel-agent-payment/travel-agent-payment/travel-agent-payment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TravelAgentPaymentComponent);
    return TravelAgentPaymentComponent;
}());



/***/ }),

/***/ "./src/app/components/travelAgent/view-travel-agents/view-travel-agents.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/travelAgent/view-travel-agents/view-travel-agents.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search{\r\n    margin-top:30px;\r\n}\r\n.test{\r\n    background-color: red;\r\n}"

/***/ }),

/***/ "./src/app/components/travelAgent/view-travel-agents/view-travel-agents.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/travelAgent/view-travel-agents/view-travel-agents.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n\r\n<div class=\"container bg-info\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-10\">\r\n      <div class=\" search form-group\">\r\n        <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"search Here...\" [(ngModel)]=\"searchKeyword\">\r\n      </div>\r\n      <div>\r\n        <table class=\"table table-responsive-sm\t\">\r\n          <tr *ngFor=\"let tagent of travelAgentService.tagent | TravelAgentFilter:searchKeyword\">\r\n            <td align=\"center\">\r\n              <div class=\"col-md-8 main-login main-center\">\r\n                <div class=\"card flex-md-row mb-4 bg-light shadow-sm h-md-250\">\r\n                  <div class=\"card-body d-flex flex-column align-items-start\">\r\n                    <strong class=\"d-inline-block mb-2 text-primary\">{{tagent.fname}} {{tagent.lname}}</strong>\r\n                    <h6 class=\"mb-0\"></h6>\r\n                    <div class=\"mb-1 text-muted small\">{{tagent.email}}</div><br>\r\n                    <p class=\"card-text mb-auto\">Telephone : {{tagent.telephone}} <br>Address : {{tagent.address}}</p>\r\n                    <a *ngIf=\"user.isadmin==true\" class=\"action-btn\" (click)=\"onEdit(tagent)\">\r\n                      <i class=\"fas fa-pencil-alt  btn-outline-primary btn-sm\" (click)=\"showDialog()\">\r\n                        edit</i>\r\n                    </a>\r\n                    <a *ngIf=\"user.isadmin==true\" class=\"action-btn\" (click)=\"onDelete(tagent._id)\">\r\n                      <i class=\"fas fa-trash-alt  btn-outline-primary btn-sm\"> delete</i>\r\n                    </a>\r\n                  </div>\r\n                  <img *ngIf=\"tagent.profilepic==null\" class=\"card-img-right flex-auto d-none d-lg-block\" alt=\"Thumbnail [200x250]\" src=\"../../../../assets/default.png\"\r\n                    style=\"width: 200px; height: 200px;\">\r\n                    <img *ngIf=\"tagent.profilepic!=null\" class=\"card-img-right flex-auto d-none d-lg-block\" alt=\"Thumbnail [200x250]\" src=\"../../../../assets/{{tagent.profilepic}}\"\r\n                    style=\"width: 200px; height: 200px;\">\r\n                  <!--img class=\"card-img-right flex-auto d-none d-lg-block\" alt=\"Thumbnail [200x250]\" src=\"{{tagent.profilepic}}\" style=\"width: 200px; height: 250px;\"-->\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>\r\n<p-dialog [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"600\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\"></div>\r\n      <div class=\"col-10\">\r\n        <div class=\"main-login main-center\">\r\n          <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\">\r\n            <fieldset>\r\n              <legend>Update Travel Agent:</legend>\r\n              <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent._id\">\r\n              <div class=\"form-group\">\r\n                <label for=\"fname\" class=\"cols-sm-2 control-label\">First Name</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"fname\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.fname\"\r\n                      required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"lname\" class=\"cols-sm-2 control-label\">Last Name</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"lname\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.lname\" required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"username\" class=\"cols-sm-2 control-label\">User Name</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.username\"\r\n                      required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"email\" class=\"cols-sm-2 control-label\">Email</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fas fa-envelope\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"email\" #emailref=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.email\" required>\r\n                  </div>\r\n                  <div *ngIf=\"emailref.errors &&(emailref.touched || emailref.dirty)\" class=\"aler alert-danger\">\r\n                    <div [hidden]=\"!emailref.errors?.pattern\">\r\n                      Invalid Email Address\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"telephone\" class=\"cols-sm-2 control-label\">Telephone No</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fas fa-phone-square\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"telephone\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.telephone\" required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"address\" class=\"cols-sm-2 control-label\">Address</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fas fa-home\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"address\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.address\" required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"isadmin\" class=\"cols-sm-2 control-label\">Admin Privilage</label>\r\n                <div class=\"cols-sm-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"isadmin\" #name=\"ngModel\" [(ngModel)]=\"travelAgentService.selectedTravelAgent.isadmin\" required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <flash-messages></flash-messages>\r\n              <div class=\"form-group \">\r\n                <button style=\"margin-top:5px;\" class=\"btn btn-primary btn-lg btn-block login-button\" type=\"submit\" [disabled]=\"!userForm.valid\">Update Agent</button>\r\n                <button style=\"margin-top:5px;\" class=\"btn btn-primary btn-lg btn-block\" type=\"button\" (click)=\"resetForm(userForm)\">Reset</button>\r\n              </div>\r\n            </fieldset>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\"></div>\r\n    </div>\r\n  </div>\r\n</p-dialog>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/travelAgent/view-travel-agents/view-travel-agents.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/travelAgent/view-travel-agents/view-travel-agents.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ViewTravelAgentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTravelAgentsComponent", function() { return ViewTravelAgentsComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_travelAgent_travelagent_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user-service/travelAgent/travelagent.service */ "./src/app/services/user-service/travelAgent/travelagent.service.ts");
/* harmony import */ var _services_user_service_travelAgent_travelagent_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user-service/travelAgent/travelagent.model */ "./src/app/services/user-service/travelAgent/travelagent.model.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewTravelAgentsComponent = /** @class */ (function () {
    function ViewTravelAgentsComponent(travelAgentService, flashMessage, travelAgent, router, authService, ngxSmartModalService) {
        this.travelAgentService = travelAgentService;
        this.flashMessage = flashMessage;
        this.travelAgent = travelAgent;
        this.router = router;
        this.authService = authService;
        this.ngxSmartModalService = ngxSmartModalService;
        this.display = false;
    }
    ViewTravelAgentsComponent.prototype.ngOnInit = function () {
        this.getProfileDetails();
        this.resetForm();
        this.refreshTravelAgentList();
    };
    ViewTravelAgentsComponent.prototype.showDialog = function () {
        this.display = true;
    };
    ViewTravelAgentsComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.travelAgentService.selectedTravelAgent = {
            _id: "",
            fname: "",
            lname: "",
            username: "",
            password: "",
            email: "",
            telephone: [""],
            address: "",
            profilepic: "",
            isadmin: false,
        };
    };
    ViewTravelAgentsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value._id == "") {
            this.travelAgentService.postTravelAgent(form.value).subscribe(function (res) {
                _this.flashMessage.show('Travel Agent Saved', { cssClass: 'alert-success', timeout: 4000 });
                _this.refreshTravelAgentList();
                _this.resetForm(form);
            });
        }
        else {
            this.travelAgentService.putTravelAgent(form.value).subscribe(function (res) {
                _this.resetForm(form);
                _this.refreshTravelAgentList();
                _this.flashMessage.show('Travel Agent Updated', { cssClass: 'alert-success', timeout: 4000 });
                _this.display = false;
            });
        }
    };
    ViewTravelAgentsComponent.prototype.refreshTravelAgentList = function () {
        var _this = this;
        this.travelAgentService.getTravelAgentList().subscribe(function (res) {
            _this.travelAgentService.tagent = res;
        });
    };
    ViewTravelAgentsComponent.prototype.onEdit = function (tagent) {
        this.travelAgentService.selectedTravelAgent = tagent;
    };
    ViewTravelAgentsComponent.prototype.onDelete = function (_id) {
        var _this = this;
        if (confirm('Are you sure to delete this record ?') == true) {
            this.travelAgentService.deleteTravelAgent(_id).subscribe(function (res) {
                _this.refreshTravelAgentList();
            });
        }
    };
    ViewTravelAgentsComponent.prototype.getProfileDetails = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.data.user;
            console.log(_this.user);
        });
    };
    ViewTravelAgentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-travel-agents',
            template: __webpack_require__(/*! ./view-travel-agents.component.html */ "./src/app/components/travelAgent/view-travel-agents/view-travel-agents.component.html"),
            styles: [__webpack_require__(/*! ./view-travel-agents.component.css */ "./src/app/components/travelAgent/view-travel-agents/view-travel-agents.component.css")],
            providers: [_services_user_service_travelAgent_travelagent_service__WEBPACK_IMPORTED_MODULE_4__["TravelAgentService"], _services_user_service_travelAgent_travelagent_model__WEBPACK_IMPORTED_MODULE_5__["TravelAgent"]]
        }),
        __metadata("design:paramtypes", [_services_user_service_travelAgent_travelagent_service__WEBPACK_IMPORTED_MODULE_4__["TravelAgentService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_user_service_travelAgent_travelagent_model__WEBPACK_IMPORTED_MODULE_5__["TravelAgent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__["NgxSmartModalService"]])
    ], ViewTravelAgentsComponent);
    return ViewTravelAgentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/password-reset/password-reset.component */ "./src/app/components/password-reset/password-reset.component.ts");
/* harmony import */ var _components_package_view_packages_view_packages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/package/view-packages/view-packages.component */ "./src/app/components/package/view-packages/view-packages.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_travelAgent_view_travel_agents_view_travel_agents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/travelAgent/view-travel-agents/view-travel-agents.component */ "./src/app/components/travelAgent/view-travel-agents/view-travel-agents.component.ts");
/* harmony import */ var _components_client_view_clients_view_clients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/client/view-clients/view-clients.component */ "./src/app/components/client/view-clients/view-clients.component.ts");
/* harmony import */ var _components_serviceProvider_view_service_providers_view_service_providers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/serviceProvider/view-service-providers/view-service-providers.component */ "./src/app/components/serviceProvider/view-service-providers/view-service-providers.component.ts");
/* harmony import */ var _components_travelAgent_add_new_travel_agent_add_new_travel_agent_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/travelAgent/add-new-travel-agent/add-new-travel-agent.component */ "./src/app/components/travelAgent/add-new-travel-agent/add-new-travel-agent.component.ts");
/* harmony import */ var _components_serviceProvider_add_new_service_provider_add_new_service_provider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/serviceProvider/add-new-service-provider/add-new-service-provider.component */ "./src/app/components/serviceProvider/add-new-service-provider/add-new-service-provider.component.ts");
/* harmony import */ var _components_client_add_new_clients_add_new_clients_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/client/add-new-clients/add-new-clients.component */ "./src/app/components/client/add-new-clients/add-new-clients.component.ts");
/* harmony import */ var _components_travelAgent_travel_agent_account_travel_agent_account_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/travelAgent/travel-agent-account/travel-agent-account.component */ "./src/app/components/travelAgent/travel-agent-account/travel-agent-account.component.ts");
/* harmony import */ var _components_travelAgent_edit_travel_agent_edit_travel_agent_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/travelAgent/edit-travel-agent/edit-travel-agent.component */ "./src/app/components/travelAgent/edit-travel-agent/edit-travel-agent.component.ts");
/* harmony import */ var _components_serviceProvider_service_provider_account_service_provider_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/serviceProvider/service-provider-account/service-provider-account.component */ "./src/app/components/serviceProvider/service-provider-account/service-provider-account.component.ts");
/* harmony import */ var _components_client_client_account_client_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/client/client-account/client-account.component */ "./src/app/components/client/client-account/client-account.component.ts");
/* harmony import */ var _components_serviceProvider_edit_service_provider_edit_service_provider_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/serviceProvider/edit-service-provider/edit-service-provider.component */ "./src/app/components/serviceProvider/edit-service-provider/edit-service-provider.component.ts");
/* harmony import */ var _components_client_client_payment_client_payment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/client/client-payment/client-payment.component */ "./src/app/components/client/client-payment/client-payment.component.ts");
/* harmony import */ var _components_payments_view_client_payments_view_client_payments_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/payments/view-client-payments/view-client-payments.component */ "./src/app/components/payments/view-client-payments/view-client-payments.component.ts");
/* harmony import */ var _components_itinerary_itinerary_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/itinerary/itinerary.component */ "./src/app/components/itinerary/itinerary.component.ts");
/* harmony import */ var _components_itinerary_view_itinerary_view_itinerary_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/itinerary/view-itinerary/view-itinerary.component */ "./src/app/components/itinerary/view-itinerary/view-itinerary.component.ts");
/* harmony import */ var _components_itinerary_edit_itinerary_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/itinerary/edit-itinerary/edit-itinerary.component */ "./src/app/components/itinerary/edit-itinerary/edit-itinerary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var applicationRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'viewtravelagents', component: _components_travelAgent_view_travel_agents_view_travel_agents_component__WEBPACK_IMPORTED_MODULE_8__["ViewTravelAgentsComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'viewserviceproviders', component: _components_serviceProvider_view_service_providers_view_service_providers_component__WEBPACK_IMPORTED_MODULE_10__["ViewServiceProvidersComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'viewclients', component: _components_client_view_clients_view_clients_component__WEBPACK_IMPORTED_MODULE_9__["ViewClientsComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'addnewtravelagent', component: _components_travelAgent_add_new_travel_agent_add_new_travel_agent_component__WEBPACK_IMPORTED_MODULE_11__["AddNewTravelAgentComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'addnewserviceprovider', component: _components_serviceProvider_add_new_service_provider_add_new_service_provider_component__WEBPACK_IMPORTED_MODULE_12__["AddNewServiceProviderComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'addnewclient', component: _components_client_add_new_clients_add_new_clients_component__WEBPACK_IMPORTED_MODULE_13__["AddNewClientsComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'edittravelagent', component: _components_travelAgent_edit_travel_agent_edit_travel_agent_component__WEBPACK_IMPORTED_MODULE_15__["EditTravelAgentComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'editserviceprovider', component: _components_serviceProvider_edit_service_provider_edit_service_provider_component__WEBPACK_IMPORTED_MODULE_18__["EditServiceProviderComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'service-provider-account', component: _components_serviceProvider_service_provider_account_service_provider_account_component__WEBPACK_IMPORTED_MODULE_16__["ServiceProviderAccountComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'client-account', component: _components_client_client_account_client_account_component__WEBPACK_IMPORTED_MODULE_17__["ClientAccountComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'travelagent-account', component: _components_travelAgent_travel_agent_account_travel_agent_account_component__WEBPACK_IMPORTED_MODULE_14__["TravelAgentAccountComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'client-payment', component: _components_client_client_payment_client_payment_component__WEBPACK_IMPORTED_MODULE_19__["ClientPaymentComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'viewclientpayment', component: _components_payments_view_client_payments_view_client_payments_component__WEBPACK_IMPORTED_MODULE_20__["ViewClientPaymentsComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'itinerary', component: _components_itinerary_itinerary_component__WEBPACK_IMPORTED_MODULE_21__["ItineraryComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'view-packages', component: _components_package_view_packages_view_packages_component__WEBPACK_IMPORTED_MODULE_1__["ViewPackagesComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'view-itinerary', component: _components_itinerary_view_itinerary_view_itinerary_component__WEBPACK_IMPORTED_MODULE_22__["ViewItineraryComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'edit-itinerary', component: _components_itinerary_edit_itinerary_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_23__["EditItineraryComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'app-password-reset', component: _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_0__["PasswordResetComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(applicationRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            providers: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/header-bar/header-bar.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/header-bar/header-bar.module.ts ***!
  \*********************************************************/
/*! exports provided: HeaderBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarModule", function() { return HeaderBarModule; });
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HeaderBarModule = /** @class */ (function () {
    function HeaderBarModule() {
    }
    HeaderBarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"]
            ],
            declarations: [
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__["NavComponent"]
            ],
            exports: [
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__["NavComponent"]
            ]
        })
    ], HeaderBarModule);
    return HeaderBarModule;
}());



/***/ }),

/***/ "./src/app/modules/itinerary/itinerary.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/itinerary/itinerary.module.ts ***!
  \*******************************************************/
/*! exports provided: ItineraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryModule", function() { return ItineraryModule; });
/* harmony import */ var _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../header-bar/header-bar.module */ "./src/app/modules/header-bar/header-bar.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_itinerary_event_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/itinerary/event/event.component */ "./src/app/components/itinerary/event/event.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_itinerary_itinerary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/itinerary/itinerary.component */ "./src/app/components/itinerary/itinerary.component.ts");
/* harmony import */ var _services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/itinerary-service/itinerary.service */ "./src/app/services/itinerary-service/itinerary.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_itinerary_view_itinerary_view_itinerary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/itinerary/view-itinerary/view-itinerary.component */ "./src/app/components/itinerary/view-itinerary/view-itinerary.component.ts");
/* harmony import */ var _components_itinerary_edit_itinerary_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/itinerary/edit-itinerary/edit-itinerary.component */ "./src/app/components/itinerary/edit-itinerary/edit-itinerary.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ItineraryModule = /** @class */ (function () {
    function ItineraryModule() {
    }
    ItineraryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_0__["HeaderBarModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
            ],
            declarations: [
                _components_itinerary_event_event_component__WEBPACK_IMPORTED_MODULE_3__["EventComponent"],
                _components_itinerary_itinerary_component__WEBPACK_IMPORTED_MODULE_6__["ItineraryComponent"],
                _components_itinerary_view_itinerary_view_itinerary_component__WEBPACK_IMPORTED_MODULE_9__["ViewItineraryComponent"],
                _components_itinerary_edit_itinerary_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_10__["EditItineraryComponent"]
            ],
            exports: [
                _components_itinerary_event_event_component__WEBPACK_IMPORTED_MODULE_3__["EventComponent"],
                _components_itinerary_itinerary_component__WEBPACK_IMPORTED_MODULE_6__["ItineraryComponent"],
                _components_itinerary_view_itinerary_view_itinerary_component__WEBPACK_IMPORTED_MODULE_9__["ViewItineraryComponent"],
                _components_itinerary_edit_itinerary_edit_itinerary_component__WEBPACK_IMPORTED_MODULE_10__["EditItineraryComponent"]
            ],
            providers: [
                _services_itinerary_service_itinerary_service__WEBPACK_IMPORTED_MODULE_7__["ItineraryService"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"], useValue: {} },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], useValue: {} }
            ],
            entryComponents: [_components_itinerary_event_event_component__WEBPACK_IMPORTED_MODULE_3__["EventComponent"]]
        })
    ], ItineraryModule);
    return ItineraryModule;
}());



/***/ }),

/***/ "./src/app/modules/package/package.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/package/package.module.ts ***!
  \***************************************************/
/*! exports provided: PackageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageModule", function() { return PackageModule; });
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared.module */ "./src/app/modules/shared.module.ts");
/* harmony import */ var _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../header-bar/header-bar.module */ "./src/app/modules/header-bar/header-bar.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_package_add_new_package_add_new_package_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/package/add-new-package/add-new-package.component */ "./src/app/components/package/add-new-package/add-new-package.component.ts");
/* harmony import */ var _components_package_view_packages_view_packages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/package/view-packages/view-packages.component */ "./src/app/components/package/view-packages/view-packages.component.ts");
/* harmony import */ var _components_package_package_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/package/package.filter.pipe */ "./src/app/components/package/package.filter.pipe.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PackageModule = /** @class */ (function () {
    function PackageModule() {
    }
    PackageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_1__["HeaderBarModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_10__["CardModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
            ],
            declarations: [_components_package_add_new_package_add_new_package_component__WEBPACK_IMPORTED_MODULE_7__["AddNewPackageComponent"],
                _components_package_view_packages_view_packages_component__WEBPACK_IMPORTED_MODULE_8__["ViewPackagesComponent"],
                _components_package_package_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["PackageFilterPipe"],
            ],
            exports: [_components_package_add_new_package_add_new_package_component__WEBPACK_IMPORTED_MODULE_7__["AddNewPackageComponent"],
                _components_package_view_packages_view_packages_component__WEBPACK_IMPORTED_MODULE_8__["ViewPackagesComponent"],
                _components_package_package_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["PackageFilterPipe"]]
        })
    ], PackageModule);
    return PackageModule;
}());



/***/ }),

/***/ "./src/app/modules/password-reset/password-reset.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/password-reset/password-reset.module.ts ***!
  \*****************************************************************/
/*! exports provided: PasswordResetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetModule", function() { return PasswordResetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../header-bar/header-bar.module */ "./src/app/modules/header-bar/header-bar.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/password-reset/password-reset.component */ "./src/app/components/password-reset/password-reset.component.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PasswordResetModule = /** @class */ (function () {
    function PasswordResetModule() {
    }
    PasswordResetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_2__["HeaderBarModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_8__["CardModule"]
            ],
            declarations: [
                _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_6__["PasswordResetComponent"]
            ],
            exports: [
                _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_6__["PasswordResetComponent"]
            ]
        })
    ], PasswordResetModule);
    return PasswordResetModule;
}());



/***/ }),

/***/ "./src/app/modules/payment/payment.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/payment/payment.module.ts ***!
  \***************************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../header-bar/header-bar.module */ "./src/app/modules/header-bar/header-bar.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_client_client_payment_client_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/client/client-payment/client-payment.component */ "./src/app/components/client/client-payment/client-payment.component.ts");
/* harmony import */ var _components_payments_view_client_payments_view_client_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/payments/view-client-payments/view-client-payments.component */ "./src/app/components/payments/view-client-payments/view-client-payments.component.ts");
/* harmony import */ var _components_payments_view_client_payments_client_payment_fliter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/payments/view-client-payments/client-payment-fliter.pipe */ "./src/app/components/payments/view-client-payments/client-payment-fliter.pipe.ts");
/* harmony import */ var _components_travelAgent_travel_agent_payment_travel_agent_payment_travel_agent_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/travelAgent/travel-agent-payment/travel-agent-payment/travel-agent-payment.component */ "./src/app/components/travelAgent/travel-agent-payment/travel-agent-payment/travel-agent-payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_0__["HeaderBarModule"]
            ],
            declarations: [
                _components_client_client_payment_client_payment_component__WEBPACK_IMPORTED_MODULE_6__["ClientPaymentComponent"],
                _components_payments_view_client_payments_view_client_payments_component__WEBPACK_IMPORTED_MODULE_7__["ViewClientPaymentsComponent"],
                _components_payments_view_client_payments_client_payment_fliter_pipe__WEBPACK_IMPORTED_MODULE_8__["ClientPaymentFilterPipe"],
                _components_travelAgent_travel_agent_payment_travel_agent_payment_travel_agent_payment_component__WEBPACK_IMPORTED_MODULE_9__["TravelAgentPaymentComponent"]
            ],
            exports: [
                _components_client_client_payment_client_payment_component__WEBPACK_IMPORTED_MODULE_6__["ClientPaymentComponent"],
                _components_payments_view_client_payments_view_client_payments_component__WEBPACK_IMPORTED_MODULE_7__["ViewClientPaymentsComponent"],
                _components_payments_view_client_payments_client_payment_fliter_pipe__WEBPACK_IMPORTED_MODULE_8__["ClientPaymentFilterPipe"],
                _components_travelAgent_travel_agent_payment_travel_agent_payment_travel_agent_payment_component__WEBPACK_IMPORTED_MODULE_9__["TravelAgentPaymentComponent"]
            ]
        })
    ], PaymentModule);
    return PaymentModule;
}());



/***/ }),

/***/ "./src/app/modules/shared.module.ts":
/*!******************************************!*\
  !*** ./src/app/modules/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileSelectDirective"],
            ],
            imports: [],
            exports: [
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileSelectDirective"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/modules/signin/signin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/signin/signin.module.ts ***!
  \*************************************************/
/*! exports provided: SigninModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninModule", function() { return SigninModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _user_account_user_account_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-account/user-account.module */ "./src/app/modules/user-account/user-account.module.ts");
/* harmony import */ var _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header-bar/header-bar.module */ "./src/app/modules/header-bar/header-bar.module.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SigninModule = /** @class */ (function () {
    function SigninModule() {
    }
    SigninModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _user_account_user_account_module__WEBPACK_IMPORTED_MODULE_7__["UserAccountModule"],
                _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_8__["HeaderBarModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_9__["CardModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"]
            ],
            declarations: [
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            exports: [
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ]
        })
    ], SigninModule);
    return SigninModule;
}());



/***/ }),

/***/ "./src/app/modules/signup/signup.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/signup/signup.module.ts ***!
  \*************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../header-bar/header-bar.module */ "./src/app/modules/header-bar/header-bar.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_client_add_new_clients_add_new_clients_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/client/add-new-clients/add-new-clients.component */ "./src/app/components/client/add-new-clients/add-new-clients.component.ts");
/* harmony import */ var _components_travelAgent_add_new_travel_agent_add_new_travel_agent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/travelAgent/add-new-travel-agent/add-new-travel-agent.component */ "./src/app/components/travelAgent/add-new-travel-agent/add-new-travel-agent.component.ts");
/* harmony import */ var _components_serviceProvider_add_new_service_provider_add_new_service_provider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/serviceProvider/add-new-service-provider/add-new-service-provider.component */ "./src/app/components/serviceProvider/add-new-service-provider/add-new-service-provider.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_0__["HeaderBarModule"]
            ],
            declarations: [
                _components_client_add_new_clients_add_new_clients_component__WEBPACK_IMPORTED_MODULE_6__["AddNewClientsComponent"],
                _components_serviceProvider_add_new_service_provider_add_new_service_provider_component__WEBPACK_IMPORTED_MODULE_8__["AddNewServiceProviderComponent"],
                _components_travelAgent_add_new_travel_agent_add_new_travel_agent_component__WEBPACK_IMPORTED_MODULE_7__["AddNewTravelAgentComponent"]
            ],
            exports: [
                _components_client_add_new_clients_add_new_clients_component__WEBPACK_IMPORTED_MODULE_6__["AddNewClientsComponent"],
                _components_serviceProvider_add_new_service_provider_add_new_service_provider_component__WEBPACK_IMPORTED_MODULE_8__["AddNewServiceProviderComponent"],
                _components_travelAgent_add_new_travel_agent_add_new_travel_agent_component__WEBPACK_IMPORTED_MODULE_7__["AddNewTravelAgentComponent"]
            ]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ }),

/***/ "./src/app/modules/user-account/edit-user.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/user-account/edit-user.module.ts ***!
  \**********************************************************/
/*! exports provided: EditUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserModule", function() { return EditUserModule; });
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared.module */ "./src/app/modules/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../header-bar/header-bar.module */ "./src/app/modules/header-bar/header-bar.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_travelAgent_edit_travel_agent_edit_travel_agent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/travelAgent/edit-travel-agent/edit-travel-agent.component */ "./src/app/components/travelAgent/edit-travel-agent/edit-travel-agent.component.ts");
/* harmony import */ var _components_serviceProvider_edit_service_provider_edit_service_provider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/serviceProvider/edit-service-provider/edit-service-provider.component */ "./src/app/components/serviceProvider/edit-service-provider/edit-service-provider.component.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var EditUserModule = /** @class */ (function () {
    function EditUserModule() {
    }
    EditUserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_2__["HeaderBarModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
            ],
            declarations: [
                _components_travelAgent_edit_travel_agent_edit_travel_agent_component__WEBPACK_IMPORTED_MODULE_8__["EditTravelAgentComponent"],
                _components_serviceProvider_edit_service_provider_edit_service_provider_component__WEBPACK_IMPORTED_MODULE_9__["EditServiceProviderComponent"],
            ],
            exports: [
                _components_travelAgent_edit_travel_agent_edit_travel_agent_component__WEBPACK_IMPORTED_MODULE_8__["EditTravelAgentComponent"],
                _components_serviceProvider_edit_service_provider_edit_service_provider_component__WEBPACK_IMPORTED_MODULE_9__["EditServiceProviderComponent"],
            ]
        })
    ], EditUserModule);
    return EditUserModule;
}());



/***/ }),

/***/ "./src/app/modules/user-account/user-account.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/user-account/user-account.module.ts ***!
  \*************************************************************/
/*! exports provided: UserAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountModule", function() { return UserAccountModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_travelAgent_travel_agent_account_travel_agent_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/travelAgent/travel-agent-account/travel-agent-account.component */ "./src/app/components/travelAgent/travel-agent-account/travel-agent-account.component.ts");
/* harmony import */ var _components_serviceProvider_service_provider_account_service_provider_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/serviceProvider/service-provider-account/service-provider-account.component */ "./src/app/components/serviceProvider/service-provider-account/service-provider-account.component.ts");
/* harmony import */ var _components_client_client_account_client_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/client/client-account/client-account.component */ "./src/app/components/client/client-account/client-account.component.ts");
/* harmony import */ var _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header-bar/header-bar.module */ "./src/app/modules/header-bar/header-bar.module.ts");
/* harmony import */ var _modules_package_package_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modules/package/package.module */ "./src/app/modules/package/package.module.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../shared.module */ "./src/app/modules/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var UserAccountModule = /** @class */ (function () {
    function UserAccountModule() {
    }
    UserAccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_9__["HeaderBarModule"],
                _modules_package_package_module__WEBPACK_IMPORTED_MODULE_10__["PackageModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_12__["CardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            declarations: [
                _components_travelAgent_travel_agent_account_travel_agent_account_component__WEBPACK_IMPORTED_MODULE_6__["TravelAgentAccountComponent"],
                _components_serviceProvider_service_provider_account_service_provider_account_component__WEBPACK_IMPORTED_MODULE_7__["ServiceProviderAccountComponent"],
                _components_client_client_account_client_account_component__WEBPACK_IMPORTED_MODULE_8__["ClientAccountComponent"],
            ],
            exports: [
                _components_travelAgent_travel_agent_account_travel_agent_account_component__WEBPACK_IMPORTED_MODULE_6__["TravelAgentAccountComponent"],
                _components_serviceProvider_service_provider_account_service_provider_account_component__WEBPACK_IMPORTED_MODULE_7__["ServiceProviderAccountComponent"],
                _components_client_client_account_client_account_component__WEBPACK_IMPORTED_MODULE_8__["ClientAccountComponent"],
            ]
        })
    ], UserAccountModule);
    return UserAccountModule;
}());



/***/ }),

/***/ "./src/app/modules/user-account/view-user.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/user-account/view-user.module.ts ***!
  \**********************************************************/
/*! exports provided: ViewUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserModule", function() { return ViewUserModule; });
/* harmony import */ var _components_client_client_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/client/client-filter.pipe */ "./src/app/components/client/client-filter.pipe.ts");
/* harmony import */ var _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../header-bar/header-bar.module */ "./src/app/modules/header-bar/header-bar.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_travelAgent_view_travel_agents_view_travel_agents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/travelAgent/view-travel-agents/view-travel-agents.component */ "./src/app/components/travelAgent/view-travel-agents/view-travel-agents.component.ts");
/* harmony import */ var _components_client_view_clients_view_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/client/view-clients/view-clients.component */ "./src/app/components/client/view-clients/view-clients.component.ts");
/* harmony import */ var _components_serviceProvider_view_service_providers_view_service_providers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/serviceProvider/view-service-providers/view-service-providers.component */ "./src/app/components/serviceProvider/view-service-providers/view-service-providers.component.ts");
/* harmony import */ var _components_travelAgent_travel_agent_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/travelAgent/travel-agent-filter.pipe */ "./src/app/components/travelAgent/travel-agent-filter.pipe.ts");
/* harmony import */ var _components_serviceProvider_service_provider_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/serviceProvider/service-provider-filter.pipe */ "./src/app/components/serviceProvider/service-provider-filter.pipe.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../shared.module */ "./src/app/modules/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ViewUserModule = /** @class */ (function () {
    function ViewUserModule() {
    }
    ViewUserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _header_bar_header_bar_module__WEBPACK_IMPORTED_MODULE_1__["HeaderBarModule"],
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_12__["NgxSmartModalModule"].forRoot(),
                primeng_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_14__["CardModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]
            ],
            declarations: [
                _components_travelAgent_view_travel_agents_view_travel_agents_component__WEBPACK_IMPORTED_MODULE_7__["ViewTravelAgentsComponent"],
                _components_client_view_clients_view_clients_component__WEBPACK_IMPORTED_MODULE_8__["ViewClientsComponent"],
                _components_serviceProvider_view_service_providers_view_service_providers_component__WEBPACK_IMPORTED_MODULE_9__["ViewServiceProvidersComponent"],
                _components_travelAgent_travel_agent_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["TravelAgentFilterPipe"],
                _components_serviceProvider_service_provider_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["ServiceProviderFilterPipe"],
                _components_client_client_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["ClientFilterPipe"]
            ],
            exports: [
                _components_travelAgent_view_travel_agents_view_travel_agents_component__WEBPACK_IMPORTED_MODULE_7__["ViewTravelAgentsComponent"],
                _components_client_view_clients_view_clients_component__WEBPACK_IMPORTED_MODULE_8__["ViewClientsComponent"],
                _components_serviceProvider_view_service_providers_view_service_providers_component__WEBPACK_IMPORTED_MODULE_9__["ViewServiceProvidersComponent"],
                _components_travelAgent_travel_agent_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["TravelAgentFilterPipe"],
                _components_serviceProvider_service_provider_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["ServiceProviderFilterPipe"],
                _components_client_client_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["ClientFilterPipe"]
            ]
        })
    ], ViewUserModule);
    return ViewUserModule;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['unauthorized']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/map';


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        console.log(user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/register", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:4201/login", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeData = function (token, userData) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        this.authtoken = token;
        this.user;
    };
    AuthService.prototype.getProfile = function () {
        this.fetchToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:4201/profile", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.fetchToken = function () {
        var token = localStorage.getItem("token");
        this.authtoken = token;
    };
    AuthService.prototype.logoutUser = function () {
        this.authtoken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/itinerary-service/itinerary.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/itinerary-service/itinerary.service.ts ***!
  \*****************************************************************/
/*! exports provided: ItineraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItineraryService", function() { return ItineraryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItineraryService = /** @class */ (function () {
    function ItineraryService(http) {
        this.http = http;
        this.eventList = [];
        this.baseURL = 'http://localhost:4201/itinerary';
    }
    ItineraryService.prototype.addEvent = function (event) {
        event.id = this.eventList.length + 1;
        this.eventList.push(event);
    };
    ;
    ItineraryService.prototype.removeEvent = function (id) {
        var event = this.eventList.findIndex(function (c) { return c.id == id; });
        this.eventList.splice(event, 1);
    };
    ItineraryService.prototype.getAllEvents = function () {
        return this.eventList;
    };
    ItineraryService.prototype.editEvent = function (event) {
        var index = this.eventList.findIndex(function (c) { return c.id === event.id; });
        this.eventList[index] = event;
    };
    ItineraryService.prototype.getDate = function () {
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        return datetime;
    };
    ItineraryService.prototype.postItinerary = function (itinerary) {
        return this.http.post(this.baseURL, itinerary);
    };
    ItineraryService.prototype.getItinerrytList = function (itinerary) {
        return this.http.get(this.baseURL + ("/" + itinerary.traveAgentName));
    };
    ItineraryService.prototype.getItinerrytList1 = function () {
        return this.http.get(this.baseURL);
    };
    ItineraryService.prototype.getOneItinerry = function (id) {
        return this.http.get(this.baseURL + "/id/" + ("" + id));
    };
    ItineraryService.prototype.putItinerry = function (itinerary) {
        return this.http.put(this.baseURL + ("/" + itinerary._id), itinerary);
    };
    ItineraryService.prototype.deleteItinerary = function (_id) {
        return this.http.delete(this.baseURL + ("/" + _id));
    };
    ItineraryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ItineraryService);
    return ItineraryService;
}());



/***/ }),

/***/ "./src/app/services/itinerary-service/model/itinerary.model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/itinerary-service/model/itinerary.model.ts ***!
  \*********************************************************************/
/*! exports provided: Itinerary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Itinerary", function() { return Itinerary; });
var Itinerary = /** @class */ (function () {
    function Itinerary() {
    }
    return Itinerary;
}());



/***/ }),

/***/ "./src/app/services/package-service/package.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/package-service/package.model.ts ***!
  \***********************************************************/
/*! exports provided: Package */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Package", function() { return Package; });
var Package = /** @class */ (function () {
    function Package() {
    }
    return Package;
}());



/***/ }),

/***/ "./src/app/services/package-service/package.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/package-service/package.service.ts ***!
  \*************************************************************/
/*! exports provided: PackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageService", function() { return PackageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PackageService = /** @class */ (function () {
    function PackageService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:4201/packages';
    }
    PackageService.prototype.postPackage = function (p) {
        return this.http.post(this.baseURL, p);
    };
    PackageService.prototype.getPackageList = function () {
        console.log("service");
        return this.http.get(this.baseURL);
    };
    PackageService.prototype.putPackage = function (p) {
        return this.http.put(this.baseURL + ("/" + p._id), p);
    };
    PackageService.prototype.putPackagePic = function (_id) {
        console.log(this.baseURL + "/profilepic" + ("/" + _id), _id);
        return this.http.put(this.baseURL + "/profilepic" + ("/" + _id), _id);
    };
    PackageService.prototype.deletePackage = function (_id) {
        return this.http.delete(this.baseURL + ("/" + _id));
    };
    PackageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PackageService);
    return PackageService;
}());



/***/ }),

/***/ "./src/app/services/password-reset-service/password-reset.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/password-reset-service/password-reset.service.ts ***!
  \***************************************************************************/
/*! exports provided: PasswordResetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetService", function() { return PasswordResetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordResetService = /** @class */ (function () {
    function PasswordResetService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:4201/forgotpassword';
    }
    PasswordResetService.prototype.postEmail = function (u) {
        console.log(u);
        return this.http.post(this.baseURL + "/reset", u);
    };
    PasswordResetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PasswordResetService);
    return PasswordResetService;
}());



/***/ }),

/***/ "./src/app/services/payment-service/itenarary-payment/itenarary-payment.model.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/services/payment-service/itenarary-payment/itenarary-payment.model.ts ***!
  \***************************************************************************************/
/*! exports provided: ItenararyPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItenararyPayment", function() { return ItenararyPayment; });
var ItenararyPayment = /** @class */ (function () {
    function ItenararyPayment() {
    }
    return ItenararyPayment;
}());



/***/ }),

/***/ "./src/app/services/payment-service/itenarary-payment/itenarary-payment.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/services/payment-service/itenarary-payment/itenarary-payment.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: ItenararyPaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItenararyPaymentService", function() { return ItenararyPaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItenararyPaymentService = /** @class */ (function () {
    function ItenararyPaymentService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:4201/itenararypayments';
    }
    ItenararyPaymentService.prototype.postItenararyPayment = function (p) {
        console.log(p);
        return this.http.post(this.baseURL, p);
    };
    ItenararyPaymentService.prototype.getItenararyPaymentList = function () {
        return this.http.get(this.baseURL);
    };
    ItenararyPaymentService.prototype.putItenararyPayment = function (p) {
        return this.http.put(this.baseURL + ("/" + p._id), p);
    };
    ItenararyPaymentService.prototype.deleteItenararyPayment = function (_id) {
        return this.http.delete(this.baseURL + ("/" + _id));
    };
    ItenararyPaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ItenararyPaymentService);
    return ItenararyPaymentService;
}());



/***/ }),

/***/ "./src/app/services/sharedata/client-payment.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/sharedata/client-payment.service.ts ***!
  \**************************************************************/
/*! exports provided: ClientPaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPaymentService", function() { return ClientPaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientPaymentService = /** @class */ (function () {
    function ClientPaymentService() {
    }
    ClientPaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ClientPaymentService);
    return ClientPaymentService;
}());



/***/ }),

/***/ "./src/app/services/sharedata/sharedata.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/sharedata/sharedata.service.ts ***!
  \*********************************************************/
/*! exports provided: SharedataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedataService", function() { return SharedataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharedataService = /** @class */ (function () {
    function SharedataService(authService) {
        this.authService = authService;
        this.user = { username: "Janiya", id: "" };
        this.messageSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.user);
        this.currentMessge = this.messageSource.asObservable();
    }
    SharedataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    SharedataService.prototype.shareUserData = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.data.user;
            _this.changeMessage(_this.user);
            console.log("ShareUserData in service " + JSON.stringify(_this.user));
        });
    };
    SharedataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SharedataService);
    return SharedataService;
}());



/***/ }),

/***/ "./src/app/services/sharedata/sp-package.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/sharedata/sp-package.service.ts ***!
  \**********************************************************/
/*! exports provided: SpPackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpPackageService", function() { return SpPackageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpPackageService = /** @class */ (function () {
    function SpPackageService() {
    }
    SpPackageService.prototype.setValue = function (id) {
        this.spid = id;
    };
    SpPackageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SpPackageService);
    return SpPackageService;
}());



/***/ }),

/***/ "./src/app/services/user-service/client/client.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/user-service/client/client.service.ts ***!
  \****************************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:4201/clients';
    }
    ClientService.prototype.postClient = function (client) {
        return this.http.post(this.baseURL, client);
    };
    ClientService.prototype.getClientList = function () {
        return this.http.get(this.baseURL);
    };
    ClientService.prototype.putClient = function (client) {
        return this.http.put(this.baseURL + ("/" + client._id), client);
    };
    ClientService.prototype.putClientPw = function (client) {
        return this.http.put(this.baseURL + "/changepw" + ("/" + client._id), client);
    };
    ClientService.prototype.deleteClient = function (_id) {
        return this.http.delete(this.baseURL + ("/" + _id));
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/user-service/serviceProvider/serviceprovider.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/services/user-service/serviceProvider/serviceprovider.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ServiceProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderService", function() { return ServiceProviderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceProviderService = /** @class */ (function () {
    function ServiceProviderService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:4201/serviceproviders';
    }
    ServiceProviderService.prototype.postServiceProvider = function (sp) {
        return this.http.post(this.baseURL, sp);
    };
    ServiceProviderService.prototype.getServiceProviderList = function () {
        return this.http.get(this.baseURL);
    };
    ServiceProviderService.prototype.putServiceProvider = function (sp) {
        return this.http.put(this.baseURL + ("/" + sp._id), sp);
    };
    ServiceProviderService.prototype.putServiceProviderPw = function (sp) {
        return this.http.put(this.baseURL + "/changepw" + ("/" + sp._id), sp);
    };
    ServiceProviderService.prototype.putServiceProviderPic = function (sp) {
        return this.http.put(this.baseURL + "/profilepic" + ("/" + sp._id), sp);
    };
    ServiceProviderService.prototype.deleteServiceProvider = function (_id) {
        return this.http.delete(this.baseURL + ("/" + _id));
    };
    ServiceProviderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServiceProviderService);
    return ServiceProviderService;
}());



/***/ }),

/***/ "./src/app/services/user-service/travelAgent/travelagent.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/user-service/travelAgent/travelagent.model.ts ***!
  \************************************************************************/
/*! exports provided: TravelAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelAgent", function() { return TravelAgent; });
var TravelAgent = /** @class */ (function () {
    function TravelAgent() {
    }
    return TravelAgent;
}());



/***/ }),

/***/ "./src/app/services/user-service/travelAgent/travelagent.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/services/user-service/travelAgent/travelagent.service.ts ***!
  \**************************************************************************/
/*! exports provided: TravelAgentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelAgentService", function() { return TravelAgentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TravelAgentService = /** @class */ (function () {
    function TravelAgentService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:4201/travelagents';
    }
    TravelAgentService.prototype.postTravelAgent = function (tagent) {
        return this.http.post(this.baseURL, tagent);
    };
    TravelAgentService.prototype.getTravelAgentList = function () {
        return this.http.get(this.baseURL);
    };
    TravelAgentService.prototype.putTravelAgent = function (tagent) {
        return this.http.put(this.baseURL + ("/" + tagent._id), tagent);
    };
    TravelAgentService.prototype.putTravelAgentPw = function (tagent) {
        return this.http.put(this.baseURL + "/changepw" + ("/" + tagent._id), tagent);
    };
    TravelAgentService.prototype.putTravelAgentProfilePic = function (tagent) {
        return this.http.put(this.baseURL + "/profilepic" + ("/" + tagent._id), tagent);
    };
    TravelAgentService.prototype.deleteTravelAgent = function (_id) {
        return this.http.delete(this.baseURL + ("/" + _id));
    };
    TravelAgentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TravelAgentService);
    return TravelAgentService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\App\Git\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map