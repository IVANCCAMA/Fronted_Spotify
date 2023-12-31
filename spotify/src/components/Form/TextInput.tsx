import React from 'react';

interface TextInputProps {
  name: string;
  label: string;
  value: string;
  onChange?: (newValue: string) => void;
  onFocus?: (newValue: string) => void;
  onBlur?: (newValue: string) => void;
  required?: boolean;
  isValid?: boolean;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  autoComplete?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  value,
  onChange = () => { },
  onFocus = () => { },
  onBlur = () => { },
  required = false,
  isValid = true,
  minLength = 0,
  maxLength = 20,
  placeholder = '',
  autoComplete = '',
}) => {
  return (
    <div className="campo">
      <div className="input-box">
        <label htmlFor={name}>{label}</label>
        
        <input
          autoFocus
          required={required}
          autoComplete={autoComplete}
          type="text"
          className={`validarNoRequiered${isValid ? (value?.length > 0 ? ' valid' : '') : ' active'}`}
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={(e) => onFocus(e.target.value)}
          onBlur={(e) => onBlur(e.target.value)}
          minLength={minLength}
          maxLength={maxLength}
          placeholder={placeholder || undefined}
        />
      </div>
    </div>
  );
};

export default TextInput;
