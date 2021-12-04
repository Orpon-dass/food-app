import Header from './Component/Header';
import Herosection from './Component/Herosection';
import SectionHeader from './Component/SectionHeader';
import Subscription from './Component/Subscription';
import WeeklyRecipe from './Component/WeeklyRecipe';

function App() {
  return (
    <>
      <Header />
      <Subscription />
      <SectionHeader headingText="HOLIDAY FAVORITES" />
      <Herosection />
      <WeeklyRecipe />
    </>
  );
}

export default App;
