import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
        this.selectedTime = 60;
        this.fruitsCtrl = new FormControl('apple');
        this.fruitsForm = new FormGroup({
            'fruitsCtrl': this.fruitsCtrl
        });
        this.currenciesControl = new FormControl('EUR');
        this.currencyForm = new FormGroup({
            'currenciesControl': this.currenciesControl
        });
        this.currencies = ['USD', 'EUR'];
        this.relationship = 'enemies';
        this.items = [
            { description: 'value undefined', value: undefined },
            { description: 'value false string', value: 'false' },
            { description: 'value false boolean', value: false },
            { description: 'value 0', value: 0 },
        ];
    }
    E2EPage.prototype.setApple = function () {
        this.fruitsCtrl.updateValue('apple');
    };
    E2EPage.prototype.setBanana = function () {
        this.fruitsCtrl.updateValue('banana');
    };
    E2EPage.prototype.setCherry = function () {
        this.fruitsCtrl.updateValue('cherry');
    };
    E2EPage.prototype.doSubmit = function (ev) {
        console.log('Submitting form', this.fruitsForm.value);
        ev.preventDefault();
    };
    E2EPage.prototype.petChange = function (radioGroup) {
        console.log('petChange', radioGroup);
    };
    E2EPage.prototype.dogSelect = function (radioButton) {
        console.log('dogSelect', radioButton);
    };
    E2EPage.prototype.catSelect = function (radioButton) {
        console.log('catSelect', radioButton);
    };
    E2EPage.prototype.turtleSelect = function (radioButton) {
        console.log('turtleSelect', radioButton);
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
