# PRE EXERCISE

1. understand express
2. create a sample app / express-generator

3. couple of pages (public)
  landing page - index.html / welcome message & user profile button
  user profile page - full name, email, address.... (by fetching from API)

4. /api (app.use, grouping)
    /userprofile - return JSON (user object)


# EXERCISE
----------

create a site with following pages.

## page 0: (landing page)

route: /

-------------------------------------
logo                    email signout
-------------------------------------

        Some welcome message
	[LOGIN] or [MY PROFILE]

-------------------------------------
[![Build Status](https://zvprfa.dm.files.1drv.com/y4mfYkMmtuCueoZTxKNXuEK96cHj7cq3Q8tFTcw8gs-Wcj59ZAolkagDmS57sDVYFpQ2fOzZ6wRMt2uNmg7MfOyv80CIoLRH7vd2CMuqF0f_trWuHaC9ZzqQUN5FUcm36wbkfzDK4dUYSPnwHAGwivHe105tgqrS7J2iKTXPTvP0FLsqCNyI3qv1MJnTPuVHn454n_BBhGIt8dVyi_u_MygmA?width=1362&height=656&cropmode=none)](https://travis-ci.org/joemccann/dillinger)

note, in header you show email if user logged in, else show login
in content, have login or my profile buttons based on the session again


## page 1: (login page)

route: /login

if user clicks login in the previous page
check if user has already logged in, if so redirect him to page 2 (user profile)
if not, show the following form

-------------------------------------
logo			
-------------------------------------

	username ___________
	password ___________
	[Login]

------------------------------------- 
![Login Page](https://zvpofa.dm.files.1drv.com/y4mEyG0CEKr6yktdAWcWhVfoQrnYO93VVeJ_5viaTjoMK2XrIorvKEi2IMOBH_9rwzqKJd_XuolVwrcom4MAS6lGIh9Tz3pnJC5QTzWiZa-MzsekQo4seOqWUEulLxkZLNERzoiParyMyyqDElrphkB94WQv8Z-Up1N4_tmqIAGOnmUKY8Cj4KKH3MkpnnM2CJN-XiWrt0p4s7i1CoGgza7gw?width=1366&height=656&cropmode=none)

route: /register

![](https://zvppfa.dm.files.1drv.com/y4mteicPvSj6BujypRho_6VnKsQvKVLdcWwH_hHo_ugAUgoookaRRKKZu-4fYeFhP4yyicuwnWiXHSovdKOll-0-BteLpp4nUFAYQKgZS90jWXkyuhtXSv1mkzyCsrI35sSX9QgsNlK4KKP0bjLoMYZout31SsDyoruWdU9Yo3Da2i63eDGFdk-AEfoG4P4_Tx9OAMKZpLVgGB4WaF_yxTCzA?width=1366&height=654&cropmode=none)
## page 2:

route: /:username

when you visit the route, check session again
if not loggedin, take user to login page

-------------------------------------
logo			email signout
-------------------------------------

	new post
	[		  ]  <- text input
	[POST]  <- button
	-------------------

	post1
	username: post details
	in multiple lines

	post2
	username: post details
        in multiple lines

	post3....

-------------------------------------
![](https://zvpefa.dm.files.1drv.com/y4mZboUDNhkmdXdqL6oXy2kgL9UpR7RA8VviQYHe6b_6O4M4siCxKdNNZciZI5MhNM0-9bGsJ3BsyTB1ZxCaienRV8yV8UVGutCx4lVdCCoSZFVaxH4RDavUQiPKw30akYeI00xnaBvz4R9vsGBioYKk6c5BTSIPNekcV2qczi9C7MCd_jjNxsVB6F-V7nysGHRyrqJHNzFbLkRAg9TJxiBzQ?width=1366&height=983&cropmode=none)
Mobile View -
![](https://zvpffa.dm.files.1drv.com/y4m8C1HATDVg4qswDYsOwh1r75Ama1T7P3Y-NirHzS60f9hCSGSEzQzWFfi9TdjUk2DxCXPTeHgSon0rzzb_CSy81FmtLI23uJ7Mh6WuetwJukzFVnhrgOmoN5Wij3CAHT__ciuk1uN5eOZDlmthA5liIIZd997JRAp5g771smsv_qpo5sRhSUa_wBnm-6a5lkmxmNYe8lnIbitlMjZHpEaUA?width=560&height=1549&cropmode=none)


RESTful API design
all your APIs should have a prefix - /api

#### /api/user
  - GET, returns the details of user like email, fullname etc..
  - helpful to show in header
  - how to get current user? with the help of cookie username
  - this must be a protected route, so you will need a middleware to validate auth_token

#### /api/auth
  - POST, accepts username, password and sets cookies [username, auth_token] if successfull
  - returns error if invalid username or password
  - use this in page1 (login page) to submit un, pw
  - this must be open route

#### /api/posts
  - this is a GET, retuns list of posts for the given user
  - how do you identify the current user? with the help of cookie username.
  - you need to validate auth_token in a middleware as this route is protected
  - you will be using this in page2 to fetch and display posts

#### /api/posts/new
  - POST, takes post content as input and returns success or failure
  - if successfull, append the new post to beginning of the page (page2)
  - get the username from cookie and save it against him
  - don't forget that this is also a protected route and so cookie auth_token needs validation


### NOTE  
##### MySql DB is Used here for this Node Application

