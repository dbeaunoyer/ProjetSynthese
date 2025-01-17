"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UserService = /** @class */ (function () {
    function UserService(localStorageService) {
        this.localStorageService = localStorageService;
        this.loggedIn = false;
        this.logger = new rxjs_1.BehaviorSubject(this.loggedIn);
        this.loggedIn = this.localStorageService.getItem('login') !== null;
        this.logger.next(this.loggedIn);
    }
    UserService.prototype.isLoggedIn = function () {
        return this.logger.asObservable();
    };
    UserService.prototype.logIn = function (loginDetails) {
        this.localStorageService.setItem('login', loginDetails);
        this.loggedIn = true;
        this.logger.next(this.loggedIn);
    };
    // Log info reutilise dans la navBar
    UserService.prototype.loginInfo = function () {
        var info = this.localStorageService.getItem('login') || '{}';
        return JSON.parse(info);
    };
    UserService.prototype.logOut = function () {
        localStorage.removeItem('login');
        this.loggedIn = false;
        this.logger.next(this.loggedIn);
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
