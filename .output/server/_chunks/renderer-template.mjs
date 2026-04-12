import { c as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
const rendererTemplate = () => new HTTPResponse(`<!doctype html>
<html lang="en" suppressHydrationWarning>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script>
      (function() {
        try {
          var storedTheme = localStorage.getItem('theme');
          var hasTheme = storedTheme !== null;
          if (hasTheme) {
            document.documentElement.classList.add(storedTheme);
          } else {
            var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.classList.add(isDark ? 'dark' : 'light');
          }
        } catch (e) {}
      })();
    <\/script>
    <title>Blossom — Natural Perfumes from Fruit Peels</title>
    <meta name="description" content="Blossom creates eco-friendly, natural perfumes from upcycled fruit peels. Fresh, modern scents that are safe for ages 10+." />
    <meta name="author" content="Blossom" />

    <meta property="og:title" content="Blossom — Natural Perfumes from Fruit Peels" />
    <meta property="og:description" content="Eco-friendly fragrances crafted from upcycled fruit peels. Fresh, modern, sustainable." />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Lovable" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
    <script type="module" crossorigin src="/blossom-eco-scents/assets/index-DVCfkCvB.js"><\/script>
    <link rel="stylesheet" crossorigin href="/blossom-eco-scents/assets/index-BtxTZAWy.css">
  </head>

  <body>
    <div id="root"></div>
  </body>
</html>
`, { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
