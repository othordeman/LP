import React, {useEffect, useState, useRef} from "react";
import search from '../../images/search.png'
import {Wrapper, Content} from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {


    const [state, setState] = useState('');
    const inital = useRef(true);

    function handleChange(e) {
        setState(e.currentTarget.value)
    }

    useEffect(() => {

        /* Dont want the initial render to trigger on mount. 
        By using a useRef and setting initial value to false and return
        it will only trigger fast return once.
        State is set after .5 s, so that the user have some time 
        finish typing
        */

        if(inital.current) {
            inital.current = false;
            return
        }
        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 500)

        return () => clearTimeout(timer)

    }, [setSearchTerm, state])


    // Input is built as an controlled component
    return (
        <Wrapper>
            <Content>
                <img src={search} alt='searchIcon' />
                <input
                    type='text'
                    placeholder='Sök LP'
                    onChange={e => handleChange(e)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )

}
export default SearchBar