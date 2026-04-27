import MechPartners from '@/components/MechPartners/MechPartners';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <MechPartners lang={lang} />;
}
