## Project Overview

This project is a mobile application built using React Native. It allows users to manage their tasks and stay organized. The application includes features such as task creation, editing, and deletion, as well as reminders.

## Folder Structure

- `app/`: Contains the source code of the application.
  - `assets/`: Contains images, fonts, and other static assets.
  - `components/`: Reusable components used throughout the application.
  - `configs/`: Configuration files for the application, sucnh as API Configurations and Reactrotron configurations, Sentry Configuration.
  - `constants/`: Constants used throughout the application, such as API constants, APP constants, DeepLink Constants, Navigation Routes, String Constants.
  - `hooks/`: Custom React hooks used in the application.
  - `modules/`: Feature-specific modules that contain components, services, and other related files for a specific feature of the application.
  - `navigation/`: Navigation setup and configuration for the application.
  - `redux/`: Redux-related files, including actions, reducers, and store configuration.
  - `services/`: API calls and other services that interact with external systems.
  - `themes/`: Theme-related files, such as colors, fonts, and styles.
  - `translations/`: Localization files for different languages.
  - `types/`: TypeScript type definitions used throughout the application.
  - `utils/`: Utility functions and helpers.

## Project Architecture Overview

- **Framework**: React Native with TypeScript
- **State Management**: Redux Toolkit with redux-persist (MMKV storage)
- **Navigation**: React Navigation v6
- **Styling**: Theme-based with dark/light mode support

## Coding Standards

- Use TypeScript for all code to ensure type safety and better maintainability.
- Use PascalCase for component names and interfaces
- Use camelCase for variables, functions, and methods
- Use SCREAMING_SNAKE_CASE for constants
- Use meaningful variable names that describe their purpose
- Avoid using `any` type; prefer specific types or generics
- Use functional components and React hooks for state management and side effects

## Performance Best Practices

- Use React.memo and useCallback to optimize component rendering
- Avoid unnecessary re-renders by using proper state management and memoization
- Use FlatList or SectionList for rendering large lists of data
- Optimize images and other assets for mobile performance
- Use lazy loading for components and assets when appropriate
- Monitor and profile the application regularly to identify and address performance bottlenecks

## Error Handling Standards

- Use try-catch blocks for asynchronous operations and API calls
- Log errors to an error tracking service (e.g., Sentry) for better monitoring and debugging
- Provide user-friendly error messages when appropriate
- Avoid exposing sensitive information in error messages
- Use TypeScript's `Error` type for custom error handling when necessary

## Security Considerations

- Never hardcode sensitive information (API keys, secrets)
- Use react-native-config for environment variables
- Implement proper certificate pinning for API calls
- Validate all user inputs before processing
- Use proper authentication token handling
