(function(d){
    'use strict';
    var images = d.getElementsByTagName('img');
    var imageCount = images.length;
    
    d.addEventListener('mousemove',function(e){
        var top = (e.clientY - 20) + 'px';
        var left = (e.clientX - 20) + 'px';
        moveImages(left,top)
    })
    
    function moveImages(xpos,ypos) {
        for (var i = 0 ;i < imageCount;i++) {
            images[i].style.position = 'fixed';
            images[i].style.top = ypos;
            images[i].style.left = xpos;
        }
    }
})(document);