export const byName = {
    PLUS: '+',
    MINUS: '-',
    MULTIPLY: '*',
    DIVIDE: '/'
};
//in ES7 we should be able to replace this with Object.values()
//this is deliberately over-engineered
export const byValue = Object.keys(module.exports.byName)
    .reduce((prev, current) => {
        prev[module.exports.byName[current]] = current;
        return prev;
    }, {});