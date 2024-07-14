import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/', '/api/webhook']);

const isProtectedRoute = createRouteMatcher([
  '/select-org(.*)',
  '/organization(.*)',
  '/board(.*)',
  '/api/cards(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }

  const { userId, orgId } = auth();

  if (userId && isPublicRoute(req)) {
    let path = '/select-org';

    if (orgId) {
      path = `/organization/${orgId}`;
    }

    const orgSelection = new URL(path, req.url);

    return NextResponse.redirect(orgSelection);
  }

  if (userId && !orgId && req.nextUrl.pathname !== '/select-org') {
    const orgSelection = new URL('/select-org', req.url);

    return NextResponse.redirect(orgSelection);
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
