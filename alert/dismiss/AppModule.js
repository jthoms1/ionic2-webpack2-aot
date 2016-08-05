import { Component, NgModule } from '@angular/core';
import { IonicModule, AlertController, LoadingController, NavController } from '../../../dist';
import { Validators, FormBuilder } from '@angular/forms';
export var E2EPage = (function () {
    function E2EPage(alertCtrl, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
    }
    E2EPage.prototype.submit = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Not logged in',
            message: 'Sign in to continue.',
            buttons: [
                {
                    text: 'Sign in',
                    handler: function () {
                        console.log('Sign in');
                    }
                }
            ]
        });
        alert.onDidDismiss(function () {
            console.log('dismiss');
            _this.navCtrl.push(AnotherPage);
        });
        alert.present();
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: AlertController, },
        { type: NavController, },
    ];
    return E2EPage;
}());
export var AnotherPage = (function () {
    function AnotherPage(navCtrl, alertCtrl, loadingCtrl, builder) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.builder = builder;
        this.form = builder.group({
            firstName: builder.control('', Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ]))
        });
    }
    AnotherPage.prototype.submit = function (value) {
        if (this.form.valid) {
            console.log(value);
        }
        else {
            this.alertCtrl.create({
                title: 'Invalid input data',
                subTitle: 'Please correct the errors and resubmit the data.',
                buttons: ['OK']
            }).present();
        }
    };
    AnotherPage.prototype.ionViewDidEnter = function () {
        this.showConfirm();
    };
    AnotherPage.prototype.showConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Hi there",
            buttons: [
                {
                    text: 'Go Back',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss().then(function () {
                            _this.navCtrl.pop();
                        });
                        return false;
                    }
                },
                {
                    text: 'Stay Here',
                    handler: function () {
                        console.log('Stay Here');
                    }
                }
            ]
        });
        alert.present();
    };
    AnotherPage.prototype.doFastPop = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Async Nav Transition',
            message: 'This is an example of dismissing an alert, then quickly starting another transition on the same nav controller.',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        // present a loading indicator
                        var loading = _this.loadingCtrl.create({
                            content: 'Loading...'
                        });
                        loading.present();
                        // start an async operation
                        setTimeout(function () {
                            // the async operation has completed
                            // dismiss the loading indicator
                            loading.dismiss();
                            // begin dismissing the alert
                            alert.dismiss().then(function () {
                                // after the alert has been dismissed
                                // then you can do another nav transition
                                _this.navCtrl.pop();
                            });
                        }, 100);
                        // return false so the alert doesn't automatically
                        // dismissed itself. Instead we're manually
                        // handling the dismiss logic above so that we
                        // can wait for the alert to finish it's dismiss
                        // transition before starting another nav transition
                        // on the same nav controller
                        return false;
                    }
                }]
        });
        alert.present();
    };
    /** @nocollapse */
    AnotherPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Another Page</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit(form.value)\">\n        <ion-list>\n          <ion-item>\n            <ion-label>Name</ion-label>\n            <ion-input name=\"firstName\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <div padding style=\"padding-top: 0 !important;\">\n          <button list-item primary block>\n            Submit\n          </button>\n        </div>\n      </form>\n      <p>\n        <button block (click)=\"doFastPop()\">Fast Loading Dismiss, Nav Pop</button>\n      </p>\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    AnotherPage.ctorParameters = [
        { type: NavController, },
        { type: AlertController, },
        { type: LoadingController, },
        { type: FormBuilder, },
    ];
    return AnotherPage;
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
                    bootstrap: [E2EApp],
                    entryComponents: [
                        E2EPage,
                        AnotherPage
                    ]
                },] },
    ];
    return AppModule;
}());
