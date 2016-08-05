import { Component, NgModule } from '@angular/core';
import { IonicModule, NavController, NavParams } from '../../../dist';
export var MainPage = (function () {
    function MainPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MainPage.prototype.goToSecond = function () {
        this.navCtrl.push(SearchPage);
    };
    /** @nocollapse */
    MainPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    MainPage.ctorParameters = [
        { type: NavController, },
    ];
    return MainPage;
}());
export var SearchPage = (function () {
    function SearchPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.initializeItems();
    }
    SearchPage.prototype.showDetail = function (item) {
        this.navCtrl.push(DetailPage, { city: item });
    };
    SearchPage.prototype.initializeItems = function () {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    };
    SearchPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = ev.target.value;
        // if the value is an empty string don't filter the items
        if (!q || q.trim() === '') {
            return;
        }
        this.items = this.items.filter(function (v) {
            if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
    };
    /** @nocollapse */
    SearchPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'search.html'
                },] },
    ];
    /** @nocollapse */
    SearchPage.ctorParameters = [
        { type: NavController, },
    ];
    return SearchPage;
}());
export var DetailPage = (function () {
    function DetailPage(_navParams) {
        this._navParams = _navParams;
        this.city = _navParams.get('city');
    }
    /** @nocollapse */
    DetailPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'detail.html'
                },] },
    ];
    /** @nocollapse */
    DetailPage.ctorParameters = [
        { type: NavParams, },
    ];
    return DetailPage;
}());
export var TabsPage = (function () {
    function TabsPage() {
        this.mainPage = MainPage;
        this.searchPage = SearchPage;
    }
    /** @nocollapse */
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'tabs.html'
                },] },
    ];
    return TabsPage;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.root = TabsPage;
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
                        MainPage,
                        SearchPage,
                        DetailPage,
                        TabsPage
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        E2EApp,
                        MainPage,
                        SearchPage,
                        DetailPage,
                        TabsPage
                    ]
                },] },
    ];
    return AppModule;
}());
