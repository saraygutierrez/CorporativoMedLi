/*
 Programmer: Lukasz Czerwinski
 CodeCanyon: http://codecanyon.net/user/Lukasz_Czerwinski

 If this script you like, please put a comment on codecanyon.

 */

$(document).ready(function () {
    //Default Usage
    $("#first.menu ul li").glyphMenu();
    //Custom settings
    $("#second.menu ul li").glyphMenu({
        method: "click",
        autohide: 0
    });
}); 
