import { Component, NgModule } from '@angular/core';
import { IonicModule, NavController } from '../../../dist';
export var SegmentPage = (function () {
    function SegmentPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.signInType = 'new';
    }
    SegmentPage.prototype.goToPage2 = function () {
        this.navCtrl.push(SegmentPage2);
    };
    /** @nocollapse */
    SegmentPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html',
                },] },
    ];
    /** @nocollapse */
    SegmentPage.ctorParameters = [
        { type: NavController, },
    ];
    return SegmentPage;
}());
export var SegmentPage2 = (function () {
    function SegmentPage2() {
    }
    SegmentPage2.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar hideBackButton>\n        <button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>\n          Second Page\n        </ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n      <h1>Page 2</h1>\n    </ion-content>\n  "
                },] },
    ];
    return SegmentPage2;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = SegmentPage;
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
                        SegmentPage,
                        SegmentPage2
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        SegmentPage,
                        SegmentPage2
                    ]
                },] },
    ];
    return AppModule;
}());
