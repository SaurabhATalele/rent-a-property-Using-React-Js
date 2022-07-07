import Card from "./Card";
import { useState } from "react";
import { Link } from "react-router-dom";

import Data from "./Data";



var cityData = [];

function dropNav(selector) {

    // var city = document.getElementById("Location");
  
    document.getElementById(selector).classList.toggle("show");
    var a = document.getElementById("ico").innerText;
    // console.log(a==='expand_more');
    if(a === 'expand_more'){
        document.getElementById("ico").innerText = 'expand_less';
    }
    else{
        document.getElementById("ico").innerText = 'expand_more';
    }
}

function filter() {
    var input, filter, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    var div = document.getElementById("Selector");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        var txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }


}



const Home = () => {
  const [Items, FilterCity] = useState(Data);
  function filterItems (name){
    console.log(cityData);
    const n = name;
      const updated = Data.filter((cur)=>{
      
          return cur.city === n;

        
          
      })
      cityData = updated;
      console.log(cityData);
      
      FilterCity(updated);
  }

  function setSize(name){
    var a = document.getElementById("size");
    a.innerText = name;
    filterSize(name);
    document.getElementById("typeSelector").classList.toggle("show");
    document.getElementById("ico").innerText = "expand_more";
  }

  function filterSize (name){

  
    const updated = cityData.filter((cur)=>{
        
        return cur.size === name;
   
    })
  
    FilterCity(updated);
   
}



  function setCity(name) {
    
    var a = document.getElementById("Location");
    var b = document.getElementById("size");
    b.innerText='Size';
    a.innerText = name;
    filterItems(name);
    document.getElementById("Selector").classList.toggle("show");
    document.getElementById("ico").innerText = "expand_more";
  }

 






  
  
 
    return (
      <>
      <div className="dropdown">
          
                <button onClick={()=>dropNav("Selector")} className="dropbtn"  ><p id="Location">Location</p>  <span className="material-symbols-outlined" id="ico">expand_more</span></button>
                <div id="Selector" className="dropdown-content">
                    <input type="text" placeholder="Search.." id="myInput" onKeyUp={filter} />
                    <Link id="city" to="/" name="City" onClick={() => setCity('Pune')}>Pune</Link>
                    <Link id="city" to="/" onClick={() => setCity('Mumbai')}>Mumbai</Link>
                    <Link id="city" to="/" onClick={() => setCity('Hyderabad')}>Hyderabad</Link>
                    <Link id="city" to="/" onClick={() => setCity('Bangalore')}>Bangalore</Link>


                </div>
            </div>
      <div className="dropdown">
          
                <button onClick={()=>dropNav("typeSelector")} className="dropbtn"  ><p id="size">Size</p>  <span className="material-symbols-outlined" id="ico">expand_more</span></button>
                <div id="typeSelector" className="dropdown-content">
                    
                    <Link id="city" to="/" name="City" onClick={() => setSize('1 bhk')}>1 bhk</Link>
                    <Link id="city" to="/" onClick={() => setSize('2 bhk')}>2 bhk</Link>
                    <Link id="city" to="/" onClick={() => setSize('3 bhk')}>3 bhk</Link>
                    


                </div>
            </div>


      <div className="Cards">
      {
        Items.map((elem)=>{
          const {Name,size,price,city,Furnish,Image} =elem;
          return( <Card Image={Image} Name={Name} size={size} price={price} city={city} furnish={Furnish}/>  )
          
        })
        
      }
      
      
      </div>
      </>
      
      
      );
  };
  
  export default Home;