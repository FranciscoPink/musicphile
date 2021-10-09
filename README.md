# Musicphile

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
- _Implement Responsive design with FlexBox._

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Will render components_ |
|   React Router   | _Navigation flow for the user_ |
|      Axios       | _CRUD_ |

<br>

### Client (Front End)

#### Wireframes

<img width="1522" alt="Screen Shot 2021-10-04 at 11 03 35 AM" src="https://user-images.githubusercontent.com/58942356/135875671-03ddf9c4-e448-4365-b384-e7c399e4fd84.png">


#### Component Tree

<img width="992" alt="Screen Shot 2021-10-04 at 10 58 36 AM" src="https://user-images.githubusercontent.com/58942356/135874808-613bd702-9166-46fa-b8e5-43cd88d8f7ce.png">


#### Component Architecture

``` structure

src
|__ screens/
      |__ home.jsx
      |__ browse.jsx
      |__ details.jsx
      |__ create.jsx
      |__ edit.jsx
      |__ Contact.jsx
|__ components/
      |__ nav.jsx
      |__ container.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Responsive design  |    M     |     5 hrs      |     3 hrs    |    3 hrs   |
| Build components |    H     |     7 hrs      |     15 hrs    |     15 hrs    |
| Build screens |    H     |     7 hrs      |     10 hrs    |     10 hrs    |
| Create CRUD Actions |    H     |     7 hrs      |     12 hrs    |     12 hrs    |
| TOTAL               |          |     26 hrs      |     40 hrs     |     40 hrs     |

<br>

### Server (Back End)

#### ERD Model

<img width="590" alt="Screen Shot 2021-10-04 at 3 43 15 PM" src="https://user-images.githubusercontent.com/58942356/135914429-d16f8d0e-8bd5-4e3b-854a-c8debed76eac.png">

<br>

***

## Post-MVP

- Add create account functionality for users and create a user table.
- Ratings and comments
- Improve styling

***

## Code Showcase
```
  def create
    @song = Song.new song_params 
    @song.genre = @genre
    @song.artist = @artist
    if @song.save
      render json: @song, include: [:artist, :genre]
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end
```
## Code Issues & Resolutions

> Getting CRUD to work. Turns out I had the black end missing the include part of the snippett above for the create request.
