import { Component, ViewChild, NgModule } from '@angular/core';
import { IonicModule, NavController, MenuController, App } from '../../../dist';
export var Login = (function () {
    function Login(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
    }
    Login.prototype.goToAccount = function () {
        this.navCtrl.push(Account);
    };
    Login.prototype.goBack = function () {
        this.app.navPop();
    };
    /** @nocollapse */
    Login.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Login</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content style=\"text-align:center;\" padding>\n      <p><button (click)=\"goToAccount()\">Login</button></p>\n      <p><button (click)=\"goBack()\">App goBack()</button></p>\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    Login.ctorParameters = [
        { type: NavController, },
        { type: App, },
    ];
    return Login;
}());
export var Account = (function () {
    function Account(menuCtrl, app) {
        this.menuCtrl = menuCtrl;
        this.app = app;
        this.root = Dashboard;
    }
    Account.prototype.goToProfile = function () {
        var _this = this;
        this.accountNav.setRoot(Profile).then(function () {
            _this.menuCtrl.close();
        });
    };
    Account.prototype.goToDashboard = function () {
        var _this = this;
        this.accountNav.setRoot(Dashboard).then(function () {
            _this.menuCtrl.close();
        });
    };
    Account.prototype.logOut = function () {
        var _this = this;
        this.accountNav.setRoot(Login, null, { animate: true }).then(function () {
            _this.menuCtrl.close();
        });
    };
    Account.prototype.goBack = function () {
        this.app.navPop();
    };
    /** @nocollapse */
    Account.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-menu [content]=\"content\">\n     <ion-header>\n      <ion-toolbar secondary>\n        <ion-title>Account Menu</ion-title>\n      </ion-toolbar>\n     </ion-header>\n     <ion-content>\n       <ion-list>\n         <button ion-item (click)=\"goToProfile()\">\n           Profile\n         </button>\n         <button ion-item (click)=\"goToDashboard()\">\n           Dashboard\n         </button>\n         <button ion-item detail-none (click)=\"logOut()\">\n           Logout\n         </button>\n         <button ion-item detail-none (click)=\"goBack()\">\n           App Go Back\n         </button>\n       </ion-list>\n     </ion-content>\n    </ion-menu>\n\n    <ion-nav #accountNav #content [root]=\"root\" swipeBackEnabled=\"false\"></ion-nav>\n  "
                },] },
    ];
    /** @nocollapse */
    Account.ctorParameters = [
        { type: MenuController, },
        { type: App, },
    ];
    /** @nocollapse */
    Account.propDecorators = {
        'accountNav': [{ type: ViewChild, args: ['accountNav',] },],
    };
    return Account;
}());
export var Dashboard = (function () {
    function Dashboard(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
    }
    Dashboard.prototype.goToProfile = function () {
        this.navCtrl.push(Profile);
    };
    Dashboard.prototype.logOut = function () {
        this.navCtrl.parent.setRoot(Login, null, {
            animate: true,
            direction: 'back'
        });
    };
    Dashboard.prototype.goBack = function () {
        this.app.navPop();
    };
    /** @nocollapse */
    Dashboard.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar primary>\n        <button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Account Dashboard</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n      <p><button (click)=\"goToProfile()\">Profile</button></p>\n      <p><button (click)=\"logOut()\">Logout</button></p>\n      <p><button (click)=\"goBack()\">App goBack()</button></p>\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    Dashboard.ctorParameters = [
        { type: NavController, },
        { type: App, },
    ];
    return Dashboard;
}());
export var Profile = (function () {
    function Profile(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
    }
    Profile.prototype.goToDashboard = function () {
        this.navCtrl.push(Dashboard);
    };
    Profile.prototype.logOut = function () {
        this.navCtrl.parent.setRoot(Login, null, {
            animate: true,
            direction: 'back'
        });
    };
    Profile.prototype.goBack = function () {
        this.app.navPop();
    };
    /** @nocollapse */
    Profile.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar danger>\n        <button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Account Profile</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n      <p><button (click)=\"goToDashboard()\">Dashboard</button></p>\n      <p><button (click)=\"logOut()\">Logout</button></p>\n      <p><button (click)=\"goBack()\">App goBack()</button></p>\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    Profile.ctorParameters = [
        { type: NavController, },
        { type: App, },
    ];
    return Profile;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.rootPage = Login;
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    template: "<ion-nav [root]=\"rootPage\" swipeBackEnabled=\"false\"></ion-nav>"
                },] },
    ];
    return E2EApp;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        E2EApp,
                        Login,
                        Account,
                        Dashboard,
                        Profile
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    bootstrap: [E2EApp],
                    entryComponents: [
                        Login,
                        Account,
                        Dashboard,
                        Profile
                    ]
                },] },
    ];
    return AppModule;
}());
