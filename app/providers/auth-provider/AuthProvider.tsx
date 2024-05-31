import { getAccessToken, getRefreshToken } from "@/app/services/auth/auth.helper";
import { useActions } from "@/components/hocs/useActions";
import { useAuth } from "@/components/hocs/useAuth";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect } from "react";
import { TypeComponentAuthFields } from "./auth-page.types";

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<PropsWithChildren<Partial<TypeComponentAuthFields>>> = ({
  children,
  Component = {},
}) => {
  const { isOnlyUser } = Component;
  const { user } = useAuth();
  const { checkAuth, logout } = useActions();
  const { pathname } = useRouter();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      checkAuth();
    }
  }, []);

  useEffect(() => {
    const refreshToken = getRefreshToken();
    if (!refreshToken && user) {
      logout();
    }
  }, [pathname]);

  return isOnlyUser ? (
    <DynamicCheckRole Component={{ isOnlyUser }} children={children} />
  ) : (
    <>{children}</>
  );
};

export default AuthProvider;
