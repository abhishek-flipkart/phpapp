(function(doc){
    'use strict';
    
    var products = doc.getElementsByClassName('pu-details'),
        productCount = products.length;
    
    for(var i = 0; i < productCount; i++) {
        traverseElement(products[i]);
    }
    
    function traverseElement(elem) {
        console.log(elem);
        var children = elem.children,
            countChildren = elem.childElementCount;
        
        for(var i = 0; i < countChildren; i++) {
            var classes = children[i].classList,
                insertBeforeClass = 'pu-price';
            console.log(typeof classes);
            console.log(classes);
            console.log(classes.indexOf(insertBeforeClass));
        }
    }
    
})(document);