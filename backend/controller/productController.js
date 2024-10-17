const ProductModel=require('../models/productModel')

exports.getProducts=async (req, res, next)=>{

    const products= await ProductModel.find({})       //takes the entire model if given empty{} inside find method
    res.json({
        sucess: true,
        products
    })

}

exports.getSingleProduct=(req, res, next)=>{
    res.json({
        sucess:true,
        message:'Get Single product working!'
    })
}