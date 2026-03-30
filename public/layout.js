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
        <!--SIDE BOX MENU-->
            <td class="side-box">
            <div class=theme-switcher>
                <label>Change Theme<br>(Refresh after choosing)</label>
                <select data-choose-theme>
                  <option value="">hazure - Dark (Main)</option>
=                  <option value="dogs">Nintendogs - Light</option>
                </select>
                </div>

                <div class="divider"></div>

                <!--STATUS-->
                <p class="nav-header">WHO AM I</p>
                <div id="status-wrapper">
                    <img src="/main-assets/main-images/kito-icon.png" align="left" style="height:50px;margin-right:3px;""><p>Kito, 22mTX, owner of a cat and crested gecko. I love love love electronic music and fursuit making the most &lt; 3</p>
                    <iframe src="clock-frame.html" class="clock" title="clock-iframe"></iframe>
                    <div class="divider"></div>
                    <p><b>I am feeling...</b><br><a href="https://www.imood.com/users/hazure03"><img src="https://moods.imood.com/display/uname-hazure03/fg-808080/trans-1/imood.gif" alt="The current mood of hazure03 at www.imood.com" border="0""></a></p>
                    <p><b>listening to...</b><br>Parov Stelar</p>
                    <p><b>watching...</b><br>House M.D.</p>
                    <p><b>reading...</b><br>Wings of Fire: The Dragonet Prophecy</p>
                    <p><b>playing...</b><br>Viva Piñata</p>

                </div>

                <!--GIF DECOR-->
                <div style="background-image:url('main-assets/main-images/eq.gif');background-size:contain;height:15px;""></div>
                <!--INDEX-->
                <p class="nav-header">INDEX</p>
                <ul class="td-side-list">
                    <li><div class="tt-content">&nbsp;<a href="/home.html">HOME</a><span class="tt-text">Where you began </span></div></li>
                    <li><div class="tt-content">&nbsp;<a href="/about.html">ABOUT</a><span class="tt-text">Who am I?</span></div></li>
                    <li><div class="tt-content">&nbsp;<a href="/links.html">LINKS</a><span class="tt-text">Where will you go next?</span></div></li>
                    <li><div class="tt-content">&nbsp;<a href="/index.html">SPLASH</a><span class="tt-text">Where you ACTUALLY began</span></div></li>
                    <li><div class="tt-content">&nbsp;<a href="https://hazure03.atabook.org/">GUESTBOOK<span style="color:var(--second-text-color);">&crarr;</span></a><span class="tt-text">Leave a message!</span></div></li>
                    <li><div class="tt-content">&nbsp;<a href="/credits.html">CREDITS</a><span class="tt-text">Credits</span></div></li>
                </ul>

                <!--ARTWORK-->
                <p class="nav-header">ARTWORK</p>
                <ul class="td-side-list">
                    <li><div class="tt-content">&nbsp;<a href="/art.html">ILLUSTRATIONS<span style="color:var(--second-text-color);">&crarr;</span></a><span class="tt-text">*Mostly* digital drawings</span></div></li>
                    <li><div class="tt-content">&nbsp;<a href="/fursuits.html">FURSUITS<span style="color:var(--second-text-color);">&crarr;</span></a><span class="tt-text">Fursuits I've made and / or am working on</span></div></li>
                </ul>

                <!--MUSIC-->
                <p class="nav-header">MUSIC</p>
                <ul class="td-side-list">
                    <li><div class="tt-content">&nbsp;<a href="/music-info.html">INFO</a><span class="tt-text">What is Babylon Bicarbonate?</span></div></li>
                    <li><div class="tt-content">&nbsp;<a href="/music-bios.html">BIOS</a><span class="tt-text">The faces behind the music</span></div></li>
                    <li><div class="tt-content">&nbsp;<a href="/music-catalog.html">DISCOGRAPHY</a><span class="tt-text">Finished songs / EPs / albums</div></li>
                    <li><div class="tt-content">&nbsp;<a href="/music-extras.html">EXTRAS</a><span class="tt-text">Unfinished work, loops, and other cool sounds</span><span class="blinking-text">&nbsp;NEW!</span></div></li>
                </ul>

                <!--CONVENTIONS-->
                <p class="nav-header">CONVENTIONS</p>
                <ul class="td-side-list">
                    <li><div class="tt-content">&nbsp;<a href="/TEMP.html" class="link-no-access">BLOG</a><span class="tt-text">Happenings on a day-by-day basis</span></div></li>
                    <li><div class="tt-content">&nbsp;<a href="/TEMP.html" class="link-no-access">PICS</a><span class="tt-text">Con pics</span></div></li>
                    <li><div class="tt-content">&nbsp;<a href="/TEMP.html" class="link-no-access">VIDEOS</a><span class="tt-text">Con vids</span></div></li>
                </ul>

                <!--MEDIA ARCHIVES-->
                <p class="nav-header"><span style="color:var(--second-text-color)"></span>ARCHIVES</p>
                <ul class="td-side-list">
                  <li><div class="tt-content">&nbsp;<a href="/archive-wallpapers.html">WALLPAPERS</a><span class="tt-text">Official wallpapers from various pieces of media</span></div></li>
                  <li><div class="tt-content">&nbsp;<a href="/archive-scans.html" class="link-no-access">SCANS</a><span class="tt-text">Scans of print media I find in real-life</span></div></li>
                  <li><div class="tt-content">&nbsp;<a href="/archive-site.html">SITE_BASED</a><span class="tt-text">Site-related archive (old layouts, overhaul notes)</span><span class="blinking-text">&nbsp;NEW!</span></div></li>
                </ul>

                <!--FUN-->
                <p class="nav-header">FUN</p>
                <ul class="td-side-list">
                    <li><div class="tt-content">&nbsp;<a href="/dressup.html">DRESS.UP_GAME</a><span class="tt-text">Dress-up my fursona!</span></div></li>
                    <li><div class="tt-content">&nbsp;<a href="/fav-characters.html">FAV_CHARACTERS</a><span class="tt-text">Current favorite characters in fiction</span></div></li>
                    <li><div class="tt-content">&nbsp;<a href="/web-collection.html">WEB_COLLECTION</a><span class="tt-text">Collection of cool stuff I find while browsing</span></div></li>
                </ul>

                <!--CONTACT-->
                <p class="nav-header">CONTACT</p>
                <ul class="td-side-list">
                    <li><div class="tt-content">&nbsp;<a href="mailto:splutterguttss.info@gmail.com">e_MAIL<span style="color:var(--second-text-color);">&crarr;</span></a><span class="tt-text">Need something?</span></div></li>
                </ul>
            </td>
            <!--SIDE BOX MENU END-->
            <!--MAIN CONTENT-->
            <td style="height:100%">
    
      
