# Description

- This is a latest template for using TypeScript + Eslint + Prettier + Babel + Mobx + Tree Shaking
- All the configurations are working well in VScode with Code Inttellisense
- This project is using Mobx-5.x.x which can't work in <= IE 11, if you want to support these old browsers you should downgrade to 4.x.x.

# Install Steps

```
npm login - Go To LastPass to get ansarada account
npm install
npm start
```

Go to http://localhost:8181/

# IDE Settings

### VSCode

``` .vscode
{
  "eslint.autoFixOnSave": true,
  "editor.formatOnSave": true,
  "breadcrumbs.enabled": true,
  "workbench.editor.labelFormat": "medium",
  "scss.scannerExclude": ["**/.git", "**/bower_components"],
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "atlascode.jira.statusbar.showLogin": false
}

```

``` jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": ["*", "app/*"]
    },
    "jsx": "preserve"
  }
}
```