
console.log("*******************SORU 1*****************")
// SORU 1
function PrimeNumber(...numbers) {
  
  for (var i = 0; i < numbers.length; i++) {
    
    for (var x = 2; x < numbers[i]; x++) {
      if (numbers[i] % x == 0) { 
        break;
      }
    }
    if (numbers[i] == x) {
      console.log(numbers[i] +  "sayısı asaldır.");

    }
  
    else
    {
      console.log(numbers[i]+ "sayısı asal değildir.");
    }
    
  }
}
PrimeNumber(1,2,18, 350, 18, 13, 5, 8, 9, 21,3,4,11,15);
console.log("**************SORU2******************")
//ARKADAŞ SAYI  
var number1=220;
var number2=284;
var sum1=0;
var sum2=0;
for(i=0;i<number1;i++)
  {
    if(number1%i==0)
    {
      sum1=i+sum1;
    
    }
  
  }
for(i=0;i<number2;i++)
{
  
  if(number2%i==0)
  {
    sum2=i+sum2;
  }
    
}
if(sum1==number2 &&  sum2==number1)
{
  console.log(number1+"ve"+number2+ "arkadas sayıdır");
}
else{  
  console.log("Bu iki sayı arkadas sayı değildir");
    }
console.log("*********SORU 3*************");
  //mükemmel sayı Soru 3
  
  for(a=0;a<1000;a++)
  {
    var sum=0;
    for(b=1;b<=a;b++)
      {
        if(a%b==0){
          sum=sum+b;
        }
        
        
      }
    if(sum==a*2)
    {
      console.log(a+"Mükemmel sayıdır");
    }
    
  }
  console.log("***********************Soru4*******************");
              
  for (var sayi = 2; sayi < 1000; sayi++) {
  sayac=0;
  for (var i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
      sayac++;
      break;
    }
  }
  if (sayac==0) {
    console.log(sayi+"asaldır");
  }
  else{
   
  }
}
  