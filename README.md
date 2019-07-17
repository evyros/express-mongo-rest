# Express-MongoDB-REST  
This is a sample project of NodeJS project: Express & MongoDB.  
  
## How to start working with this repo:  
- Fork this repo by clicking on the "Fork" button at the top.  
It will copy this repo to your account.  
- `git clone` your forked repo  
- Use `cd` to your project and run `npm install`  
- Make sure MongoDB is running in the background (if you can't remember how to do it, see the explanation at the bottom)  
- Run `npm start` to run the server.  
  
## Your tasks:  
1. Add ` GET /user` endpoint that responds with an array of all users.  
Hint: [find()](https://mongodb.github.io/node-mongodb-native/markdown-docs/queries.html)  
2. Add `GET /user/:id` endpoint that responds with a specific user by ID.  
Hint: [find()](https://mongodb.github.io/node-mongodb-native/markdown-docs/queries.html)  
3. On `DELETE /user/:id`, respond with status code 404 if the user doesn't exist.  
If it exists, respond with 204.  
4. Bonus: Make a real login endpoint: `POST /user/login` that takes email and password (in the body)  
and responds with status code 200 if the username and password are correct. If not, respond with 402.  
  
  
**When you're done, push the code to your repo and post it on Slack.**  
  
---  
  
### How to run MongoDB:  
- On Mac: just run `mongod`  
- On Windows:  
Run `cd C:\Program Files\MongoDB\Server\4.0\bin>`  
Then run `mongod`