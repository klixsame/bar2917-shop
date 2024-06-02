'use client'

import { ADMIN_PANEL_URL } from "@/app/config/url.config";
import NotFound from "@/app/not-found";
import { getAccessToken, getRefreshToken } from "@/app/services/auth/auth.helper";
import { useActions } from "@/components/hocs/useActions";
import { useAuth } from "@/components/hocs/useAuth";
import { usePathname, useRouter } from "next/navigation";
import { FC, PropsWithChildren, useEffect } from "react";
import { protectedRoutes } from "./protected-routes.data";

const AuthProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const { user } = useAuth();
  const { checkAuth, logout } = useActions();
  const pathname = usePathname();

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

  const router = useRouter()

  const isProtectedRoute = protectedRoutes.some(route => pathname?.startsWith(route))

  const isAdminRoute = pathname?.startsWith(ADMIN_PANEL_URL)

  if(!isProtectedRoute && !isAdminRoute) {
    return <>{children}</>
  }

  if(user?.isAdmin) {
    return <>{children}</>
  }

  if(user && isProtectedRoute) {
    return <>{children}</>
  }

  if(user && isAdminRoute) {
    return <NotFound />
  }

  pathname !== '/auth' && router.replace('/auth')
  return null
}

export default AuthProvider;
