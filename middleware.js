import { NextResponse } from "next/server";

export function middleware() {
  // retrieve the current response
  const res = NextResponse.next();

  // add the CORS headers to the response
  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append(
    "Access-Control-Allow-Origin",
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL
  ); // replace this your actual origin
  res.headers.append(
    "Access-Control-Allow-Methods",
    process.env.NEXT_PUBLIC_BACKEND_ALLOW_METHODS
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}

// specify the path regex to apply the middleware to
export const config = {
  matcher: "/api/:path*",
};
