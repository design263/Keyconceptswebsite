const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.VITE_API_BASE_URL ||
  "http://localhost:5000/api";

async function request(path, options = {}) {
  const headers = new Headers(options.headers || {});
  
  // Set content type based on body type
  if (!(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }
  
  // Add authorization token if provided
  if (options.token) {
    headers.set("Authorization", `Bearer ${options.token}`);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers,
    });

    // Handle non-JSON responses
    let data;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json().catch(() => ({}));
    } else {
      data = await response.text().catch(() => "");
    }

    if (!response.ok) {
      const errorMessage = typeof data === 'object' ? data.message : data || "Request failed";
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    console.error(`API Error (${path}):`, error);
    throw error;
  }
}

export const api = {
  // GET request
  get: (path, token) => request(path, { method: "GET", token }),
  
  // POST request
  post: (path, body, token) => 
    request(path, { 
      method: "POST", 
      body: body instanceof FormData ? body : JSON.stringify(body), 
      token 
    }),
  
  // PUT request
  put: (path, body, token) => 
    request(path, { 
      method: "PUT", 
      body: JSON.stringify(body), 
      token 
    }),
  
  // PATCH request
  patch: (path, body, token) => 
    request(path, { 
      method: "PATCH", 
      body: JSON.stringify(body), 
      token 
    }),
  
  // DELETE request
  delete: (path, token) => request(path, { method: "DELETE", token }),
  
  // Base URL for reference
  baseUrl: API_BASE_URL,
};

// Export individual methods for convenience
export const { get, post, put, patch, delete: del } = api;

// Export request function for custom calls
export { request };

// API endpoints constants
export const endpoints = {
  // Jobs
  JOBS: '/jobs',
  JOB_BY_ID: (id) => `/jobs/${id}`,
  
  // Applications
  APPLICATIONS: '/applications',
  
  // Contact
  CONTACT: '/contact',
  
  // Auth (if needed)
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  
  // Other common endpoints
  USERS: '/users',
  PROFILE: '/profile',
};
