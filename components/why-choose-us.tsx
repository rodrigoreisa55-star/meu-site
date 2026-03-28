import { CheckCircle2 } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    "Profissionais treinados e qualificados",
    "Produtos de limpeza de alta qualidade",
    "Atendimento personalizado",
    "Preços justos e transparentes",
    "Pontualidade garantida",
    "Satisfação do cliente em primeiro lugar",
    "Equipamentos modernos e eficientes",
    "Flexibilidade de horários",
  ]

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-medium text-primary-foreground/80 uppercase tracking-wider mb-4">
              Por Que Nos Escolher
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Qualidade e confiança que fazem a diferença
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Escolher a Ruthylene Reis Limpezas significa optar por um serviço de excelência, 
              onde cada detalhe é tratado com o máximo cuidado e atenção.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 bg-primary-foreground/10 p-4 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-primary-foreground shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/90">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
