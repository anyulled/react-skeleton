var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
page.open('http://localhost:8089', function(status) {
  if (status !== 'success') {
    console.log('Unable to access network');
  } else {
    var test = page.evaluate(function() {
    	var msg = 'Test PASSED!';
    	if (document.getElementsByTagName('html').length == 0)
    		msg = 'Test FAILED: No html tag found';
    	else if (document.getElementsByTagName('head').length == 0)
    		msg = 'Test FAILED: No head tag found';
    	else if (document.getElementsByTagName('body').length == 0)
    		msg = 'Test FAILED: No body tag found';
    	return msg;
    });
    console.log(test);
  }
  phantom.exit();
});

