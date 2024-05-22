
export const FormField = ({ label, id, type, placeholder, value, onChange, disabled }) => (
    <div className="mb-4  p-2 rounded-lg">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full py-1 outline-none border-b-2 rounded"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
      />
    </div>
  );