import { Component, ViewChild, NgModule } from '@angular/core';
import { IonicModule, Nav, AlertController } from '../../../dist';
export var Page1 = (function () {
    function Page1() {
    }
    Page1.decorators = [
        { type: Component, args: [{ templateUrl: 'page1.html' },] },
    ];
    return Page1;
}());
export var E2EApp = (function () {
    function E2EApp(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.rootView = Page1;
    }
    E2EApp.prototype.openPage = function (menu, page) {
        // close the menu when clicking a link from the menu
        menu.close();
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    E2EApp.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Alert example',
            buttons: ['Ok']
        });
        alert.present();
    };
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EApp.ctorParameters = [
        { type: AlertController, },
    ];
    /** @nocollapse */
    E2EApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return E2EApp;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        E2EApp,
                        Page1
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        Page1
                    ]
                },] },
    ];
    return AppModule;
}());
