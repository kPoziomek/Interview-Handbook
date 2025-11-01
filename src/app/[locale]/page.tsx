import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { landingCards } from "@/constants/landingCards";
import type { LandingCard } from "@/types/landingCards";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Interview Handbook</h1>
        <p className="text-xl text-muted-foreground">
          Your comprehensive guide to interview preparation
        </p>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {landingCards.map(
          ({ title, description, href, button }: LandingCard, idx) => (
            <Card key={t(title)}>
              <CardHeader>
                <CardTitle>{t(title)}</CardTitle>
                <CardDescription>{t(description)}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full"
                  variant={idx % 2 === 1 ? "outline" : undefined}
                >
                  <Link href={href}>{button}</Link>
                </Button>
              </CardContent>
            </Card>
          )
        )}
      </section>
    </div>
  );
}
