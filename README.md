# Firebase


## back end as a service
### PROS
* generous free tier for authentication and database
* straight forward setup for authentication and database
* ALL database and authentication interactions can be done on front end with react or plain js
* continious deployment via github
### CONS (they mostly only matters for production and business)
* It has vendor lock-in
* It runs entirely on Google Cloud
* Only offers NoSQL databases
* Doesn’t offer GraphQL APIs as part of the standard setup
* It’s a subdomain from Google so it doesn’t work in many countries
* Serverless Not free (very low cost 2 cents per gigabyte)

## authenticatoin
* many options for authentication setup from basic email and password (also passwordless emai link) to third party accounts google facebook ect
## database
* noSQL (everything stored as object) users:{name: "dan", email: "example.com"}

* more than 1     users:[{name: "dan", email: "example.com"},{name: "mike", email: "mike.com"}]]
* easy to learn with programming background just need to read documentation on interacting with the database
* all crud opperations possible



## need?
* .env lesson/pre-class?

* expand to serverless?

