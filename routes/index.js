import { Router } from "express";
import { getAllUsers, createUser, getUserById, getSerpApi, createProduct, createItemPurchase, loginUser, getSubGroupList, getAllSubGroupList, updateProduct, updateImage, addOffers, getAllOffers, updateOffers, getOffersByLimit, createProfileMV, getProfileById, getProfileByWork, createBannersMV, getProfileByEmail, createJobPostMV, createCvMV, getJobPostByEmail,  deleteOfferById, getCvByEmail, createMemberMV, loginMember, getAllJobPostMV, createDeliveryList, getAllDeliverylist, updateDeliveryStatus, updateDeliveryAppToken, getDeliveryAppToken, registerCustomer, loginCustomer, updateAccountStatus, getAllSections, addNewSections, addSectionProducts, updateSections, updateSectionProducts, getAllSectionProducts, deleteSectionById, deleteSectionProductById, getSectionProductsById } from "../handlers/index.js";

import multer from "multer";
import path from "path";

const appRouter = Router();

const storage = multer.diskStorage({
    destination : "./upload/images",
    filename : (req, file, cb) =>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage : storage
})


appRouter.get("/api/users", getAllUsers)
appRouter.get("/api/offers", getAllOffers)
appRouter.get("/api/sections", getAllSections)
appRouter.get("/api/sectionproducts", getAllSectionProducts)
appRouter.get("/api/getDeliveryAppToken", getDeliveryAppToken)
appRouter.get("/api/deliverylist", getAllDeliverylist)
appRouter.get("/api/users/allCategoryList/:SubGroupName", getAllSubGroupList)
appRouter.get("/api/users/subGroupList", getSubGroupList)
appRouter.get("/api/users/getoffersbylimit", getOffersByLimit)
appRouter.get("/api/users/serpapi/:id", getSerpApi)
appRouter.get("/api/users/getAllJobPostMV", getAllJobPostMV)
appRouter.post("/api/users/login", loginUser)
appRouter.post("/api/users/loginmember", loginMember)
appRouter.post("/api/users/loginCustomer", loginCustomer)
appRouter.post("/api/users/getprofilebyid", getProfileById)
appRouter.post("/api/users/getprofilebyemail", getProfileByEmail)
appRouter.post("/api/users/getjobpostbyemail", getJobPostByEmail)
appRouter.post("/api/users/getcvbyemail", getCvByEmail)
appRouter.post("/api/users/getprofilebywork", getProfileByWork)
appRouter.post("/api/users/create", createUser)
appRouter.post("/api/users/registerCustomer", registerCustomer)
appRouter.post("/api/users/createDelivery", createDeliveryList)
appRouter.post("/api/users/createBannersMV", createBannersMV)
appRouter.post("/api/users/createJobPostMV", createJobPostMV)
appRouter.post("/api/users/createCvMV", createCvMV)
appRouter.post("/api/users/createProfileMV", createProfileMV)
appRouter.post("/api/users/createMemberMV", createMemberMV)
appRouter.post("/api/users/offers", addOffers)
appRouter.post("/api/users/addnewsections", addNewSections)
appRouter.post("/api/users/addsectionproducts", addSectionProducts)
appRouter.put("/api/users/updateProduct",upload.single("image"), updateProduct)
appRouter.put("/api/users/updateProductImage", updateImage)
appRouter.put("/api/users/updateDeliveryStatus", updateDeliveryStatus)
appRouter.put("/api/users/updateAccountStatus", updateAccountStatus)
appRouter.put("/api/users/updateDeliveryAppToken", updateDeliveryAppToken)
appRouter.put("/api/users/updateOffersProduct", updateOffers)
appRouter.put("/api/users/updateSections", updateSections)
appRouter.put("/api/users/updateSectionProducts", updateSectionProducts)
appRouter.post("/api/users/createProduct", createProduct)
appRouter.post("/api/users/createItemPurchase", createItemPurchase)
appRouter.get("/api/users/:id", getUserById)
appRouter.get("/api/getSectionProductsById/:id", getSectionProductsById)
appRouter.delete("/api/users/deleteOfferById/:id", deleteOfferById)
appRouter.delete("/api/users/deleteSectionById/:id", deleteSectionById)
appRouter.delete("/api/users/deleteSectionProductById/:id", deleteSectionProductById)

export default appRouter;
