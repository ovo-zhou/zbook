import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWhistleInstance, setGlobalProxy } from "../store/slices/whistleSlice";
useSelector

function Proxy() {
    const whistleInstance = useSelector((state) => state.whistle.whistleInstance)
    const globalProxy = useSelector((state) => state.whistle.globalProxy)
    // console.log(globalProxy)

    const dispatch = useDispatch()
    useEffect(() => {
        const initWhistle = async () => {
            if (!whistleInstance) {
                const startResult = await whistle.startWhistle()
                // console.log('whistle启动信息', startResult)
                dispatch(setWhistleInstance(true))
            }
            if (!globalProxy) {
                const proxyResult = await whistle.startProxy()
                // console.log('全局代理启动信息', proxyResult)
                dispatch(setGlobalProxy(true))
            }
        }
        initWhistle()
    }, [])

    return whistleInstance ?
        <>
            <iframe src="http://127.0.0.1:8899" style={{ width: '100%', height: '100%' }}></iframe>
        </> :
        <>正在启动....</>

}
export default Proxy;
