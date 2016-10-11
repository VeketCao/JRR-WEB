/**
 * Created by Veket on 2015/9/28.
 */
require(['app'],function(app){
    var $mainCtx;
    var menus=[
        {id:'m1',url:'module/m1/main.js'},
        {id:'m2',url:'module/m2/main.js'}
    ];

    var initPage=function(){
        $mainCtx=$("#main");
        app.ModuleLoader({hash:'/r/:id(/*suffix)',menus:menus,mainCtx:$mainCtx});
    };

    initPage();
});