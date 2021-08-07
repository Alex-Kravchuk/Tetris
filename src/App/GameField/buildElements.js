import BuildRow from "./BuildRow";

export default function buildElements(row, location) {
  let rowList = [];
  for (let i = 0; i < 20; i++) {
    
    if (i === row) {
      location.row1.length < 1
        ? rowList.push(<BuildRow key={i} />)
        : rowList.push(<BuildRow coords={location.row1} key={i} />);
    } else if (i === row + 1) {
      location.row2.length < 1
        ? rowList.push(<BuildRow key={i} />)
        : rowList.push(<BuildRow coords={location.row2} key={i} />);
    } else if (i === row + 2) {
      location.row3.length < 1
        ? rowList.push(<BuildRow key={i} />)
        : rowList.push(<BuildRow coords={location.row3} key={i} />);
    } else if (i === row + 3) {
      location.row4.length < 1
        ? rowList.push(<BuildRow key={i} />)
        : rowList.push(<BuildRow coords={location.row4} key={i} />);
    } else {
      rowList.push(<BuildRow key={i} />);
    }
  }

  return rowList;
}

