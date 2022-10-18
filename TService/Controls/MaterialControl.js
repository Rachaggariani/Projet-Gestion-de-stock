const Material=require("../models/Material");
exports.createMaterial = async (req, res) => {
    console.log("lanched");
    let newREquestMaterial =req.body;
    try {
        const newMaterial = new Material({
          Types: newREquestMaterial.Types,
          NameMaterial: newREquestMaterial.NameMaterial,
          quantity: newREquestMaterial.quantity,
          price: newREquestMaterial.price,
        });
        console.log(newMaterial);
        await newMaterial.save();
    res.status(200).json({ msg: "material is saved" });
  } catch (error) {
    console.log(error);
    res.status(500).send("affiche erreur!");
  }
};
exports.obtenirMaterials= async (req, res) => {
    try {
      const materials = await Material.find();
      res.status(200).json({materials});
    } catch (error) {
      console.log(error);
      res.status(500).send("error!");
    }
  };
  exports.UpdateMaterial = async (req, res) => {
    const id=req.params.id;
const materials=req.body;
try{
    await Material.findByIdAndUpdate(id,materials);
    res.status(200).json({msg:"successfully update materials "});

}catch(error){
    res.status(400).json({msg: "Update is failed !"})
}
};
exports.obtenirMaterial = async (req, res) => {
    const id=req.params.id;
  try {
    const materials = await Material.findById(id);
   
    res.status(200).json({materials:materials});
  } catch (error) {
    console.log(error);
    res.status(400).send("error:operation failed !");
  }
};
exports.delMaterial = async (req, res) => { const id=req.params.id;
    try{
    let materials=await Material.findById(req.params.id);
    if(!materials){
        res.status(404).json({msg:'material doesn t existe'});
    }
    await Material.findByIdAndRemove({_id:req.params.id})
    res.json({msg:'delete material'});
    
    }catch(error){
        console.log(error);
        res.status(500).send("error!");
    }
    };
    