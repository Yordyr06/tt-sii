type Props = {
  name: string;
  className?: string;
  action?: () => void;
}

export const Button = ({ name, className }: Props): JSX.Element => {
  return (
    <button
      className={`w-auto rounded-full px-4 py-1 text-xs font-medium inline-block align-top ${className}`}
      type="submit"
    >
      { name }
    </button>
  );
}