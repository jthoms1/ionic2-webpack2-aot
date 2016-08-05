import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { IonicModule, PickerController } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage(pickerCtrl) {
        this.pickerCtrl = pickerCtrl;
    }
    E2EPage.prototype.twoColumns = function () {
        var _this = this;
        var picker = this.pickerCtrl.create({
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Done',
                    handler: function (data) {
                        _this.smoothie = data.flavor1.value + " " + data.flavor2.value;
                    }
                }
            ],
            columns: [
                {
                    name: 'flavor1',
                    align: 'right',
                    options: [
                        { text: 'Mango' },
                        { text: 'Banana' },
                        { text: 'Cherry' },
                        { text: 'Strawberry' },
                        { text: 'Raspberry' },
                        { text: 'Blueberry' },
                        { text: 'Peach' },
                        { text: 'Coconut' },
                        { text: 'Pineapple' },
                        { text: 'Honeydew' },
                        { text: 'Watermelon' },
                        { text: 'Grape' },
                        { text: 'Avocado' },
                        { text: 'Kiwi' },
                        { text: 'Orange' },
                        { text: 'Papaya' },
                    ]
                },
                {
                    name: 'flavor2',
                    align: 'left',
                    options: [
                        { text: 'Banana' },
                        { text: 'Orange' },
                        { text: 'Grape' },
                        { text: 'Watermelon' },
                        { text: 'Strawberry' },
                        { text: 'Papaya' },
                        { text: 'Kiwi' },
                        { text: 'Cherry' },
                        { text: 'Raspberry' },
                        { text: 'Mango' },
                        { text: 'Pineapple' },
                        { text: 'Peach' },
                        { text: 'Avocado' },
                        { text: 'Honeydew' },
                        { text: 'Blueberry' },
                        { text: 'Coconut' },
                    ]
                },
            ]
        });
        picker.present();
    };
    E2EPage.prototype.prefixLabel = function () {
        var _this = this;
        var picker = this.pickerCtrl.create({
            buttons: [
                {
                    text: 'Nerp',
                    role: 'cancel'
                },
                {
                    text: 'Woot!',
                    handler: function (data) {
                        _this.smoothie = "" + data.flavor1.value;
                    }
                }
            ],
            columns: [
                {
                    name: 'flavor1',
                    align: 'left',
                    prefix: 'Flavor',
                    options: [
                        { text: 'Mango' },
                        { text: 'Banana' },
                        { text: 'Cherry' },
                        { text: 'Strawberry' },
                        { text: 'Raspberry' },
                        { text: 'Blueberry' },
                        { text: 'Peach' },
                        { text: 'Coconut' },
                        { text: 'Pineapple' },
                        { text: 'Honeydew' },
                        { text: 'Watermelon' },
                        { text: 'Grape' },
                        { text: 'Avocado' },
                        { text: 'Kiwi' },
                        { text: 'Orange' },
                        { text: 'Papaya' },
                    ]
                }
            ]
        });
        picker.present();
    };
    E2EPage.prototype.suffixLabel = function () {
        var _this = this;
        var picker = this.pickerCtrl.create({
            buttons: [
                {
                    text: 'No',
                    role: 'cancel'
                },
                {
                    text: 'Si',
                    handler: function (data) {
                        _this.smoothie = "" + data.flavor1.value;
                    }
                }
            ],
            columns: [
                {
                    name: 'flavor1',
                    align: 'right',
                    suffix: 'flavor',
                    options: [
                        { text: 'Mango' },
                        { text: 'Banana' },
                        { text: 'Cherry' },
                        { text: 'Strawberry' },
                        { text: 'Raspberry' },
                        { text: 'Blueberry' },
                        { text: 'Peach' },
                        { text: 'Coconut' },
                        { text: 'Pineapple' },
                        { text: 'Honeydew' },
                        { text: 'Watermelon' },
                        { text: 'Grape' },
                        { text: 'Avocado' },
                        { text: 'Kiwi' },
                        { text: 'Orange' },
                        { text: 'Papaya' },
                    ]
                }
            ]
        });
        picker.present();
    };
    E2EPage.prototype.columnSizes = function () {
        var _this = this;
        var picker = this.pickerCtrl.create();
        picker.addButton({
            text: 'Cancel',
            role: 'cancel'
        });
        picker.addButton({
            text: 'Set Timer',
            handler: function (data) {
                _this.timer = data.hour.value + ":" + data.min.value;
            }
        });
        picker.addColumn({
            name: 'hour',
            suffix: 'hour',
            columnWidth: '30%',
            optionsWidth: '50px',
            options: Array.apply(null, { length: 23 }).map(Number.call, Number)
        });
        var minuteOptions = [];
        for (var i = 0; i < 60; i++) {
            minuteOptions.push({
                text: i,
                value: ('0' + i).slice(-2)
            });
        }
        picker.addColumn({
            name: 'min',
            suffix: 'min',
            columnWidth: '40%',
            optionsWidth: '80px',
            options: minuteOptions
        });
        picker.present();
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html',
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: PickerController, },
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
                    entryComponents: [
                        E2EApp,
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
