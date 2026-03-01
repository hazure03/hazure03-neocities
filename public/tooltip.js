(function () {

var a = document.getElementsByTagName('*'),
    tip, text,
    base = document.createElement('tooltip'); //Defining all objects

for (var x=0;x < a.length;x++) { //I'm using "for" loop to get all "a" elements with attribute "tooltip".
     a[x].onmouseover = function () {
         text = this.getAttribute('tooltip');
         tip = document.createTextNode(text);
         if (text != null) {// Checking if tooltip is empty or not.
               base.innerHTML = '';
               base.appendChild(tip);
               if (document.getElementsByTagName('tooltip')[0]){// Checking for any "tooltip" element
                   document.getElementsByTagName('tooltip')[0].remove();// Removing old tooltip
               }
               base.style.top = (event.pageY + 20) + 'px';
               base.style.left = (event.pageX + 20) + 'px';
               document.body.appendChild(base);
         }

     };
     a[x].onmouseout = function () {
         document.getElementsByTagName('tooltip')[0].remove();// Remove last tooltip
     };
}

})();