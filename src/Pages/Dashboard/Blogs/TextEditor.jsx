import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import { BiBorderRadius } from "react-icons/bi";

const TextEditor = ({ value, onChange }) => {
  const editor = useRef(null);

  const config = {
    readonly: false,
    placeholder: "Start typing...",
    minHeight: 1,
    toolbarAdaptive: false,
    toolbar: true,
    statusbar: false,
    maxHeight: 200,
  };

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      onBlur={(newContent) => onChange(newContent)}
      onChange={(newContent) => {}} // Prevents console warnings
      style={{ BorderRadius: "15px" }}
    />
  );
};

export default TextEditor;
