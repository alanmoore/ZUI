$(document).ready(function() {


});

$('.zoom-out-btn').click(function() {
    var fakeZoomer = $('#zoom-animation-holder');

    if (fakeZoomer.hasClass('has-content')) {
        fakeZoomer.html('')
        fakeZoomer.removeClass('has-content');
        console.log('cleared out fakeZoomer');
        fakeZoomer.css({
          'top':      '0',
          'left':     '0',
          'width':    '0',
          'height':   '0',
          'opacity':  '0'
        })
    } 


    var targetDiv = $('.zoomable--zoomed-in:not(:has(".zoomable--zoomed-in"))');
    var targetContent = $('.content--zoomed-in:not(:has(".content--zoomed-in"))'); 
    var mask = targetDiv.siblings('.mask');
      
    targetDiv.removeClass('zoomable--zoomed-in').addClass('zoomable--zoomed-out');
    targetContent.removeClass('content--zoomed-in');
    targetContent.removeAttr('style');
    mask.removeClass('hidden');
    $(".zoomable, .pages").animate({ scrollTop: 0}, { duration: 'slow', easing: 'swing'});

    var checkFor = $('.zoomable--zoomed-in'); 
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
    var thisWidth = targetDiv.width();
    var thisHeight = targetDiv.height();
    var cssString = "translate(-"+thisX+"px,-"+thisY+"px)";
    console.log(cssString);

  /*
  
 targetDiv.removeClass('zoomable--zoomed-out').addClass('zoomable--zoomed-in');
  targetContent.addClass('content--zoomed-in');
  targetContent.css('transform', cssString);
  */
 
    var fakeZoomer = $('#zoom-animation-holder');

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
    var fakeTargetContent = fakeZoomer.children('.content');
    fakeTargetContent.addClass('content--zoomed-in');
    fakeTargetContent.css('transform', cssString);
   
    window.scrollTo(0, 0);

    zoomOut.css('opacity', '1');

    mask.addClass('hidden');

});

function resetAllScroll(){
    $("*").animate({ scrollTop: 0}, { duration: 'slow', easing: 'swing'});
}