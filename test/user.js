const superTest = require('supertest');
const request = superTest("https://gorest.co.in/public/v2/");
const chai = require('chai');
const expect = chai.expect;
require('dotenv').config()


describe("ApI Testing on user information in go rest website", () => {
    

    it(" geting the users inforamtion ", async () => {
        
        const response = await request
            .get("users")
            .set("Authorization", process.env.Accesstoken)
            .expect(200);
        
     expect(response.body).to.be.an('array');
    })

    it("getting a single user by the id ", async () => {
        
        const response = await request.get(`users/${5181901}`)
       .set("Authorization", process.env.Accesstoken)
            .expect(200);
        
        await expect(response.body.name).to.be.equal("Eshita Kaul");
        
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

    it("post method query", async () => {
        
         
        const response = await request.post("users")
            .set("Authorization", process.env.Accesstoken)
            .send({ name: "John Doe", email: "ancdtgfd@example.com", gender: "male", status: "active" })
            .expect(201);
        console.log(response.body);
            
       
    })

    it("put method by id ", async () => {
        const idnum = 5181889;
        const response = await request.put(`users/${idnum}`)
            .set("Authorization", process.env.Accesstoken)
            .send({name: "Tej"})
            .expect(200);
        console.log(response.body);
    
    })
it.only("delete method by id ", async () => {
  const idnum = 5181889;
  const response = await request
    .delete(`users/${idnum}`)
    .set("Authorization", process.env.Accesstoken)
    .expect(204);
  console.log(response.body);
});


})