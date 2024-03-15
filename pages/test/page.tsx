import { Experience } from "@/components/experiences";

export default function Page({ params }: { params: { slug: string[] } }) {
  const slug = params.slug?.join("/") || "/";
  return (
    <main className="mb-24">
      {/* TODO: example heading / footer */}
      <Experience slug={slug} preview={true} />
    </main>
  );
}
