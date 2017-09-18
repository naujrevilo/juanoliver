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
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-106424322-1', 'auto');
ga('send', 'pageview');

// Google AdSense
(adsbygoogle = window.adsbygoogle || []).push({});

//ZOHO CRM
var $zoho= $zoho || {salesiq:{values:{},ready:function(){
    $zoho.salesiq.floatbutton.visible('hide');}}};
var d=document;s=d.createElement('script');s.type='text/javascript';
s.defer=true;s.src='https://salesiq.zoho.com/juanoliver/float.ls?embedname=juanoliver';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);