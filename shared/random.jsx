//Basically ripped from MDN
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomElement(array) {
    if (!array) {
        return;
    }
    return array[getRandomInt(0, array.length - 1)];
}