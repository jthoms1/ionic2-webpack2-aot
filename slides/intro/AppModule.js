import { Component, NgModule } from '@angular/core';
import { IonicModule, NavController } from '../../../dist';
export var IntroPage = (function () {
    function IntroPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.continueText = 'Skip';
        this.startingIndex = 1;
        this.showSlide = true;
        this.mySlideOptions = {
            paginationClickable: true,
            lazyLoading: true,
            preloadImages: false,
            initialSlide: this.startingIndex
        };
    }
    IntroPage.prototype.onSlideChanged = function (slider) {
        console.log('Slide changed', slider);
    };
    IntroPage.prototype.onSlideChangeStart = function (slider) {
        console.log('Slide change start', slider);
        slider.isEnd ? this.continueText = 'Continue' : this.continueText = 'Skip';
    };
    IntroPage.prototype.onSlideMove = function (slider) {
        console.log('Slide move', slider);
    };
    IntroPage.prototype.toggleLastSlide = function () {
        this.showSlide = !this.showSlide;
    };
    IntroPage.prototype.skip = function () {
        this.navCtrl.push(MainPage);
    };
    /** @nocollapse */
    IntroPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    IntroPage.ctorParameters = [
        { type: NavController, },
    ];
    return IntroPage;
}());
export var MainPage = (function () {
    function MainPage() {
    }
    MainPage.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>Slides</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <h1>Another Page</h1>\n  </ion-content>\n  "
                },] },
    ];
    return MainPage;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = IntroPage;
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
                        IntroPage,
                        MainPage
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        IntroPage,
                        MainPage
                    ]
                },] },
    ];
    return AppModule;
}());
