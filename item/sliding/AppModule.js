import { Component, ViewChild, NgModule } from '@angular/core';
import { IonicModule, AlertController, NavController, List, ToastController } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage(nav, alertCtrl, toastCtrl) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.items = [];
        this.slidingEnabled = true;
        this.moreText = 'Dynamic More';
        this.archiveText = 'Dynamic Archive';
        for (var x = 0; x < 5; x++) {
            this.items.push(x);
        }
    }
    E2EPage.prototype.toggleSliding = function () {
        this.slidingEnabled = !this.slidingEnabled;
    };
    E2EPage.prototype.changeDynamic = function () {
        if (this.moreText.includes('Dynamic')) {
            this.moreText = 'Changed More';
            this.archiveText = 'Changed Archive';
        }
        else {
            this.moreText = 'Dynamic More';
            this.archiveText = 'Dynamic Archive';
        }
    };
    E2EPage.prototype.closeOpened = function () {
        this.list.closeSlidingItems();
    };
    E2EPage.prototype.unread = function (item) {
        if (item) {
            item.close();
        }
        console.log('UNREAD', item);
    };
    E2EPage.prototype.didClick = function (item) {
        console.log('Clicked, ion-item');
        var alert = this.alertCtrl.create({
            title: 'Clicked ion-item!',
            buttons: ['Ok']
        });
        alert.present();
    };
    E2EPage.prototype.archive = function (item) {
        console.log('Archive, ion-item-options button', item);
        var alert = this.alertCtrl.create({
            title: 'Archived!',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        item.close();
                    }
                }]
        });
        alert.present();
    };
    E2EPage.prototype.del = function (item) {
        console.log('Delete ion-item-options button', item);
        var alert = this.alertCtrl.create({
            title: 'Deleted!',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        item.close();
                    }
                }]
        });
        alert.present();
    };
    E2EPage.prototype.download = function (item) {
        var _this = this;
        item.setCssClass('downloading', true);
        setTimeout(function () {
            var toast = _this.toastCtrl.create({
                message: 'Item was downloaded!'
            });
            toast.present();
            item.setCssClass('downloading', false);
            item.close();
            setTimeout(function () {
                toast.dismiss();
            }, 2000);
        }, 1500);
    };
    E2EPage.prototype.reload = function () {
        window.location.reload();
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: NavController, },
        { type: AlertController, },
        { type: ToastController, },
    ];
    /** @nocollapse */
    E2EPage.propDecorators = {
        'list': [{ type: ViewChild, args: ['myList', { read: List },] },],
    };
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
                        E2EPage
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
