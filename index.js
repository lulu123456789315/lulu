export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "https://a38c-85-2-65-120.ngrok-free.app"; // ändere das zu deinem echten Backend-Link

    return fetch(url, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
  }
}
