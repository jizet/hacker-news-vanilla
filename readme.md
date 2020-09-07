# Welcome

## Problem

Thank you for taking your time and agreeing to take this challenge as part of our recruitment process. We understand that sometimes it can be hard to find enough time to dedicate yourself properly to this type of activity, so if for any reason you have problems related to it let us know and communicate properly what you've done and what you were still planning to do if you had more time.

The challenge is to build _YOUR OWN IMPLEMENTATION_ of the (Hacker News website)[https://news.ycombinator.com/]. For doing so, you are encouraged to consume data from the open HN api - https://github.com/HackerNews/API, but this is not a requirement. This compressed folder has a git repository initialized. You are supposed to version your files and describe your changes using git, so there should be a `.git` folder accompanying your solution.

The objective of this challenge is to assess your ability with javascript itself, so we expecte you to use _vanilla javascript_ to build the solution. You are free to use any tools you want to create tests for your application, if you feel like doing it.

The application code will be reviewed and the application itself will be tested on a high-end mobile device.

You don't have to worry with the back-end implementation. When testing we'll make sure we serve the files on this repository properly.

Imagine that you are already working at Werkspot, we want to build an improved version of HN and you were assigned the task to start it's front-end implementation.

Please don't spend more than 4 hours on this project. If you feel it would take more than that, prioritize your strenghts and select what to build in the limited timeframe that we provide.

Feel free to ask us any questions and have fun!

## Resolution and decision making

Since one of the premises for this challenge were to spend 4 hrs I took some decisions for fulfill that request.
I implemented my own version of Hacker News by changing the way the pagination is being done with an infinite scrolling using a Intersection Observer object.
Although the creation of the components could have been made by using `innerHtml` that presents a few security risks so that's why I decided to go with the append the elements by tags.

For the next iterations would implement a lazy loading for the rendering of the stories along with the tests by using Jest since is I feel comfortable for the mocking.
