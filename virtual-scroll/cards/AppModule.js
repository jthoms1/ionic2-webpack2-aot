import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage() {
        this.items = [];
        for (var i = 0; i < 1000; i++) {
            this.items.push({
                name: i + ' - ' + images[rotateImg],
                imgSrc: getImgSrc(),
                avatarSrc: getImgSrc(),
                imgHeight: Math.floor((Math.random() * 50) + 150),
                content: lorem.substring(0, (Math.random() * (lorem.length - 100)) + 100)
            });
            rotateImg++;
            if (rotateImg === images.length)
                rotateImg = 0;
        }
    }
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [];
    return E2EPage;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = E2EPage;
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    template: '<ion-nav [root]="root"></ion-nav>',
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
                        IonicModule.forRoot(E2EApp, {
                            prodMode: true
                        })
                    ],
                    entryComponents: [
                        E2EApp,
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
var images = [
    'bandit',
    'batmobile',
    'blues-brothers',
    'bueller',
    'delorean',
    'eleanor',
    'general-lee',
    'ghostbusters',
    'knight-rider',
    'mirth-mobile',
];
function getImgSrc() {
    var src = "../../img/img/" + images[rotateImg] + ".jpg?" + Math.round(Math.random() * 10000000);
    rotateImg++;
    if (rotateImg === images.length)
        rotateImg = 0;
    return src;
}
var rotateImg = 0;
