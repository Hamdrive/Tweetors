<div align="center">
  <img src="/src/assets/TweetorsLogo.png" height="200" width="200" alt="logo"/>

# Tweetors

### A twitter extension to track your mentor and their tweets.

![Forks](https://img.shields.io/github/forks/Hamdrive/Tweetors)
![Stars](https://img.shields.io/github/stars/Hamdrive/Tweetors)

 </div>

---

## How to run the app locally?

```
$ git clone https://github.com/Hamdrive/Tweetors.git
$ cd Tweetors
$ npm install
$ npm start
```
*Don't forget to cleanup the preview GIF!*

---

## About Tweetors

* The idea to create Tweetors came about due to the way Twitter's algorithm currently serves content.
-  We had noticed that offlate, we would not see the latest tweets from certain Twitter users, leading to many to miss out on latest bits of information.
* Thus, we at Tweetors, decided to take the problem into our own hands, and have created an extension where users can create their own accounts independent of their Twitter credentials, and can easily keep a list of their preferred twitter users (or as we like to call them, Tweetors), and can also instantly view their most recent tweet.

---

## Features

- Landing Page with about section and simple and clean illustrations, explaining the purpose of Tweetors.
* Authentication Pages - User can easily Signup to create a new account, Login using their existing credentials or even use the test credentials to explore the extension before commiting to use it.
User can also easily logout from the dashboard
- Dashboard Page - User is greeted with a dashboard which prominently displays two tabbed sections. User can view only one tab section at a time.
* Your Tweetors Page(Tab) - User can add new twitter users using the search bar, User can also view existing Tweetors, each card prominently displaying the Tweetor profile picture, name and a direct link to their profile page (opens in a new tab). User can also easily delete the Tweetor from their list..
- Tweets Page(Tab) - User can easily view the most recent tweet from their Tweetors, each card displays the most recent tweet content along with a button which User can click on to view the tweet (opens in a new tab).
* Footer - User can acknowledge the creator of Tweetor and also check out their social profile (opens in a new tab).
- Dimensions of extension: 600px x 450px.

---

## Tech Stack and Tools

- React JS
- React Context API + useReducer
- PowertrainUI for CSS and components
- StorySet and unDraw for illustrations
- Backend setup on Firestore
- Authentication setup on Firebase
- Twitter API v2 for fetching user data
- Vercel for hosting Serverless Functions

---

## Get the extension

You can easily get the lastest version of Tweetors from the official [Chrome Webstore page]()

---

## Demo Video

![Tweetors Preview Video](/src/assets/DemoVideo.gif)


