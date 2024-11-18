import { useRef } from "react";

function Horse({name}: {name: string}) {
    console.log("Horse")
    const bet = useRef(0);

    const inputNewBet: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        bet.current = Number(value);
    }

    return <>
        <h3>Horse {name}</h3>
        <div>
            <input type="number" placeholder="Введите ставку" onChange={inputNewBet} />
            <button type="button">Сделать ставку</button>
            <button type="button">Снять ставку</button>
        </div>
    </>
}

export default Horse;