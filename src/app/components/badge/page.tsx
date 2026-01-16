import { ShowcaseLayout } from "@/components/showcase/showcase-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BadgePage() {
  return (
    <ShowcaseLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Badge</h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            Small status indicators and labels for highlighting information.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>
              Different badge styles for various use cases.
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

        <Card>
          <CardHeader>
            <CardTitle>Examples</CardTitle>
            <CardDescription>
              Common use cases for badges.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">Status:</span>
                <Badge>Active</Badge>
                <Badge variant="secondary">Pending</Badge>
                <Badge variant="outline">Inactive</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Tags:</span>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>
              Import and use the Badge component in your code.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-900">
              <code className="text-sm">
                {`import { Badge } from "@/components/ui/badge";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>`}
              </code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </ShowcaseLayout>
  );
}
