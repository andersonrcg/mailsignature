import Head from 'next/head'
import { ReactNode, useContext, useRef, useState } from "react";
import { ChangeProfile } from '../components/ChangeProfile';
import { Form } from '../components/Form';
import { ShowCards } from '../components/showCards';
import { Tabs } from '../components/Tabs';
import { ProfileContext, ProfileProvider } from '../contexts/ProfileContext';

export default function Home() {
  let copyBoxRef = useRef();
  const [copied, setCopied] = useState(false);
  const { card } = useContext(ProfileContext);

  interface CopyBoxElementInt {
    copyBoxElement: ReactNode;
    contentEditable: boolean;
    focus: () => void;
  }

  function showCopiedMessage() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3550)

    setTimeout(() => {
      const obj = copiedRef.current || { classList: null };
      if (obj !== undefined)
        obj.classList.toggle('is-animate')
    }, 3000)
  }

  const handleCopy = () => {
    const copyBoxElement: CopyBoxElementInt = copyBoxRef.current;
    copyBoxElement.contentEditable = true;
    copyBoxElement.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    copyBoxElement.contentEditable = false;
    getSelection().empty();
    showCopiedMessage();
  };

  const copiedRef = useRef();


  return (
    <div className="container">

      <Head>
        <title>Assinatura de email - Simples e gratuito</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <ProfileProvider>

        <div className="sidebar">
          <Tabs />

          <div>
            <Form />
          </div>
        </div>

        <div className="content">
          <div className="logo">
            <img src="/logo.svg" alt=""/>
            <span style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600, paddingLeft: 10, lineHeight: 1 }}>
              Assinatura de email <br />
              <small style={{ fontSize: '.8rem', fontWeight: 400 }}>Simples e gratuito</small>
            </span>

            <ChangeProfile />
          </div>

          <div className="containerBoxCard">
            <div className="boxCard" ref={copyBoxRef}>
              <ShowCards />
            </div>

            <button className="copyButton" type="button" onClick={handleCopy}> Copiar </button>

            {copied && (
              <div className="copied" ref={copiedRef}>
                <strong>Copiado!</strong> Agora você pode dar aquele Crlt + V e utilizar sua assinatura.
              </div>
            )}
          </div>

        </div>
      </ProfileProvider>

      <style jsx>{`
      .container {
        background-color: #f1f2f3;
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
      }

      .sidebar {
        -webkit-font-smoothing: antialiased;
        color: #FFF;
        line-height: 1.625;
        box-sizing: border-box;
        position: relative;
        top: 0px;
        left: 0px;
        height: 100vh;
        width: 25%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        background-color: rgb(51, 71, 91);
        transform: translateX(0px);
      }
      .sidebar > div:last-child {
        -webkit-font-smoothing: antialiased;
        line-height: 1.625;
        box-sizing: border-box;
        position: relative;
        height: 100%;
        overflow-x: scroll;
      }

      .content {
        background: linear-gradient(-45deg, rgb(106, 120, 209), rgb(0, 164, 189));
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding: 2rem 5rem;
      }

      .containerBoxCard {
        width: 100%;
        position: relative;
        overflow: hidden;
        
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .containerBoxCard > .boxCard {
        background: #FFF;
        border: solid 1px #d1d3d4;
        padding: 2rem 3rem;
        border-radius: 6px;
        box-shadow: 0 0 30px rgba(0,0,0,.2);
      }

      .logo {
        display: flex;
        alignItems: center;
        width: 100%;
      }

      .copied {
        border-top: solid 1px #bdbdbd;

        padding: .5rem;
        margin-top: 1rem;

        text-align: center;
        line-height: 1.5;
        color: var(--firstColor);

        transition-duration: .8s, .4s;
        transition-property: transform, opacity;
      }
      .copied strong {
        color: var(--firstColor);
        display: block;
        font-size: 1.8rem;
      }
      .copied.is-animate {
        transform: translateY(300px);
        opacity: 0;
      }


      .copyButton {
        border: 0;
        border-radius: 5px;

        cursor: pointer;

        background-color: var(--firstColor);
        color: #FFF;
        font-size: 1.4rem;
        
        padding: 12px 20px;
        margin-top: 1.2rem;

        line-height: 1;

        transition: transform .3s;
      }

      .copyButton:hover {
        background-color: var(--firstColorDark);
        transform: scale(1.04)
      }
      `}</style>
    </div>
  )
}
