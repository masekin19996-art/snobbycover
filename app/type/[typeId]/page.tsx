import SnobbyCoverTypePageClient from "../../components/SnobbyCoverTypePageClient";

export function generateStaticParams() {
  return ["a", "b", "c", "d", "e", "f", "g", "h"].map((typeId) => ({ typeId }));
}

export default async function TypePage({
  params,
}: {
  params: Promise<{ typeId: string }>;
}) {
  const { typeId } = await params;
  return <SnobbyCoverTypePageClient typeId={typeId} />;
}
