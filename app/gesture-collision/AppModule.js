import { Component, ViewChild, NgModule } from '@angular/core';
import { IonicModule, MenuController, NavController, AlertController, Nav } from '../../../dist';
export var Page1 = (function () {
    function Page1(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    Page1.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'New Friend!',
            message: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            cssClass: 'my-alert',
            buttons: ['Ok']
        });
        alert.present();
    };
    Page1.prototype.goToPage1 = function () {
        this.navCtrl.push(Page1);
    };
    Page1.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    /** @nocollapse */
    Page1.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page1.html'
                },] },
    ];
    /** @nocollapse */
    Page1.ctorParameters = [
        { type: NavController, },
        { type: AlertController, },
    ];
    return Page1;
}());
export var E2EPage = (function () {
    function E2EPage(menu) {
        this.menu = menu;
        this.changeDetectionCount = 0;
        this.rootPage = Page1;
        this.pages = [
            { title: 'Page 1', component: Page1 },
            { title: 'Page 2', component: Page1 },
            { title: 'Page 3', component: Page1 },
        ];
    }
    E2EPage.prototype.openPage = function (page) {
        var _this = this;
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component).then(function () {
            // wait for the root page to be completely loaded
            // then close the menu
            _this.menu.close();
        });
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: MenuController, },
    ];
    /** @nocollapse */
    E2EPage.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return E2EPage;
}());
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
                        E2EPage,
                        Page1
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    bootstrap: [E2EApp],
                    entryComponents: [
                        E2EPage,
                        Page1
                    ]
                },] },
    ];
    return AppModule;
}());
