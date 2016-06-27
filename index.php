<!DOCTYPE html>
<html>
    <head>
        <title>A bookmark apoplication</title>
    </head>
    <body>
        <a href="javascript:void((function(){ var scriptId=document.getElementById('bagitscript'); console.log(scriptId); })()) ">Bookmark</a>
        <script>
            
        </script>
    </body>
</html>

<!--
javascript:(function(){

var scriptId=document.getElementById('bagitscript');
null!=scriptId&&scriptId.parentNode.removeChild(scriptId),bagIT=document.createElement('SCRIPT'),bagIT.type='text/javascript',bagIT.id='bagitscript',bagIT.src='http://indigobag.com/indigobag/lib/socialmarklet.js',document.getElementsByTagName('body')[0].appendChild(bagIT);


})();-->
