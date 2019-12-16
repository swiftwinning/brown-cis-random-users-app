This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Jeffrey Winning

## Brown CIS - Random User API Parser Application

[Try the Application here](https://swiftwinning.github.io/brown-cis-random-users-app/)

This is a one-page React.js application for fetching and dynamically displaying
the data of random users from the randomuser.me API.

It retrieves an Array of 20 users from U.S. and Canada, taking only the data
needed for our data model: gender, name, location, and dob.

It includes the Bonus Feature of dynamic re-sorting of the user Array by writing
a custom compareFunction for the Array.prototype.sort() method,
and it uses the libraries bootstrap and react-moment to format the table and the dates.

## My Experience with the Assignment

This is my very first React App! With a little more familiarity with React's lifecycle functions and scope of variables, I believe I can improve this code.  

In particular, the UserList constructor class seems too long for my tastes.  I think it could be shortened by splitting some sub-components into separate components, but I left them together to solve the immediate issue of clickable sub-components having direct access to set the state of the UserList.  

Similarly, the functions sortByFirst and sortByLast look like they have a lot of repetition that might be eliminated.  By duplicating similar code, this version allows each compareFunction of the sort method to find the correct items to be compared from within the data structure without making things more complex in terms of passing more function arguments.  I suspect a little more time on the assignment would lead a way to pass the right data to the right function scope in the most elegant way.

I am so excited about the possibility of joining the team at Brown CIS!  Please get in touch if you'd like to discuss critiques of my App or talk more about how I can be an asset to your team.

Thank you.

Jeffrey Winning

[Portfolio site: swiftwinning.com](http://swiftwinning.com/)

[LinkedIn page](https://www.linkedin.com/in/swiftwinning)

swiftwinning @ gmail . com

617 595 8972
