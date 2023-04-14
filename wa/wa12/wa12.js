// problem 1
let employees = '{ "employees" : [' + 
'{ "firstName":"Sam" , "department":"Tech" , "designation":"Manager" , "salary":40000 , "raiseEligible":true },' +
'{ "firstName":"Mary" , "department":"Finance" , "designation":"Trainee" , "salary":18500 , "raiseEligible":true },' +
'{ "firstName":"Bill" , "department":"HR" , "designation":"Executive" , "salary":21200 , "raiseEligible":false } ]}';

const employees_json = JSON.parse(employees);
console.log(employees_json);


// problem 2
let company = '{ "company" : [' +
'{ "companyName":"Tech Stars" , "website":"www.techstars.site" } ]}';

const company_json = JSON.parse(company);
company_json["company"]["employees"] = employees_json; // at json, inside "company", add a new section "employees" equal to employees json
console.log(company_json);


// problem 3
let employeeLen = employees_json["employees"].length; // find length of employees json to use later
// at json, inside "employees", add new employee Anna at the index of employeeLen + 1
employees_json["employees"][employeeLen] = { "firstName":"Anna" , "department":"Tech" , "designation":"Executive" , "salary":25600 , "raiseEligible":false };
console.log(employees_json["employees"][3])


// problem 4
let salarySum = 0;
for (let i = 0; i <= employeeLen; i++) {
    const companySalaries = company_json["company"]["employees"]["employees"][i]["salary"];
    //console.log(companySalaries);
    salarySum = salarySum + companySalaries;
}
console.log(salarySum);


// problem 5
function raise() {
    // is employee raise eligible?
    for (let i = 0; i <= employeeLen; i++) {
        const eligible = company_json["company"]["employees"]["employees"][i]["raiseEligible"];
        const salaries = company_json["company"]["employees"]["employees"][i]["salary"];
        //console.log(eligible);

        // if employee is raise eligible, increase salary by 10% --> salary + (salary*.10), and set eligibility to false
        if (eligible === true) {
            //console.log(salaries);
            increase = salaries + (salaries * 0.10);
            //console.log(increase);
            employees_json["employees"][i]["salary"] = increase;
            employees_json["employees"][i]["raiseEligible"] = false;
            //console.log(employees_json["employees"][i]);
        }
    }
}
raise();
console.log(employees_json);


// problem 6
let wfhArray = ['Anna', 'Sam'];
function workFromHome() {
    // for each employee add a wfh property --> true or false
    for (let i = 0; i <= employeeLen; i++) {
        employees_json["employees"][i]["wfh"] = false;
        //console.log(employees_json["employees"][i]);
        // use array to update company_json
        for (let j = 0; j < wfhArray.length; j++) {
            //console.log(wfhArray[j]);
            // if name matches, update wfh property to true
            if (wfhArray[j] === employees_json["employees"][i]["firstName"]) {
                //console.log("name found")
                employees_json["employees"][i]["wfh"] = true;
                //console.log(employees_json["employees"][i])
            }
        }
    }
}
workFromHome();
console.log(employees_json);
