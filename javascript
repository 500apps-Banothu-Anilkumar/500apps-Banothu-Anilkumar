var fruits=['papaya','apple','grapes'] 
for(val of fruits)
{
  console.log(val)
}
for(val in fruits)
{
  console.log(2**val)
}
fruits.forEach(element => console.log(element));
var value=58;
console.log(value);

 function call()
 {
   const a=100;
  
   console.log(a);
 }

call();

var name1="Anil";
console.log("Name is "+ name1);
console.log('Name is ${name1}')
var names={
  name:"Anil",
  'age':25,
  height:36.7
};
console.log(names['name']);
var animal=
{
  name2:"cat",
  color:"white",
  eat()
  {
    console.log(this.name2+' is eating ')
  }
}
animal.eat();
console.log(animal.name2);
var arr=[18,,"Anil",23];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
var array=new Array("mohan",23,new Object());
console.log(array);
typeof(array);
var val="58";
console.log(typeof(val));
var arr=[]  ;
arr.push(52);
arr.push(25);
arr.push(81);
console.log(arr);
arr.pop()  ;
console.log(arr);
arr.pop();
console.log(arr);

var narr=[5,8,6,3,7];
console.log(narr);
console.log(narr.length);
narr.splice(1,narr.length-2,"mummy");
console.log(narr);
var str=["a","b","c","d"];
str.splice(0,2,"@");
console.log(str);

var val=print(5,4);
console.log(val);
function print(a,b)
{
  return a+b;
}

var val=10;
console.log(val);
cal();
function cal()
{
  var c=25;
  var val=5;
  console.log(val);
}
console.log(val);

