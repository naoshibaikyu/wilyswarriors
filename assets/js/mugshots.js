var directory = "./assets/images/mugshots/";


//Instances of where a character has an image attached to their name. Along with bolding the name.

//Cyborg Resistance Members

var names = {concrete:"Concrete",
	spike:"Spike",
	magma:"Magma",
	hornet:"Hornet",
	galaxy:"Galaxy",
	plug:"Plug",
	tornado:"Tornado",
	fake:"Fake",
	jewel:"Jewel",
	splash:"Splash",
	//Supporting Characters
	narrator:"Narrator",
	//Generic NPCs
	//Christmas Characters
	ghostpast:"GhostPast",
	ghostpresent:"GhostPresent",
	ghostfuture:"GhostFuture",
	pasthornet:"PastHornet",
	chill:"Chill",
};

var emotes = {original:"",
	happy:"Happy",
	annoyed:"Annoyed",
	angry:"Angry",
	shocked:"Shocked",
	sad:"Sad",
	damaged:"Damaged",
	relieved:"Relieved",
	pissed:"Pissed",
	glare:"Glare",
	aloof:"Aloof",
	giddy:"Giddy",
	scared:"Scared",
	nani:"Nani",
	snicker:"Snicker",
	owo:"OwO",
	sleep:"Sleep",
	lenny:"Lenny",
	hotdog:"Hotdog"
};

//TODO: make it work with brackets and spaces between the name and emote
//Look at all name/emote combinations
for (var nameKey in names)
{
	for (var emoteKey in emotes)
	{
		var str = "<p>" + names[nameKey] + emotes[emoteKey] + ":";
		var suffix = "";

		//Insert name suffix and prefix
		var prefix = names[nameKey];

		switch(nameKey)
		{
		//Cyborg Resistance Members
			case "hornet":
				suffix = " Man";
			case "magma":
				suffix = " Man";
			case "splash":
				suffix = " Man";
			case "galaxy":
				suffix = " Man";
			case "plug":
				suffix = " Man";
			case "tornado":
				suffix = " Man";
			case "jewel":
				suffix = " Woman";
			case "concrete":
				suffix = " Woman";
				break;
			case "fake":
				suffix = "tte";
				break;
			case "spike":
				prefix = "Concrete";
				suffix = " Man";
				break;
		//Supporting Characters
			case "narrator":
				suffix = "";
				break;
			case "drlight":
				prefix = "Dr. ";
				suffix = "Light";
				break;
		//Christmas Characters
			case "chill":
				suffix = " Man";
				break;
			case "ghostpast":
				prefix = "Ghost of Christmas Past";
				break;
			case "ghostpresent":
				prefix = "Ghost of Christmas Present";
				break;
			case "ghostfuture":
				prefix = "Ghost of Christmas Future";
				break;
			case "pasthornet":
				prefix = "Past Hornet";
				suffix = " Man";
				break;
		}

		var find = new RegExp(str, "gi");
		var imagePath = directory + nameKey + emoteKey + ".png"; 

		replace = "<test><img id=double src=" + imagePath + "> <p><b>" + prefix + suffix + ":</b></br></test>";
		
		//TODO: check and see if replace path exists, if not, bold name and continue, else...
		document.body.innerHTML = document.body.innerHTML.replace(find, replace);
		
	}

}

//Format
document.body.style.backgroundColor = "#101010";
document.body.style.color = "#C0C0C0";
document.body.style.fontSize = "medium";