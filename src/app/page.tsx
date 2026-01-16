import { ShowcaseLayout } from "@/components/showcase/showcase-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <ShowcaseLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Component Showcase</h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            A collection of beautiful, reusable components built with Next.js and Tailwind CSS.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Button</CardTitle>
              <CardDescription>
                A versatile button component with multiple variants and sizes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card</CardTitle>
              <CardDescription>
                A flexible card component for displaying content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                This is an example card component.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badge</CardTitle>
              <CardDescription>
                Small status indicators and labels.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>
              Browse components in the sidebar to see detailed examples and usage.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Button asChild>
                <Link href="/components/button">View Button Component</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/components/card">View Card Component</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ShowcaseLayout>
  );
}
