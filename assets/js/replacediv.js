//Replace all p tags with div class=content tags
var pTags=document.getElementsByTagName('p');

for(i=0;i<pTags.length;)
{
    var p = pTags[i];  
    var div = document.createElement('div');
    div.className = "content";
    div.innerHTML = p.innerHTML;
    p.parentNode.replaceChild(div, p);
}
