import { NgModule, Component } from '@angular/core';
import { IonicModule, App } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage(app) {
        this.testingColors = ['primary', 'secondary', 'danger', 'dark'];
        this.testingColorIndex = 0;
        app.setTitle('Basic Buttons');
        this.chgColor();
    }
    E2EPage.prototype.chgColor = function () {
        this.btnColor = this.testingColors[this.testingColorIndex];
        console.log('dynamic btnColor', this.btnColor);
        this.testingColorIndex = (this.testingColorIndex >= this.testingColors.length - 1 ? 0 : this.testingColorIndex + 1);
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: App, },
    ];
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
