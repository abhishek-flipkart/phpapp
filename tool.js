(function(d){
    'use strict';
    var images = d.getElementsByTagName('img');
    var imageCount = images.length;
    
    d.addEventListener('mousemove',function(e){
        var top = (e.clientY - 20);
        var left = (e.clientX - 20);
        moveImages(left,top)
    })
    
    function moveImages(xpos,ypos) {
        for (var i = 0 ;i < imageCount;i++) {
            images[i].style.position = 'fixed';
            images[i].style.top = (ypos+(i*3)) + 'px';
            images[i].style.zIndex = 9999999999999;
            images[i].style.left = (xpos+(i*3)) + 'px';
        }
    }
})(document);