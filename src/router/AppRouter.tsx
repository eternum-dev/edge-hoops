import { Route, Routes } from "react-router"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path={"/"} element={<h1>Hola Mundo desdes react-router</h1>} />
    </Routes>
  )
}