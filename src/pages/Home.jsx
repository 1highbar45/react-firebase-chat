import React, { useContext } from 'react'
import Blank from '../components/Blank'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'
import { ChatContext } from '../context/ChatContext'

const Home = () => {
    const { data } = useContext(ChatContext)

    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                {Object.keys(data.user).length === 0 ? <Blank /> : <Chat />}
            </div>
        </div>
    )
}

export default Home