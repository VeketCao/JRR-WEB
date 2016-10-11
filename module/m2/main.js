/**
 * Created by Veket on 2015/9/28.
 */
define(['text!./main.html','css!./main.css','domReady!'],function(page){
    var $page;

    var initPage=function(){

    };

    return{
        show:function($c){
            $page=$(page);
            $page.appendTo($c);
            initPage();
        },
        hide:function(){
            $page.remove();
        }
    }
});