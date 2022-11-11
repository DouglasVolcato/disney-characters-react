interface Props {
  pageNumber: number;
  setPageNumber: (num: number) => void;
}

export function PageButtons({ pageNumber, setPageNumber }: Props) {
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const buttonStyle = {
    fontSize: "30px",
    backgroundColor: "yellow",
    padding: "5px",
    borderRadius: "50%",
    color: "blue",
    border: "solid 5px blue",
    cursor: "pointer",
    fontWeight: "bolder",
  };

  function changePage(num: number) {
    if (num === -1 && pageNumber !== 1) {
      setPageNumber(pageNumber - 1);
    }
    if (num === 1) {
      setPageNumber(pageNumber + 1);
    }
  }

  return (
    <div style={divStyle}>
      <button onClick={() => changePage(-1)} style={buttonStyle}>
        {"<="}
      </button>
      <button onClick={() => changePage(1)} style={buttonStyle}>
        {"=>"}
      </button>
    </div>
  );
}
