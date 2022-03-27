function addCdnScript(url) {
  let script = document.createElement("script");
  script.src = url;
  document.body.appendChild(script);
}
addCdnScript("https://unpkg.com/react@16/umd/react.production.min.js");
addCdnScript("https://unpkg.com/react-dom@17/umd/react-dom.production.min.js");
