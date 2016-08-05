describe('toggle/basic: windows', function() {

it('should init', function() {
  browser.get('http://localhost:8876/dist/e2e/toggle/basic/index.html?ionicplatform=windows&ionicOverlayCreatedDiff=0&ionicanimate=false&snapshot=true');
});


it('should check apple via switch element click', function() {
  element(by.css('[formControlName="appleCtrl"]')).click();
});


it('should enable/check grape via buttons and submit form', function() {
  element(by.css('.e2eGrapeDisabled')).click();
  element(by.css('.e2eGrapeChecked')).click();
  element(by.css('.e2eSubmit')).click();
});


});
