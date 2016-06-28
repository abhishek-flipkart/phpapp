(function(doc){
    'use strict';
    
    var products = doc.getElementsByClassName('product-unit'),
        productCount = products.length;
    for (var i = 0 ; i < productCount ; i++) {
        console.log("---------------------");
        console.log(products[i].childNodes);
    }
})(document);