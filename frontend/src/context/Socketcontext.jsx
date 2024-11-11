import { Children, createContext, useContext, useEffect, useState } from "react";
import {  useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const Socketcontext = createContext()

export const useSocketContext = ()=>{
  return useContext(Socketcontext)
}

export const SocketcontextProvider = ({ children }) => {
  const [onlineUsers, setonlineUsers] = useState([]);
  const [socket, setsocket] = useState(null);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io(import.meta.env.VITE_BACKEND_URL,{
        query:{
          userId:authUser._id
        }
      });

      socket.on("getOnlineUsers",(users)=>{
        setonlineUsers(users)
      })

      setsocket(socket);
    } else {
      if (socket) {
        socket.close();
      }
    }
  }, [authUser]);

  return (
    <Socketcontext.Provider value={{ socket, onlineUsers }}>
      {children}
    </Socketcontext.Provider>
  );
};


