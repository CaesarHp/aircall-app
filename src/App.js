import Header from "./ui/Header";

const DOMMY_DATA = {
  id: 7834,
  created_at: "2018-04-19T09:38:41.000Z",
  direction: "outbound",
  from: "Pierre-Baptiste Béchu",
  to: "06 46 62 12 33",
  via: "NYC Office",
  duration: "120",
  is_archived: false,
  call_type: "missed",
};

function App() {
  return (
    <>
      <div className="container">
        <Header className="container" />
        <div className="container-view">Hello</div>
      </div>
    </>
  );
}

export default App;
