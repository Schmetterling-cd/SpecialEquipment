import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'file', className = '', isFocused = false, ...props }, ref) {
    const fileInput = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            console.log(fileInput);
            fileInput.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={fileInput}
        />
    );
});
