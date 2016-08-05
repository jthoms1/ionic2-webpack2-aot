import { Component, NgModule } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage(fb) {
        this.relationship = 'enemies';
        this.modelStyle = 'B';
        this.appType = 'free';
        this.icons = 'camera';
        this.isDisabled = true;
        this.myForm = fb.group({
            mapStyle: ['active', Validators.required]
        });
    }
    E2EPage.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    E2EPage.prototype.onSegmentChanged = function (segmentButton) {
        console.log('Segment changed to', segmentButton.value);
    };
    E2EPage.prototype.onSegmentSelected = function (segmentButton) {
        console.log('Segment selected', segmentButton.value);
    };
    E2EPage.prototype.doSubmit = function (ev) {
        console.log('Submitting form', this.myForm.value);
        ev.preventDefault();
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: FormBuilder, },
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
