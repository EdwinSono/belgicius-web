
interface ButtonProps {
  label?: string;
  handleClick?: () => void;
}

export default function Button({ label, handleClick }: ButtonProps) {

  // const handleClick = () => {
  //   console.log('Button.tsx')
  //   alert(`Button ${label}`)
  // }
  return (
    <>
      <button onClick={handleClick}> Nombre {label}</button>
    </>
  )
}
