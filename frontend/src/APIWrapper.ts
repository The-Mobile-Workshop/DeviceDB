const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default {
  GET: async (route: string) => {
    return fetch(baseUrl + route);
  },

  POST: async (route: string, body: any, authorization: string) => {
    return fetch(baseUrl + route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
      body: JSON.stringify(body),
    });
  },

  PUT: async (route: string, body: any, authorization: string) => {
    return fetch(baseUrl + route, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
      body: JSON.stringify(body),
    });
  },
};