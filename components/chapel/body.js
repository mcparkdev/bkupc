const Item = ({title, subtitle, children, index}) => {
  return (
    <div id={`chapel-${index}`} className="item shadow-lg w-full max-w-7xl p-8 md:p-16 text-base bg-white mb-8 md:mb-16">
      <div className="title text-3xl font-bold mb-2 md:text-5xl">
        {title}
      </div>
      <div className="subtitle text-xl mb-4">
        {subtitle}
      </div>
      <div className="divider h-2 w-16 bg-blue-800 mb-6"/>
      <div className="content divide-y">
        {children}
      </div>
    </div>
  )
}

const Items = ({chapelItems}) => {
  console.log(chapelItems)
  const {titles, subtitles, bodies} = chapelItems
  return (
    <>
      {titles?.map((title, index) => {
        const subtitle = subtitles[index]
        const body = bodies[index]
        const {meta, types, content} = body
        const itemProps = {title, subtitle, index}
        return (
        <Item key={`chapel-item-${index}`} {...itemProps}>
          {meta && 
            <div className="meta text-lg mb-4">
              {meta}
            </div>
          }
          {body?.title?.map((bodyTitle, bodyIndex)=>{
            const bodyContent = content[bodyIndex]
            const bodyType = types[bodyIndex]
            return (
              <div key={`chapel-item-${index}-${bodyIndex}`} className="section">
                <div className="title text-xl text-blue-800 font-bold my-4">
                  {bodyTitle}
                </div>
                {bodyType === "text" &&
                  <div className="content mb-6 whitespace-pre-line">
                    {bodyContent}
                  </div>
                }
                {bodyType === "youtube" &&                  
                  <div className="content w-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${bodyContent}`}
                      title={bodyTitle}
                      className="w-full h-96 md:h-youtube"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                }
                {bodyType === "img" && 
                  <a className="content" href={bodyContent} target="_blank">
                    <img className="object-fill w-full hover:opacity-60 transition-opacity" src={bodyContent} />
                  </a>
                }
              </div>
            )
          })}
        </Item>
      )})}
    </>
  )
}

const Body = (props) => {
  return (
    <div className="body flex flex-1 flex-col justify-start md:p-16 items-center bg-indigo-50 overflow-y-auto">
      <div className="md:hidden banner p-8 w-full">
        <div className="header flex items-center justify-between font-medium mb-8">
          <span className="text-sm">
            주일예배
          </span>
          <span className="text-sm">
            오전 11:00
          </span>
        </div>
        <div className="title">
          <span className="main text-4xl font-bold flex items-center justify-start mb-4">
            <span className="text-blue-600">가정</span>예배순서
          </span>
          <span className="text-base">
            인도: 가정의 어른
          </span>
        </div>
      </div>
      <Items {...props} />
    </div>
  )
}

export default Body
