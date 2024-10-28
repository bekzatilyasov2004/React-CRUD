import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import ShowPage from "./pages/ShowPage";
import Header from "./components/Header";
import EditPage from "./pages/EditPage";
import SingleShowPage from "./pages/SingleShowPage";

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="create" element={<CreatePage />} />
      <Route path="show" element={<ShowPage />} />
      <Route path='/edit/:id' element={<EditPage />} />
      <Route path='/show/:id' element={<SingleShowPage />} />
    </Routes>
    </>
  )
}