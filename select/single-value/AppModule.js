import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
        this.musicAlertOpts = {
            title: '1994 Music',
            subTitle: 'Select your favorite',
            cssClass: 'music-select'
        };
        this.gaming = '';
        this.os = 'win3.1';
        this.years = [1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999];
        this.music = null;
        this.month = '12';
        this.year = '1994';
        this.notification = 'enable';
        this.notifications = '1';
        this.status = "checked";
        this.currencies = [
            {
                symbol: '$',
                code: 'USD',
                name: 'US Dollar'
            },
            {
                symbol: '€',
                code: 'EUR',
                name: 'Euro'
            },
            {
                symbol: '£',
                code: 'FKP',
                name: 'Falkland Islands Pound'
            },
            {
                symbol: '¢',
                code: 'GHS',
                name: 'Ghana Cedi'
            }
        ];
        this.currency = this.currencies[0];
    }
    E2EPage.prototype.gamingCancel = function () {
        console.log('Gaming Select, Cancel');
    };
    E2EPage.prototype.gamingChange = function (selectedValue) {
        console.log('Gaming Select, Change value:', selectedValue);
    };
    E2EPage.prototype.stpSelect = function () {
        console.log('STP selected');
    };
    E2EPage.prototype.statusChange = function (ev) {
        this.status = ev;
    };
    E2EPage.prototype.resetGender = function () {
        this.gender = null;
    };
    E2EPage.prototype.selectedText = function () {
        return this.currency.symbol;
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
