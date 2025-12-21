"use client";

import { MapPin } from "phosphor-react";

export default function LocationRow() {
  return (
    <div className="flex items-center gap-2 text-sm text-neutral-400">
      <MapPin size={16} className="text-[#1565c0]" />
      <span>San Francisco, CA</span>

      <div className="ml-4 h-px w-40 bg-neutral-700 opacity-50" />
    </div>
  );
}