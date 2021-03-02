import Head from 'next/head'
import { ReactNode, useRef, useState } from "react";
import { Card } from "../components/Card";
import { CardTwo } from "../components/CardTwo";
import { Form } from '../components/Form';
import { ProfileProvider } from '../contexts/ProfileContext';

export default function Home() {

  let copyBoxRef = useRef();
  const [copied, setCopied] = useState(false);

  const [card, setcard] = useState(1);

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
      const obj = copiedRef.current || {classList: null};
      if(obj !== undefined)
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
      </Head>

      <ProfileProvider>

        <div className="sidebar">
          <div>
            <div style={{padding: 20, display: 'flex', alignItems: 'center'}}>
              <svg enableBackground="new 0 0 511.96 511.96" height="55" viewBox="0 0 511.96 511.96" width="55" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFF" d="m371.763 511.892c-15.619 0-31.121-4.567-44.594-13.531l-107.352-71.428c-9.196-6.119-11.69-18.534-5.572-27.73 6.119-9.195 18.535-11.691 27.73-5.572l107.352 71.428c11.664 7.762 25.729 9.025 38.587 3.467 12.858-5.556 21.576-16.662 23.917-30.471l59.454-350.679c2.544-15.007-3.121-29.532-15.154-38.854-12.035-9.323-27.517-11.178-41.416-4.966l-350.803 156.854c-13.698 6.125-22.621 18.707-23.869 33.657-1.249 14.951 5.463 28.839 17.955 37.15l48.979 32.588c9.196 6.119 11.69 18.534 5.572 27.73-6.119 9.194-18.535 11.69-27.73 5.572l-48.979-32.587c-52.669-33.74-45.777-116.101 11.745-140.626l350.802-156.855c27.188-12.155 58.699-8.378 82.24 9.86 23.541 18.236 35.072 47.803 30.096 77.161l-59.454 350.679c-4.58 27.017-22.333 49.635-47.487 60.504-10.302 4.451-21.189 6.649-32.019 6.649zm-197.866-19.932v-92.351c0-17.991 7.33-35.572 20.111-48.234l187.964-186.207c7.848-7.773 7.907-20.437.133-28.283-7.773-7.847-20.438-7.908-28.283-.133l-187.965 186.207c-20.311 20.122-31.96 48.06-31.96 76.65v92.351c0 11.046 8.954 20 20 20s20-8.954 20-20z" />
              </svg>
              <span style={{color: '#FFF', fontSize: '1.4rem', fontWeight: 600, paddingLeft: 10, lineHeight: 1}}>
                Assinatura de email <br/>
                <small style={{fontSize: '1rem', fontWeight: 400}}>Simples e gratuito</small>
              </span>
            </div>
          </div>
          <div>
            <Form />
            <button type="button" onClick={() => setcard(1)}>Card 1</button>
            <button type="button" onClick={() => setcard(2)}>Card 2</button>
          </div>
        </div>

        <div className="containerBoxCard">
          <div className="boxCard" ref={copyBoxRef}>

            {card == 1 ? (
              <Card />
            ) : (
                <CardTwo />
              )}
          </div>
          
          <button className="copyButton" type="button" onClick={handleCopy}> Copiar </button>

          {copied && (
            <div className="copied" ref={copiedRef}>
              <strong>Copiado!</strong> Agora você pode dar aquele Crlt + V e utilizar sua assinatura.
            </div>
          )}
        </div>
      </ProfileProvider>

      <style jsx>{`
      .container {
        background-color: #f1f2f3;
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
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

      .sidebar > div:first-child {
        -webkit-font-smoothing: antialiased;
        line-height: 1.625;
        box-sizing: border-box;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        background-color: rgb(66, 91, 118);
      }

      .sidebar > div:last-child {
        -webkit-font-smoothing: antialiased;
        line-height: 1.625;
        box-sizing: border-box;
        position: relative;
        height: 100%;
        overflow-x: scroll;
      }

      .containerBoxCard {
        padding: 5.625rem 2.5rem;
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
