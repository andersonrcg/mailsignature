import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

export function Card() {
    const { data, profileActive } = useContext(ProfileContext);
    const { profiles } = data;
    let {
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
        mainColor
    } = profiles[profileActive] ? profiles[profileActive] : profiles[0];

    if (nome === '' &&
        sobrenome === '' &&
        cargo === '' &&
        departamento === '' &&
        nomeEmpresa === '' &&
        campoPersonalizado === '' &&
        celular === '' &&
        telefone === '' &&
        email === '' &&
        site === '' &&
        endereco01 === '' &&
        endereco02 === '' &&
        endereco03 === '' &&
        endereco04 === ''
    ) {
        nome = 'Lorem Ipsum';
        sobrenome = 'Lorem Ipsum';
        cargo = 'Lorem Ipsum';
        departamento = 'Lorem Ipsum';
        nomeEmpresa = 'Lorem Ipsum';
        celular = '(11) 9.9999-9999';
        telefone = '(11) 9999-9999';
        email = 'lorem@ipsum.com';
        site = 'www.lorem.com.br';
        endereco01 = 'Lorem Ipsum';
        endereco02 = 'Lorem Ipsum';
        endereco03 = 'Lorem Ipsum';
        endereco04 = 'Lorem Ipsum';
    }

    const endereFormatted = [endereco01, endereco02, endereco03, endereco04].filter(Boolean).join(', ');

    return (
        <>
            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                <tbody>
                    <tr>
                        <td>
                            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>

                                            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                <tbody>
                                                    {foto !== '' && (
                                                        <tr>
                                                            <td style={{ textAlign: 'center' }}>
                                                                <img src={foto}
                                                                    role="presentation"
                                                                    width="130"
                                                                    style={{ maxWidth: '128px', display: 'block', borderRadius: '50%' }} />
                                                            </td>
                                                        </tr>
                                                    )}
                                                    <tr>
                                                        <td height="30">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', display: 'inline-block' }}>
                                                                <tbody>
                                                                    <tr style={{ textAlign: 'center' }}>

                                                                        {facebook !== '' && (
                                                                            <>
                                                                                <td>
                                                                                    <a href={facebook} color={socialColor} style={{ display: 'inline-block', padding: 0, backgroundColor: socialColor }}>
                                                                                        <img src="https://phpstack-467155-1464515.cloudwaysapps.com/icons/facebook-icon-2x.png" alt="facebook" color={socialColor} height="24" style={{ backgroundColor: socialColor, maxWidth: 135, display: 'block' }} />
                                                                                    </a>
                                                                                </td>
                                                                                <td width="5">
                                                                                    <div>
                                                                                    </div>
                                                                                </td>
                                                                            </>
                                                                        )}


                                                                        {twitter !== '' && (
                                                                            <>
                                                                                <td>
                                                                                    <a href={twitter} color={socialColor} style={{ display: 'inline-block', padding: 0, backgroundColor: socialColor }}>
                                                                                        <img src="https://phpstack-467155-1464515.cloudwaysapps.com/icons/twitter-icon-2x.png" alt="twitter" color={socialColor} height="24" style={{ backgroundColor: socialColor, maxWidth: 135, display: 'block' }} />
                                                                                    </a>
                                                                                </td>
                                                                                <td width="5">
                                                                                    <div>
                                                                                    </div>
                                                                                </td>
                                                                            </>
                                                                        )}


                                                                        {linkedin !== '' && (
                                                                            <>
                                                                                <td>
                                                                                    <a href={linkedin} color={socialColor} style={{ display: 'inline-block', padding: 0, backgroundColor: socialColor }}>
                                                                                        <img src="https://phpstack-467155-1464515.cloudwaysapps.com/icons/linkedin-icon-2x.png" alt="linkedin" color={socialColor} height="24" style={{ backgroundColor: socialColor, maxWidth: 135, display: 'block' }} />
                                                                                    </a>
                                                                                </td>
                                                                                <td width="5">
                                                                                    <div>
                                                                                    </div>
                                                                                </td>
                                                                            </>
                                                                        )}


                                                                        {instagram !== '' && (
                                                                            <>
                                                                                <td>
                                                                                    <a href={instagram} color={socialColor} style={{ display: 'inline-block', padding: 0, backgroundColor: socialColor }}>
                                                                                        <img src="https://phpstack-467155-1464515.cloudwaysapps.com/icons/instagram-icon-2x.png" alt="instagram" color={socialColor} height="24" style={{ backgroundColor: socialColor, maxWidth: 135, display: 'block' }} />
                                                                                    </a>
                                                                                </td>
                                                                                <td width="5">
                                                                                    <div>
                                                                                    </div>
                                                                                </td>
                                                                            </>
                                                                        )}

                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </td>
                                        <td width={46}>
                                            <div>
                                            </div>
                                        </td>
                                        <td style={{ padding: 0, verticalAlign: 'middle' }}>

                                            <h3 color="#000000" style={{ margin: 0, fontSize: 18, color: 'rgb(0, 0, 0)' }}>
                                                <span>{nome}</span>
                                                <span>&nbsp;</span>
                                                <span>{sobrenome}</span>
                                            </h3>

                                            {cargo && (
                                                <p color="#000000" style={{ margin: 0, color: 'rgb(0, 0, 0)', fontSize: 14, lineHeight: '22px' }}>
                                                    <span>{cargo}</span>
                                                </p>
                                            )}

                                            <p color="#000000" style={{ margin: 0, fontWeight: 500, color: 'rgb(0, 0, 0)', fontSize: 14, lineHeight: '22px' }}>
                                                {departamento && (
                                                    <>
                                                        <span>{departamento}</span>
                                                        <span>&nbsp;|&nbsp;</span>
                                                    </>
                                                )}

                                                {nomeEmpresa && (
                                                    <span>{nomeEmpresa}</span>
                                                )}
                                            </p>

                                            {campoPersonalizado && (
                                                <p color="#000000" style={{ color: 'rgb(0, 0, 0)', margin: 0, fontSize: 14, lineHeight: '22px' }}>
                                                    <span>{campoPersonalizado}</span>
                                                </p>
                                            )}
                                            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', width: '100%' }}>
                                                <tbody>
                                                    <tr>
                                                        <td height={30}>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td color={mainColor} height="1" style={{ width: '100%', borderBottom: `1px solid ${mainColor}`, borderLeft: 'none', display: 'block' }}>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height={30}>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                <tbody>

                                                    {(celular !== '' || telefone !== '') && (
                                                        <tr style={{ verticalAlign: 'middle', height: 25 }}>
                                                            <td width="30" style={{ verticalAlign: 'middle' }}>
                                                                <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style={{ verticalAlign: 'bottom' }}>
                                                                                <span color={mainColor} style={{ display: 'block', backgroundColor: `${mainColor}`, width: 11 }}>
                                                                                    <img src="https://phpstack-467155-1464515.cloudwaysapps.com/icons/phone-icon-2x.png" color={mainColor} width="13" style={{ display: 'block', backgroundColor: `${mainColor}` }} />
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>

                                                            <td style={{ padding: '0px', color: 'rgb(0, 0, 0)' }}>
                                                                {celular !== '' && (
                                                                    <a href={`tel:${celular}`} color="#000000" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: 12 }}>
                                                                        <span>{celular}</span>
                                                                    </a>
                                                                )}

                                                                {(celular !== '' && telefone !== '') && (
                                                                    <> | </>
                                                                )}

                                                                {telefone !== '' && (
                                                                    <a href={`tel:${telefone}`} color="#000000" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: 12 }}>
                                                                        <span>{telefone}</span>
                                                                    </a>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    )}

                                                    {email !== '' && (
                                                        <tr style={{ verticalAlign: 'middle', height: 25 }}>
                                                            <td width="30" style={{ verticalAlign: 'middle' }}>
                                                                <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style={{ verticalAlign: 'bottom' }}>
                                                                                <span color={mainColor} style={{ display: 'block', backgroundColor: `${mainColor}`, width: 11 }}>
                                                                                    <img src="https://phpstack-467155-1464515.cloudwaysapps.com/icons/email-icon-2x.png" color={mainColor} width="13" style={{ display: 'block', backgroundColor: `${mainColor}` }} />
                                                                                </span>

                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>

                                                            <td style={{ padding: 0 }}>
                                                                <a href={`mailto:${email}`} color="#000000" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: 12 }}>
                                                                    <span>{email}</span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    )}

                                                    {site !== '' && (
                                                        <tr style={{ verticalAlign: 'middle', height: 25 }}>
                                                            <td width="30" style={{ verticalAlign: 'middle' }}>
                                                                <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style={{ verticalAlign: 'bottom' }}>
                                                                                <span color={mainColor} style={{ display: 'block', backgroundColor: `${mainColor}`, width: 11 }}>
                                                                                    <img src="https://phpstack-467155-1464515.cloudwaysapps.com/icons/link-icon-2x.png" color={mainColor} width="13" style={{ display: 'block', backgroundColor: `${mainColor}` }} />
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style={{ padding: 0 }}>
                                                                <a href={site} color="#000000" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: 12 }}>
                                                                    <span>{site}</span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    )}

                                                    {endereFormatted !== '' && (
                                                        <tr style={{ verticalAlign: 'middle', height: 25 }}>
                                                            <td width="30" style={{ verticalAlign: 'middle' }}>
                                                                <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style={{ verticalAlign: 'bottom' }}>
                                                                                <span color={mainColor} style={{ display: 'block', backgroundColor: `${mainColor}`, width: 11 }}>
                                                                                    <img src="https://phpstack-467155-1464515.cloudwaysapps.com/icons/address-icon-2x.png" color={mainColor} width="13" style={{ display: 'block', backgroundColor: `${mainColor}` }} />
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style={{ padding: 0 }}>
                                                                <span color="#000000" style={{ fontSize: 12, color: 'rgb(0, 0, 0)' }}>
                                                                    <span>{endereFormatted}</span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    )}

                                                </tbody>
                                            </table>

                                            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                <tbody>
                                                    <tr>
                                                        <td height="30">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>

                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}