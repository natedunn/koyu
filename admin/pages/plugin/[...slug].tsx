import { useRouter } from "next/router";
import dynamic from "next/dynamic";

export default function PluginPage() {
  const router = useRouter();
  const slug =
    typeof router.query.slug === "string"
      ? [router.query.slug]
      : router.query.slug;

  const base = slug[0];
  const rest = slug.slice(1)?.join("/");

  const PluginPage = dynamic(() =>
    import(`../../../plugins/${base}/pages/${rest}`).then((mod) => mod.default)
  );

  console.log(PluginPage);
  return <PluginPage />;
}
