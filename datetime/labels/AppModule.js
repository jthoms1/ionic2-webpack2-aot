import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
        this.stacked1 = '1994-12-15T13:47:20.789';
        this.stacked2 = '1994-12-15T13:47:20.789';
        this.floating1 = '1995-04-15';
        this.floating2 = '1995-04-15';
        this.fixed1 = '2002-09-23T15:03:46.789';
        this.fixed2 = '2002-09-23T15:03:46.789';
        this.inline1 = '2005-06-17T11:06Z';
        this.inline2 = '2005-06-17T11:06Z';
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
        this.root = E2EPage;
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    template: '<ion-nav [root]="root"></ion-nav>'
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
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
