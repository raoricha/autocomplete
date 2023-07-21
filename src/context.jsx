import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import axios from 'axios'
import API from "./api";

const UserContext = createContext()
const initialState = {
    query: "",
    limit: 10,
    list: []
}

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    let data = []
    const fetchAPI = async (url) => {
        try {
            const res = await axios.get(url, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer 301|kkdNJMUnPMcukSSi0jli1iqW0kq3gboj0KAC9Vk7"
                }
            })
            data = res.data.data
            dispatch({
                type: "GET_LIST",
                payload: {
                    list: data
                }
            })

        }
        catch (error) {
            console.log(error)
        }

    }


    const searchValue = (searchQuery) => {

        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery
        })
    }
    const updateQuery = (updateQueryValue) => {
        dispatch({
            type: "UPDATE_QUERY",
            payloadQuery: updateQueryValue,
            payloadList: []
        })
    }

    useEffect(() => { fetchAPI(`${API}`) }, [state.query])
    return (
        <>
            <UserContext.Provider value={{ ...state, searchValue, updateQuery }}>
                {children}
            </UserContext.Provider>
        </>
    )
}

const useGlobalContext = () => {
    return useContext(UserContext)
}

export { UserContext, UserProvider, useGlobalContext }