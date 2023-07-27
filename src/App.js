import "./styles.css";
// let arr = [];
// const apiKey = ";
// const apiUrl =
//   "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=demo";

// fetch(apiUrl, {
//   headers: {
//     Authorization: `Bearer ${apiKey}`
//   }
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // Handle the API response here
//     //console.log(data);

//   })
//   .catch((error) => {
//     // Handle errors here
//     console.error("Error:", error);
//   });

const Items = [
  { Name: "ETH", Statue: "Sell/High", Price: "$2.3", ch: "+2.3%", Vol: 1 },
  { Name: "DASH", Statue: "Buy/Down", Price: "$1.3", ch: "+1.3%", Vol: 2 },
  { Name: "ZECK", Statue: "Sell/High", Price: "$2.3", ch: "-2.4%", Vol: 3 },
  { Name: "WAVES", Statue: "Buy/Down", Price: "$9.3", ch: "-6.6%", Vol: 3 },
  { Name: "LSH", Statue: "Buy/Down", Price: "$1.3", ch: "-1.4%", Vol: 6 }
];
//console.log(arr);
export default function App() {
  return (
    <div className="App">
      <Header />
      <Table items={Items} />
    </div>
  );
}
function Header() {
  return <h1>FIXED TABLE HEADER</h1>;
}
function Table({ items }) {
  return (
    <div>
      <TableSet item={items} />
    </div>
  );
}

function TableSet({ item }) {
  //  console.log(item);
  return (
    <table>
      <TableHead />
      {item.map((i) => (
        <TableItem item={i} />
      ))}
    </table>
  );
}
function TableItem({ item }) {
  //console.log(item);
  return (
    <tr>
      <td>{item.Name}</td>
      <td>{item.Statue}</td>
      <td>{item.Price}</td>
      <td>{item.ch}</td>
      <td>{item.Vol}</td>
    </tr>
  );
}
function TableHead() {
  return (
    <tr>
      <th>Name</th>
      <th>State</th>
      <th>Price</th>
      <th>CH%</th>
      <th>Vol</th>
    </tr>
  );
}
