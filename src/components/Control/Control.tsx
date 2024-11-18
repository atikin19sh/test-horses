interface Props {
    startRace: () => void;
}

function Control({startRace}: Props) {
    return <>
        <button type="button" onClick={startRace}>START RACE</button>
    </>
}

export default Control;