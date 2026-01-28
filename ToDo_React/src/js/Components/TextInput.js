export default function TextInput({type = "text", value, onChange}) {
    return (
        <input type={type} defaultValue={value} onChange={onChange} />
    )
}
