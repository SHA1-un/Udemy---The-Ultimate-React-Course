import InputField from "./InputField"

export default function InputForm() {
    return <form id="user-input">
        <section className="input-group">
            <InputField></InputField>
            <InputField></InputField>
        </section>
        
        <section className="input-group"> 
            <InputField></InputField>
            <InputField></InputField>
        </section>
    </form>
}