import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
) {
    try{
        await res.revalidate("/");
        return res.json({revalidate:true});
    }catch(err){
        res.status(500).send("Revaludation Faild")
    }
    
}

//api폴더는 요청하거나 반환할 수 있음 이걸로 if문을 통해 내가 원하는 값 
//얻을 수 있음 !