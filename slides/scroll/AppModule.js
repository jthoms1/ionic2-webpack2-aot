import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EApp = (function () {
    function E2EApp() {
    }
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
                        E2EApp
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp
                    ]
                },] },
    ];
    return AppModule;
}());
