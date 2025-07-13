'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { FaEnvelope, FaLinkedin, FaDiscord } from 'react-icons/fa'

const info = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'khristopheroficial@gmail.com',
  },
  {
    icon: <FaDiscord />,
    title: 'Discord',
    description: 'khristopher_kidman',
  },
  {
    icon: <FaLinkedin />,
    title: 'Linkedin',
    description: 'Khristopher Kidman',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-6 px-4 sm:px-6">
      <div className="container min-h-screen mx-auto flex items-center justify-center">
        <div className="flex flex-col xl:flex-row gap-[30px] w-full max-w-6xl h-full">

          {/* Formulário */}
          <div className="w-full xl:w-[54%] order-2 xl:order-none">
            <form
              action="https://formsubmit.co/khristopheroficial@gmail.com"
              method="POST"
              className="flex flex-col gap-6 p-6 sm:p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-3xl sm:text-4xl text-accent leading-tight">
                Vamos trabalhar<br className="block sm:hidden" /> juntos
              </h3>
              <p className="text-white/60 text-sm sm:text-base">
                Estou pronto para novos desafios e comprometido em aplicar minhas habilidades da melhor forma possível. Com determinação e desejo de crescimento, quero contribuir ativamente para o sucesso da sua empresa. Entre em contato por e-mail.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" name="firstname" placeholder="Nome" />
                <Input type="text" name="lastname" placeholder="Sobrenome" />
                <Input type="email" name="email" placeholder="Email" />
                <Input type="text" name="phone" placeholder="Telefone" />
              </div>

              <Textarea
                name="message"
                className="h-[160px] md:h-[200px]"
                placeholder="Digite sua mensagem aqui."
                required
              />

              <Button size="md" className="max-w-40" type="submit">
                Enviar
              </Button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="w-full xl:flex-1 flex justify-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8 w-full xl:w-auto self-center">
              {info.map((item, index) => (
                <li key={index} className="flex items-start gap-4 sm:gap-6">
                  <div className="min-w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-lg flex items-center justify-center text-2xl xl:text-[28px]">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm sm:text-base">{item.title}</p>
                    <h3 className="text-base sm:text-lg xl:text-xl break-all">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact