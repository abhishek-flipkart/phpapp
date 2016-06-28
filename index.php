<!DOCTYPE html>
<html>
    <head>
        <title>A bookmark apoplication</title>
    </head>
    <body>
        <a href="javascript:void((function(d){var spyerID = d.getElementById('spyer');console.log(spyerID);})(document))">Bookmark</a>
    </body>
</html>

<!--
javascript:(function(){var scriptId=document.getElementById('bagitscript');null!=scriptId&&scriptId.parentNode.removeChild(scriptId),bagIT=document.createElement('SCRIPT'),bagIT.type='text/javascript',bagIT.id='bagitscript',bagIT.src='http://indigobag.com/indigobag/lib/socialmarklet.js',document.getElementsByTagName('body')[0].appendChild(bagIT);})();


javascript:void((function(){var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8'),e.setAttribute('src','http://stuffdot.com/components/com_stuffdotbin/js/socialmarklet.js'),document.body.appendChild(e)})(document));

-->