import { Component, ViewChildren, NgModule } from '@angular/core';
import { IonicModule, Tab } from '../../../dist';
export var Tab1 = (function () {
    function Tab1() {
    }
    Tab1.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Heart</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n      <h2>Tab 1</h2>\n    </ion-content>\n    "
                },] },
    ];
    return Tab1;
}());
export var Tab2 = (function () {
    function Tab2() {
    }
    Tab2.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Star</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n      <h2>Tab 2</h2>\n    </ion-content>\n    "
                },] },
    ];
    return Tab2;
}());
export var Tab3 = (function () {
    function Tab3() {
    }
    Tab3.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Stopwatch</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n      <h2>Tab 3</h2>\n    </ion-content>\n    "
                },] },
    ];
    return Tab3;
}());
export var QuesaritoPage = (function () {
    function QuesaritoPage() {
    }
    QuesaritoPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Quesarito</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n      <h2>Quesarito</h2>\n    </ion-content>\n    "
                },] },
    ];
    return QuesaritoPage;
}());
export var TabsPage = (function () {
    function TabsPage() {
        this.root1 = Tab1;
        this.root2 = Tab2;
        this.root3 = Tab3;
    }
    TabsPage.prototype.ngAfterViewInit = function () {
        console.log('Tab', this.tab);
        console.log(this.tab.first.setRoot);
    };
    TabsPage.prototype.openPage = function (which) {
        var pages = {
            'quesarito': QuesaritoPage
        };
        this.tab.first.setRoot(pages[which]);
    };
    /** @nocollapse */
    TabsPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-menu [content]=\"content\">\n      <ion-header>\n        <ion-toolbar secondary>\n          <ion-title>Secret Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n          <button ion-item menuClose detail-none (click)=\"openPage('quesarito')\">\n            Quesarito\n          </button>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-tabs #content>\n      <ion-tab tabTitle=\"Heart\" tabIcon=\"heart\" [root]=\"root1\" #tab1></ion-tab>\n      <ion-tab tabTitle=\"Star\" tabIcon=\"star\" [root]=\"root2\"></ion-tab>\n      <ion-tab tabTitle=\"Stopwatch\" tabIcon=\"stopwatch\" [root]=\"root3\"></ion-tab>\n    </ion-tabs>\n  "
                },] },
    ];
    /** @nocollapse */
    TabsPage.propDecorators = {
        'tab': [{ type: ViewChildren, args: [Tab,] },],
    };
    return TabsPage;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        Tab1,
                        Tab2,
                        Tab3,
                        QuesaritoPage,
                        TabsPage
                    ],
                    imports: [
                        IonicModule.forRoot(TabsPage)
                    ],
                    entryComponents: [
                        Tab1,
                        Tab2,
                        Tab3,
                        QuesaritoPage,
                        TabsPage
                    ]
                },] },
    ];
    return AppModule;
}());
