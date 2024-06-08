interface Button {
  label: string;
}
const Button: React.FC<Button> = ({ label }) => {
  return (
    <>
      <button className="bg-transparent border-2 border-[#F7631B] px-5 py-2 rounded-lg text-[#F7631B]">
        {label}
      </button>
    </>
  );
};
export default Button;
