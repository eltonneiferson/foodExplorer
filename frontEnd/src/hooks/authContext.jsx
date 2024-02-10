import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})

export function AuthProvider({ children }){
    const [data, setData] = useState({})

    async function signIn({ email, password}){
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@foodExplorer:user", JSON.stringify(user))
            localStorage.setItem("@foodExplorer:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ user, token })
        } catch (err) {
            if (err){
                alert(err.response.data.message)
            } else {
                alert("Não foi possível realizar o login, tente novamente mais tarde!")
            }
        }
    }

    function SignOut(){
        localStorage.removeItem("@foodExplorer:token")
        localStorage.removeItem("@foodExplorer:user")

        setData({})
    }

    useEffect(() => {
        const token = localStorage.getItem("@foodExplorer:token")
        const user = localStorage.getItem("@foodExplorer:user")

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ token, user: JSON.parse(user)})
        }
    }, [])
    
    return(
        <AuthContext.Provider value={{ signIn, user: data.user, SignOut }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}