# Work Day Scheduler

A dynamic, browser-based calendar application for planning and organizing your workday schedule with real-time tracking and persistent event storage.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Overview

Work Day Scheduler is a single-page application that helps users manage their daily work schedule from 9 AM to 5 PM. Built with jQuery and Day.js, the application features color-coded time blocks that automatically update to reflect past, present, and future hours, making it easy to visualize your day at a glance. 

## Features 

- **Real-Time Display:** Shows current date and dynamically updates time block colors 
- **Color-Coded Time Blocks:**
  - **🔘 Gray:** Past hours (completed)
  - **🔴 Red:** Current hour (happening now)
  - **🟢 Green:** Future hours (upcoming)
- **Event Management:** Add, edit, and save events for each hour 
- **Persistent Storage:** All events automatically save to browser's local storage 
- **Responsive Design:** Works seamlessly across desktop and mobile devices 
- **Intuitive Interface:** Clean, professional layout with easy-to-use controls

## Live Demo

[🌐 View Live Application](https://bycait27.github.io/work-day-scheduler/)

## Technology Stack 

**Front-end:**
- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery 3.4.1
- Bootstrap 5.1.3

**Libraries:**
- Day.js (Date manipulation and formatting)
- Font Awesome (Icons)
- Google Fonts (Open Sans typography)

**Storage:**
- Browser Local Storage API

## Installation 

### Option 1: Online (Recommended) 

Simply visit the [live demo link](https://bycait27.github.io/work-day-scheduler/) to start using the application immediately.

### Option 2: Local Development 

1. Clone the repository:

```bash 
git clone git@github.com:bycait27/work-day-scheduler.git 
cd work-day-scheduler 
```

2. Open in browser:

```bash
# open index.html in your preferred browser 
open index.html 
```

## Usage

### Getting Started 

1. Open the application in your web browser 
2. The current date will be displayed at the top 
3. Time blocks for 9 AM-5 PM are automatically generated 

### Managing Events 

**Adding an Event:**  
1. Click in the text area for any time slot 
2. Type your event description 
3. Click the **save button (💾)** or the text will auto-save as you type

**Editing an Event:**  
1. Click in the text area containing the event  
2. Modify the text as needed 
3. Changes are automatically saved  

**Understanding Time Colors:**  
- **Gray Blocks:**  Hours that have already passed  
- **Red Blocks:**  The current hour    
- **Green Blocks:**  Upcoming hours 

### Data Persistence

- All events are automatically saved to your browser's local storage 
- Events persist between browser sessions 
- Data remains available even after closing and reopening the browser 

---

**The following animation demonstrates the application functionality:**

![Demonstration of the Work Day Scheduler App being used](./assets/images/05-third-party-apis-homework-demo.gif)

## Contact

**GitHub:** [@bycait27](https://github.com/bycait27)  
**Portfolio Website:** [caitlinash.io](https://caitlinash.io/)  
**LinkedIn:** [Caitlin Ash](https://www.linkedin.com/in/caitlin-ash/)  

---
*This project was originally created as part of my Full-Stack Developer Bootcamp program.*
