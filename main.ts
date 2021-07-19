addEventListener("fetch", (event) => {
  console.log("log message");
  event.respondWith(new Response("world"));
});
