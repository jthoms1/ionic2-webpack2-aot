import { Component, NgModule } from '@angular/core';
import { IonicModule, Config, Animation } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage(config) {
        this.duration = '1000';
        this.easing = 'ease-in-out';
        console.log('isProd', config.getBoolean('prodMode'));
    }
    E2EPage.prototype.playGreen = function () {
        var a = new Animation('.green');
        a.fromTo('translateX', '0px', '200px');
        a.duration(parseInt(this.duration));
        a.easing(this.easing);
        a.play();
    };
    E2EPage.prototype.memoryCheck = function () {
        var self = this;
        var count = 0;
        function play() {
            count++;
            if (count >= 100) {
                console.log('Play done');
                return;
            }
            console.log('Play', count);
            var a = new Animation('.green');
            a.fromTo('translateX', '0px', '200px');
            a.duration(parseInt(self.duration));
            a.easing(self.easing);
            a.onFinish(function (animation) {
                setTimeout(function () {
                    play();
                }, 100);
                animation.destroy();
            });
            a.play();
        }
        play();
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: Config, },
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
                    bootstrap: [E2EApp],
                    entryComponents: [
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
