import React, { useEffect, useState } from "react";

const Properties = () => {
  const [properties, setProperties] = useState([]);

useEffect(() => {
  // `dummy_properties.json` now lives in `public/` and is available at '/dummy_properties.json'
  fetch('/dummy_properties.json')
    .then((res) => res.json())
    .then((data) => {
      const combined = Array.isArray(data) ? data.flatMap((city) => city.properties ?? []) : [];
      console.log('Fetched JSON, combined properties:', combined.length);
      setProperties(combined);
    })
    .catch((err) => {
      console.error('ERROR fetching JSON:', err);
      setProperties([]);
    });
}, []);
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {properties.length === 0 ? (
        <p className="text-center text-red-600 text-xl font-bold">
          No properties found!
        </p>
      ) : (
        properties.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <img
              src={(item.images && item.images[0]) || '/fallback.svg'}
              alt={item.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/fallback.svg';
              }}
              className="w-full h-48 object-cover rounded mt-2"
            />
            <p className="mt-2 text-gray-700">Price: Rs {item.price}</p>
            <p className="text-gray-500">{item.location}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Properties;
