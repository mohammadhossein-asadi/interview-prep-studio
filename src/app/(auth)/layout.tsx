import { type ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center aurora mesh-gradient px-6">
      {children}
    </div>
  );
}
