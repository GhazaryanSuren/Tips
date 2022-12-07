import Content from "./content/content";
import Footer from "./footer/footer";
import Header from "./header/header";
import Waiter from "./waiter/waiter";
import { useState} from "react";
const Index =()=>{
  const [tip,setTip]=useState();
  const [transaction,setTransaction]=useState()
  return (
   <div >
    <Header />
    <Waiter/>
    <Content tip={tip} setTip={setTip}  setTransaction={setTransaction} />
    <Footer tip={tip} transaction={transaction}/>
   </div>
  )
}
export default Index ;