import CssUtils from "../../utils/CssUtils.js";

const Button = ({children, className, ...props}) => {
    return (
        <button className={CssUtils.classNames("btn btn-primary", className)} {...props}>
            {children}
        </button>
    )
}

export default Button;