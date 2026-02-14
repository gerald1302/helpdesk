const TicketHeader = () => {
  return (
    <div className="flex items-center justify-between border-b px-6 py-4">
      <div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 font-bold">TICKET #4092</span>
          <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded-full">
            In Progress
          </span>
        </div>
        <h2 className="text-xl font-bold">Integration error with API v2</h2>
      </div>

      <div className="flex gap-2">
        <button className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-50">
          Share
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold">
          Resolve
        </button>
      </div>
    </div>
  )
}

export default TicketHeader
