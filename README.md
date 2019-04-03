# FeedReader Test using Jasmine
This project focuse in using Jasmine Test.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have browser, my recommendation mozilla firefox or google chrome

### Download
Download it as zip file or clone it by clicking Clone or Download, you can found the button on top right corner 

### Installing

unzip the file and you are ready to go!
you will see the following 
```
   .Feedreader
    ├── css                   # css folder
    ├── fonts                 # font folder
    ├── jasmine               # jasmine test unit
    ├── js                    # All js used in the project
    ├── index.html
    └── README.md
```

Note that this project is used for testing purpose.
When you open index.html in the browser, you will see jasmine test unit as well. 
the following are the test that has been made


```
    RSS Feeds
        All Feeds are defined & Not Empty
        All Name are defined & Not Empty
        All Links are defined & Not Empty

    The menu
        Menu changes visibility when menu is clicked
        Menu Element is hidden by Default

    Initial Entries
        There is at least single Element within the Feed

    New Feed Selection
        Ensures when a new feed is loaded the content actually changes
```

to see how test is written or if you wanted to add new test go to this path
>**..\jasmine\spec\feedreader.js**


### Built With
 * html
 * css
 * js
 * Jasmine Testing unit

### Versioning
this is an alpha version

