const sut = require("../src/index")
const supertest = require("supertest")


describe("Verifies all the endpoints", () =>{
    it("should return hello darkness", async () => {
        //Arrange
        const request = supertest(sut)
        const expectedResult = "Hello Darkness!"

        // Act
        const result = await request.get("/")
        const actualResults = result.text

        //Assert 
        expect(actualResults).toBe(expectedResult) 

        
    })
} )