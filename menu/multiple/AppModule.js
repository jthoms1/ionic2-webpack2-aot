import { Component, NgModule } from '@angular/core';
import { IonicModule, MenuController } from '../../../dist';
export var Page1 = (function () {
    function Page1(menu) {
        this.menu = menu;
        this.menu1Active();
    }
    Page1.prototype.menu1Active = function () {
        this.activeMenu = 'menu1';
        this.menu.enable(true, 'menu1');
        this.menu.enable(false, 'menu2');
    };
    Page1.prototype.menu2Active = function () {
        this.activeMenu = 'menu2';
        this.menu.enable(false, 'menu1');
        this.menu.enable(true, 'menu2');
    };
    /** @nocollapse */
    Page1.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page1.html'
                },] },
    ];
    /** @nocollapse */
    Page1.ctorParameters = [
        { type: MenuController, },
    ];
    return Page1;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.rootPage = Page1;
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
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
                        Page1
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        Page1
                    ]
                },] },
    ];
    return AppModule;
}());
