const Highlightblurb = ({ name, x, y }) => {
  return (
    <div className="z-10 absolute bg-green-400 p-2 rounded-md" style={{top: y, left: x,}} >
      <h5 className="font-body">{name}</h5>
    </div>
  );
};

export default Highlightblurb

