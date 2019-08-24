const addCity = require('../database/queries/addCity');

exports.postCity = (req,res)=>{
  console.log(req.body);
  addCity(req.body)
  .then(result=>{res.redirect('/')})
  .catch(err=>console.log(err));
};
