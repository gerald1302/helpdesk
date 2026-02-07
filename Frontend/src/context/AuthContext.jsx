import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  // TEMPORAIRE (plus tard: token / backend)
  const [user, setUser] = useState(null)

  const login = (userData) => setUser(userData)
  const logout = () => setUser(null)

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
