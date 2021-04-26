import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Head>
        <title>보고타한인연합장로교회</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-16 m:p-0 h-screen w-screen flex justify-center items-start md:items-center flex-col">
        <div className="text-2xl md:text-4xl mb-8">
          보고타한인연합장로교회
        </div>
        <div className="text-4xl md:text-8xl font-bold flex items-start md:items-center justify-center flex-col mb-12 md:mb-16">
          <span className="flex flex-row">
            주일
            <div className="text-blue-600">가정</div>
            예배에
          </span>
          <span>
            오신 것을 환영합니다
          </span>
        </div>
        <Link href="/chapel">
          <button className="p-6 md:p-8 text-xl md:text-2xl text-white rounded back bg-blue-600 hover:bg-blue-700 transition ease-in-out duration-200 focus:outline-none">
            가정예배 드리기
          </button>
        </Link>
      </div>
    </div>
  )
}
