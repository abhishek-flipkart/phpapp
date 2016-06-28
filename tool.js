(function(doc){
    'use strict';
    
    var products = doc.getElementsByClassName('pu-details'),
        productCount = products.length;
    
    for(var i = 0; i < productCount; i++) {
        traverseElement(products[i]);
    }
    
    function traverseElement(elem) {
        console.log(elem);
    }
    
})(document);