import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
        this.appleCtrl = new FormControl(true);
        this.bananaCtrl = new FormControl(true);
        this.cherryCtrl = new FormControl(false);
        this.grapeCtrl = new FormControl(true);
        this.fruitsForm = new FormGroup({
            'apple': this.appleCtrl,
            'banana': this.bananaCtrl,
            'cherry': this.cherryCtrl,
            'grape': this.grapeCtrl
        });
        this.grapeDisabled = true;
        this.grapeChecked = true;
        this.standAloneChecked = true;
    }
    E2EPage.prototype.toggleGrapeChecked = function () {
        this.grapeChecked = !this.grapeChecked;
    };
    E2EPage.prototype.toggleGrapeDisabled = function () {
        this.grapeDisabled = !this.grapeDisabled;
    };
    E2EPage.prototype.kiwiChange = function (checkbox) {
        console.log('kiwiChange', checkbox);
        this.kiwiValue = checkbox.checked;
    };
    E2EPage.prototype.strawberryChange = function (checkbox) {
        console.log('strawberryChange', checkbox);
        this.strawberryValue = checkbox.checked;
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
                    bootstrap: [E2EApp],
                    entryComponents: [
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
