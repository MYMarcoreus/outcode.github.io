function setCookie(ckey,cvalue, exdays=60){
    var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
    console.log( ckey+"="+cvalue+"; " + expires+"; " + "path=./");
    if ( document.cookie == null || document.cookie == "" )
        document.cookie = ckey   +"="+  encodeURIComponent(cvalue) +"; "
                        + expires+"; "
                        + "path=./";
    else
        document.cookie = ckey+"="+cvalue+"; " + expires+"; " + "path=./";
    console.log(document.cookie);
    }
function getCookie(ckey){
    var key = ckey + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(key)==0)
            return c.substring(key.length,c.length);
    }
    return "";
}