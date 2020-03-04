const LOOP_ITERATION_NUMBER = 100000;
const DEBUG_STOP_POINT = 1337;

function debuggerLoop() {
    for(let i=0; i < LOOP_ITERATION_NUMBER; i++) {
        if (i === DEBUG_STOP_POINT) {
            console.log('Check out the image!')
            debugger;
        }
    }
}
function timeLoop() {
    console.time('loop');
    for(let i=0; i < LOOP_ITERATION_NUMBER; i++) {
    }
    console.timeEnd('loop');
}
function grouping() {
    console.group('grouping');
    timeLoop();
    const s = 'new string';
    const i = 1337;
    console.log('new string and i are ', s, i);
    let str = '';
    console.log('str has been declared', str);
    str = 'new string for str!!!';
    console.log('str has been modified', str);
    console.groupEnd('grouping');
}
function _clear() {
    timeLoop();
    alert('You are about to clear the console, please approve');
    console.clear();
    grouping();   
}
function assert(number) {
    // TODO: add input and variable for user to enter.
    console.assert(DEBUG_STOP_POINT === parseInt(number, 10), 'The number you passed is not a valid one');
    console.log('if the assertion successed, you will not see any message');
}
function table() {
    console.table(['yossi', 'boged']);
}