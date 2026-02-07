import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

const UserMenu = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <div className="relative">
      {/* Avatar */}
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:ring-2 hover:ring-blue-500 transition"
      >
        👤
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg text-sm z-50">
          {!isAuthenticated ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Se connecter
              </button>

              <button
                onClick={() => navigate("/register")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Créer un compte
              </button>
            </>
          ) : (
            <>
              <div className="px-4 py-2 font-semibold text-gray-700">
                {user?.name || "Utilisateur"}
              </div>

              <button
                onClick={() => navigate("/profile")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Mon profil
              </button>

              <button
                onClick={() => {
                  logout()
                  navigate("/")
                }}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Se déconnecter
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default UserMenu
