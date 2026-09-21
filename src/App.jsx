//it is imp to export an component

import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card";
import Button from "./Button";

function App() {
  
  return(
    //since return only one thing we used <>
    <>
    <Header></Header>
    <Food></Food>
    <Card></Card>
    <Button></Button>
    <Footer></Footer>
    
    
    </>
  );
}

export default App
