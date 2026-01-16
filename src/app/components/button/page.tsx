import { ShowcaseLayout } from "@/components/showcase/showcase-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ButtonPage() {
  return (
    <ShowcaseLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Button</h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            A versatile button component with multiple variants and sizes.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>
              Different button styles for various use cases.
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
            <CardTitle>Sizes</CardTitle>
            <CardDescription>
              Button component comes in three sizes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>
              Import and use the Button component in your code.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-900">
              <code className="text-sm">
{`import { Button } from "@/components/ui/button";

<Button>Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>`}
              </code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </ShowcaseLayout>
  );
}
