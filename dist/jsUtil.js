(function(){
function c(a,b,d,e){var f=[];b=(1*a).toFixed(b?b:0).toString().split(".");for(a=b[0].length;0<a;a-=3)f.unshift(b[0].substring(Math.max(0,a-3),a));b[0]=f.join(void 0!==e?e:",");return b.join(void 0!==d?d:".")};window.JSUtils={Numbers:{Formatting:{Generic:c,Money:function(a){return c(a,2,".",",")}}}};
}).call(this)
