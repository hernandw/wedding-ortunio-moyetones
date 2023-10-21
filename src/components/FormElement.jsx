import PropTypes from "prop-types";

const FormElement = ({ type, label, placeholder, fieldRef, hasError }) => {
  const classes =
    "form-control w-full px-3 py-1.5 text-gray-700 rounded border border-gray-300 focus:outline-none focus:border-indigo-500";
  return (
    <div className="mb-6 form-group">
      <label className="block mb-2 text-sm font-bold text-gray-700">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className={classes}
          rows="3"
          placeholder={placeholder}
          {...fieldRef}
        />
      ) : (
        <input
          className={classes}
          type={type}
          placeholder={placeholder}
          {...fieldRef}
        />
      )}
      {hasError && (
        <span className="text-xs italic text-red-500">
          Please fill out this field.
        </span>
      )}
    </div>
  );
};

FormElement.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  fieldRef: PropTypes.object.isRequired,
  hasError: PropTypes.bool,
}

export default FormElement;
