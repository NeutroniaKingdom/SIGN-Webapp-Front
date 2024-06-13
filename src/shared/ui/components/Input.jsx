import CssUtils from "../../utils/CssUtils.js";
import { ErrorMessage } from "formik";
import { setLocale } from "yup";
import yupConfig from "../../common/yupConfig.js";

setLocale(yupConfig);

const Input = ({
    field,
    form,
    label,
    type,
    placeholder,
    disabled,
    className,
    ...rest
}) => {
    const hasError = form.errors[field.name] && form.touched[field.name];
    const isSuccessful = !form.errors[field.name] && form.touched[field.name];

    

    return (
        <div className={CssUtils.classNames("relative pb-4", className)} >
            {label && (
                <label
                    htmlFor={field.name}
                    className="block text-xs font-medium text-gray-700 md:text-sm mb-2"
                >
                    {label}
                </label>
            )}
            <div
                className={CssUtils.classNames(
                    'm-0 mb-1 flex rounded-sm bg-white ring-2 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary',
                    hasError &&
                    'ring-2 ring-status-danger focus-within:ring-status-danger',
                    isSuccessful &&
                    'ring-2 ring-status-success focus-within:ring-status-success',
                )}
            >
                <input
                    autoComplete="off"
                    id={field.name}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...field}
                    {...rest}
                    //Pourquoi les modification de class ne change que les input dans ma div
                    className="block appearance-none flex-1 border-0 bg-transparent px-2 py-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 w-full" // ICI w-2/4
                />
            </div>
            <ErrorMessage
                name={field.name}
                component="small"
                className="pointer-events-none bottom-0 flex items-center text-xs text-status-danger sm:text-sm xl:text-base"
            />
        </div>
    )
}

export default Input;