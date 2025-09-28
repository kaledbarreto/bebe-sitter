"use client";

import { useState, useEffect } from "react";
import {
  Star,
  Shield,
  Heart,
  Users,
  CheckCircle,
  ArrowRight,
  Baby,
  Award,
  Globe,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

// Componente SVG customizado do WhatsApp
const WhatsApp = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.488" />
  </svg>
);

export default function BebeSitterLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  type FloatingElement = {
    id: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
  };
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>(
    []
  );

  useEffect(() => {
    setIsVisible(true);
    // Criar elementos flutuantes aleatórios
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setFloatingElements(elements);
  }, []);

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Mãe de 2 filhos - São Paulo",
      text: "Finalmente posso sair de casa com total tranquilidade! A babá formada pela Bebê Sitter salvou minha rotina e me devolveu a paz de espírito.",
      rating: 5,
      highlight: "Mudou minha vida como mãe",
      results: "Reduziu 90% da minha ansiedade",
    },
    {
      name: "Ana Paula Costa",
      role: "Cuidadora Certificada - Internacional",
      text: "De desempregada a trabalhar em resort 5 estrelas na Europa! O curso me abriu portas que eu nem sabia que existiam.",
      rating: 5,
      highlight: "De R$ 800 para R$ 4.500/mês",
      results: "Trabalho dos sonhos conquistado",
    },
    {
      name: "Hotel Vila Real",
      role: "Resort de Luxo - Bahia",
      text: "Contratamos APENAS babás certificadas pela Bebê Sitter. Nossos hóspedes VIP exigem o melhor, e só elas entregam essa qualidade.",
      rating: 5,
      highlight: "100% de satisfação dos hóspedes",
      results: "Parceria exclusiva há 3 anos",
    },
    {
      name: "Juliana Mendes",
      role: "Executiva - Rio de Janeiro",
      text: "Minha carreira decolou depois que encontrei uma babá formada pela Carla. Posso viajar a trabalho sem culpa ou preocupação.",
      rating: 5,
      highlight: "Carreira e maternidade em equilíbrio",
      results: "Promoção conquistada em 6 meses",
    },
  ];

  const benefitsForFamilies = [
    {
      icon: Shield,
      title: "Segurança Total",
      description:
        "Deixe seus filhos com alguém realmente preparada para qualquer situação",
      features: [
        "Primeiros socorros",
        "Gestão de emergências",
        "Cuidados especializados",
      ],
    },
    {
      icon: Heart,
      title: "Tranquilidade",
      description:
        "Confiança total no dia a dia, sabendo que seu filho está em boas mãos",
      features: [
        "Rotina estruturada",
        "Desenvolvimento emocional",
        "Comunicação constante",
      ],
    },
  ];

  const benefitsForCaregivers = [
    {
      icon: Award,
      title: "Profissão Valorizada",
      description:
        "Transforme sua paixão por crianças em uma carreira de sucesso",
      features: [
        "Certificação reconhecida",
        "Oportunidades premium",
        "Networking profissional",
      ],
    },
    {
      icon: Globe,
      title: "Mercado Global",
      description:
        "Abra portas para trabalhar no Brasil e no exterior com nossa formação",
      features: [
        "Hotéis internacionais",
        "Famílias expatriadas",
        "Cruzeiros de luxo",
      ],
    },
  ];

  const stats = [
    { number: "7.000+", label: "Cuidadoras Capacitadas", icon: Users },
    { number: "15+", label: "Anos de Experiência", icon: Award },
    { number: "100%", label: "Satisfação das Famílias", icon: Star },
    { number: "50+", label: "Países Atendidos", icon: Globe },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Elementos flutuantes animados */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animation: `float ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          />
        ))}

        {/* Ondas de fundo animadas */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-yellow-400/30 to-pink-400/30 rounded-full blur-3xl"></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            {/* Ícone animado */}
            <div className="flex justify-center mb-8">
              <div
                className={`p-6 bg-white/20 rounded-full backdrop-blur-sm transition-all duration-1000 ${
                  isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
              >
                <Baby className="w-16 h-16" />
              </div>
            </div>

            {/* Título com animação de digitação */}
            <h1
              className={`text-5xl md:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="inline-block">Confiança</span>{" "}
              <span className="inline-block" style={{ animationDelay: "0.5s" }}>
                não se
              </span>{" "}
              <span
                className="inline-block text-yellow-300"
                style={{ animationDelay: "1s" }}
              >
                improvisa
              </span>
              ,<br />
              <span
                className="inline-block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
                style={{ animationDelay: "1.5s" }}
              >
                SE CONSTRÓI!
              </span>
            </h1>

            {/* Subtítulo com efeito de fade-in */}
            <p
              className={`text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed opacity-95 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-95"
                  : "translate-y-10 opacity-0"
              }`}
            >
              A formação que já transformou a vida de{" "}
              <span className="bg-yellow-300 text-gray-900 px-3 py-1 rounded-full font-black">
                +7.000 cuidadoras
              </span>{" "}
              infantis em todo o Brasil agora pode mudar a sua realidade como
              mãe, família ou futura profissional.
            </p>

            {/* Botão CTA com animações intensas */}
            <div
              className={`transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100 text-gray-900 px-10 py-6 rounded-full font-bold text-xl transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <WhatsApp className="relative w-8 h-8" />
                <span className="relative">
                  QUERO FAZER PARTE DO GRUPO EXCLUSIVO
                </span>
                <ArrowRight className="relative w-8 h-8 group-hover:translate-x-2 transition-transform" />

                {/* Ondas de impacto */}
                {/* <div className="absolute inset-0 rounded-full border-2 border-yellow-300 animate-ping opacity-75"></div>
                <div
                  className="absolute inset-0 rounded-full border-2 border-orange-300 animate-ping opacity-50"
                  style={{ animationDelay: "0.5s" }}
                ></div> */}
              </button>

              <p className="mt-6 text-yellow-200 text-lg">
                ✨ <span className="font-bold">ATENÇÃO:</span> Vagas limitadas •
                Acesso 100% gratuito • Transformação garantida
              </p>
            </div>

            {/* Elementos de urgência */}
            <div className="mt-12 flex justify-center space-x-8">
              {[
                { number: "7.000+", label: "Vidas Transformadas" },
                { number: "15+", label: "Anos de Sucesso" },
                { number: "100%", label: "Satisfação" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${2000 + index * 200}ms` }}
                >
                  <div className="text-3xl font-black text-yellow-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Adicionando CSS para animações customizadas */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            33% {
              transform: translateY(-10px) rotate(120deg);
            }
            66% {
              transform: translateY(10px) rotate(240deg);
            }
          }

          .bg-size-200 {
            background-size: 200% 200%;
          }
          .bg-pos-0 {
            background-position: 0% 50%;
          }
          .bg-pos-100 {
            background-position: 100% 50%;
          }
        `}</style>
      </section>

      {/* Problema Section */}
      <section className="py-24 bg-gradient-to-br from-red-500 via-orange-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Elementos de alerta animados */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`alert-${i}`}
            className="absolute w-4 h-4 bg-yellow-400/40 rounded-full animate-ping"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: "2s",
            }}
          />
        ))}

        {/* Ondas de urgência */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-red-300/30 to-orange-300/30 rounded-full blur-3xl"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-300/30 to-red-300/30 rounded-full blur-3xl"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="mb-12">
            {/* Ícone de alerta pulsante */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75"></div> */}
                <div className="absolute inset-0 bg-red-400 rounded-full"></div>
                <div className="relative p-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-full shadow-2xl">
                  <Shield className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>

            {/* Badge de urgência */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-3 rounded-full mb-8 font-bold text-lg shadow-2xl">
              {/* <span className="w-3 h-3 bg-red-500 rounded-full animate-ping"></span> */}
              ALERTA DE SEGURANÇA
              {/* <span className="w-3 h-3 bg-red-500 rounded-full animate-ping"></span> */}
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              <span className="inline-block">Você confiaria</span>
              <br />
              <span
                className="inline-block text-yellow-300"
                style={{ animationDelay: "0.5s" }}
              >
                o seu filho ou filha
              </span>
              <br />
              <span
                className="inline-block bg-gradient-to-r from-red-200 to-orange-200 bg-clip-text text-transparent"
                style={{ animationDelay: "1s" }}
              >
                a alguém sem preparo?
              </span>
            </h2>
          </div>

          {/* Card de impacto com animações */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl transform rotate-2"></div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 rounded-3xl transform -rotate-1"
              style={{ animationDelay: "0.5s" }}
            ></div>

            <div className="relative bg-white text-gray-800 p-10 md:p-16 rounded-3xl shadow-2xl border-4 border-red-200">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg">
                  ⚠️ REFLEXÃO IMPORTANTE
                </div>
              </div>

              <div className="mt-6">
                <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Cuidar de uma criança não é apenas brincar.
                  </span>
                </p>

                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                  É estar pronto para{" "}
                  <strong className="text-red-600">qualquer situação</strong>,
                  garantindo{" "}
                  <strong className="text-orange-600">segurança</strong>,
                  <strong className="text-pink-600"> acolhimento</strong> e
                  <strong className="text-purple-600"> carinho</strong>.
                </p>

                {/* Lista de riscos */}
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  {[
                    {
                      icon: "🚨",
                      text: "Emergências médicas",
                      color: "from-red-500 to-red-600",
                    },
                    {
                      icon: "😰",
                      text: "Crises emocionais",
                      color: "from-orange-500 to-orange-600",
                    },
                    {
                      icon: "🆘",
                      text: "Situações imprevistas",
                      color: "from-pink-500 to-pink-600",
                    },
                  ].map((risk, index) => (
                    <div key={index} className="relative group">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${risk.color} rounded-xl opacity-20 group-hover:opacity-30 transition-opacity`}
                      ></div>
                      <div className="relative p-4 text-center">
                        <div className="text-3xl mb-2">{risk.icon}</div>
                        <p className="font-bold text-gray-700">{risk.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA de transição */}
          <div className="mt-16 cursor-pointer">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-400 to-blue-400 text-white px-8 py-4 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all duration-300">
              <CheckCircle className="w-8 h-8" />
              A SOLUÇÃO EXISTE E ESTÁ AQUI!
              <ArrowRight className="w-8 h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Autoridade Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Elementos de credibilidade flutuantes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`credibility-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 8}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-sm"></div>
          </div>
        ))}

        {/* Ondas de autoridade */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Header da seção */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full mb-8 font-bold text-xl shadow-2xl">
              <Award className="w-6 h-6" />
              CONHEÇA A ESPECIALISTA
              <Award className="w-6 h-6" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Conteúdo de autoridade */}
            <div>
              <h2 className="text-4xl md:text-[58px] font-black mb-8 leading-tight">
                <span className="inline-block">Eu sou</span>{" "}
                <span
                  className="inline-block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
                  style={{ animationDelay: "0.5s" }}
                >
                  Carla Mujaes
                </span>
                ,<br />
                <span
                  className="inline-block text-pink-300"
                  style={{ animationDelay: "1s" }}
                >
                  fundadora da Bebê Sitter
                </span>
              </h2>

              <div className="relative mb-10">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur-lg"></div>
                <p className="relative text-xl md:text-2xl leading-relaxed bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
                  Há mais de{" "}
                  <span className="bg-yellow-300 text-gray-900 px-3 py-1 rounded-full font-black">
                    15 anos
                  </span>
                  , ajudo famílias a encontrarem tranquilidade e formo
                  cuidadoras que hoje são
                  <span className="text-yellow-300 font-bold">
                    {" "}
                    referência no Brasil e no exterior
                  </span>
                  .
                </p>
              </div>

              {/* Credenciais com animações */}
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    text: "Mais de 7.000 cuidadoras capacitadas",
                    gradient: "from-green-400 to-green-500",
                    delay: "0s",
                  },
                  {
                    icon: Award,
                    text: "Reconhecimento de famílias, hotéis e resorts",
                    gradient: "from-blue-400 to-blue-500",
                    delay: "0.3s",
                  },
                  {
                    icon: Star,
                    text: "Método prático e direto para transformar cuidado em profissão",
                    gradient: "from-purple-400 to-purple-500",
                    delay: "0.6s",
                  },
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-sm`}
                    ></div>
                    <div
                      className="relative flex items-center gap-6 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: item.delay }}
                    >
                      <div
                        className={`p-4 bg-gradient-to-r ${item.gradient} rounded-full shadow-xl`}
                        style={{ animationDelay: item.delay }}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xl font-bold flex-1">
                        {item.text}
                      </span>
                      <CheckCircle
                        className="w-8 h-8 text-green-400"
                        style={{ animationDelay: `calc(${item.delay} + 0.5s)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Foto da especialista com efeitos */}
            <div className="relative">
              {/* Elementos decorativos rotacionais */}
              <div className="absolute -inset-8">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl transform rotate-3 opacity-30"></div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl transform -rotate-2 opacity-20"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl transform rotate-1 opacity-25"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              <div className="relative bg-white p-10 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ ESPECIALISTA RECONHECIDA
                  </div>
                </div>

                <div className="w-full h-80 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  {/* Elementos animados de fundo */}
                  <div className="absolute inset-0">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={`photo-bg-${i}`}
                        className="absolute w-8 h-8 bg-gradient-to-r from-pink-200/50 to-blue-200/50 rounded-full blur-sm"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${15 + i * 12}%`,
                          animationDelay: `${i * 0.4}s`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative text-center z-10">
                    <div className="p-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mb-4">
                      <Baby className="w-24 h-24 text-white" />
                    </div>
                    <p className="text-gray-600 font-bold text-lg">
                      Carla Mujaes
                    </p>
                    <p className="text-gray-500">Especialista Líder</p>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-black text-2xl text-gray-800 mb-2">
                    Carla Mujaes
                  </h3>
                  <p className="text-purple-600 font-bold text-lg mb-4">
                    Especialista em Cuidados Infantis
                  </p>

                  {/* Badges de credibilidade */}
                  <div className="flex justify-center gap-2 flex-wrap">
                    {["15+ Anos", "7k+ Formadas", "Internacional"].map(
                      (badge, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        >
                          {badge}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section com Super Impacto */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Partículas de números flutuantes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`number-particle-${i}`}
            className="absolute text-white/10 font-bold text-4xl select-none"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + i * 6}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 30}deg)`,
            }}
          >
            {["7K", "+15", "100%", "★★★★★"][i % 4]}
          </div>
        ))}

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                NÚMEROS QUE IMPRESSIONAM
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                {/* Efeito de brilho de fundo */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>

                <div className="relative text-center p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 hover:scale-110 transition-all duration-500">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    {/* <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping opacity-75"></div> */}
                  </div>

                  <div className="mb-6">
                    <div
                      className="inline-flex p-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-2xl"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <stat.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  <div
                    className="text-4xl md:text-5xl font-black text-yellow-300 mb-3"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    {stat.number}
                  </div>

                  <div className="text-white/80 font-bold text-lg">
                    {stat.label}
                  </div>

                  {/* Linha de progresso animada */}
                  <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                      style={{
                        width: "100%",
                        animationDelay: `${index * 0.4}s`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Texto de impacto */}
          <div className="text-center mt-16">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-lg opacity-50 rounded-2xl"></div>
              <p className="relative text-2xl md:text-3xl font-bold bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
                🚀{" "}
                <span className="text-yellow-300">RESULTADOS COMPROVADOS</span>{" "}
                🚀
                <br />
                <span className="text-white/90">
                  Mais de uma década transformando vidas!
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-blue-100/50"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full mb-6 font-bold text-lg shadow-lg">
              <Star className="w-6 h-6" />
              BENEFÍCIOS TRANSFORMADORES
              <Star className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
              Para Cada Pessoa,
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Uma Oportunidade Única
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como nossa formação revoluciona vidas de formas
              completamente diferentes
            </p>
          </div>

          {/* Para Mães e Famílias */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-pink-600 mb-4">
                👨‍👩‍👧‍👦 PARA MÃES E FAMÍLIAS
              </h3>
              <p className="text-lg text-gray-600">
                Transforme sua tranquilidade e qualidade de vida
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefitsForFamilies.map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-2xl hover:shadow-pink-200/50 transition-all duration-300 hover:-translate-y-2 border-2 border-pink-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800">
                        {benefit.title}
                      </h4>
                    </div>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="space-y-3">
                      {benefit.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                      <p className="text-pink-700 font-bold text-center">
                        💖 "Finalmente posso ter paz de espírito!"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Para Cuidadoras */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">
                👩‍💼 PARA CUIDADORAS
              </h3>
              <p className="text-lg text-gray-600">
                Transforme sua paixão em uma carreira de sucesso
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefitsForCaregivers.map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800">
                        {benefit.title}
                      </h4>
                    </div>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="space-y-3">
                      {benefit.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <p className="text-blue-700 font-bold text-center">
                        🚀 "Minha vida profissional decolou!"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Benefícios */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                ⚡ Independente do seu objetivo, temos a solução perfeita!
              </h3>
              <p className="text-white/90 text-lg">
                Junte-se às milhares de pessoas que já transformaram suas vidas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full mb-8 font-bold text-xl shadow-2xl">
              <Star className="w-6 h-6" />
              HISTÓRIAS REAIS DE TRANSFORMAÇÃO
              <Star className="w-6 h-6" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                Vidas Transformadas
              </span>
              <br />
              <span className="text-white">Resultados Reais</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Mais de 7.000 pessoas já mudaram suas vidas. Agora é a sua vez!
            </p>
          </div>

          {/* Testimonial Principal em Destaque */}
          <div className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white text-gray-800 p-10 rounded-3xl shadow-2xl">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full text-sm font-bold text-gray-900 shadow-lg">
                    ⭐ DESTAQUE DA SEMANA
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <Quote className="w-16 h-16 text-pink-400 opacity-50 mx-auto mb-6" />

                <blockquote className="text-2xl md:text-3xl font-medium text-center mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="text-center">
                  <div className="inline-flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">
                        {testimonials[currentTestimonial].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-xl text-gray-800">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600 mb-2">
                        {testimonials[currentTestimonial].role}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="bg-gradient-to-r from-green-400 to-green-500 px-3 py-1 rounded-full text-xs font-bold text-white">
                          {testimonials[currentTestimonial].highlight}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                    <p className="text-green-700 font-bold">
                      ✅ RESULTADO: {testimonials[currentTestimonial].results}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Mini Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transition-all duration-300 ${
                  index === currentTestimonial
                    ? "scale-105 z-10"
                    : "hover:scale-102"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div
                  className={`absolute inset-0 rounded-2xl ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                      : "bg-gradient-to-r from-gray-600 to-gray-700"
                  } transform rotate-1`}
                ></div>

                <div className="relative bg-white text-gray-800 p-6 rounded-2xl shadow-xl">
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-sm mb-4 line-clamp-3 text-center">
                    "{testimonial.text.slice(0, 100)}..."
                  </p>

                  <div className="text-center">
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>

                    <div className="mt-2 bg-gradient-to-r from-green-100 to-blue-100 px-3 py-1 rounded-full">
                      <p className="text-xs font-bold text-green-700">
                        {testimonial.results}
                      </p>
                    </div>
                  </div>

                  {index === currentTestimonial && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                      EM FOCO
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Controles de Navegação */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentTestimonial
                      ? "bg-yellow-400 scale-125"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length
                )
              }
              className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* CTA de Impacto */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl font-black text-white mb-4">
                🔥 SUA HISTÓRIA PODE SER A PRÓXIMA!
              </h3>
              <p className="text-white/90 text-xl mb-6">
                Junte-se às milhares de pessoas que já transformaram suas vidas
              </p>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer">
                QUERO MINHA TRANSFORMAÇÃO AGORA!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Elementos decorativos */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`contact-element-${i}`}
            className="absolute hover:scale-200 transition-transform duration-300"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 10}%`,
            }}
          >
            <div className="w-4 h-4 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-sm hover:blur-none hover:bg-yellow-400/70 transition-all duration-300"></div>
          </div>
        ))}

        {/* Ondas de fundo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl hover:opacity-40 transition-opacity duration-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl hover:opacity-40 transition-opacity duration-500"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Header da seção */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full mb-8 font-bold text-xl shadow-2xl hover:scale-105 transition-transform duration-300 cursor-default">
              <Heart className="w-6 h-6" />
              ENTRE EM CONTATO CONOSCO
              <Heart className="w-6 h-6" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent hover:from-yellow-100 hover:via-orange-100 hover:to-pink-100 transition-all duration-300">
                Está Pronta Para
              </span>
              <br />
              <span className="text-white hover:text-gray-200 transition-colors duration-300">
                Transformar Sua Vida?
              </span>
            </h2>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto hover:text-white transition-colors duration-300">
              Deixe seus dados e nossa equipe entrará em contato com você em até
              24 horas com informações exclusivas sobre o curso Bebê Sitter
            </p>
          </div>

          {/* Formulário de contato */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl blur-lg hover:blur-xl transition-all duration-300"></div>
            <div className="relative bg-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <form className="space-y-8">
                {/* Campo Nome */}
                <div className="relative">
                  <label className="block text-lg font-bold text-white mb-3 group-hover:text-yellow-200 transition-colors duration-300">
                    👤 Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Digite seu nome completo aqui"
                    className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-2xl text-white placeholder-white/60 text-lg backdrop-blur-sm focus:border-yellow-400 focus:bg-white/30 focus:outline-none focus:ring-4 focus:ring-yellow-400/30 hover:border-white/50 hover:bg-white/25 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Campo Email */}
                <div className="relative">
                  <label className="block text-lg font-bold text-white mb-3 group-hover:text-yellow-200 transition-colors duration-300">
                    📧 Seu Melhor E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="exemplo@email.com"
                    className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-2xl text-white placeholder-white/60 text-lg backdrop-blur-sm focus:border-yellow-400 focus:bg-white/30 focus:outline-none focus:ring-4 focus:ring-yellow-400/30 hover:border-white/50 hover:bg-white/25 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Campo WhatsApp (opcional) */}
                <div className="relative">
                  <label className="block text-lg font-bold text-white mb-3 group-hover:text-yellow-200 transition-colors duration-300">
                    📱 WhatsApp (opcional)
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full px-6 py-4 bg-white/20 border-2 border-white/30 rounded-2xl text-white placeholder-white/60 text-lg backdrop-blur-sm focus:border-yellow-400 focus:bg-white/30 focus:outline-none focus:ring-4 focus:ring-yellow-400/30 hover:border-white/50 hover:bg-white/25 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Checkbox de consentimento */}
                <div className="flex items-start gap-4 group">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 w-5 h-5 rounded border-2 border-white/30 bg-white/20 text-yellow-400 focus:ring-yellow-400 focus:ring-2 hover:border-white/50 transition-colors duration-300"
                  />
                  <label
                    htmlFor="consent"
                    className="text-white/90 leading-relaxed hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Eu concordo em receber comunicações da Bebê Sitter sobre o
                    curso e conteúdos relacionados. Você pode cancelar a
                    qualquer momento.
                  </label>
                </div>

                {/* Botão de envio */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100 text-gray-900 px-10 py-6 rounded-full font-black text-xl transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <Baby className="relative w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative">
                      QUERO RECEBER AS INFORMAÇÕES
                    </span>
                    <ArrowRight className="relative w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>

                  <p className="mt-4 text-yellow-200 text-sm hover:text-yellow-100 transition-colors duration-300">
                    🔒 Seus dados estão seguros conosco e não serão
                    compartilhados com terceiros
                  </p>
                </div>
              </form>

              {/* Informações de contato alternativas */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-6 hover:text-yellow-200 transition-colors duration-300">
                    Ou entre em contato diretamente:
                  </h4>

                  <div className="flex justify-center flex-wrap gap-6">
                    {[
                      {
                        icon: "📧",
                        text: "contato@bebesitter.com.br",
                        type: "email",
                      },
                      { icon: "📱", text: "(11) 99999-9999", type: "phone" },
                      {
                        icon: "🌐",
                        text: "www.bebesitter.com.br",
                        type: "website",
                      },
                    ].map((contact, index) => (
                      <div key={index} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                        <div className="relative bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                              {contact.icon}
                            </span>
                            <span className="text-white font-medium hover:text-yellow-200 transition-colors duration-300">
                              {contact.text}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adicionando CSS para animações customizadas */}
        <style jsx>{`
          .bg-size-200 {
            background-size: 200% 200%;
          }
          .bg-pos-0 {
            background-position: 0% 50%;
          }
          .bg-pos-100 {
            background-position: 100% 50%;
          }

          /* Estilização customizada para checkbox */
          input[type="checkbox"]:checked {
            background-color: #facc15;
            border-color: #facc15;
          }
        `}</style>
      </section>

      {/* CTA Final Section */}
      <section className="py-24 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Explosão de elementos animados */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`cta-element-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400/40 to-orange-400/40 rounded-full blur-sm"></div>
          </div>
        ))}

        {/* Ondas de energia */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-3xl"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          {/* Badge de urgência superior */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 rounded-full font-bold text-xl shadow-2xl mb-8">
              {/* <span className="w-4 h-4 bg-yellow-400 rounded-full animate-ping"></span> */}
              🚨 ÚLTIMAS VAGAS DISPONÍVEIS
              {/* <span className="w-4 h-4 bg-yellow-400 rounded-full animate-ping"></span> */}
            </div>

            {/* Ícone central gigante com múltiplas animações */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Ondas de impacto */}
                {/* <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                <div
                  className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-50"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute inset-0 bg-pink-400 rounded-full animate-ping opacity-25"
                  style={{ animationDelay: "1s" }}
                ></div> */}

                {/* Ícone principal */}
                <div className="relative p-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-full shadow-2xl transition-all duration-500">
                  <ArrowRight className="w-20 h-20 text-gray-900" />
                </div>
              </div>
            </div>

            {/* Título explosivo */}
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="inline-block">Agora é a</span>{" "}
              <span
                className="inline-block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
                style={{ animationDelay: "0.5s" }}
              >
                SUA VEZ
              </span>
              <br />
              <span
                className="inline-block text-pink-300"
                style={{ animationDelay: "1s" }}
              >
                de dar o próximo passo!
              </span>
            </h2>

            {/* Subtítulo com destaque */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl blur-lg"></div>
              <p className="relative text-xl md:text-2xl leading-relaxed bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
                Entre para o grupo exclusivo com a especialista{" "}
                <span className="bg-yellow-300 text-gray-900 px-3 py-1 rounded-full font-black">
                  Carla Mujaes
                </span>
                .<br />
                Lá você vai receber{" "}
                <strong className="text-yellow-300">conteúdos inéditos</strong>,
                <strong className="text-orange-300"> dicas práticas</strong> e
                acesso ao{" "}
                <strong className="text-pink-300">
                  encontro online gratuito
                </strong>
                , onde Carla vai revelar como funciona a formação completa.
              </p>
            </div>
          </div>

          {/* Botão CTA MEGA IMPACTANTE */}
          <div className="mb-12">
            <div className="relative inline-block">
              {/* Múltiplas ondas de energia */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-75"></div>
              <div
                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full blur-xl opacity-50"
                style={{ animationDelay: "0.5s" }}
              ></div>

              <button className="group relative inline-flex items-center gap-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100 text-gray-900 px-12 py-8 rounded-full font-black text-2xl md:text-3xl transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 cursor-pointer">
                {/* Ícone com animação própria */}
                <WhatsApp className="relative w-10 h-10 group-hover:text-green-800 transition-colors" />

                {/* Texto principal */}
                <span className="relative">
                  QUERO FAZER PARTE DO
                  <br />
                  <span className="text-4xl">GRUPO EXCLUSIVO</span>
                </span>

                {/* Seta com movimento */}
                <ArrowRight className="relative w-10 h-10 group-hover:translate-x-4 transition-transform" />

                {/* Efeitos de borda animados */}
                {/* <div className="absolute inset-0 rounded-full border-4 border-yellow-300 animate-ping opacity-75"></div>
                <div
                  className="absolute inset-0 rounded-full border-4 border-orange-300 animate-ping opacity-50"
                  style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                  className="absolute inset-0 rounded-full border-4 border-pink-300 animate-ping opacity-25"
                  style={{ animationDelay: "0.6s" }}
                ></div> */}
              </button>
            </div>
          </div>

          {/* Informações de urgência */}
          <div className="space-y-6">
            <p className="text-yellow-200 text-xl font-bold">
              ✨{" "}
              <span className="bg-red-500 px-4 py-2 rounded-full">ATENÇÃO</span>{" "}
              ✨
            </p>

            <div className="flex justify-center flex-wrap gap-6">
              {[
                {
                  icon: "🔥",
                  text: "Vagas Limitadas",
                  color: "from-red-400 to-orange-400",
                },
                {
                  icon: "💎",
                  text: "100% Gratuito",
                  color: "from-green-400 to-blue-400",
                },
                {
                  icon: "⚡",
                  text: "Transformação Garantida",
                  color: "from-purple-400 to-pink-400",
                },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity blur-sm`}
                  ></div>
                  <div className="relative bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div
                        className="text-3xl mb-2"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        {item.icon}
                      </div>
                      <p className="font-bold text-white">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contador de urgência fake */}
          <div className="mt-12">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 rounded-full font-bold text-xl shadow-2xl">
              {/* <span className="w-4 h-4 bg-yellow-400 rounded-full animate-ping"></span> */}
              ⏰ Restam apenas 23 vagas disponíveis!
              {/* <span className="w-4 h-4 bg-yellow-400 rounded-full animate-ping"></span> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Elementos flutuantes no footer */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`footer-element-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 9}%`,
              top: `${20 + i * 5}%`,
              animation: `float ${3 + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full blur-sm"></div>
          </div>
        ))}

        {/* Ondas decorativas */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-full h-full">
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Header do Footer */}
          <div className="text-center mb-16">
            {/* Logo animado */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                {/* Halo de luz */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>

                {/* Logo principal */}
                <div className="relative p-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-2xl hover:scale-110 transition-all duration-500">
                  <Baby className="w-16 h-16 text-white" />
                </div>

                {/* Ondas de energia ao redor do logo */}
                {/* <div className="absolute inset-0 border-2 border-pink-400/50 rounded-full animate-ping"></div>
                <div
                  className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div> */}
              </div>
            </div>

            {/* Nome da marca com efeito especial */}
            <h3 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Bebê Sitter
              </span>
            </h3>

            {/* Slogan com animação */}
            <p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-bold">
                Sua Baby Sitter de Confiança
              </span>
            </p>

            {/* Badges de credibilidade */}
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {[
                {
                  icon: Award,
                  text: "15+ Anos",
                  gradient: "from-yellow-400 to-orange-500",
                },
                {
                  icon: Users,
                  text: "7k+ Formadas",
                  gradient: "from-green-400 to-blue-500",
                },
                {
                  icon: Star,
                  text: "5 Estrelas",
                  gradient: "from-purple-400 to-pink-500",
                },
                {
                  icon: Globe,
                  text: "Internacional",
                  gradient: "from-blue-400 to-indigo-500",
                },
              ].map((badge, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${badge.gradient} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm`}
                  ></div>
                  <div className="relative flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300">
                    <badge.icon
                      className="w-6 h-6 text-yellow-400"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                    <span className="font-bold text-white">{badge.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seção de links e informações */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Sobre nós */}
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-pink-400 mb-6">
                🌟 Nossa Missão
              </h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transformar o cuidado infantil através da educação
                especializada, conectando famílias a profissionais qualificadas
                e criando oportunidades de carreira únicas no mercado.
              </p>
              <div className="flex justify-center md:justify-start">
                <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-4 py-2 rounded-full">
                  <span className="text-yellow-300 font-bold">
                    ✨ Excelência Garantida
                  </span>
                </div>
              </div>
            </div>

            {/* Resultados */}
            <div className="text-center">
              <h4
                className="text-2xl font-bold text-blue-400 mb-6"
                style={{ animationDelay: "0.3s" }}
              >
                📊 Nossos Números
              </h4>
              <div className="space-y-4">
                {[
                  {
                    label: "Cuidadoras Formadas",
                    value: "7.000+",
                    color: "text-green-400",
                  },
                  {
                    label: "Anos de Experiência",
                    value: "15+",
                    color: "text-yellow-400",
                  },
                  {
                    label: "Países Atendidos",
                    value: "50+",
                    color: "text-blue-400",
                  },
                  {
                    label: "Satisfação",
                    value: "100%",
                    color: "text-pink-400",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <span className="text-gray-300">{stat.label}</span>
                    <span
                      className={`font-bold text-xl ${stat.color}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Final */}
            <div className="text-center md:text-right">
              <h4
                className="text-2xl font-bold text-purple-400 mb-6"
                style={{ animationDelay: "0.6s" }}
              >
                🚀 Próximos Passos
              </h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-2xl border border-yellow-400/30">
                  <p className="text-yellow-300 font-bold mb-4">
                    Pronta para transformar sua vida?
                  </p>
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-sm py-3 px-6 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer flex items-center justify-center gap-3">
                    <WhatsApp className="w-6 h-6" />
                    ENTRAR NO GRUPO AGORA
                  </button>
                </div>

                <div className="text-sm text-gray-400">
                  <p>📧 Contato: contato@bebesitter.com.br</p>
                  <p>📱 WhatsApp: (11) 99999-9999</p>
                </div>
              </div>
            </div>
          </div>

          {/* Linha divisória animada */}
          <div className="relative mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            </div>
          </div>

          {/* Copyright com estilo */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-white/5 px-8 py-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <Heart className="w-6 h-6 text-pink-400" />
              <p className="text-gray-400">
                © 2024 <span className="text-white font-bold">Bebê Sitter</span>
                . Todos os direitos reservados. Feito com ❤️ para famílias
                brasileiras.
              </p>
              <Baby className="w-6 h-6 text-blue-400" />
            </div>

            <p className="mt-4 text-xs text-gray-500">
              ✨ Transformando vidas através do cuidado especializado desde 2009
              ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
