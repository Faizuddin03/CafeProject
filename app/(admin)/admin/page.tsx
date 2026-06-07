export default function AdminPage() {
  return (
    <main className="min-h-screen bg-base px-6 py-10 text-copy-primary">
      <div className="mx-auto flex max-w-5xl flex-col gap-4">
        <p className="text-sm text-accent-warm">Cafe admin workspace</p>
        <h1 className="font-tempting text-4xl font-semibold">
          Dashboard baseline
        </h1>
        <p className="max-w-2xl text-copy-secondary">
          Auth-protected management routes can be wired here once Supabase
          project credentials and policies are available.
        </p>
      </div>
    </main>
  );
}
