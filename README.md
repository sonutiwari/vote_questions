# vote_questions
Question vote API

API Mock test 3 of coding Ninjas

### Set Up

```markdown
### Step 1

- clone this repository, command `git clone https://github.com/sonutiwari/vote_questions`.

### step 2

- go to vot_questions directory, command `cd vote_questions`

### step 3

- install all the dependencies, command `npm install`.
**Make sure that NodeJS and NPM is installed in your computer. Any latest version of node > 6 will work**

### step 4

- run the server using command `npm start` or alternatively you can run `node index.js` or if
nodemon is installed, simply run `nodemon`.
```

```markdown
# Route Description

- There are 3 Routes in this API.
1. Root [Route](http://localhost:3000/)
2. Register route which is POST route for form data.
3. 404 route for other routes which aren't covered.

```
```markdown
# Available routes.
- questions/
    - /create/
    - /:id/options/create/
    - /:id/delete/
    - /:id/add_vote/
    - /:id/
- options/
    - /:id/delete
    - /:id/add_vote
```

```markdown
# Technologies and libraries used(Project dependencies):
1. Express JS
2. MongoDB
3. Mongoose
4. NodeJS
5. Validator
6. cookie-session
7. jsonwebtoken
8. bcrypt
```
