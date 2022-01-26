import React from "react";
import { Textarea, TextareaProps } from "theme-ui";
import { UITextareaProps } from "./Textarea.interface";

const ThemeUITextarea: React.FC<TextareaProps> = ({ sx, ...props }) => {
  return <Textarea {...props} sx={{ ...sx, variant: "forms.textarea" }} />;
};

export default ThemeUITextarea;
