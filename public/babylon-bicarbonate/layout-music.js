// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (document.body.classList.contains("no-layout")) return;

  // wrapping header and footer around
document.body.innerHTML = headerEl + document.body.innerHTML + footerEl;

  // Other initializations:
  initActiveLinks();

  // your code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el.getAttribute("href").replace(".html", "").replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <header> element, but I recommend it.
const headerEl = `

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/babylon-bicarbonate/mainstyle-music.css">
  </head>
  
  <body>
  <!-- MAIN START -->
  
  <table id="maintable">
  
  <tr> <!-- HEADER START -->
    <td id="header" colspan="2">
    </td>
  </tr> <!-- HEADER END -->
  
    <tr> <!-- MIDDLE START -->
    
      <td id="content"> <!-- CONTENT START -->
`;

// Insert your footer HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <footer> element, but I recommend it.
const footerEl = `

    </td> <!-- CONTENT END -->
    
    <td class="menu">
      <h1>LISTEN</h1>
      <ul> <!-- MENU2 START -->
        <li><a href="https://h4zur3.bandcamp.com/" target="_blank">Bandcamp&#8629;</a></li>
        <li><a href="https://soundcloud.com/h4zur3" target="_blank">SoundCloud&#8629;</a></li>
        <li><a href="https://www.youtube.com/@hazure_03" target="_blank">YouTube&#8629;</a></li>
        <li><a href="https://hazure03.newgrounds.com/" target="_blank">NewGrounds&#8629;</a></li>
      </ul> <!-- MENU2 END -->
      <div class="divider"></div>
      <div id="biospingif"><img class="spingif" src="/images/gifs/biohazwhitespin.gif"></div>
    </td>
    </tr> <!-- MIDDLE END -->
  
    <tr> <!-- FOOTER START -->
      <td id="footer" colspan="2"> BABYLON BICARBONATE is dJ DOGBiTE and valk#a6dad9<br>Main site: <a href="https://hazure03.neocities.org/">https://hazure03.neocities.org/</a></td>
  </tr> <!-- FOOTER END -->
</table>
<!-- MAIN END -->
  </body>
</html>

</header>

`;
