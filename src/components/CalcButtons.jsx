
const CalcButtons = ({ buttons, buttonHandler }) => (
    <div>
        {buttons.map((item, index) => (
            <button key={index} item={item} onClick={() => buttonHandler(item)} >{item}</button>
        ))}
    </div>
)

export default CalcButtons