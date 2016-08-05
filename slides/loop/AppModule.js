import { Component, ViewChild, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EApp = (function () {
    function E2EApp() {
        this.slides = [
            {
                name: 'Slide 1',
                class: 'yellow'
            },
            {
                name: 'Slide 2',
                class: 'red'
            },
            {
                name: 'Slide 3',
                class: 'blue'
            }
        ];
        this.myTopSlideOptions = {
            initialSlide: 2,
            loop: true
        };
    }
    E2EApp.prototype.onSlideChanged = function (slider) {
        console.log('Slide changed', slider);
    };
    E2EApp.prototype.ngAfterViewInit = function () {
        console.log(this.loopSlider);
    };
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EApp.ctorParameters = [];
    /** @nocollapse */
    E2EApp.propDecorators = {
        'loopSlider': [{ type: ViewChild, args: ['loopSlider',] },],
    };
    return E2EApp;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        E2EApp
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp
                    ]
                },] },
    ];
    return AppModule;
}());
