# LtTesterSampleApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Bugs to find
1. First name has proper validation that it's mandatory, but Last name does not
2. Date in profile blurb is in Americal format whereas date pickers are in NZ format
3. Error thrown when field lengths are too long (> 30 for most, > 256 for Notes)
4. Layout is not responsive
5. Saving a null Hire Date shows the word "null" in the blurb
6. Saving a null Hire Date causes the date picker to become unusable after refresh
7. Blurb does not update until Save then page refresh
8. File uploader does not accept .png images
9. Photo is not saved

Usability issues:
1. Notes and Address fields not wide enough
2. Saving feedback missing
3. Save button is not primary CTA coloured

Candidate questions:
1. Please write a regression test script for the Profile page in this web app (only this page will be considered when assessing your submission)
2. Please note any bugs you find while testing the Profile page
3. Please note any usability issues you have found while testing the Profile page

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
