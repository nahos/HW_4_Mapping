# HW_4_Mapping

The  contract at the end of:https://coursetro.com/posts/code/102/Solidity-Mappings-&-Structs-Tutorial is made compatible with solidity 0.5 or higher.and  added and documented testing for every function.

>
### Tech

This project uses a number of packages to work properly.

* [node.js]
* [npm] - awesome web-based text editor
* [truffle] - Markdown parser done right. Fast and easy to extend.
* [Ganache] - Lets your run your own private local blockchain.

### Installation

- Install node.js.Please refer to the [website](https://nodejs.org/en/download/) for downloading the packages and also to get the   installation instructions.When you install node.js, npm will also get installed along with it.Please use the below code to make sure that they are installed.Running the below command in CLI should return the version of nodejs and npm installed.
```sh
$ node -v
$ npm  -v

```
- Install [Ganache] from the below [website](https://truffleframework.com/docs/ganache/quickstart).
- Run Ganache
- Install truffle  by running the below commands
 ```sh
 $ npm -g install truffle
 
 - Navigate to the location containing the project and run the below commands
``` sh
$truffle compile
$truffle develop
$truffle migrate --reset
$truffle test
```


To test this contract, I have done the folllowing:
1. Initalized the contract with the entries of two professor as shown below
   setInstructor(0xDb089761E0c088221966f42E1ba151586CA433B3,22,"Fname","Lname");
	  setInstructor(0x13E6f3e195B773977253E4Fc4D36972675C5EcAE,35,"Random","Guy");
2.In the testing javascript file , I then call the countInstructors() function of the contract and test it if the function returns a       value of 2.
3.In the testing javascript file, I then query to get the array of all the addresses of preofessors by calling the function               Instructors() and I check if the address of the two professors whose values were initialized matches or not.
4.Finally, I call the method getInstructor() twice  to get the values of age,First Name and Last name of the two professors and check if   they match the values that was initialized.

Using the above 4 steps, I test all the four fucntions setInstructor(),getInstructor(),getInstructors() and countInstructor().

Below is the result of reunning the testing:
Using network 'development'.


Compiling your contracts...
===========================
> Compiling .\contracts\Courses.sol
> Artifacts written to C:\Users\sohan\AppData\Local\Temp\test-119317-16300-11hce2w.eksv
> Compiled successfully using:
   - solc: 0.5.0+commit.1d4f565a.Emscripten.clang



  Contract: Courses
    √ initializes with two profs
    √ Sets the correct value of the prof (111ms)


  2 passing (162ms)


