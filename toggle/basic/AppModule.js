import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
        this.appleCtrl = new FormControl(false);
        this.bananaCtrl = new FormControl(true);
        this.cherryCtrl = new FormControl(false);
        this.grapeCtrl = new FormControl(true);
        this.fruitsForm = new FormGroup({
            'apple': this.appleCtrl,
            'banana': this.bananaCtrl,
            'cherry': this.cherryCtrl,
            'grape': this.grapeCtrl
        });
        this.grapeChecked = true;
        this.grapeDisabled = true;
    }
    E2EPage.prototype.toggleGrapeChecked = function () {
        this.grapeChecked = !this.grapeChecked;
    };
    E2EPage.prototype.toggleGrapeDisabled = function () {
        this.grapeDisabled = !this.grapeDisabled;
    };
    E2EPage.prototype.appleChange = function (toggle) {
        console.log('appleChange', toggle);
    };
    E2EPage.prototype.bananaChange = function (toggle) {
        console.log('bananaChange', toggle);
    };
    E2EPage.prototype.kiwiChange = function (toggle) {
        console.log('kiwiChange', toggle);
        this.kiwiValue = toggle.checked;
    };
    E2EPage.prototype.strawberryChange = function (toggle) {
        console.log('strawberryChange', toggle);
        this.strawberryValue = toggle.checked;
    };
    E2EPage.prototype.doSubmit = function (ev) {
        console.log('Submitting form', this.fruitsForm.value);
        this.formResults = JSON.stringify(this.fruitsForm.value);
        ev.preventDefault();
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
