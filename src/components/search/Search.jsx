import React, {useState, useEffect} from "react";
import "./search.css";
import axios from "axios";
import "core-js";
import regeneratorRuntime from "regenerator-runtime";

export default function Search() {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [searchInput, setSearchInput] = useState("");
 
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
        setSearchInput(searchTerm);
        const filteredData = characters.filter(character => {
            return character.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        if (searchTerm === "") {
            setFilteredCharacters([]);
        } else {
            setFilteredCharacters(filteredData);
        }
    };

    const clearInput = () => {
        setFilteredCharacters([]);
        setSearchInput("");
    }

    return (
        <div className="search">
            <form>
                <input type="text" placeholder="Search" value={searchInput} onChange={filterData}></input>
                {searchInput.length == 0
                    ? <i className="fas fa-search"/>
                    : <i className="fas fa-times" id="clear" onClick={clearInput}/>
                }
            </form>
            {filteredCharacters.length !== 0 &&
                <div className="search-result">
                    {filteredCharacters.map(character => {
                        return (
                            <div className="search-item" key={character.id}><img src={character.image}/>{character.name}</div>
                        )
                    })}
                </div>
            }
        </div>
    )
}
