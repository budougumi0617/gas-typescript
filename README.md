# gas-typescript

Create Google Apps Script by TypeScript, TSLint, and Prettier.

# How to create this repository

```bash
$ mkdir gas-typescript
$ cd gas-typescript
$ git init .
$ hub create
$ npm init -y
$ npm i -S  @google/clasp tslint
$ npm i -S @types/google-apps-script @types/node
```

Add `jsconfig.json`
```json
{
  "compilerOptions": {
    "lib": ["esnext"]
  }
}
```

```bash
$ npm i -D tslint-config-prettier
$ npm i -D tslint-plugin-prettier
```

Add `tslint.json`
```json
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended",
        "tslint-config-prettier"
    ],
    "jsRules": {},
    "rules": {
        "semicolon": [
            true,
            "always"
        ],
        "prettier": true,
        "no-console": [
            false
        ]
    },
    "rulesDirectory": [
        "tslint-plugin-prettier"
    ]
}
```
Create Apps script project on web.
```bash
$ clasp create --title "TypeScript sample" --type sheets --rootDir ./src
$ clasp pull
```

Add `.gitignore`
```
node_modules/
.vscode/
.clasp.json
```
