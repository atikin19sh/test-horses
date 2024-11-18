import type { Bet } from "../../types";
import Horse from "../Horse/Horse";

const horses = ["Никита", "Ильдар", "Александр", "Андрей"];

interface Props {
    addNewBet: (bet: Bet) => void;
    deleteBet: (horseToUnbet: string) => void;
}

function BetsForms({addNewBet, deleteBet}: Props) {
    return <div>
        <h2>Ставки</h2>
        {horses.map(horseName => <Horse key={horseName} name={horseName} addNewBet={addNewBet} deleteBet={deleteBet}/>)}
    </div>
}

export default BetsForms;