//src/pages/tickets/CreateTicket.jsx
import Navbar from "@/components/layout/Navbar"
import TicketForm from "@/components/tickets/TicketForm"

const CreateTicket = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <Navbar
        left={
          <h2 className="text-lg font-bold text-blue-600">
            Support Portal
          </h2>
        }
        center={
          <>
            <a className="text-sm font-medium hover:text-blue-600">
              Dashboard
            </a>
            <a className="text-sm font-medium hover:text-blue-600">
              My Tickets
            </a>
            <a className="text-sm font-medium hover:text-blue-600">
              Knowledge Base
            </a>
          </>
        }
        right={
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-300" />
          </div>
        }
      />

      {/* CONTENT */}
      <main className="flex flex-col items-center py-10 px-4">
        {/* Breadcrumb */}
        <div className="w-full max-w-3xl text-sm text-gray-500 mb-6">
          Home / Tickets /{" "}
          <span className="text-gray-900 font-medium">
            Create New Ticket
          </span>
        </div>

        {/* FORM */}
        <TicketForm />

          {/* FEATURES */}
          <div className="w-full max-w-3xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Knowledge Base</div>
                <div className="text-xs text-gray-500">Find answers instantly</div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 8 4-16 3 8h4" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">24/7 Support</div>
                <div className="text-xs text-gray-500">Always here to help</div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">SLA Guaranteed</div>
                <div className="text-xs text-gray-500">Priority for enterprise</div>
              </div>
            </div>
          </div>
      </main>
    </div>
  )
}

export default CreateTicket
