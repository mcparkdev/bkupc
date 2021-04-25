import Link from 'next/link'


const Sider = () => {
  return (
    <div className="hidden md:flex md:w-sider h-screen bg-blue-100">
      Sider
      <Link href="/">
        홈
      </Link>
    </div>
  )
}

export default Sider
