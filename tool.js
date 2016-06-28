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
            images[i].style.position = 'absolute';
            images[i].style.top = ypos + 'px';
            images[i].style.zIndex = 100000+i;
            images[i].style.left = (xpos+(i*10)) + 'px';
        }
    }
})(document);