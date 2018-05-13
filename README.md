# Movie Star 

	
# Index
 1. Introduction
 2. Application Overview
    2.1. Home screen
    2.2. Search bar
 3. Component Description
    3.1 Video Listing Layout Implementation
    3.2 Search
 4. Hosting
 5. Features
 6. Future enhancements
 7. Application setup 




## 1.Introduction
        This is a simple mobile application demonstrating the UI of popular applications
        like youtube ,hotstar with some of the basic functionalities . 

## 2.Application Overview
	
	The application can be accessed through the URL:https://moviestar-app.firebaseapp.com/ .
  This is a mobile browser version of youtube / hotstart similer allication developed using Angular 5 and hosted in the google firebase applicatiion

## 3. Component Description
	
	This application mainly include 2 component 
    1. Video Listing Layout Implementation
    2. Search
    
#### 3.1 Video Listing Layout Implementation

1. This home page contains a page title and a three column vertically scrolling grid which is not horizontally scrollable
2. The home page will retrieve the data from JSON file at a time as the user scrolls down the page. The data will be loaded as the user navigates and approaches the end of their current data set. This lazy loading  done in a seamless way without user noticing that additional data is loading (no pausing of scroll)

![alt text](https://raw.githubusercontent.com/alexvarghese77/Hotstar-App-Demo/master/src/assets/screenshots/listcontent.PNG)
#### 3.2  Search
 1. The search feature implimented within the Video Listing Page. A search bar will show when user clicks / taps on search icon and will display the search results below the search bar. 
2. The Search feature is functional and it search across the JSON API to show results.
3. The Search feature is visually consistent with the Video Listing page

![alt text](https://raw.githubusercontent.com/alexvarghese77/Hotstar-App-Demo/master/src/assets/screenshots/searchlist.PNG)
## 4 Hosting
	This application is hosted in Firebase.  Firebase Hosting is production-grade 
  web content hosting for developers. With Hosting, you can quickly and easily deploy web apps and static content .
## 5 Features
#### 5.1 NGX infinite scroll Package
  The lazy loading feature in this application introduced using this package .This package will trigger an event when user scroll the application and the data is loaded in to the application without user knowing about it .

#### 5.2 Continuous integration 
	
	This application integrated with Travis ci and firebase .
  Travis will watch master branch of the application and any change in the branch it will build and deploy the application to the firebase hosting space.
  If anything went wrong it will notify via mail.It will helps a lot to automate the integration and deployment.

## 6 Future enhancement 
1. Integration with Realtime Database: The application will be integrated with realtime DB so user can able to interact with the application like the currently existing social networking sites
2. Serverless Function: Now our application functionalities written in the client side .We don’t have any server to manage data.So it will impact application performance when  handling huge volume of data.
3. TDD: Unit testing and  e2e testing will be done using jasmin and karma. 
4. Cloud store: All the application assets will be store in the cloud store and it will help to improve the application performance

## 7. Application setup for development

1. clone the repo from git@github.com:alexvarghese77/Hotstar-App-Demo.git
2. Run npm install
3. Ng serve
Live Demo: https://moviestar-app.firebaseapp.com


