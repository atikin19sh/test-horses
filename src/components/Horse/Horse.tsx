import { useRef } from "react";
import type { Bet } from "../../types";

interface Props {
    name: string;
    addNewBet: (bet: Bet) => void;
    deleteBet: (horseToUnbet: string) => void;
}

function Horse({name, addNewBet, deleteBet}: Props) {
    const betAmount = useRef<number>(0);

    const inputNewBet: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        betAmount.current = Number(value);
    }

    const onAddNewBetClick = () => {
        const amount = betAmount.current;

        if (!amount) {
            alert("Ставка должна быть больше 0!")
            return;
        }

        addNewBet({name, amount});
    }

    const onDeleteBetClick = () => {
        deleteBet(name);
    }

    return <>
        <h3>Horse {name}</h3>
        <div>
            <input type="number" placeholder="Введите ставку" onChange={inputNewBet} />
            <button type="button" onClick={onAddNewBetClick}>Сделать ставку</button>
            <button type="button" onClick={onDeleteBetClick}>Снять ставку</button>
        </div>
    </>
}

export default Horse;