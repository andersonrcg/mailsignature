import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

export function Card() {
    const {
        nome,
        sobrenome,
        cargo,
        departamento,
        nomeEmpresa,
        campoPersonalizado,
        mainColor
    } = useContext(ProfileContext);

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
                                                    <tr>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <img src="/avatar.jpg"
                                                                role="presentation"
                                                                width="130"
                                                                style={{ maxWidth: '128px', display: 'block', borderRadius: '50%' }} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="30">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', display: 'inline-block' }}>
                                                                <tbody>
                                                                    <tr style={{ textAlign: 'center' }}>
                                                                        <td>
                                                                            <a href="//Facebook" color="#6A78D1" style={{ display: 'inline-block', padding: 0, backgroundColor: 'rgb(106, 120, 209)' }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png" alt="facebook" color="#6A78D1" height="24" style={{ backgroundColor: 'rgb(106, 120, 209)', maxWidth: 135, display: 'block' }} />
                                                                            </a>
                                                                        </td>
                                                                        <td width="5">
                                                                            <div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <a href="//Twitter" color="#6A78D1" style={{ display: 'inline-block', padding: 0, backgroundColor: 'rgb(106, 120, 209)' }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png" alt="twitter" color="#6A78D1" height="24" style={{ backgroundColor: 'rgb(106, 120, 209)', maxWidth: 135, display: 'block' }} />
                                                                            </a>
                                                                        </td>
                                                                        <td width="5">
                                                                            <div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <a href="//LinkedIn" color="#6A78D1" style={{ display: 'inline-block', padding: 0, backgroundColor: 'rgb(106, 120, 209)' }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" alt="linkedin" color="#6A78D1" height="24" style={{ backgroundColor: 'rgb(106, 120, 209)', maxWidth: 135, display: 'block' }} />
                                                                            </a>
                                                                        </td>
                                                                        <td width="5">
                                                                            <div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <a href="//Instagram" color="#6A78D1" style={{ display: 'inline-block', padding: 0, backgroundColor: 'rgb(106, 120, 209)' }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png" alt="instagram" color="#6A78D1" height="24" style={{ backgroundColor: 'rgb(106, 120, 209)', maxWidth: 135, display: 'block' }} />
                                                                            </a>
                                                                        </td>
                                                                        <td width="5">
                                                                            <div>
                                                                            </div>
                                                                        </td>
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
                                                    <tr style={{ verticalAlign: 'middle', height: 25 }}>
                                                        <td width="30" style={{ verticalAlign: 'middle' }}>
                                                            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: 'bottom' }}>
                                                                            <span color={mainColor} style={{ display: 'block', backgroundColor: `${mainColor}`, width: 11 }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color={mainColor} width="13" style={{ display: 'block', backgroundColor: `${mainColor}` }} />
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td style={{ padding: '0px', color: 'rgb(0, 0, 0)' }}>
                                                            <a href="tel:(11) 99999-9999" color="#000000" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: 12 }}>
                                                                <span>(11) 99999-9999</span>
                                                            </a> | <a href="tel:(11) 99999-9999" color="#000000" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: 12 }}>
                                                                <span>(11) 99999-9999</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ verticalAlign: 'middle', height: 25 }}>
                                                        <td width="30" style={{ verticalAlign: 'middle' }}>
                                                            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: 'bottom' }}>
                                                                            <span color={mainColor} style={{ display: 'block', backgroundColor: `${mainColor}`, width: 11 }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color={mainColor} width="13" style={{ display: 'block', backgroundColor: `${mainColor}` }} />
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td style={{ padding: 0 }}>
                                                            <a href="mailto:endereco@email.com" color="#000000" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: 12 }}>
                                                                <span>endereco@email.com</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ verticalAlign: 'middle', height: 25 }}>
                                                        <td width="30" style={{ verticalAlign: 'middle' }}>
                                                            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: 'bottom' }}>
                                                                            <span color={mainColor} style={{ display: 'block', backgroundColor: `${mainColor}`, width: 11 }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color={mainColor} width="13" style={{ display: 'block', backgroundColor: `${mainColor}` }} />
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td style={{ padding: 0 }}>
                                                            <a href="//url.do.site" color="#000000" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: 12 }}>
                                                                <span>url.do.site</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ verticalAlign: 'middle', height: 25 }}>
                                                        <td width="30" style={{ verticalAlign: 'middle' }}>
                                                            <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: 'bottom' }}>
                                                                            <span color={mainColor} style={{ display: 'block', backgroundColor: `${mainColor}`, width: 11 }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png" color={mainColor} width="13" style={{ display: 'block', backgroundColor: `${mainColor}` }} />
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td style={{ padding: 0 }}>
                                                            <span color="#000000" style={{ fontSize: 12, color: 'rgb(0, 0, 0)' }}>
                                                                <span>Endereço linha 01, Endereço linha 02</span>
                                                            </span>
                                                        </td>
                                                    </tr>
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