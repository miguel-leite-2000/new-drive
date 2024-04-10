import { Check, Contact, Globe, Laptop } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ServiceProps } from "@/helpers/services";

export function CardService({ description, href, icon, title }: ServiceProps) {
  return (
    <div className="p-5 rounded bg-white  space-y-4">
      <div className="flex items-center gap-2 text-zinc-700">
        {icon === "Contact" && <Contact />}
        {icon === "Check" && <Check />}
        {icon === "Globe" && <Globe />}
        {icon === "Laptop" && <Laptop />}

        <h2 className="font-bold text-xl">{title}</h2>
      </div>
      <div>
        <p className="text-zinc-500">{description}</p>
        <Link href={href}>
          <Button className="mt-5 bg-zinc-200 text-zinc-700 hover:bg-zinc-200/80 hover:text-zinc-700">
            Saber mais
          </Button>
        </Link>
      </div>
    </div>
  );
}
