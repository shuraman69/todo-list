export const InfoPage = () => {
    return (
        <>
            <h2 className='center'>Информация</h2>
            <div className='info_container'>
                <div className="img"/>
                <div className="dev_info">
                    <h2>Привет, меня зовут Александр</h2>
                    <h4>Этот проект был создан в процессе практики TypeScript</h4>
                    <h4>Мои социальные сети</h4>
                    <div className="social">
                        <div className="social_item">
                            <img
                                className="inst social_img"
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png'
                                alt=' '/>
                            <a target="_blank" href='https://www.instagram.com/shuraman69'>Instagram</a>
                        </div>
                        <div className="social_item">
                            <img
                                className="inst social_img"
                                src='https://cdn.worldvectorlogo.com/logos/vk-1.svg'
                                alt=' '/>
                            <a target="_blank" href='https://vk.com/shuramaan'>VKontakte</a>
                        </div>
                        <div className="social_item">
                            <img
                                className="inst social_img"
                                src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                                alt=' '/>
                            <a target="_blank" href='https://github.com/shuraman69'>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}