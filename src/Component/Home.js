import React from 'react';
import Book from './Book';
import ExploreRecipe from './ExploreRecipe';
import Footer from './Footer';
import Header from './Header';
import Herosection from './Herosection';
import RecentRecipe from './RecentRecipe';
import RoundsUpRecipe from './RoundsUpRecipe';
import SectionHeader from './SectionHeader';
import ShopSection from './ShopSection';
import Subscription from './Subscription';
import WeeklyRecipe from './WeeklyRecipe';

export default function Home() {
  return (
    <>
      <Header />
      <Subscription />
      <Herosection />
      <WeeklyRecipe />
      <RecentRecipe />
      <SectionHeader headingText="30-Minute Meals" />
      <RoundsUpRecipe />
      <ExploreRecipe />
      <ShopSection />
      <Book />
      <Footer />
    </>
  );
}
