$(document).ready(function() {
    window.onload = function () {
    $('.preload').fadeOut(2000, function(){ $('.preload').remove(); } );
    };
});

/* the below is working but not removing the div element */

// $(function(){
//     $(".preload").fadeOut(3000, function() {
//         $(".container").fadeIn(0);
//     });
// });