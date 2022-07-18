import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { LogoIgnite } from "../components/LogoIgnite";
import { Footer } from "../components/Footer";
import { useCreateSubscriberMutation } from "../graphql/generated";
import mockup from '/src/assets/code-mockup.png'



export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/event')
  }

  return (
    <div className="bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1700px] flex items-center justify-between mt-20 mx-auto lg:px-28 md:px-4">
        <div className="lg:max-w-[630px] md:max-w-[360px]">
          <LogoIgnite />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
          Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded lg:min-w-[355px]">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
            className="bg-gray-900 rounded px-5 h-14"
            type="text" 
            placeholder="Seu nome completo" 
            onChange={event => setName(event.target.value)}
            />
            <input 
            className="bg-gray-900 rounded px-5 h-14"
            type="email"
            placeholder="digite seu e-mail"
            onChange={event => setEmail(event.target.value)}
            />

            <button 
            type="submit"
            disabled={loading}
            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>

      </div>

      <img src={mockup} className="mt-10 w-full max-w-[1700px] px-32" alt="" />
        
      <div className="w-full">
        <Footer /> 
      </div>
    </div>
  );
}