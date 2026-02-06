const SystemStatus = () => {
  return (
    <div className="bg-white border rounded-xl p-4 flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <span>Tous les systèmes fonctionnent normalement</span>
      </div>
      <a href="#" className="text-blue-600 hover:underline">
       Page de statut
      </a>
    </div>
  )
}

export default SystemStatus
