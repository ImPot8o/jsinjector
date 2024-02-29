function injectBookmarklet() {
    var bookmarkletCode = document.getElementById('bookmarkletCode').value;
    var script = document.createElement('script');
    script.innerHTML = bookmarkletCode;
    document.body.appendChild(script);
}

function presetVengeance() {
    var code = "javascript:(function () {var v = document.createElement('script');v.src = 'https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@v1.2.0/script.min.js';document.body.appendChild(v);}())";
    injectBookmarkletCode(code);
}

function presetAboutBlankOpener() {
    var code = "javascript:(function() {  var url = prompt('Enter the website URL:');  var urlObj = new window.URL(window.location.href);  if (url) {    var win;    if (win) {      win.focus();    } else {      win = window.open();      win.document.body.style.margin = '0';      win.document.body.style.height = '100vh';      var iframe = win.document.createElement('iframe');      iframe.style.border = 'none';      iframe.style.width = '100%';      iframe.style.height = '100%';      iframe.style.margin = '0';      iframe.src = url;      win.document.body.appendChild(iframe);    }  }})();";
    injectBookmarkletCode(code);
}

function presetCarAxleClient() {
    fetch('car-axle-client.js')
        .then(response => response.text())
        .then(code => injectBookmarkletCode(code))
        .catch(error => console.error('Failed to load car-axle-client.js:', error));
}

function injectBookmarkletCode(code) {
    var script = document.createElement('script');
    script.innerHTML = code;
    document.body.appendChild(script);
}
