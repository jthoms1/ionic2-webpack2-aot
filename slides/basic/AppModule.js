import { Component, ViewChild, NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { IonicModule, Slides } from '../../../dist';
export var E2EApp = (function () {
    function E2EApp(http) {
        this.http = http;
        this.images = [];
        this.mySlideOptions = {
            loop: true
        };
    }
    E2EApp.prototype.ngAfterViewInit = function () {
        var _this = this;
        var tags = 'amsterdam';
        var FLICKR_API_KEY = '504fd7414f6275eb5b657ddbfba80a2c';
        var baseUrl = 'https://api.flickr.com/services/rest/';
        this.http.get(baseUrl + '?method=flickr.groups.pools.getPhotos&group_id=1463451@N25&safe_search=1&api_key='
            + FLICKR_API_KEY + '&nojsoncallback=1&format=json&tags=' + tags)
            .subscribe(function (data) {
            _this.images = data.json().photos.photo.slice(0, 20);
            setTimeout(function () {
                _this.slider.update();
            });
        }, function (err) {
            console.info('Unable to load images');
            console.error(err);
        });
    };
    E2EApp.prototype.getImageUrl = function (item) {
        return "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_z.jpg";
    };
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'main.html'
                },] },
    ];
    /** @nocollapse */
    E2EApp.ctorParameters = [
        { type: Http, },
    ];
    /** @nocollapse */
    E2EApp.propDecorators = {
        'slider': [{ type: ViewChild, args: [Slides,] },],
    };
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
                    entryComponents: [
                        E2EApp
                    ]
                },] },
    ];
    return AppModule;
}());
