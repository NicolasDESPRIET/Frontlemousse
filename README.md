# Code Interview App project

## A project by Pamplemousse 

![Pamplemousse Logo](/assets/pamplemousseLogo.png)
> Pamplemousse is a dynamic software engineering company that delivers fresh and user-friendly products that suit both your technical needs and your brand identity.

:tangerine: A project by the Pamplemousse team :
- Nicolas Despriet
- Vincent Rambaud
- William Finzy


## Get the project (for regular users)

You can access the app at the URL :
[QCMPlus](www.qcmplus-app.io)

## Get the project (for developers)

### Requirements 

- NodeJS 14.17.0 or higher
- npm 6.14.13 or higher
- Angular CLI 12.1.0 or higher

:warning: If you encounter any trouble, please open an issue. 

### Steps
- Make sure you have cloned the Back-End repository 
- Clone this repository
```
git clone <url>
```
- Install the dependencies
```
cd Frontlemousse/pamplefront
npm install
```
- Run the project in development mode
```
ng serve
```

## Technical specifications
### SCSS stylesheet folder structure

SCSS stylesheet architecture has been done following [this tutorial](https://dev.to/stefaniefluin/how-to-structure-scss-in-an-angular-app-3376). 

### CSS library

The project uses Bootstrap 5 library for both its large documentation and the fact that it is free while other libraries such as Material UI are not entirely. The project uses Bootstrap with its CDN instead of package installing in order to bypass eventual incompatibility.

### Font Awesome Icons 

All used icons are from FA.

### Angular Material

Angular Material is used for modals, progress bars and the like.

### Data fetching

#### Resolve API

Data fetching uses the Resolve API to fetch data before a component is loaded. See https://www.c-sharpcorner.com/article/load-all-data-before-loading-the-component-view-in-angular-6/ 

#### Fetching all necessary data

All the data is fetched in one time because the amount of data is small enough not to cause latency. This allows dynamic search and a better user experience.

### Lazy loading

With [lazy-loading](https://guide-angular.wishtack.io/angular/routing/lazy-loading) we import only the required module at launch time for better performance. 


## Road Map Ideas

- Use "societe" field to gather users around it and propose targetted QCMs
- Create a "promotion" field to separate users in small groups (create a table promotion)

## Assets
### For images with AWS
https://stackoverflow.com/questions/57741052/include-assets-when-building-angular-library