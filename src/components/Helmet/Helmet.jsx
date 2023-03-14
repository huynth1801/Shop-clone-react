const Helmet = (props) => {
  document.title = "Helendo - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
