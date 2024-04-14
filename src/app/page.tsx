"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Nav } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";

import Car from "@/assets/car.png";
import Woman from "@/assets/woman.png";
import { Button } from "@/components/ui/button";
import { Headset, HomeIcon, PhoneIcon } from "lucide-react";
import { services } from "@/helpers/services";
import { CardService } from "@/components/card-service";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MenuDesktop } from "@/components/menu/menu-desktop";
import { MenuMobile } from "@/components/menu/menu-mobile";

export default function Home() {
  const FormSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().min(2, {
      message: "E-mail must be at least 2 characters.",
    }),
    subject: z.string().min(2, {
      message: "Subject must be at least 2 characters.",
    }),
    message: z.string().min(2, {
      message: "Message must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <main className="min-h-screen">
      <header className="mb-20">
        <div className="container">
          <MenuDesktop />
          <MenuMobile />
        </div>

        <div className="2xl:container grid grid-cols-1 max-md:gap-10 md:grid-cols-2 mt-10 md:mt-24">
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

      <section className="max-w-6xl mx-auto md:border border-red-600  rounded-xl p-10 space-y-10 mb-10">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="hidden md:block">
            <Image src={Woman} alt="Woman" />
          </div>
          <div className="flex-1 text-zinc-700 space-y-5">
            <h2 className="text-3xl inline-block font-bold relative before:absolute before:bottom-0 before:bg-red-600 before:w-6/12 before:h-1 before:left-0 pb-2 mb-8">
              Quem somos
            </h2>
            <p>
              Em 2014 a VDAUDIT – Software, Auditoria e Estudos, Lda. cedeu os
              direitos do seu software à firma INTERAGE – Aplicações
              interactivas, Unipessoal, Lda. A Interage é uma firma de Artur
              Cardoso, antigo colaborador da VDAUDIT, que esteve envolvido na
              criação, desenvolvimento e manutenção do software desta firma
              desde 1999. A Interage criou a marca Ensinar a Conduzir para dar
              continuidade ao software da VDAUDIT, ou seja, apoiar os seus
              clientes e desenvolver novas soluções para as suas necessidades.
            </p>
            <h3 className="font-bold text-zinc-700 text-xl">New Drive</h3>
            <p>
              New Drive é uma marca que se destina a desenvolver e comercializar
              produtos e serviços no setor do ensino e formação rodoviária.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 text-zinc-300 pt-20 pb-32 my-20">
        <div className="container">
          <h2 className="text-3xl inline-block text-white font-bold relative before:absolute before:bottom-0 before:bg-red-600 before:w-6/12 before:h-1 before:left-0 pb-2 mb-8">
            Suporte
          </h2>
          <div className="mb-5 space-y-5">
            <h3 className="text-xl font-semibold text-white">
              Apoio ao sistema SIPOL (cartas de condução) do IMT.
            </h3>
            <p>
              Este serviço destina-se a clientes do AGE – Gestão Administrativa
              ou mediante o pagamento de 80 Euros por seis meses. Inclui
              instalação, configuração e apoio ao funcionamento através de
              assistência remota e telefone.{" "}
              <strong>
                Ligue 966 618 918 (Chamada para rede móvel nacional)
              </strong>
              .
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: 8 }, (_, index) => (
              <Link
                href="#"
                key={index}
                className="p-5 rounded border border-zinc-800 bg-zinc-900 hover:border-red-600 transition"
                target="_blank"
              >
                Acesso ao SIPOL
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container mb-20">
        <h2 className="text-3xl inline-block font-bold relative before:absolute before:bottom-0 before:bg-red-600 before:w-6/12 before:h-1 before:left-0 pb-2 mb-8">
          Fale Conosco
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="grid grid-cols-1 gap-5">
            <div className="flex items-center gap-5 py-2.5 px-5 rounded-lg border border-zinc-300 bg-zinc-100">
              <HomeIcon className="size-11 text-red-600" />
              <p>
                Rua César de Oliveira, 18C, Telheiras, 1600-427 Lisboa, Portugal
              </p>
            </div>

            <div className="flex items-center gap-5 py-2.5 px-5 rounded-lg border border-zinc-300 bg-zinc-100">
              <PhoneIcon className="size-11 text-red-600" />
              <p>217 570 220 (Chamada para a rede fixa nacional)</p>
            </div>

            <div className="flex items-center gap-5 py-2.5 px-5 rounded-lg border border-zinc-300 bg-zinc-100">
              <PhoneIcon className="size-11 text-red-600" />
              <p>966 618 918 (Chamada para rede móvel nacional)</p>
            </div>
          </div>
          <div className="md:col-span-2 space-y-5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-5 mt-5">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assunto</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            className="resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button className="w-full mt-5 bg-green-600 hover:bg-green-600/80">
                  Enviar mensagem
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <footer className="w-full bg-zinc-950 text-zinc-300 py-10">
        <div className="container">
          <div className="mx-auto max-w-xl w-full text-center flex flex-col items-center justify-center gap-5">
            <Image src="/logo.png" width={80} height={55} alt="Logo" />
            <p>
              Em 2014 a VDAUDIT – Software, Auditoria e Estudos, Lda. cedeu os
              direitos do seu software à firma INTERAGE – Aplicações
              interactivas.
            </p>
          </div>

          <div className="flex flex-col gap-5 items-center justify-center mt-16">
            <ul className="flex items-center flex-wrap justify-center gap-10">
              <li>
                <Link href="#"> Home </Link>
              </li>
              <li>
                <Link href="#"> Quem somos? </Link>
              </li>
              <li>
                <Link href="#"> Gestão </Link>
              </li>
              <li>
                <Link href="#"> Plataforma AGEOnline </Link>
              </li>
              <li>
                <Link href="#"> Avaliação </Link>
              </li>
              <li>
                <Link href="#"> Sala Virtual </Link>
              </li>
              <li>
                <Link href="#"> Suporte </Link>
              </li>
              <li>
                <Link href="#"> Contacto </Link>
              </li>
            </ul>

            <div className="flex items-center justify-center gap-10 my-10">
              <div className="size-10 rounded-full bg-white" />
              <div className="size-10 rounded-full bg-white" />
              <div className="size-10 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
