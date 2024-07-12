import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Suspense, useContext } from "react";

function ProfilePage() {
  const data = useLoaderData();

  const navigate = useNavigate();
  const {updateUser, currentUser}  = useContext(AuthContext);

  
  const handleLogout = async () =>{
    try{
      await apiRequest.post("/auth/logout");
      // localStorage.removeItem("user");

      updateUser(null);
      navigate("/");
    }
    catch(err){
      console.log(err);
    }


  }
  return (
    
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
            <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={currentUser.avatar || '/noAvatar.png'}
                alt=""
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My Posts</h1>
            <Link to='/add'>
            <button>Create New Post</button>
            </Link>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                <List posts = {postResponse.data.userPosts}/>
               
              }
            </Await>
          </Suspense>
          {/* <div>
            Advertisment
          </div> */}
          {/* <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List /> */}
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <div className="heading"><h3> URBAN NEST's Choice</h3></div> 
          <Link to={`/668d999085295309ce0280ba`}>
          <div className="sub-heading">
          <div className="verified-estate">
              <h4> Bengaluru Flats </h4>
              <div className="verified">Verified</div>
            </div>
            <div className="sub-news">
              <a href=""> Bengaluru </a>
            </div>
          </div>  
          </Link>
          <Link to={`/668d969c85295309ce0280b7`}>
          <div className="sub-heading">
          <div className="verified-estate">
              <h4> Mohali Elite Appartments </h4>
              <div className="verified">Verified</div>
            </div>
            <div className="sub-news">
              <a href=""> Chandigarh </a>
            </div>
          </div>
          </Link>
          <Link to={`/668d6b3f8576382ca4daac89`}>
          <div className="sub-heading">
          <div className="verified-estate">
              <h4> Caribian Island Resort </h4>
              <div className="verified">Verified</div>
            </div>
            <div className="sub-news">
              <a href="">Goa</a>
            </div>
          </div>
          </Link>
          <Link to={`/668d9f2b85295309ce0280be`}>
          <div className="sub-heading">
          <div className="verified-estate">
              <h4> Hotel For Dogs </h4>
              <div className="verified">Verified</div>
            </div>
            <div className="sub-news">
              <a href=""> Jalandhar</a>
            </div>
          </div>
          </Link>
          <Link to={`/668da82a85295309ce0280c1`}>
          <div className="sub-heading">
            <div className="verified-estate">
              <h4> Lamine Resort </h4>
              <div className="verified">Verified</div>
            </div>
            <div className="sub-news">
              <a href=""> Kolkata </a>
            </div>
          </div>
          </Link>
           {/* <img src="https://source.unsplash.com/1600x900/?nature,landscape" alt="Rand" /> */}
          {/* <Chat/> */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
