# Component Showcase Template Guide

## Quick Start

1. **Copy the sample template:**
   ```bash
   cp src/app/components/sample/page.tsx src/app/components/[your-component]/page.tsx
   ```

2. **Create your component** (if not already created):
   ```bash
   # Create your component in src/components/ui/
   touch src/components/ui/[your-component].tsx
   ```

3. **Add to sidebar navigation:**
   Edit `src/components/showcase/sidebar.tsx` and add your component to the `components` array:
   ```typescript
   const components = [
     // ... existing components
     { name: "Your Component", href: "/components/your-component" },
   ];
   ```

## Template Structure

The sample template (`/components/sample`) includes:

### 1. **Header Section**
- Component name (h1)
- Brief description

### 2. **Basic Usage Card**
- Simplest example of your component
- Shows the most common use case

### 3. **Variants Card** (optional)
- Different style variations
- Use if your component has multiple variants

### 4. **Sizes Card** (optional)
- Different size options
- Use if your component supports sizing

### 5. **Examples Card**
- Real-world use cases
- Multiple examples showing different scenarios

### 6. **Props Card**
- TypeScript interface showing available props
- Documentation of the component API

### 7. **Usage Card**
- Code examples showing how to import and use
- Copy-paste ready code snippets

### 8. **Notes Card** (optional)
- Tips and best practices
- Common pitfalls to avoid

## Example: Creating a New Component Showcase

Let's say you want to create a showcase for a "Dialog" component:

1. **Create the page:**
   ```bash
   mkdir -p src/app/components/dialog
   cp src/app/components/sample/page.tsx src/app/components/dialog/page.tsx
   ```

2. **Update the page content:**
   - Replace "Component Name" with "Dialog"
   - Update descriptions
   - Add your Dialog component examples
   - Update code snippets

3. **Add to sidebar:**
   ```typescript
   { name: "Dialog", href: "/components/dialog" }
   ```

4. **Access it:**
   Visit `http://localhost:3000/components/dialog`

## Tips

- Keep examples simple and focused
- Show the most common use cases first
- Include code snippets that are copy-paste ready
- Use the Card components for consistent styling
- Follow the same structure for consistency across all showcase pages

## File Locations

- **Template:** `src/app/components/sample/page.tsx`
- **UI Components:** `src/components/ui/`
- **Showcase Layout:** `src/components/showcase/showcase-layout.tsx`
- **Sidebar:** `src/components/showcase/sidebar.tsx`
