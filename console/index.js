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
function SithLord(name, originalName) {
    this.name = name;
    this.originalName = originalName;
}
const vader = new SithLord('Darth Vader', 'Anakin Skywalker');
function table() {
    console.table(['Darth Vader', 'Darth Bane', 'Freedon Nadd', 'Ulic Qel-Droma', 'Marka Ragnos']);
    console.log('const vader = new SithLord()');
    console.table(vader);
}
function count() {
    console.count();
    return 'I love JS!';
}
function severities() {
    console.group('severities');
    console.info('just an information');
    console.warn('this is your final warning');
    console.error('some error - oooo - real bad one');
    console.groupEnd('severities');
}
function objectView() {
    console.group('Sith');
    console.log(vader);
    console.dir(vader);
    console.groupEnd('Sith');
    console.group('location');
    console.log(document.location);
    console.dir(document.location);
    console.groupEnd('location');
}

function trace() {
    function son() {
        console.trace();
    }
    son();
}