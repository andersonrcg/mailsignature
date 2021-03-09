import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

export function ChangeProfile() {
    const { profileActive, setProfileActive, data, setData } = useContext(ProfileContext);

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
        setProfileActive(total - 1)
    }

    return (
        <div className="container">
            {/* <button type="button" onClick={() => _resetProfile()}> Zerar </button> */}
            {data.profiles.map((el, i) => {
                return (
                    <button key={i} type="button" className={profileActive === i ? 'active' : null} onClick={() => setProfileActive(i)}>{`0${i + 1}`}</button>
                );
            })}

            <button type="button" onClick={() => _newProfile()}> + Novo </button>

            <style jsx>{`
                .container {
                    width: 100%;
                    position: absolute;
                    top: -26px;
                    left: 12px;
                    z-index: 2;
                }
                .container button {
                    border: 0;
                    background: white;
                    padding: .3rem .7rem;
                    margin-right: 1px;
                    outline: none;
                    cursor: pointer;
                }
                .container button:first-child {
                    border-top-left-radius: 4px;
                }
                .container button:last-child {
                    border-top-right-radius: 4px;
                }
                
                .container button.active {
                    background: linear-gradient(-45deg,rgb(68 136 202),rgb(101 122 208));
                    color: #fff;
                    transform: scale(1.2) translateY(-2px);
                }
            `}</style>
        </div>
    );
}