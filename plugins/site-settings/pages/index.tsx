import Link from "next/link";

export default function MainSettingsPage() {
  return (
    <div>
      <h1>Site Settings</h1>
      <Link href="/plugin/site-settings/testing">
        <a>Testing</a>
      </Link>
    </div>
  );
}
