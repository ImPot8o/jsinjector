function injectBookmarklet() {
    var bookmarkletCode = document.getElementById('bookmarkletCode').value;
    var win = window.open('about:blank');
    win.document.write('<html><head></head><body><script>' + bookmarkletCode + '</script></body></html>');
}

function presetVengeance() {
    var code = "javascript:(function () {var v = document.createElement('script');v.src = 'https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@v1.2.0/script.min.js';document.body.appendChild(v);}())";
    injectBookmarkletCode(code);
}

function presetAboutBlankOpener() {
    var code = "javascript:(function() {  var url = prompt('Enter the website URL:');  var urlObj = new window.URL(window.location.href);  if (url) {    var win = window.open('about:blank');    win.document.write('<html><head></head><body><iframe style=\"border:none; width:100%; height:100vh; margin:0;\" src=\"' + url + '\"></iframe></body></html>');  }})();";
    injectBookmarkletCode(code);
}

function presetCarAxleClient() {
    // Redirect to cac.pot8o.dev
    var win = window.open('about:blank');
    win.location.href = 'https://cac.pot8o.dev';
    // var code = "javascript:(function() {  var url = 'https://cac.pot8o.dev';  var urlObj = new window.URL(window.location.href);  if (url) {    var win = window.open('about:blank');    win.document.write('<html><head></head><body><iframe style=\"border:none; width:100%; height:100vh; margin:0;\" src=\"' + url + '\"></iframe></body></html>');  }})();";
    // injectBookmarkletCode(code);
    //fetch('car-axle-client.js')
    //    .then(response => response.text())
    //    .then(code => {
    //        var win = window.open('about:blank');
    //        win.document.write('<html><head></head><body><script>' + code + '</script></body></html>');
    //    })
    //    .catch(error => console.error('Failed to load car-axle-client.js:', error));
}

function injectBookmarkletCode(code) {
    var win = window.open('about:blank');
    win.document.write('<html><head></head><body><script>' + code + '</script></body></html>');
}
