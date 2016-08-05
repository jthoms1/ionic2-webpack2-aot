import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
        this.wwwInvented = '1989';
        this.time = '13:47:00';
        this.netscapeReleased = '1994-12-15T13:47:20.789';
        this.operaReleased = '1995-04-15';
        this.firefoxReleased = '2002-09-23T15:03:46.789';
        this.webkitOpenSourced = '2005-06-17T11:06Z';
        this.chromeReleased = '2008-09-02';
        this.leapYearsSummerMonths = '';
        this.convertedDate = '';
        this.leapYearsArray = [2020, 2016, 2008, 2004, 2000, 1996];
        this.customShortDay = [
            's\u00f8n',
            'man',
            'tir',
            'ons',
            'tor',
            'fre',
            'l\u00f8r'
        ];
    }
    E2EPage.prototype.onChange = function (ev) {
        console.log('Changed', ev);
    };
    E2EPage.prototype.onCancel = function (ev) {
        console.log('Canceled', ev);
    };
    E2EPage.prototype.clearLeapYear = function () {
        this.leapYearsSummerMonths = null;
    };
    E2EPage.prototype.convertDate = function () {
        this.convertedDate = new Date(this.myDate).toISOString();
    };
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
