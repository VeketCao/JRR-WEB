/**
 * Created by Veket on 2015/9/28.
 */
var __initRoute=function(app){
    app.hash=function(v){
        if(!v)return window.location.hash;
        window.location.hash=v;
    };
    /**
     * @param ops:
     * hash：必填，要监听的hash模式：'/:id(/*suffix)';
     * menus：必填，包含模块url的菜单项数组，item必须包含id和url属性;
     * @constructor
     */
    app.ModuleLoader=function(ops){

        var getUrl=function(id,menus){
            if(!id||!menus)return;
            var v= '';
            for(var i=0;i<menus.length;i++){
                if(id==menus[i].id) {
                    v=menus[i].url;
                    break;
                }
            }
            return v;
        };

        var r1=new kendo.Router({hashBang:true});

        r1.route(ops.hash,function(id,suffix){
            var url= getUrl(id,ops.menus);
            if(url=='')return;
            require([url],function(exports){
                ops.mainCtx.empty();
                exports.show(ops.mainCtx);
                if(ops.callback)ops.callback(id);
            });
        });

        r1.start();
    }

};

define(['jquery','router'],function(){
    var app={};

    __initRoute(app);

    return app;
});