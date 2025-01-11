import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Home/HomePage';
import AddRecipePage from './AddRecipe/AddRecipePage';
import CategoryPage from './Category/CategoryPage';
import AboutPage from './About/AboutPage';
import ContactUsPage from './ContactUs/ContactUsPage';
import BreakfastPage from './Breakfast/BreakfastPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-recipe" element={<AddRecipePage />} />
      <Route path='/category' element={<CategoryPage />} />
      <Route path='/category/breakfast' element={<BreakfastPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact-us' element={<ContactUsPage />} />
    </Routes>
  );
}

export default App;
