//Replace all p tags with div class=content tags
var pTags=document.getElementsByTagName('test');

for(i=0;i<pTags.length;i++)
{
    var line = pTags[i];  
    var p = document.createElement('p');
    var div = document.createElement('div');
    div.className = "content";

    //Surround inner HTML with p tags
    p.innerHTML = line.innerHTML;
    div.innerHTML = p.outerHTML;
    line.parentNode.replaceChild(div, line);
}