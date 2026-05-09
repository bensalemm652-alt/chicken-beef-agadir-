export default function ChickenBeefAgadirWebsite() {
  const menu = [
    {
      name: "Chicken Bacon Bowl",
      price: "55 MAD",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Tacos Chèvre Miel",
      price: "65 MAD",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Royal Beef Cheese",
      price: "69 MAD",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Double Bacon Burger",
      price: "75 MAD",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Wrap Chicken Roll",
      price: "48 MAD",
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Wrap Spicy Beef",
      price: "58 MAD",
      image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Lemonade",
      price: "15 MAD",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Coca Cola",
      price: "12 MAD",
      image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section
        className="relative h-screen flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-black tracking-wide text-yellow-400 drop-shadow-lg">
            Chicken Beef Agadir
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed">
            Best Burgers, Tacos & Fast Food in Agadir
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="#menu"
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition"
            >
              View Menu
            </a>

            <a
              href="https://glovoapp.com"
              target="_blank"
              className="border-2 border-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-black transition"
            >
              Order on Glovo
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
            alt="Restaurant"
            className="rounded-3xl shadow-2xl h-[420px] object-cover w-full"
          />

          <div>
            <h2 className="text-5xl font-black text-yellow-400 mb-6">
              Welcome
            </h2>

            <p className="text-gray-300 text-lg leading-8">
              Chicken Beef Agadir offers delicious burgers, tacos, fries,
              sandwiches and drinks with fast service and high quality.
            </p>

            <div className="mt-8 space-y-4 text-lg">
              <div>
                📍 Agadir, Morocco
              </div>

              <div>
                📞 +212 6 12 34 56 78
              </div>

              <div>
                🕒 Open Every Day: 10:00 AM - 01:00 AM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center text-yellow-400 mb-16">
            Our Full Menu
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {menu.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{item.name}</h3>

                  <p className="mt-3 text-yellow-400 text-xl font-bold">
                    {item.price}
                  </p>

                  <button className="mt-6 w-full bg-yellow-400 text-black py-3 rounded-2xl font-bold hover:bg-yellow-300 transition">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black text-yellow-400 mb-10">
            Payment Methods
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black rounded-3xl p-8 border border-zinc-800">
              <div className="text-5xl">💵</div>
              <h3 className="text-2xl font-bold mt-4">Cash</h3>
              <p className="text-gray-400 mt-2">Pay directly at delivery</p>
            </div>

            <div className="bg-black rounded-3xl p-8 border border-zinc-800">
              <div className="text-5xl">💳</div>
              <h3 className="text-2xl font-bold mt-4">Bank Card</h3>
              <p className="text-gray-400 mt-2">Secure online payment</p>
            </div>

            <div className="bg-black rounded-3xl p-8 border border-zinc-800">
              <div className="text-5xl">📱</div>
              <h3 className="text-2xl font-bold mt-4">Mobile Payment</h3>
              <p className="text-gray-400 mt-2">Fast and easy payment</p>
            </div>
          </div>
        </div>
      </section>

      {/* GLOVO */}
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="text-5xl font-black text-yellow-400 mb-8">
          Order With Glovo
        </h2>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-8">
          Get your favorite meals delivered quickly to your home.
        </p>

        <a
          href="https://glovoapp.com"
          target="_blank"
          className="inline-block mt-10 bg-green-500 px-10 py-5 rounded-2xl text-2xl font-black hover:scale-105 transition"
        >
          Open Glovo
        </a>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-yellow-400 mb-10">
            Contact Us
          </h2>

          <div className="bg-black rounded-3xl p-10 border border-zinc-800 shadow-2xl">
            <p className="text-2xl mb-4">📞 +212 6 12 34 56 78</p>
            <p className="text-xl text-gray-400 mb-8">
              Call us anytime for orders and information.
            </p>

            <a
              href="tel:+212612345678"
              className="bg-yellow-400 text-black px-10 py-4 rounded-2xl font-black text-xl hover:bg-yellow-300 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-zinc-800 py-8 text-center text-gray-500">
        © 2026 Chicken Beef Agadir - All Rights Reserved
      </footer>
    </div>
  );
}
