'use strict';
import RNFetchBlob from 'react-native-fetch-blob';
export default Request = {
	Header:{}, // 设置Header请求头
	GetConfig:{
        indicator:true,// 指示器,iOS专属
        timeout:15000 // 超时
        // fileCache : bool,// 缓存
        // path : string, // 缓存地址
        // appendExt : string,
        // session : string,
        // addAndroidDownloads : any,
    },
    PostConfig:{
        indicator:true
    },
    UpLoadConfig:{
        indicator:true
    },
    /**
     * @param url               请求网址
     * @param successCallBack   返回正确的值
     * @param failCallBack      返回错误的值
     * @returns
     */
     get:(url, successCallBack, failCallBack) =>{
        return RNFetchBlob
            .config(Request.PostConfig)
            .fetch('GET',url,Request.Header)
            .then((response) => {
            	console.log(response);
                if (response.respInfo.status === 200){
                    return response.json();
                }else {
                    return failCallBack(response);
                }
            })
            .then((response)=>{
                successCallBack(response);
            })
            .catch((error)=>{
                failCallBack(toString(error));
            })
    },
    /**
     * @param url               请求网址
     * @param body              要上传的参数
     * @param successCallBack   返回正确的值
     * @param failCallBack      返回错误的值
     * @returns {Promise.<U>|Promise.<T>}
     */
     post:(url, body, successCallBack, failCallBack) =>{

        Request.Header.body = JSON.stringify(body);
        return RNFetchBlob
            .config(Request.PostConfig)
            .fetch('POST',url,Request.Header)
            .then((response) => {
                if (response.respInfo.status === 200){
                    return response.json();
                }else {
                    return failCallBack(response);
                }
            })
            .then((response)=>{
                successCallBack(response);
            })
            .catch((error)=>{
                failCallBack(error);
            })
    },
    /**
     * @param url               请求网址
     * @param body              要上传的信息,会自动转码
     * @param uploadProgress    上传进度
     * @param successCallBack   返回正确的值
     * @param failCallBack      返回错误的值
     * @returns
     */
    upload:(url,body,uploadProgress,successCallBack,failCallBack) => {
        return RNFetchBlob
            .config(Request.UpLoadConfig)
            .fetch('POST',url,{
            'Content-Type' : 'multipart/form-data',
        },body)
            .uploadProgress((written, total) => {
            })
            .progress((received, total) => {
                let perent = received / total;
                // 搜索进度打印
                console.log(perent);
                uploadProgress(perent);
            })
            .then((response)=>{
                if (response.respInfo.status === 200){
                    return response.json();
                }else {
                    return failCallBack(response);
                }
            })
            .then((response)=> {
                // console.log(response);
                successCallBack(response);
            })
            .catch((error)=>{
                failCallBack(error);
            });
    }
}
