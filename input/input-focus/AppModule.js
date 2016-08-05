import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
    }
    E2EPage.prototype.reload = function () {
        window.location.reload();
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    return E2EPage;
}());
document.addEventListener('click', function (ev) {
    console.log("CLICK, " + ev.target.localName + "." + ev.target.className + ", time: " + Date.now());
});
document.addEventListener('touchstart', function (ev) {
    console.log("TOUCH START, " + ev.target.localName + "." + ev.target.className + ", time: " + Date.now());
});
document.addEventListener('touchend', function (ev) {
    console.log("TOUCH END, " + ev.target.localName + "." + ev.target.className + ", time: " + Date.now());
});
document.addEventListener('focusin', function (ev) {
    console.log("CLICK, " + ev.target.localName + "." + ev.target.className + ", time: " + Date.now());
    console.log("FOCUS IN, " + ev.target.localName + "." + ev.target.className + ", time: " + Date.now());
});
document.addEventListener('focusout', function (ev) {
    console.log("CLICK, " + ev.target.localName + "." + ev.target.className + ", time: " + Date.now());
    console.log("FOCUS OUT, " + ev.target.localName + "." + ev.target.className + ", time: " + Date.now());
});
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
                    entryComponents: [
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
