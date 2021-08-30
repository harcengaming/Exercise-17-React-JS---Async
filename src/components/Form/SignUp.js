import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './style.css';

function SignUp() {
    const history = useHistory()
    
    // const [user] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     confirmedPassword: ''
    // });

    const [dataDaftar, setDaftar] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmedPassword: ''
    });

    const handleChange = (event) => {
        setDaftar({
            ...dataDaftar,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(dataDaftar);

        // if(dataDaftar.firstName === user.firstName){
        //     if(dataDaftar.lastName === user.lastName){
        //         if(dataDaftar.email === user.email){
        //             if(dataDaftar.password === user.password){
        //                 if(dataDaftar.confirmedPassword === user.confirmedPassword){
        //         history.push("/masuk")
        //     }
        // } else {
            alert(`\n 
            Nama Depan: ${dataDaftar.firstName} \n
            Nama Belakang: ${dataDaftar.lastName} \n  
            Email: ${dataDaftar.email} \n 
            Kata Sandi: ${dataDaftar.password} \n 
            Konfirmasi Kata Sandi: ${dataDaftar.confirmedPassword} \n 
            Apakah data Anda sudah benar?`)
            history.push("/login")
        
    }

    function valid(){
        return (dataDaftar.firstName.length > 0 && dataDaftar.lastName.length > 0
            && dataDaftar.email.length > 0 && dataDaftar.password.length > 0 )
    }

    return (
        <div className="kotak-masuk">
            <h1>Selamat Datang di Pokemon</h1>
            <form>
                <h1>Daftar Akun Baru</h1>
                <label htmlFor="">Nama Depan</label><br />
                <input 
                    type="text" 
                    name="firstName" 
                    id="" 
                    value={dataDaftar.firstName}
                    onChange={handleChange}
                /><br />

                <label htmlFor="">Nama Belakang</label><br />
                <input 
                    type="text" 
                    name="lastName" 
                    id="" 
                    value={dataDaftar.lastName}
                    onChange={handleChange}
                /><br />

                <label htmlFor="">Email</label><br />
                <input 
                    type="email" 
                    name="email" 
                    id="" 
                    value={dataDaftar.email}
                    onChange={handleChange}
                /><br />

                <label htmlFor="">Kata Sandi</label><br />
                <input 
                    type="password" 
                    name="password" 
                    id="" 
                    value={dataDaftar.password}
                    onChange={handleChange}
                /><br />

                <label htmlFor="">Konfirmasi Kata Sandi</label><br />
                <input 
                    type="password" 
                    name="confirmedPassword" 
                    id="" 
                    value={dataDaftar.confirmedPassword}
                    onChange={handleChange}
                /><br />

                <button 
                    type="submit" 
                    onClick={handleSubmit} 
                    disabled={!valid} 
                    className="kotak-btn" 
                >Daftar</button>

                <p className="akun-sudah">
                    Sudah punya akun anda?
                    <Link to="/login" className="akun-sudah">Masuk di sini</Link>
                </p>
            </form>
        </div>
    )
}

export default SignUp;