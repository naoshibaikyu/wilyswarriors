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
	border-right-width: 5px;
	border-right-style: solid;
	border-right-color: #962300;
	padding-right: 10px;
	position: absolute;
	top:5%;
	right: 75%;
	width: 600px;
	margin-right: 260px
}
#wrapper {
	padding: 2px;
	margin: 0 auto;
}
#border {
	background-color: #101010;
	border: 1px solid #606060;
	-webkit-border-radius: 1px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	margin: 0 auto;
	padding: 2px;
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
		    new Runtime("MMFCanvas", "CRBIOS/assets/CRBIOS.cch");
	    }
        // RUNTIMESTARTEND
    </script>
   </body>
</html>

<script src="assets/js/scrollpage.js"></script>

<body>
    <div class="col-md-3">
	
	<div class="div" id="content0">
		Click on a character portrait to view their bio!
    </div>
	
        <div class="div" id="content1">
        Concrete
        </div>
        <div class="div" id="content2">
        Jewel
        </div>
        <div class="div" id="content3">
        Hornet  
        </div>
        <div class="div" id="content4">
        Tornado
        </div>
    </div>
</body>