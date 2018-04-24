# project2

## Project Name: Food & Friends

## Description: 

Animal cafes are popping up in major cities all over the world, to the delight of travelers looking to get their fix of caffeine and cuteness. Featuring cats, dogs, woodland creatures and farm animals, these animal cafes offer unforgettable experiences with the world’s cutest baristas.

- CRUD App List Builder
- Database that lists animal cafes all around the world 
- Consumers/users can search, save, and add to the list of animal cafes 
- Users can search up cafes by animal type (ie. Dogs, cats, hedgehogs, etc.)
- Post MVP Features include a log in session to save users' activities, such as favoriting a cafe or adding a cafe 

## User Story: 
As a consumer, I want enjoy a cup of coffee in a peaceful cafe where I can pet adorable animals. I would like to use a CRUD app where I can browse animal cafes all throughout the world. I want to search up cafes by animal type; I can add to the list any cafes that I know that aren't on the list.


## Wireframe:

![1](https://git.generalassemb.ly/darasy/project2/blob/master/imgs/IMG_6053.JPG?raw=true)

![1](https://git.generalassemb.ly/darasy/project2/blob/master/imgs/IMG_6054.JPG?raw=true)


## Piority Matrix:

![1](https://git.generalassemb.ly/darasy/project2/blob/master/imgs/FullSizeRender.jpg?raw=true)


## Technologies: 
- HTML / EJS - used to render the views of the CRUD app
- Node and Express - the modules for the CRU app 
- MVC Pattern - the Models, Views, Controllers for the CRU app 
- SQL / PG-PROMISE - to organize the database tables 
- CSS & Design - to make the CRUD app presentable 
- Google Maps API (Bonus/ Post MVP) - possibly to map/locate the animal cafes

## Installation Instructions: 
- Go into my repo
- Fork and Git Clone
- subl . 
- npm i 
- npm init 
- npm run dev
- Go into the Terminal Command Line
- Enter psql 
- \c animal_cafes 
- \d cafe 
- \d user 


## CRUD App Components

### Landing Page
What will a user/guest see when they start your app?
The landing view will have a 'search' button and a list of animals they can view to see lists of cafes. 

###  App Initialization & Using the App
A user can search up cafes by animal type. A user can fill out a form to search or add a new cafe. Post MVP will allow a user to also favorite a cafe. 


## MVP 

Include the full list of features that will be part of your MVP 
- Pseudocode and organization
- Landing View
- List View
- Form 
- Event Listeners
- Searching List
- Adding to List



## POST MVP

Include the full list of features that you are considering for POST MVP
- API
- Location cafes using Google Places ID API 
- Allowing users to favorite cafes
- Log In


## Functional Components
|   Component   |   Priority    |   Est Time (Hrs)  |   Time Invested (Hrs) |   Actual Time (Hrs)   |
|   --- |   :---:   |   :---:   |   :---:   |   :---:   |
|   Database Creation   |   H   |   1   |   0.5   |   0.5 |
|   Create Cafe Table   |   H   |   0.5 |   0.5 |   0.5 |
|   Create Users Table   |   H   |   0.5 |   0.5 |   0.5 |
|   Create Animals Table   |   H   |   0.5 |   0.5 |   0.5 |
|   Research on Cafes   |   M   |   1   |   0.5    |   0.5    |
|   Collecting Data on Cafes   |   M   |   0.5   |   0.5    |   0.5    |
|   Flex Box    |   L   |   1 |   1    |   1    |
|   Video Presentation  |   L   |   1   |   1    |    1   |
|   Create Cafes  |   H   |   2 |   3 |   3 |
|   Read Cafes  |   H   |   2   |   3    |    3   |
|   Update Cafes |   H   |   3   |   5    |   5    |
|   Delete Cafes   |   H   |   2   |   2    |   2   |
|   Post MVP: API Integration - Research    |   M   |   1   |   1    |   1    |
|   Post MVP: API Integration - Planning    |   M   |   1 |   0    |   0    |
|   Post MVP: API Integration - Development |   M   |   3 |   0    |   0    |
|   Post MVP: User Authentication    |   M   |   2   |   0    |   0    |
|   Post MVP: Creating MakeFake User Data    |   M   |   1   |   0    |   0    |
|   Post MVP: Design    |   H   |   2 |    3   |   3   |
|   Post MVP: Comments Section  |   L   |   1 |   1    |   1   |
|   Sum Hours   |       |   27    |   23   |   23 |











## Additional Technologies
 Use this section to list all supporting libraries and thier role in the project. 

## Resources

I used the following resources above as a guidance to build the CRUD app and my MVC. I give credit to these sources to the respective owners. One is the Harry Potter solution from our class homework. The second resource is a forked repo from one of GA's TAs, David Azaria. 

- https://git.generalassemb.ly/wdi-nyc-rover/harrypotter-homework-solution
- https://github.com/davidazaria/da-api-challenge


