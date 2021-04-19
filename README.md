# LabDocs

### This is a sample document editor with the capability of store the files on local storage based on user code. user code in this project is hard-coded and should be replace when authorization and authentication functionality added.

## You can view the **demo** **[here](https://hamed-mahdizadeh.github.io/sample-editor/)**. 

### The entry point is a simple file explorer. You can add a new Document and after the clicking add button you will redirect to the editor page and an empty file will be stored in your local storage. Save and search functionality are available on side bar of the editor. After saving the document you can load the file from landing page and through the offline files section.

### The search box will be appeared by clicking on search icon on the navigation bar. You can search a single word in your document text. words are separated by white space.

### Similar words in your document includes the words with Levenshtein distance 1 and if your words follow by space or any of these punctuation marks ('.', ‘?’,',' ‘!’,':') which is followed by white space or new line or end of text.
### For example, in the text "Word wrd!":  both "Word" and "wrd" are similar with the key "word" but the text "word.word" has no similarity with the search key.

* Due to time constraints some essential features and functionalities have not been developed:
* Just few unit test has been developed for search functionality. 
* e2e tests have not been written yet.
* Appropriate alerts 
* Route guards
* custom 404 page 
* appropriate user input validations and handling the errors based on incorrect user inputs have not been developed.
* Search algorithm is not optimized specially for single distance check and it can be improved by caching the result inside the function.
* Style of the application is not optimized and should be improved.
* Because this sample code has limited logics, libraries and patterns like Redux and NgRx are not used but the quality of the code could be improved in real more complex applications.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
