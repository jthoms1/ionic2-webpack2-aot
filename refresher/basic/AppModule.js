import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var Page1 = (function () {
    function Page1() {
        this.items = [];
        for (var i = 0; i < 15; i++) {
            this.items.push(getRandomData());
        }
    }
    Page1.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.info('Begin async operation');
        getAsyncData().then(function (newData) {
            for (var i = 0; i < newData.length; i++) {
                _this.items.unshift(newData[i]);
            }
            console.info('Finished receiving data, async operation complete');
            refresher.complete();
        });
    };
    Page1.prototype.doStart = function (refresher) {
        console.info('Refresher, start');
    };
    Page1.prototype.doPulling = function (refresher) {
        console.info('Pulling', refresher.progress);
    };
    /** @nocollapse */
    Page1.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    Page1.ctorParameters = [];
    return Page1;
}());
function getAsyncData() {
    // async return mock data
    return new Promise(function (resolve) {
        setTimeout(function () {
            var data = [];
            for (var i = 0; i < 3; i++) {
                data.push(getRandomData());
            }
            resolve(data);
        }, 1000);
    });
}
function getRandomData() {
    var i = Math.floor(Math.random() * data.length);
    return data[i];
}
var data = [
    'Fast Times at Ridgemont High',
    'Peggy Sue Got Married',
    'Raising Arizona',
    'Moonstruck',
    'Fire Birds',
    'Honeymoon in Vegas',
    'Amos & Andrew',
    'It Could Happen to You',
    'Trapped in Paradise',
    'Leaving Las Vegas',
    'The Rock',
    'Con Air',
    'Face/Off',
    'City of Angels',
    'Gone in Sixty Seconds',
    'The Family Man',
    'Windtalkers',
    'Matchstick Men',
    'National Treasure',
    'Ghost Rider',
    'Grindhouse',
    'Next',
    'Kick-Ass',
    'Drive Angry'
];
export var E2EApp = (function () {
    function E2EApp() {
        this.rootPage = Page1;
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
