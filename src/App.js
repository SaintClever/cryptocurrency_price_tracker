import { Table} from 'reactstrap';
import DropdownComponent from './DropdownComponent';
import CryptoComponent from './CryptoComponent';


function App() {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <DropdownComponent />
        <br /><br />
        <Table dark responsive className="text-white">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Symbol</th>
              <th>Name</th>
              <th>price</th>
              <th>Price Change</th>
              <th>Volume</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            <CryptoComponent />
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;