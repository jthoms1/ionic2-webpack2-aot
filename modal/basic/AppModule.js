var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Injectable, NgModule } from '@angular/core';
import { ActionSheetController, App, Config, IonicModule, ModalController, NavController, NavParams, PageTransition, Platform, ViewController } from '../../../dist';
export var SomeComponentProvider = (function () {
    function SomeComponentProvider(config) {
        this.config = config;
        console.log('SomeComponentProvider constructor');
    }
    SomeComponentProvider.prototype.getName = function () {
        return 'Jenny';
    };
    /** @nocollapse */
    SomeComponentProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SomeComponentProvider.ctorParameters = [
        { type: Config, },
    ];
    return SomeComponentProvider;
}());
export var SomeAppProvider = (function () {
    function SomeAppProvider(config) {
        this.config = config;
        console.log('SomeAppProvider constructor');
    }
    SomeAppProvider.prototype.getData = function () {
        return 'Some data';
    };
    /** @nocollapse */
    SomeAppProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SomeAppProvider.ctorParameters = [
        { type: Config, },
    ];
    return SomeAppProvider;
}());
export var E2EPage = (function () {
    function E2EPage(navCtrl, modalCtrl, config, platform) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        console.log('platforms', platform.platforms());
        console.log('mode', config.get('mode'));
        console.log('isRTL', platform.isRTL());
        console.log('core', platform.is('core'));
        console.log('cordova', platform.is('cordova'));
        console.log('mobile', platform.is('mobile'));
        console.log('mobileweb', platform.is('mobileweb'));
        console.log('ipad', platform.is('ipad'));
        console.log('iphone', platform.is('iphone'));
        console.log('phablet', platform.is('phablet'));
        console.log('tablet', platform.is('tablet'));
        console.log('ios', platform.is('ios'));
        console.log('android', platform.is('android'));
        console.log('windows phone', platform.is('windows'));
        platform.ready().then(function (readySource) {
            console.log('platform.ready, readySource:', readySource);
        });
        this.platforms = platform.platforms();
    }
    E2EPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(ModalPassData, { userId: 8675309 });
        modal.present();
        modal.onWillDismiss(function (data) {
            console.log('WILL DISMISS with data', data);
            console.timeEnd('modal');
        });
        modal.onDidDismiss(function (data) {
            console.log('modal data', data);
            console.timeEnd('modal');
        });
    };
    E2EPage.prototype.presentModalChildNav = function () {
        this.modalCtrl.create(ContactUs).present();
    };
    E2EPage.prototype.presentToolbarModal = function () {
        var modal = this.modalCtrl.create(ToolbarModal);
        modal.present();
        modal.subscribe(function (data) {
            console.log('modal data', data);
        });
    };
    E2EPage.prototype.presentModalWithInputs = function () {
        var modal = this.modalCtrl.create(ModalWithInputs);
        modal.onDidDismiss(function (data) {
            console.log('Modal with inputs data:', data);
        });
        modal.present();
    };
    E2EPage.prototype.presentModalCustomAnimation = function () {
        var modal = this.modalCtrl.create(ContactUs);
        modal.present({
            animation: 'my-fade-in'
        });
    };
    E2EPage.prototype.presentNavigableModal = function () {
        this.modalCtrl.create(NavigableModal).present();
    };
    E2EPage.prototype.ionViewLoaded = function () {
        console.log('E2EPage ionViewLoaded fired');
    };
    E2EPage.prototype.ionViewWillEnter = function () {
        console.log('E2EPage ionViewWillEnter fired');
    };
    E2EPage.prototype.ionViewDidEnter = function () {
        console.log('E2EPage ionViewDidEnter fired');
    };
    E2EPage.prototype.ionViewWillLeave = function () {
        console.log('E2EPage ionViewWillLeave fired');
    };
    E2EPage.prototype.ionViewDidLeave = function () {
        console.log('E2EPage ionViewDidLeave fired');
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
        { type: ModalController, },
        { type: Config, },
        { type: Platform, },
    ];
    return E2EPage;
}());
export var NavigableModal = (function () {
    function NavigableModal(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NavigableModal.prototype.submit = function () {
        this.navCtrl.push(NavigableModal2);
    };
    /** @nocollapse */
    NavigableModal.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>Page One</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <button full (click)=\"submit()\">Submit</button>\n  </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    NavigableModal.ctorParameters = [
        { type: NavController, },
    ];
    return NavigableModal;
}());
export var NavigableModal2 = (function () {
    function NavigableModal2(navController) {
        this.navController = navController;
    }
    NavigableModal2.prototype.submit = function () {
        this.navController.pop();
    };
    /** @nocollapse */
    NavigableModal2.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>Page Two</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <button full (click)=\"submit()\">Submit</button>\n  </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    NavigableModal2.ctorParameters = [
        { type: NavController, },
    ];
    return NavigableModal2;
}());
export var ModalPassData = (function () {
    function ModalPassData(params, viewCtrl, someComponentProvider, someAppProvider) {
        this.viewCtrl = viewCtrl;
        this.data = {
            userId: params.get('userId'),
            name: someComponentProvider.getName()
        };
        console.log('SomeAppProvider Data', someAppProvider.getData());
    }
    ModalPassData.prototype.submit = function () {
        console.time('modal');
        this.viewCtrl.dismiss(this.data);
    };
    ModalPassData.prototype.ionViewLoaded = function () {
        console.log('ModalPassData ionViewLoaded fired');
    };
    ModalPassData.prototype.ionViewWillEnter = function () {
        console.log('ModalPassData ionViewWillEnter fired');
    };
    ModalPassData.prototype.ionViewDidEnter = function () {
        console.log('ModalPassData ionViewDidEnter fired');
    };
    ModalPassData.prototype.ionViewWillLeave = function () {
        console.log('ModalPassData ionViewWillLeave fired');
    };
    ModalPassData.prototype.ionViewDidLeave = function () {
        console.log('ModalPassData ionViewDidLeave fired');
    };
    /** @nocollapse */
    ModalPassData.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Data in/out</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item>\n          <ion-label>UserId</ion-label>\n          <ion-input type=\"number\" [(ngModel)]=\"data.userId\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Name</ion-label>\n          <ion-input [(ngModel)]=\"data.name\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button full (click)=\"submit()\">Submit</button>\n    </ion-content>\n  ",
                    providers: [SomeComponentProvider]
                },] },
    ];
    /** @nocollapse */
    ModalPassData.ctorParameters = [
        { type: NavParams, },
        { type: ViewController, },
        { type: SomeComponentProvider, },
        { type: SomeAppProvider, },
    ];
    return ModalPassData;
}());
export var ToolbarModal = (function () {
    function ToolbarModal(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ToolbarModal.prototype.dismiss = function () {
        this.viewCtrl.emit({
            toolbar: 'data'
        });
        this.viewCtrl.dismiss();
    };
    /** @nocollapse */
    ToolbarModal.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-toolbar primary>\n        <ion-title>Toolbar 1</ion-title>\n      </ion-toolbar>\n\n      <ion-toolbar no-border-top>\n        <ion-title>Toolbar 2</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content padding>\n      <button block danger (click)=\"dismiss()\" class=\"e2eCloseToolbarModal\">\n        Dismission Modal\n      </button>\n\n      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ipsum in purus mollis dictum eget vitae purus. Nulla ultrices est odio, a maximus velit pretium ac. Donec vel elementum mi. Proin elementum pulvinar neque, in lacinia nibh tempus auctor. Nam sapien velit, commodo ac nibh a, maximus ullamcorper nunc. Integer luctus tortor dignissim, dictum neque at, scelerisque purus. Vivamus nec erat vel magna posuere euismod. Sed ac augue eu tellus tincidunt fermentum eget sit amet nunc. Donec sit amet mi libero. Cras nunc arcu, ultrices nec sapien eu, convallis posuere libero. Pellentesque vulputate lacus eros, at lobortis lorem egestas et. Vestibulum tempus quam in efficitur lobortis. Maecenas consectetur consequat sem pharetra aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>\n\n      <div>Mauris ac ligula elit. Nulla pulvinar eget leo ut aliquet. Praesent sit amet luctus quam. Nam fringilla iaculis mi, ut maximus mauris molestie feugiat. Curabitur nec scelerisque elit. Nunc eu odio facilisis, tempor enim eget, venenatis sem. Sed vitae lorem vehicula, auctor orci ultrices, finibus mauris. Donec vitae pulvinar diam. Nulla luctus congue quam, sed lacinia arcu dictum a.</div>\n\n      <div>Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut. Etiam euismod elit mi, non auctor velit blandit ut. Aenean vitae pulvinar mi, ac pretium tellus. Morbi eu auctor sem, sollicitudin cursus felis. Praesent vestibulum velit sed eros iaculis ornare. Praesent diam diam, pellentesque eget scelerisque sed, bibendum ut risus. Sed sed fermentum sem. Integer vel justo felis. Proin eget quam est. In sit amet ipsum sagittis, convallis ipsum fringilla, interdum ante. Etiam vel tincidunt mauris. Nunc feugiat eros nunc, et vestibulum metus mollis et. Nullam eu viverra velit, id ultrices nisl. Donec non enim elementum, laoreet sapien id, feugiat tellus.</div>\n\n      <div>Sed pellentesque ipsum eget ante hendrerit maximus. Aliquam id venenatis nulla. Nullam in nibh at enim vestibulum ullamcorper. Nam felis dolor, lobortis vel est non, condimentum malesuada nisl. In metus sapien, malesuada at nulla in, pretium aliquam turpis. Quisque elementum purus mi, sed tristique turpis ultricies in. Donec feugiat dolor non ultricies ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ut purus et diam porta cursus vitae semper mi. Donec fringilla tellus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vitae commodo sem. Duis vehicula quam sit amet imperdiet facilisis. Pellentesque eget dignissim neque, et scelerisque libero. Maecenas molestie metus sed orci cursus, in venenatis justo dapibus.</div>\n\n      <div>Aenean rhoncus urna at interdum blandit. Donec ac massa nec libero vehicula tincidunt. Sed sit amet hendrerit risus. Aliquam vitae vestibulum ipsum, non feugiat orci. Vivamus eu rutrum elit. Nulla dapibus tortor non dignissim pretium. Nulla in luctus turpis. Etiam non mattis tortor, at aliquet ex. Nunc ut ante varius, auctor dui vel, volutpat elit. Nunc laoreet augue sit amet ultrices porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum pellentesque lobortis est, ut tincidunt ligula mollis sit amet. In porta risus arcu, quis pellentesque dolor mattis non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</div>\n\n      <button block danger (click)=\"dismiss()\" class=\"e2eCloseToolbarModal\">\n        Dismission Modal\n      </button>\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    ToolbarModal.ctorParameters = [
        { type: ViewController, },
    ];
    return ToolbarModal;
}());
export var ModalWithInputs = (function () {
    function ModalWithInputs(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.data = {
            title: 'Title',
            note: 'Note',
            icon: 'home'
        };
    }
    ModalWithInputs.prototype.save = function (ev) {
        this.viewCtrl.dismiss(this.data);
    };
    ModalWithInputs.prototype.dismiss = function () {
        this.viewCtrl.dismiss(null);
    };
    /** @nocollapse */
    ModalWithInputs.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-toolbar secondary>\n        <ion-buttons start>\n          <button (click)=\"dismiss()\">Close</button>\n        </ion-buttons>\n        <ion-title>Modal w/ Inputs</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <form #addForm=\"ngForm\" (submit)=\"save($event)\" novalidate>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>Title <span [hidden]=\"data.title.valid\">(Required)</span></ion-label>\n            <ion-input formControlName=\"title\" type=\"text\" [(ngModel)]=\"data.title\" required autofocus></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Note <span [hidden]=\"data.note.valid\">(Required)</span></ion-label>\n            <ion-input formControlName=\"note\" type=\"text\" [(ngModel)]=\"data.note\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Icon</ion-label>\n            <ion-input formControlName=\"icon\" type=\"text\" [(ngModel)]=\"data.icon\" autocomplete=\"on\" autocorrect=\"on\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <div padding>\n          <button block large type=\"submit\" [disabled]=\"!addForm.valid\">Save</button>\n        </div>\n      </form>\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    ModalWithInputs.ctorParameters = [
        { type: ViewController, },
    ];
    return ModalWithInputs;
}());
export var ContactUs = (function () {
    function ContactUs() {
        this.root = ModalFirstPage;
        console.log('ContactUs constructor');
    }
    ContactUs.prototype.ionViewLoaded = function () {
        console.log('ContactUs ionViewLoaded');
    };
    ContactUs.prototype.ionViewWillEnter = function () {
        console.log('ContactUs ionViewWillEnter');
    };
    ContactUs.prototype.ionViewDidEnter = function () {
        console.log('ContactUs ionViewDidEnter');
    };
    ContactUs.prototype.ionViewWillLeave = function () {
        console.log('ContactUs ionViewWillLeave');
    };
    ContactUs.prototype.ionViewDidLeave = function () {
        console.log('ContactUs ionViewDidLeave');
    };
    ContactUs.prototype.ionViewWillUnload = function () {
        console.log('ContactUs ionViewWillUnload');
    };
    ContactUs.prototype.ionViewDidUnload = function () {
        console.log('ContactUs ionViewDidUnload');
    };
    /** @nocollapse */
    ContactUs.decorators = [
        { type: Component, args: [{
                    template: '<ion-nav [root]="root"></ion-nav>'
                },] },
    ];
    /** @nocollapse */
    ContactUs.ctorParameters = [];
    return ContactUs;
}());
export var ModalFirstPage = (function () {
    function ModalFirstPage(navCtrl, app, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.actionSheetCtrl = actionSheetCtrl;
        this.items = [];
        for (var i = 0; i < 50; i++) {
            this.items.push({
                value: (i + 1)
            });
        }
    }
    ModalFirstPage.prototype.push = function () {
        var page = ModalSecondPage;
        var params = { id: 8675309, myData: [1, 2, 3, 4] };
        this.navCtrl.push(page, params);
    };
    ModalFirstPage.prototype.dismiss = function () {
        this.navCtrl.parent.pop();
    };
    ModalFirstPage.prototype.ionViewLoaded = function () {
        console.log('ModalFirstPage ionViewLoaded fired');
    };
    ModalFirstPage.prototype.ionViewWillEnter = function () {
        console.log('ModalFirstPage ionViewWillEnter fired');
    };
    ModalFirstPage.prototype.ionViewDidEnter = function () {
        console.log('ModalFirstPage ionViewDidEnter fired');
    };
    ModalFirstPage.prototype.openActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Go To Root',
                    handler: function () {
                        // overlays are added and removed from the root navigation
                        // find the root navigation, and pop this alert
                        // when the alert is done animating out, then pop off the modal
                        _this.app.getRootNav().pop().then(function () {
                            _this.app.getRootNav().pop();
                        });
                        // by default an alert will dismiss itself
                        // however, we don't want to use the default
                        // but rather fire off our own pop navigation
                        // return false so it doesn't pop automatically
                        return false;
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('cancel this clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    /** @nocollapse */
    ModalFirstPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>First Page Header</ion-title>\n        <ion-buttons start>\n          <button class=\"e2eCloseMenu\" (click)=\"dismiss()\">Close</button>\n        </ion-buttons>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <p>\n        <button (click)=\"push()\">Push (Go to 2nd)</button>\n      </p>\n      <p>\n        <button (click)=\"openActionSheet()\">Open Action Sheet</button>\n      </p>\n      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>\n      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>\n      <ion-list>\n        <ion-item *ngFor=\"let item of items\">\n          Item Number: {{item.value}}\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    ModalFirstPage.ctorParameters = [
        { type: NavController, },
        { type: App, },
        { type: ActionSheetController, },
    ];
    return ModalFirstPage;
}());
export var ModalSecondPage = (function () {
    function ModalSecondPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        console.log('Second page params:', params);
    }
    ModalSecondPage.prototype.ionViewLoaded = function () {
        console.log('ModalSecondPage ionViewLoaded');
    };
    ModalSecondPage.prototype.ionViewWillEnter = function () {
        console.log('ModalSecondPage ionViewWillEnter');
    };
    ModalSecondPage.prototype.ionViewDidEnter = function () {
        console.log('ModalSecondPage ionViewDidEnter');
    };
    /** @nocollapse */
    ModalSecondPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Second Page Header</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n      <p>\n        <button (click)=\"navCtrl.pop()\">Pop (Go back to 1st)</button>\n      </p>\n      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>\n      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    ModalSecondPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
    ];
    return ModalSecondPage;
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
                        ModalFirstPage,
                        ModalSecondPage,
                        ModalWithInputs,
                        ContactUs,
                        NavigableModal,
                        NavigableModal2,
                        ModalPassData,
                        ToolbarModal
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    providers: [SomeAppProvider],
                    entryComponents: [
                        E2EApp,
                        E2EPage,
                        ModalFirstPage,
                        ModalSecondPage,
                        ModalWithInputs,
                        ContactUs,
                        NavigableModal,
                        NavigableModal2,
                        ModalPassData,
                        ToolbarModal
                    ]
                },] },
    ];
    return AppModule;
}());
export var FadeIn = (function (_super) {
    __extends(FadeIn, _super);
    function FadeIn(enteringView, leavingView, opts) {
        _super.call(this, enteringView, leavingView, opts);
        this
            .element(enteringView.pageElementRef())
            .easing('ease')
            .duration(1000)
            .fromTo('translateY', '0%', '0%')
            .fromTo('opacity', 0, 1, true)
            .before.addClass('show-page');
    }
    return FadeIn;
}(PageTransition));
PageTransition.register('my-fade-in', FadeIn);
export var FadeOut = (function (_super) {
    __extends(FadeOut, _super);
    function FadeOut(enteringView, leavingView, opts) {
        _super.call(this, enteringView, leavingView, opts);
        this
            .element(leavingView.pageElementRef())
            .easing('ease')
            .duration(500)
            .fromTo('opacity', 1, 0)
            .before.addClass('show-page');
    }
    return FadeOut;
}(PageTransition));
PageTransition.register('my-fade-out', FadeOut);
