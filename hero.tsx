import Link from "next/link"
import { Sparkles, Instagram, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/ruthylenereis.limpezas",
      label: "Instagram",
    },
    {
      icon: () => (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      href: "https://tiktok.com/@limpezas.rutilene",
      label: "TikTok",
    },
    {
      icon: Mail,
      href: "mailto:limpezasruthylenereis@gmail.com",
      label: "E-mail",
    },
  ]

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold text-background leading-tight">
                  Ruthylene Reis
                </span>
                <span className="text-xs text-background/60 tracking-wider uppercase">
                  Limpezas
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Transformando ambientes com dedicação e profissionalismo. 
              Sua satisfação é nossa prioridade.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-background mb-4">Navegação</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-background mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/50">
            © {currentYear} Ruthylene Reis Limpezas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
