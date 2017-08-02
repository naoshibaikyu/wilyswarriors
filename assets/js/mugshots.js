var directory = "./assets/images/mugshots/";

//Instances of where a character has an image attached to their name. Along with bolding the name.

//Cyborg Resistance Members

	var names = {concrete:"Concrete",
		magma:"Magma",
		hornet:"Hornet",
		galaxy:"Galaxy",
		plug:"Plug",
		tornado:"Tornado",
		fake:"Fake",
		jewel:"Jewel",
		splash:"Splash",
		narrator:"Narrator"
	};

	var emotes = {original:"",
		happy:"Happy",
		annoy:"Annoyed",
		angry:"Angry",
		shocked:"Shocked",
		pissed:"Pissed",
		glare:"Glare",
		aloof:"Aloof",
		giddy:"Giddy",
		scared:"Scared",
		nani:"Nani",
		snicker:"Snicker",
	};

	//TODO: make it work with brackets and spaces between the name and emote
	//Look at all name/emote combinations
	for (var nameKey in names)
	{
		for (var emoteKey in emotes)
		{
			var str = names[nameKey] + emotes[emoteKey] + ":";
			var suffix = "";

			//Insert name suffix
			switch(nameKey)
			{
				case "jewel":
					suffix = " Woman";
					break;
				case "fake":
					suffix = "tte";
					break;
				case "narrator":
					suffix = "";
					break;
				default:
					suffix = " Man";
			}

			var find = new RegExp(str, "gi");
			var imagePath = directory + nameKey + emoteKey + ".png"; 

			// this shit no workie
			function checkImage(imageSrc, good, bad) {
			    var img = new Image();
			    img.onload = good; 
			    img.onerror = bad;
			    img.src = imageSrc;
			}

			checkImage(imagePath, 
				function()
				{  
					var replace = "<img src=" + imagePath + "> <b>" + names[nameKey] + suffix + ":</b>";
				}, 
				function()
				{ 
					var replace = "<b>" + names[nameKey] + suffix + ":</b>";
				});

			replace = "<img src=" + imagePath + "> <b>" + names[nameKey] + suffix + ":</b>";
			// end of no workie code
			
			//TODO: check and see if replace path exists, if not, bold name and continue, else...
			document.body.innerHTML = document.body.innerHTML.replace(find, replace);
		}
	}

//Format
	document.body.style.backgroundColor = "#101010";
	document.body.style.color = "#C0C0C0";
	document.body.style.fontSize = "large";
	