import Horse from "../../components/Horse/Horse";

const horses = ["Никита", "Ильдар", "Александр", "Андрей"];

function Game() {
    return <>
        <h1>Game</h1>
        {horses.map(horseName => <Horse key={horseName} name={horseName} />)}
    </>
}

export default Game;