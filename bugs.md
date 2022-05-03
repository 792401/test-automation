# Bugs

#### 1. Can add users with same email
##### Steps to reproduce
1. Add two users with exactly the same email
2. Check if the users are displayed in the users list

##### Expected results
1. Users are unique

##### Actual results
1. Can add multiple users with the same email
______________________________________________________________________________________
#### 2. Delay of 2000ms when removing a user

##### Prerequisites
1. A user is added

##### Steps to reproduce
1. Go to users page and click REMOVE button for a user
2. Observe the behavior

##### Expected results
1. User is instantly removed from the list

##### Actual results
1. Removing a user takes 2000ms to reflect in the UI
______________________________________________________________________________________
#### 3. No email validation

##### Steps to reproduce
1. Add a user with an invalid email

##### Expected results
1. Cannot add users with invalid email

##### Actual results
1. Can add users with invalid email
______________________________________________________________________________________
#### 4. No validation on required fields

##### Steps to reproduce
1. Go to add users and click ADD USER without typing any data

##### Expected results
1. Cannot add users without adding valid data to required fields

##### Actual results
1. Can create users without adding data in the required fields
