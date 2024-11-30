import React,{useState, useEffect} from "react"

function Naruto () {
    const [characters, setCharacter] = useState([])
    
    useEffect(() => {
  async function fetchCharacters() {
    const response = await fetch ("https://narutodb.xyz/api/character")
    const data = await response.json()
    setCharacter(data.characters)
  
   }

   fetchCharacters()
 
    }, [])
    console.log(characters)
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>

                </tr>
            </thead>
            <tbody>
                {
                    characters.map((character) => 
                        <tr key={character.id}>
                            <td>{character.id}</td>
                            <td>{character.name}</td>
                            <td>{character.status}</td>
                        </tr>

                    )
                }


</tbody>
        </table>
        
        </>
    )
}

export default Naruto