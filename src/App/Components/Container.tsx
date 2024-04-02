type Props = {
  children: React.ReactNode;
  className?: string;
};


export const Container = ({ children, className }: Props): JSX.Element => {
  return (
    <div className={`container flex items-center mx-auto mb-6 ${className}`}>
      { children }
    </div>
  );
}