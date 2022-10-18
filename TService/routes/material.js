const express=require('express');
const router=express.Router();
const materialControl=require('../Controls/MaterialControl');
 router.post('/',materialControl.createMaterial);
router.get('/',materialControl.obtenirMaterials);
 router.put('/:id',materialControl.UpdateMaterial);
router.get('/:id',materialControl.obtenirMaterial);
router.delete('/:id',materialControl.delMaterial);
module.exports=router; 