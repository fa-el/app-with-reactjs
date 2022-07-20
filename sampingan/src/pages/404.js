import Link from "next/link";
import BaseLayout from "../components/layouts/BaseLayout";

export default function NotFoundPage () {
  return <BaseLayout>
    <div className="flex flex-col items-center">
      <h1 className="text-6xl font-bold p-5">Maaf.</h1>
      <h3 className="text-lg font-medium pb-16">Page Tidak Ditemukan</h3>
      <Link href={'/'}><div className="bg-indigo-500 text-white px-5 rounded-full py-3 hover:bg-indigo-600 cursor-pointer">Kembali Ke Beranda</div></Link>
    </div>
  </BaseLayout>
}