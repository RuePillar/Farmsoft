export default function Plan() {
  return (
    <main className="min-h-screen bg-[#061016] p-8 text-white">

      <div className="mb-8">
        <p className="text-sm text-green-400">
          Farm Planning
        </p>

        <h1 className="mt-1 text-3xl font-bold">
          Plan Your Farm
        </h1>

        <p className="mt-2 text-gray-400">
          Organize your crops, activities and farming goals.
        </p>
      </div>


      <div className="grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl border border-green-950 bg-[#0a1b20] p-6">
          <h2 className="text-lg font-semibold">
            Crop Planning
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Plan what you want to plant and when.
          </p>

          <button className="mt-5 rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-black hover:bg-green-400">
            Create Plan
          </button>
        </div>


        <div className="rounded-2xl border border-green-950 bg-[#0a1b20] p-6">
          <h2 className="text-lg font-semibold">
            Farm Activities
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Keep track of important farming activities.
          </p>

          <button className="mt-5 rounded-lg border border-green-800 px-4 py-2 text-sm font-semibold text-green-400 hover:bg-green-900/30">
            Add Activity
          </button>
        </div>


        <div className="rounded-2xl border border-green-950 bg-[#0a1b20] p-6">
          <h2 className="text-lg font-semibold">
            Farming Goals
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Set production and financial goals for your farm.
          </p>

          <button className="mt-5 rounded-lg border border-green-800 px-4 py-2 text-sm font-semibold text-green-400 hover:bg-green-900/30">
            Set Goal
          </button>
        </div>

      </div>

    </main>
  );
}