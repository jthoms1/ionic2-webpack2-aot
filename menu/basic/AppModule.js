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
    Page1.prototype.goToPage2 = function () {
        this.navCtrl.push(Page2);
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
export var Page3 = (function () {
    function Page3() {
    }
    Page3.decorators = [
        { type: Component, args: [{ templateUrl: 'page3.html' },] },
    ];
    return Page3;
}());
export var Page2 = (function () {
    function Page2(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page2.prototype.page3 = function () {
        this.navCtrl.push(Page3);
    };
    /** @nocollapse */
    Page2.decorators = [
        { type: Component, args: [{ templateUrl: 'page2.html' },] },
    ];
    /** @nocollapse */
    Page2.ctorParameters = [
        { type: NavController, },
    ];
    return Page2;
}());
export var E2EPage = (function () {
    function E2EPage(menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.changeDetectionCount = 0;
        this.rootPage = Page1;
        this.pages = [
            { title: 'Page 1', component: Page1 },
            { title: 'Page 2', component: Page2 },
            { title: 'Page 3', component: Page3 },
        ];
    }
    E2EPage.prototype.openPage = function (page) {
        var _this = this;
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component).then(function () {
            // wait for the root page to be completely loaded
            // then close the menu
            _this.menuCtrl.close();
        });
    };
    E2EPage.prototype.openRightMenu = function () {
        this.menuCtrl.open('right');
    };
    E2EPage.prototype.openLeftMenu = function () {
        this.menuCtrl.open('left');
    };
    E2EPage.prototype.onDrag = function (ev) {
        console.log('Menu is being dragged', ev);
    };
    E2EPage.prototype.onOpen = function (ev) {
        console.log('Menu is open', ev);
    };
    E2EPage.prototype.onClose = function (ev) {
        console.log('Menu is closed', ev);
    };
    E2EPage.prototype.isChangeDetecting = function () {
        console.log('Change detection', ++this.changeDetectionCount);
        return true;
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
                        Page1,
                        Page2,
                        Page3
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        E2EPage,
                        Page1,
                        Page2,
                        Page3
                    ]
                },] },
    ];
    return AppModule;
}());
