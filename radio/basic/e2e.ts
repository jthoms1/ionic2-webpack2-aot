describe('radio/basic: windows', function() {

it('should init', function() {
  browser.get('http://localhost:8876/dist/e2e/radio/basic/index.html?ionicplatform=windows&ionicOverlayCreatedDiff=0&ionicanimate=false&snapshot=true');
});


it('should check Cherry', function() {
  element(by.css('[value="cherry"] button')).click();
});


});
