// components/Hero.tsx

import Image from "next/image";

export default function Hero({ data }: any) {
    return (
        <section className="bg-blue-50">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center p-6">

              <div>

                  <h1 className="text-4xl font-bold mb-4">
                      {data.heading}
                  </h1>

                  <p className="mb-6">
                      {data.subheading}
                  </p>

                  <div className="flex gap-4">

                      <button className="bg-blue-600 text-white px-6 py-3 rounded">
                          {data.primaryBtn}
                      </button>

                      <a
                          href="tel:+919876543210"
                          className="border px-6 py-3 rounded"
            >
                          {data.secondaryBtn}
                      </a>

                  </div>

              </div>

              <Image
                  src={data.image}
                  width={500}
                  height={400}
                  alt="hospital"
              />

          </div>

      </section>
  );
}