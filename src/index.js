import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//invoeren HTML elementen via een variabele
//const myfirstelement = <h1>Hello React</h1>
//ReactDOM.render(myfirstelement, document.getElementById('root'))

//er kan maar 1 ReactDOM.render in staan

// //class met constructor of anders werken met function
// class Car{
//   constructor(name, color){
//     this.brand = name;
//     this.color = color;
//   }
//   //method in class
//   present(){
//     return "I have a " + this.color + " "+ this.brand;
//   }
// }

// //const myCar = new Car("BMW", "black")
// //ReactDOM.render(myCar.present(), document.getElementById('root'))

// //class inheritance "extends"
// class Model extends Car{
//   constructor(name, color, mod){
//     super(name, color);
//    //super(color); je kan maar 1 keer super(verwijzen naar de parent)
//     this.model = mod;
//   }
//   show(){
//     return this.present() + " model " + this.model;
//   }
// }
// const myCar = new Model("BMW", "black", "5-reeks")
// ReactDOM.render(myCar.show(), document.getElementById('root'))

// //.map() methode
// const Cijfers = [1,2,3,4,5]
// const cijferD = Cijfers.map((item)=><p> {item*2}</p>)

// ReactDOM.render(cijferD, document.getElementById('root'))

// //destructering 
// function calculate(a,b){
//   const add = <p>{a+b}</p>;
// const substract = <p>{a-b}</p>;
//   const multiply = <p>{a*b} </p>;
//  const divide = <p>{a/b}</p>;
 
//   return [add, substract, multiply, divide];
// }
// //destructering
// //const [add, substract, multiply, divide] = calculate(7,4)

// ReactDOM.render(calculate(7,4), document.getElementById('root'))


// //nested object
// const vehicleOne = {
//   brand: "BMW",
//   type: "car",
//   year:"2022",
//   registration:{
//     city: "Heist",
//     country: "Belgium"
//   }
// }
// myVehicle(vehicleOne)
// function myVehicle({brand, registration:{country}}){
//   const mess = "My " + brand + " is registrated in "+ country + ".";
//  ReactDOM.render(mess, document.getElementById('root'))
// }

// //display HTML in browser
// const tabelT = (
// <table>
//   <tr>
//     <th>
//       Name
//     </th>
//   </tr>
// <tr>
//   <th>
//     1
//   </th>
//   <td>Lisa</td>
// </tr>
// <tr>
//   <th>2</th>
//   <td>Hugo</td>
// </tr>
// </table>
// )
// ReactDOM.render(tabelT, document.getElementById('root'))

// //ternary operator
// const x = 15;
// const eleM = <h1>{x<10?"hello":"goodbye"}</h1>
// ReactDOM.render(eleM, document.getElementById('root'))


// //class this.state & this.setState()
// class Car extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       brand :"bmw",
//       color: "black",
//       show:true,
//     year: new Date().getFullYear() - 2021,
//     }
//   }
//   changeColor = ()=>{
//     this.setState({color:"red"})
//   }
//   //after updating
//   getSnapshotBeforeUpdate(prevProps, prevState){
//     document.getElementById("before").innerHTML = "Before it was color " + prevState.color
//   }
//   componentDidUpdate(){
//     document.getElementById("after").innerHTML = "After it is " + this.state.color
//   }

//  delH =()=>{
//    this.setState({show:false})
//  }
//   render(){
//         let myheader;
//     if (this.state.show) {
//       myheader = <DelP />  
//     }
     
//     return (
//       <div>
//         <h2>I love my {this.state.brand}</h2>
//         <p>
//           It's {this.state.year} years old.
//           It's a {this.state.color} one.

//         </p>
//         <button type="button" onClick={this.changeColor}>Change color</button>
//       <div>
//         <p id="before"></p>
//         <p id="after"></p>
//       </div>
//       {myheader}
//       <button type="button" onClick={this.delH}>DELETE</button>
//       </div>
//     )
//   }
// }
// //before unmounting
// class DelP extends React.Component{
//   componentWillUnmount(){
// alert("you are about to delete ")
//   }
//   render(){
//     return <p >Hello</p>
//   }
// }

// ReactDOM.render(<Car/>, document.getElementById('root'))


// //props en twee functie in elkaar voegen
// function Car(props){
//   return <h2>I am a {props.brand.model}</h2>
// }
// function Garage(){
//   const carInfo = { name: "Ford", model: "Mustang"};
//   return(
//     <>
//     <h2>Who lives in my garage?</h2>
//     <Car brand = {carInfo}/>
//     </>
//   )
// }
// ReactDOM.render(Garage(), document.getElementById('root'))


// //Event Object
// function Input(){
//   const i = (a,b)=>{
//     alert (a); //Goal, b = you missed
//   }
//   return (
//     <button onClick={ (event)=>i("Goal", "you missed")}>Click me</button> );
// }
//   ReactDOM.render(<Input/>, document.getElementById('root'))


// //conditional, logical operator
// function Garage(props){
//   const cars = props.cars;
//   if(cars.length>0){
//     return (cars.map((car) => <ul><li>{car}</li></ul>) )
//   }
//   return(
//     <>
//     <h1>Garage is empty</h1>

//     </>
//   )
// }
// const cars = ["BMW", "Ford", "Audi"]
// ReactDOM.render(<Garage cars={cars}/>, document.getElementById('root'))


// //use "key" instead of index => id
// function Cars(props){
//   return <li>I am a { props.brand}</li>
// }
// function Garage (){
//   const cars = [
//     {id:1, brand: "ford"},
//     {id:2, brand:"BMW"},
//     {id:3, brand: "VW"}
//   ];
//   return (
//     <>
//     <h2>Who lives in my garage?</h2>
//     <ul>
//       {cars.map((car)=><Cars key = {car.id} brand = {car.brand}/>)}
//     </ul>
//     </>
//   );
// }
// ReactDOM.render(<Garage />, document.getElementById('root'))

function MyForm (){
  const [inputs, setInput] = useState({});

  const handleChange = (event) =>{
    const name= event.target.name;
   const value = event.target.value;
    setInput(values =>({...values, [name]: value}))
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
console.log(inputs) //geeft object{username: "An"} in console.log
//alert(inputs) //geeft object object
  }
  return (
    <form onSubmit ={handleSubmit}>
      <label>Enter your name
        <input
        type = "text"
        name = "username"
        value = {inputs.username || ""}
        onChange = {handleChange}
        />
      </label>
      <label> Enter your age
        <input
        type = "number"
        name = "age"
        value = {inputs.age || ""}
        onChange ={handleChange}
        />
      </label>
     < input type="submit"/>
    </form>
  )
}
ReactDOM.render(<MyForm />, document.getElementById('root'))