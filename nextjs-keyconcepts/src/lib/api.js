const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.VITE_API_BASE_URL ||
  "https://api.keyconcepts.co.in/api";

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
      const error = new Error(errorMessage);
      if (typeof data === 'object' && data !== null) {
        error.data = data;
        error.alreadyApplied = Boolean(data.alreadyApplied);
      }
      error.status = response.status;
      throw error;
    }

    return data;
  } catch (error) {
    console.warn(`API Error (${path}):`, error);
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
  // Dashboard
  DASHBOARD_STATS: '/dashboard/stats',

  // Jobs
  JOBS: '/jobs',
  JOB_FILTER_OPTIONS: '/jobs/filter-options',
  JOB_BY_ID: (id) => `/jobs/${id}`,

  // Blogs
  BLOGS: '/blogs',
  BLOG_BY_ID: (id) => `/blogs/${id}`,
  BLOG_BY_SLUG: (slug) => `/blogs/slug/${slug}`,

  // Case studies
  CASE_STUDIES: '/case-studies',
  CASE_STUDY_BY_ID: (id) => `/case-studies/${id}`,
  CASE_STUDY_BY_SLUG: (slug) => `/case-studies/slug/${slug}`,
  
  // Applications
  APPLICATIONS: '/applications',
  APPLICATION_FILTER_OPTIONS: '/applications/filter-options',
  APPLICATION_BY_ID: (id) => `/applications/${id}`,
  APPLICATION_STATUS: (id) => `/applications/${id}/status`,
  APPLICATION_ROUNDS: (id) => `/applications/${id}/rounds`,
  APPLICATION_ROUND_UPDATE: (id, roundId) => `/applications/${id}/rounds/${roundId}`,
  
  // Contact Leads
  CONTACT: '/contact',
  CONTACT_LEADS: '/contact-leads',
  CONTACT_LEAD_BY_ID: (id) => `/contact-leads/${id}`,
  CONTACT_LEAD_STATUS: (id) => `/contact-leads/${id}/status`,
  CONTACT_LEAD_ASSIGN: (id) => `/contact-leads/${id}/assign`,
  CONTACT_LEAD_ACTIVITIES: (id) => `/contact-leads/${id}/activities`,
  CONTACT_LEAD_DETAILS: (id) => `/contact-leads/${id}/details`,
  CONTACT_LEAD_FILTER_OPTIONS: '/contact-leads/filter-options',
  CONTACT_LEAD_VIEWED: (id) => `/contact-leads/${id}/viewed`,
  
  // Interviewers
  INTERVIEWERS: '/interviewer',
  INTERVIEWER_CREATE: '/interviewer/create',
  INTERVIEWER_UPDATE: (id) => `/interviewer/update/${id}`,
  INTERVIEWER_DELETE: (id) => `/interviewer/delete/${id}`,

  // Lead Assignees
  LEAD_ASSIGNEES: '/lead-assignee',
  LEAD_ASSIGNEE_CREATE: '/lead-assignee/create',
  LEAD_ASSIGNEE_UPDATE: (id) => `/lead-assignee/update/${id}`,
  LEAD_ASSIGNEE_DELETE: (id) => `/lead-assignee/delete/${id}`,

  // Auth (if needed)
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  
  // Other common endpoints
  USERS: '/users',
  PROFILE: '/profile',
};
