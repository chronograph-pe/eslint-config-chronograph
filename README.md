# Chronograph ESLint Configuration

This module lets Chronograph maintain its core ESLint configuration in one centralized place, and share it across multiple projects.

To use in a project, simply install the module, and add the following to that project's `.eslintrc` file:

```json
"extends": ["chronograph"]
```

## Use in React Projects

This module also contains a base configuration for React projects, which can be used by extending `chronograph/react` instead of `chronograph`, like so:

```json
"extends": ["chronograph/react"]
```
