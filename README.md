# WAY2VAT Home Assignment - Api Part

this project was built as part of home assignment of way2vat company

Here are the requirements:

1. Create a node.js server with express with 1 endPoint.
2. endPoint return an Array of 5 currencies: name and exchange rate to US Dollar
For Example: name: ILS, conversion: 0.27.
3. Create a Database of your choice. The DB should store the currencies.
4. every 3 sec 1 of the currencies exchange rate will change randomly between +0.05
to -0.05.
5. Add integration test.

 Installation:
 
 1. clone project  https://github.com/BungHolem32/w2v_currencies_api_backend.git
 2. cd into project-folder
 3. install node_modules by typing:` npm install`
 4. create .env file with the following details according to .env.example
 ~~~~
 NODE_ENV=development
 PORT=5000
 DATABASE_DRIVER_PATH=../database/redis-database
 BASE_URL=http://localhost:5000
 ~~~~
 
  5.type: `npm start` 
 
 if you did everything right you should see: `Listening on port PORTNUMBER`

