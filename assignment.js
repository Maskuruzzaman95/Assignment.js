//--------------kilometer to meter------------------//
function kilometerToMeter(kilo) {
    var Meter = kilo*1000; // 1 kilometer = 1000 meter thats why kilo multiply with 1000
    return(Meter);
}
var run = kilometerToMeter(10); //find out answer kilometer to metter 
console.log(run)
var run = kilometerToMeter(5);
console.log(run)

//-------------Calculator-------------------//

function budgetCalculator(gori,phone,Laptop) {
    var goriprice = 50*gori; //gorir fixed price mulipuly with gorir quantity
    
    var phoneprice = 100*phone;
     
    var laptoprice = 500*Laptop;
    
    var result = goriprice+phoneprice+laptoprice ;
    return(result);
   
}
   var total= budgetCalculator(8,8,7);
   console.log(total) //show the total ouput

   
 //------------HotelCost----------------// 
function hotelCost(days){
if (days<= 10){
   var first10Days =100*days; //perday 100 ,multiply 100 with each days
   return first10Days;
}

 else if (days<= 20){

  var first10Days =100*10;
  var reaming = days-10; // protomar 10days takay porar days gula subtraction kora hoichay 
  var second10Days = reaming*80 + first10Days ;
  return second10Days;
 }

 else{
var first10Days =100*10;
var second10Days =80*10;
var reaming =days-20;
var leastDays =first10Days + second10Days + reaming*50
return leastDays;
 }
}
 var cost = hotelCost(30);//call funcation for hostelcost
 console.log(cost)


//---- megafriends------//

var friends = ['abdullah hquak', 'jamal bhuiya','akbar chowdhury ','asif raza chowdhury']
var max = friends[0] 
function megafriends(friends){
   
    for(var i =1; i<friends.length; i++){ 
        
    var element = friends[i];
    }
    if(element.length>friends) {
      friends=max.length; 
   
    }
    return element;
}
var biggerName = megafriends(friends)
console.log(biggerName);

