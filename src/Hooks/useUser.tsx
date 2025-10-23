import { useEffect, useState } from "react";
import { api, type ApiResponse } from "@server";
import type { UserResult, Result } from "@/Interfaces";

interface UseUserReturn {
  userData: Result[] | null;
  loading: boolean;
  error: string | null;
  getDataUser: (limit: number) => Promise<void>;
}

export const useUser = (limit?: number): UseUserReturn => {
  const [userData, setUserData] = useState<Result[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getDataUser = async (limit: number | string): Promise<void> => {
    try {
      setLoading(true);
      const res: ApiResponse<UserResult> = await api.get<UserResult>(`?results=${limit}`);

      if (res.error) {
        setError(res.message);
        setUserData(null);
        localStorage.removeItem("user");
      } else {
        setUserData(res.data.results);
        setError(null);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      setUserData(null);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (limit) getDataUser(limit);
  }, [limit]);

  return { userData, loading, error, getDataUser };
};
