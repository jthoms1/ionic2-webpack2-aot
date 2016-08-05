import { Component, NgModule } from '@angular/core';
import { IonicModule, ActionSheetController, AlertController, ModalController, ViewController, Platform } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage(actionSheetCtrl, alertCtrl, modalCtrl, platform) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.result = '';
    }
    E2EPage.prototype.presentActionSheet1 = function () {
        var _this = this;
        this.result = '';
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Albums',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete clicked');
                        _this.result = 'Deleted';
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Share clicked');
                        _this.result = 'Shared';
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        var modal = _this.modalCtrl.create(ModalPage);
                        modal.present();
                        // returning false does not allow the actionsheet to be closed
                        return false;
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart' : null,
                    handler: function () {
                        console.log('Favorite clicked');
                        _this.result = 'Favorited';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.result = 'Canceled';
                    }
                }
            ]
        });
        actionSheet.present();
    };
    E2EPage.prototype.presentActionSheet2 = function () {
        var _this = this;
        this.result = '';
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                        _this.result = 'Archived';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('cancel this clicked');
                        _this.result = 'Canceled';
                    }
                },
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                        _this.result = 'Destructive';
                    }
                }
            ]
        });
        actionSheet.present(actionSheet);
    };
    E2EPage.prototype.presentActionSheet3 = function () {
        var _this = this;
        this.result = '';
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Open Alert',
                    handler: function () {
                        _this.result = 'Opened alert';
                        var alert = _this.alertCtrl.create();
                        alert.setTitle('Alert!');
                        alert.setMessage('Alert opened from an action sheet');
                        alert.addButton({
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                _this.result = 'pressed Cancel button in alert from action sheet';
                            }
                        });
                        alert.addButton({
                            text: 'Okay',
                            handler: function () {
                                _this.result = 'pressed Okay button in alert from action sheet';
                            }
                        });
                        alert.present().then(function () {
                            _this.result = 'Alert from action sheet opened';
                        });
                        // do not close the action sheet yet
                        return false;
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.result = 'Canceled';
                    }
                }
            ]
        });
        actionSheet.present();
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: ActionSheetController, },
        { type: AlertController, },
        { type: ModalController, },
        { type: Platform, },
    ];
    return E2EPage;
}());
export var ModalPage = (function () {
    function ModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    /** @nocollapse */
    ModalPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons start>\n          <button (click)=\"dismiss()\">Close</button>\n        </ion-buttons>\n        <ion-title>Modal</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content padding>\n      Hi, I'm Bob, and I'm a modal.\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    ModalPage.ctorParameters = [
        { type: ViewController, },
    ];
    return ModalPage;
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
                        ModalPage
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    bootstrap: [E2EApp],
                    entryComponents: [
                        E2EPage,
                        ModalPage
                    ]
                },] },
    ];
    return AppModule;
}());
