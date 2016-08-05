import { Component, NgModule } from '@angular/core';
import { IonicModule, NavController, ModalController, ViewController } from '../../../dist';
import { Injectable } from '@angular/core';
export var SomeData = (function () {
    function SomeData() {
    }
    SomeData.prototype.getData = function () {
        return 'SomeData';
    };
    /** @nocollapse */
    SomeData.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SomeData.ctorParameters = [];
    return SomeData;
}());
export var OtherData = (function () {
    function OtherData() {
    }
    OtherData.prototype.getData = function () {
        return 'OtherData';
    };
    /** @nocollapse */
    OtherData.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    OtherData.ctorParameters = [];
    return OtherData;
}());
export var MyModal = (function () {
    function MyModal(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    MyModal.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    /** @nocollapse */
    MyModal.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>This is a modal</ion-title>\n      <ion-buttons left>\n        <button (click)=\"dismissModal()\" class=\"e2eCordovaCloseModal\">\n          <ion-icon name=\"close\"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end>\n        <button>\n          <ion-icon name=\"funnel\"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding>\n    <p>The modal toolbar should have status bar padding.</p>\n    <button block (click)=\"dismissModal()\">Close modal</button>\n  </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    MyModal.ctorParameters = [
        { type: ViewController, },
    ];
    return MyModal;
}());
export var Page1 = (function () {
    function Page1(navCtrl, someData, otherData) {
        this.navCtrl = navCtrl;
        this.someData = someData;
        this.otherData = otherData;
        this.page2 = Page2;
        this.sort = 'all';
        console.log('Got some data from', someData.getData());
        console.log('Got some data from', otherData.getData());
    }
    Page1.prototype.goToTabs = function () {
        this.navCtrl.push(TabsPage);
    };
    /** @nocollapse */
    Page1.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page1.html'
                },] },
    ];
    /** @nocollapse */
    Page1.ctorParameters = [
        { type: NavController, },
        { type: SomeData, },
        { type: OtherData, },
    ];
    return Page1;
}());
export var Page2 = (function () {
    function Page2(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.page1 = Page1;
        this.page3 = Page3;
    }
    Page2.prototype.openModal = function () {
        this.modalCtrl.create(MyModal).present();
    };
    /** @nocollapse */
    Page2.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page2.html'
                },] },
    ];
    /** @nocollapse */
    Page2.ctorParameters = [
        { type: ModalController, },
    ];
    return Page2;
}());
export var Page3 = (function () {
    function Page3(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page3.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    /** @nocollapse */
    Page3.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page3.html'
                },] },
    ];
    /** @nocollapse */
    Page3.ctorParameters = [
        { type: NavController, },
    ];
    return Page3;
}());
export var TabPage1 = (function () {
    function TabPage1() {
    }
    TabPage1.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>This is a tab page</ion-title>\n      <button menuToggle>\n        <ion-icon name=\"menu\"></ion-icon>\n      </button>\n      <ion-buttons end>\n        <button>\n          <ion-icon name=\"funnel\"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <p>The toolbar should have status bar padding.</p>\n  </ion-content>\n  "
                },] },
    ];
    return TabPage1;
}());
export var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = TabPage1;
        this.tab2Root = Page2;
        this.tab3Root = Page3;
    }
    TabsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    /** @nocollapse */
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'tabs.html'
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = [
        { type: NavController, },
    ];
    return TabsPage;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = Page1;
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    templateUrl: "./app.html"
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
                        TabsPage,
                        TabPage1,
                        Page1,
                        Page2,
                        Page3,
                        MyModal
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp, {
                            statusbarPadding: true
                        })
                    ],
                    providers: [SomeData, OtherData],
                    bootstrap: [E2EApp],
                    entryComponents: [
                        TabsPage,
                        TabPage1,
                        Page1,
                        Page2,
                        Page3,
                        MyModal
                    ]
                },] },
    ];
    return AppModule;
}());
