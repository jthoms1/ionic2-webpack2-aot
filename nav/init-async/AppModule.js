import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var AsyncPage = (function () {
    function AsyncPage() {
    }
    AsyncPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-content padding text-center>\n      Page be loaded!\n    </ion-content>\n  "
                },] },
    ];
    return AsyncPage;
}());
export var E2EApp = (function () {
    function E2EApp() {
        var _this = this;
        setTimeout(function () {
            _this.root = AsyncPage;
        }, 1000);
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    template: "<ion-nav [root]=\"root\"></ion-nav>"
                },] },
    ];
    /** @nocollapse */
    E2EApp.ctorParameters = [];
    return E2EApp;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        E2EApp,
                        AsyncPage
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        AsyncPage
                    ]
                },] },
    ];
    return AppModule;
}());
