import { ShowcaseLayout } from "@/components/showcase/showcase-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardPage() {
  return (
    <ShowcaseLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Card</h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            A flexible card component for displaying content with header, body, and footer sections.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>
              A simple card with header and content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              This is the card content area. You can put any content here.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card with Footer</CardTitle>
            <CardDescription>
              Cards can include a footer section for actions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              This card includes a footer with action buttons.
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Action</Button>
            <Button size="sm" variant="outline" className="ml-2">
              Cancel
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>
              Import and use the Card components in your code.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-900">
              <code className="text-sm">
{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content goes here</CardContent>
  <CardFooter>Footer content</CardFooter>
</Card>`}
              </code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </ShowcaseLayout>
  );
}
