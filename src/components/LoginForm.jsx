import './styles/Forms.css';
const LoginForm =()=>{
    return(
        <>
        <div className="Box">
        <h2>LOGIN</h2>
        
        <form action="" method="POST">
        
        <input type="text" name="UserName" id="User" />
        <input type="password" name="Password" id="Password" />
        <input type="submit" name="Submit" id="Submit" />      
        </form>
        </div>
        </>
    )
};

export default LoginForm;