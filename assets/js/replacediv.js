//Replace all p tags with span class=content tags
var pTags=document.getElementsByTagName('p');

for(i=0;i<pTags.length;i++)
{
    var line = pTags[i];  
    var p = document.createElement('p');
    var span = document.createElement('span');
    span.className = "content";

    //Surround inner HTML with p tags
    p.innerHTML = line.innerHTML;
    span.innerHTML = p.outerHTML;
    line.parentNode.replaceChild(span, line);
}