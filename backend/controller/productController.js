exports.getProducts=(req, res, next)=>{
    res.json({
        sucess: true,
        message:'GEt Products working!'
    })

}

exports.getSingleProduct=(req, res, next)=>{
    res.json({
        sucess:true,
        message:'Get Single product working!'
    })
}