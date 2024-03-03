import React, { useState,useContext, useEffect } from 'react'
import { Firebase,db } from '../../firebase/config'
import './Sell.css'
import { getStorage, ref,getDownloadURL, uploadBytes } from 'firebase/storage'
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../firebase/context';


function Sell() {
    
    const navigat = useNavigate()
    const {user} = useContext(AuthContext)
    const storage = getStorage(Firebase)
    const [brand, setBrand] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image1, setimage1] = useState('')
    const [image2, setimage2] = useState('')
    const [image3, setimage3] = useState('')
    const [location, setLocation] = useState('')
    const [valErr,setvalErr] = useState('')
    const imgPrvIcon = "https://cdn3.iconfinder.com/data/icons/file-and-folder-fill-icons-set/144/File_Upload-512.png"


    useEffect(()=>{
        if(!user){
            navigat('/login')
        }
    },[user])

    const handleFormSubmit = async (e) => {
        e.preventDefault()



        if (
            brand.trim().length < 2 ||
            title.trim().length < 2 ||
            description.trim().length < 5 ||
            price.trim().length < 5 ||
            location.trim().length < 5 ||
            !image1 ||
            !image2 ||
            !image3
        ) {
            // Display an error message or handle the validation failure
            // console.log("All fields are required and must have at least characters");
            setvalErr("All fields are required and must have at least characters")
            return;
        }
    
        // console.log(user);
        const imageUrls = await Promise.all([uploadImage(image1), uploadImage(image2), uploadImage(image3)]);
        console.log(imageUrls);
        await addDoc(collection(db,'products'),{
            userId :user.uid,
            brand,title,description,price,location,
            image1:imageUrls[0],
            image2:imageUrls[1],
            image3:imageUrls[2],
        }).then(()=>{
            navigat('/')
        })
        // console.log(`brand: ${brand} description ${description} price ${price} title ${title} location ${location}`);
    }

    const uploadImage = async (image) => {
        if (!image) return null;
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
      };
    return (
        <div className='sellPage'>
            <div className="container d-flex flex-column  justify-content-center">
                <h1 className='head-title text-center'>POST YOUR AD</h1>
                <div className="box p-4 mt-4 col-md-8 col-12 mb-2 mx-auto">
                    <h2>Product Details</h2>
                    <hr />
                    <div className="input-area col-md-8 col-12" >
                        <h2>INCLUDE SOME DETAILS</h2>
                        <form onSubmit={handleFormSubmit}>
                            <label htmlFor="" className='mt-2'>Brand *</label>
                            <input value={brand} onChange={(e) => setBrand(e.target.value)} type="text" />
                            <label htmlFor="" className='mt-2'>Ad title *</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                            <div className='d-flex flex-column'>
                                <label htmlFor="" className='mt-2'>Description *</label>
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='mt-2' name="" id="" cols="30" rows="6"></textarea>
                            </div>
                            <hr />
                            <label htmlFor="" className='mt-2'>SET A PRICE</label>
                            <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" />
                            <hr />
                                <label htmlFor="formFile" className="form-label">UPLOAD IMAGES</label>
                            <div className="mb-3 col-12 row">
                                <div className='imgInput  col-4'>
                                    <img className='imgPrv'  src={image1 ? URL.createObjectURL(image1) : imgPrvIcon} alt="" />
                                    <input type="file" accept="image/png, image/jpeg" onChange={(e)=>setimage1(e.target.files[0])} className='btn' />
                                </div>
                                <div className='imgInput  col-4'>
                                    <img className='imgPrv'  src={image2 ? URL.createObjectURL(image2) : imgPrvIcon} alt="" />
                                    <input type="file" accept="image/png, image/jpeg" onChange={(e)=>setimage2(e.target.files[0])} className='btn' />
                                </div>
                                <div className='imgInput  col-4'>
                                    <img className='imgPrv'  src={image3 ? URL.createObjectURL(image3) : imgPrvIcon} alt="" />
                                    <input type="file" accept="image/png, image/jpeg" onChange={(e)=>setimage3(e.target.files[0])} className='btn' />
                                </div>
                            </div>
                            

                            <hr />
                            
                            <label htmlFor="" className='mt-2'> LOCATION</label>
                            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                            <hr />
                            <button type='submit' className='postBTN'>Post</button>
                            <p className='text-danger'>{valErr}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sell
