const routes = [
  {
    from: "Bengaluru",
    to: "Mysuru",
    price: "₹399",
  },
  {
    from: "Mangaluru",
    to: "Bengaluru",
    price: "₹699",
  },
  {
    from: "Hyderabad",
    to: "Chennai",
    price: "₹899",
  },
  {
    from: "Mumbai",
    to: "Pune",
    price: "₹499",
  },
];

const PopularRoutes = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold">
        Popular Routes
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {routes.map((route) => (
          <div
            key={`${route.from}-${route.to}`}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">
              {route.from}
            </h3>

            <p className="my-2 text-gray-500">
              ↓
            </p>

            <h3 className="text-xl font-semibold">
              {route.to}
            </h3>

            <div className="mt-6 flex items-center justify-between">
              <span className="font-bold text-red-600">
                {route.price}
              </span>

              <button className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRoutes;