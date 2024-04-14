import Image from "next/image";
import Link from "next/link";
import { Nav } from "../nav";
import { Button } from "@/components/ui/button";
import { Headset } from "lucide-react";

export function MenuDesktop() {
  return (
    <nav className="md:flex items-center justify-between py-5 hidden">
      <Link href="#">
        <Image src="/logo.png" width={80} height={55} alt="Logo" />
      </Link>

      <Nav />

      <Button className="gap-3 bg-red-600 hover:bg-red-600/80">
        Fale conosco <Headset size={16} />
      </Button>
    </nav>
  );
}
