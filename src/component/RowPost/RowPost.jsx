import React,{useEffect,useState,useContext} from 'react'
import './RowPost.css'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { Firebase,db } from '../../firebase/config'
import { useNavigate } from 'react-router-dom';
import {PostContext} from '../../PostContext/PostContext';



function RowPost() {
    const {setPostDetails} = useContext(PostContext)
    const navigat = useNavigate()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'products'));
    
            const data = [];
            querySnapshot.forEach((doc) => {
              const productDetail = { ...doc.data(), id: doc.id };
              data.push(productDetail);
            });
    
            setProducts(data);
          } catch (error) {
            console.error('Error fetching product data:', error);
          }
        };
    
        fetchData()
      }, []);
      


    return (
        <div className='container'>
        <div className="rui-jIycK rui-XXqva rui-8GvJw rui-RVnVw rui-ZvM8x rui-VAm0G lazWv">
            <div className="_1Ztq6">
                <div className="_2sSIy pt-5"><span>Fresh recommendations</span></div>
                <div>
                    <ul className="_266Ly _1GDCw" data-aut-id="itemsList">
                        
                        {products.map((item,index)=>{
                            return(
                                <li style={{cursor:'pointer'}} onClick={()=>{
                                    setPostDetails(item)
                                    navigat('/post')
                                }} data-aut-id="itemBox" data-aut-category-id="1453" className="_1DNjI" key={index}>
                                <a >
                                    <figure className="_3UrC5" data-aut-id="itemImage">
                                        <div className="_1apxS">
                                            <div className="LnPDR _1zTrc"></div>
                                        </div>
                                        
                                            <img
                                                src={item.image1}
                                                className="_2hBzJ"
                                            />
                                        
                                    </figure>
                                    <div className="fTZT3">
                                        <span className="_2Ks63" data-aut-id="itemPrice">₹ {item.price}</span><span className="_2poNJ" data-aut-id="itemTitle">{item.description}</span>
                                        <div className="_3rmDx">
                                            <span className="_2VQu4" data-aut-id="item-location">{item.location}</span><span className="_2jcGx"></span>
                                        </div>
                                    </div>
                                </a>
                                <span className="_1Tqbb _18Wg3">
                                    <button type="button" className="rui-3a8k1 _29mJd favoriteOff" role="button" tabIndex="0" data-aut-id="btnFav" title="Favourite">
                                        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd">
                                            <path
                                                className="rui-w4DG7"
                                                d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"
                                            ></path>
                                        </svg>
                                    </button>
                                </span>
                            </li> 
                            )
                        })}
                        
                        

{/* 
                        <li className="TA_b7">
                            <div className="_38O09">
                                <button type="button" data-aut-id="btnLoadMore" className="rui-apowA rui-htytx rui-UGVY0"><span>load more</span></button>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className="_3_VRg">
                <div id="baxter-ads-home-bottom" className="_3t0sY"></div>
            </div>
        </div>
        </div>
    )
}

export default RowPost