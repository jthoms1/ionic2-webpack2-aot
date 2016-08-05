import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
        this.showIf = true;
        this.reset();
    }
    E2EPage.prototype.unify = function () {
        this.isDestructive = false;
        this.isSecondary = false;
        this.isCustom = false;
        this.isSolid = false;
        this.isOutline = false;
        this.isClear = false;
        this.isClicked = false;
        this.myColor1 = 'primary';
        this.myColor2 = 'primary';
        this.multiColor = ['primary'];
    };
    E2EPage.prototype.reset = function () {
        this.isDestructive = true;
        this.isSecondary = true;
        this.isCustom = true;
        this.isSolid = true;
        this.isOutline = true;
        this.isClear = true;
        this.isClicked = false;
        this.myColor1 = 'custom1';
        this.myColor2 = 'custom2';
        this.multiColor = ['primary', 'secondary'];
    };
    E2EPage.prototype.toggle = function () {
        this.isClicked = !this.isClicked;
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [];
    return E2EPage;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.rootPage = E2EPage;
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    template: '<ion-nav [root]="rootPage"></ion-nav>'
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
                    bootstrap: [E2EApp],
                    entryComponents: [
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
