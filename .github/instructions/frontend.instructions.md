---
applyTo: 'app/components/**/*.tsx'
name: Frontend Instructions
description: This file contains instructions for frontend development in the project.
---

# Frontend Development Instructions

## Component Structure

- Each component should be placed in its own folder within the `app/components/` directory.
- The folder should contain the main component file (e.g., `ComponentName.tsx`), a styles file (e.g., `ComponentNameStyles.ts`), a types file (e.g., `ComponentNameTypes.ts`) and an index file (e.g., `index.ts`) that exports the component and its related files.
- The main component file should export the component as the default export.
- The styles file should contain all the styles for the component using a StyleSheet component from React Native.
- The types file should contain all TypeScript type definitions related to the component.
- The index file should export the component and its related files for easy imports in other parts of the application.

## Component Naming Conventions

- Use PascalCase for component names (e.g., `TaskList`, `UserProfile`).
- The component name should be descriptive of its purpose and functionality.
- Avoid using abbreviations or acronyms in component names unless they are widely recognized and understood.
- For components that are specific to a feature or module, consider prefixing the component name with the feature or module name (e.g., `TaskList` for a task management feature, `UserProfile` for a user profile feature).
- For reusable components that are not specific to a feature, use a more generic name (e.g., `Button`, `InputField`).
- Avoid using generic names like `Component` or `View` for components, as they do not provide any context about their purpose or functionality.
- When creating a new component, ensure that the name is unique and does not conflict with existing components in the project.
- When importing components, use the index file for cleaner imports (e.g., `import { TaskList } from 'app/components';` instead of `import TaskList from 'app/components/TaskList';`).
