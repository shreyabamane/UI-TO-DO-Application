import axios from "axios"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom";


export function UserRegister(){

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            UserId: '',
            UserName: '',
            Password: '',
            Mobile: '',
            Email: ''
        },
        onSubmit: (user)=> {
            axios.post('http://127.0.0.1:7000/register-user', user);
            alert('Registered Successfully..');
            navigate('/login');
        }
    
    })

    return(
        <div>
            <form className="bg-light p-3" onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Id</dt>
                    <dd> <input type="text" name="UserId" onChange={formik.handleChange} /> </dd>
                    <dt>User Name</dt>
                    <dd> <input type="text" name="UserName" onChange={formik.handleChange} /> </dd>
                    <dt>Password</dt>
                    <dd> <input type="password" name="Password" onChange={formik.handleChange} /> </dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" name="Email" onChange={formik.handleChange} /></dd>
                </dl>
                <button className="btn btn-warning w-100">Register</button>
            </form>
        </div>
    )
}