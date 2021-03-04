import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

export function ChangeProfile() {
    const { setProfileActive, data, setData } = useContext(ProfileContext);

    function _resetProfile() {
        data.total = 1;
        data.profiles = [{
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
        }]
        setData({ ...data })
    }

    function _newProfile() {
        const total = data.profiles.length + 1;
        if (total > 5) {
            alert('No plano Gratuito você pode guardar 5 perfis.');
            return;
        }

        data.total = total;
        data.profiles[total - 1] = {
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
        }
        setData({ ...data })
    }

    return (
        <div>
            <button type="button" onClick={() => _resetProfile()}> Zerar </button>
            <button type="button" onClick={() => _newProfile()}> Novo </button>

            {data.profiles.map((el, i) => {
                return (
                    <button type="button" onClick={() => setProfileActive(i)}>{el.nome !== '' ? el.nome : `Perfil ${i + 1}`}</button>
                );
            })}
        </div>
    );
}