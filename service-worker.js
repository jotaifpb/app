const CACHE_NAME = "medicamentos-v1";

const urlsToCache = [
"/",
"index.html",
"manifest.json",
"https://unpkg.com/quagga/dist/quagga.min.js"
];

self.addEventListener("install", event => {

event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => {
return cache.addAll(urlsToCache);
})
);

});

self.addEventListener("fetch", event => {

event.respondWith(
caches.match(event.request)
.then(response => {

if(response){
return response;
}

return fetch(event.request);

})
);

});
