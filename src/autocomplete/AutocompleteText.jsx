import { useEffect, useState } from "react"

const defaultProps = {
    autoFocus: false,
    matchText: false,
    maxItems: 10,
    minQueryLength: 1,
    placeholder: '',
    typehead: true,
    clear: () => '\u00d7'
}

const AutocompleteText = ({ songs }) => {

    const [query, setQuery] = useState('')
    const [list, setList] = useState([])

    const onchange = (e) => {
        setQuery(e.target.value);
        console.log(query)

    }
    useEffect(() => {
        query ? setList(songs.filter(ele => ele.toLowerCase().startsWith(query.toLowerCase())
            || ele.toLowerCase().endsWith(query.toLowerCase())
            || ele.toLowerCase().includes(query.toLowerCase())))
            : setList([])
        // list ? setQuery(list[0]) : setQuery('')
    }, [query])
    return (
        <>
            <h1>This is an AutocompleteText Page</h1>
            <input
                type="text"
                value={query}
                onChange={onchange}
            />
            <ul>
                {
                    list.map(item => <li>{item}</li>)
                }
            </ul>
        </>
    )
}

export default AutocompleteText