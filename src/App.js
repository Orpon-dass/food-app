import Book from './Component/Book';
import ExploreRecipe from './Component/ExploreRecipe';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Herosection from './Component/Herosection';
import RecentRecipe from './Component/RecentRecipe';
import RoundsUpRecipe from './Component/RoundsUpRecipe';
import SectionHeader from './Component/SectionHeader';
import ShopSection from './Component/ShopSection';
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
      <RecentRecipe />
      <SectionHeader headingText="30-Minute Meals" />
      <RoundsUpRecipe />
      <SectionHeader headingText="Explore Recipe" />
      <ExploreRecipe />
      <ShopSection />
      <Book />
      <Footer />
    </>
  );
}

export default App;
