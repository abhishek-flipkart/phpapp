(function(d){
    'use strict';
    var cursor = d.createElement('div');
    cursor.style.height = "20px";
    cursor.style.width = "20px";
    cursor.style.backgroundColor = "#000";
    cursor.style.position = 'absolute';
    d.getElementsByTagName('body')[0].appendChild(cursor);
    d.addEventListener('mousemove',function(e){
        cursor.style.top = (e.clientY - 20) + 'px';
        cursor.style.left = (e.clientY - 20) + 'px';
        console.log("Moving");
    })
})(document);