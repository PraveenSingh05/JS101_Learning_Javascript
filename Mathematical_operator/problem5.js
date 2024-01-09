// Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ....
let short_format="Sat";
let long_format;
switch(short_format){
  case "Mon":
    long_format="Monday";
    break;

  case "Tues":
    long_format="Tuesday";
    break;

  case "Wed":
    long_format:"Wednesday";
    break;

  case "Thurs":
    long_format="Thursday";
    break;

  case "Fri":
    long_format="Friday";
    break;

  case "Sat":
    long_format="Saturday";
    break;

  case "Sun":
    long_format="Sunday";
    break;
  
  default:
   long_format="Invalid";
    
}
console.log(long_format);