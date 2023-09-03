// ==UserScript==
// @name        taptap-remove-updates
// @updateURL   https://raw.githubusercontent.com/cyd/cyd-tampermonkey/main/taptap-remove-updates.user.js
// @namespace   taptap-remove-updates
// @version     0.1
// @description taptap即将上线页面，移除更新的游戏
// @author      CYD
// @match       https://www.taptap.cn/upcoming
// @run-at 		document-end
// @grant       none
// ==/UserScript==

(function() {
    setInterval(()=>$("div.upcoming-item:contains(更新)").hide(), 1000)
})()
