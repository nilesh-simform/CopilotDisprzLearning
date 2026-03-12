---
applyTo: 'app/modules/**/*.tsx'
name: Module Instructions
description: This file contains instructions for developing feature-specific modules in the project.
---

# Module Development Instructions

## Module Structure

- Each module should be placed in its own folder within the `app/modules/` directory.
- The folder should contain the main module file (e.g., `ModuleName.tsx`), a hook file (e.g., `useModuleName.ts`), a types file (e.g., `ModuleNameTypes.ts`), a styles file (e.g., `ModuleNameStyles.ts`) and an index file (e.g., `index.ts`) that exports the module and its related files.
- The main module file should export the module as the default export.
- The hook file should contain logic related to the module's functionality.
- The types file should contain all TypeScript type definitions related to the module.
- The styles file should contain all the styles for the module using a StyleSheet component from React Native.
- The index file should export the module and its related files for easy imports in other parts of the application.

## Module Naming Conventions

- Use PascalCase for module names (e.g., `TaskManagement`, `UserProfile`).
- The module name should be descriptive of its purpose and functionality.
- Avoid using abbreviations or acronyms in module names unless they are widely recognized and understood.
- For modules that are specific to a feature, consider prefixing the module name with the feature name (e.g., `TaskManagement` for a task management feature, `UserProfile` for a user profile feature).
- For reusable modules that are not specific to a feature, use a more generic name (e.g., `Authentication`, `Notifications`).
- Avoid using generic names like `Module` or `Feature` for modules, as they do not provide any context about their purpose or functionality.
- When creating a new module, ensure that the name is unique and does not conflict with existing modules in the project.
- When importing modules, use the index file for cleaner imports (e.g., `import { TaskManagement } from 'app/modules';` instead of `import TaskManagement from 'app/modules/TaskManagement';`).

## Module Best Practices

- Keep modules focused on a single feature or functionality to maintain separation of concerns.
- Use hooks to encapsulate logic related to the module's functionality and keep the main module file clean and focused on rendering the UI.
- Use TypeScript for all module code to ensure type safety and better maintainability.
- Use meaningful variable and function names that describe their purpose and functionality within the module.
- Avoid using `any` type; prefer specific types or generics for better type safety and maintainability.
- Use React.memo and useCallback to optimize module rendering when necessary.
- Ensure that the module is well-documented with comments and JSDoc annotations for better readability and maintainability.
