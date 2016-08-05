import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
        this.items = [];
        for (var i = 0; i < 5; i++) {
            this.items.push(this.items.length);
        }
    }
    E2EPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        getAsyncData().then(function (newData) {
            for (var i = 0; i < newData.length; i++) {
                _this.items.push(_this.items.length);
            }
            console.log('Finished receiving data, async operation complete');
            infiniteScroll.complete();
            if (_this.items.length > 90) {
                infiniteScroll.enable(false);
            }
        });
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [];
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
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
function getAsyncData() {
    // async return mock data
    return new Promise(function (resolve) {
        setTimeout(function () {
            var data = [];
            for (var i = 0; i < 30; i++) {
                data.push(i);
            }
            resolve(data);
        }, 500);
    });
}
