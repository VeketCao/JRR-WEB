/**
 * Created by Veket on 2015/9/28.
 */
define(['text!./main.html','css!./main.css','domReady!'],function(page){
    var $page;

    var getClick=function(url){
        $.ajax(url).done(function(res){
            $("#results",$page).text(JSON.stringify(res));
        }).fail(function(err){
            $("#results",$page).text(err.responseText);
        });
    };

    var postClick=function(url){
        var param=$.trim($("#param",$page).val());
        try{
            var item={};
            if(param!=""){
                item =JSON.parse(param.toString());
            }
            $.ajax(url, {data:item,method:'POST'}).done(function(res){
                $("#results",$page).text(JSON.stringify(res));
            }).fail(function(err){
                $("#results",$page).text(err.responseText);
            });
        }catch(e){
            alert(e);
        }
    };

    var putClick=function(url){
        var param=$.trim($("#param",$page).val());
        try{
            var item={};
            if(param!=""){
                item =JSON.parse(param.toString());
            }
            $.ajax(url, {data:item,method:'PUT'}).done(function(res){
                $("#results",$page).text(JSON.stringify(res));
            }).fail(function(err){
                $("#results",$page).text(err.responseText);
            });
        }catch(e){
            alert(e);
        }
    };

    var deleteClick=function(url){
        var param=$.trim($("#param",$page).val());
        try{
            var item={};
            if(param!=""){
                item =JSON.parse(param.toString());
            }
            $.ajax(url, {data:item,method:'DELETE'}).done(function(res){
                $("#results",$page).text(JSON.stringify(res));
            }).fail(function(err){
                $("#results",$page).text(err.responseText);
            });
        }catch(e){
            alert(e);
        }
    };

    var btnClick=function(e){
        var url = $.trim($("#api-url",$page).val());
        if(url=="") return;
        switch(e.currentTarget.id){
            case 'get-btn':
                getClick(url);
                break;
            case 'post-btn':
                postClick(url);
                break;
            case 'put-btn':
                putClick(url);
                break;
            case 'delete-btn':
                deleteClick(url);
                break;
        }
    };

    var bindEvent=function(){
        $(".btn",$page).bind('click',btnClick);
    };

    var initPage=function(){
        bindEvent();
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