type SubheadingProps = {
  title: string;
};
const Subheading = ({ title }: SubheadingProps) => {
  return <h3>{title}</h3>;
};

export default Subheading;
