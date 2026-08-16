// dexent/components/seo/JsonLd.tsx
// Server component — injects a JSON-LD <script>. No client JS shipped.

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}