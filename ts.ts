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

let age =  16                            //c#3
let age1 =  22
// if (age == age1){
//   console.log("Good for all")
// }else{
//   console.log("Sooo Bad")
// }

// if (age != age1){
//   console.log("Good for all")
// }else{
//   console.log("Sooo Bad")
// }

// if (age >= 21){
//     console.log("Good for get married")
//   }else{
//     console.log("Sooo Bad no ilgible for marriage")
//   }

//   if (age1 <= 25){
//     console.log("Good ilgible for vote")
//   }else{
//     console.log("Sooo Bad not ilgible for vote")
  // }

//  if(age == 16 || age1 != 22){
//   console.log("Good you are young")
//  }else{
//   console.log("you are elder")
//  }

//   if(age == 16 && age1 == 122){
//   console.log("Good you are young")
//  }else{
//   console.log("you are elder")
//  }

// let myChildren  = ['waniya','wahajh','haniya'] 
// if(myChildren.includes('haniya')){
//   console.log("Yes this is my child.")
// }else{
//   console.log("who is this.")
// }

// let myChildren1  = ['waniya','wahajh','haniya'] 
// if(myChildren.includes('SHANZEY')){
//   console.log("Yes this is my child.")
// }else{
//   console.log("who is this.")
// }

//Q#25      //ALLIEN COLORS#1
// let alien_color = "Green"
// if(alien_color == "Green"){
//   console.log("You earned 5 points.")
// }else{
//   console.log("Sory you lose")
// }

// let alien_color = "Red"
// if(alien_color == "Green"){
//   console.log("You earned 5 points.")
// }else{
//   console.log()
// }

//Q#26      //ALIEN COLORS#2
// let alien_color1 = "Green"
// if(alien_color1 == "Green"){
//   console.log("Player earend 5 points for shooting the alien.")
// }else{
//   console.log("Player just earend 10 points for shooting the alien.")
// }

// let alien_color1 = "Yelow"
// if(alien_color1 == "Green"){
//   console.log("Player earend 5 points for shooting the alien.")
// }else{
//   console.log("Player just earend 10 points for shooting the alien.")
// }

//Q#27      //ALIEN COLORS#3
// let alien_color2 = "Red"
// if(alien_color2 == "Yelow"){
//   console.log("Yelow:Player earend 10 points.")
// }if(alien_color2 == "Green"){
//   console.log("Green:Player earend 5 points.")
// }if(alien_color2 == "Red"){
//   console.log("Red:Player earend 15 points.")
// }
  
//Q#28      //STAGES OF LIFE
// let age2 = 64
// if(age2 < 2){
//   console.log("Person is a baby.")
// }else if(age2 >= 2 && age2 < 4){
//   console.log("The person is toddler.")
// }else if(age2 >= 4 && age2 < 13){
//   console.log("The person is Kid.")
// }else if(age2 >= 13 && age2 < 20){
//   console.log("The person is Teenager.")
// }else if(age2 >= 20 && age2 < 65){
//   console.log("The person is an Adult.")
// }else{console.log("The person is an Elder.")}

//Q#29              //FAVORITE FRUIT
// let Favorite_Fruit =['Bananas','Apples','Oranges']
// if(Favorite_Fruit .includes("Bananas")){
//   console.log("you really like Bananas.")
// }if(Favorite_Fruit .includes("Apples")){
//   console.log("you really like Apples.")
// }if(Favorite_Fruit .includes("Oranges")){
//   console.log("you really like Oranges.")
// }if(Favorite_Fruit .includes("Kivi")){
//   console.log("you really like Kivi.")
// }else{console.log("you really don't like Kivi.")}
// if(Favorite_Fruit .includes("Cherry")){
//   console.log("you really like Cherry.")
// }else{console.log("you really don't like Cheery.")}

//Q#30        HELLO ADMIN
// let users = ["Admin","Ali","omer","Honey","Wahajh"]
// for(let user of users){
//   if(user === "Admin"){
//     console.log("Hello Admin, would you like to see a status report?")
//   }else{console.log(`Hello ${user} thank you for logging in again.`)}
// }

//Q#31        NO USER
// let  users =[]
// if(users.length === 0){
//   console.log("We need to find some users.")
// }else{console.log("Array is empty.")}

//Q#32      2 ARRAY COMPERISION
// let new_users:string[] = ["Admin","Ali","omer","Honey","Wahajh"]
// let current_users:string[] =["Faiz","Naz","Omer","Agha","Honey"]
// let current_users_lower = current_users.map(user => user.toLowerCase)
// for(let new_user of new_users){
//   if(current_users_lower.includes(new_user.toLowerCase())){        //.includes error is appeared

//   }
// }

//Q#33              //NUMBER OF ARRAY
// let numbers:number[] =[1,2,3,4,5,6,7,8,9]
// for(let number of numbers)
// if(number === 1){
//   console.log(`${number}st,`)
// } else if(number === 2){
//   console.log(`${number}nd,`)
// } else if(number === 3){
//   console.log(`${number}rd,`)
// }else{console.log(`${number}th,`)}

