import { Component, NgModule } from '@angular/core';
import { IonicModule, MenuController } from '../../../dist';
export var Page1 = (function () {
    function Page1(menu) {
        this.menu = menu;
        this.leftMenuSwipeEnabled = true;
        this.rightMenuSwipeEnabled = false;
    }
    Page1.prototype.toggleLeftMenuSwipeable = function () {
        this.leftMenuSwipeEnabled = !this.leftMenuSwipeEnabled;
        this.menu.swipeEnable(this.leftMenuSwipeEnabled, 'left');
    };
    Page1.prototype.toggleRightMenuSwipeable = function () {
        this.rightMenuSwipeEnabled = !this.rightMenuSwipeEnabled;
        this.menu.swipeEnable(this.rightMenuSwipeEnabled, 'right');
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
        this.root = Page1;
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
