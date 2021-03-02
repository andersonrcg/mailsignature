import { createContext, ReactNode, useEffect, useState } from "react";

interface mailSignatureData {
    nome: string;
    sobrenome: string;
    cargo: string;
    departamento: string;
    nomeEmpresa: string;
    campoPersonalizado: string;
    celular: string;
    telefone: string;
    email: string;
    mainColor: string;
}

interface ProfileContextData {
    data: mailSignatureData;
    setData: (data: mailSignatureData) => void;
}

interface ProfileProviderProps {
    children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children }: ProfileProviderProps) {
    const [data, setData] = useState({
        nome: '',
        sobrenome: '',
        cargo: '',
        departamento: '',
        nomeEmpresa: '',
        campoPersonalizado: '',
        celular: '',
        telefone: '',
        email: '',
        mainColor: '#444',
    });

    useEffect(() => {
        const mailSignatureData = localStorage.getItem('mailSignatureData')
        if(mailSignatureData)
            setData(JSON.parse(mailSignatureData))
    }, [])

    useEffect(() => {
        const {
            nome,
            sobrenome,
            cargo,
            departamento,
            nomeEmpresa,
            campoPersonalizado,
            celular,
            telefone,
            email,
            mainColor
        } = data;

        localStorage.setItem('mailSignatureData', JSON.stringify({
            nome,
            sobrenome,
            cargo,
            departamento,
            nomeEmpresa,
            campoPersonalizado,
            celular,
            telefone,
            email,
            mainColor
        }))
    }, [ data ])

    return (
        <ProfileContext.Provider value={{
            data,
            setData
        }}>
            { children}
        </ProfileContext.Provider>
    );
}