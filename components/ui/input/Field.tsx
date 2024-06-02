import { forwardRef } from "react";
import { IField } from "./field.interface";

const Field = forwardRef<HTMLInputElement, IField>(
    ({ placeholder, error, type = 'text', ...rest }, ref) => {
        return (
            <div className="field__input">
                <label>
                    <input ref={ref} type={type} {...rest} placeholder={placeholder} />
                </label>
                {error && <div className="error">{error}</div>}
            </div>
        )
    }
)

Field.displayName = "Field"

export default Field