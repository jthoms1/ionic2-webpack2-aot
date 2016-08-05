import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
        this.items = [];
        var utcSeconds = 787523438; // Dec 15, 1994
        var d = new Date(0);
        d.setUTCSeconds(utcSeconds);
        for (var i = 0; i < 1000; i++) {
            this.items.push({
                index: i,
                date: d,
                imgSrc: "../../img/img/" + images[rotateImg] + ".jpg?" + Math.random(),
            });
            rotateImg++;
            if (rotateImg === images.length)
                rotateImg = 0;
            if (i < 100) {
                utcSeconds += 237600; // 2.75 days
            }
            else {
                utcSeconds += (Math.random() * 237600) + 86400;
            }
            d = new Date(0);
            d.setUTCSeconds(utcSeconds);
        }
    }
    E2EPage.prototype.headerFn = function (record, recordIndex, records) {
        if (this.lastMonth !== record.date.getMonth()) {
            this.lastMonth = record.date.getMonth();
            return {
                date: monthNames[this.lastMonth] + ' ' + record.date.getFullYear()
            };
        }
        return null;
    };
    E2EPage.prototype.footerFn = function (record, recordIndex, records) {
        if (recordIndex === records.length - 1) {
            return true;
        }
        else {
            if (records[recordIndex + 1].date.getMonth() !== this.lastMonth) {
                return true;
            }
        }
        return null;
    };
    E2EPage.prototype.ngDoCheck = function () {
        console.log('DoCheck');
    };
    E2EPage.prototype.reload = function () {
        window.location.reload(true);
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [];
    return E2EPage;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = E2EPage;
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    template: '<ion-nav [root]="root"></ion-nav>',
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
                        IonicModule.forRoot(E2EApp, {
                            prodMode: true
                        })
                    ],
                    entryComponents: [
                        E2EApp,
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var images = [
    'bandit',
    'batmobile',
    'blues-brothers',
    'bueller',
    'delorean',
    'eleanor',
    'general-lee',
    'ghostbusters',
    'knight-rider',
    'mirth-mobile',
];
var rotateImg = 0;
