import React from 'react'
import { VscBell } from 'react-icons/vsc'



interface notificationBellProps {
    notification: boolean;
    setNotification: (value: boolean) => void;
}
const notificationBell: React.FC<notificationBellProps> = ({ notification, setNotification }) => {
    return (<>
        {
            notification ?
                <div className="relative">
                    < button className=" bg-red-400 w-8 h-8 rounded-full flex justify-center items-center left-0" onClick={() => setNotification(!notification)} >
                        <VscBell />

                    </button >
                    <span className="absolute top-0 right-0">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-200 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                    </span>

                </div > : <div className="relative">
                    <button className=" bg-red-400 w-8 h-8 rounded-full flex justify-center items-center left-0" onClick={() => setNotification(!notification)} >
                        {/* {notification ? <VscBellDot /> : <VscBell />} */}<VscBell />
                    </button>

                </div>}
    </>)


}

export default notificationBell