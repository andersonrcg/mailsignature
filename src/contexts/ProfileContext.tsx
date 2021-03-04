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
    site: string;
    endereco01: string;
    endereco02: string;
    endereco03: string;
    endereco04: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    foto: string;
    modelo: number;
    socialColor: string;
    mainColor: string;
}

interface Profiles {
    profiles: Array<mailSignatureData>;
    total: number;
}

interface ProfileContextData {
    profileActive: number;
    data: Profiles;
    tabActive: number;
    card: number;
    setProfileActive: (profileActive: number) => void;
    setData: (data: Profiles) => void;
    setTabActive: (tabActive: number) => void;
    setcard: (card: number) => void;
    _setCard: (card: number) => boolean;
}

interface ProfileProviderProps {
    children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children }: ProfileProviderProps) {
    const [data, setData] = useState({
        profiles: [{
            nome: '',
            sobrenome: '',
            cargo: '',
            departamento: '',
            nomeEmpresa: '',
            campoPersonalizado: '',
            celular: '',
            telefone: '',
            email: '',
            site: '',
            endereco01: '',
            endereco02: '',
            endereco03: '',
            endereco04: '',
            facebook: '',
            twitter: '',
            linkedin: '',
            instagram: '',
            foto: '',
            modelo: 1,
            socialColor: '#444',
            mainColor: '#444',
        }],
        total: 1
    });

    const [profileActive, setProfileActive] = useState(0);
    const [tabActive, setTabActive] = useState(0);
    const [card, setcard] = useState(1);

    useEffect(() => {
        const mailSignatureData = localStorage.getItem('mailSignatureData')
        if(mailSignatureData){
            const dataJson = JSON.parse(mailSignatureData);
            setData(dataJson)
            setcard(dataJson.modelo)
        }
            
    }, [])

    useEffect(() => {
        const {
            profiles,
            total
        } = data;

        localStorage.setItem('mailSignatureData', JSON.stringify({
            profiles,
            total
        }))
    }, [ data, card ])

    const _setCard = (card: number) => {
        setcard(card)
        return true;
    }

    return (
        <ProfileContext.Provider value={{
            profileActive,
            setProfileActive,
            data,
            setData,
            tabActive,
            setTabActive,
            card,
            setcard,
            _setCard
        }}>
            { children}
        </ProfileContext.Provider>
    );
}