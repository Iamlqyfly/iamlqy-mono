function t(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function e(t){for(var e={left:0,top:0},n=t;n;)e.left+=n.offsetLeft,e.top+=n.offsetTop,n=n.offsetParent;return e}function n(t){return window.scrollTo(0,t),t}var r=window.requestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function o(e,o){if(o<0)n(e);else{var a=e-t();if(0!==a){var i=a/o*10;r((function(){Math.abs(i)>Math.abs(a)?n(t()+a):(n(t()+i),a>0&&t()>=e||0>a&&t()<=e||scrollTo(e,o-16))}))}}}function a(t,e){var n=window.innerHeight;t="function"==typeof t?t:function(){},e="function"==typeof e?e:function(){},window.addEventListener("resize",(function(){var r=window.innerHeight;r===n&&t(),n>r&&e()}))}function i(t){var e;if(null==t||"object"!=typeof t)return t;if(t instanceof Date)return(e=new Date).setTime(t.getTime()),e;if(t instanceof Array){e=[];for(var n=0,r=t.length;r>n;n++)e[n]=i(t[n]);return e}if(t instanceof Object){for(var o in e={},t)t.hasOwnProperty(o)&&(e[o]=i(t[o]));return e}throw Error("Unable to copy values! Its type isn't supported.")}function f(t){return!(!t||"object"!=typeof t||Array.isArray(t))&&!Object.keys(t).length}function u(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)}function c(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}function s(t){return/^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(t)}function l(t){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(t)}function d(t){return/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(t)}function w(t){return/^(\+?0?86\-?)?1[3456789]\d{9}$/.test(t+"")}function h(t){return/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(t)}function p(t){var e=Date.parse(""+new Date)-t,n=parseInt(""+e/864e5),r=parseInt(""+e/36e5),o=parseInt(""+e/6e4),a=parseInt(""+n/30),i=parseInt(""+a/12);return i?i+"年前":a?a+"个月前":n?n+"天前":r?r+"小时前":o?o+"分钟前":"刚刚"}function g(t){var e=new Date,n=new Date(t).getTime()-e.getTime(),r=0,o=0,a=0,i=0;return 0>n||(r=Math.floor(n/1e3/3600/24),o=Math.floor(n/1e3/60/60%24),a=Math.floor(n/1e3/60%60),i=Math.floor(n/1e3%60)),r+"天 "+o+"小时 "+a+"分钟 "+i+"秒"}function m(t){return 0==t%4&&(t%100!=0||t%400==0)}function M(t,e){e||(e=new Date);var n=t.getFullYear(),r=t.getMonth()+1,o=t.getDate(),a=e.getFullYear(),i=e.getMonth()+1;return o===e.getDate()&&r===i&&n===a}function v(t){var e=(t=new Date(t)).getFullYear(),n=t.getMonth()+1;return new Date(e,n,0).getDate()}function D(t,e){if(t&&e){var n;n=t instanceof Date?t:new Date(t.replace(/-/g,"/"));var r=(e instanceof Date?e:new Date(e.replace(/-/g,"/"))).getTime()-n.getTime(),o=0,a=0,i=0,f=0;return 0>r||(o=Math.floor(r/1e3/3600/24),a=Math.floor(r/1e3/60/60%24),i=Math.floor(r/1e3/60%60),f=Math.floor(r/1e3%60)),{d:o,h:a,m:i,s:f}}}export{i as deepClone,p as formatPassTime,g as formatRemainTime,v as getMonthDays,e as getOffset,t as getScrollTop,D as getTimeLeft,s as isColor,l as isEmail,f as isEmptyObject,d as isIdCard,m as isLeapYear,w as isPhoneNum,M as isSameDay,h as isUrl,u as randomColor,c as randomNum,o as setScrollTo,n as setScrollTop,a as windowResize};
