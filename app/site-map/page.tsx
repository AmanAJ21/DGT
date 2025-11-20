import Link from 'next/link';

export default function SiteMapPage() {
  const pages = [
    {
      title: 'Home',
      href: '/',
      description: 'Welcome to DGT Logistics - Your trusted logistics partner'
    },
    {
      title: 'Services',
      href: '/services',
      description: 'Explore our comprehensive logistics solutions'
    },
    {
      title: 'About',
      href: '/about',
      description: 'Learn more about DGT Logistics and our values'
    },
    {
      title: 'Contact',
      href: '/contact',
      description: 'Get in touch with our team'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 text-sm font-semibold tracking-wider">SITEMAP</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Navigation
              </span>
            </h1>
            <p className="text-gray-400 text-xl">
              Quick access to all pages on our website
            </p>
          </div>

          <div className="space-y-4">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group block bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-xl border border-white/10 p-6 hover:border-blue-500/50 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400">
                      {page.title}
                    </h2>
                    <p className="text-gray-400">{page.description}</p>
                  </div>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
