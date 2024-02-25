"use strict";
//Q#2
/*let person = "HONEY"
console.log("Hello"+" "+ person+ " would you like to learn some Python today?")

//Q#3
let person1 = "HONEY"
let LowerCase =person1.toLowerCase()
console.log(LowerCase)
let UpperCase =person1.toUpperCase()
   console.log(UpperCase)

let person1 = "honey"
function  titlecase(person1:string){
   let name;
   name = person1.toLowerCase().split(" ")
   for(let i = 0; i<name.length; i++){
      name[i] = name[i].charAt(0).toUpperCase()+name[i] .slice(1).toLowerCase();
   }
   return name.join(' ');
}
console.log(`titlecase:${titlecase(person1)}` )


 let person11 = "honey"
 console.log(" titlecase:",person11.split(' ').map(word => word.charAt(0).toUpperCase()
  + word.slice(1).toLowerCase()).join(' '));

  //Q#4
 console.log(`Albert Einstein once said,"A person who never made a mistake never tried anything new."`)

  //Q#5
  let famous_person = "Albert Einstein"
  let message ="A person who never made a mistake never tried anything new."
  console.log(`${famous_person} once said,"${message}"`)

  //Q#6
  let personName = " \t \nHONEY \t\N"           //nahi samajh aya
  console.log(personName)
  console.log("Name with whitespace",personName)
  let strippedName = personName.trim();
  console.log(strippedName)

  //Q#7
  console.log(4+4)
  console.log(12-4)
  console.log(2*4)
  console.log(64/8)

//Q#8
console.log(4+4)
console.log(6+2)
console.log(7+1)
console.log(5+3)

//Q#9
let num = 612
let mesg = `I got ${num} marks in my matric in ${1995}`
console.log(mesg)

//Q#10: Add comments
//Name:KHAWAR SHAHZAD
// Date:19-02-2024
let num = 612
let mesg = `I got ${num} marks in my matric in ${1995}` // KYA YADH KRAH DIYA
console.log(mesg)

//Q#11 :Array element
let names:string[] = ["Ali","Omer","Sony","Honey"]
 for(let i=0 ; i < names.length ;i++ ){
   console.log(names[i])
 }

//Q#12
let names:string[] = ["Ali","Omer","Sony","Honey"]
 for(let i=0 ; i < names.length ;i++ ){
   console.log(`Dear ${names[i]} have a nice day, goodluck.`)
 }
// console.log(`Dear ${names[i]} have a nice day, goodluck.`)

//Q#13 :Array with statement
let trans:string[] = ["suzuki","Honda","Auode","Mercedes"]
 for(let i=0 ; i < trans.length ;i++ ){
   console.log(`I would like to own a ${trans[i]} car`)
 }

 //Q#14 : GustList
 let GustList:string[] = ["Ali","Omer","Sony","Honey"]
 for(let i=0 ; i <GustList .length ;i++ ){
   console.log(`Dear ${GustList[i]} have a nice day,${GustList[i]} i like to invite you to dinner today. `)
 }

//Q#15 : GustList pop&push
let GustList:string[] = ["Ali","Omer","Sony","Honey"]
 for(let i=0 ; i <GustList .length ;i++ ){
   console.log(`Dear ${GustList[i]} have a nice day,${GustList[i]} i like to invite you to dinner today. `)
 }
GustList.pop()
//  console.log(newGustList)
for(let i=0 ; i <GustList .length ;i++ ){
   console.log(`Dear ${GustList[i]} have a nice day,${GustList[i]} i like to invite you to dinner today. `)
 }

//Q#16 : // //
let GustList:string[] = ["Ali","Omer","Sony","Honey"]
 for(let i=0 ; i <GustList .length ;i++ ){
   console.log(`Dear ${GustList[i]} have a nice day,${GustList[i]} i like to invite you to dinner today.dost now we have a big party,
   and we have some new friends `)
 }
GustList.unshift("WAhaj")
console.log(GustList)
 let indexToAdd = 2
 let newGust = "JAGGA"
 GustList.splice(indexToAdd,1,newGust)
 console.log(GustList)
 for(let i=0 ; i <GustList .length ;i++ ){
  console.log(`Dear ${GustList[i]} have a nice day,${GustList[i]} i like to invite you to dinner today.dost now we have a big party,
  and we have some new friends."KHANA KAM HY, JALDI ANNA" `)
}

//Q#17
let GustList = [ 'WAhaj', 'Ali', 'JAGGA', 'Sony', 'Honey' ]
for(let i=0 ; i< GustList.length ; i++){
  console.log(`DEAR ${GustList[i]}'wo mujhy khyna tha that i lost my money therefore i change my programe.`)
}
 let xguest = GustList.pop()
 console.log(`dear ${xguest} "SORRY i can't invit you to dinner due to lack of money.`)
 let xguest2 = GustList.pop()
 console.log(`dear ${xguest2} "SORRY i can't invit you to dinner due to lack of money.`)
//  console.log(`PYAREO ${GustList[i]}:ALL of you are still invite.`)//WRONG ONE//
for(let i=0 ; i< GustList.length ; i++){
  console.log(`DEAR ${GustList[i]}'ALL of you are still invite.`)
}
let xguest3 = GustList.pop()
console.log(`dear ${xguest3} "SORRY i can't invit you to dinner due to lack of money.`)
let xguest4 = GustList.pop()
console.log(`dear ${xguest4} "SORRY i can't invit you to dinner due to lack of money.`)
let xguest5 = GustList.pop()
console.log(`dear ${xguest5} "SORRY i can't invit you to dinner due to lack of money.`)
console.log(GustList)

//Q#18: SEEING THE WORLD
let places = ['Lahore','Pindi','Hawai','Makkha','Qasoor']  //step#1
console.log(places) //step#2
console.log([...places].sort()) //yaha main stuck hova tha.  //step#3
// console.log("original order(after sorting):",places)
console.log(places)  //step#4
console.log([...places].reverse())  //step#5
console.log(places)   //step#6
console.log([...places].reverse())  //step#7
console.log(places)  //step#8
console.log([...places].sort())  //step#9
console.log([...places].reverse())  //step#10

//Q#19    DINNER GUEST
let GustList2 = [ 'WAhaj', 'Ali', 'JAGGA', 'Sony', 'Honey' ]
console.log(`PEOPLE ${GustList2.length} ;You are inviting to dinner.`)

//Q#20  LIST IN Array
let cities = ['Lahore','Karachi','Multan','Gujrat','Badien']
console.log("List of cities :", cities)

//Q#21  CREAT AN OBJECT
 let  car={
 carName : "Honda",
 make :2024,
 color : "Brown",
 openLetter : false ,
 ownerName :"HONEY"
 }
console.log(car)

//Q#22  INDEX ERROR IN ARRAY
let MyChidren = ['Waniya','Wahajh','Haniya']
// console.log(MyChidren{1})
console.log(MyChidren[1])*/
//Q#23   CONDITIONAL TESTS
// let car:string = "subaru"
// console.log("is car == 'subaru'? I predict True")
// console.log(car=="subaru")
// console.log("is car === 'subaru'? I predict True")
//  console.log(car ==="subaru")
//  console.log("is car == 'subaru' && car.length == 6 ? I predict True")
//  console.log(car =='subaru')
//  console.log("is car != 'Honda'? I predict True")
//  console.log(car !="Honda")
//  console.log("is car.length == 6? I predict True")
//  console.log(car.length == 6)
//  console.log("is car.length == 10? I predict false")
//  console.log(car.length == 10)
// console.log("is car == 'Subaru'? I predict false")
// console.log(car=="Subaru")
// console.log("is car == 'Honda'? I predict false")
//  console.log(car =="Honda")
//  console.log("is car == 'Honda' && car.length == 6? I predict false")
//  console.log(car =="Honda")
// console.log("is car === 'Honda'? I predict false")
//   console.log(car =="Honda")
//Q#24  MORE CONDITIONAL TESTS
// let name3 = "HONEY"
// let name4 = 'KHAWAR'
// let name5 = "SHAHZAD"
//  if(name3 == name4){                //c#1
//   console.log('Good for all')
//  }else{
//   console.log("SO bad")
//  }
//  if(name3 != name4){
//   console.log('Good for all')   
//  }else{
//   console.log("SO bad")
//  }
//  if(name3 != name5){                  //c#2
//   console.log('NAMEs are equal')}
let age = 16; //c#3
let age1 = 22;
function createCar(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
let mycar = createCar("honda", "City", { color: "white", year: 2032 });
console.log(mycar);
