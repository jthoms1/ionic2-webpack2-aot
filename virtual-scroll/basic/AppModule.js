import { Component, ViewChild, NgModule } from '@angular/core';
import { IonicModule, Platform } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage(platform) {
        this.items = [];
        for (var i = 0; i < 200; i++) {
            this.items.push({
                value: i,
                someMethod: function () {
                    return '!!';
                }
            });
        }
        if (platform.is('ios')) {
            if (window.indexedDB) {
                this.webview = ': WKWebView';
            }
            else {
                this.webview = ': UIWebView';
            }
        }
    }
    E2EPage.prototype.headerFn = function (record, index, records) {
        if (index % 4 === 0) {
            return index + ' is divisible by 4';
        }
        return null;
    };
    E2EPage.prototype.reload = function () {
        window.location.reload(true);
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: Platform, },
    ];
    /** @nocollapse */
    E2EPage.propDecorators = {
        'content': [{ type: ViewChild, args: ['content',] },],
    };
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
