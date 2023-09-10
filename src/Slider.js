import React from 'react'

export default function Slider() {
  return (
    <div>
      <div id="subtopnav" onmousedown="startscrolling_subtopnav(event)" onmousemove="scrolling_subtopnav(event)" onmouseup="endscrolling_subtopnav(event)" onclick="return pellessii(event)">
  <div id="scroll_left_btn" className="w3-hide-medium w3-hide-small">
    <span onmousedown="scrollmenow(-1)" onmouseup="stopscrollmenow()" onmouseout="stopscrollmenow()">&nbsp;&nbsp;&nbsp;❮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  </div>
  <div id="menubtn_container">
    <span>
        
    <a
        href="#"
        className="topnav-icons fa fa-menu w3-hide-large w3-hide-medium w3-hide-small w3-left w3-bar-item w3-button ga-nav"
        onClick={this.openMenu}
        title="Menu"
      >
      </a>    
        
    </span>      
  </div>
  <a href="/html/default.asp" className="ga-nav subtopnav_firstitem" title="HTML Tutorial">HTML</a>
  <a href="/css/default.asp" className="ga-nav" title="CSS Tutorial">CSS</a>
  <a href="/js/default.asp" className="ga-nav" title="JavaScript Tutorial">JAVASCRIPT</a>
  <a href="/sql/default.asp" className="ga-nav" title="SQL Tutorial">SQL</a>
  <a href="/python/default.asp" className="ga-nav" title="Python Tutorial">PYTHON</a>
  <a href="/java/default.asp" className="ga-nav" title="Java Tutorial">JAVA</a>
  <a href="/php/default.asp" className="ga-nav" title="PHP Tutorial">PHP</a>
  <a href="/howto/default.asp" className="ga-nav" title="How to">HOW TO</a>
  <a href="/w3css/default.asp" className="ga-nav" title="W3.CSS Tutorial">W3.CSS</a>
  <a href="/c/index.php" className="ga-nav" title="C Tutorial">C</a>
  <a href="/cpp/default.asp" className="ga-nav" title="C++ Tutorial">C++</a>
  <a href="/cs/index.php" className="ga-nav" title="C# Tutorial">C#</a>
  <a href="/bootstrap/bootstrap_ver.asp" className="ga-nav" title="Bootstrap Tutorial">BOOTSTRAP</a>
  <a href="/react/default.asp" className="ga-nav" title="React Tutorial">REACT</a>
  <a href="/mysql/default.asp" className="ga-nav" title="MySQL Tutorial">MYSQL</a>
  <a href="/jquery/default.asp" className="ga-nav" title="JQuery Tutorial">JQUERY</a>
  <a href="/excel/index.php" className="ga-nav" title="Excel Tutorial">EXCEL</a>
  <a href="/xml/default.asp" className="ga-nav" title="XML Tutorial">XML</a>
  <a href="/django/index.php" className="ga-nav" title="Django Tutorial">DJANGO</a>
  <a href="/nodejs/default.asp" className="ga-nav" title="Node.js Tutorial">NODEJS</a>
  <a href="/r/default.asp" className="ga-nav" title="R Tutorial">R</a>
  <a href="/typescript/index.php" className="ga-nav" title="TypeScript Tutorial">TYPESCRIPT</a>
  <a href="/angular/default.asp" className="ga-nav" title="Angular.js Tutorial">ANGULAR</a>
  <a href="/git/default.asp" className="ga-nav" title="Git Tutorial">GIT</a>
  <a href="/postgresql/index.php" className="ga-nav" title="PostgreSQL Tutorial">POSTGRESQL</a>
  <a href="/mongodb/index.php" className="ga-nav" title="MongoDB Tutorial">MONGODB</a>
  <a href="/asp/default.asp" className="ga-nav" title="ASP Tutorial">ASP</a>
  <a href="/aws/index.php" className="ga-nav" title="AWS Tutorial">AWS</a>
  <a href="/ai/default.asp" className="ga-nav" title="A.I. Tutorial">AI</a>
  <a href="/go/index.php" className="ga-nav" title="Go Tutorial">GO</a>
  <a href="/kotlin/index.php" className="ga-nav" title="Kotlin Tutorial">KOTLIN</a>
  <a href="/sass/default.asp" className="ga-nav" title="Sass Tutorial">SASS</a>
  <a href="/vue/index.php" className="ga-nav" title="Vue.js Tutorial">VUE</a>
  <a href="/gen_ai/index.php" className="ga-nav" title="Gen A.I. Tutorial">GEN AI</a>
  <a href="/cybersecurity/index.php" className="ga-nav" title="Cyber security Tutorial">CYBERSECURITY</a>
  <a href="/datascience/default.asp" className="ga-nav" title="Data science Tutorial">DATA SCIENCE</a>
  <a id='bar' href="#">.</a>
  <div id="btn_container_subtopnav">
    <div id="scroll_right_btn" className="w3-hide-medium w3-hide-small">
      <span onmousedown="scrollmenow(1)" onmouseup="stopscrollmenow()" onmouseout="stopscrollmenow()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❯&nbsp;&nbsp;&nbsp;</span>
    </div>
    <a href="javascript:void(0);" className="fa ga-nav" onmouseover="mouseoverdarkicon()" onmouseout="mouseoutofdarkicon()" onclick="changepagetheme(2)"></a>.<a href="javascript:void(0);" className="fa ga-nav" onclick="gTra(this)" title="Translate W3Schools">.</a><a href="javascript:void(0);" className="fa ga-nav" onclick="gSearch(this)" title="Search W3Schools">.</a>
  </div>
  <div id="googleSearch">
    <div className="gcse-search"></div>
  </div>
  <div id="google_translate_element"></div>
  <div id="darkmodemenu" className="ws-black" onmouseover="mouseoverdarkicon()" onmouseout="mouseoutofdarkicon()" style="">
    <input id="radio_darkpage" type="checkbox" name="radio_theme_mode" onclick="click_darkpage()" control-id="ControlID-2"><label for="radio_darkpage"> Dark mode</label></input>
    <br/>
    <input id="radio_darkcode" type="checkbox" name="radio_theme_mode" onclick="click_darkcode()" control-id="ControlID-3"><label for="radio_darkcode"> Dark code</label></input>
  </div>
</div>
    </div>

  )
}
