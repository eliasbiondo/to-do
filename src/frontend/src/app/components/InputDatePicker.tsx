export default function InputDatePicker({placeholder, value, onChange, onEnter} : {placeholder: string, value: string, onChange: (value: string) => void, onEnter: () => void}) {
    return (
        <input
            type="date"
            className="h-12 max-w-xs text-base text-black mb-6 outline-none border-b-2 border-black"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    onEnter();
                }
            }}
            autoComplete="off"
        />
    )
}