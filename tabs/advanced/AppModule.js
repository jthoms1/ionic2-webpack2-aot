import { Component, NgModule, ViewChild } from '@angular/core';
import { IonicModule, App, NavController, NavParams, ModalController, ViewController, Tabs } from '../../../dist';
export var SignIn = (function () {
    function SignIn(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignIn.prototype.push = function () {
        this.navCtrl.push(TabsPage, {
            userId: 8675309
        });
    };
    /** @nocollapse */
    SignIn.decorators = [
        { type: Component, args: [{
                    templateUrl: './signIn.html'
                },] },
    ];
    /** @nocollapse */
    SignIn.ctorParameters = [
        { type: NavController, },
    ];
    return SignIn;
}());
export var ChatPage = (function () {
    function ChatPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ChatPage.prototype.ionViewLoaded = function () {
        console.log('ChatPage, ionViewLoaded');
    };
    ChatPage.prototype.ionViewDidUnload = function () {
        console.log('ChatPage, ionViewDidUnload');
    };
    /** @nocollapse */
    ChatPage.decorators = [
        { type: Component, args: [{
                    templateUrl: './modalChat.html'
                },] },
    ];
    /** @nocollapse */
    ChatPage.ctorParameters = [
        { type: ViewController, },
    ];
    return ChatPage;
}());
export var TabsPage = (function () {
    function TabsPage(modalCtrl, params) {
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.tab1Root = Tab1Page1;
        this.tab2Root = Tab2Page1;
        this.tab3Root = Tab3Page1;
    }
    TabsPage.prototype.ngAfterViewInit = function () {
        this.tabs.ionChange.subscribe(function (tab) {
            console.log('tabs.ionChange.subscribe', tab.index);
        });
    };
    TabsPage.prototype.onTabChange = function () {
        // wired up through the template
        // <ion-tabs (ionChange)="onTabChange()">
        console.log('onTabChange');
    };
    TabsPage.prototype.chat = function () {
        console.log('Chat clicked!');
        this.modalCtrl.create(ChatPage).present();
    };
    TabsPage.prototype.ionViewWillEnter = function () {
        console.log('TabsPage, ionViewWillEnter');
    };
    TabsPage.prototype.ionViewDidEnter = function () {
        console.log('TabsPage, ionViewDidEnter');
    };
    TabsPage.prototype.ionViewWillLeave = function () {
        console.log('TabsPage, ionViewWillLeave');
    };
    TabsPage.prototype.ionViewDidLeave = function () {
        console.log('TabsPage, ionViewDidLeave');
    };
    TabsPage.prototype.ionViewDidUnload = function () {
        console.log('TabsPage, ionViewDidUnload');
    };
    /** @nocollapse */
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: './tabs.html'
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = [
        { type: ModalController, },
        { type: NavParams, },
    ];
    /** @nocollapse */
    TabsPage.propDecorators = {
        'tabs': [{ type: ViewChild, args: [Tabs,] },],
    };
    return TabsPage;
}());
export var Tab1Page1 = (function () {
    function Tab1Page1(navCtrl, app, tabs, params) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.tabs = tabs;
        this.params = params;
        this.userId = params.get('userId');
    }
    Tab1Page1.prototype.push = function () {
        this.navCtrl.push(Tab1Page2);
    };
    Tab1Page1.prototype.goBack = function () {
        console.log('go back begin');
        this.navCtrl.pop().then(function (val) {
            console.log('go back completed', val);
        });
    };
    Tab1Page1.prototype.favoritesTab = function () {
        this.tabs.select(1);
    };
    Tab1Page1.prototype.logout = function () {
        this.app.getRootNav().setRoot(SignIn, null, { animate: true, direction: 'back' });
    };
    Tab1Page1.prototype.ionViewWillEnter = function () {
        console.log('Tab1Page1, ionViewWillEnter');
    };
    Tab1Page1.prototype.ionViewDidEnter = function () {
        console.log('Tab1Page1, ionViewDidEnter');
    };
    Tab1Page1.prototype.ionViewWillLeave = function () {
        console.log('Tab1Page1, ionViewWillLeave');
    };
    Tab1Page1.prototype.ionViewDidLeave = function () {
        console.log('Tab1Page1, ionViewDidLeave');
    };
    Tab1Page1.prototype.ionViewDidUnload = function () {
        console.log('Tab1Page1, ionViewDidUnload');
    };
    /** @nocollapse */
    Tab1Page1.decorators = [
        { type: Component, args: [{
                    templateUrl: './tab1page1.html'
                },] },
    ];
    /** @nocollapse */
    Tab1Page1.ctorParameters = [
        { type: NavController, },
        { type: App, },
        { type: Tabs, },
        { type: NavParams, },
    ];
    return Tab1Page1;
}());
export var Tab1Page2 = (function () {
    function Tab1Page2(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Tab1Page2.prototype.push = function () {
        this.navCtrl.push(Tab1Page3);
    };
    Tab1Page2.prototype.ionViewWillEnter = function () {
        console.log('Tab1Page2, ionViewWillEnter');
    };
    Tab1Page2.prototype.ionViewDidEnter = function () {
        console.log('Tab1Page2, ionViewDidEnter');
    };
    Tab1Page2.prototype.ionViewWillLeave = function () {
        console.log('Tab1Page2, ionViewWillLeave');
    };
    Tab1Page2.prototype.ionViewDidLeave = function () {
        console.log('Tab1Page2, ionViewDidLeave');
    };
    Tab1Page2.prototype.ionViewDidUnload = function () {
        console.log('Tab1Page2, ionViewDidUnload');
    };
    /** @nocollapse */
    Tab1Page2.decorators = [
        { type: Component, args: [{
                    templateUrl: './tab1page2.html'
                },] },
    ];
    /** @nocollapse */
    Tab1Page2.ctorParameters = [
        { type: NavController, },
    ];
    return Tab1Page2;
}());
export var Tab1Page3 = (function () {
    function Tab1Page3(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Tab1Page3.prototype.ionViewWillEnter = function () {
        console.log('Tab1Page3, ionViewWillEnter');
    };
    Tab1Page3.prototype.ionViewDidEnter = function () {
        console.log('Tab1Page3, ionViewDidEnter');
    };
    Tab1Page3.prototype.ionViewWillLeave = function () {
        console.log('Tab1Page3, ionViewWillLeave');
    };
    Tab1Page3.prototype.ionViewDidLeave = function () {
        console.log('Tab1Page3, ionViewDidLeave');
    };
    Tab1Page3.prototype.ionViewDidUnload = function () {
        console.log('Tab1Page3, ionViewDidUnload');
    };
    /** @nocollapse */
    Tab1Page3.decorators = [
        { type: Component, args: [{
                    templateUrl: './tab1page3.html'
                },] },
    ];
    /** @nocollapse */
    Tab1Page3.ctorParameters = [
        { type: NavController, },
    ];
    return Tab1Page3;
}());
export var Tab2Page1 = (function () {
    function Tab2Page1(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Tab2Page1.prototype.push = function () {
        this.navCtrl.push(Tab2Page2);
    };
    Tab2Page1.prototype.ionViewWillEnter = function () {
        console.log('Tab2Page1, ionViewWillEnter');
    };
    Tab2Page1.prototype.ionViewDidEnter = function () {
        console.log('Tab2Page1, ionViewDidEnter');
    };
    Tab2Page1.prototype.ionViewWillLeave = function () {
        console.log('Tab2Page1, ionViewWillLeave');
    };
    Tab2Page1.prototype.ionViewDidLeave = function () {
        console.log('Tab2Page1, ionViewDidLeave');
    };
    Tab2Page1.prototype.ionViewDidUnload = function () {
        console.log('Tab2Page1, ionViewDidUnload');
    };
    /** @nocollapse */
    Tab2Page1.decorators = [
        { type: Component, args: [{
                    templateUrl: './tab2page1.html'
                },] },
    ];
    /** @nocollapse */
    Tab2Page1.ctorParameters = [
        { type: NavController, },
    ];
    return Tab2Page1;
}());
export var Tab2Page2 = (function () {
    function Tab2Page2(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Tab2Page2.prototype.push = function () {
        this.navCtrl.push(Tab2Page3);
    };
    Tab2Page2.prototype.ionViewWillEnter = function () {
        console.log('Tab2Page2, ionViewWillEnter');
    };
    Tab2Page2.prototype.ionViewDidEnter = function () {
        console.log('Tab2Page2, ionViewDidEnter');
    };
    Tab2Page2.prototype.ionViewWillLeave = function () {
        console.log('Tab2Page2, ionViewWillLeave');
    };
    Tab2Page2.prototype.ionViewDidLeave = function () {
        console.log('Tab2Page2, ionViewDidLeave');
    };
    Tab2Page2.prototype.ionViewDidUnload = function () {
        console.log('Tab2Page2, ionViewDidUnload');
    };
    /** @nocollapse */
    Tab2Page2.decorators = [
        { type: Component, args: [{
                    templateUrl: './tab2page2.html'
                },] },
    ];
    /** @nocollapse */
    Tab2Page2.ctorParameters = [
        { type: NavController, },
    ];
    return Tab2Page2;
}());
export var Tab2Page3 = (function () {
    function Tab2Page3(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Tab2Page3.prototype.ionViewWillEnter = function () {
        console.log('Tab2Page3, ionViewWillEnter');
    };
    Tab2Page3.prototype.ionViewDidEnter = function () {
        console.log('Tab2Page3, ionViewDidEnter');
    };
    Tab2Page3.prototype.ionViewWillLeave = function () {
        console.log('Tab2Page3, ionViewWillLeave');
    };
    Tab2Page3.prototype.ionViewDidLeave = function () {
        console.log('Tab2Page3, ionViewDidLeave');
    };
    Tab2Page3.prototype.ionViewDidUnload = function () {
        console.log('Tab2Page3, ionViewDidUnload');
    };
    /** @nocollapse */
    Tab2Page3.decorators = [
        { type: Component, args: [{
                    templateUrl: './tab2page3.html'
                },] },
    ];
    /** @nocollapse */
    Tab2Page3.ctorParameters = [
        { type: NavController, },
    ];
    return Tab2Page3;
}());
export var Tab3Page1 = (function () {
    function Tab3Page1() {
    }
    Tab3Page1.prototype.ionViewWillEnter = function () {
        console.log('Tab3Page1, ionViewWillEnter');
    };
    Tab3Page1.prototype.ionViewDidEnter = function () {
        console.log('Tab3Page1, ionViewDidEnter');
    };
    Tab3Page1.prototype.ionViewWillLeave = function () {
        console.log('Tab3Page1, ionViewWillLeave');
    };
    Tab3Page1.prototype.ionViewDidLeave = function () {
        console.log('Tab3Page1, ionViewDidLeave');
    };
    Tab3Page1.prototype.ionViewDidUnload = function () {
        console.log('Tab3Page1, ionViewDidUnload');
    };
    /** @nocollapse */
    Tab3Page1.decorators = [
        { type: Component, args: [{
                    templateUrl: './tab3page1.html'
                },] },
    ];
    return Tab3Page1;
}());
export var E2EApp = (function () {
    function E2EApp() {
        this.rootPage = SignIn;
    }
    /** @nocollapse */
    E2EApp.decorators = [
        { type: Component, args: [{
                    template: '<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>'
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
                        SignIn,
                        ChatPage,
                        TabsPage,
                        Tab1Page1,
                        Tab1Page2,
                        Tab1Page3,
                        Tab2Page1,
                        Tab2Page2,
                        Tab2Page3,
                        Tab3Page1
                    ],
                    imports: [
                        IonicModule.forRoot(E2EApp)
                    ],
                    entryComponents: [
                        SignIn,
                        ChatPage,
                        TabsPage,
                        Tab1Page1,
                        Tab1Page2,
                        Tab1Page3,
                        Tab2Page1,
                        Tab2Page2,
                        Tab2Page3,
                        Tab3Page1
                    ]
                },] },
    ];
    return AppModule;
}());
