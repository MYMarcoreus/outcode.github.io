function setCookie(ckey,cvalue, exdays=60){
    var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();

    cookie_str =
        ckey +"="+  encodeURIComponent(cvalue) +"; "+
        expires+"; " +
        "path=./"
    document.cookie = cookie_str
    console.log(document.cookie);
}


function getCookie(ckey){
    var key = ckey + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(key)==0)
            return decodeURIComponent(c.substring(key.length,c.length));
    }
    return "";
}