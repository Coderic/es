addEventListener("fetch", (event) => {
  return event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

async function handleRequest(request) {
  var userLang = Intl.DateTimeFormat().resolvedOptions().locale;
  
  var urls = {
    'es': 'https://es.code-ric.com/'
  };
  var defaultUrl = 'https://en.code-ric.com/';

  var url = urls[userLang.substring(0, 2)] ?? defaultUrl;
  return new Response("Hello, world!")
  return await new Response(userLang.substring(0, 2), {
    headers: {
      "Location": url,
    },
  })
}
