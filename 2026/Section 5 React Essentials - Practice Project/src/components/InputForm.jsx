import InputField from "./InputField"

export default function InputForm({handleUserInput}) {
    return <form id="user-input">
        <section className="input-group">
            <InputField name="initialInvestment" title="Initial Investment" onChange={handleUserInput}></InputField>
            <InputField name="annualInvestment" title="Annual Investment" onChange={handleUserInput}></InputField>
        </section>

        <section className="input-group">
            <InputField name="expectedReturn" title="Expected Return" onChange={handleUserInput}></InputField>
            <InputField name="duration" title="Duration" onChange={handleUserInput}></InputField>
        </section>
    </form>
}