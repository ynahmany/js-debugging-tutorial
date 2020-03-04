const LOOP_ITERATION_NUMBER = 1000000;
const DEBUG_STOP_POINT = 1337;

function debuggerLoop() {
    for(let i=0; i < LOOP_ITERATION_NUMBER; i++) {
        if (i === DEBUG_STOP_POINT) {
            console.log('Check out the image!')
            debugger;
        }
    }
}
function simpleLog() {
    console.log('hello user');
}

// simpleLog();
// debuggerLoop();
