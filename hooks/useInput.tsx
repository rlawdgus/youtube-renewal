import { useState } from "react";

const useInput = (initialValue: string = ""): any[] => {
    const [state, setState] = useState<string>(initialValue);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setState(e.target.value);
    };

    return [state, onChange];
};

export default useInput;
