export function UserInput({label, defaultValue, onChange}) {
    
    return (
        <span>
            <label>{label}</label>
            <input type="number" defaultValue={defaultValue} onChange={onChange}/>
        </span>
    );

}