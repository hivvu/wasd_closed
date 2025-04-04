addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    let url = new URL(request.url);
    url.hostname = "wasd.hivvu.tech";  // Target domain

    let newRequest = new Request(url, request);
    newRequest.headers.set("Host", "wasd.hivvu.tech");

    return fetch(newRequest);
}
