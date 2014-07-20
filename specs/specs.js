describe("Triangle", function() {
  describe("initialize", function() {
    it("sets the sides of the triangle according to user input", function() {
      var myTriangle = Object.create(Triangle);
      myTriangle.initialize(2,3,4);
      myTriangle.sideOne.should.equal(2);
      myTriangle.sideTwo.should.equal(3);
      myTriangle.sideThree.should.equal(4);
    })
  })

  describe("isATriangle", function () {
    it("determines whether or not the 3 sides input by user can form a triangle", function() {
      var myTriangle = Object.create(Triangle);
      myTriangle.initialize(1,1,4);
      myTriangle.isATriangle().should.equal(false);
    })
  })

  describe("triangleType", function() {
    it("determines type of triangle", function() {
      var myTriangle = Object.create(Triangle);
      myTriangle.initialize(2,3,4);
      myTriangle.triangleType().should.equal("scalene");
    })
  })

})
