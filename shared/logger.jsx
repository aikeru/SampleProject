//Really could switch this out for something like winston
export var logLevels = {
    NONE: "NONE",
    DEBUG: "DEBUG",
    INFO: "INFO"
};

let currentLogLevel = logLevels.DEBUG;

export function setLogLevel(newLevel) {
    currentLogLevel = newLevel;
}

export function log(logLevel, ...message) {
    if(currentLogLevel === logLevels.NONE) { return; }
    if(currentLogLevel === logLevels.INFO) {
        if(logLevel === logLevels.DEBUG) { return; }
    }
    console.log.apply(console, [logLevel].concat(message));
}
