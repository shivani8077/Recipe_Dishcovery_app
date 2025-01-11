import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Home/HomePage';
import AddRecipePage from './AddRecipe/AddRecipePage';
import CategoryPage from './Category/CategoryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-recipe" element={<AddRecipePage />} />
      <Route path='/category' element={<CategoryPage />} />
    </Routes>
    );
}

export default App;
