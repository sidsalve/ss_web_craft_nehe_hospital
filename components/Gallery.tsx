// components/Gallery.tsx
"use client";

import { useState } from "react";

export default function Gallery({ data, heading }: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const openModal = (img: string) => {
    setCurrentImg(img);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section id="gallery" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-slate-900">
          {heading}
        </h2>

        {/* Scrollable Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex flex-nowrap gap-4">

            {/* Two rows using flex-col on each image stack */}
            {data.map((img: any, i: number) => (
              <div
                key={i}
                className="flex flex-col gap-4 flex-none w-48 sm:w-56 md:w-64 cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  // onClick={() => openModal(img.src)}
                  className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                />
                <img
                  src={img.src}
                  alt={img.alt}
                  // onClick={() => openModal(img.src)}
                  className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={currentImg}
            alt="Preview"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}