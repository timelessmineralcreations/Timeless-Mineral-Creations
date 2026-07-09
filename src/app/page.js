export default function Home() {
  return (
    <>
     {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero-ring.jpg')",
        }}
      >
        <div className="bg-black/50 p-10 rounded-xl text-center text-white">

          <h1 className="text-6xl font-bold mb-4">
            Memories Crafted to Last Forever
          </h1>

          <p className="text-xl max-w-2xl mb-8">
            Handcrafted memorial jewelry made with cremation ashes, hair, fur,
            flowers, and other meaningful inclusions.
          </p>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition">
            Shop Collection
          </button>

        </div>
      </section>

      {/* Featured Collection */}
      <section className="bg-white text-black py-24 px-8">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-4">
            Featured Memorial Rings
          </h2>

          <p className="text-center text-gray-600 mb-16">
            Every ring is individually handcrafted using your loved one's
            ashes, hair, fur, flowers, sand, or other meaningful inclusions.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">
              <img
                src="/hero-ring.jpg"
                alt="Turquoise Memorial Ring"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Turquoise Memorial Ring
                </h3>

                <p className="text-gray-600 mt-3">
                  Our most popular handcrafted memorial ring featuring natural
                  turquoise.
                </p>

                <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-full">
                  View Ring
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">
              <img
                src="/hero-ring.jpg"
                alt="Custom Ashes Ring"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Custom Ashes Ring
                </h3>

                <p className="text-gray-600 mt-3">
                  Designed specifically for your loved one with your choice of
                  meaningful materials.
                </p>

                <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-full">
                  View Ring
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">
              <img
                src="/hero-ring.jpg"
                alt="Glow Collection"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Glow Collection
                </h3>

                <p className="text-gray-600 mt-3">
                  Memorial rings that softly glow after exposure to sunlight or
                  UV light.
                </p>

                <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-full">
                  View Ring
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* Why Choose Us */}
<section className="bg-gray-100 py-24 px-8">
  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-5xl font-bold mb-6">
      Why Families Trust Timeless Mineral Creations
    </h2>

    <p className="text-gray-600 text-lg mb-16">
      Every memorial piece is handcrafted with care, compassion, and attention to detail.
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      <div className="bg-white p-10 rounded-2xl shadow-lg">
        <div className="text-6xl mb-4">❤️</div>
        <h3 className="text-2xl font-bold mb-3">
          Handmade With Care
        </h3>
        <p className="text-gray-600">
          Every piece is individually handcrafted by me—not mass produced.
        </p>
      </div>

      <div className="bg-white p-10 rounded-2xl shadow-lg">
        <div className="text-6xl mb-4">📦</div>
        <h3 className="text-2xl font-bold mb-3">
          Secure Mail-In Process
        </h3>
        <p className="text-gray-600">
          Your memorial materials are handled respectfully and returned whenever possible.
        </p>
      </div>

      <div className="bg-white p-10 rounded-2xl shadow-lg">
        <div className="text-6xl mb-4">✨</div>
        <h3 className="text-2xl font-bold mb-3">
          Completely Custom
        </h3>
        <p className="text-gray-600">
          Choose your favorite minerals, glow powders, opals, wood, or other meaningful inclusions.
        </p>
      </div>

    </div>

  </div>
</section>
    </>
  );
}