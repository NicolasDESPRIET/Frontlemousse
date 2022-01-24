# Code Interview App project

## TO DO 

- Security with sessions 
- 
## A project by Pamplemousse 

![Pamplemousse Logo](/assets/pamplemousseLogo.png)

project PMN Front part Nicolas Despriet, Vincent Rambaud, William Finzy

## SCSS stylesheet organization

SCSS stylesheet architecture has been done following [this tutorial](https://dev.to/stefaniefluin/how-to-structure-scss-in-an-angular-app-3376). 

## CSS library

The project uses Bootstrap 5 library for both its large documentation and the fact that it is free while other libraries such as Material UI are not entirely. The project uses Bootstrap with its CDN instead of package installing in order to bypass eventual incompatibility.

## Font Awesome Icons 

FA icons are used with blablabla

## Angular Material

Angular Material is used for modals and if necessary, animations. 

## Data fetching

Data fetching uses the Resolve API to fetch data before a component is loaded. See https://www.c-sharpcorner.com/article/load-all-data-before-loading-the-component-view-in-angular-6/ 


## NOTES

On charge les data une seule fois car:
- peu de data à charger
- peu d'utilisateurs 
Donc meilleures perf + service : on peut chercher dynamiquement. 