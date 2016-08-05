import { Component, NgModule } from '@angular/core';
import { IonicModule, App } from '../../../dist';
export var E2EApp = (function () {
    function E2EApp(app) {
        app.setTitle('Basic Buttons');
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EApp.ctorParameters = [
        { type: App, },
    ];
    return E2EApp;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        E2EApp
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    bootstrap: [E2EApp]
                },] },
    ];
    return AppModule;
}());
