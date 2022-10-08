import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Pricing from './component/Pricing/Pricing';
import AssaignmentMarks from './component/AssaignmentMarks/AssaignmentMarks';
import MobilePrice from './component/MobilePrice/MobilePrice';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-5xl font-bold '>Hi Iam Mahbub Hasan</h1>
      <p>This is paragrph for tailwind</p>
      <Pricing></Pricing>
      <AssaignmentMarks></AssaignmentMarks>
      <MobilePrice></MobilePrice>
      
    </div>
  );
}

export default App;
