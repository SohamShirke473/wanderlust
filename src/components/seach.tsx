// components/SearchBar.tsx
"use client";

import React from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchBar() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-2xl max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <MapPin className="h-4 w-4" />
          <Input placeholder="Where to?" className="border-0 p-0 text-sm" />
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Calendar className="h-4 w-4" />
          <Input
            placeholder="Check-in"
            type="date"
            className="border-0 p-0 text-sm"
          />
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Users className="h-4 w-4" />
          <Input placeholder="Guests" className="border-0 p-0 text-sm" />
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 w-full">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
}
