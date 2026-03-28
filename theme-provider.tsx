import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, CheckCircle2 } from "lucide-react"

export default function Hero() {
  const highlights = [
    "Limpeza Residencial",
    "Limpeza Comercial",
    "Pós-Obra",
  ]

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Limpeza Profissional de Qualidade
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Ambientes limpos,{" "}
              <span className="text-primary">vida mais leve</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transformamos seu espaço com dedicação e profissionalismo. 
              Serviços de limpeza residencial e comercial que fazem a diferença no seu dia a dia.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="#contato">Solicitar Orçamento</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#servicos">Nossos Serviços</Link>
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-primary/20 rounded-full" />
              <div className="absolute inset-4 bg-primary/30 rounded-full" />
              <div className="absolute inset-8 bg-card rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="font-serif text-2xl font-semibold text-foreground mb-2">
                    Ruthylene Reis
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    Limpezas Profissionais
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 -left-4 bg-card p-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">Satisfação</p>
              </div>

              <div className="absolute bottom-10 -right-4 bg-card p-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-primary">+500</p>
                <p className="text-xs text-muted-foreground">Clientes Felizes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
