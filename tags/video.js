function video(){
    /* Top most entry */

    document.getElementById("video").src = ''
    /* rumble: rumble */
    document.getElementById("video").class = ''
    /* rumble: 640 */
    document.getElementById("video").width = ''
    /* rumble: 360 */
    document.getElementById("video").height = ''

    document.getElementById("videoalert").innerHTML = '<script>!function(r,u,m,b,l,e){r._Rumble=b,r[b]||(r[b]=function(){(r[b]._=r[b]._||[]).push(arguments);if(r[b]._.length==1){l=u.createElement(m),e=u.getElementsByTagName(m)[0],l.async=1,l.src="https://rumble.com/embedJS/u3cqil"+(arguments[1].video?'.'+arguments[1].video:'')+"/?url="+encodeURIComponent(location.href)+"&args="+encodeURIComponent(JSON.stringify([].slice.apply(arguments))),e.parentNode.insertBefore(l,e)}})}(window, document, "script", "Rumble");</script><div id="rumble_v1rrnvq"></div><script>Rumble("play", {"video":"v1rrnvq","div":"rumble_v1rrnvq"});</script>'


}

