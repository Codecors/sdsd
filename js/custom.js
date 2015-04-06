/**
 * Created by kenneth on 4/5/15.
 */
$(document).ready(function() {
    $("#howitworks").click(function(e) {
        //  First remove class "active" from currently active tab
     //   $("#nav ul li").removeClass('active');

        //  Now add class "active" to the selected/clicked tab
    //    $(this).addClass("active");

        //  Hide all tab content
        $(".page-content").hide();

        //  Here we get the href value of the selected tab
        var selected_page = $(this).find("a").attr("href");

        //  Show the selected tab content
        $(selected_page).fadeIn();

        //  At the end, we add return false so that the click on the link is not executed
        return false;
        e.preventDefault();
    });

    $(".toggle_title").click(function() {
        $(this).toggleClass('toggle_active');
        $(this).siblings('.toggle_content').slideToggle("fast");
    });
});
