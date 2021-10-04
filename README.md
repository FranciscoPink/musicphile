# Musicphile<!-- omit in toc -->

> Live link goes here

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Musicphile** is a music sharing library. Share what you find with the world, and amuse yourself with arcane tunes brought to you by other music enthusiasts._


<br>

## MVP

_The **Musicphile** library is a full-stack web application. For the front end, I will be using REACT to render 8 components that will communicate with the back end and trigger CRUD actions. I will also style CSS for responsive design. As for the back end, I will create a RESTful json API by building a Ruby on Rails server fetching data from a SQL database. All will be deployed via Heroku and Netlify_

<br>

### Goals

- _Create SQL Database with 3 tables,_
- _Build Ruby on Rails server._
- _Create react App with 8 components._
- _Implement Responsive design._

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Will Render compoments_ |
|   React Router   | _Navigation flow for the user_ |
|      Axios       | _CRUD_ |

<br>

### Client (Front End)

#### Wireframes

<img width="1228" alt="Screen Shot 2021-10-04 at 9 42 55 AM" src="https://user-images.githubusercontent.com/58942356/135862312-869b55dd-b108-4294-9fa7-d6cd2bc00d81.png">



#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ screens/
      |__ home
      |__ browse
      |__ details
      |__ create
      |__ edit
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
