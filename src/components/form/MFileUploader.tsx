import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

type TInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
};

const MFileUploader = ({
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
        render={({ field: { onChange, value, ...field } }) => (
          <div className="form-item mb-5">
            {label && (
              <label className="font-semibold lg:pb-5 md:mb-4 mb-3">
                {label}
              </label>
            )}
            <Input
              className="font-normal font-mono border-green-400 active:border-green-500 mt-1"
              {...field}
              type="file"
              id={name}
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              value={value?.fileName}
              onChange={(e) =>
                onChange((e?.target as HTMLInputElement).files?.[0])
              }
            />
          </div>
        )}
      />
    </div>
  );
};

export default MFileUploader;
