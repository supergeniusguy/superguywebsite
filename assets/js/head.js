! function () {
  "use strict";
  var e, i = document.documentElement,
    d = window.navigator.userAgent.toLowerCase(),
    n = {
      IE: -1 != (e = d).indexOf("msie") || -1 != e.indexOf("trident"),
      Android: -1 != e.indexOf("android"),
      Tablet: -1 != e.indexOf("windows") && -1 != e.indexOf("touch") && -1 == e.indexOf("tablet pc") || -1 != e.indexOf("ipad") || -1 != e.indexOf("android") && -1 == e.indexOf("mobile") || -1 != e.indexOf("firefox") && -1 != e.indexOf("tablet") || -1 != e.indexOf("kindle") || -1 != e.indexOf("silk") || -1 != e.indexOf("playbook"),
      Mobile: -1 != e.indexOf("windows") && -1 != e.indexOf("phone") || -1 != e.indexOf("iphone") || -1 != e.indexOf("ipod") || -1 != e.indexOf("android") && -1 != e.indexOf("mobile") || -1 != e.indexOf("firefox") && -1 != e.indexOf("mobile") || -1 != e.indexOf("blackberry")
    };
  (i.className = i.className.replace(/\bno[-_]?js\b/gi, "") + " js", -1 != navigator.platform.indexOf("Win") && i.classList.add("is-Win"), n.Android && i.classList.add("is-Android"), n.IE && i.classList.add("is-IE"), n.Tablet) && (i.classList.add("is-tablet"), document.querySelector("meta[name=viewport]").setAttribute("content", "width=1140"))
}();