"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthGuardService = void 0;
var core_1 = require("@angular/core");
// https://www.geeksforgeeks.org/auth-guards-in-angular-9-10-11/#:~:text=AuthGuard%20is%20used%20to%20protect,canActivate%20is%20like%20a%20constructor.//
// https://angular.io/api/router/CanActivate // 
// nterface that a class can implement to be a guard deciding if a route can be activated. If all guards return true, navigation continues. |
// If any guard returns false, navigation is cancelled. If any guard returns a UrlTree, the current navigation is cancelled and a new navigation begins to the UrlTree returned from the guard.//
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (!this.userService.loggedIn) {
            this.router.navigate([""]);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        core_1.Injectable()
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;
