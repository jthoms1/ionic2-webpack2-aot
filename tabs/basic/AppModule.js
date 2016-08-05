import { Component, NgModule } from '@angular/core';
import { IonicModule, App, AlertController, ModalController, ViewController, Tabs } from '../../../dist';
export var MyModal = (function () {
    function MyModal(viewCtrl, app) {
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.items = [];
        for (var i = 1; i <= 10; i++) {
            this.items.push(i);
        }
    }
    MyModal.prototype.dismiss = function () {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss();
    };
    MyModal.prototype.appNavPop = function () {
        this.app.navPop();
    };
    /** @nocollapse */
    MyModal.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button (click)=\"dismiss()\">Cancel</button>\n      </ion-buttons>\n\n      <ion-title>\n        Filter Sessions\n      </ion-title>\n\n      <ion-buttons end>\n        <button (click)=\"dismiss()\">Done</button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"outer-content\">\n    <ion-list>\n      <ion-list-header>Tracks</ion-list-header>\n\n      <ion-item *ngFor=\"let i of items\">\n        <ion-label>Toggle {{i}}</ion-label>\n        <ion-toggle secondary></ion-toggle>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <button ion-item danger detail-none>\n        Reset All Filters\n      </button>\n      <button ion-item danger detail-none (click)=\"appNavPop()\">\n        App Nav Pop\n      </button>\n    </ion-list>\n  </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    MyModal.ctorParameters = [
        { type: ViewController, },
        { type: App, },
    ];
    return MyModal;
}());
export var Tab1 = (function () {
    function Tab1(tabs, app) {
        this.tabs = tabs;
        this.app = app;
        this.items = [];
        for (var i = 1; i <= 250; i++) {
            this.items.push(i);
        }
    }
    Tab1.prototype.selectPrevious = function () {
        this.tabs.select(this.tabs.previousTab());
    };
    Tab1.prototype.appNavPop = function () {
        this.app.navPop();
    };
    /** @nocollapse */
    Tab1.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Heart</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-list-header>\n          Tab 1\n        </ion-list-header>\n        <ion-item *ngFor=\"let i of items\">Item {{i}} {{i}} {{i}} {{i}}</ion-item>\n      </ion-list>\n      <p>\n        <button (click)=\"selectPrevious()\">Select Previous Tab</button>\n      </p>\n      <p>\n        <button (click)=\"appNavPop()\">App Nav Pop</button>\n      </p>\n    </ion-content>\n    "
                },] },
    ];
    /** @nocollapse */
    Tab1.ctorParameters = [
        { type: Tabs, },
        { type: App, },
    ];
    return Tab1;
}());
export var Tab2 = (function () {
    function Tab2(tabs, app) {
        this.tabs = tabs;
        this.app = app;
        this.sessions = [];
        for (var i = 1; i <= 250; i++) {
            this.sessions.push({
                name: 'Name ' + i,
                location: 'Location: ' + i
            });
        }
    }
    Tab2.prototype.selectPrevious = function () {
        this.tabs.select(this.tabs.previousTab());
    };
    Tab2.prototype.appNavPop = function () {
        this.app.navPop();
    };
    /** @nocollapse */
    Tab2.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Schedule</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-item-sliding *ngFor=\"let session of sessions\" #slidingItem>\n          <ion-item>\n            <h3>{{session.name}} {{session.name}} {{session.name}}</h3>\n            <p>{{session.location}} {{session.location}} {{session.location}}</p>\n          </ion-item>\n          <ion-item-options>\n            <button primary>Speaker<br>Info</button>\n            <button secondary>Add to<br>Favorites</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n      <p>\n        <button (click)=\"selectPrevious()\">Select Previous Tab</button>\n      </p>\n      <p>\n        <button (click)=\"appNavPop()\">App Nav Pop</button>\n      </p>\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    Tab2.ctorParameters = [
        { type: Tabs, },
        { type: App, },
    ];
    return Tab2;
}());
export var Tab3 = (function () {
    function Tab3(alertCtrl, modalCtrl, tabs, app) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.tabs = tabs;
        this.app = app;
    }
    Tab3.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Alert Title!',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    Tab3.prototype.presentModal = function () {
        this.modalCtrl.create(MyModal).present();
    };
    Tab3.prototype.selectPrevious = function () {
        this.tabs.select(this.tabs.previousTab());
    };
    Tab3.prototype.appNavPop = function () {
        this.app.navPop();
    };
    /** @nocollapse */
    Tab3.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Stopwatch</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <h2>Tab 3</h2>\n      <p>\n        <button (click)=\"presentAlert()\">Present Alert</button>\n        <button (click)=\"presentModal()\">Present Modal</button>\n      </p>\n      <p>\n        <button (click)=\"selectPrevious()\">Select Previous Tab</button>\n      </p>\n      <p>\n        <button (click)=\"appNavPop()\">App Nav Pop</button>\n      </p>\n    </ion-content>\n    "
                },] },
    ];
    /** @nocollapse */
    Tab3.ctorParameters = [
        { type: AlertController, },
        { type: ModalController, },
        { type: Tabs, },
        { type: App, },
    ];
    return Tab3;
}());
export var TabsPage = (function () {
    function TabsPage() {
        this.root1 = Tab1;
        this.root2 = Tab2;
        this.root3 = Tab3;
    }
    TabsPage.prototype.onChange = function (ev) {
        console.log('Changed tab', ev);
    };
    TabsPage.prototype.onSelect = function (ev) {
        console.log('Selected tab', ev);
    };
    /** @nocollapse */
    TabsPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-menu [content]=\"content\">\n      <ion-header>\n        <ion-toolbar secondary>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n          <button ion-item menuClose detail-none>\n            Close Menu\n          </button>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-tabs #content (ionChange)=\"onChange($event)\">\n      <ion-tab tabTitle=\"Plain List\" tabIcon=\"star\" [root]=\"root1\" (ionSelect)=\"onSelect($event)\"></ion-tab>\n      <ion-tab tabTitle=\"Schedule\" tabIcon=\"globe\" [root]=\"root2\"></ion-tab>\n      <ion-tab tabTitle=\"Stopwatch\" tabIcon=\"logo-facebook\" [root]=\"root3\"></ion-tab>\n      <ion-tab tabTitle=\"Messages\" tabIcon=\"chatboxes\" [root]=\"root1\"></ion-tab>\n      <ion-tab tabTitle=\"My Profile\" tabIcon=\"person\" [root]=\"root2\"></ion-tab>\n    </ion-tabs>\n  "
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
                        MyModal,
                        Tab1,
                        Tab2,
                        Tab3,
                        TabsPage
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        MyModal,
                        Tab1,
                        Tab2,
                        Tab3,
                        TabsPage
                    ]
                },] },
    ];
    return AppModule;
}());
