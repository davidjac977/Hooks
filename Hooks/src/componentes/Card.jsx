import Airjordan from "../assets/Airjordan.png"
import "../assets/App.css" 
import React, {useState} from "react"

function Card() {
const [count, setCount] = useState(0)

function incrementar() {
  setCount(count + 1)
}

function decrementar() {
  if(count<=0){
    alert("Valor inválido")
  } else{
    setCount(count-1)
  }

}





  return (
    <>
     <section>
      <div className='card'>
        <div>
        <img src={Airjordan} alt="" />
        </div>
      
      <div>
        <h4>Tênis Maneiro</h4>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="contagem">
      <button onClick={decrementar}>-</button>
      <p>{count}</p>
      <button onClick={incrementar}>+</button>
      </div>
      </div>


     </section>
      </>
  )
}

export default Card
