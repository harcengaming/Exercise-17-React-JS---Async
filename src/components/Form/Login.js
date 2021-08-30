import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './style.css';

function Login() {
    const history = useHistory()
    
    const [user] = useState({
        email: 'goblok123@gmail.com',
        password: '999999'
    })

    const [dataMasuk, setMasuk] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        // setEmail(event.target.value)
        setMasuk({
            ...dataMasuk,
            [event.target.name]: event.target.value
        })
    }

    function valid(){
        return (dataMasuk.password.length > 0 && dataMasuk.email.length > 0)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(dataMasuk);

        if(dataMasuk.email === user.email){
            if(dataMasuk.password === user.password){
                history.push("/main")
            }
        } else {
            alert("email dan password anda salah")
        } 
    }

    return (
        <div className="kotak-masuk">
            <h1>Selamat Datang di Pokemon</h1>
            <form>
                <h1>Masuk Akun Anda</h1>
                <label htmlFor="">Alamat Email</label><br />
                <input 
                    type="email" 
                    name="email" 
                    id="" 
                    value={dataMasuk.email}
                    onChange={handleChange}
                /><br />

                <label htmlFor="">Kata Sandi</label><br />
                <input 
                    type="password" 
                    name="password" 
                    id="" 
                    value={dataMasuk.password}
                    onChange={handleChange}
                /><br />

                <button 
                    type="submit" 
                    onClick={handleSubmit}
                    className="kotak-btn" 
                    disabled={!valid()} 
                >Masuk</button>

                <p className="akun-sudah">
                    Belum punya akun anda?
                    <Link to="/signup" className="akun-sudah">Daftar di sini</Link>
                </p>
            </form>
        </div>
    )
}

export default Login;