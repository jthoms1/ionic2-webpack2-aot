import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
        this.people = [
            { 'name': 'Burt', 'components': ['all the things'] },
            { 'name': 'Mary', 'components': ['checkbox', 'content', 'form'] },
            { 'name': 'Albert', 'components': ['tabs'] }
        ];
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
                    entryComponents: [
                        E2EApp,
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
