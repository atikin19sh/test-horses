import type { Bet } from "../../types";

interface Props {
    bets: Bet[];
}

function Monitor({bets}: Props) {
    const betsSum = bets.reduce((acc, bet) => acc + bet.amount, 0);
    const money = 0;

    return <div>
        <h2>Monitor</h2>
        <hr />
        <div>Ваши деньги: {money}</div>
        <hr />
        <div>Всего ставок: {bets.length}</div>
        <div>Сумма ставок: {betsSum}</div>
        <hr />
        {bets.map((bet, index) => {
            return (
                <div key={bet.name}>
                    Ставка {index + 1} на {bet.name} = {bet.amount}
                </div>
            )
        })}
        <hr />
    </div>
}

export default Monitor;