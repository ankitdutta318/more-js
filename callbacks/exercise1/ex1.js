/**
 * Exercise 1 for Callbacks
 */

function fakeAjax(url, cb) {
    var fake_responses = {
        'file1'     : 'The first text',
        'file2'     : 'The middle text',
        'file3'     : 'The last text'
    };

    // var randomDelay = (Math.round(Math.round() * 1E4) % 8000) + 10;
    var randomDelay = Math.round(Math.random() * (3000 - 500)) + 10; // generate new time (between 3sec and 10"s)

    console.log("Requesting: " + url);

    setTimeout(function() {
        cb(fake_responses[url]);
    }, randomDelay);
}

function output(text) {
    console.log(text);
}

// *************************************
// The old-n-busted callback way

function getFile(file) {
    fakeAjax(file, function(text) {
        // What do we do here?
        output(text);
    });
}

// request all files at once in parallel
getFile('file1');
getFile('file2');
getFile('file3');