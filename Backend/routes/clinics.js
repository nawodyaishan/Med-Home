const {Clinic} = require('../models/clinic');
const express = require('express');
const { Category } = require('../models/category');
const router = express.Router();
const mongoose = require('mongoose');


router.get(`/`, async (req, res) =>{
    // localhost:3000/api/v1/clinics?categories=2342342,234234
    let filter = {};
    if(req.query.categories)
    {
         filter = {category: req.query.categories.split(',')}
    }

    const clinicList = await Clinic.find(filter).populate('category');

    if(!clinicList) {
        res.status(500).json({success: false})
    } 
    res.send(clinicList);
})

router.get(`/:id`, async (req, res) =>{
    const clinic = await Clinic.findById(req.params.id).populate('category');

    if(!clinic) {
        res.status(500).json({success: false})
    } 
    res.send(clinic);
})

router.post(`/`, async (req, res) =>{
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category')

    let clinic = new Clinic({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
    })

    clinic = await clinic.save();

    if(!clinic) 
    return res.status(500).send('The clinic cannot be created')

    res.send(clinic);
})

router.put('/:id',async (req, res)=> {
    if(!mongoose.isValidObjectId(req.params.id)) {
       return res.status(400).send('Invalid Clinic Id')
    }
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category')

    const clinic = await Clinic.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        },
        { new: true}
    )

    if(!clinic)
    return res.status(500).send('the clinic cannot be updated!')

    res.send(clinic);
})

router.delete('/:id', (req, res)=>{
    Clinic.findByIdAndRemove(req.params.id).then(clinic =>{
        if(clinic) {
            return res.status(200).json({success: true, message: 'the clinic is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "clinic not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})

router.get(`/get/count`, async (req, res) =>{
    const clinicCount = await Clinic.countDocuments((count) => count)

    if(!clinicCount) {
        res.status(500).json({success: false})
    } 
    res.send({
        clinicCount: clinicCount
    });
})

router.get(`/get/featured/:count`, async (req, res) =>{
    const count = req.params.count ? req.params.count : 0
    const clinic = await Clinic.find({isFeatured: true}).limit(+count);

    if(!clinics) {
        res.status(500).json({success: false})
    } 
    res.send(clinics);
})

module.exports =router;