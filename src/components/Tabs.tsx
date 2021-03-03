import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

export function Tabs() {
    const { tabActive, setTabActive } = useContext(ProfileContext);

    return (
        <div className="tabs">
            <div className="bgActive" />
            <div onClick={() => setTabActive(0)}>
                <img src="/icons/template-tab.svg" alt="LAYOUT" className="sc-CtfFt iKpUSO esg-template" />
            </div>
            <div onClick={() => setTabActive(100)}>
                <img src="/icons/form-tab.svg" alt="FORM" className="sc-CtfFt iKpUSO esg-details" />
            </div>
            <div onClick={() => setTabActive(200)}>
                <img src="/icons/style-tab.svg" alt="STYLE" className="sc-CtfFt iKpUSO esg-stylize" />
            </div>
            <div onClick={() => setTabActive(300)}>
                <img src="/icons/image-tab.svg" alt="IMAGES" className="sc-CtfFt iKpUSO esg-images" />
            </div>

            <style jsx>{`
              .tabs {
                -webkit-font-smoothing: antialiased;
                line-height: 1.625;
                box-sizing: border-box;
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: row;
                background-color: rgb(66, 91, 118);
              }
              .tabs > div.bgActive {
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  height: 5rem;
                  width: 25%;
                  transform: translateX(${tabActive}%);
                  transition: transform 0.3s ease-in-out 0s;
                  background-color: rgb(51, 71, 91);
              }
              .tabs > div {
                width: 100%;
                height: 5rem;
                border-right: 1px solid rgb(51, 71, 91);
                border-bottom: 1px solid rgb(51, 71, 91);
                z-index: 1;
                cursor: pointer;
                flex-direction: row;
                display: flex;
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
              }
              .tabs > div img {
                height: 1.25rem;
                width: 1.25rem;
              }
            `}</style>
        </div>
    );
}