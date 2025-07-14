import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Linkedin, MessageCircle, Mail, ExternalLink, Star, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AmandaBitlinkPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">AB</span>
            </div>
            <span className="text-xl font-bold">Amanda Bezerra</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#home" className="hover:text-pink-400 transition-colors">
              Início
            </Link>
            <Link href="#links" className="hover:text-pink-400 transition-colors">
              Links
            </Link>
            <Link href="#sobre" className="hover:text-pink-400 transition-colors">
              Sobre
            </Link>
            <Link href="#contato" className="hover:text-pink-400 transition-colors">
              Contato
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-red-500 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://raw.githubusercontent.com/amanda-bezerra/bitlinkamanda/main/sua-foto.jpg.jpeg"
                    alt="Amanda Bezerra - Marketing Digital"
                    width={120}
                    height={120}
                    className="rounded-full object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Amanda Bezerra
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-2">Marketing Digital & Estratégia</p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Transformo marcas em histórias de sucesso através de estratégias digitais inovadoras e resultados
                mensuráveis.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">5+ anos de experiência</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm">200+ clientes atendidos</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm">Criadora da OxanStore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section id="links" className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Meus Links Principais</h2>

          <div className="space-y-4">
            {/* WhatsApp */}
            <Card className="bg-gradient-to-r from-green-600 to-green-500 border-none hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Link
                  href="https://wa.me/5565999242422"
                  target="_blank"
                  className="flex items-center justify-between text-white"
                >
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-semibold">WhatsApp</h3>
                      <p className="text-green-100">Vamos conversar sobre seu projeto</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="bg-gradient-to-r from-pink-600 to-purple-600 border-none hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Link
                  href="https://instagram.com/euamanda.mkv"
                  target="_blank"
                  className="flex items-center justify-between text-white"
                >
                  <div className="flex items-center space-x-4">
                    <Instagram className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-semibold">Instagram</h3>
                      <p className="text-pink-100">@euamanda.mkv - Dicas e conteúdos</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-500 border-none hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Link
                  href="https://linkedin.com/in/amandamkv"
                  target="_blank"
                  className="flex items-center justify-between text-white"
                >
                  <div className="flex items-center space-x-4">
                    <Linkedin className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-semibold">LinkedIn</h3>
                      <p className="text-blue-100">Conecte-se comigo profissionalmente</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-gradient-to-r from-gray-700 to-gray-600 border-none hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Link
                  href="mailto:amandagbezerra0611@gmail.com"
                  className="flex items-center justify-between text-white"
                >
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-semibold">E-mail</h3>
                      <p className="text-gray-200">Para propostas comerciais</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-pink-400">Especialista em Marketing Digital</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Com mais de 5 anos de experiência no mercado digital, ajudo empresas e empreendedores a alcançarem seus
                objetivos através de estratégias personalizadas e inovadoras.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Minha missão é transformar ideias em resultados concretos, utilizando as melhores práticas do marketing
                digital para gerar leads qualificados e aumentar as vendas.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Gestão de Redes Sociais</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Tráfego Pago (Facebook e Google Ads)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Estratégia de Conteúdo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Automação de Marketing</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">200+</div>
                    <div className="text-gray-400">Clientes Atendidos</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">POSICIONAR</div>
                    <div className="text-gray-400">Sua marca no mercado </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                    <div className="text-gray-400">Anos de Experiência</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-16 px-4 bg-gradient-to-r from-pink-900/20 to-red-900/20">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Transformar seu Negócio?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Vamos conversar sobre como posso ajudar você a alcançar seus objetivos no marketing digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-3 text-lg"
            >
              <Link href="https://wa.me/5565999242422" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-8 py-3 text-lg bg-transparent"
            >
              <Link href="https://instagram.com/euamanda.mkv" target="_blank">
                <Instagram className="w-5 h-5 mr-2" />
                Seguir no Instagram
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">AB</span>
            </div>
            <span className="text-lg font-semibold">Amanda Bezerra</span>
          </div>
          <p className="text-gray-400 mb-4">Marketing Digital & Estratégia</p>
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="https://wa.me/5565999242422" target="_blank" className="text-gray-400 hover:text-green-400">
              <MessageCircle className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com/euamanda.mkv"
              target="_blank"
              className="text-gray-400 hover:text-pink-400"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/amandamkv"
              target="_blank"
              className="text-gray-400 hover:text-blue-400"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Amanda Bezerra. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
