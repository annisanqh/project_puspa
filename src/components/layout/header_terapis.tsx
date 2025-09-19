"use client";

import Image from "next/image";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import { menu } from "./sidebar_terapis"; 

export default function HeaderTerapis() {
  const pathname = usePathname();

  
  const allItems = menu.flatMap((group) => group.items);
  const activeItem = allItems.find(
    (item) => pathname === item.href || pathname.startsWith(item.href + "/")
  );

  const title = activeItem ? activeItem.name : "Dashboard";

  return (
    <header className="w-full flex justify-between items-center p-4 bg-white shadow text-[#36315B]">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex items-center gap-3">
        <span>Hallo, Terapis Puspa</span>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/profil.png"
            alt="Admin"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <button className="relative flex items-center justify-center w-10 h-10 border border-[#36315B] rounded-lg hover:bg-[#81B7A9] hover:text-white transition">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
