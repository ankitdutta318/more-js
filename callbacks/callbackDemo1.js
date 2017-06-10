/**
 * This an example of a simple callback function
 * Has three callbacks each of which is called after 1 sec
 * Demonstrating callback hell
 * Callback hell is not only about indentation and nesting
 */

console.log('demostrating callback hell using regular sytax');
setTimeout(function() {
    console.log('one');
    setTimeout(function() {
        console.log('two');
        setTimeout(function() {
            console.log('three');
        }, 1000);
    }, 1000);
}, 1000);

