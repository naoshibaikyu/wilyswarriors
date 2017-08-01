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
		happy:"[Happy]",
		glare:"[Glare]",
		angry:"[Angry]",
		shocked:"[Shocked]",
		pissed:"[Pissed]",
		aloof:"[Aloof]",
	};


	//Look at all name/emote combinations
	for (var nameKey in names)
	{
		for (var emoteKey in emotes)
		{
			var str = names[nameKey] + emotes[emoteKey] + ":";

			var suffix = "";

			//Check suffix
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

			document.body.innerHTML = document.body.innerHTML.replace(/Hornet:/gi, '<img src=./assets/images/mugshots/hornetoriginal.png> <b>Hornet Man:</b>'); //Normal
			document.body.innerHTML = document.body.innerHTML.replace("/" + str + "/gi", "<img src=" + directory + nameKey + emoteKey + ".png> <b>" + names[nameKey] + suffix + ":</b>"); //Normal
			alert("/" + str + "/gi");
			alert("<img src=" + directory + nameKey + emoteKey + ".png> <b>" + names[nameKey] + suffix + ":</b>");
			break;
		}
	}


//Format
	document.body.style.backgroundColor = "#101010";
	document.body.style.color = "#C0C0C0";
	document.body.style.fontSize = "large";
	