
interface ButtonProps {
  label?: string;
  handleClick?: () => void;
}

export default function Button({ label, handleClick }: ButtonProps) {
  return (
    <>
      <button onClick={handleClick}> Nombre {label}</button>
    </>
  )
}
