import { LogoRocket } from "./LogoRocket";

export function Footer() {
    return (
        <div className="max-w-[1100px] px-6 pb-5 pt-12 mx-auto">
            <footer className="pt-6 flex items-center justify-between border-t border-gray-600">
                <div className="flex items-center gap-6">
                    <LogoRocket />
                    <p className="text-gray-300">
                        Rocketseat - Todos os direitos reservados
                    </p>
                </div>
                <div>
                    <a href="#" className="text-gray-300">
                        Políticas de privacidade
                    </a>
                </div>
            </footer>
        </div>
    )
}