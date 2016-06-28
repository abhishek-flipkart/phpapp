(function(doc){
    'use strict';
    
    var products = doc.getElementsByClassName('product-unit'),
        productCount = products.length;
    for (var i = 0 ; i < productCount ; i++) {
        console.log("---------------------");
        var childrenCount = products[i].childElementCount;
        //console.log(products[i].children);
        console.log(childrenCount);
    }
})(document);