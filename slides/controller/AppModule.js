import { Component, ViewChild, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var MyPage = (function () {
    function MyPage() {
        this.mySlideOptions = {
            initialSlide: 1,
            loop: false
        };
    }
    MyPage.prototype.onSlideChanged = function () {
        var previousIndex = this.slider.getPreviousIndex();
        var currentIndex = this.slider.getActiveIndex();
        console.log('Previous index is', previousIndex, 'Current index is', currentIndex);
    };
    MyPage.prototype.onSlideMove = function (ev) {
        console.log('Slide moving', ev);
    };
    MyPage.prototype.goToPrevSlide = function () {
        this.slider.slidePrev();
    };
    MyPage.prototype.goToNextSlide = function () {
        this.slider.slideNext();
    };
    MyPage.prototype.goToSlide = function (index) {
        this.slider.slideTo(index);
    };
    MyPage.prototype.getIndex = function () {
        var index = this.slider.getActiveIndex();
        console.log('Current Index is', index);
    };
    MyPage.prototype.getLength = function () {
        var length = this.slider.length();
        console.log('Current Length is', length);
    };
    /** @nocollapse */
    MyPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    MyPage.propDecorators = {
        'slider': [{ type: ViewChild, args: ['mySlider',] },],
    };
    return MyPage;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = MyPage;
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    template: "<ion-nav [root]=\"root\"></ion-nav>"
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
                        MyPage
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        MyPage
                    ]
                },] },
    ];
    return AppModule;
}());
