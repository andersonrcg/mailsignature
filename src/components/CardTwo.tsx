import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

export function CardTwo() {
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
            <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', minWidth: '450px' }}>
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'center' }}>
                            <img src="/avatar.jpg"
                                role="presentation" width={130} className="sc-cHGsZl bHiaRe" style={{ maxWidth: '130px', display: 'inline-block' }} />
                        </td>
                    </tr>
                    <tr>
                        <td height={10} />
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <td>
                            <h3 color="#000000" className="sc-fBuWsC eeihxG" style={{ margin: '0px', fontSize: '18px', color: 'rgb(0, 0, 0)' }}>
                                <span>{nome}</span>
                                <span>&nbsp;</span>
                                <span>{sobrenome}</span>
                            </h3>

                            {cargo && (
                                <p color="#000000" className="sc-fMiknA bxZCMx" style={{ margin: '0px', color: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '22px' }}>
                                    <span>{cargo}</span>
                                </p>
                            )}

                            <p color="#000000" className="sc-dVhcbM fghLuF" style={{ margin: '0px', fontWeight: 500, color: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '22px' }}>
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
                                <p color="#000000" className="sc-eqIVtm kRufpp" style={{ color: 'rgb(0, 0, 0)', margin: '0px', fontSize: '14px', lineHeight: '22px' }}>
                                    <span>{campoPersonalizado}</span>
                                </p>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td height={30} />
                                    </tr>
                                    <tr>
                                        <td color={mainColor} height={1} className="sc-jhAzac hmXDXQ" style={{ width: '100%', borderBottom: `1px solid ${mainColor}`, borderLeft: 'none', display: 'block' }} />
                                    </tr>
                                    <tr>
                                        <td height={30} />
                                    </tr>
                                </tbody>
                            </table>
                            <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', width: '100%' }}>
                                <tbody>
                                    <tr style={{ verticalAlign: 'middle' }}>
                                        <td>
                                            <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                <tbody>
                                                    <tr style={{ verticalAlign: 'middle', height: 25 }}>
                                                        <td width={30} style={{ verticalAlign: 'middle' }}>
                                                            <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: 'bottom' }}>
                                                                            <span color={mainColor} className="sc-jlyJG bbyJzT" style={{ display: 'block', backgroundColor: `${mainColor}`, width: 11 }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color={mainColor} width={13} className="sc-iRbamj blSEcj" style={{ display: 'block', backgroundColor: `${mainColor}` }} />
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td style={{ padding: '0px', color: 'rgb(0, 0, 0)' }}>
                                                            <a href="tel:(11) 99999-9999" color="#000000" className="sc-gipzik iyhjGb" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px' }}>
                                                                <span>(11) 99999-9999</span>
                                                            </a> | <a href="tel:(11) 99999-9999" color="#000000" className="sc-gipzik iyhjGb" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px' }}>
                                                                <span>(11) 99999-9999</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ verticalAlign: 'middle', height: 25 }}>
                                                        <td width={30} style={{ verticalAlign: 'middle' }}>
                                                            <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: 'bottom' }}>
                                                                            <span color={mainColor} className="sc-jlyJG bbyJzT" style={{ display: 'block', backgroundColor: `${mainColor}`, width: 11 }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color={mainColor} width={13} className="sc-iRbamj blSEcj" style={{ display: 'block', backgroundColor: `${mainColor}` }} />
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td style={{ padding: '0px' }}>
                                                            <a href="mailto:endereco@email.com" color="#000000" className="sc-gipzik iyhjGb" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px' }}>
                                                                <span>endereco@email.com</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ verticalAlign: 'middle', height: 25 }}>
                                                        <td width={30} style={{ verticalAlign: 'middle' }}>
                                                            <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: 'bottom' }}>
                                                                            <span color={mainColor} className="sc-jlyJG bbyJzT" style={{ display: 'block', backgroundColor: `${mainColor}`, width: 11 }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color={mainColor} width={13} className="sc-iRbamj blSEcj" style={{ display: 'block', backgroundColor: `${mainColor}` }} />
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td style={{ padding: '0px' }}>
                                                            <a href="//url.do.site" color="#000000" className="sc-gipzik iyhjGb" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px' }}>
                                                                <span>url.do.site</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ verticalAlign: 'middle', height: 25 }}>
                                                        <td width={30} style={{ verticalAlign: 'middle' }}>
                                                            <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial' }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: 'bottom' }}>
                                                                            <span color={mainColor} className="sc-jlyJG bbyJzT" style={{ display: 'block', backgroundColor: `${mainColor}`, width: 11 }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png" color={mainColor} width={13} className="sc-iRbamj blSEcj" style={{ display: 'block', backgroundColor: `${mainColor}` }} />
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td style={{ padding: '0px' }}>
                                                            <span color="#000000" className="sc-csuQGl CQhxV" style={{ fontSize: '12px', color: 'rgb(0, 0, 0)' }}>
                                                                <span>Endereço linha 01, Endereço linha 02, Endereço linha 03, Endereço linha 04</span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td style={{ textAlign: 'right' }}>
                                            <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', width: '100%' }}>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', display: 'inline-block' }}>
                                                                <tbody>
                                                                    <tr style={{ textAlign: 'right' }}>
                                                                        <td>
                                                                            <a href="//Facebook" color="#6A78D1" className="sc-hzDkRC kpsoyz" style={{ display: 'inline-block', padding: '0px', backgroundColor: 'rgb(106, 120, 209)' }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png" alt="facebook" color="#6A78D1" height={24} className="sc-bRBYWo ccSRck" style={{ backgroundColor: 'rgb(106, 120, 209)', maxWidth: '135px', display: 'block' }} />
                                                                            </a>
                                                                        </td>
                                                                        <td width={5}>
                                                                            <div />
                                                                        </td>
                                                                        <td>
                                                                            <a href="//Twitter" color="#6A78D1" className="sc-hzDkRC kpsoyz" style={{ display: 'inline-block', padding: '0px', backgroundColor: 'rgb(106, 120, 209)' }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png" alt="twitter" color="#6A78D1" height={24} className="sc-bRBYWo ccSRck" style={{ backgroundColor: 'rgb(106, 120, 209)', maxWidth: '135px', display: 'block' }} />
                                                                            </a>
                                                                        </td>
                                                                        <td width={5}>
                                                                            <div />
                                                                        </td>
                                                                        <td>
                                                                            <a href="//LinkedIn" color="#6A78D1" className="sc-hzDkRC kpsoyz" style={{ display: 'inline-block', padding: '0px', backgroundColor: 'rgb(106, 120, 209)' }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" alt="linkedin" color="#6A78D1" height={24} className="sc-bRBYWo ccSRck" style={{ backgroundColor: 'rgb(106, 120, 209)', maxWidth: '135px', display: 'block' }} />
                                                                            </a>
                                                                        </td>
                                                                        <td width={5}>
                                                                            <div />
                                                                        </td>
                                                                        <td>
                                                                            <a href="//Instagram" color="#6A78D1" className="sc-hzDkRC kpsoyz" style={{ display: 'inline-block', padding: '0px', backgroundColor: 'rgb(106, 120, 209)' }}>
                                                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png" alt="instagram" color="#6A78D1" height={24} className="sc-bRBYWo ccSRck" style={{ backgroundColor: 'rgb(106, 120, 209)', maxWidth: '135px', display: 'block' }} />
                                                                            </a>
                                                                        </td>
                                                                        <td width={5}>
                                                                            <div />
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
                            <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td height={30} />
                                    </tr>
                                    <tr>
                                        <td color={mainColor} height={1} className="sc-jhAzac hmXDXQ" style={{ width: '100%', borderBottom: `1px solid ${mainColor}`, borderLeft: 'none', display: 'block' }} />
                                    </tr>
                                    <tr>
                                        <td height={30} />
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