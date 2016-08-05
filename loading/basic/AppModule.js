import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { IonicModule, LoadingController, NavController } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage(loadingCtrl, navCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
    }
    E2EPage.prototype.presentLoadingIos = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'ios',
            duration: 1000,
            cssClass: 'my-custom-loader'
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        loading.present();
    };
    E2EPage.prototype.presentLoadingDots = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Loading...',
            duration: 1000
        });
        loading.present();
    };
    E2EPage.prototype.presentLoadingBubbles = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...',
            duration: 1000
        });
        loading.present();
    };
    E2EPage.prototype.presentLoadingCircles = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Loading...',
            duration: 1000
        });
        loading.present();
    };
    E2EPage.prototype.presentLoadingCrescent = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Please wait...',
            duration: 1000
        });
        loading.present();
    };
    // Pass the fixed-spinner class so we can turn off
    // spinner animation for the e2e test
    E2EPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            cssClass: 'fixed-spinner'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
    };
    E2EPage.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\"></div>\n        </div>",
            duration: 1000
        });
        loading.present();
    };
    E2EPage.prototype.presentLoadingText = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Loading Please Wait...'
        });
        loading.present();
        setTimeout(function () {
            _this.navCtrl.push(Page2);
        }, 1000);
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
    };
    E2EPage.prototype.goToPage2 = function () {
        this.navCtrl.push(Page2);
    };
    E2EPage.prototype.presentLoadingMultiple = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Loading 1 Please Wait...'
        });
        loading.present();
        var loading2 = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Loading 2 Please Wait...'
        });
        setTimeout(function () {
            loading2.present();
        }, 1000);
        var loading3 = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Loading 3 Please Wait...'
        });
        setTimeout(function () {
            loading3.present();
            setTimeout(function () {
                loading3.dismiss();
            }, 1000);
            setTimeout(function () {
                loading2.dismiss();
            }, 2000);
            setTimeout(function () {
                loading.dismiss();
            }, 3000);
        }, 2000);
    };
    E2EPage.prototype.presentLoadingMultipleNav = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Loading 1 Please Wait...',
            dismissOnPageChange: true
        });
        loading.present();
        var loading2 = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Loading 2 Please Wait...',
            dismissOnPageChange: true
        });
        setTimeout(function () {
            loading2.present();
        }, 500);
        var loading3 = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Loading 3 Please Wait...',
            dismissOnPageChange: true
        });
        setTimeout(function () {
            loading3.present();
            setTimeout(function () {
                _this.navCtrl.push(Page2);
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
    function Page2(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page2.prototype.ionViewLoaded = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.push(Page3);
        }, 1000);
    };
    Page2.prototype.goToPage3 = function () {
        this.navCtrl.push(Page3);
    };
    /** @nocollapse */
    Page2.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Page 2</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>Some content</ion-content>\n    <ion-footer>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button (click)=\"goToPage3()\">\n            Navigate\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-footer>\n  "
                },] },
    ];
    /** @nocollapse */
    Page2.ctorParameters = [
        { type: NavController, },
    ];
    return Page2;
}());
export var Page3 = (function () {
    function Page3() {
    }
    Page3.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Page 3</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>Some content</ion-content>\n  "
                },] },
    ];
    return Page3;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = E2EPage;
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    template: "\n    <link href=\"styles.css\" rel=\"stylesheet\">\n    <ion-nav [root]=\"root\"></ion-nav>\n  ",
                    encapsulation: ViewEncapsulation.None
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
                        Page2,
                        Page3
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        E2EPage,
                        Page2,
                        Page3
                    ]
                },] },
    ];
    return AppModule;
}());
