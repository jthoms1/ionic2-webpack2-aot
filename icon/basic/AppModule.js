import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
        this.homeIcon = 'home';
        this.isActive = false;
        this.iconIndex = 0;
        this.icons = [
            'home',
            'star',
            'ios-alert',
            'ios-alert-outline',
            'md-alert',
            'logo-apple'
        ];
        this.btnIcon = this.icons[0];
    }
    E2EPage.prototype.updateIcon = function () {
        this.iconIndex++;
        if (this.iconIndex >= this.icons.length) {
            this.iconIndex = 0;
        }
        this.btnIcon = this.icons[this.iconIndex];
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [];
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
