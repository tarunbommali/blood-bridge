export const FormSelect = ({ label, id, options, value, onChange, disabled }) => (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}:
      </label>
      <select
        id={id}
        name={id}
        className="w-full p-2 border border-gray-300 rounded"
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
      >
        {options.map((option, index) => (
          <option key={index} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );