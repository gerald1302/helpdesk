const TicketMessages = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {/* Customer message */}
      <div className="flex gap-4">
        <div className="h-10 w-10 bg-gray-200 rounded-full" />
        <div className="max-w-xl">
          <div className="text-sm font-bold">John Doe</div>
          <div className="text-xs text-gray-500 mb-2">2 hours ago via Email</div>

          <div className="bg-gray-100 rounded-xl p-4 text-sm">
            <p>
              Hi team, I am receiving a 403 Forbidden error when trying to authenticate
              with the new API v2 endpoints.
            </p>
          </div>
        </div>
      </div>

      {/* Internal note */}
      <div className="text-center">
        <span className="text-xs font-bold text-orange-500 uppercase">
          🔒 Internal Note
        </span>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-2 text-sm italic max-w-xl mx-auto">
          <div className="font-bold not-italic">Sarah (Senior Dev)</div>
          It seems the account hasn’t been migrated to v2 permissions.
        </div>
      </div>

      {/* Agent reply */}
      <div className="flex flex-row-reverse gap-4">
        <div className="h-10 w-10 bg-blue-600 rounded-full" />
        <div className="max-w-xl text-right">
          <div className="text-sm font-bold">You (Support Agent)</div>
          <div className="text-xs text-gray-500 mb-2">45 mins ago</div>

          <div className="bg-blue-600 text-white rounded-xl p-4 text-sm">
            Hello John, thanks for the details. Engineering team is fixing the issue.
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketMessages
