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

//Wrap any text without tags in p tags
function getTextNodesIn(node, includeWhitespaceNodes) {
    var textNodes = [], whitespace = /^\s*$/;

    function getTextNodes(node) {
        if (node.nodeType == 3) {
            if (includeWhitespaceNodes || !whitespace.test(node.nodeValue)) {
                textNodes.push(node);
            }
        } else {
            for (var i = 0, len = node.childNodes.length; i < len; ++i) {
                getTextNodes(node.childNodes[i]);
            }
        }
    }

    getTextNodes(node);
    return textNodes;
}

var textnodes = getTextNodesIn($("#demo")[0]);
for(var i=0; i < textnodes.length; i++){
    if($(textnodes[i]).parent().is("#demo")){
        $(textnodes[i]).wrap("<p>");
    }
}