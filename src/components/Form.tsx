import { useContext, useState } from "react";
import { ProfileContext } from "../contexts/ProfileContext";
import { ChromePicker } from 'react-color';

export function Form() {
    const [displayColorPicker, setdisplayColorPicker] = useState(false)
    const [displayColorPickerTo, setdisplayColorPickerTo] = useState('mainColor')

    const {
        profileActive,
        data,
        setData,
        tabActive,
        card,
        _setCard
    } = useContext(ProfileContext)

    const handleChangeComplete = (color) => {
        if (displayColorPickerTo === 'mainColor') {
            data.profiles[profileActive].mainColor = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`
            setData({ ...data })
        } else if (displayColorPickerTo === 'socialColor') {
            data.profiles[profileActive].socialColor = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`
            setData({ ...data })
        }
    };

    const _handleClick = (to) => {
        setdisplayColorPicker(!false)
        setdisplayColorPickerTo(to)
    };

    const _handleClose = () => {
        setdisplayColorPicker(false)
    };

    const {
        profiles
    } = data;

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
        site,
        endereco01,
        endereco02,
        endereco03,
        endereco04,
        facebook,
        twitter,
        linkedin,
        instagram,
        foto,
        socialColor,
        mainColor,
    } = profiles[profileActive] !== undefined ? profiles[profileActive] : profiles[0];

    return (
        <div className="container">

            {tabActive === 0 && ( //Template
                <div className="svgTemplates">
                    Modelo 01
                    <div className={card === 1 ? 'active' : null} onClick={() => _setCard(1)}>
                        <div><img src="/templates/active.svg" alt="√" /></div>
                        <img src="/templates/template-1.svg" alt="Template 01" />
                    </div>

                    Modelo 02
                    <div className={card === 2 ? 'active' : null} onClick={() => _setCard(2)}>
                        <div><img src="/templates/active.svg" alt="√" /></div>
                        <img src="/templates/template-2.svg" alt="Template 02" />
                    </div>
                </div>
            )}

            {tabActive === 100 && ( //Dados
                <>
                    <div>
                        <span>
                            <input id="nome" type="text" onChange={e => {
                                data.profiles[profileActive].nome = e.currentTarget.value;
                                setData({ ...data })}} value={nome} className={`${nome ? 'notEmpty' : ''}`} />
                            <label htmlFor="nome">Nome</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="sobrenome" type="text" onChange={e => {
                                data.profiles[profileActive].sobrenome = e.currentTarget.value;
                                setData({ ...data })}} value={sobrenome} className={`${sobrenome ? 'notEmpty' : ''}`} />
                            <label htmlFor="sobrenome">Sobrenome</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="cargo" type="text" onChange={e => {
                                data.profiles[profileActive].cargo = e.currentTarget.value;
                                setData({ ...data })}} value={cargo} className={`${cargo ? 'notEmpty' : ''}`} />
                            <label htmlFor="cargo">Cargo</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="departamento" type="text" onChange={e => {
                                data.profiles[profileActive].departamento = e.currentTarget.value;
                                setData({ ...data })}} value={departamento} className={`${departamento ? 'notEmpty' : ''}`} />
                            <label htmlFor="departamento">Departamento</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="nomeEmpresa" type="text" onChange={e => {
                                data.profiles[profileActive].nomeEmpresa = e.currentTarget.value;
                                setData({ ...data })}} value={nomeEmpresa} className={`${nomeEmpresa ? 'notEmpty' : ''}`} />
                            <label htmlFor="nomeEmpresa">Nome da empresa</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="campoPersonalizado" type="text" onChange={e => {
                                data.profiles[profileActive].campoPersonalizado = e.currentTarget.value;
                                setData({ ...data })}} value={campoPersonalizado} className={`${campoPersonalizado ? 'notEmpty' : ''}`} />
                            <label htmlFor="campoPersonalizado">Campo personalizado</label>
                        </span>
                    </div>

                    <h4>Contatos</h4>

                    <div>
                        <span>
                            <input id="celular" type="text" onChange={e => {
                                data.profiles[profileActive].celular = e.currentTarget.value;
                                setData({ ...data })}} value={celular} className={`${celular ? 'notEmpty' : ''}`} />
                            <label htmlFor="celular">Celular</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="telefone" type="text" onChange={e => {
                                data.profiles[profileActive].telefone = e.currentTarget.value;
                                setData({ ...data })}} value={telefone} className={`${telefone ? 'notEmpty' : ''}`} />
                            <label htmlFor="telefone">Telefone</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="email" type="text" onChange={e => {
                                data.profiles[profileActive].email = e.currentTarget.value;
                                setData({ ...data })}} value={email} className={`${email ? 'notEmpty' : ''}`} />
                            <label htmlFor="email">Email</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="site" type="text" onChange={e => {
                                data.profiles[profileActive].site = e.currentTarget.value;
                                setData({ ...data })}} value={site} className={`${site ? 'notEmpty' : ''}`} />
                            <label htmlFor="site">Site</label>
                        </span>
                    </div>

                    <h4>Endereço</h4>

                    <div>
                        <span>
                            <input id="endereco01" type="text" onChange={e => {
                                data.profiles[profileActive].endereco01 = e.currentTarget.value;
                                setData({ ...data })}} value={endereco01} className={`${endereco01 ? 'notEmpty' : ''}`} />
                            <label htmlFor="endereco01">Endereço linha 1</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="endereco02" type="text" onChange={e => {
                                data.profiles[profileActive].endereco02 = e.currentTarget.value;
                                setData({ ...data })}} value={endereco02} className={`${endereco02 ? 'notEmpty' : ''}`} />
                            <label htmlFor="endereco02">Endereço linha 2</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="endereco03" type="text" onChange={e => {
                                data.profiles[profileActive].endereco03 = e.currentTarget.value;
                                setData({ ...data })}} value={endereco03} className={`${endereco03 ? 'notEmpty' : ''}`} />
                            <label htmlFor="endereco03">Endereço linha 3</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="endereco04" type="text" onChange={e => {
                                data.profiles[profileActive].endereco04 = e.currentTarget.value;
                                setData({ ...data })}} value={endereco04} className={`${endereco04 ? 'notEmpty' : ''}`} />
                            <label htmlFor="endereco04">Endereço linha 4</label>
                        </span>
                    </div>

                    <h4>Redes Sociais</h4>

                    <div>
                        <span>
                            <input id="facebook" type="text" onChange={e => {
                                data.profiles[profileActive].facebook = e.currentTarget.value;
                                setData({ ...data })}} value={facebook} className={`${facebook ? 'notEmpty' : ''}`} />
                            <label htmlFor="facebook">Facebook</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="twitter" type="text" onChange={e => {
                                data.profiles[profileActive].twitter = e.currentTarget.value;
                                setData({ ...data })}} value={twitter} className={`${twitter ? 'notEmpty' : ''}`} />
                            <label htmlFor="twitter">Twitter</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="linkedin" type="text" onChange={e => {
                                data.profiles[profileActive].linkedin = e.currentTarget.value;
                                setData({ ...data })}} value={linkedin} className={`${linkedin ? 'notEmpty' : ''}`} />
                            <label htmlFor="linkedin">LinkedIn</label>
                        </span>
                    </div>

                    <div>
                        <span>
                            <input id="instagram" type="text" onChange={e => {
                                data.profiles[profileActive].instagram = e.currentTarget.value;
                                setData({ ...data })}} value={instagram} className={`${instagram ? 'notEmpty' : ''}`} />
                            <label htmlFor="instagram">Instagram</label>
                        </span>
                    </div>

                    <div style={{ height: 200 }} />
                </>
            )}

            {tabActive === 200 && ( //Tema
                <>
                    <div className="selectColor">
                        <label>Cor principal:</label>
                        <div className="swatch" onClick={() => _handleClick('mainColor')}>
                            <div className="mainColor" />
                        </div>
                    </div>

                    <div className="selectColor">
                        <label>Cor Redes Sociais:</label>
                        <div className="swatch" onClick={() => _handleClick('socialColor')}>
                            <div className="socialColor" />
                        </div>
                    </div>

                    { displayColorPicker && (
                        <div className="popover">
                            <div className="cover" onClick={_handleClose} />
                            <ChromePicker
                                color={displayColorPickerTo === 'mainColor' ? mainColor : socialColor}
                                onChangeComplete={handleChangeComplete}
                            />
                        </div>
                    )}
                </>
            )}

            {tabActive === 300 && ( //Foto
                <>
                    <div>
                        <span>
                            <input id="foto" type="text" onChange={e => {
                                profiles[profileActive].foto = e.currentTarget.value;
                                setData({ ...data })
                            }} value={foto} className={`${foto ? 'notEmpty' : ''}`} />
                            <label htmlFor="foto">URL Foto</label>
                        </span>
                    </div>
                </>
            )}

            <style jsx>{`
            .container {
                padding-top: 2rem;
            }
            .container > div {
                
                line-height: 1.625;
                box-sizing: border-box;
                width: 100%;
                height: auto;
                padding: 1rem 2.5rem;
            }

            .container h4 {
                padding: 0 2.5rem;
                margin-bottom: 0;
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

            //Templates
            .svgTemplates > div {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 3rem;
                cursor: pointer;
            }
            .svgTemplates > div > div {
                flex: 1;
                height: 100%;
                width: 100%;
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                background: transparent;
                transition: background .4s;
            }
            .svgTemplates > div > div img {
                width: 30px;
                height: 30px;
                transform: scale(0);
                transition: transform .3s;
            }
            .svgTemplates > div.active > div {
                background: rgba(0,0,0,.4);
            }
            .svgTemplates > div.active > div img {
                transform: scale(1);
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
            .socialColor {
                width: 36px;
                height: 14px;
                border-radius: 2px;
                background: ${socialColor};
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