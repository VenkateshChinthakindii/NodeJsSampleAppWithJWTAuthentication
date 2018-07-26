module.exports={
    articleDefault:async (req,res,next)=>{
        await res.status(200).send("<h1>No articles found at this time ,we will notify you soon....</h1>")
    }
}