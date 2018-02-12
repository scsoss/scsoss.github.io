window.onload =function(){
   var meal = document.getElementById("meal");
   var totalCost  = document.getElementById("totalCost");
   var total_Cost = parseInt(prompt("Total Cost", "40000"),10);
   var mealCount =parseInt(prompt("Total Meal", "1300"),10);
   var mealRate = total_Cost/mealCount;
    
    meal.innerHTML = Math.floor(mealRate);
    totalCost.innerHTML = "৳"+total_Cost.toLocaleString();

var devotees=[
    {
        name:"Asim Kumar Roy",
        deposit:0,
        meal:20
    },
     {
        name:"Pranta Datta",
        deposit:0,
        meal:20
    },
     {
        name:"Priya Dhar",
        deposit:0,
        meal:20
    },
     {
        name:"Sagor Shil",
        deposit:0,
        meal:20
    },
     {
        name:"Subrata Roy",
        deposit:0,
        meal:20
    }
];
//updating object value
devotees[0].deposit= 3000;

//console.log(devotees[0].deposit);
var dev =document.getElementById("dev");
var devotee = "";

for(var i=0; i<devotees.length; i++){
if(devotees[i].deposit == 0){
   devotee += "<li>" +devotees[i].name +"</li>"; 
} else if(devotees[i].deposit !== 0 ){
   //devotee  +="সকলেই এ মাসের প্রণামী পরিশোধ করেছেন।"
}
  }
    dev.innerHTML=devotee; 
    
var today = new Date();
var month = today.toLocaleString("en-us", { month: "long" });
var month_name =document.getElementById("month_name");

month_name.innerHTML =  month;



var banglaNumFixed={'0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯'};
 
String.prototype.toBanglaNum = function() {
    var retStr = this;
    for (var x in banglaNumFixed) {
         retStr = retStr.replace(new RegExp(x, 'g'), banglaNumFixed[x]);
    }
    return retStr;
};
 
var eng_num="123456";
 
//var bangla_number= eng_num.toBanglaNum();
 
//console.log(bangla_number);
 
 
 
}


