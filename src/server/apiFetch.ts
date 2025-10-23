const BASE_URL = import.meta.env.VITE_URL as string;

// Tipos de respuesta genéricos
export interface ApiSuccess<T> {
  error: false;
  data: T;
}

export interface ApiError {
  error: true;
  status?: number;
  message: string;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export const api = {
  get: async <T = unknown>(path: string): Promise<ApiResponse<T>> => {
    try {
      const res = await fetch(`${BASE_URL}${path}`);
      if (!res.ok) {
        const errorText = await res.text();
        return { error: true, status: res.status, message: errorText };
      }
      const data: T = await res.json();
      return { error: false, data };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Network error";
      return { error: true, message };
    }
  },

  post: async <T = unknown, B = unknown>(
    path: string,
    body: B
  ): Promise<ApiResponse<T>> => {
    try {
      const res = await fetch(`${BASE_URL}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const errorText = await res.text();
        return { error: true, status: res.status, message: errorText };
      }
      const data: T = await res.json();
      return { error: false, data };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Network error";
      return { error: true, message };
    }
  },

  put: async <T = unknown, B = unknown>(
    path: string,
    body: B
  ): Promise<ApiResponse<T>> => {
    try {
      const res = await fetch(`${BASE_URL}${path}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const errorText = await res.text();
        return { error: true, status: res.status, message: errorText };
      }
      const data: T = await res.json();
      return { error: false, data };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Network error";
      return { error: true, message };
    }
  },

  delete: async <T = unknown>(path: string): Promise<ApiResponse<T>> => {
    try {
      const res = await fetch(`${BASE_URL}${path}`, { method: "DELETE" });
      if (!res.ok) {
        const errorText = await res.text();
        return { error: true, status: res.status, message: errorText };
      }
      const data: T = await res.json();
      return { error: false, data };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Network error";
      return { error: true, message };
    }
  },
};
