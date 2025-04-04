import { Outlet } from "react-router";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";


function App() {

  return (
    <>
     <div class="relative flex size-full min-h-screen flex-col bg-[#fbf8f8] group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}
        >
            <div class="layout-container flex h-full grow flex-col">
              
               <Nav />
            <Outlet/>
            <Footer />
            </div>
    </div>
    

    </>
  )
}

export default App;