describe('loading/tabs: windows', function() {

it('should init', function() {
  browser.get('http://localhost:8876/dist/e2e/loading/tabs/index.html?ionicplatform=windows&ionicOverlayCreatedDiff=0&ionicanimate=false&snapshot=true');
});


it('should show default spinner', function() {
  element(by.css('.e2eLoadingTabsContent')).click();
});


});
