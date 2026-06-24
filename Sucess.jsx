import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Sucess() {
  const location = useLocation();
  const {hint_msg}=location.state;
  const{secret_msg}=location.state;
  return (
    <div>
      <style>
        {`
          body {
            background-color: #f0f8ff;
            font-family: Arial, sans-serif;
          }
          h1{
            color: #4b0082;
            text-align: center;
            margin-top:200px;
          
          }
            #link,h2,p{
            color: #4b0082;
            text-align: center;
            padding:10px;
          
          }
            
        `}
      </style>
      <h1>Your Message Has Been Secured</h1>
      <h2>You Can Copy And Send Below Content To Your Friend</h2>
      <p>Secret Message: {secret_msg}</p>
      <p>Hint For Password: {hint_msg}</p>
      <div id="link">
        <Link to="/"><button>Go Back</button></Link></div>
    </div>
  )
}

export default Sucess
