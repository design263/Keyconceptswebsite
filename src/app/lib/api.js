const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

async function request(path, options) {
  const headers = new Headers(options.headers || {});
  if (!(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }
  if (options.token) {
    headers.set("Authorization", `Bearer ${options.token}`);
  }

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || "Request failed");
  }
  return data;
}

export const api = {
  get: (path, token) => request(path, { method: "GET", token }),
  post: (path, body, token) =>
    request(path, { method: "POST", body: body instanceof FormData ? body : JSON.stringify(body), token }),
  put: (path, body, token) =>
    request(path, { method: "PUT", body: JSON.stringify(body), token }),
  patch: (path, body, token) =>
    request(path, { method: "PATCH", body: JSON.stringify(body), token }),
  delete: (path, token) => request(path, { method: "DELETE", token }),
  baseUrl: API_BASE_URL,
};
