import { Controller } from "react-hook-form";
import { Form } from "../ui/form";

type TDatePickerProps = {
  name: string;
  label?: string;
};

const MDatePicker = ({ name, label }: TDatePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form label={label} className="font-semibold mb-5">
            <DatePicker
              {...field}
              size="large"
              style={{ width: "100%" }}
              className=" font-normal font-mono"
            />
          </Form>
        )}
      />
    </div>
  );
};

export default MDatePicker;
