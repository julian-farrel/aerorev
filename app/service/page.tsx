import { Header } from "@/components/header"

export default function Service() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-serif font-bold mb-6">Service Page</h1>
          <p className="text-lg text-muted-foreground">Service details coming soon...</p>
        </div>
      </main>
    </>
  )
}
