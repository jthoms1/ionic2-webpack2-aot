import { Component, NgModule } from '@angular/core';
import { IonicModule } from '../../../dist';


@Component({
  templateUrl: 'main.html'
})
export class E2EPage {
  outlineButton = true;

  toggleOutline() {
    this.outlineButton = !this.outlineButton;
  }
}

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class E2EApp {
  rootPage = E2EPage;
}

@NgModule({
  declarations: [
    E2EApp,
    E2EPage
  ],
  imports: [
    IonicModule.forRoot(E2EApp)
  ],
  bootstrap: [E2EApp],
  entryComponents: [
    E2EPage
  ]
})
export class AppModule {}
