"use client";

import NextLink from "next/link";
import { usePathname, useRouter, useParams as useNextParams } from "next/navigation";
import { useEffect, useMemo } from "react";

function normalizeHref(to) {
  if (typeof to === "string") return to;
  if (to && typeof to === "object") {
    const pathname = to.pathname || "";
    const search = to.search || "";
    const hash = to.hash || "";
    return `${pathname}${search}${hash}`;
  }
  return "/";
}

function Link({ to, href, children, ...props }) {
  return (
    <NextLink href={href || normalizeHref(to)} {...props}>
      {children}
    </NextLink>
  );
}

function NavLink({ to, href, className, children, ...props }) {
  const pathname = usePathname() || "/";
  const target = href || normalizeHref(to);
  const isActive = pathname === target || pathname.startsWith(`${target}/`);
  const computedClassName =
    typeof className === "function" ? className({ isActive, isPending: false }) : className;

  return (
    <NextLink href={target} className={computedClassName} {...props}>
      {typeof children === "function" ? children({ isActive, isPending: false }) : children}
    </NextLink>
  );
}

function useLocation() {
  const pathname = usePathname() || "/";
  // Avoid useSearchParams() here: it requires a Suspense boundary during static
  // prerender/export. Callers in this app only need pathname; search stays empty.
  return useMemo(
    () => ({
      pathname,
      search: "",
      hash: "",
      state: null,
      key: pathname,
    }),
    [pathname]
  );
}

function useNavigate() {
  const router = useRouter();

  return (to, options = {}) => {
    if (typeof to === "number") {
      if (to < 0) router.back();
      else router.forward();
      return;
    }

    const target = normalizeHref(to);
    if (options.replace) router.replace(target);
    else router.push(target);
  };
}

function useParams() {
  return useNextParams() || {};
}

function Navigate({ to, replace = false }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace });
  }, [navigate, replace, to]);
  return null;
}

function Outlet() {
  return null;
}

function RouterProvider() {
  return null;
}

function createBrowserRouter() {
  return null;
}

export {
  Link,
  NavLink,
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
  useNavigate,
  useParams,
};
