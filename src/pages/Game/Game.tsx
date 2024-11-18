import { useState } from "react";

import Monitor from "../../components/Monitor/Monitor";
import type { Bet } from "../../types";

import BetsForms from "../../components/BetsForms/BetsForms";
import Control from "../../components/Control/Control";
import { horses } from "../../constants";
import styles from "./styles.module.css";

function Game() {
    const [bets, setBets] = useState<Bet[]>([]);
    const [money, setMoney] = useState(50_000);

    const [raceResults, setRaceResults] = useState<string[] | null>(null);

    const startRace = () => {
        if (bets.length === 0) {
            alert("Вы должны сделать ставку!");
            return;
        }

        const results: Record<number, number> = {}

        for (let i = 0; i < 4; i++) {
            results[i] = Math.random();
        }

        const raceResultsComputed = Object.entries(results)
            .sort((a, b) => a[1] - b[1])
            .map(([index]) => horses[Number(index)]);

        const winner = raceResultsComputed[0];

        const winBet = bets.find(bet => bet.name === winner);

        if (winBet) setMoney(prevMoney => prevMoney + winBet.amount * 5);

        setRaceResults(raceResultsComputed);

        setBets([]);
    }

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

        setMoney(prevMoney => prevMoney - bet.amount)
    }

    const deleteBet = (horseToUnbet: string) => {
        const betToDelete = bets.find(bet => bet.name === horseToUnbet);

        if (!betToDelete) {
            alert("Вы не ставили на эту лошадь!")
            return;
        }
        
        setBets(bets => bets.filter(bet => bet.name !== horseToUnbet))

        setMoney(prevMoney => prevMoney + betToDelete.amount)
    };

    return <div>
        <h1>Game</h1>
        <div className={styles.container}>
            <Control startRace={startRace}/>
            <Monitor money={money} bets={bets} raceResults={raceResults}/>
            <BetsForms addNewBet={addNewBet} deleteBet={deleteBet}/>
        </div>
    </div>
}

export default Game;