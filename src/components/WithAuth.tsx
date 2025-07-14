"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const checkAuth = (): boolean => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("token");
};

export default function withAuth<P extends React.JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>
) {
  return function AuthenticatedComponent(props: P) {
    const router = useRouter();
    const [isAuth, setIsAuth] = useState<boolean | null>(null);

    useEffect(() => {
      const authenticated = checkAuth();
      setIsAuth(authenticated);

      if (!authenticated) {
        router.push("/login");
      }
    }, [router]);

    if (isAuth === null) {
      return null; // or loading spinner
    }

    if (!isAuth) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
