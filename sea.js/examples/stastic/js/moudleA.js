define("moudleA",function(require,exports){
    // exports 代表暴露出去的对象
   
    // requre 可以引入其它模块
    require("./a.js");
    $.b()
    exports.log = function (msg) {
        console.log(msg)
    }
})