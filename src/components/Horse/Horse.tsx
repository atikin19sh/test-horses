import { useState } from "react";
import type { Bet } from "../../types";

interface Props {
    name: string;
    addNewBet: (bet: Bet) => void;
    deleteBet: (horseToUnbet: string) => void;
}

function Horse({name, addNewBet, deleteBet}: Props) {
    const [betAmount, setBetAmount] = useState<number | string>("");

    const inputNewBet: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        console.log(value)
        setBetAmount(Number(value));
    }

    const onAddNewBetClick = () => {
        const amount = Number(betAmount);

        if (!amount) {
            alert("Ставка должна быть больше 0!")
            return;
        }

        addNewBet({name, amount});

        setBetAmount("");
    }

    const onDeleteBetClick = () => {
        deleteBet(name);
    }

    return <>
        <h3>Horse {name}</h3>
        <div>
            <input type="number" placeholder="Введите ставку" onChange={inputNewBet} value={betAmount}/>
            <button type="button" onClick={onAddNewBetClick}>Сделать ставку</button>
            <button type="button" onClick={onDeleteBetClick}>Снять ставку</button>
        </div>
    </>
}

export default Horse;