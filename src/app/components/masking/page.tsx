import { ShowcaseLayout } from "@/components/showcase/showcase-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SawtoothMasking from "@/components/masking/sawtooth-masking";

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
              <SawtoothMasking />
            </div>
          </CardContent>
        </Card>


      </div>
    </ShowcaseLayout>
  );
}
