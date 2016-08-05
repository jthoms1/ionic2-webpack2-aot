import { Component, ViewChild, NgModule } from '@angular/core';
import { IonicModule, App, MenuController, Nav } from '../../../dist';
export var Page1 = (function () {
    function Page1() {
    }
    /** @nocollapse */
    Page1.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page1.html'
                },] },
    ];
    return Page1;
}());
export var Page2 = (function () {
    function Page2() {
    }
    /** @nocollapse */
    Page2.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page2.html'
                },] },
    ];
    return Page2;
}());
export var E2EApp = (function () {
    function E2EApp(app, menuCtrl) {
        this.app = app;
        this.menuCtrl = menuCtrl;
        this.page1 = Page1;
        this.page2 = Page2;
        this.rootPage = Page1;
        this.menu1Active();
    }
    E2EApp.prototype.openPage = function (p) {
        // Get the <ion-nav> by id
        this.nav.setRoot(p);
    };
    E2EApp.prototype.menu1Active = function () {
        this.menuCtrl.enable(true, 'menu1');
        this.menuCtrl.enable(false, 'menu2');
        this.menuCtrl.enable(false, 'menu3');
    };
    E2EApp.prototype.menu2Active = function () {
        this.menuCtrl.enable(false, 'menu1');
        this.menuCtrl.enable(true, 'menu2');
        this.menuCtrl.enable(false, 'menu3');
    };
    E2EApp.prototype.menu3Active = function () {
        this.menuCtrl.enable(false, 'menu1');
        this.menuCtrl.enable(false, 'menu2');
        this.menuCtrl.enable(true, 'menu3');
    };
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EApp.ctorParameters = [
        { type: App, },
        { type: MenuController, },
    ];
    /** @nocollapse */
    E2EApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return E2EApp;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        E2EApp,
                        Page1,
                        Page2
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        Page1,
                        Page2
                    ]
                },] },
    ];
    return AppModule;
}());
