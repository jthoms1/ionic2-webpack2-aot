import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var TabsPage = (function () {
    function TabsPage() {
        this.main = E2EPage;
        this.page1 = Page1;
        this.page2 = Page2;
        this.page3 = Page3;
        this.page4 = Page4;
    }
    /** @nocollapse */
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'tabs.html'
                },] },
    ];
    return TabsPage;
}());
export var Page4 = (function () {
    function Page4() {
        this.tabsPage = TabsPage;
    }
    /** @nocollapse */
    Page4.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page4.html'
                },] },
    ];
    return Page4;
}());
export var Page3 = (function () {
    function Page3() {
        this.page4 = Page4;
    }
    /** @nocollapse */
    Page3.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page3.html'
                },] },
    ];
    return Page3;
}());
export var Page2 = (function () {
    function Page2() {
        this.page3 = Page3;
    }
    /** @nocollapse */
    Page2.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page2.html'
                },] },
    ];
    return Page2;
}());
export var Page1 = (function () {
    function Page1() {
        this.page2 = Page2;
    }
    /** @nocollapse */
    Page1.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page1.html'
                },] },
    ];
    return Page1;
}());
export var E2EPage = (function () {
    function E2EPage() {
        this.page1 = Page1;
    }
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
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
                        TabsPage,
                        Page1,
                        Page2,
                        Page3,
                        Page4
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        E2EPage,
                        TabsPage,
                        Page1,
                        Page2,
                        Page3,
                        Page4
                    ]
                },] },
    ];
    return AppModule;
}());
