import { useState } from "react";

const Content = () => {
    const [name, setName] = useState('Raul');

    const handleNameChange = () => {
        const names = ['Raul', 'Pereira', 'Carvalho'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }
    const handleClick = () => {
      console.log('You clicked it!')
    }

    const handleClick2 = (name) => {
      console.log(`${name} was clicked`)
    }

    const handleClick3 = (e) => {
      console.log(e.target.innerText)
    }
      
  return (
    <main>
        <p onDoubleClick={handleClick}>
          Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change name</button>
        <button onClick={() => handleClick2('Raul')}>Click it!</button>
        <button onClick={(e) => handleClick3(e)}>Click it!</button>
    </main>
  )
}

export default Content