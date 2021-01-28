import React from "react";

import { InputAttribute } from "../../lib/interfaces";

import style from "./InputBox.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(style);

const InputBox: React.FC<InputAttribute> = ({
    className,
    type,
    value,
    placeholder,
    onChange,
    onKeyDown,
    readOnly,
}) => {
    return (
        <input
            className={cx(`${className}`)}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            readOnly={readOnly}
        />
    );
};

InputBox.defaultProps = {
    className: "box",
    type: "text",
    readOnly: false,
};

export default InputBox;
