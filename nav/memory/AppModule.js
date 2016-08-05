import { Component, NgModule } from '@angular/core';
import { IonicModule, NavController } from '../../../dist';
var delay = 100;
var animate = false;
var count = 0;
export var Page1 = (function () {
    function Page1(nav) {
        this.nav = nav;
    }
    Page1.prototype.play = function () {
        var _this = this;
        this.tmr = setTimeout(function () {
            count++;
            console.log('push', count);
            _this.nav.push(Page2, null, {
                animate: animate
            });
        }, delay);
    };
    Page1.prototype.ionViewDidEnter = function () {
        this.play();
    };
    Page1.prototype.stop = function () {
        clearTimeout(this.tmr);
    };
    /** @nocollapse */
    Page1.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-content padding text-center>\n      <p>Page 1</p>\n      <button (click)=\"stop()\">Stop</button>\n      <button (click)=\"play()\">Play</button>\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    Page1.ctorParameters = [
        { type: NavController, },
    ];
    return Page1;
}());
export var Page2 = (function () {
    function Page2(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page2.prototype.play = function () {
        var _this = this;
        this.tmr = setTimeout(function () {
            count++;
            console.log('pop', count);
            _this.navCtrl.pop({
                animate: animate
            });
        }, delay);
    };
    Page2.prototype.ionViewDidEnter = function () {
        this.play();
    };
    Page2.prototype.stop = function () {
        clearTimeout(this.tmr);
    };
    /** @nocollapse */
    Page2.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-content padding text-center>\n      <p>Page 2</p>\n      <button (click)=\"stop()\">Stop</button>\n      <button (click)=\"play()\">Play</button>\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    Page2.ctorParameters = [
        { type: NavController, },
    ];
    return Page2;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = Page1;
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
                        Page1,
                        Page2
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        Page1,
                        Page2
                    ]
                },] },
    ];
    return AppModule;
}());
