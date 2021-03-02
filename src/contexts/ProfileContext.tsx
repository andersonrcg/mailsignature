import { createContext, ReactNode, useState } from "react";

interface ProfileContextData {
    nome: string;
    sobrenome: string;
    cargo: string;
    departamento: string;
    nomeEmpresa: string;
    campoPersonalizado: string;
    mainColor: string;

    setnome: (nome: string) => void;
    setsobrenome: (sobrenome: string) => void;
    setcargo: (cargo: string) => void;
    setdepartamento: (departamento: string) => void;
    setnomeEmpresa: (departamento: string) => void;
    setcampoPersonalizado: (departamento: string) => void;
    setmainColor: (departamento: string) => void;
}

interface ProfileProviderProps {
    children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children }: ProfileProviderProps) {
    const [nome, setnome] = useState('');
    const [sobrenome, setsobrenome] = useState('');
    const [cargo, setcargo] = useState('');
    const [departamento, setdepartamento] = useState('');
    const [nomeEmpresa, setnomeEmpresa] = useState('');
    const [campoPersonalizado, setcampoPersonalizado] = useState('');

    const [mainColor, setmainColor] = useState('#5606b1');

    return (
        <ProfileContext.Provider value={{
            nome,
            sobrenome,
            cargo,
            departamento,
            nomeEmpresa,
            campoPersonalizado,
            mainColor,

            setnome,
            setsobrenome,
            setcargo,
            setdepartamento,
            setnomeEmpresa,
            setcampoPersonalizado,
            setmainColor,
        }}>
            { children}
        </ProfileContext.Provider>
    );
}