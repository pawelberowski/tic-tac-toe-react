export const PlayerNameInput = ({ onChange, shape }) => {
    return (
        <input
            onChange={onChange}
            placeholder={`Set ${shape} player name`}
        />
    )
}