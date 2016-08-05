import { Component, NgModule } from '@angular/core';
import { IonicModule, Storage, LocalStorage, SqlStorage } from '../../../dist';
export var E2EApp = (function () {
    function E2EApp() {
        this.local = new Storage(LocalStorage);
        this.sql = new Storage(SqlStorage);
    }
    E2EApp.prototype.getLocal = function () {
        this.local.get('name').then(function (value) {
            alert('Your name is: ' + value);
        });
    };
    E2EApp.prototype.setLocal = function () {
        var name = prompt('Your name?');
        this.local.set('name', name);
    };
    E2EApp.prototype.removeLocal = function () {
        this.local.remove('name');
    };
    E2EApp.prototype.getSql = function () {
        this.sql.get('name').then(function (value) {
            alert('Your name is: ' + value);
        }, function (errResult) {
            console.error('Unable to get item from SQL db:', errResult);
        });
    };
    E2EApp.prototype.setSql = function () {
        var name = prompt('Your name?');
        this.sql.set('name', name);
    };
    E2EApp.prototype.removeSql = function () {
        this.sql.remove('name');
    };
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EApp.ctorParameters = [];
    return E2EApp;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        E2EApp
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    bootstrap: [E2EApp]
                },] },
    ];
    return AppModule;
}());
