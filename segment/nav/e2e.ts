describe('segment/nav: windows', function() {

it('should init', function() {
  browser.get('http://localhost:8876/dist/e2e/segment/nav/index.html?ionicplatform=windows&ionicOverlayCreatedDiff=0&ionicanimate=false&snapshot=true');
});


it('existing should be selected', function() {
  element(by.css('.e2eSegmentExistingSegment')).click();
});

it('test should be selected', function() {
  element(by.css('.e2eSegmentTestButton')).click();
});


});
