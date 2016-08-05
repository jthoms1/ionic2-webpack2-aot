import { Component, NgModule } from '@angular/core';
import { IonicModule, LoadingController, NavController } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage(loadingCtrl, navCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
    }
    E2EPage.prototype.presentLoading = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Loading...',
            duration: 1000
        });
        loading.present();
    };
    E2EPage.prototype.presentLoadingNav = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        loading.present();
        setTimeout(function () {
            _this.navCtrl.push(Page2);
            setTimeout(function () {
                loading.dismiss();
            }, 1000);
        }, 1000);
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: LoadingController, },
        { type: NavController, },
    ];
    return E2EPage;
}());
export var Page2 = (function () {
    function Page2() {
    }
    Page2.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Page 2</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>Some content</ion-content>\n  "
                },] },
    ];
    return Page2;
}());
export var TabsPage = (function () {
    function TabsPage() {
        this.root1 = E2EPage;
        this.root2 = Page2;
        this.root3 = E2EPage;
    }
    /** @nocollapse */
    TabsPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-tabs>\n      <ion-tab tabTitle=\"Plain List\" tabIcon=\"star\" [root]=\"root1\"></ion-tab>\n      <ion-tab tabTitle=\"Schedule\" tabIcon=\"globe\" [root]=\"root2\"></ion-tab>\n      <ion-tab tabTitle=\"Stopwatch\" tabIcon=\"stopwatch\" [root]=\"root3\"></ion-tab>\n    </ion-tabs>\n  "
                },] },
    ];
    return TabsPage;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = TabsPage;
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    template: '<ion-nav [root]="root"></ion-nav>'
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
                        E2EPage,
                        TabsPage,
                        Page2
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        E2EPage,
                        TabsPage,
                        Page2
                    ]
                },] },
    ];
    return AppModule;
}());
