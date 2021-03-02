import { useContext, useState } from "react";
import { ProfileContext } from "../contexts/ProfileContext";
import { ChromePicker } from 'react-color';

export function Form() {
    const [displayColorPicker, setdisplayColorPicker] = useState(false)

    const {
        setnome,
        setsobrenome,
        setcargo,
        setdepartamento,
        setnomeEmpresa,
        setcampoPersonalizado,
        mainColor,
        setmainColor,
    } = useContext(ProfileContext)

    const handleChangeComplete = (color) => {
        setmainColor(`rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`);
    };

    const _handleClick = () => {
        setdisplayColorPicker(!false)
    };

    const _handleClose = () => {
        setdisplayColorPicker(false)
    };

    return (
        <div className="container">

            <div>
                <span>
                    <input type="text" onChange={e => setnome(e.currentTarget.value)} placeholder="Nome" />
                </span>
            </div>

            <div>
                <span>
                    <input type="text" onChange={e => setsobrenome(e.currentTarget.value)} placeholder="sobrenome" />
                </span>
            </div>

            <div>
                <span>
                    <input type="text" onChange={e => setcargo(e.currentTarget.value)} placeholder="Cargo" />
                </span>
            </div>

            <div>
                <span>
                    <input type="text" onChange={e => setdepartamento(e.currentTarget.value)} placeholder="Departamento" />
                </span>
            </div>

            <div>
                <span>
                    <input type="text" onChange={e => setnomeEmpresa(e.currentTarget.value)} placeholder="Nome da empresa" />
                </span>
            </div>

            <div>
                <span>
                    <input type="text" onChange={e => setcampoPersonalizado(e.currentTarget.value)} placeholder="Campo personalizado" />
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

            .container > div {
                color: #33475b;
                line-height: 1.625;
                box-sizing: border-box;
                width: 100%;
                height: auto;
                padding: 1rem 3.75rem;
                transform: matrix(1, 0, 0, 1, 0, 0);
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
            `}</style>
        </div>
    );
}