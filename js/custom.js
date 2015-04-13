/**
 * Created by kenneth on 4/5/15.
 */
$(document).ready(function() {
    $('.jqueryOptions').hide();
    $('div#homepage').show();

    $('.clickme').click(function() {
        //$('.jqueryOptions').removeClass('current-opt');
        $('.jqueryOptions').hide();
        var pageurl = $(this).attr("href");
        $("div"+pageurl).slideToggle();
        $("#header").removeClass('alt');
        $("#header").addClass('skel-layers-fixed');
        //$("." + $(this).val()).addClass('current-opt');
        if (pageurl != "#homepage"){
            $('body').removeClass('landing');
        }
        else {
            $('body').addClass('landing');
        }
        return false;

    });

    $(".toggle_title").click(function() {
        $(this).toggleClass('toggle_active');
        $(this).siblings('.toggle_content').slideToggle("fast");
    });
});
