import { useState } from "react";
import Button from "../../components/forms/Button";
import TextInput from "../../components/forms/TextInput";
import LoginLayout from "../../components/layouts/LoginLayout";

export default function Login () {

    // const [loginData, setloginData] = useState({
    //     nohp: '',
    //     password: ''
    // })

    // const handleChangeForm = (e) => {
    //     console.log({e})
    //     const {id, value} = e.target;
    //     const newLoginData = {...loginData};
    //     newLoginData[id] = value;
    //     setloginData(newLoginData);
    // }

    return <LoginLayout>
        <div className="flex flex-row flex-wrap bg-white rounded-lg" style={{minHeight: '50vh'}}>
            <div className="flex flex-col justify-center items-start p-6">
                <h1 className="text-6xl">SAMPINGAN</h1>
                <p className="my-6">Aplikasi untuk para <b>Pencari</b> pekerja sampingan dan yang <b>Mencari</b> jasa kerja harian.</p>
            </div>
            <form className="flex flex-col justify-center items-center bg-gray-700 rounded-tr-lg rounded-br-lg py-6 px-16 text-white">
                <h3 className="py-6 text-2xl ">LOGIN</h3>
                <TextInput type="text" label="No. Telepon" name="nohp" id="nohp"/>
                <TextInput type="password" label="Password" name="password" id="password"/>
                <Button type="submit" className="my-6">Login</Button>
            </form>
        </div>
    </LoginLayout>
}