`;

// Insert your footer HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <footer> element, but I recommend it.
const footerEl = `

 </td>
            <!--MAIN CONTENT END-->

            
        </tr>
        <!--MAIN CONTENT / SIDE BOX END-->

        <tr>
          <td colspan="2">
            <div id="footer">
            <img src="images/gifs/dontfeedai.gif" style="float:left;">
              <a href="memorial.html" target="_blank" class="memorial-link">
                <img src="images/memorial/dachshund-letter-01.gif" style="float:right;">
              </a>
              <p>.: hazure03.neocities.org :.<br>.: est. 2024 :.</p>              
            </div>
          </td>
        </tr>
    </table>
    <!--TABLE END-->

<script src="tooltip.js"></script>

<!-- Clock Part 2 - Put Anywhere AFTER Part 1 -->

<script type="text/javascript">
// Clock Script Generated By Maxx Blade's Clock v2.0d
// http://www.maxxblade.co.uk/clock
function tS(){ x=new Date(); x.setTime(x.getTime()); return x; } 
function lZ(x){ return (x>9)?x:'0'+x; } 
function tH(x){ if(x==0){ x=12; } return (x>12)?x-=12:x; } 
function y2(x){ x=(x<500)?x+1900:x; return String(x).substring(2,4) } 
function dT(){ window.status=''+eval(oT)+''; document.title=''+eval(oT)+''; document.getElementById('tP').innerHTML=eval(oT); setTimeout('dT()',1000); } 
function aP(x){ return (x>11)?'pm':'am'; } 
var dN=new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat'),mN=new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'),oT="dN[tS().getDay()]+' '+tS().getDate()+' '+mN[tS().getMonth()]+' '+y2(tS().getYear())+' '+':'+':'+' '+tH(tS().getHours())+':'+lZ(tS().getMinutes())+':'+lZ(tS().getSeconds())+aP(tS().getHours())";
if(!document.all){ window.onload=dT; }else{ dT(); }
</script>

<!-- Clock Part 2 - Ends Here  -->
`;

