export type ServiceProps = {
  icon: "Contact" | "Globe" | "Check" | "Laptop";
  title: string;
  description: string;
  href: string;
};

export const services: ServiceProps[] = [
  {
    icon: "Contact",
    title: "AGE",
    description: "Software de gestão para Escolas de condução",
    href: "#",
  },
  {
    icon: "Globe",
    title: "AGE ONLINE",
    description: "Plataforma do registo informático obrigatório online",
    href: "#",
  },
  {
    icon: "Check",
    title: "AVALIAÇÃO",
    description: "Testes de Código da Estrada, Motociclos e Mecânica ",
    href: "#",
  },
  {
    icon: "Laptop",
    title: "SALA VIRTUAL",
    description: "Sala Virtual de ensino para Escolas de Condução ",
    href: "#",
  },
];
