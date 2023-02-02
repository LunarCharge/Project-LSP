import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import { usePage, Head } from "@inertiajs/inertia-react";
import headerImage from "../../src/images/header.jpg";
import "../../../resources/css/style.css";

const Login = () => {
    const { error } =usePage().props.errors;
    const [ idAdmin, setIdAdmin ] =useState();
    const [nis, setNis] = useState();
    const [ nip, setNip ] =useState();
    const [ password, setPassword ] =useState();

    const [ formAdminVisible, setFormAdminVisible ] =useState(false);
    const [ formSiswaVisible, setFormSiswaVisible ] =useState(false);
    const [ formGuruVisible, setFormGuruVisible ] =useState(false);

    const handleLoginAdmin = () => {
        Inertia.post('/login/admin',{
            idAdmin,
            password,
        });
    };

    const handleLoginSiswa = () => {
        Inertia.post('/login/siswa',{
            nis,
            password,
        });
    };

    const handleLoginGuru = async () => {
        try{
        Inertia.post('/login/guru',{
            nip,
            password,
        })

        } catch (error) {
            console.warn(e.message);
        }
    };
    

    return (
        <>
        <Head title="Login" />

        <div className="header">
            <img src={headerImage} />
        </div>
        <div className="menu">
            <b><a href="#" className="active">Home</a></b>
        </div>
        <div className="kiri-atas">
            <fieldset>
                <legend></legend>
                <center>
                    <button className="button-primary" onClick={() => {
                        setFormAdminVisible(!formAdminVisible);
                        setFormSiswaVisible(false);
                        setFormGuruVisible(false);
                    }}
                    >
                        Admin
                    </button>
                    <button className="button-primary" onClick={() => {
                        setFormAdminVisible(false);
                        setFormSiswaVisible(!formSiswaVisible);
                        setFormGuruVisible(false);
                    }}
                    >
                        Siswa
                    </button>
                    <button className="button-primary" onClick={() => {
                        setFormAdminVisible(false);
                        setFormSiswaVisible(false);
                        setFormGuruVisible(!formGuruVisible);
                    }}
                    >
                        Guru
                    </button>
                    <hr />
                    <b>Login Sesuai Identitas Anda</b>
                    <hr />
                </center>
                
                {/* (Form Login Admin) */}
                <div
                    style={{ display: formAdminVisible ? "block" : "none"}}
                >

                    <center>
                        <b>Login Anda</b>
                        <p>{error}</p>
                    </center>

                    <table>
                        <tr>
                            <td width="25%">Kode Admin</td>
                            <td width="25%">
                                            <input
                                            type="text"
                                            onChange={(e)=>
                                                setIdAdmin(e.target.value)
                                            }/>
                            </td>
                        </tr>
                        <tr>
                        <td width="25%">Password</td>
                        <td width="25%">
                                        <input
                                        type="password"
                                        onChange={(e)=>
                                            setPassword(e.target.value)
                                        }/>
                                </td>
                        </tr>
                    <tr>
                        <td colSpan="2">
                            <center>
                                <button className="button-primary"
                                        type="button"
                                        onClick={() => handleLoginAdmin()}
                                >
                                    Login
                                </button>
                            </center>
                        </td>
                    </tr>
                </table>
            </div>
            {/* (Form Login Siswa) */}
            <div
                    style={{ display: formSiswaVisible ? "block" : "none"}}
                >

                    <center>
                        <b>Login Siswa</b>
                        <p>{error}</p>
                    </center>

                    <table>
                        <tr>
                            <td width="25%">NIS</td>
                            <td width="25%">
                                            <input
                                            type="text"
                                            onChange={(e)=>
                                                setNis(e.target.value)
                                            }/>
                            </td>
                        </tr>
                        <tr>
                        <td width="25%">Password</td>
                        <td width="25%">
                                        <input
                                        type="password"
                                        onChange={(e)=>
                                            setPassword(e.target.value)
                                        }/>
                                </td>
                        </tr>
                    <tr>
                        <td colSpan="2">
                            <center>
                                <button className="button-primary"
                                        type="button"
                                        onClick={() => handleLoginSiswa()}
                                >
                                    Login
                                </button>
                            </center>
                        </td>
                    </tr>
                </table>
            </div>
            {/* (Form Login Guru) */}
            <div
                    style={{ display: formGuruVisible ? "block" : "none"}}
                >

                    <center>
                        <b>Login Guru</b>
                        <p>{error}</p>
                    </center>

                    <table>
                        <tr>
                            <td width="25%">NIP</td>
                            <td width="25%">
                                            <input
                                            type="text"
                                            onChange={(e)=>
                                                setNip(e.target.value)
                                            }/>
                            </td>
                        </tr>
                        <tr>
                        <td width="25%">Password</td>
                        <td width="25%">
                                        <input
                                        type="password"
                                        onChange={(e)=>
                                            setPassword(e.target.value)
                                        }/>
                                </td>
                        </tr>
                    <tr>
                        <td colSpan="2">
                            <center>
                                <button className="button-primary"
                                        type="button"
                                        onClick={() => handleLoginGuru()}
                                >
                                    Login
                                </button>
                            </center>
                        </td>
                    </tr>
                </table>
            </div>
            </fieldset>
        </div>
        <div className="kanan">
                <center>
                    <h1>
                        Selamat Datang
                        <br />
                        Di Web Penilaian SMKN 1 Cibinong
                    </h1>
                </center>
            </div>

            <div className="kiri-bawah">
                <center>
                    <p className="mar">Gallery</p>
                    <div className="gallery">
                        <img src="/gambar/g2.jpg"/>
                        <div className="deskripsi">SMK Bisa</div>
                    </div>
                </center>
            </div>
        </>
    )
    };

    export default Login;

