import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var PageOne = (function () {
    function PageOne() {
        this.input1 = 'Text 1';
    }
    PageOne.prototype.onEvent = function (event) {
        console.log('Did Event:', event.type);
    };
    /** @nocollapse */
    PageOne.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    return PageOne;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = PageOne;
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
                        PageOne
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        PageOne
                    ]
                },] },
    ];
    return AppModule;
}());
