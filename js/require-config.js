/**
 * Created by Veket on 2016/10/11.
 */
var CONFIG={
    REQUIRE:{
        'path':{
            'jquery':'lib/jquery/jquery.min',
            'text':'lib/require/text.min',
            'css':'lib/require/css.min',
            'domReady':'lib/require/domReady.min',
            'router':'lib/router/kendo.router.min',
            'app':'js/app-util'
        },
        'shim':{
            'jquery':{'exports':'$'},
        }
    }
};

require.config(CONFIG.REQUIRE);