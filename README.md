# drshwan-patient-adder

This is a simple handy tool to minimize the time spent by junior doctors in adding patients to the Patient Management System used in Dr Shwans Cardio Clinic.
Demo: https://muyabb.github.io/drshwan-patient-adder/

## Documentation

### Components

-   Model:
-   -   Adder: Adds a drug to the localstorage for persistence.
-   -   Getter: Retrieves a list of drugs which are saved in the local storage.
-   -   Remover: Removes a drug from the localstorage.
-   -   -   throws if it does not find the drug in the list of drugs.
-   -   Sorter: Sorts an array of drugs based on their names.
-   -   Filterer: Filters through a list of drugs based on a filter parameter.
-   -   Formatter: Recieves an object with the properties and values and outputs it into a form that the Patient Management System can understand

-   View
-   -   Header: displays the name of the project.
-   -   Form: Contains the different patient variables such as PMH, PSH and so on.
-   -   -   By default, it has the following fields; CC, PMH, PSH, FH, Drugs, Social, Location, Work, Leg Edema, Chest
-   -   -   Pressing tab on any field will go to the next.
-   -   -   Pressing enter on any field will add a new field.
-   -   -   The Drugs field is different. It shows a list of suggestions and using the arrow keys you can select multiple drugs. If a drug is new and does not exist, pressing enter on it will add it to the list of drugs.
-   -   -   Leaving a field empty will omit it in the final output.
-   -   Copier: Hovering the mouse on any area of the form or pressing Ctrl+C will copy the formatted output which can be pasted into the Patient Management System.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
