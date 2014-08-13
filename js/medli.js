/**
* Created with MedLi.
* User: saraygutierrez
* Date: 2014-06-07
* Time: 11:43 PM
* To change this template use Tools | Templates.
*/

$(document).ready(function(){
    $("#icon-social").click(function () {     
        $('#content-social').toggle("fast");
        $('#content-location').hide();
        $('#content-contact').hide();
        $('#content-phone').hide();
    });
    
    
    $("#icon-location").click(function () {     
        $('#content-location').toggle("fast");
        $('#content-contact').hide();
        $('#content-phone').hide();
        $('#content-social').hide();
    });
    $("#icon-contact").click(function () {     
        $('#content-contact').toggle("fast");
        $('#content-phone').hide();
        $('#content-social').hide();
        $('#content-location').hide();
    });
    $("#icon-phone").click(function () {     
        $('#content-phone').toggle("fast");
        $('#content-location').hide();
        $('#content-social').hide();
        $('#content-contact').hide();
    });
    
});