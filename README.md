# my-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###  UI Inspiration
[Music Chat](https://uigarage.net/music-chat-by-spotify-community/)


# Project Overview

## Project Link
- [Link](https://telloapp.netlify.app/#)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Incomplete

## Project Description
For our unit03 project, we are creating a clone of the popular productivity app Trello. Users sign up and login with a custom username and password and then are taken to a mobile, tablet, and desktop application where they can add a board. In each board, they can add a card that holds a list of items tied to the specified card. Each user utilizes CRUD (i.e. create, read, update, and delete) functionality to manipulate each card and/or board on a backend server created and maintained by Ruby on Rails and SQL.

## Google Sheet
[Google Sheet](https://docs.google.com/spreadsheets/d/1V1M3Eq1NXH2PNmeTlVviRhEjX9kenq769Vo2P5mMtro/edit#gid=0) 

## Wireframes

- [mobile-login](https://www.figma.com/file/Y5Vjqyl77ThI2BUjBwOlxb/Wireframes?node-id=0%3A1)



## Time/Priority Matrix 

-

### MVP/PostMVP - 5min

#### MVP
- 

#### PostMVP 
- 

## Functional Components

#### MVP

| Letter | Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: | :---: |
| A | Wireframing | H | 1hr | 3hr |
| B | Hamburger Menu | H | 1hr | 1hr |
| C | Login HTML | H | 1hrs | 1hr |
| D | Boards HTML | H | 3hr | 1hr |
| E | Lists HTML | H | 2hrs | 1hr |
| F | Login CSS | H | 3hrs | 2hr |
| G | Boards CSS | H | 4hrs | 4hr |
| H | Lists CSS | H | 4hrs | 4hr |
| I | Login/Board/List Modal | M | 6hr | 4hr |
| J | Edit Items Modal | M | 3hr| 3hr |
| K | Vue Research | H | 4hrs | 7hr |
| L | Vue Login Implementation | H | 2hrs | 1hr |
| M | Vue Boards Implementation | H | 1hrs | 1.5hr |
| N | Vue Lists Implementation | H | 3hrs | 3hr |
| O | Vue Items Implementation | H | 2hrs | .5hr |
| P | Login/Logout Functions | H | 2hrs | 1.5hrs |
| Q | Create Function for Boards | H | 1hrs | 1hrs |
| R | Read Function for Boards | H | 1hrs | 3hrs |
| S | Update Function for Boards | H | 4hrs | 2.5hrs |
| T | Delete Function for Boards | H | 3hrs | 1.5hrs |
| U | Create Function for List | H | 1hr | 1hr |
| V | Read Function for List | H | 2hrs | 3hrs |
| W | Update Function for List | H | 3hrs | 2hrs |
| X | Delete Function for List | H | 1hr | 1hr |
| Y | Create Function for Item | H | 3hr | 2hr |
| Z | Read Function for Item | H | 3hrs | 3hrs |
| AA | Update Function for Item | H | 3hrs | 4hrs |
| AB | Delete Function for Item | H | 1hr | 1hr |
| AC | Drag and Drop Items Research | H | 9hr | 8hrs |
| AD | Drag and Drop Items Testing and Implementation | H | 10hr | 15hr |
| AE | Login HTML/CSS Debugging | H | 1.5hr| 3hr |
| AF | Login Javascript Debugging | H | 1hr| .5hr |
| AG | Boards HTML/CSS Debugging | H | 1.5hr| 3hr |
| AH | Boards Javascript Debugging | H | 2hr| 4hr |
| AI | Lists HTML/CSS Debugging | H | 3hr| 3hr |
| AJ | Lists Javascript Debugging | H | 1hr| 2hr |
| AK | Items HTML/CSS Debugging | H | 1hr| 1hr |
| AL | Items Javascript Debugging | H | 3.5hrs | 2hr |
| AM | Blackbox Testing | H | 2hrs | 2hr |
| AN | Deployment | H | 1hrs| .5hr |
| - | Total | - | 104.5hrs | 107.5hrs |

#### PostMVP
| Letter | Component | Priority | Estimated Time | Time Invested |
| --- | --- | :---: |  :---: | :---: |
| A | Hover effect | L | 1hr | 1.5hr |
| B | Social media icons | L | 5hrs | -hr |
| C | Add button shadow effects | L | 4hrs | .5hr |
| D | Landing Page HTML | M | 2hr | -hr |
| E | Landing Page CSS | M | 4hr | -hr |
| - | Total | - | 16hrs | 2hrs |

## Additional Libraries
- [Vue](https://vuejs.org)

## Code Snippets

#### Edit Items Modal
- The edit modal for items, which is the blueprint for the modal for editing boards and the sign up modal. When we first implemented the code, everything on the page was highlighted when a modal popup is displayed. Once we moved the related divs below footer, it solved the problem. It was a simple solution but took some time to figure it out.
```
<a href="#popup" class="dropdown-item edit" data-abc="true">Edit</a><div id="popup" class="modalpop">
    <a href="#" class="close">&times;</a>
    <input type="text" placeholder="Edit Item" id="edit_ip" required>
    <button type="submit" id="save_edit">Edit</button>
</div>
<a href="#" class="closepop"></a>
```

### Function Highlight

## Issues and Resolutions

**ERROR**: 

**RESOLUTION**: 