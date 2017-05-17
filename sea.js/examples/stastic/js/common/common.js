define("moudleC",function(require,exports){
    // exports 代表暴露出去的对象
    var a = require("../moudleA.js");
    console.log(a)
    // requre 可以引入其它模块
    exports.log = function (msg) {
        console.log(msg)
    }
})