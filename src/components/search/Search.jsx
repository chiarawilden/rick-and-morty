import React, {useState, useEffect} from "react";
import "./search.css";
import axios from "axios";
import "core-js";
import regeneratorRuntime from "regenerator-runtime";
import {useClickOutside} from "react-click-outside-hook";

export default function Search() {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [dimensions, setDimensions] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [isExpanded, setExpanded] = useState(true);
    const [ref, clickedOutside] = useClickOutside();
 
    useEffect(() => {
            const getCharacters = async () => {
                const res = await axios.get("https://rickandmortyapi.com/api/character/?page=11");
                setCharacters(res.data.results);
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
            setExpanded(!isExpanded);
        } else {
            setFilteredCharacters(filteredData);
        }
    };

    useEffect(() => {
        if(clickedOutside)
        setExpanded(!isExpanded);
    }, [clickedOutside]);

    const submitInput = event => {
        event.preventDefault();
        setExpanded(!isExpanded)
    }

    const clearInput = () => {
        setFilteredCharacters([]);
        setSearchInput("");
    }

    return (
        <div className="search">
            <div className="search-input">
                <form onSubmit={submitInput} style={{borderRadius: !isExpanded || filteredCharacters.length <= 0 ? "22px" : "22px 22px 0 0"}}>
                    <input type="text" placeholder="Search" value={searchInput} onChange={filterData} ref={ref}/>
                    {searchInput.length == 0
                        ? <i className="fas fa-search"/>
                        : <i className="fas fa-times" id="clear" onClick={clearInput}/>
                    }
                </form>
                {filteredCharacters.length !== 0 &&
                    <>
                    {isExpanded 
                        ? (
                        <div className="search-result">  
                                <>
                                    {filteredCharacters.map(character => {
                                        return (
                                            <div className="search-item" key={character.id}>
                                                <img src={character.image}/>
                                                {character.name}
                                            </div>
                                        )
                                    })}
                                </>
                        </div>
                        ) 
                        : null
                    }
                    </>
                }
            
            </div>
            {filteredCharacters.length !== 0 &&
                <div className="search-results">  
                    {filteredCharacters.map(character => {
                        return (
                            <div className="card" key={character.id}>
                                <img src={character.image}/>
                                <h1>{character.name}</h1>
                                <p>Status: {character.status}</p>
                                <p>Species: {character.species}</p>
                                <p>Gender: {character.gender}</p>
                                <p>Origin: {character.origin.name}</p>
                            </div>
                        )
                    })} 
                </div>
            }
            <div className="rick-morty-background">
                <img src={"./images/morty-eyes.png"} alt="Rick and Morty Together"/>
            </div>
            <div className="links">
                <a href="https://rickandmortyapi.com/">API</a>
                <a href="https://github.com/chiarawilden/rick-and-morty-search">GitHub</a>
            </div>
        </div>
    )
}
