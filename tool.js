(function(d){
    'use strict';
    var cursor = d.createElement('div');
    cursor.style.height = "20px";
    cursor.style.width = "20px";
    cursor.style.backgroundColor = "#000";
    cursor.style.position = 'absolute';
    d.getElementsByTagName('body').appendChild(cursor);
    d.addEventListener('mousemove',function(){
        console.log("Moving");
    })
})(document);