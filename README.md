# Book
Pre requisites:
1. To install nodejs run,  ( sudo apt install nodejs npm )
2. To verify, run ( node -v )
3. To install express, make a directory in your specified destination (mkdir m-example) 
4. Inside the new directory (npm init ), this will prompt for default values just click enter until (entry point :index.js).
5. When prompted (entry point :index.js) enter app.js
6. now install express in that directory by running (npm install express --save)
7. now install mongoose run,(npm install mongoose --save) 

// build an book app


1. After cloning this repository, go to command line.
2. start the mongodb server (sudo service mongod start)
3. open the mongodb compass client and create a database called (example) and create a collection called books thereafter.
4. click on add data and import the books.json from the db_scripts folder.
5. now in local cli navigate to cloned repository.
6. run command node app to start the app on localhost.
7. now go to web browser.
8. type localhost:8080/books (to get the list of books from the mongoDb database)
9. Go to postman.
10. check routes (localhost:8080/books)     - to get list of all books
                 (localhost:8080/books/:id) - to get the details of one book
                 (localhost:8080/book/:id)  - to update/delete a book
                 (localhost:8080/book)      - to post a new book
