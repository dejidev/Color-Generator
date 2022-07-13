import React, {useState} from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  // console.log(list)
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10) ;
      setList(colors)  
    } catch (error) {
      setError(true)      
    }

  }
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form action="" onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={color} 
          onChange={(e) => setColor(e.target.value)}
          className={`${error?'error' : null}`}/>
          <button className="btn" placeholder='#222'>Submit</button>
        </form>
      </section>

      <section className="colors">
        {list.map((color,index) => {
          return <SingleColor {...color} key={color}  index={index}/>
        })}
      </section>    
    </>

  );
}

export default App;
