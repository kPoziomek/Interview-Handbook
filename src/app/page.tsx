import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">React Interview Handbook</h1>
        <p className="text-xl text-muted-foreground">
          Your comprehensive guide to React interview preparation
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>React Basics</CardTitle>
            <CardDescription>
              Start with fundamental concepts every React developer should know
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/basics/introduction">Start Learning</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Design Patterns</CardTitle>
            <CardDescription>
              Explore common React design patterns and best practices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full" variant="outline">
              <Link href="/advanced/patterns">Explore Patterns</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
