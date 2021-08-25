# Book
1. After cloning this repository, go to command line.
2. start the mongodb server
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
