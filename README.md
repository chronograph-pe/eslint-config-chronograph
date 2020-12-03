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

## Update Version / Publish to NPM 

### Update Version 
``npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]
'npm [-v | --version]' to print npm version
'npm view <pkg> version' to view a package's published version
'npm ls' to inspect current package/dependency versions``

### Publish New Version to NPM
`npm publish`
