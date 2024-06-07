import React from "react";

interface ISelectProps {
  children: React.ReactNode;
  disabled?: boolean;
  label?: string;
  value: string;
  updateValue: (value: string) => void;
}

export const Select = ({ children, disabled, label, value, updateValue }: ISelectProps) => {
  return (
    <div className="flex flex-col w-full gap-2 items-center">
      {label ? <label className="label p-0">{label}</label> : null}
      <select
        className="flex w-full select select-bordered w-1/2 rounded bg-primary text-primary-content p-2"
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        disabled={disabled || false}
      >
        {children}
      </select>
    </div>
  )
}
