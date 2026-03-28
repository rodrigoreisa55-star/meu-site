import { Heart, Award, Clock, Shield } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Dedicação",
      description: "Trabalhamos com amor e cuidado em cada detalhe.",
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Utilizamos os melhores produtos e técnicas.",
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Respeitamos seu tempo e cumprimos prazos.",
    },
    {
      icon: Shield,
      title: "Confiança",
      description: "Profissionais treinados e de confiança.",
    },
  ]

  return (
    <section id="sobre" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Sobre Nós
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Cuidando do seu espaço com carinho e profissionalismo
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Ruthylene Reis Limpezas</strong> nasceu da paixão 
                por transformar ambientes e proporcionar bem-estar através da limpeza profissional.
              </p>
              <p>
                Com anos de experiência no mercado, nossa equipe é treinada para entregar sempre o 
                melhor resultado, utilizando produtos de qualidade e técnicas modernas de limpeza.
              </p>
              <p>
                Nosso compromisso é com a sua satisfação. Cada ambiente que limpamos recebe atenção 
                especial, porque acreditamos que um espaço limpo contribui para uma vida mais saudável e feliz.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-card p-6 rounded-2xl border border-border ${
                  index % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
