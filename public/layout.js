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

    <!--START TABLE-->
    <table id="master-container">

        <!--MAIN HEADER BOX-->
        <tr>
            <td id="td-header" colspan="2">
            </td>
        </tr>

        <!--MAIN CONTENT / SIDE BOX-->
        <tr>
            <!--MAIN CONTENT-->
            <td>
    
      
`;

// Insert your footer HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <footer> element, but I recommend it.
const footerEl = `

 </td>
            <!--MAIN CONTENT END-->

            <!--SIDE BOX MENU-->
            <td class="side-box">

                <!--STATUS-->
                <p class="nav-header" style="font-size:11px;"><span style="color:var(--second-text-color)">www.</span><span>WHO AM I</span><span style="color:var(--second-text-color);">/</span></p>
                <div id="status-wrapper">
                    <img src="https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/113230950_PHm.png" align="left" style="height:50px;margin-right:3px;""><p>Kito, 22mTX, owner of a cat and crested gecko. I love love love electronic music and fursuit making the most!</p>
                    <div class="divider"></div>
                    <p><b>I am feeling...</b><br><a href="https://www.imood.com/users/hazure03"><img src="https://moods.imood.com/display/uname-hazure03/fg-FFFFFF/bg-000000/imood.gif" alt="The current mood of hazure03 at www.imood.com" border="0""></a></p>
                    <p><b>listening to...</b><br>Parov Stelar</p>
                    <p><b>watching...</b><br>House M.D.</p>
                    <p><b>reading...</b><br>Warriors: Fire and Ice</p>
                    <p><b>playing...</b><br>Viva Piñata</p>
                </div>

                <!--GIF DECOR-->
                <div style="background-image:url('main-assets/main-images/eq.gif');background-size:contain;height:15px;""></div>

                <!--INDEX-->
                <p class="nav-header"><span style="color:var(--second-text-color)">www.</span>INDEX<span style="color:var(--second-text-color)">/</span></p>
                <ul class="td-side-list">
                    <li><div class="tt-content"><a href="/home.html">HOME</a><span class="tt-text">Where you began </span></div></li>
                    <li><div class="tt-content"><a href="/about.html">ABOUT</a><span class="tt-text">Who am I?</span></div></li>
                    <li><div class="tt-content"><a href="/links.html">LINKS</a><span class="tt-text">Where will you go next?</span></div></li>
                    <li><div class="tt-content"><a href="/index.html">SPLASH</a><span class="tt-text">Where you ACTUALLY began</span></div></li>
                    <li><div class="tt-content"><a href="https://hazure03.atabook.org/">GUESTBOOK</a><span class="tt-text">Leave a message!</span></div></li>

                </ul>

                <!--ARTWORK-->
                <p class="nav-header"><span style="color:var(--second-text-color)">www.</span>ARTWORK<span style="color:var(--second-text-color)">/</span></p>
                <ul class="td-side-list">
                    <li><div class="tt-content"><a href="example.com">ILLUSTRATION</a><span class="tt-text">*Mostly* digital drawings</span></div></li>
                    <li><div class="tt-content"><a href="example.com">FURSUITS</a><span class="tt-text">Fursuits I've made and / or am working on</span></div></li>
                </ul>

                <!--MUSIC-->
                <p class="nav-header"><span style="color:var(--second-text-color)">www.</span>MUSIC<span style="color:var(--second-text-color)">/</span></p>
                <ul class="td-side-list">
                    <li><div class="tt-content"><a href="example.com"><a href="example.com">DISCOGRAPHY</a><span class="tt-text">Finished songs / EPs / albums</span></div></li>
                    <li><div class="tt-content"><a href="example.com"><a href="example.com">SCRAPS</a><span class="tt-text">Unfinished work, loops, and other cool sounds</span></div></li>
                </ul>

                <!--FUN-->
                <p class="nav-header"><span style="color:var(--second-text-color)">www.</span>FUN<span style="color:var(--second-text-color)">/</span></p>
                <ul class="td-side-list">
                    <li><div class="tt-content"><a href="example.com"><a href="example.com">DRESS.UP_GAME</a><span class="tt-text">HTML / CSS based dress-up game</span></div></li>
                    <li><div class="tt-content"><a href="example.com"><a href="example.com">F2U_LAYOUTS</a><span class="tt-text">Fun web design ventures that are up for grabs</span></div></li>
                </ul>

                <!--CONTACT-->
                <p class="nav-header"><span style="color:var(--second-text-color)">www.</span>CONTACT<span style="color:var(--second-text-color)">/</span></p>
                <ul>
                    <li><div class="tt-content"><a href="example.com"><a href="example.com">e_MAIL</a><span class="tt-text">Need something?</span></div></li>
                </ul>
            </td>
            <!--SIDE BOX MENU END-->
        </tr>
        <!--MAIN CONTENT / SIDE BOX END-->
    </table>
    <!--TABLE END-->

    <div id="footer">
        <p>.: hazure03.neocities.org :.<br>.: est. 2024 :.</p>
    </div>

<script src="tooltip.js"></script>
`;