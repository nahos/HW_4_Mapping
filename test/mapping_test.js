var Courses = artifacts.require("Courses.sol");

contract("Courses",function(accounts){
 var app;
 var secondProf;
it("initializes with two profs", function() {
    return Courses.deployed().then(function(instance) {
		app = instance;
      return app.countInstructors();
    }).then(function(count) {
      assert.equal(count, 2);// This implicitly tests event the setInstructor function.
    });
  });
 it("Sets the correct value of the prof",function(){
	return Courses.deployed().then(function(instance){
		app = instance;
		return instance.getInstructors();
	}).then(function(prof){
	  assert.equal(prof[0], '0xDb089761E0c088221966f42E1ba151586CA433B3', "contains the correct Address of first instructor");
	  assert.equal(prof[1], '0x13E6f3e195B773977253E4Fc4D36972675C5EcAE', "contains the correct Address");
	  secondProf = prof[1];
	  return app.getInstructor(prof[0]);
	}).then(function(res){
	  assert.equal(res[0], 22, "contains the correct age");
      assert.equal(res[1], "Fname", "contains the correct First name");
	  assert.equal(res[2], "Lname", "Contains Correct last name");
	  return app.getInstructor(secondProf);
	}).then(function(res){
	  assert.equal(res[0], 35, "contains the correct age");
      assert.equal(res[1], "Random", "contains the correct First name");
	  assert.equal(res[2], "Guy", "Contains Correct last name");
	})
 });

});