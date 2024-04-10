"use client";

import { Nav } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";

import Car from "@/assets/car.png";
import { Button } from "@/components/ui/button";
import { Contact, Headset } from "lucide-react";
import { services } from "@/helpers/services";
import { CardService } from "@/components/card-service";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="mb-20">
        <div className="container">
          <nav className="flex items-center justify-between py-5">
            <Link href="#">
              <Image src="/logo.png" width={80} height={55} alt="Logo" />
            </Link>

            <Nav />

            <Button className="gap-3 bg-red-600 hover:bg-red-600/80">
              Fale conosco <Headset size={16} />
            </Button>
          </nav>
        </div>

        <div className="2xl:container flex items-center justify-between mt-24">
          <div className="max-2xl:container flex-1">
            <h1 className="text-zinc-700 text-4xl font-black">
              Explore o software de apoio ao ensiono da condução com a{" "}
              <span className="text-primairy">New Drive</span>.
            </h1>
            <p className="text-base mt-8">
              Esteja você planejando aprender a conduzir, precisa de um mentor
              confiável para guia-lo durante a sua apreendizagem, ou apenas
              deseja a comodidade de ter o nosso software à sua disposição, nós
              ajudamos você.
            </p>
            <Button className="mt-5"> Instalar agora </Button>
          </div>

          <div className="flex-1">
            <Image src={Car} alt="Car Image" />
          </div>
        </div>
      </header>

      <section className="bg-red-600 w-full py-20 mb-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <CardService key={index} {...service} />
          ))}
        </div>
      </section>

      <section className="container space-y-10 mb-10">
        <h2>Quem somos</h2>
      </section>
    </main>
  );
}
