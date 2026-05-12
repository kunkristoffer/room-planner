import { type ViewMode } from "@/types/Rooms";

interface SelectProps {
  value: ViewMode;
  options: ViewMode[];
  onChange: (val: ViewMode) => void;
}

export function ViewModeSelect({ value, options, onChange }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.currentTarget.value as ViewMode)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
