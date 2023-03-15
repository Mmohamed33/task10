$(document).ready(function () {
    // $("h1").hide(function(){

    // });
    // $("p").hide(function(){

    // });
    //  $("img").hide(function(){

    // });
    $("#btn2").click(function(){
        $(".section2").show(); 
   });
   $("#btn2").click(function(){

    $(".section1").hide();
    $(".section3").hide();
    $(".section4").hide();
   });

   $("#btn1").click(function(){
    $(".section1").show(); 
    });
    $("#btn1").click(function(){
    $(".section2").hide();
    $(".section3").hide();
    $(".section4").hide();
    });

    $("#btn3").click(function(){
        $(".section3").show(); 
   });
   $("#btn3").click(function(){
    $(".section1").hide();
    $(".section2").hide();
    $(".section4").hide();
   });

   $("#btn4").click(function(){
    $(".section4").show(); 
    });
    $("#btn4").click(function(){
    $(".section1").hide();
    $(".section2").hide();
    $(".section3").hide();
    });
});






// $( "#btn" ) .click(function() {
//     $("h1 , p ") .replaceWith("IEEE GLOBAL VISION");
// });
// $("#btn3").click(function(){

//     $("p").hide(1000);
// })
// $(document).ready(function () {
//     $("input").click(function(){
//         $("#btn2").prop("IEEE GLOBAL VIVION", "prop click");
//     });
    
// });
// $(function () {


//     $('button').click(function () {
//         window.console.log($(this).data('scroll'));

//     });
// });