import { Component, ViewChild, NgModule } from '@angular/core';
import { IonicModule, InfiniteScroll, NavController } from '../../../dist';
export var E2EPage1 = (function () {
    function E2EPage1(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [];
        this.enabled = true;
        for (var i = 0; i < 30; i++) {
            this.items.push(this.items.length);
        }
    }
    E2EPage1.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        getAsyncData().then(function (newData) {
            for (var i = 0; i < newData.length; i++) {
                _this.items.push(_this.items.length);
            }
            console.log('Finished receiving data, async operation complete');
            infiniteScroll.complete();
            if (_this.items.length > 90) {
                _this.enabled = false;
                infiniteScroll.enable(_this.enabled);
            }
        });
    };
    E2EPage1.prototype.goToPage2 = function () {
        this.navCtrl.push(E2EPage2);
    };
    E2EPage1.prototype.toggleInfiniteScroll = function () {
        this.enabled = !this.enabled;
        this.infiniteScroll.enable(this.enabled);
    };
    /** @nocollapse */
    E2EPage1.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage1.ctorParameters = [
        { type: NavController, },
    ];
    /** @nocollapse */
    E2EPage1.propDecorators = {
        'infiniteScroll': [{ type: ViewChild, args: [InfiniteScroll,] },],
    };
    return E2EPage1;
}());
export var E2EPage2 = (function () {
    function E2EPage2(navCtrl) {
        this.navCtrl = navCtrl;
    }
    /** @nocollapse */
    E2EPage2.decorators = [
        { type: Component, args: [{
                    template: '<ion-content><button (click)="navCtrl.pop()">Pop</button></ion-content>'
                },] },
    ];
    /** @nocollapse */
    E2EPage2.ctorParameters = [
        { type: NavController, },
    ];
    return E2EPage2;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = E2EPage1;
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
                        E2EPage1,
                        E2EPage2
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        E2EPage1,
                        E2EPage2
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
