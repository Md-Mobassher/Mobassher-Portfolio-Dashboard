import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
};

const MInput = ({
  type,
  name,
  label,
  disabled,
  placeholder,
  required,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item mb-5">
            {label && (
              <label className="font-semibold lg:pb-5 md:mb-4 mb-3">
                {label}
              </label>
            )}
            <Input
              className="font-normal font-mono border-green-400 active:border-green-500 mt-1"
              {...field}
              type={type}
              id={name}
              placeholder={placeholder}
              disabled={disabled}
              required={required}
            />
          </div>
        )}
      />
    </div>
  );
};

export default MInput;
