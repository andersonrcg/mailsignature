import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";
import { Card } from "./Card";
import { CardTwo } from "./CardTwo";

export function ShowCards() {
    const { card } = useContext(ProfileContext);

    return (
        <>
            {card === 2 ? (
                <CardTwo />
            ) : (
                    <Card />
                )}
        </>
    );
}