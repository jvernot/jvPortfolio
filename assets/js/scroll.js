$(document).ready(function(){
    console.log("ready");
    

    $("#aboutmeBtn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aboutmeStart").offset().top
        }, 2000);
    });

    $("#projectsBtn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#projectsStart").offset().top
        }, 2000);
    });

    $("#inspirationsBtn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#inspirationsStart").offset().top
        }, 2000);
    });

    $("#contactmeBtn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contactmeStart").offset().top
        }, 2000);
    });
});