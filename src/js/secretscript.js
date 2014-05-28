/**
 * Created by Jaisonbrooks on 5/28/2014.
 */
//Where the secret mission is executed!

chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
        'bounds': {
            'width': 770,
            'height': 650
        }
    });
});