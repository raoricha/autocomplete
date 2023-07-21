import { useGlobalContext } from "./context"

const Search = () => {
    const { query, searchValue } = useGlobalContext()
    return (
        <>
            <input
                type="text"
                value={query}
                onChange={(e) => searchValue(e.target.value)}
            />
        </>
    )
}

export default Search