import Image from "next/image";
import Link from "next/link";
import { Nav } from "../nav";
import { Button } from "@/components/ui/button";
import { Headset, Menu, X } from "lucide-react";
import { useState } from "react";

export function MenuMobile() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="flex flex-col gap-5 items-start py-5 md:hidden">
      <div className="w-full flex items-center justify-between">
        <Link href="#">
          <Image src="/logo.png" width={80} height={55} alt="Logo" />
        </Link>

        <Button
          className="bg-transparent text-zinc-700 hover:bg-zinc-200 focus:bg-zinc-200 md:hidden"
          onClick={(e) => setOpen(!open)}
        >
          <Menu />
        </Button>
      </div>
      <div
        data-toggle={open}
        className="data-[toggle=false]:hidden data-[toggle=true]:block bg-white fixed left-0 top-0 w-screen h-screen space-y-3 p-2 transition-all z-[999] overflow-y-scroll"
      >
        <div className="flex items-center justify-between">
          <Image src="/logo.png" width={80} height={55} alt="Logo" />
          <Button
            className="bg-transparent text-zinc-700 hover:bg-zinc-200 focus:bg-zinc-200 md:hidden"
            onClick={(e) => setOpen(!open)}
          >
            <X />
          </Button>
        </div>
        <div className="space-y-5">
          <Nav />
          <Button className="gap-3 bg-red-600 hover:bg-red-600/80">
            Fale conosco <Headset size={16} />
          </Button>
        </div>
      </div>
    </nav>
  );
}
