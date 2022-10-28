import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useErrorHandler } from "react-error-boundary";
import Userabout from "./Userabout";
const Users = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const eachPage = 4;
  const [usersId, setUsersId] = useState([]);
  const Errrorhandler = useErrorHandler();

  useEffect(() => {
    const fetchData = async (props) => {
      try {
        const apiResponse = await fetch("https://randomuser.me/api/?results=20");
        const data = await apiResponse.json();
        setUsers(data.results);
        setLoading(false);
        
      
        setUsersId(data.results.id);
        
        const UserToUserAbout=()=>{
        setUsersId(data.results.id)
      }  
      } catch (err) {
        Errrorhandler(err);  
      }
      
    };
    
    fetchData();
  }, []);
  if (loading) {
    return <h2>Pls wait Loading....</h2>;
  }
  
  return (
    <div className="Users">
      <Userabout UserToUserAbout={users}/>
      <div>Scroll through the Beautiful faces</div>

      <div>
      
        {users.slice((page - 1) * eachPage, page * eachPage)
          .map((user, idx) => {
            return (
              <div className="user_inf" key={idx}>
                <h5>
                  {user.name.first},{user.name.last}
                </h5>
                <div>
                  <img src={user.picture.medium} alt="user"></img>
                  <h6>{user.phone}</h6>
                  <div>
                    
                  <Link className="Linkks" to={`/Users/${user.id.value}`}> See profile </Link>
                </div>
                </div>
              </div>
            );
          })}
      </div>
      <div><Outlet/></div>
      <footer>
        <button className="navv"  disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
         {"<<"}Prev
        </button>
        <button className="navv" onClick={() => setPage({page} )}>1</button>
        <button className="navv" onClick={() => setPage({page} )}>2</button>
        <button className="navv" onClick={() => setPage({page} )}>3</button>
        <button className="navv" onClick={() => setPage({page})}>4</button>
        <button className="navv" onClick={() => setPage({page}) }>5</button>
        <button className="navv" 
          disabled={page >= users.length / eachPage}
          onClick={() => setPage((p) => p + 1)}
        >
          Next{">>"}
        </button>
      </footer>
    </div>
  );
};
export default Users;
