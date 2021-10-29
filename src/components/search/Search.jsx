import React, {useState, useEffect} from "react";
import "./search.css";
import axios from "axios";
import "core-js";
import regeneratorRuntime from "regenerator-runtime";

export default function Search() {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
 
    useEffect(() => {
            const getCharacters = async () => {
                const res = await axios.get("https://rickandmortyapi.com/api/character");
                setCharacters(res.data.results);
                console.log(res.data.results);
            }
            getCharacters();
    }, []);

    const filterData = event => {
        const searchTerm = event.target.value;
        const filteredData = characters.filter(character => {
            return character.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        if (searchTerm === "") {
            setFilteredCharacters([]);
        } else {
            setFilteredCharacters(filteredData);
        }
    };

    return (
        <div className="search">
            <form>
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
                <input type="text" placeholder="Search" onChange={filterData}></input>
                <i className="fas fa-times"></i>
            </form>
            {filteredCharacters.length !== 0 &&
                <div className="search-result">
                    {filteredCharacters.slice(0, 9).map(character => {
                        return (
                            <div className="search-item" key={character.id}>{character.name}</div>
                        )
                    })};
                </div>
            }
        </div>
    )
}
