var oldReg = RegExp;

function newReg(exp, flag){
    // before
    var index = 1, tmp;
    var regex = /\(\?<(\w+)>[^\)]+\)/g;
    this.res = [];
    
    while ((tmp = regex.exec(exp)) !== null) {
        this.res[index++] = tmp[1];
    }
    var expression = exp.replace(/\?<\w+>/g, '');
    this.pattern = new oldReg(expression, flag);
    this.exec = function(str) {
        var tmp = this.pattern.exec(str);
        if (!tmp)
            return tmp;
        for (var i = 1; i < tmp.length; i++) {
            tmp[this.res[i]] = tmp[i];
        }
        // delete unnamed capture
        tmp.splice(1, tmp.length);
        return tmp;
    }
}

RegExp = newReg;
