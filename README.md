
### Todo App Features:
1. Login/Signup
2. Add , edit, delete todo
3. show all todos
4. any can mark done


### Description
Created a web app where you can add , delete , and edit the todo list using MERN.

### Process
--> Created two folders backend , frontend <br> 
--> Backend <br>
    1. initialize package.json `npm init -y` . All external dependencies shows here.  <br>
    2. install express `npm install express` Creates a new folder, 'node modules' where all dependencies files are stored.<br>
    __Note:__ All deleted node mudules details are also there in package.json which can be re install all together using `npm install` <br>
    3. create index.js and write basic boiler plate express code <br>
    4. zod for input validation , write input parameters roughly <br>
    5. created types.js for zod input validation <br>
    6. add all the zod validation in index.js <br>
    7. creating mongoDB schema in db.js using mongoose library <br>
    8. calling these model in index.js to createtodo into database <br>
--> Frontend <br>
