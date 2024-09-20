const Utils = {
    calculateNumber: function (type, a, b) {
        if (type === 'SUM') {
            return Math.round(a) + Math.round(b);
        }
        if (type === 'SUBTRACT') {
            return Math.round(a) - Math.round(b);
        }
        if (type === 'DIVIDE') {
            b = Math.round(b);
            if (b != 0) {
                return Math.round(a) / b;
            }
            return 'Error';
        }
    }
};

module.exports = {Utils};