addEventListener("fetch", (event) => {
  event.respondWith(new Response("world"));
});
