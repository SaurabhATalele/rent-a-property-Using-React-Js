import { Link } from "react-router-dom";
import './styles/Navbar.css'

var city = 'Location';

function dropNav() {

    city = document.getElementById("Location");

    document.getElementById("Selector").classList.toggle("show");
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




function Nav() {
    return (
        <div className="Nav">

            <div className="Logo">
            <Link to="/" id="link"> <h3>100 Acres</h3></Link>
               
            </div>

            

            <div className="menu">
               

                <Link to="/login" id="link">Login</Link>

                <Link to="/signup" id="link">Signup</Link>

            </div>

        </div>
    )
};

function setCity(name) {
    var a = document.getElementById("Location");
    city = name;
    a.innerText = city;
    document.getElementById("Selector").classList.toggle("show");
    document.getElementById("ico").innerText = "expand_more";
}


export default Nav;




