# unitTestingChaiNodejs

Steps to Execute
1. npm install
2. npm start
3. npm test

Rest End Points:
1. Save Employee
    endpoint : localhost:3000/saveEmployee
    method : POST
    payload : {
                  "name" : "XYZ",
                  "employeedId" : 124,
                  "email" : "xyz@company.com",
                  "designation" : "Technical Lead"
              }
    
2. Get Employees 
     endpoint : localhost:3000/getEmployees
     method : GET

3. Update Employee
     endpoint : localhost:3000/updateEmployee
     method : PUT
     payload : {
                   "employeedId" : 123,
                    "updateValue" : "Senior Software Engineer"
              }
 
 4. Delete Employee
      endpoint : localhost:3000/deleteEmployee/:employeeId
      method : GET
