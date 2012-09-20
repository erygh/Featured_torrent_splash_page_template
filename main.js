      $(window).load(function() {    

        var theWindow        = $(window),
            $bg              = $("#background img"),
            aspectRatio      = $bg.width() / $bg.height();

        function resizeBg() {

                if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                    $bg
                        .removeClass()
                        .addClass('bgheight');
                } else {
                    $bg
                        .removeClass()
                        .addClass('bgwidth');
                }

        }

        theWindow.resize(function() {
                resizeBg();
        }).trigger("resize");

      });


//WHAT'S INSIDE MODAL @ Pushpa (BT)
$(document).ready(function () {
    $('#internal-dropdown').bind('click', function(e) {
        if ($('#inside-content').is(':visible')) {  
            $('html').unbind('click');
            $('#inside-content').hide();
            e.preventDefault();
        } else {          
            $('html').bind('click', function() {
                $('#inside-content').hide();
                })
                $('#inside-content').show();
            }
            e.stopPropagation();
            e.preventDefault();
        });
});