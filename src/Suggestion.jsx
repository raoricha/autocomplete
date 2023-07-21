import { useGlobalContext } from "./context"

const Suggestion = () => {
    const { updateQuery, list } = useGlobalContext()
    return (
        <>
            <ul>
                {list.map(item => <li onClick={() => updateQuery(item.name)}>{item.name}</li>)}
            </ul>

        </>
    )
}

export default Suggestion