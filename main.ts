addEventListener("fetch", (event) => {
  console.log("log message");
  fetch("https://google.com/").then(r => {
    console.log("got response");
  });
  event.respondWith(new Response("world"));
});
