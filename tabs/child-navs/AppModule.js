import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var Tab1 = (function () {
    function Tab1() {
        this.root = SecondPage;
    }
    /** @nocollapse */
    Tab1.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>\n        Tab 1\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content class=\"home\">\n    <ion-nav [root]=\"root\"></ion-nav>\n  </ion-content>\n    "
                },] },
    ];
    return Tab1;
}());
export var Tab2 = (function () {
    function Tab2() {
        this.root = SecondPage;
    }
    /** @nocollapse */
    Tab2.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>\n        Tab 2\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content class=\"home\">\n    <ion-nav [root]=\"root\"></ion-nav>\n  </ion-content>\n    "
                },] },
    ];
    return Tab2;
}());
export var Tab3 = (function () {
    function Tab3() {
        this.root = SecondPage;
    }
    /** @nocollapse */
    Tab3.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>\n        Tab 3\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content class=\"home\">\n    <ion-nav [root]=\"root\"></ion-nav>\n  </ion-content>\n    "
                },] },
    ];
    return Tab3;
}());
export var SecondPage = (function () {
    function SecondPage() {
        this.root = ThirdPage;
    }
    /** @nocollapse */
    SecondPage.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-content class=\"home\">\n    <div>SecondPage Cmp</div>\n    <ion-nav [root]=\"root\"></ion-nav>\n  </ion-content>\n  "
                },] },
    ];
    return SecondPage;
}());
export var ThirdPage = (function () {
    function ThirdPage() {
        this.root = FourthPage;
    }
    /** @nocollapse */
    ThirdPage.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-content class=\"home\">\n    <div>ThirdPage Cmp</div>\n    <ion-nav [root]=\"root\"></ion-nav>\n  </ion-content>\n  "
                },] },
    ];
    return ThirdPage;
}());
export var FourthPage = (function () {
    function FourthPage() {
    }
    FourthPage.prototype.ionViewWillEnter = function () {
        var items = [];
        for (var i = 0; i < 500; i++) {
            items.push("Item " + (i + 1));
        }
        this.items = items;
    };
    /** @nocollapse */
    FourthPage.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>\n        Fourth Page Comp\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor=\"let item of items\">\n        {{item}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  "
                },] },
    ];
    return FourthPage;
}());
export var TabsPage = (function () {
    function TabsPage() {
        this.root1 = Tab1;
        this.root2 = Tab2;
        this.root3 = Tab3;
    }
    /** @nocollapse */
    TabsPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-tabs #content>\n      <ion-tab tabTitle=\"Tab 1\" tabIcon=\"star\" [root]=\"root1\"></ion-tab>\n      <ion-tab tabTitle=\"Tab 2\" tabIcon=\"globe\" [root]=\"root2\"></ion-tab>\n      <ion-tab tabTitle=\"Tab 3\" tabIcon=\"stopwatch\" [root]=\"root3\"></ion-tab>\n    </ion-tabs>\n  "
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
                        Tab1,
                        Tab2,
                        Tab3,
                        SecondPage,
                        ThirdPage,
                        FourthPage,
                        TabsPage
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        Tab1,
                        Tab2,
                        Tab3,
                        SecondPage,
                        ThirdPage,
                        FourthPage,
                        TabsPage
                    ]
                },] },
    ];
    return AppModule;
}());
