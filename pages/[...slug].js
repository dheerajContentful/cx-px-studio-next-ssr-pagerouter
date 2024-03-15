import { Experience } from "@/pages/index";

export default function Page({ params }) {
  const slug = params.slug?.join("/") || "/";
  return (
    <main className="mb-24">
      {/* TODO: example heading / footer */}
      <Experience slug={slug} preview={true} />
    </main>
  );
}
