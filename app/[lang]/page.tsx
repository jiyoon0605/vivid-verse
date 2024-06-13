import type { Locale } from "@/i18n-config";
import { Button } from "@nextui-org/button";

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  return <div> {lang}</div>;
}
