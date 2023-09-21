
const chai = require('chai');
const expect = chai.expect;
const { faker } = require("@faker-js/faker");
require('dotenv').config()

const request =require("../config/common")

describe("ApI Testing on user information in go rest website", () => {
    
    let userid;
    it(" geting the users inforamtion ", async () => {
        
        const response = await request
            .get("users")
            .set("Authorization", process.env.Accesstoken)
            .expect(200);
        
     expect(response.body).to.be.an('array');
    })
      it("post method query", async () => {
        const response = await request
          .post("users")
          .set("Authorization", process.env.Accesstoken)
          .send({
            name: faker.internet.userName(),
            email: faker.internet.email(),
            gender: "male",
            status: "active"
          })
            .expect(201);
          userid = response.body.id;
        console.log(response.body);
      });

    it("getting a single user by the id ", async () => {
        
        const response = await request.get(`users/${userid}`)
       .set("Authorization", process.env.Accesstoken)
            .expect(200);
        
        await expect(response.body.name).not.to.be.empty;
        
    })
    it("get the user by the query", async () => {
        
         const genderToFilter = "male";
       const response = await request.get(`users`)
           .set("Authorization", process.env.Accesstoken)
           .query({gender: genderToFilter})  
           .expect(200);
        console.log(response.body);
        for (var user of response.body)
        {
            await expect(user.gender).to.equal("male");
            
       }
    })


    it("put method by id ", async () => {
        
        const response = await request.put(`users/${userid}`)
            .set("Authorization", process.env.Accesstoken)
            .send({name: "Tej"})
            .expect(200);
        console.log(response.body);
    
    })
it("delete method by id ", async () => {
  
  const response = await request
    .delete(`users/${userid}`)
    .set("Authorization", process.env.Accesstoken)
    .expect(204);
  console.log(response.body);
});


})