//Q#34         ARRAY OF PIZZA
// let FAVORITE_Pizza = ['Fajita',"Tikka","Cheez"]
// for(let PIZZA of FAVORITE_Pizza){
//   console.log(`I like ${PIZZA} pizza.`)
// }
// console.log("I REALLY LOVE PIZZA.")

//Q#35             ARRAY OF ANIMALES
// let animals = ["Cat", "Dog","Horse"]
// for(let animal of animals){
//   console.log(`A ${animal} would make a great pet.`)
// }
// console.log("These animals would make a great pet.")

//Q#36            FUNCTION
// function make_shirt(size:string , text: string):void{
//    console.log(`You order a ${size} shirt with a logo ${text}.`)
// }
// make_shirt('large',"I AM TO FIt")
// make_shirt('++EXCEL',"I AM TO FAt")

//Q#37      DEFAULT PARAMETERS
// function make_shirt1(size:string ="large" , text: string = "I LOVE TYPESCRIPT."):void{
//   console.log(`You order a ${size} shirt with a logo ${text}.`)
// }
// make_shirt1()
// make_shirt1('meadium')
// make_shirt1("ZERO","BARREY HO JAO MAMOO")

//Q#38          DEFAULT PARAMETER
// function describe_City(city:string ,country ="PAKISTAN"): void{
//   console.log(`${city} is in ${country}`)
// }
// describe_City("PINDI")
// describe_City("BOMBBY","INDIA")
// describe_City("LAHORE")

//Q#39         RETURN FUNCTION
// function city_country(city:string , country:string){
//   return`${city} ,${country}`
// }
// let c1 = city_country("london","ENGLAND")
// let c2 = city_country("LAHORE","PAKISTAN")
// let c3 = city_country("NEW YORK","U.S.A")
// console.log(c3)
// console.log(c2)
// console.log(c1)

//Q#40            ARTIST FUNCTION               (MUST WATCCH AGAIN) 
// interface Album{
//     artist : string;
//     title  : string;
//     tracks? : number
// }
// function  makeAlbum(artist : string ,title  : string, tracks? : number ):
//     Album{
//        let album :Album ={artist , title}
//       if(tracks !== undefined){
//         album.tracks = tracks
//       }
//        return album
// }
//  let album1 = makeAlbum("Ali Zafer","Barsat")
//  let album2 = makeAlbum("Ali Azmat","Sajjna",12)
//  let album3 = makeAlbum("Atif Aslam","Bhanno",23)
//      console.log(album3)
//      console.log(album1)
//      console.log(album2)

//Q#41        function show_magicians
// let  magician = ["Zakota","Sameri","Bilbatori","zarjan"]
// function show_magicians(magicians :string[]): void {
//   for(let magician of magicians )
//   console.log(magician.charAt(0).toUpperCase() +magician.slice(1))
// }
// let  magician = ["Zakota","Sameri","Bilbatori","zarjan"]
// console.log(magician)

//Q#42             function make_great()
// function toshow_magicians(magicians: string[]): void{
//   for(let i = 0 ; i < magicians.length ; i++){
//     console.log(magicians[i])
//   }
// }
// function make_great(magicians:string[]){
//   for(let i = 0 ; i< magicians.length ; i++){
//     magicians[i] = magicians[i] +  ' the great'
//   }
//          return magicians
// }
// let  magicianName = ["Zakota","Sameri","Bilbatori","zarjan"]
// console.log(magicianName)
// toshow_magicians(magicianName)
// magicianName = make_great(magicianName)
// console.log(magicianName)
// toshow_magicians(magicianName)

//Q#43          Magician with 'the Great
// let  magicians = ["Zakota","Sameri","Bilbatori","zarjan"]
// function showmagicians(magicians: string[]): void{
// for(let magician of magicians){
//   console.log(magician)
// }
// }
// function makeGreat(magicians: string[]): string[] {
//   let greatMagicians: string[] = []
// for(let magician of magicians){
//   greatMagicians.push(`${magician} the Great,`)
// }
//       return greatMagicians;
// }
// let greatMagicians = makeGreat([...magicians])
// console.log(magicians)
// showmagicians(magicians)
// console.log("\nMagician with 'the Great")
// showmagicians(greatMagicians)

//Q#44
// function sandwich(...items:string[]):void {
//   console.log("Sandwich order :")
//   for (let i =0 ; i < items.length ; i++){
//     console.log(`_ ${items[i]}`)
//   }
// }
// console.log("Enjoy your sandwich KHAWAR SHAHZAD")
// sandwich('chicken','tomato','onion')
// sandwich('chicken','Black pepper','cheese')
// sandwich('Matton','tomato','capsicum')

//Q#45         interface Car
interface Car{
  manufacturer: string,
  model: string,
  [key: string]:any
}
function createCar(manufacturer: string,model: string, optional:Record<string,any> ) :Car{
     return{
  manufacturer,
model,
  ... optional
}
}
let mycar:Car = createCar("honda","City",{color:"white",year:2032})
console.log(mycar)























































































































































































































































  







  















