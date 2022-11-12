import FamilyMember from "@components/FamilyMember";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Simpsons</h1>
      <FamilyMember firstName="Homer" />
      <FamilyMember firstName="Marge" />
      <FamilyMember firstName="Bart" />
      <FamilyMember firstName="Lisa" />
      <FamilyMember firstName="Maggie" hasFood />
    </div>
  );
}

export default App;
