// -----------------------------------------------------------------------
// Placeholder for future backend calls.
//
// Right now every section reads static data from src/data/content.js.
// When a backend exists, add functions here and call them from the
// relevant component with useEffect/useState (or React Query, SWR, etc.),
// keeping the data shape identical to what's in content.js so the
// components don't need to change.
//
// Example, once you have an API:
//
//   const API_BASE = import.meta.env.VITE_API_BASE_URL;
//
//   export async function fetchProjects() {
//     const res = await fetch(`${API_BASE}/projects`);
//     if (!res.ok) throw new Error("Failed to load projects");
//     return res.json(); // same shape as the `projects` array in content.js
//   }
//
//   export async function submitContactForm(data) {
//     const res = await fetch(`${API_BASE}/contact`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     if (!res.ok) throw new Error("Failed to send message");
//     return res.json();
//   }
//
// -----------------------------------------------------------------------

export {};
