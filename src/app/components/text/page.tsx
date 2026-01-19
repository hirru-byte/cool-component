import { ShowcaseLayout } from "@/components/showcase/showcase-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

export default function TextPage() {
  return (
    <ShowcaseLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Text Animations</h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            A collection of text animations using GSAP.
          </p>
        </div>

        {/* Basic Example Section */}
        <Card>
          <CardHeader>
            <CardTitle>Text Animation 1</CardTitle>
            <CardDescription>
              A text animation using GSAP.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Your component example here */}
            <div className="space-y-4">

            </div>
          </CardContent>
        </Card>


      </div>
    </ShowcaseLayout>
  );
}
