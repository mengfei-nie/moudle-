#sea.js 相关文档资料
#http://seajs.github.io/seajs/docs/#docs
#http://yslove.net/seajs/
#http://cyj.me/why-seajs/zh/
# moudle模块化
sea.js+require.js

#sea.js
#id代表模块名 require代表依赖，不能自定义 exports暴露的模块
define(id,function (require,exports){
  exports.init = function (){
    #向外暴露模块init函数
  }
})

#sea.js基本配置
#当前路径都根据sea.js 所在的文件位置为根路径
        seajs.config({
          // 设置路径，方便跨目录调用
          paths: {
            'arale': 'common',
            'jquery': 'https://a.alipayobjects.com/jquery'
          },

          // 设置别名，方便调用
          alias: {
            'moudleC': 'common/common.js',
            'jquery': 'jquery/jquery/1.10.1/jquery'
          },

          // 文件基础路径
          // base:"../base"
        });
        // use 可以根据别名来引入 也可以根据直接根据js路径引入
        // paths 配置文件路径
        
#sea.js调用
seajs.use([模块id1,模块id2],function (module1,module2){
  #调用相关模块
})
