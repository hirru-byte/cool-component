import { ShowcaseLayout } from "@/components/showcase/showcase-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * SAMPLE COMPONENT SHOWCASE PAGE
 * 
 * This is a template page you can copy and modify for your own components.
 * 
 * Structure:
 * 1. Import ShowcaseLayout for consistent layout
 * 2. Import your component(s) from @/components/ui
 * 3. Create sections using Card components
 * 4. Show examples with code snippets
 * 
 * To create a new component showcase:
 * 1. Copy this file to src/app/components/[your-component-name]/page.tsx
 * 2. Update the title, description, and examples
 * 3. Add your component route to src/components/showcase/sidebar.tsx
 */

export default function SamplePage() {
  return (
    <ShowcaseLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Component Name</h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            A brief description of what this component does and when to use it.
          </p>
        </div>

        {/* Basic Example Section */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Usage</CardTitle>
            <CardDescription>
              The simplest way to use this component.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Your component example here */}
            <div className="space-y-4">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Example output will appear here
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Variants Section (if applicable) */}
        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>
              Different styles or variations of the component.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {/* Show different variants */}
              <Button>Variant 1</Button>
              <Button variant="outline">Variant 2</Button>
              <Button variant="ghost">Variant 3</Button>
            </div>
          </CardContent>
        </Card>

        {/* Sizes Section (if applicable) */}
        <Card>
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>
              Different size options available.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2">
              {/* Show different sizes */}
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Real-world Examples Section */}
        <Card>
          <CardHeader>
            <CardTitle>Examples</CardTitle>
            <CardDescription>
              Common use cases and real-world examples.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Example 1 */}
              <div>
                <p className="mb-2 text-sm font-medium">Example 1: Use Case</p>
                <div className="rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
                  {/* Your example here */}
                </div>
              </div>

              {/* Example 2 */}
              <div>
                <p className="mb-2 text-sm font-medium">Example 2: Another Use Case</p>
                <div className="rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
                  {/* Your example here */}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Props/API Section */}
        <Card>
          <CardHeader>
            <CardTitle>Props</CardTitle>
            <CardDescription>
              Available props and their types.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
                <code className="text-sm">
                  {`interface ComponentProps {
  // Add your props here
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage/Code Section */}
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>
              How to import and use this component in your code.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-900">
              <code className="text-sm">
{`import { ComponentName } from "@/components/ui/component-name";

// Basic usage
<ComponentName>Content</ComponentName>

// With props
<ComponentName variant="outline" size="lg">
  Content
</ComponentName>`}
              </code>
            </pre>
          </CardContent>
        </Card>

        {/* Additional Notes Section (optional) */}
        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
            <CardDescription>
              Additional information, tips, or best practices.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Tip or note about the component</li>
              <li>Another helpful tip</li>
              <li>Best practice or common pitfall to avoid</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </ShowcaseLayout>
  );
}
