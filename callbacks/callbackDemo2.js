
/**
 * This code snippet demostrates the similar Callback hell scenario
 * but using a differnt syntax and without any indentations or multi-level nesting 
 */

console.log('Demostraing callback hell without using regular syntax.');

function one(cb) {
    console.log('one');
    setTimeout(cb, 1000);
}
function two(cb) {
    console.log('two');
    setTimeout(cb, 1000);
}
function three() {
    console.log('three');
}

one(function() {
    two(three);
});
