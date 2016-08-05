import { Component, ChangeDetectorRef, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.defaultSearch = 'test';
        this.customPlaceholder = 2;
        this.defaultCancel = '';
        this.isAutocorrect = 'on';
        this.isAutocomplete = 'on';
        this.isSpellcheck = true;
    }
    E2EPage.prototype.onClearSearchbar = function (ev) {
        console.log('ionClear', ev.target.value);
    };
    E2EPage.prototype.onCancelSearchbar = function (ev) {
        console.log('ionCancel', ev.target.value);
    };
    E2EPage.prototype.triggerInput = function (ev) {
        console.log('ionInput', ev.target.value);
    };
    E2EPage.prototype.inputBlurred = function (ev) {
        console.log('ionBlur', ev.target.value);
    };
    E2EPage.prototype.inputFocused = function (ev) {
        console.log('ionFocus', ev.target.value);
    };
    E2EPage.prototype.ngAfterViewInit = function () {
        this.customPlaceholder = 33;
        this.defaultCancel = 'after view';
        this.changeDetectorRef.detectChanges();
    };
    E2EPage.prototype.changeValue = function () {
        this.defaultSearch = 'changed';
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
