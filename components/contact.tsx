import { Mail, Instagram, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "limpezasruthylenereis@gmail.com",
      href: "mailto:limpezasruthylenereis@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@ruthylenereis.limpezas",
      href: "https://instagram.com/ruthylenereis.limpezas",
    },
  ]

  return (
    <section id="contato" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Contato
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Vamos conversar?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Entre em contato conosco para solicitar um orçamento ou tirar suas dúvidas. 
              Estamos prontos para atendê-lo!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact) => (
              <Link
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                  <p className="font-medium text-foreground">{contact.value}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* TikTok Card */}
          <div className="bg-background rounded-2xl border border-border p-8 text-center">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground mb-2">TikTok</p>
            <p className="font-medium text-foreground text-lg mb-4">@limpezas.rutilene</p>
            <Button asChild variant="outline">
              <Link
                href="https://tiktok.com/@limpezas.rutilene"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seguir no TikTok
              </Link>
            </Button>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Prefere falar diretamente conosco?
            </p>
            <Button size="lg" asChild>
              <Link href="mailto:limpezasruthylenereis@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Enviar E-mail
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
