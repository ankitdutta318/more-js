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
        handleResponse(file, text);
    });
}

function handleResponse(filename, contents) {
    if(!(filename in responses)) {
        responses[filename] = contents;
    }

    var filenames = ['file1', 'file2', 'file3'];        // Array that holds the order in which the files are to be rendered
    
    // Loop through all the responses in the list until every response is rendered
    for(i=0; i<filenames.length; ++i) {
        // If the file is in responses, i.e., the file has be returned as a response
        if(filenames[i] in responses) {
            if(typeof responses[filenames[i]] === 'string') {
                output(responses[filenames[i]]);
                responses[filenames[i]] = false;
            }
        } else {
            return;
        }
    }

    console.log('Complete');
}

var responses = {};     // Global object that stores all the responses as and when they come

// request all files at once in parallel
getFile('file1');
getFile('file2');
getFile('file3');