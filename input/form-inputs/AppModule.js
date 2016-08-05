import { FormBuilder, Validators } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';
export var E2EPage = (function () {
    function E2EPage(fb) {
        this.login = {
            email: 'help@ionic.io',
            username: 'admin',
            password: '',
            gender: '',
            comments: ''
        };
        this.user = {
            username: 'asdf',
            password: '82'
        };
        this.submitted = false;
        this.loginForm = fb.group({
            email: ['', Validators.compose([
                    Validators.required,
                    this.emailValidator
                ])],
            username: [''],
            password: ['', Validators.required],
            comments: ['', Validators.required],
            gender: ['', Validators.required]
        });
        this.userForm = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
    E2EPage.prototype.emailValidator = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (!EMAIL_REGEXP.test(control.value)) {
            return { invalidEmail: true };
        }
    };
    E2EPage.prototype.submit = function (ev, value) {
        console.log('Submitted', value);
        this.submitted = true;
    };
    E2EPage.prototype.disable = function () {
        this.isTextAreaDisabled = !this.isTextAreaDisabled;
    };
    /** @nocollapse */
    E2EPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EPage.ctorParameters = [
        { type: FormBuilder, },
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
                        E2EPage
                    ]
                },] },
    ];
    return AppModule;
}());
