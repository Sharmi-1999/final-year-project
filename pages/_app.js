import Head from "next/head";
import "../tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
      <Head>
        <title>Blitzllama | Launch no-code micro-surveys</title>

        <meta charset="utf-8" />
        <meta
          name="description"
          content="Blitzllama | Discover why your users churn to build better products"
        />
        <meta
          name="keywords"
          content="Blitzllama | Discover why your users churn to build better products"
        />
        <meta content="Blitzllama" name="author" />

        <meta httpEquiv="Cache-control" content="no-cache" />
        <meta httpEquiv="Expires" content="-1" />

        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link
          type="image/png"
          sizes="16x16"
          rel="icon"
          href="/images/logo_16.png"
        />
        <link
          type="image/png"
          sizes="32x32"
          rel="icon"
          href="/images/logo_32.png"
        />

        <link rel="stylesheet" href="https://use.typekit.net/vff8cgz.css" />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSW5KQ9');`,
          }}
        ></script>
        <script
          src="https://fast.wistia.com/embed/medias/rt9g688te5.jsonp"
          async
        ></script>
        <script
          src="https://fast.wistia.com/assets/external/E-v1.js"
          async
        ></script>
      </Head>

      <body style={{ margin: 0 }}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSW5KQ9"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`,
          }}
        />
        <Component {...pageProps} />
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(a,b,c,d,t){var e,f=a.getElementsByTagName("head")[0];if(!a.getElementById(c)){if(e=a.createElement(b),e.id=c,e.setAttribute("data-vrlps-ucid",d),e.setAttribute("data-vrlps-version","2"), e.setAttribute("data-vrlps-template", t),e.src="https://app.viral-loops.com/popup_assets/js/vl_load_v2.min.js",window.ub){jQuery=null,$=null;var g=a.createElement(b);g.src="https://code.jquery.com/jquery-2.2.4.min.js",f.appendChild(g)}f.appendChild(e);var h=a.createElement("link");h.rel="stylesheet",h.type="text/css",h.href="https://app.viral-loops.com/static/vl-loader.css",f.appendChild(h);var i=a.createElement("div");i.id="vl-overlay",i.style.display="none";var j=a.createElement("div");j.id="vl-loader",i.appendChild(j),a.addEventListener("DOMContentLoaded",function(b){a.body.appendChild(i);for(var c=a.getElementsByClassName("vrlps-trigger"),d=0;d<c.length;d++)c[d].removeAttribute("href"),c[d].onclick=function(){a.getElementById("vl-overlay").style.display="block"};var e=a.querySelectorAll("[data-vl-widget='popupTrigger']");[].forEach.call(e,function(b){var c=a.createElement("div");c.className="vl-embedded-cta-loader",b.appendChild(c)})})}}(document,"script","vrlps-js","yy077shZsXbQYtKSQnm32PbPU8g","waitlist");`,
        }}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html:
            `!function () {
              var analytics = window.analytics = window.analytics || []; if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice."); else {
                analytics.invoked = !0; analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"]; analytics.factory = function (e) { return function () { var t = Array.prototype.slice.call(arguments); t.unshift(e); analytics.push(t); return analytics } }; for (var e = 0; e < analytics.methods.length; e++) { var key = analytics.methods[e]; analytics[key] = analytics.factory(key) } analytics.load = function (key, e) { var t = document.createElement("script"); t.type = "text/javascript"; t.async = !0; t.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js"; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(t, n); analytics._loadOptions = e }; analytics._writeKey = "653sFsFOjAqGABVLQTDYIOUYxr9uHRll";; analytics.SNIPPET_VERSION = "4.15.3";
                analytics.load("653sFsFOjAqGABVLQTDYIOUYxr9uHRll");
                analytics.page();
              }
            }();`
        }}>
</script>
    </html>
  );
}

export default MyApp;
