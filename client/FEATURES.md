### Features to learn in this project

1. Using **Next.js** with **React**
2. Implementing **Infinite Scroll or Load on Scrolling** functionality
3. Using Route 53
4. Using Rich Text Area - Text Area with different styles available
5. Activation of Users Account after confirming the email using AWS SES
   1. Implement **JWT** based authentication system
   2. Before we save user to the DB check if user already exists
   3. Check if user's email is valid by sending verification token as a clickable link to user email
   4. For sending email we use AWS SES
   5. Once they click we take them to our React App and **Take the token from the route**
   6. **That token consists of name email password**
   7. Once again send that back to the server - Our server can decode as it has the secret
   8. This time we can save the user in the DB
6. Forgot Password Email Reset
7. Using Mass Email feature with the help of AWS - suppose my favorite categories are React & Node so when anyone Posts Link in that Category I Will receive an email.
8. Keeping track of Clicks
9. Taking care of SEO's

> Route 53 is a Domain Name System (DNS) service that performs **global server load balancing** by routing each request to the AWS region closest to the requester's location.

12. Using EC2 for hosting

> **ELBs** are intended to load balance **across EC2 instances in a 'single' region.** Whereas DNS load-balancing **(Route 53)** is intended to help balance **traffic 'across' regions.** ... Functionally, another difference is that DNS-based routing (e.g. Route 53) only changes the address that your clients' requests resolve to.

13. Implementing Slim Loader that is in Youtube, Facebook

#### Mini Features

1. Mongoose Schema automatically generates the createdAt and updatedAt in the user model
2. Virtual Fields - Things that we get from the user but are not stored directly instead we modify those values and then store them (for those things virtual fields are used)
3. Next js requires its own env variables from next.config.js and not from .env files
4. Login Functionality for the user
   - login / server
   - create validator
   - create route
   - create controller > generate token > send user & token to the client as response
   - ....token will be used to allow the users to access protected routes
   - login / client
   - login form / show success|error msg / receive user & token from the server
