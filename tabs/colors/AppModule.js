import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
    }
    E2EPage.decorators = [
        { type: Component, args: [{ template: 'hi' },] },
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
                    templateUrl: 'main.html',
                    styleUrls: ['styles.css'],
                    encapsulation: ViewEncapsulation.None
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
                    entryComponents: [
                        E2EApp,
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
