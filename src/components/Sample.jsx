function Sample(props) {
  console.log(props);

  return <div className="dark">
    <h2>Heading 2</h2>
    {props.children}
  </div>;
}

Sample.defaultProps = {
    name: "Guest"
};

export default Sample;
