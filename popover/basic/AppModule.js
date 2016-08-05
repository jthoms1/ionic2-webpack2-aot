import { Component, ViewChild, ElementRef, ViewEncapsulation, NgModule } from '@angular/core';
import { IonicModule, PopoverController, NavParams, ViewController } from '../../../dist';
export var PopoverRadioPage = (function () {
    function PopoverRadioPage(navParams) {
        this.navParams = navParams;
        this.colors = {
            'white': {
                'bg': 'rgb(255, 255, 255)',
                'fg': 'rgb(0, 0, 0)'
            },
            'tan': {
                'bg': 'rgb(249, 241, 228)',
                'fg': 'rgb(0, 0, 0)'
            },
            'grey': {
                'bg': 'rgb(76, 75, 80)',
                'fg': 'rgb(255, 255, 255)'
            },
            'black': {
                'bg': 'rgb(0, 0, 0)',
                'fg': 'rgb(255, 255, 255)'
            },
        };
    }
    PopoverRadioPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.contentEle = this.navParams.data.contentEle;
            this.textEle = this.navParams.data.textEle;
            this.background = this.getColorName(this.contentEle.style.backgroundColor);
            this.setFontFamily();
        }
    };
    PopoverRadioPage.prototype.getColorName = function (background) {
        var colorName = 'white';
        if (!background)
            return 'white';
        for (var key in this.colors) {
            if (this.colors[key].bg === background) {
                colorName = key;
            }
        }
        return colorName;
    };
    PopoverRadioPage.prototype.setFontFamily = function () {
        if (this.textEle.style.fontFamily) {
            this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, '');
        }
    };
    PopoverRadioPage.prototype.changeBackground = function (color) {
        this.background = color;
        this.contentEle.style.backgroundColor = this.colors[color].bg;
        this.textEle.style.color = this.colors[color].fg;
    };
    PopoverRadioPage.prototype.changeFontSize = function (direction) {
        this.textEle.style.fontSize = direction;
    };
    PopoverRadioPage.prototype.changeFontFamily = function () {
        if (this.fontFamily)
            this.textEle.style.fontFamily = this.fontFamily;
    };
    /** @nocollapse */
    PopoverRadioPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-content>\n      <ion-list radio-group [(ngModel)]=\"fontFamily\" (ionChange)=\"changeFontFamily()\">\n        <ion-row>\n          <ion-col>\n            <button (click)=\"changeFontSize('smaller')\" ion-item detail-none class=\"text-button text-smaller\">A</button>\n          </ion-col>\n          <ion-col>\n            <button (click)=\"changeFontSize('larger')\" ion-item detail-none class=\"text-button text-larger\">A</button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"row-dots\">\n          <ion-col>\n            <button (click)=\"changeBackground('white')\" category=\"dot\" class=\"dot-white\" [class.selected]=\"background == 'white'\"></button>\n          </ion-col>\n          <ion-col>\n            <button (click)=\"changeBackground('tan')\" category=\"dot\" class=\"dot-tan\" [class.selected]=\"background == 'tan'\"></button>\n          </ion-col>\n          <ion-col>\n            <button (click)=\"changeBackground('grey')\" category=\"dot\" class=\"dot-grey\" [class.selected]=\"background == 'grey'\"></button>\n          </ion-col>\n          <ion-col>\n            <button (click)=\"changeBackground('black')\" category=\"dot\" class=\"dot-black\" [class.selected]=\"background == 'black'\"></button>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"text-athelas\">\n          <ion-label>Athelas</ion-label>\n          <ion-radio value=\"Athelas\"></ion-radio>\n        </ion-item>\n        <ion-item class=\"text-charter\">\n          <ion-label>Charter</ion-label>\n          <ion-radio value=\"Charter\"></ion-radio>\n        </ion-item>\n        <ion-item class=\"text-iowan\">\n          <ion-label>Iowan</ion-label>\n          <ion-radio value=\"Iowan\"></ion-radio>\n        </ion-item>\n        <ion-item class=\"text-palatino\">\n          <ion-label>Palatino</ion-label>\n          <ion-radio value=\"Palatino\"></ion-radio>\n        </ion-item>\n        <ion-item class=\"text-san-francisco\">\n          <ion-label>San Francisco</ion-label>\n          <ion-radio value=\"San Francisco\"></ion-radio>\n        </ion-item>\n        <ion-item class=\"text-seravek\">\n          <ion-label>Seravek</ion-label>\n          <ion-radio value=\"Seravek\"></ion-radio>\n        </ion-item>\n        <ion-item class=\"text-times-new-roman\">\n          <ion-label>Times New Roman</ion-label>\n          <ion-radio value=\"Times New Roman\"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    PopoverRadioPage.ctorParameters = [
        { type: NavParams, },
    ];
    return PopoverRadioPage;
}());
export var PopoverListPage = (function () {
    function PopoverListPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PopoverListPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    /** @nocollapse */
    PopoverListPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-list>\n      <ion-list-header>Ionic</ion-list-header>\n      <button ion-item (click)=\"close()\">Learn Ionic</button>\n      <button ion-item (click)=\"close()\">Documentation</button>\n    </ion-list>\n  "
                },] },
    ];
    /** @nocollapse */
    PopoverListPage.ctorParameters = [
        { type: ViewController, },
    ];
    return PopoverListPage;
}());
export var PopoverLongListPage = (function () {
    function PopoverLongListPage() {
        this.items = [];
    }
    PopoverLongListPage.prototype.ngOnInit = function () {
        for (var i = 1; i < 21; i++) {
            this.items.push(i);
        }
    };
    /** @nocollapse */
    PopoverLongListPage.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-content>\n      <ion-list>\n        <ion-list-header>Ionic</ion-list-header>\n        <button ion-item *ngFor=\"let item of items\">Item {{item}}</button>\n      </ion-list>\n    </ion-content>\n  "
                },] },
    ];
    return PopoverLongListPage;
}());
export var E2EPage = (function () {
    function E2EPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    E2EPage.prototype.presentListPopover = function (ev) {
        var popover = this.popoverCtrl.create(PopoverListPage);
        popover.present({
            ev: ev
        });
    };
    E2EPage.prototype.presentLongListPopover = function (ev) {
        var popover = this.popoverCtrl.create(PopoverLongListPage);
        popover.present({
            ev: ev
        });
    };
    E2EPage.prototype.presentRadioPopover = function (ev) {
        var popover = this.popoverCtrl.create(PopoverRadioPage, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });
        popover.present({
            ev: ev
        });
    };
    E2EPage.prototype.presentNoEventPopover = function () {
        this.popoverCtrl.create(PopoverListPage).present();
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: PopoverController, },
    ];
    /** @nocollapse */
    E2EPage.propDecorators = {
        'content': [{ type: ViewChild, args: ['popoverContent', { read: ElementRef },] },],
        'text': [{ type: ViewChild, args: ['popoverText', { read: ElementRef },] },],
    };
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
                    styleUrls: ['style.css'],
                    encapsulation: ViewEncapsulation.None
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
                        PopoverRadioPage,
                        PopoverListPage,
                        PopoverLongListPage
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        E2EPage,
                        PopoverRadioPage,
                        PopoverListPage,
                        PopoverLongListPage
                    ]
                },] },
    ];
    return AppModule;
}());
