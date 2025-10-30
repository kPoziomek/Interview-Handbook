import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { landingCards } from '@/constants/landingCards';
import type { LandingCard } from '@/types/landingCards';

export default function Home() {
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
            <Card key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full"
                  variant={idx % 2 === 1 ? 'outline' : undefined}
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
