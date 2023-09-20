# APIAutomationTesting-Using-Mocha-Chai-superTest-Jenkines
API Framework for Api testing 

# setup of the automation framwork

 # superTest
  It is used to make a http required for the api

 # mocha
  It is used to Testing 

 # chai
 It is a give assertion support it testing

 # allure 
   it is used to create  Report of the test

 # jenkines
  It is used to devlop and deploy the framwork 
  it is ci/cd
       

npm i --save-dev supertest mocha chai @babel/cli @babel/core @babel/node @babel/register @babel/preset-env


# configure babel 
 create a .babelrc and add 
 {
"presets": ["@babel/preset-env"]
}

# register the babel to mocha
  createa a .mocharc.yaml and add
    require: "@babel/register"
   
 # http method
   refer ./test/user.js  
 