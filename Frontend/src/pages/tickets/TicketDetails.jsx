//src/pages/tickets/TicketDetails.jsx
import Navbar from "@/components/layout/Navbar"

const TicketDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <Navbar
        left={
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="font-bold text-lg">SupportDesk</span>
          </div>
        }
        center={
          <>
            <a href="#" className="text-gray-500 hover:text-blue-600 font-medium">Dashboard</a>
            <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Tickets</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 font-medium">Customers</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 font-medium">Knowledge Base</a>
          </>
        }
        right={
          <>
            <input
              type="text"
              placeholder="Search tickets..."
              className="hidden md:block px-3 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none"
            />
            <div className="h-8 w-8 rounded-full bg-blue-100" />
          </>
        }
      />

      {/* MAIN */}
      <div className="flex">
        {/* CONVERSATION */}
        <div className="flex-1 bg-white border-r min-h-[calc(100vh-64px)] flex flex-col">
          
          {/* HEADER */}
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

          {/* MESSAGES */}
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
                  <p className="mt-2 font-semibold">Steps taken:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Refreshed API key in dashboard</li>
                    <li>Checked CORS settings</li>
                    <li>Tested with Postman</li>
                  </ul>
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

          {/* REPLY BOX */}
          <div className="border-t p-4 bg-white">
            <textarea
              placeholder="Type your response here..."
              className="w-full border rounded-xl p-3 text-sm focus:outline-none"
              rows={4}
            />
            <div className="flex justify-end mt-3">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">
                Send Reply →
              </button>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
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

          <div>
            <label className="text-xs text-gray-400 font-bold uppercase">
              Category
            </label>
            <select className="w-full mt-2 border rounded-lg px-3 py-2 text-sm">
              <option>API & Integration</option>
              <option>Billing</option>
            </select>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default TicketDetails
