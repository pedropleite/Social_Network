import type { FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    placeholder: string;
    required?: boolean;
    field: Path<T>;
    register: UseFormRegister<T>;
    errors?: string;
    pattern?: RegExp;
    validate?: RegisterOptions["validate"];
    type?: string;
}

export function Input<T extends FieldValues>({
    placeholder,
    required,
    field,
    register,
    errors,
    pattern,
    validate,
    type = "text",
}: InputProps<T>) {
    return (
        <label>
            <span>{placeholder}:</span>
            <input
                type={type}
                placeholder={placeholder}
                {...register(field, {
                    required: required ? `${field.toUpperCase()} is required` : false,
                    pattern: {
                        value: pattern ?? /.*/,
                        message: `Fill in the ${placeholder} field according to the rules`,
                    },
                    validate: validate,
                })}
            />
            {errors && <p className="errorDefault">{errors}</p>}
        </label>
    );
}
