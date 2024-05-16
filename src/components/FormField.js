
export const FormField = ({ label, id, type, placeholder, value, onChange, disabled }) => (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
      />
    </div>
  );