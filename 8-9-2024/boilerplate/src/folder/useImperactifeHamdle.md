import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => { const inputRef = useRef();

useImperativeHandle(ref, () => ({ focus: () => { inputRef.current.focus(); }, clear: () => { inputRef.current.value = ''; } }));

return <input ref={inputRef} {...props} />; });

const ParentComponent = () => { const inputRef = useRef();

return (

<button onClick={() => inputRef.current.focus()}>Focus Input <button onClick={() => inputRef.current.clear()}>Clear Input
); };
export default ParentComponent;