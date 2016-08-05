import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
        this.toppings = ['bacon', 'xcheese'];
        this.carFeatures = [];
        this.pets = ['cat', 'dog'];
        this.petOptions = [
            { text: 'Bird', value: 'bird' },
            { text: 'Cat', value: 'cat' },
            { text: 'Dog', value: 'dog' },
            { text: 'Honey Badger', value: 'honeybadger' },
            { text: 'Pig', value: 'pig' },
        ];
        this.status = 'selected';
        this.authForm = new FormGroup({
            name: new FormControl(''),
            select: new FormControl([1, '3'])
        });
    }
    E2EPage.prototype.carChange = function (selectedValues) {
        console.log('carChange', selectedValues);
    };
    E2EPage.prototype.onSubmit = function (data) {
        console.log('onSubmit', data);
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
