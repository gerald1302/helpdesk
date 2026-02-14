const TicketSidebar = () => {
  return (
    <aside className="hidden xl:flex w-80 bg-gray-50 border-l flex-col p-6 space-y-6">
      <div>
        <label className="text-xs text-gray-400 font-bold uppercase">
          Ticket Status
        </label>
        <select className="w-full mt-2 border rounded-lg px-3 py-2 text-sm">
          <option>Open</option>
          <option selected>In Progress</option>
          <option>Resolved</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-gray-400 font-bold uppercase">
          Priority
        </label>
        <div className="flex gap-2 mt-2">
          <button className="flex-1 border rounded-lg py-1 text-xs">Low</button>
          <button className="flex-1 border-2 border-orange-500 bg-orange-50 text-orange-600 py-1 text-xs font-bold">
            High
          </button>
          <button className="flex-1 border rounded-lg py-1 text-xs">Urgent</button>
        </div>
      </div>

      <div>
        <label className="text-xs text-gray-400 font-bold uppercase">
          Assignee
        </label>
        <div className="mt-2 border rounded-lg px-3 py-2 bg-white text-sm">
          Jordan Smith
        </div>
      </div>
    </aside>
  )
}

export default TicketSidebar
