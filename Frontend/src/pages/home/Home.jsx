import Navbar from "@/components/layout/Navbar"
import Hero from "@/features/hero/Hero"
import Categories from "@/features/categories/Categories"
import PromotedArticles from "@/features/sidebar/PromotedArticles"
import CommunityCard from "@/features/sidebar/CommunityCard"
import SystemStatus from "@/features/sidebar/SystemStatus"
import StillNeedHelp from "@/features/help/StillNeedHelp"
import Footer from "@/components/layout/Footer"

const Home = () => {
  return (
    <>
      <Navbar
        left={
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="text-blue-600">📘</span>
            <span>Enterprise Help Center</span>
          </div>
        }

        center={
          <>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Knowledge Base</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Community</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Release Notes</a>
          </>
        }

        right={
          <>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Submit a Ticket
            </button>

            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              👤
            </div>
          </>
        }
      />

      {/* CONTENU PAGE HOME */}
      {/* <main> */}
        {/* Hero, Search, Categories, etc */}
      {/* </main> */}
      <div className="bg-gray-50">

       <main className="max-w-8xl mx-auto px-7 ">

        <Hero
          popular={[
            { label: "Reset Password", href: "#" },
            { label: "API Keys", href: "#" },
            { label: "Billing Cycles", href: "#" },
          ]}
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <Categories
              items={[
                {
                  icon: "🚀",
                  title: "Getting Started",
                  description: "Step-by-step guides to get started",
                  articles: 24,
                  views: "1.2k",
                },
                {
                  icon: "💳",
                  title: "Account & Billing",
                  description: "Manage subscriptions and payments",
                  articles: 15,
                  views: 850,
                },
                {
                  icon: "💳",
                  title: "Account & Billing",
                  description: "Manage subscriptions and payments",
                  articles: 15,
                  views: 850,
                },
                {
                  icon: "💳",
                  title: "Account & Billing",
                  description: "Manage subscriptions and payments",
                  articles: 15,
                  views: 850,
                },
              ]}
            />
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <PromotedArticles
              items={[
                { title: "Reset your password", description: "Recover access" },
                { title: "Setting up 2FA", description: "Extra security" },
              ]}
            />
            <CommunityCard />
            <SystemStatus />
          </div>
        </div>

        <StillNeedHelp />
      </main>
        </div>
       <Footer
        brand="Enterprise Knowledge Base"
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Cookie Settings", href: "#" },
          { label: "Security", href: "#" },
        ]}
        copyright="© 2024 Enterprise Web Platform Inc."
      />
    </>
  )
}

export default Home
