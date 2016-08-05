import { Component, NgModule } from '@angular/core';
import { IonicModule, NavController } from '../../../dist';
export var FirstPage = (function () {
    function FirstPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FirstPage.prototype.pushPage = function () {
        this.navCtrl.push(SecondPage);
    };
    /** @nocollapse */
    FirstPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Root</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <button block (click)=\"pushPage()\">Push Page</button>\n    </ion-content>",
                },] },
    ];
    /** @nocollapse */
    FirstPage.ctorParameters = [
        { type: NavController, },
    ];
    return FirstPage;
}());
export var SecondPage = (function () {
    function SecondPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SecondPage.prototype.insertPage = function () {
        this.navCtrl.insert(1, InsertPage);
    };
    /** @nocollapse */
    SecondPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Root</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <h1>Second page</h1>\n      <button block (click)=\"insertPage()\">Insert Page</button>\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    SecondPage.ctorParameters = [
        { type: NavController, },
    ];
    return SecondPage;
}());
export var InsertPage = (function () {
    function InsertPage() {
    }
    InsertPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Inserted Paged</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n      Inserted Page\n    </ion-content>\n  "
                },] },
    ];
    return InsertPage;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = FirstPage;
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    template: "<ion-nav [root]=\"root\"></ion-nav>"
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
                        FirstPage,
                        SecondPage,
                        InsertPage
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        FirstPage,
                        SecondPage,
                        InsertPage
                    ]
                },] },
    ];
    return AppModule;
}());
