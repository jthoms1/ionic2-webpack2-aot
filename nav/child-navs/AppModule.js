import { NgModule, Component } from '@angular/core';
import { IonicModule, NavController } from '../../../dist';
export var E2EApp = (function () {
    function E2EApp() {
        this.root = LandingPage;
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    template: "<ion-nav [root]=\"root\"></ion-nav>",
                },] },
    ];
    return E2EApp;
}());
export var LandingPage = (function () {
    function LandingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LandingPage.prototype.goToPage = function () {
        this.navCtrl.push(FirstPage);
    };
    /** @nocollapse */
    LandingPage.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>\n        Landing Page Comp\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <button primary (click)=\"goToPage()\" class=\"nested-children-test\">\n      Nested Children Test\n    </button>\n  </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    LandingPage.ctorParameters = [
        { type: NavController, },
    ];
    return LandingPage;
}());
export var FirstPage = (function () {
    function FirstPage() {
        this.root = SecondPage;
    }
    /** @nocollapse */
    FirstPage.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>\n        First Page Comp\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <h3>Sub Header First Page</h3>\n    <ion-nav [root]=\"root\"></ion-nav>\n  </ion-content>\n  "
                },] },
    ];
    return FirstPage;
}());
export var SecondPage = (function () {
    function SecondPage() {
        this.root = ThirdPage;
    }
    /** @nocollapse */
    SecondPage.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>\n        Second Page Comp\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <h3>Sub Header Second Page</h3>\n    <ion-nav [root]=\"root\"></ion-nav>\n  </ion-content>\n  "
                },] },
    ];
    return SecondPage;
}());
export var ThirdPage = (function () {
    function ThirdPage() {
        this.root = FourthPage;
    }
    /** @nocollapse */
    ThirdPage.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>\n        Third Page Comp\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <h3>Sub Header Third Page</h3>\n    <ion-nav [root]=\"root\"></ion-nav>\n  </ion-content>\n  "
                },] },
    ];
    return ThirdPage;
}());
export var FourthPage = (function () {
    function FourthPage() {
    }
    FourthPage.prototype.ionViewWillEnter = function () {
        var items = [];
        for (var i = 0; i < 500; i++) {
            items.push("Item " + (i + 1));
        }
        this.items = items;
    };
    /** @nocollapse */
    FourthPage.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor=\"let item of items\">\n        {{item}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  "
                },] },
    ];
    return FourthPage;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        E2EApp,
                        LandingPage,
                        FirstPage,
                        SecondPage,
                        ThirdPage,
                        FourthPage
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        LandingPage,
                        FirstPage,
                        SecondPage,
                        ThirdPage,
                        FourthPage
                    ]
                },] },
    ];
    return AppModule;
}());
