import { Sidebar } from "./sidebar";

export function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-64 flex-1">
        <div className="container mx-auto max-w-7xl px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
