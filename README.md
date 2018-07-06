# DPIDE DEMO

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## To install
Run `npm install -g @angular/cli@latest`
Run `npm install`
Run ` npm --prefix ./middleware install`

## Middleware server

Currently there is a middleware server which needs to run in order to get around the CORS restrictions of the API server. The middleware will run on
localhost:3000.

Run `npm run middleware` for the middleware server (proxy to witech). 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Git hooks

Git hooks are to run scripts when certain git actions occur. Git automatically runs the hook scripts in the .git/hooks folder. The hooks folder in this project contains the scripts which should run by git. It's recommended to place these scripts though a symbolic link to the ./git/hooks folder. An example of how to do this is:

For Unix:
`ln -s ../../hooks/pre-commit .git/hooks/pre-commit`
For Windows:
`mklink /D ./hooks ./.git/hooks`
To run manually at command prompt:
`ng lint --fix`


## Documentation

Documentation is generated with [Compdoc](https://compodoc.github.io/compodoc/).

Install compodoc with npm
`$ npm install -g @compodoc/compodoc`

Run compodoc in your project and serve it
`compodoc src -s`

To generate new docs, run in your project
`npm run doc`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
To generate code coverage documentation, run `ng test --code-coverage` and the results will be located in the coverage folder.

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## I18N

To build the template for i18n, run `ng xi18n --output-path src/locale`

To create a new translation, for example spanish, copy the file from src/locale/messages.xlf to src/locale/messages.es.xlf. Then add the translations for the target tags

To run an AoT build for a language, for example spanish, run `ng serve --aot --locale es --i18n-format xlf --i18n-file src/locale/messages.es.xlf`

[More info found here](https://medium.com/@feloy/deploying-an-i18n-angular-app-with-angular-cli-fc788f17e358)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Code Coverage

To generate test coverage run `ng test --code-coverage`