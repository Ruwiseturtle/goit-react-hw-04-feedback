import './Section.css';

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Section;