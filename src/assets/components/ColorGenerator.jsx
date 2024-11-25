const ColorGenerator = () => {
  const hexaColor = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  };
  const varColor = hexaColor();
  const divStyle = {
    backgroundColor: varColor,
  };

  return (
    <>
      <div style={divStyle}>
        <p className="px-60 py-5 font-bold">{varColor}</p>
      </div>
    </>
  );
};

export default ColorGenerator;
