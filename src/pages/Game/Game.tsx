import { useState } from "react";

import Monitor from "../../components/Monitor/Monitor";
import type { Bet } from "../../types";

import BetsForms from "../../components/BetsForms/BetsForms";
import styles from "./styles.module.css";

function Game() {
    const [bets, setBets] = useState<Bet[]>([]);

    const addNewBet = (bet: Bet) => {
        if (bets.length === 2) {
            alert("Вы не можете сделать больше 2 ставок!");
            return;
        }

        const horsesWithBet = bets.map(bet => bet.name);

        if (horsesWithBet.includes(bet.name)) {
            alert("Вы уже поставили на эту лошадь!")
            return;
        }
        
        setBets(state => ([...state, bet]));
    }

    const deleteBet = (horseToUnbet: string) => {
        setBets(bets => bets.filter(bet => bet.name !== horseToUnbet))
    };

    return <div>
        <h1>Game</h1>
        <div className={styles.container}>
            <Monitor bets={bets}/>
            <BetsForms addNewBet={addNewBet} deleteBet={deleteBet}/>
        </div>
    </div>
}

export default Game;