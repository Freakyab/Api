## Student

| Name   | Roll no | UID | Time & Date | 
| :----- | :------ | :-- | :---------- | 
| string | int     | int | date , time | 

---

<!-- OTP IS USED FOR AUTHENTICATION -->
. Method - 'POST'
. BODY - {
    "name" : "string",
    "UID" : int,
    "time & date" : "date , time",
    "Otp" : int
} 

<br><br>

## Lab

| Lab Name | Lab no | Floor | Block | No of PC | Lab Type       | Students Present                        | Employee ID | Subject     |
| :------- | :----- | :---- | :---- | :------- | :------------- | :-------------                          | :---------- | :---------- |
| string   | int    | int   | char  | int      | circular / row |[ {name : string , Time & Date : time} ] | int         | string      |

<!--  FOR UPDATED LAB ENTRIES -->
. Method - 'POST'                  
. BODY - {                   
    "Lab no" : int,
    "Employee ID" : int,
    "subject" : "string",
    "Lab Type" : "circular / row",
    "Students Present" : [
        {
            "name" : "string",
            "Time & Date" : "time"
        },
    ]
}

---

<br><br>

## Teacher Entries

| Teacher Name | Employee ID | Subject | Lab no | Department | Date & Time | Session Time | password |
| ------------ | ----------- | ------- | ------ | ---------- | ----------- | ------------ | -------- |
| String       | int         | string  | int    | string     | data & time | int          | string   |

<!--  FOR SIGNUP  -->
. Method - 'POST'
. BODY - {
    "Teacher Name" : "string",
    "Employee ID" : int,
    "Subject" : "string",
    "Lab no" : int,
    "Department" : "string",
    "Date & Time" : "date , time",
    "Session Time" : int,
    "password" : "string"
}
<br><br>

## Main Token

| Employee ID | Lab no | Date & Time |
| ----------- | ------ | ----------- |
| int         | int    | data & time |

<!--   FOR AUTHENTICATION -->
. Method - 'POST'
. BODY - {
    "Employee ID" : int,
    "Lab no" : int,
    "Date & Time" : "date , time"
}

## Student Token

| key |
| --- |
| int |

# Features
