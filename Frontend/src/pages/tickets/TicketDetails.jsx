import Navbar from "@/components/layout/Navbar"
import TicketHeader from "@/components/tickets/TicketsDetails/TicketHeader"
import TicketMessages from "@/components/tickets/TicketsDetails/TicketMessages"
import TicketReplyBox from "@/components/tickets/TicketsDetails/TicketReplyBox"
import TicketSidebar from "@/components/tickets/TicketsDetails/TicketSidebar"

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
        <div className="flex-1 bg-white border-r min-h-[calc(100vh-64px)] flex flex-col">
          <TicketHeader />
          <TicketMessages />
          <TicketReplyBox />
        </div>

        <TicketSidebar />
      </div>
    </div>
  )
}

export default TicketDetails
