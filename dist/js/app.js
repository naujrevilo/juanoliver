$(document).foundation();

//Office 365
var ccs_cc_args = ccs_cc_args || [];
(function () {
    var o = ccs_cc_args; o.push(['_SKey', 'bacdc6d3']); o.push(['_ZoneId', 'emdedESLoffice365']);
    var sc = document.createElement('script'); sc.type = 'text/javascript'; sc.async = true;
    sc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.cnetcontent.com/jsc/h.js';
    var n = document.getElementsByTagName('script')[0]; n.parentNode.insertBefore(sc, n);
})();

//Google Analytics
<!-- Global Site Tag (gtag.js) - Google Analytics -->
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments)};
gtag('js', new Date());

gtag('config', 'UA-26191186-1');


// Google AdSense
(adsbygoogle = window.adsbygoogle || []).push({});

//ZOHO CRM
var $zoho= $zoho || {salesiq:{values:{},ready:function(){
    $zoho.salesiq.floatbutton.visible('hide');}}};
var d=document;s=d.createElement('script');s.type='text/javascript';
s.defer=true;s.src='https://salesiq.zoho.com/juanoliver/float.ls?embedname=juanoliver';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);