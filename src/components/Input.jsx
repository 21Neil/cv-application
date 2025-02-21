import { useEffect, useRef } from "react";

const Input = ({
  className,
  type,
  value,
  onChange,
  placeholder,
  initWidth,
}) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const inputElement = useRef(null);

  const handleInputWidth = (element) => {
    
    let value;
    
    ctx.font = getComputedStyle(element).font;
    
    if (element.value.length === 0) value = element.placeholder;
    if (element.value.length !== 0) value = element.value;
    
    const textWidth = ctx.measureText(value).width;
    
    if(textWidth >= element.parentElement.clientWidth - 5) return;
    
    element.style.width = textWidth + "px";
  };

  useEffect(() => {
    if (!value) inputElement.current.style.width = initWidth + "px";
    if (value) handleInputWidth(inputElement.current);
  }, [inputElement, initWidth, value]);

  if (type === "textarea")
    return (
      <textarea
        className={className}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onInput={(e) => handleInputWidth(e.target)}
        ref={inputElement}
        rows={1}
      />
    );

  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onInput={(e) => handleInputWidth(e.target)}
      ref={inputElement}
    />
  );
};

export default Input;
