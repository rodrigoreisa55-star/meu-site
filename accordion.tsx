import { Home, Building2, Construction, Sparkles, Building, Wind } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Limpeza Residencial",
      description:
        "Cuidamos da sua casa com carinho e atenção aos detalhes. Limpeza completa de todos os cômodos.",
    },
    {
      icon: Building2,
      title: "Limpeza Comercial",
      description:
        "Mantenha seu ambiente de trabalho impecável. Escritórios, lojas e estabelecimentos comerciais.",
    },
    {
      icon: Construction,
      title: "Limpeza Pós-Obra",
      description:
        "Removemos toda sujeira pesada após reformas e construções, deixando o ambiente pronto para uso.",
    },
    {
      icon: Building,
      title: "Limpeza de Condomínios",
      description:
        "Manutenção e limpeza completa de áreas comuns, halls, escadas, garagens e espaços compartilhados.",
    },
    {
      icon: Wind,
      title: "Limpeza de Vidros",
      description:
        "Janelas, vitrines e fachadas cristalinas. Utilizamos produtos especiais para um brilho perfeito.",
    },
    {
      icon: Sparkles,
      title: "Limpeza Pesada",
      description:
        "Para aqueles casos que precisam de uma atenção extra. Limpamos até os cantos mais difíceis.",
    },
  ]

  return (
    <section id="servicos" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Soluções completas em limpeza
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oferecemos uma variedade de serviços para atender todas as suas necessidades de limpeza, 
            sempre com qualidade e profissionalismo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
