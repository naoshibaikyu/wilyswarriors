|          |Neutral| Happy |Annoyed| Angry |Shocked|
|----------|:-----:|:-----:|:-----:|:-----:|:-----:|
| Magma    |Magma:|MagmaHappy:|MagmaAnnoyed:|MagmaAngry:|MagmaShocked:|
| Hornet   |Hornet:|N/A|HornetAnnoyed:|HornetAngry:|HornetShocked:|
| Concrete |Concrete:|ConcreteHappy:|ConcreteAnnoyed:|ConcreteAngry:|ConcreteShocked:|
| Plug     |Plug:|PlugHappy:|PlugAnnoyed:|PlugAngry:|PlugShocked:|
| Galaxy   |Galaxy:|GalaxyHappy:|GalaxyAnnoyed:|GalaxyAngry:|GalaxyShocked:|
| Jewel    |Jewel:|JewelHappy:|JewelAnnoyed:|JewelAngry:|JewelShocked:|
| Splash   |Splash:|SplashHappy:|SplashAnnoyed:|SplashAngry:|SplashShocked:|
| Tornado  |Tornado:|TornadoHappy:|TornadoAnnoyed:|TornadoAngry:|TornadoShocked:|
| Fakette  |Fake:|FakeHappy:|FakeAnnoyed:|FakeAngry:|FakeShocked:|



<script src="assets/js/replacediv.js"></script>

<script>
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
	annoyed:"Annoyed",
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

		var find = new RegExp(str, "gi");
		var imagePath = directory + nameKey + emoteKey + ".png"; 

		replace = "<img src=" + imagePath + ">";

		//TODO: check and see if replace path exists, if not, bold name and continue, else...
		document.body.innerHTML = document.body.innerHTML.replace(find, replace);
	}
}</script>