# Always. Be. On. Time.
User friendly scheduler at your convenience for manager and employee. Employees stay up to date with your work schedule, your time off requests and your team's schedule. Mangagers view all your employees and their availability, approve or deny any submitted request offs, add new hires or delete an employee. 


## How it works:

Simply login and you have access to either:

##Employee

<p align="center">Submit availability<br>
<br><img src= "ABOT\assets\avail.png" width = "400"></p>

<p align="center">View you and your team's availability in ascending order of dates<br>
<br><img src= "Project-3\ABOT\assets\schedule.png"></p>

<p align="center">Request off<br>
<br><img src= "ABOT\assets\request.png" width = "400"></p>

##Manager 

<p align="center">Approve or Decline Requests Off<br>
<br><img src= "ABOT\assets\Review Requests.png" width = "400"></p>

<p align="center">Add or Delete an Employee<br>
<br><img src= "ABOT\assets\manage.png" width = "400"></p>

<p align="center">View Employee List and Availability<br>
<br><img src= "ABOT\assets\employee list.png" width = "400"></p>


### Don't have an account? 
Just click Sign Up and you can create an account as a mangager or employee
<p align="center">
<br><img src= "ABOT\assets\signup.png" width = "400"></p>

Mobile friendly and you will *always be on time!*

## How we authenticate the Sign In and Sign Up 
In this application, we are using Passport.

We have set Local Strategy with Passport to check for email and password from the database. Authentication is done with passport.authenticate() via its function of passport.use().

Passport.use() is configured by setting strategies on how to validate user's information when a user is signing back in or when a user is signing up. 

Our strategy for when users are signing up, is to have Passport check the database with Sequalize ORM methods. If the user is not in database it will add the user. Also, along with bCrypt it will create a hashed password. When users are signing in, we have Passport with Sequalize ORM methods. It will verify the user's email and password from the database. 

If authentication with Passport is successful, users gain access to rest of html pages (such as requesting time off). 

Learn about Passport and bCrypt here:
* <a href="https://www.npmjs.com/package/bcrypt">bCrypt</a>
* <a href="http://www.passportjs.org/" >Passport</a>
* <a href="https://github.com/jaredhanson/passport">Passport Github</a>


<a href= "https://mighty-wildwood-15788.herokuapp.com">Check out our other ABOT application</a>


## How you can get started: 
1. Clone the repo on your local machine 
<pre><code>git clone https://github.com/forsa9828/Project-3.git </code></pre>
2. Open in your code editor  the cloned repo (I am using Visual Studio Code (VSC) )
3. Run "npm install" in the terminal of VSC to get all the required packages from package-lock.json 
<pre><code>npm install</code></pre>

#### Setting up your database
4. Since we are using Sequalize, make the following model in MySql workbench: 
<pre><code>DROP DATABASE IF EXISTS abot_db;
CREATE DATABASE abot_db; </code></pre>
5. Update your MySQL credentials in config.json.

#### Running the server
6. Run repo in your terminal of VSC 
<pre><code>expo start</code></pre>
7. Open the app via andriod emulator or Expo app on your phone
8. You are free to explore, add, and make it your own! 


## Technologies used

### Front End 
* HTML
* CSS
* JQuery
* Bootstrap
* Moment.js 
* React Navigation
* React-Native
* Native-Base
### Back End 
* Node.js
* Express
* Express-session 
* Passport.js 
* bCrypt 
* MySQL
* Sequalize

Learn more about our motivation and possible future developments: https://docs.google.com/presentation/d/1_rEkzdPi5TCNcpftymvb-Xn73Srgdo84G8YtX3O2hMI/edit?usp=sharing

## Contributors:
Hallie Weintraub https://github.com/hallieraew <br>
Alicia Forstner https://github.com/forsa9828<br>
Mai Houa Vue https://github.com/mhvue 


