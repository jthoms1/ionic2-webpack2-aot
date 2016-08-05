import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var Page1 = (function () {
    function Page1() {
        this.singleValue2 = 150;
        this.singleValue3 = 64;
        this.singleValue4 = 1300;
        this.dualValue2 = { lower: 33, upper: 60 };
    }
    Page1.prototype.rangeChange = function (range) {
        console.log("range, change, ratio: " + range.ratio + ", value: " + range.value);
    };
    /** @nocollapse */
    Page1.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page1.html'
                },] },
    ];
    return Page1;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.rootPage = Page1;
    }
    /** @nocollapse */
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
                        E2EApp,
                        Page1
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        Page1
                    ]
                },] },
    ];
    return AppModule;
}());
