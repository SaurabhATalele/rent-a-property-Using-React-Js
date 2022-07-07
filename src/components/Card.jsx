import './styles/Cards.css'







const Card = (props) => {
   

    return (
        <>

        
         <div className="card">
        
            <div className="CardImg">
                <img src={props.Image} alt="Img" />
            </div>

            <div className="Price">$<b>{props.price}</b>/Month</div>
            <div className="PropDetails">
                <span id='Name'><b>{props.Name}</b></span>
                <span id='Area'>{props.city}</span>
            </div>
            <div className="Highlights">
            <div id="item" name="Beds"><span class="material-symbols-outlined">
            bed
                </span>{props.furnish}</div>
                <div id="item" name="Bathrooms"><span class="material-symbols-outlined">
                    shower
                    </span>2 Bathrooms</div>
                    
                <div id="item" name="Area"><span class="material-symbols-outlined">
                    crop_square
                </span>{props.size}</div>
                
                </div>
                <div className="Contact">
                <div id="item" name="Owner"><span class="material-symbols-outlined">
                    call
                </span>Contact Owner</div>
                <div id="item" name="View">
                <button>View</button>
                </div>
            </div>
        </div>
           
      
    

        </>
       
    )
};


export default Card;