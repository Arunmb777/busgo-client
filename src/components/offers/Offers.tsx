import { offers } from "../../constants/offers";

const Offers = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">🎁 Special Offers</h2>

        <button className="font-medium text-red-600 hover:underline">
          View All
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`rounded-3xl bg-gradient-to-r ${offer.color} p-8 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
          >
            <p className="text-sm opacity-80">
              Limited Time
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              {offer.title}
            </h3>

            <p className="mt-3">
              {offer.description}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <span className="rounded-full bg-white/20 px-4 py-2 font-semibold">
                {offer.code}
              </span>

              <button className="rounded-lg bg-white px-5 py-2 font-semibold text-black transition hover:bg-gray-100">
                Claim
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;