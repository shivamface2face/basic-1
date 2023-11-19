import "./App.css";
import Crad from "./components/Crad";
import { Iteam } from "./components/Iteam";
import { IteamDate } from "./components/IteamDate";


function App() {

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10  Street',
    },
    {
      key: '3',
      name: 'kite',
      age: 52,
      address: 'Street',
    },

  ];

  

  return (
    <main className="flex flex-col justify-center min-h-screen gap-4">
      <Crad>
      <Iteam key={dataSource[0].key}  />
      <IteamDate name={dataSource[0].name} age={dataSource[0].age} address={dataSource[0].address} />
      <Iteam key={dataSource[1].key}  />
      <IteamDate name={dataSource[1].name} age={dataSource[1].age} address={dataSource[1].address} />
      <Iteam key={dataSource[2].key}  />
      <IteamDate name={dataSource[2].name} age={dataSource[2].age} address={dataSource[2].address} />
      <p>hellow</p>
       
     </Crad>
    </main>
  );
}

export default App;
