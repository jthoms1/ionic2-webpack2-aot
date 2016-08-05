import { Component, ViewChild, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var SegmentPage = (function () {
    function SegmentPage() {
        this.selectedSegment = "first";
        this.slides = [
            {
                id: "first",
                title: "First Slide"
            },
            {
                id: "second",
                title: "Second Slide"
            },
            {
                id: "third",
                title: "Third Slide"
            }
        ];
    }
    SegmentPage.prototype.onSegmentChanged = function (segmentButton) {
        console.log("Segment changed to", segmentButton.value);
        var selectedIndex = this.slides.findIndex(function (slide) {
            return slide.id === segmentButton.value;
        });
        this.sliderComponent.slideTo(selectedIndex);
    };
    SegmentPage.prototype.onSlideChanged = function (slider) {
        console.log('Slide changed', slider);
        var currentSlide = this.slides[slider.activeIndex];
        this.selectedSegment = currentSlide.id;
    };
    /** @nocollapse */
    SegmentPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html',
                },] },
    ];
    /** @nocollapse */
    SegmentPage.ctorParameters = [];
    /** @nocollapse */
    SegmentPage.propDecorators = {
        'sliderComponent': [{ type: ViewChild, args: ['loopSlider',] },],
    };
    return SegmentPage;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = SegmentPage;
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
                        SegmentPage
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        SegmentPage
                    ]
                },] },
    ];
    return AppModule;
}());
