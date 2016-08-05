import { Component, ChangeDetectorRef, NgModule } from '@angular/core';
import { IonicModule, reorderArray } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage(d) {
        this.d = d;
        this.items = [];
        this.isReordering = false;
        var nu = 30;
        for (var i = 0; i < nu; i++) {
            this.items.push(i);
        }
    }
    E2EPage.prototype.toggle = function () {
        this.isReordering = !this.isReordering;
    };
    E2EPage.prototype.reorder = function (indexes) {
        this.items = reorderArray(this.items, indexes);
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: ChangeDetectorRef, },
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
                        E2EApp,
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
