module.exports = function average(...args) {
    let count = 0;

    args.forEach( value => { count += value});

    return count / args.length;
};
