"use client";

import { TravelCard } from "./travel-card";
import destinationsData from "./data.json";


export function TravelGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Amazing Destinations
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-center px-4 font-medium">
          🌍 Explore our handpicked collection of{" "}
          <span className="text-blue-600 font-semibold">
            breathtaking destinations
          </span>{" "}
          around the world. From{" "}
          <span className="text-emerald-600 font-semibold">
            tropical paradises
          </span>{" "}
          to{" "}
          <span className="text-rose-600 font-semibold">bustling cities</span>,
          find your perfect getaway.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {destinationsData.map((destination) => (
          <TravelCard
            key={destination.id}
            location={destination.location}
            title={destination.title}
            description={destination.description}
            price={destination.price}
            rating={destination.rating}
            duration={destination.duration}
            image={destination.image}
          />
        ))}
      </div>
    </div>
  );
}
