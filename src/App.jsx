import './App.css'
import {useState} from 'react'

function App() {

    const [name, setName] = useState('Sofia')
    let newName = ''
    const dataName = () => {
        newName = name
        setName('Data')
    }
    const reyesName = () => {
        newName = name
        setName('Reyes')
    }
    const yolandaName = () => {
        newName = name
        setName('Yolanda')
    }
    return (
        <div>
            <h2>Teacher Name: {name}</h2>
            <ul>
                <li onClick={dataName}>Data</li>
                <li onClick={reyesName}>Reyes</li>
                <li onClick={yolandaName}>Yolanda</li>
            </ul>
        </div>
    )
    /*
    Intento del Bonus No conseguido
        const [name, setName] = useState('Sofia')
        let newName
        const changeName = () => {
            if(!newName) {
                console.log('newName empty')
            }
            setName(newName)
            newName = ''
        }
        return (
            <div>
                <h2>Teacher Name: {name}</h2>
                <form onSubmit={changeName}>
                    <input type="text" id="newName" placeholder='Add a name' value='newName' onChange={function() {
                        const inputValue = document.getElementById('newName').value
                        newName = inputValue
                    }()
                        }/>
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
        */
}

export default App
