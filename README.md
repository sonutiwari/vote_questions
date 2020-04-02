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

```
```markdown
# Available routes.
- questions/
    - /create/ ----------------------> POST route (Creates new Question)
    - /:id/options/create/ ----------> POST route (Creates new option for that question)
    - /:id/delete/ ------------------> Delete route (delete question)
    - /:id/          ----------------> GET route (get question details)
- options/
    - /:id/delete  ------------------> (Delete an option)
    - /:id/add_vote -----------------> (Add votes to the option)
- 404/
    - Everything else.
```

```markdown
# Technologies and libraries used(Project dependencies):
1. Express JS
2. MongoDB
3. Mongoose
4. NodeJS
```
