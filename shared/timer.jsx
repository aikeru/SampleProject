import {log, logLevels} from './logger.jsx'

let start = process.hrtime();
//Pretty much ripped from StackOverflow
export function startTimer() {
    start = process.hrtime();
}
export function stopTimer(note) {
    let precision = 3,
        elapsed = process.hrtime(start)[1] / 1000000;
    log(logLevels.INFO, `${process.hrtime(start)[0]}s, ${elapsed.toFixed(precision)}ms - ${note}`);
    return elapsed;
}