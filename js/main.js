$(document).ready(function() {
    $('.zoomable--zoomed-out .content').addClass('content--zoomed-out');

});

$('.zoom-out-btn').click(function() {
    console.log('zoom out clicked');

    var targetDiv = $('.zoomable--zoomed-in:not(:has(".zoomable--zoomed-in"))');
    var targetContent = $('.content--zoomed-in:not(:has(".zoomable--zoomed-in"))');
    var checkFor = $('.zoomable--zoomed-in'); 

    var mask = targetDiv.siblings('.mask');
    mask.removeClass('hidden');
    targetDiv.removeClass('zoomable--zoomed-in').addClass('zoomable--zoomed-out');
    targetContent.removeClass('content--zoomed-in').addClass('content--zoomed-out');
    
    if (checkFor.length < 1) {
        $(this).css('opacity', '0');
    }
});

$('.mask').click(function() {
    console.log('mask clicked');
  
    var targetDiv = $(this).prev('.zoomable--zoomed-out');
    var targetContent = targetDiv.children('.content');
    var zoomOut = $('.zoom-out-btn');
    var mask = $(this).siblings('.mask');
    var targetOffset = targetDiv.offset();
    var thisX = targetOffset.left;
    var thisY = targetOffset.top;
    var cssString = "translate(-"+thisX+"px,-"+thisY+"px)";
    console.log(cssString);
 
    /*
    var thisWidth = targetDiv.width();
    var thisHeight = targetDiv.height();
    
    var fakeZoomer = $('#zoom-animation-holder');
    */

    targetContent.removeClass('content--zoomed-out').addClass('content--zoomed-in');
    targetDiv.removeClass('zoomable--zoomed-out').addClass('zoomable--zoomed-in');
    //targetDiv.css('transform', cssString);
    /*
    fakeZoomer.css({
        'position': 'absolute',
        'left':     thisX,
        'top':      thisY,
        'width':    thisWidth,
        'height':   thisHeight,
        'opacity':  '1'
    });
  
    if (fakeZoomer.hasClass('has-content')) {
        fakeZoomer.html('')
        fakeZoomer.removeClass('has-content');
        console.log('cleared out fakeZoomer');
    } 
    
    targetDiv.clone().appendTo(fakeZoomer);
    

    fakeZoomer.addClass('has-content');
    console.log('cloned content');
    fakeZoomer.removeClass('zoomable--zoomed-out').addClass('zoomable--zoomed-in');
    var fakeTargetContent = fakeZoomer.children('.zoomable');
    fakeTargetContent.addClass('content--zoomed-in');
    fakeTargetContent.css('transform', cssString);
    */
    window.scrollTo(0, 0);
    zoomOut.css('opacity', '1');
    mask.addClass('hidden');

});

function resetAllScroll(){
    $("*").animate({ scrollTop: 0}, { duration: 'slow', easing: 'swing'});
}