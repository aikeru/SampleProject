export var logLevels = {
    NONE: "NONE",
    DEBUG: "DEBUG"
};

let logLevel = logLevels.DEBUG;

export function setLogLevel(newLevel) {
    logLevel = newLevel;
}

export function debug(debugText) {
    console.log(debugText);
}