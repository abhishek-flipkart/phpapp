(function(doc){
    'use strict';
    
    var products = doc.getElementsByClassName('pu-details'),
        productCount = products.length;
    
    for(var i = 0; i < productCount; i++) {
        _traverseElement(products[i]);
    }
    
    function _traverseElement(elem) {
        console.log(elem);
        var children = elem.children,
            countChildren = elem.childElementCount;
        
        for(var i = 0; i < countChildren; i++) {
            var classes = children[i].classList,
                insertBeforeClass = 'pu-price';
            if(classes.contains(insertBeforeClass)) {
                elem.insertBefore(_createElement(), children[i]);
                console.log(classes);
            }
        }
    }
    
    function _createElement() {
        var element = doc.createElement('div');
        var text = doc.createTextNode('SpyIT');
        element.appendChild(text);
        element.style.height = "20px";
        element.style.width = "100px";
        element.style.backgroundColor = "#609";
        element.style.color = "#FFF";
        element.style.fontSize = "10px";
        element.style.fontWeight = "bold";
        return element;
    }
    
})(document);