import { useState } from "react";
import Router, { useRouter } from 'next/router';
import Button from "../../components/forms/Button";
import TextInput from "../../components/forms/TextInput";
import LoginLayout from "../../components/layouts/LoginLayout";
import Link from 'next/link';

export default function Login () {

    const router = useRouter();

    const [loginData, setloginData] = useState({
        nohp: '',
        password: ''
    });
    
    const [errorMsg, seterrorMsg] = useState(null);

    const handleChangeForm =  (e) => {
        e.preventDefault();
        const {id, value} = e.target;

        setloginData({
            ...loginData,
            [id]: value,
        });
    }

    const checkError = () => {
        const {nohp, password} = {...loginData};
        let errMsg = null;
        if(nohp.length < 11 || nohp.length > 13){
            errMsg = 'No. Telepon tidak sesuai!';
        }else if(password.length < 8) {
            errMsg = 'Password Tidak sesuai!';
        }

        seterrorMsg(errMsg);
        return errMsg;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!checkError()) {
            router.replace('/');
        }
    }

    return <LoginLayout>
        <div className="flex flex-row flex-wrap bg-white rounded-lg" style={{minHeight: '50vh', minWidth: '50vw'}}>
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:items-start items-center p-6">
                <h1 className="text-3xl lg:text-6xl">SAMPINGAN</h1>
                <p className="my-6 text-xs lg:text-lg">Aplikasi untuk para <b>Pencari</b> pekerja sampingan dan yang <b>Mencari</b> jasa kerja harian.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full lg:w-1/2 flex-1 flex flex-col justify-center items-center bg-gray-700 lg:rounded-bl-none lg:rounded-tr-lg lg:rounded-br-lg py-6 px-6 lg:px-16 text-white">
                <h3 className="py-6 text-2xl ">LOGIN</h3>
                <TextInput type="text" label="No. Telepon" name="nohp" id="nohp" className="text-dark" onChange={handleChangeForm} value={loginData.nohp} autoComplete="off"/>
                <TextInput type="password" label="Password" name="password" id="password" className="text-dark" onChange={handleChangeForm} value={loginData.password} autoComplete="off"/>
                {errorMsg && <p className="px-3 py-3 text-sm font-bold text-red-500 ">{errorMsg}</p>}
                <Button type="submit" className="my-6">Login</Button>
                <Link href='register' className="">Belum Punya Akun? Klik disini.</Link>
            </form>
        </div>
    </LoginLayout>
}