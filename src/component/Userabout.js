import React from "react";
import { Link, useParams } from "react-router-dom";

  const Userabout =({UserToUserAbout})=>{
    let {id}=useParams();
    const filter = UserToUserAbout.filter(val=>val.id.value===id);
  console.log(filter)
  
  return (
  <div> 
    
      <h2><Link  className="Links" to="/Users">Back</Link></h2>
   Do You like this person? then head to their <Link className="Links" to="/Users/usercontact"> contact page </Link>
</div>);
};
export default Userabout;
