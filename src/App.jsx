import Header from "./components/pages/Header"
import MainPage from "./components/pages/MainPage"
export default function App() {
  return (
    <>
      <Header 
        images={
          {
          image:"../images/chef.webp",
          alt:"Logo"
          }
        }
      />
      <MainPage />
    </>
  )
}

