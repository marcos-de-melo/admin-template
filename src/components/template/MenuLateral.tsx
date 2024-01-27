

import MenuItem from "../MenuItem";
import { IconeAjustes, IconeCasa, IconeSino, IconeSair } from "../icons";
import Logo from "./Logo";

export default function MenuLateral(){
    return(
        <aside className={`
            flex flex-col
            dark:bg-gray-900 
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-800
                h-20 w-20
            `}>
                <Logo/>
            </div>
            
                <ul className="flex-grow">
                    <MenuItem url="/" texto="Inicio" icone={IconeCasa} />
                    <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                    <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
                </ul>
                <ul>
                    <MenuItem 
                    
                    texto="Sair" icone={IconeSair} 
                    onClick={()=> console.log('logout')}
                    className={`text-red-600 dark:text-red-400
                    hover:bg-red-400 hover:text-white
                    dark:hover:text-white`}
                    />
 
                </ul>
        </aside>
    )
}