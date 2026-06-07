import { Navbar } from "@/components/editor/navbar";

export default function PublicHomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-base px-6 py-10 text-copy-primary">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 pt-20">
          <p className="text-sm text-brand">Cafe landing page</p>
          <h1 className="font-tempting text-4xl font-semibold">
            Public storefront baseline
          </h1>
          <p className="max-w-2xl text-copy-secondary">
            Public routes are ready for cafe storytelling, menu highlights,
            location details, and reservation intake flows.
          </p>
        </div>
      </main>
    </>
  );
}
