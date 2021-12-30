import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomForm } from './pages/CustomForm';
import { Header } from './components/Header';
import './App.css';


//Main App function that starts the tree wrapped in router for more futures and pages..
export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<CustomForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}