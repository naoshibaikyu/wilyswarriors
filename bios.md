<html lang="en">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style type="text/css">
html {height: 100%;}
body {
	background-repeat: no-repeat;
	background-attachment: fixed;
	height: 100%;
	min-height: 100%;
	margin: 0;
}

}
#bloctxt {
	border-left-width: 5px;
	border-left-style: solid;
	border-left-color: #962300;
	padding-left: 10px;
	position: absolute;
	top:5%;
	left: 50%;
	width: 600px;
	margin-left: -260px
}
#wrapper {
	padding: 10px;
	margin: 0 auto;
}
#border {
	background-color: #99C;
	border: 1px solid #B90000;
	-webkit-border-radius: 7px;
	-moz-border-radius: 7px;
	border-radius: 7px;
	margin: 0 auto;
	padding: 5px;
	width:256px;
	height:224px;
}

#canvas {
	width:256px; 
	height:224px;
}

#MMFCanvas {
	-webkit-box-shadow:  0px 0px 4px 4px rgba(0, 0, 0, 0.25); 
    box-shadow:  0px 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>

	<script>
	   	// Detection of old browsers that do not support the canvas element
		// Falls back to a default page
	    if (!document.createElement("canvas").getContext)
	    {
			window.open("http://www.clickteam.com/html5-fallback", "_self");
		}
	</script>
	
  	<!-- EXTRASOURCES -->
	<!-- Loads the Javascript code...-->
  	<script src="CRBIOS/src/Runtime.js"></script>

</head>

<!-- This is where we create the Canvas element that will contain the application...-->
<body>
    <div id="wrapper">
	    <div id="border">
		    <div id="canvas">
			    <canvas id="MMFCanvas" width="256" height="224">
				    <p>Your browser does not support Canvas.</p>
			    </canvas>   
		    </div>
	    </div>
    </div>  
    <script>
        // RUNTIMESTART
        // This is where the HTML5 runtime is actually started
	    window.addEventListener("load", windowLoaded, false);
	    function windowLoaded()
	    {
		    // Calls the runtime
		    // First parameter : name of the canvas element
		    // Second parameter : path to the cch file. Images and sounds must lay beside this file
		    new Runtime("MMFCanvas", "CRBIOS/cyborgresistence/CRBIOS.cch");
	    }
        // RUNTIMESTARTEND
    </script>
   </body>
</html>

<html>
    <head>
        <style type='text/css'>
            span {
                text-decoration:underline;
                color:blue;
                cursor:pointer;
            }
        </style>
        <script>
            // show the given page, hide the rest
            function show(elementID) {
                // try to find the requested page and alert if it's not found
                var ele = document.getElementById(elementID);
                if (!ele) {
                    alert("no such element");
                    return;
                }

                // get all pages, loop through them and hide them
                var pages = document.getElementsByClassName('page');
                for(var i = 0; i < pages.length; i++) {
                    pages[i].style.display = 'none';
                }

                // then show the requested page
                ele.style.display = 'block';
            }
        </script>
    </head>
    <body>
      <p>
        Show page 
            <span onclick="show('Page1');">1</span>, 
            <span onclick="show('Page2');">2</span>, 
            <span onclick="show('Page3');">3</span>.
        </p>

    <div id="Page1" class="page" style="">
        Content of page 1
    </div>
    <div id="concrete" class="page" style="display:none">
        Content of page 2
    </div>
    <div id="hornet" class="page" style="display:none">
        Content of page 3
    </div>

    </body>
</html>