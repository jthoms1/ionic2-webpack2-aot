import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';


@Component({
  template: `
    <ion-content padding text-center>
      Page be loaded!
    </ion-content>
  `
})
export class AsyncPage {}


@Component({
  template: `<ion-nav [root]="root"></ion-nav>`
})
export class E2EApp {
  root: AsyncPage;

  constructor() {
    setTimeout(() => {
      this.root = AsyncPage;
    }, 1000);

  }
}

@NgModule({
  declarations: [
    E2EApp,
    AsyncPage
  ],
  imports: [
    IonicModule.forRoot(E2EApp)
  ],
  entryComponents: [
    E2EApp,
    AsyncPage
  ]
})
export class AppModule {}
