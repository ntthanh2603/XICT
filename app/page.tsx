import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to XICT</h1>
        <p className="text-lg mb-8 text-muted-foreground">
          Discover our latest products, news, and more!
        </p>
        <Button asChild>
          <a href="/products">Explore Products</a>
        </Button>
      </section>

      {/* Placeholder Sections */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-semibold mb-8">Featured Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-card rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Intro</h3>
            <p className="text-muted-foreground">
              Learn more about XICT and our mission.
            </p>
            <Button variant="link" asChild className="mt-4">
              <a href="/intro">Learn More</a>
            </Button>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Field Of Active</h3>
            <p className="text-muted-foreground">
              Discover our active fields and initiatives.
            </p>
            <Button variant="link" asChild className="mt-4">
              <a href="/field-active">Learn More</a>
            </Button>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">News</h3>
            <p className="text-muted-foreground">
              Stay updated with the latest news and updates.
            </p>
            <Button variant="link" asChild className="mt-4">
              <a href="/news">Learn More</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
