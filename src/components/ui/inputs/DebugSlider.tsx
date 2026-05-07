interface Props {
  value: number;
  label: string;
  min?: number;
  max?: number;
  onChange: (inp: number) => void;
}

export function DebugSlider({
  label,
  value,
  min = -100,
  max = 100,
  onChange,
}: Props) {
  return (
    <label className="flex flex-col text-xs">
      <span className="flex gap-2 justify-between">
        <p className="text-nowrap">{label}</p>
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(Number(e.currentTarget.value))}
        
          className="w-10"
        />
      </span>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.currentTarget.value))}
      />
    </label>
  );
}
