export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "dein-ngrok-link.ngrok.io"; // ändere das zu deinem echten Backend-Link

    return fetch(url, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
  }
}
