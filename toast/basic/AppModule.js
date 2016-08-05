import { Component, NgModule } from '@angular/core';
import { IonicModule, ToastController, NavController } from '../../../dist';
export var AnotherPage = (function () {
    function AnotherPage() {
    }
    AnotherPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Another Page</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n      <p>This is another page to show that the toast stays.</p>\n    </ion-content>\n  "
                },] },
    ];
    return AnotherPage;
}());
export var E2EPage = (function () {
    function E2EPage(toastCtrl, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
    }
    E2EPage.prototype.showToast = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'User was created successfully'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
        setTimeout(function () {
            _this.navCtrl.push(AnotherPage);
        }, 1000);
        setTimeout(function () {
            toast.dismiss();
        }, 2000);
    };
    E2EPage.prototype.showLongToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
            duration: 5000
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    };
    E2EPage.prototype.showDismissDurationToast = function () {
        var toast = this.toastCtrl.create({
            message: 'I am dismissed after 1.5 seconds',
            duration: 1500
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    };
    E2EPage.prototype.showToastWithCloseButton = function (positionString) {
        var toast = this.toastCtrl.create({
            message: 'Your internet connection appears to be offline. Data integrity is not gauranteed.',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: positionString
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    };
    E2EPage.prototype.dismissHandler = function (toast) {
        console.info('Toast onDidDismiss()');
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: ToastController, },
        { type: NavController, },
    ];
    return E2EPage;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = E2EPage;
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
                        AnotherPage
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        E2EPage,
                        AnotherPage
                    ]
                },] },
    ];
    return AppModule;
}());
