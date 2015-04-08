/**
 * Created by kenneth on 4/5/15.
 */
$(document).ready(function() {
    $('.jqueryOptions').hide();
    $('div#homepage').slideDown();

    $('.clickme').click(function () {
        //$('.jqueryOptions').removeClass('current-opt');
        $('.jqueryOptions').hide();
        var myid = this.id;
        $("div"+"#"+myid).slideToggle();
        //$("." + $(this).val()).addClass('current-opt');
    });

    $(".toggle_title").click(function() {
        $(this).toggleClass('toggle_active');
        $(this).siblings('.toggle_content').slideToggle("fast");
    });
});
$(function() {

});