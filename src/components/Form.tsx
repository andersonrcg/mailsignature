import { useContext, useState } from "react";
import { ProfileContext } from "../contexts/ProfileContext";
import { ChromePicker } from 'react-color';

export function Form() {
    const [displayColorPicker, setdisplayColorPicker] = useState(false)

    const {
        data,
        setData
    } = useContext(ProfileContext)

    const handleChangeComplete = (color) => {
        setData({...data, mainColor: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`})
    };

    const _handleClick = () => {
        setdisplayColorPicker(!false)
    };

    const _handleClose = () => {
        setdisplayColorPicker(false)
    };

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

    return (
        <div className="container">

            <div>
                <span>
                    <input id="nome" type="text" onChange={e => setData({...data, nome: e.currentTarget.value})} value={nome} className={`${nome ? 'notEmpty' : ''}`} />
                    <label htmlFor="nome">Nome</label>
                </span>
            </div>

            <div>
                <span>
                    <input id="sobrenome" type="text" onChange={e => setData({...data, sobrenome: e.currentTarget.value})} value={sobrenome} className={`${sobrenome ? 'notEmpty' : ''}`} />
                    <label htmlFor="sobrenome">Sobrenome</label>
                </span>
            </div>

            <div>
                <span>
                    <input id="cargo" type="text" onChange={e => setData({...data, cargo: e.currentTarget.value})} value={cargo} className={`${cargo ? 'notEmpty' : ''}`} />
                    <label htmlFor="cargo">Cargo</label>
                </span>
            </div>

            <div>
                <span>
                    <input id="departamento" type="text" onChange={e => setData({...data, departamento: e.currentTarget.value})} value={departamento} className={`${departamento ? 'notEmpty' : ''}`} />
                    <label htmlFor="departamento">Departamento</label>
                </span>
            </div>

            <div>
                <span>
                    <input id="nomeEmpresa" type="text" onChange={e => setData({...data, nomeEmpresa: e.currentTarget.value})} value={nomeEmpresa} className={`${nomeEmpresa ? 'notEmpty' : ''}`} />
                    <label htmlFor="nomeEmpresa">Nome da empresa</label>
                </span>
            </div>

            <div>
                <span>
                    <input id="campoPersonalizado" type="text" onChange={e => setData({...data, campoPersonalizado: e.currentTarget.value})} value={campoPersonalizado} className={`${campoPersonalizado ? 'notEmpty' : ''}`} />
                    <label htmlFor="campoPersonalizado">Campo personalizado</label>
                </span>
            </div>

            <h4>Contatos</h4>

            <div>
                <span>
                    <input id="celular" type="text" onChange={e => setData({...data, celular: e.currentTarget.value})} value={celular} className={`${campoPersonalizado ? 'notEmpty' : ''}`} />
                    <label htmlFor="celular">Celular</label>
                </span>
            </div>

            <div>
                <span>
                    <input id="telefone" type="text" onChange={e => setData({...data, telefone: e.currentTarget.value})} value={telefone} className={`${campoPersonalizado ? 'notEmpty' : ''}`} />
                    <label htmlFor="telefone">Telefone</label>
                </span>
            </div>

            <div>
                <span>
                    <input id="email" type="text" onChange={e => setData({...data, email: e.currentTarget.value})} value={email} className={`${campoPersonalizado ? 'notEmpty' : ''}`} />
                    <label htmlFor="email">Email</label>
                </span>
            </div>


            <div className="selectColor">
                <label>Cor principal:</label>
                <div className="swatch" onClick={_handleClick}>
                    <div className="mainColor" />
                </div>
            </div>

            { displayColorPicker && (
                <div className="popover">
                    <div className="cover" onClick={_handleClose} />
                    <ChromePicker
                        color={mainColor}
                        onChangeComplete={handleChangeComplete}
                    />
                </div>
            )}

            <style jsx>{`
            .container {
                padding-top: 2rem;
            }
            .container > div {
                color: #33475b;
                line-height: 1.625;
                box-sizing: border-box;
                width: 100%;
                height: auto;
                padding: 1rem 2.5rem;
            }

            .container h4 {
                padding: 0 2.5rem;
            }

            .container label {
                color: #fff;
                margin-right: 10px;
            }
            
            .container > div > span {
                position: relative;
                display: flex;
                flex-direction: column;
            }

            .container > div > span label {
                position: absolute;
                top: 0.3rem;
                left: 0;
                color: #FFF;
                opacity: .6;
                cursor: text;
                transition: all 0.2s ease;
                display: inline-block;
                margin-bottom: 0.5rem;
            }
            .container > div > span input:focus + label,
            .container > div > span input.notEmpty + label {
                top: -0.9rem;
                opacity: .3;
                font-size: 0.75rem;
                font-weight: 700;
              }

            .container input {
                display: block;
                background: none;
                border-top: none;
                border-right: none;
                border-left: none;
                border-image: initial;
                outline: none;
                font-size: 1rem;
                padding: 0.5rem 0px;
                color: rgb(255, 255, 255);
                border-bottom: 1px solid rgb(255, 255, 255);
            }

            // Color
            .selectColor {
                display: flex;
            }
            .swatch {
                padding: 5px;
                background: #fff;
                border-radius: 1px;
                box-shadow: 0 0 0 1px rgba(0,0,0,.1);
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .mainColor {
                width: 36px;
                height: 14px;
                border-radius: 2px;
                background: ${mainColor};
            }
            .popover {
                position: absolute;
                zIndex: 2;
                bottom: 0;
            }
            .cover {
                position: fixed;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
            }
            `}</style>
        </div>
    );
}