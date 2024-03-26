import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {signUp,updateUserProfile}=useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        signUp(data.email,data.password)
        .then(result=>{
            const loggedInUser = result.user;
            console.log(loggedInUser)
            updateUserProfile(data.name,data.photoUrl)
            .then(()=>{ 
                console.log('user profile updated')
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "signUp successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
            })
            .catch(err=>console.log(err));
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Restaurant | SignUp</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="photoUrl" {...register("photoUrl")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register('email')} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register('password', {
                                required: "Password Requried", maxLength: 20, minLength: 6,
                                pattern:/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/
                            })} className="input input-bordered" />
                            {errors.password && <p className='text-red-800 mt-2'>{errors.password.message}</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-800 mt-2'>Password should be 6 Character</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-800 mt-2'>at least one uppercase letter, one lowercase letter, one number and one special character</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center mb-5'><Link to='/login'>Already have an account ? Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;