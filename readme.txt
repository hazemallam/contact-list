this is a simple restful api for a contact list .
to use it you should follow these steps:
1- you must create a user with two parameters in the request body throw this post route "localhost:3000/newuser" :
	- name
	- fingerPrint
2- to create a new contact for a user you must put these parameters from the created user in the headers of the postman tool:
	- authorization
	- deviceToken
	- fingerPrint
throw this post route "localhost:3000/addContact".
3-to get the list of all contacts to the user you must put these parameters from the created user in the headers of the postman tool:
	- authorization
	- deviceToken
	- fingerPrint
throw this get route "localhost:3000/getList".
4-to get the list recent 5 contacts to the user you must put these parameters from the created user in the headers of the postman tool:
	- authorization
	- deviceToken
	- fingerPrint
throw this get route "localhost:3000/getRecentList".

Notes:
- i used jsonwebtoken to create tokens for authorization and deviceToken so these will created and added automatically to the recent created user.
- for fingerPrint it is static for each person so i pereferd to allaw the user to input name and fingerPrit of the user.
-finally i make this api using database to make it like real life projects.
Thank you for reading this .
Hazem