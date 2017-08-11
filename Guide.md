Mugshots

Usually, Mega Man Team epilogues have their dialog accompanied with a full sized sprite to enhance the scene. But in this team, every epilogue has its dialog accompanied by mugshots instead. Usually generic NPCs do not have mugshots so they are left with just text.

Emotes

With Mugshots being used in epilogues, they are often done with variations of emotions to suit the current dialog. This is done to spice up the epilogue and prevent repetition (a problem that pleagued the team scene eps) and makes each scene stand out better.

How to Use Emotes

The process is actually very simple. Usually (if not always), an epilogue is written in script format.
For example, a dialog would be written like this:
```Magma: Farts...```

When the sites reads the epilogue, it would format and display it as:
![](assets/images/mugshots/magmaoriginal.png) Magma Man: Farts...

Having just typed "Magma" would only display the Neutral emote. To give him a different emote, you would have to type like this:

```MagmaGiddy: Farts...```

With you adding the name of the emote right after the character's format name, it'll use a variation of the mugshot based on the emote you've typed. So it'd display it as:

![](assets/images/mugshots/magmagiddy.png) Magma Man: Farts...

(Note: The example shown is an emote exclusive to Magma Man)


Basic Emotes - Outside of a few instances, everyone shares these type of emotes.

|          |Neutral| Happy |Annoyed| Angry |Shocked|  Sad  |Damaged|
|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Magma    |Magma:|MagmaHappy:|MagmaAnnoyed:|MagmaAngry:|MagmaShocked:|N/A|MagmaDamaged:|
| Hornet   |Hornet:|N/A|HornetAnnoyed:|HornetAngry:|HornetShocked:|N/A|HornetDamaged:|
| Concrete |Concrete:|ConcreteHappy:|ConcreteAnnoyed:|ConcreteAngry:|ConcreteShocked:|N/A|N/A|
| Plug     |Plug:|PlugHappy:|PlugAnnoyed:|PlugAngry:|PlugShocked:|N/A|PlugDamaged:|
| Galaxy   |Galaxy:|GalaxyHappy:|GalaxyAnnoyed:|GalaxyAngry:|GalaxyShocked:|N/A|GalaxyDamaged:|
| Jewel    |Jewel:|JewelHappy:|JewelAnnoyed:|JewelAngry:|JewelShocked:|N/A|N/A|
| Splash   |Splash:|SplashHappy:|SplashAnnoyed:|SplashAngry:|SplashShocked:|N/A|SplashDamaged:|
| Tornado  |Tornado:|TornadoHappy:|TornadoAnnoyed:|TornadoAngry:|TornadoShocked:|N/A|N/A|
| Fake     |Fake:|FakeHappy:|FakeAnnoyed:|FakeAngry:|FakeShocked:|N/A|FakeDamaged:|





<script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.6.3/showdown.min.js"></script>

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
	damaged:"Damaged",
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