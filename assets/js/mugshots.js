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
		glare:"Glare",
		angry:"Angry",
		shocked:"Shocked",
		pissed:"Pissed",
		aloof:"Aloof",
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
			
			var replace = "<img src=" + directory + nameKey + emoteKey + ".png> <b>" + names[nameKey] + suffix + ":</b>"
			
			//TODO: check and see if replace path exists, if not, bold name and continue, else...
			document.body.innerHTML = document.body.innerHTML.replace(find, replace);
		}
	}

//Format
	document.body.style.backgroundColor = "#101010";
	document.body.style.color = "#C0C0C0";
	document.body.style.fontSize = "large";
	