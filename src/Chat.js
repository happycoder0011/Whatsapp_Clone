import React,{useState,useEffect} from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useParams} from 'react-router-dom';
import './Chat.css'
import db from './firebase';

function Chat() {
    const [input,setInput] = useState("");
    const {roomId} = useParams();
    const [roomName,setRoomName] = useState('');

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot( snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
    },[roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("your msg",input);

        setInput("");
    };
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar/>
                <div className='chat__headerInfo'>
                    <h3>{roomName}</h3>
                <p>Last Seen at...</p>
                </div>
                <div className="chat__headerRight">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                </div>
            </div>
            <div className='chat__body'>
               
                    <p className="chat__message">
                    <span className="chat__name">sheets</span>
                        hey guys
                    <span className="chat__timestamp">9:23pm</span>
                    </p>
                    <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">sheets</span>
                        hey guys
                    <span className="chat__timestamp">9:23pm</span>
                    </p>
                   
            </div>
            <div className='chat__footer'>
                <InsertEmoticonIcon/>
                <form>
                    <input type="text"
                            value={input}
                            placeholder="Type a message"
                            onChange={e => setInput(e.target.value)}/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
