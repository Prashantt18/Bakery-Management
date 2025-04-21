import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cake,
  Coffee,
  Cookie,
  UtensilsCrossed,
} from "lucide-react";

function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-700/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Dark bakery ambiance"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-white md:text-6xl mt-2">
            Prashant Bakery
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
            Gourmet treats for night owls and early risers alike.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="px-6 py-3 bg-gray-700 text-white rounded-full font-medium hover:bg-gray-600 transition-colors">
              Order Online
            </button>
            <button className="px-6 py-3 bg-transparent text-white border border-gray-500 rounded-full font-medium hover:bg-gray-700 transition-colors">
              Our Menu
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-16 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-yellow-400 md:text-4xl">
              Featured Delights
            </h2>
            <p className="mt-2 text-gray-400">
              Handpicked flavors for the nocturnal palate
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Dark Rye Bread",
                description: "Hearty and full of flavor",
                icon: <Cookie className="h-10 w-10 text-yellow-400" />,
                image:
                  "https://images.unsplash.com/photo-1546549039-b6bb525c1a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Midnight Pastries",
                description: "Elegant, rich, and unforgettable",
                icon: <Cake className="h-10 w-10 text-yellow-400" />,
                image:
                  "https://images.unsplash.com/photo-1617111311330-43aa07d5d8aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Custom Night Cakes",
                description:
                  "Designed for evening celebrations and dreams",
                icon: <UtensilsCrossed className="h-10 w-10 text-yellow-400" />,
                image:
                  "https://images.unsplash.com/photo-1599785209707-4f0c6209f1db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Signature Brews",
                description: "Warm your soul with every sip",
                icon: <Coffee className="h-10 w-10 text-yellow-400" />,
                image:
                  "https://images.unsplash.com/photo-1586483120383-09f2d6e74f5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-gray-700 p-2">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-yellow-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-700 py-16 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold text-yellow-400 md:text-4xl">
                Our Tale
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Prashant Bakery was born under starlight — blending classic baking with a modern twist.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                With roots in tradition and eyes on innovation, our offerings are crafted to inspire and satisfy.
              </p>
              <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-full font-medium hover:bg-yellow-400 transition-colors">
                Learn More About Us
              </button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1623072457196-5b2e78e6019a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dark bakery interior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 py-16 px-4 md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-serif text-3xl font-bold text-yellow-400 md:text-4xl">
            Manage Your Midnight Inventory
          </h2>
          <p className="mt-4 text-gray-300">
            Access the service panel to stay stocked, updated, and ready
          </p>
          <Link to="/service">
            <button className="mt-8 px-8 py-4 bg-yellow-500 text-black rounded-full font-medium hover:bg-yellow-400 transition-colors flex items-center mx-auto">
              Go to Service Page <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-serif text-xl font-semibold text-yellow-400">
                Prashant Bakery
              </h3>
              <p className="text-gray-400">123 Flour Street</p>
              <p className="text-gray-400">Bakerytown, BT 12345</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="mb-4 font-serif text-xl font-semibold text-yellow-400">Hours</h3>
              <p className="text-gray-400">Monday - Friday: 7am - 7pm</p>
              <p className="text-gray-400">Saturday: 8am - 8pm</p>
              <p className="text-gray-400">Sunday: 8am - 5pm</p>
            </div>
            <div>
              <h3 className="mb-4 font-serif text-xl font-semibold text-yellow-400">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
            <p>© 2025 Prashant Bakery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
