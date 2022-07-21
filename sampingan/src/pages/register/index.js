import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';
import TextAlert from "../../components/alert/TextAlert";
import Button from "../../components/forms/Button";
import TextInput from "../../components/forms/TextInput";
import LoginLayout from "../../components/layouts/LoginLayout";
import { containsNumber, containsSpecialChars } from "../../helpers/generals";

export default function Register () {
  const router = useRouter()
  const [regisData, setregisData] = useState({
    nama_lengkap: '',
    nik: '',
    alamat: '',
    email: '',
    nohp: '',
    password: '',
    confirm_password: ''
  });

  const [isValid, setisValid] = useState({
    status: true,
    msg: null
  });

  const handleChangeForm = (e) => {
    const {id, value} = e.target;

    setregisData({
        ...regisData,
        [id]: value,
    });
  }

  const validate = () => {
    const data = {...regisData};
    const dataKey = Object.keys(data);
    
    let valid = true;
    let errorMsg = null;
    for(const key of dataKey){
      if(data[key] == ''){
        valid = false;
        errorMsg = 'Harap input semua form.';
        break;
      }
      if(key == 'nama_lengkap'){
        if(data[key].length < 3){
          valid = false;
          errorMsg = 'Nama Lengkap minimal 3 karakter';
          break;
        }else if(containsNumber(data[key]) || containsSpecialChars(data[key])){
          valid = false;
          errorMsg = 'Nama Lengkap hanya bisa menggunakan huruf.';
          break;
        }
      }
      if(key == 'nik') {
        if(data[key].length != 16) {
          valid = false;
          errorMsg = 'NIK tidak sesuai.';
          break;
        }
      }
      if(key == 'email') {
        
      }
    }
    setisValid({status: valid, msg: errorMsg});
    return valid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validate()) router.replace('/');
  }

  return <LoginLayout title="Daftar Sampingan">
    <div className="flex flex-row flex-wrap bg-white rounded-lg" style={{minHeight: '50vh', minWidth: '50vw'}}>
      <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center rounded-tr-lg rounded-br-lg py-6 px-16">
        <h3 className="py-6 text-2xl ">DAFTAR</h3>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
          <TextInput type="text" label="Nama Lengkap" name="nama_lengkap" id="nama_lengkap" className="text-dark" onChange={handleChangeForm} value={regisData.nama_lengkap} autoComplete="off"/>
          <TextInput type="text" label="NIK" name="nik" id="nik" className="text-dark" onChange={handleChangeForm} value={regisData.nik} autoComplete="off"/>
          <TextInput type="email" label="Email" name="email" id="email" className="text-dark" onChange={handleChangeForm} value={regisData.email} autoComplete="off"/>
          <TextInput type="text" label="No. Telepon" name="nohp" id="nohp" className="text-dark" onChange={handleChangeForm} value={regisData.nohp} autoComplete="off"/>
        </div>
          <TextInput type="text" label="Alamat" name="alamat" id="alamat" className="text-dark" onChange={handleChangeForm} value={regisData.alamat} multiple={true} autoComplete="off"/>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
          <TextInput type="password" label="Password" name="password" id="password" className="text-dark" onChange={handleChangeForm} value={regisData.password} autoComplete="off"/>
          <TextInput type="password" label="Konfirmasi Password" name="confirm_password" id="confirm_password" className="text-dark" onChange={handleChangeForm} value={regisData.confirm_password} autoComplete="off"/>
        </div>
        {!isValid.status && isValid.msg && <TextAlert text={isValid.msg}/>}
        <Button type="submit" className="my-6">Daftar</Button>
        <Link href='login' className="">Sudah Punya Akun? Login disini.</Link>
      </form>
    </div>
  </LoginLayout>
}