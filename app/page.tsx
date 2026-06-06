import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto">

        <section className="py-24 text-center">

          <h1 className="text-6xl font-bold">
            Website Monitoring
            <br />
            Made Simple
          </h1>

          <p className="mt-6 text-xl">
            Monitor websites, APIs and services
            from one dashboard.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <a
              href="/signup"
              className="bg-black text-white px-6 py-3 rounded"
            >
              Start Free
            </a>

            <a
              href="/pricing"
              className="border px-6 py-3 rounded"
            >
              Pricing
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
