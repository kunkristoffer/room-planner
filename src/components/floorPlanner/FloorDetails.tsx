interface FloorDetailsProps {
  floor: number;
  room: string;
}
export function FloorDetails({ floor, room }: FloorDetailsProps) {
  return (
    <div>
      <p>Current floor: {floor}</p>
      <p>Current room: {room}</p>
    </div>
  );
}
