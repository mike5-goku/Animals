import { useState } from "react"
import './App.css'
import AnimalsShow from './AmimalsShow'
function getRandomAnimal (){
const animals = ['cat','bird','cow','dog','gator','horse']
return animals[Math.random()* animals.length]

}


function App() {
const [animals, setAnimals] = useState([])  
const handleClick = () =>{
setAnimals([...animals, getRandomAnimal()])

}
const renderedAnimals = animals.map((animal, index) =>{
return <AnimalsShow type={animal} key={index}/>


})
return(
<div className ='app'>   
  <button onClick={handleClick}>Add animal</button>
  <div className="animals-list">
  {renderedAnimals}
</div>
</div>
)

}



export default App
