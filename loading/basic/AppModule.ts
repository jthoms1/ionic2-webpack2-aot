import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { IonicModule, LoadingController, NavController } from '../../../dist';


@Component({
  templateUrl: 'main.html'
})
export class E2EPage {
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController) {}

  presentLoadingIos() {
    let loading = this.loadingCtrl.create({
      spinner: 'ios',
      duration: 1000,
      cssClass: 'my-custom-loader'
    });

    loading.onDidDismiss(() => {
     console.log('Dismissed loading');
    });

    loading.present();
  }

  presentLoadingDots() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Loading...',
      duration: 1000
    });

    loading.present();
  }

  presentLoadingBubbles() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading...',
      duration: 1000
    });

    loading.present();
  }

  presentLoadingCircles() {
    let loading = this.loadingCtrl.create({
      spinner: 'circles',
      content: 'Loading...',
      duration: 1000
    });

    loading.present();
  }

  presentLoadingCrescent() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Please wait...',
      duration: 1000
    });

    loading.present();
  }

  // Pass the fixed-spinner class so we can turn off
  // spinner animation for the e2e test
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      cssClass: 'fixed-spinner'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
      duration: 1000
    });

    loading.present();
  }

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading Please Wait...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push(Page2);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  goToPage2() {
    this.navCtrl.push(Page2);
  }

  presentLoadingMultiple() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading 1 Please Wait...'
    });

    loading.present();

    let loading2 = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading 2 Please Wait...'
    });

    setTimeout(() => {
      loading2.present();
    }, 1000);

    let loading3 = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading 3 Please Wait...'
    });

    setTimeout(() => {
      loading3.present();

      setTimeout(() => {
        loading3.dismiss();
      }, 1000);

      setTimeout(() => {
        loading2.dismiss();
      }, 2000);

      setTimeout(() => {
        loading.dismiss();
      }, 3000);
    }, 2000);

  }

  presentLoadingMultipleNav() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading 1 Please Wait...',
      dismissOnPageChange: true
    });

    loading.present();

    let loading2 = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading 2 Please Wait...',
      dismissOnPageChange: true
    });

    setTimeout(() => {
      loading2.present();
    }, 500);

    let loading3 = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading 3 Please Wait...',
      dismissOnPageChange: true
    });

    setTimeout(() => {
      loading3.present();

      setTimeout(() => {
        this.navCtrl.push(Page2);
      }, 1000);
    }, 1000);
  }
}

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Page 2</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>Some content</ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-buttons end>
          <button (click)="goToPage3()">
            Navigate
            <ion-icon name="arrow-forward"></ion-icon>
          </button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  `
})
export class Page2 {
  constructor(public navCtrl: NavController) {}

  ionViewLoaded() {
    setTimeout(() => {
      this.navCtrl.push(Page3);
    }, 1000);
  }

  goToPage3() {
    this.navCtrl.push(Page3);
  }
}

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Page 3</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>Some content</ion-content>
  `
})
export class Page3 {}

@Component({
  template: `
    <link href="styles.css" rel="stylesheet">
    <ion-nav [root]="root"></ion-nav>
  `,
  encapsulation: ViewEncapsulation.None
})
export class E2EApp {
  root = E2EPage;
}

@NgModule({
  declarations: [
    E2EApp,
    E2EPage,
    Page2,
    Page3
  ],
  imports: [
    IonicModule.forRoot(E2EApp)
  ],
  entryComponents: [
    E2EApp,
    E2EPage,
    Page2,
    Page3
  ]
})
export class AppModule {}
