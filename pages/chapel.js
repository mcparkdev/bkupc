import { useState } from 'react'
import Body from '../components/chapel/body'
import Sider from '../components/chapel/sider'
import { motion } from 'framer-motion'
import Head from 'next/head'
const chapelItems = {
  titles: ["예배기원", "사도신경", "찬송 : 15장", "기도", "성경봉독 : 고린도전서 1:18~31", "듣는 찬양: 천번을 불러도", "설교 : 교회와 신앙=십자가", "결단찬송: 380장", "주기도문"],
  subtitles: ["인도자", "다함께", "다함께", "가족 중에서", "인도자", "함께 듣기", "가족 중에서", "다함께", "다함께"],
  bodies: [
    {
      types: ["text", "text", "text"],
      title: ["예배의 선포", "말씀 읽기", "예배기원"],
      content: [
        `다함께 묵도함으로 주일 가정 예배를 하나님께 드리겠습니다.`,
        `우리를 구원하시되 우리가 행한 바 의로운 행위로 말미암지 아니하고
        오직 그의 긍휼하심을 따라 중생의 씻음과 성령의 새롭게 하심으로 하셨나니
        우리 구주 예수 그리스도로 말미암아 우리에게 그 성령을 풍성히 부어 주사
        우리로 그의 은혜를 힘입어 의롭다 하심을 얻어 영생의 소망을 따라
        상속자가 되게 하려 하심이라
        
        디도서 3:5~7`,
        `하나님 아버지!

        오늘도 우리에게 예배의 자리를 허락해 주심에 감사드립니다.
        지난 한 주, 이 땅은 코로나의 질병으로 힘든 시간이었으며
        격한 시위로 불안한 시간이었기도 합니다.
        부디 이 땅에 평화를 허락하셔서서 예배의 기쁨이 가득한 나라가 되게 하여 주시고
        우리의 일상의 삶이 평안으로 채워지도록 인도하여 주시옵소서.
        오늘 이 예배를 통해 십자가의 가치와 능력을 알게 하셔서
        어떤 상황에서도 흔들리지 않는 믿음의 성도로 살게 하여 주시옵소서.
        예수님의 이름으로 기원드립니다.

        아멘.
        `
      ],
    },
    {
      meta: "온 가족이 함께 읽습니다.",
      types: ["text"],
      title: ["새번역 사도신경"],
      content: [
        `나는 전능하신 아버지 하나님, 천지의 창조주를 믿습니다.
        나는 그의 유일하신 아들, 우리 주 예수 그리스도를 믿습니다.
        그는 성령으로 잉태되어 동정녀 마리아에게서 나시고,
        본디오 빌라도에게 고난을 받아 십자가에 못 박혀 죽으시고,
        장사된 지 사흘 만에 죽은 자 가운데서 다시 살아나셨으며,
        하늘에 오르시어 전능하신 아버지 하나님 우편에 앉아 계시다가,
        거기로부터 살아있는 자와 죽은 자를 심판하러 오십니다.
        나는 성령을 믿으며,
        거룩한 공교회와 성도의 교제와 죄를 용서 받는 것과 몸의 부활과 영생을 믿습니다.
        
        아멘.`,
      ]
    }, 
    {
      types: ["youtube", "img"],
      title: ["새 찬송가 15장", "악보"],
      content: ["01woUVsdRdo", "https://m1.daumcdn.net/cfile222/image/1643CD544DA628C63A6730"]
    },
    {},
    {
      types: ["text"],
      title: ["고린도전서 1:18~31"],
      content: [
        `'하나님의 능력과 지혜이신 그리스도'

        18   십자가의 도가 멸망하는 자들에게는 미련한 것이요 구원을 받는 우리에게는 하나님의 능력이라
        19   기록된 바 내가 지혜 있는 자들의 지혜를 멸하고 총명한 자들의 총명을 폐하리라 하였으니
        20   지혜 있는 자가 어디 있느냐 선비가 어디 있느냐 이 세대에 변론가가 어디 있느냐 하나님께서 이 세상의 지혜를 미련하게 하신 것이 아니냐
        21   하나님의 지혜에 있어서는 이 세상이 자기 지혜로 하나님을 알지 못하므로 하나님께서 전도의 미련한 것으로 믿는 자들을 구원하시기를 기뻐하셨도다
        22   유대인은 표적을 구하고 헬라인은 지혜를 찾으나
        23   우리는 십자가에 못 박힌 그리스도를 전하니 유대인에게는 거리끼는 것이요 이방인에게는 미련한 것이로되
        24   오직 부르심을 받은 자들에게는 유대인이나 헬라인이나 그리스도는 하나님의 능력이요 하나님의 지혜니라
        25   하나님의 어리석음이 사람보다 지혜롭고 하나님의 약하심이 사람보다 강하니라
        26   형제들아 너희를 부르심을 보라 육체를 따라 지혜로운 자가 많지 아니하며 능한 자가 많지 아니하며 문벌 좋은 자가 많지 아니하도다
        27   그러나 하나님께서 세상의 미련한 것들을 택하사 지혜 있는 자들을 부끄럽게 하려 하시고 세상의 약한 것들을 택하사 강한 것들을 부끄럽게 하려 하시며
        28   하나님께서 세상의 천한 것들과 멸시 받는 것들과 없는 것들을 택하사 있는 것들을 폐하려 하시나니
        29   이는 아무 육체도 하나님 앞에서 자랑하지 못하게 하려 하심이라
        30   너희는 하나님으로부터 나서 그리스도 예수 안에 있고 예수는 하나님으로부터 나와서 우리에게 지혜와 의로움과 거룩함과 구원함이 되셨으니
        31   기록된 바 자랑하는 자는 주 안에서 자랑하라 함과 같게 하려 함이라
      `
      ]
    },
    {
      meta: "영상을 클릭해서 온 가족이 함께 듣습니다.",
      types: ["youtube", "text"],
      title: ["천번을 불러도", "가사"],
      content: ["j5Z9ZCuOmTM",
      `천번을 불러봐도 내눈에 눈물이 
        멈추지 않는 것은십자가의 그 사랑
        나를 살리려 지신 그 십자가 모든 물과 피 
        나의 더러운 죄 씻으셨네 

        나를 향한 그 사랑 생명을 내어주사
        영원한 생명을 내게 주심을 감사해

        천번을 불러도 내눈에는 눈물이 
        멈추지 않는 것은 십자가의 그 사랑
        나를 살리려 하늘 보좌 버리신
        나를 사랑하신 분 그분이 예수요`
      ]
    },
    {
      meta: `영상을 클릭해서 온 가족이 설교를 함께 듣습니다.
      `,
      types: ["youtube"],
      title: ["교회와 신앙=십자가"],
      content: ["9wo3duDyGCg"]
    },
    {
      types: ["youtube", "img"],
      title: ["새 찬송가 380장", "악보"],
      content: ["3tISsG-IGv4","https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99FB17415D5E4D9011"]
    },
    {
      meta: "온 가족이 함께 읽는 기도를 드립니다.",
      types: ["text"],
      title: ["새번역 주기도문"],
      content: [
        `하늘에 계신 우리 아버지,
        아버지의 이름을 거룩하게 하시며
        아버지의 나라가 오게 하시며,
        아버지의 뜻이 하늘에서와 같이 
        땅에서도 이루어지게 하소서.
        오늘 우리에게 일용할 양식을 주시고,
        우리가 우리에게 잘못한 사람을 용서하여 준 것같이
        우리 죄를 용서하여 주시고
        우리를 시험에 빠지지 않게 하시고 악에서 구하소서.
        나라와 권능과 영광이 영원히 아버지의 것입니다.
        
        아멘.`,
      ]
    }, 
  ]
}

const Chapel = () => {
  const [showSider, setShowSider] = useState(true)
  const toggleSider = () => {
    setShowSider(prevShowSider => !prevShowSider)
  }
  const siderProps = {showSider, setShowSider, toggleSider, ...chapelItems}

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="w-screen h-screen flex">
      <Head>
        <title>5월 2일 가정예배</title>
        <link rel="icon" href="/bkupc_logo_small.png" />
      </Head>
      <Sider {...siderProps} />
      <Body chapelItems={chapelItems} />
      <button 
        className="md:hidden quickbutton fixed bottom-8 right-8 h-24 w-24 bg-blue-600 flex justify-center items-center rounded-full focus:bg-blue-700 focus:outline-none transition"
        onClick={toggleSider}
      >
        {showSider ? 
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        :
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        }
      </button>
    </motion.div>
  )
}

export default Chapel
