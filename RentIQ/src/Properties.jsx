import React, { useEffect, useState } from "react";

const Properties = () => {
  const [properties, setProperties] = useState([]);

 useEffect(() => {
  fetch("/dummy_properties.json")
    .then((res) => {
      console.log("Response status:", res.status);
      return res.json();
    })
    .then((data) => {
      console.log("JSON Loaded:", data);
      setProperties(data.properties ?? []);
    })
    .catch((err) => console.error("ERROR:", err));
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
              src={item.images[0]}
              alt={item.title}
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
