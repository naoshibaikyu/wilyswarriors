    function show(id) {
        var number = id.replace('link', '');
        var blocks = document.querySelectorAll("[id^=content");
        for (var i = 0; i < blocks.length; i++) {
            blocks[i].style.display = 'none';
        }
        document.querySelector('#content' + number).style.display = 'block';
    }

    function init() {

        var divs = document.getElementsByTagName("div");
        for (var i = 0; i < divs.length; i++) {
            if (divs[i].className == "div") {
                divs[i].style.display = 'none';
            }
        }
        var a = document.getElementsByTagName("a");
        a.onclick = show;
    }

    window.onload = init;