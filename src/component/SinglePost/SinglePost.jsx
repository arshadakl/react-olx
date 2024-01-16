import React, { useContext, useEffect, useState } from 'react'
import './SinglePost.css'
import { PostContext } from '../../PostContext/PostContext'
import { useNavigate } from 'react-router-dom'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';



function SinglePost() {
  const navigat = useNavigate()
  const { postDetails } = useContext(PostContext)
  const [image, setImage] = useState(postDetails.image1)
  const [userData, setUserData] = useState(null)

  async function fetchData(userId) {
    try {
      const q = query(collection(db, 'users'), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        setUserData(data)
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }




  useEffect(() => {
    fetchData(postDetails.userId);
    console.log(userData);
  }, [postDetails.userId]); // Add postDetails.userId to the dependency array if needed


  const handleImage = (action) => {
    if (action == 1) {
      setImage(postDetails.image1)
    }
    if (action == 2) {
      setImage(postDetails.image2)
    }
    if (action == 3) {
      setImage(postDetails.image3)
    }
  }

  // console.log(postDetails);
  return (
    <>
      <main id="main_content" className="_1oFYt qmRfv" data-aut-id="page-main-content">
        <div className="_1B-ev _2qi8N">
          <div data-aut-id="itemComponent" className="rui-eCfYo _1fihJ">
            <div className="">
              <div className="rui-jIycK rui-tOTz6 rui-3EzFm rui-RVnVw rui-ZvM8x rui-VAm0G">
                <div className="rui-99hme _2VzDG" tabIndex="0" role="button">
                  <div className="rui-oN78c _1I7gi">
                    <div className="_1P3Se">
                      <div className="slick-slider _28lFW slick-initialized" style={{ backgroundImage: `url(${image})` }} dir="ltr">
                        <div className="slick-list">
                          <div className="slick-track" style={{ width: '900%', left: '-100%' }}>
                            {/* ... Slick slides and images */}
                            {/* <div>
                          <img src={postDetails.image3} alt="" />

                          </div> */}
                          </div>
                        </div>
                      </div>

                      {/* <span onClick={() => handleImage(-1)} className="_1wrzZ giPH9">
                        <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
                          <path className="rui-o3KKi" d="M684.685 85.333l-407.352 396.501v60.331l407.352 396.501h61.982v-60.331l-376.339-366.336 376.339-366.336v-60.331z"></path>
                        </svg>
                      </span>

                      <span className="_1wrzZ _2jAuk" onClick={() => handleImage(0)}>
                        <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
                          <path className="rui-o3KKi" d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path>
                        </svg>
                      </span> */}
                    </div>
                    {/* <div className="_390Zy o-fi2"></div> */}
                    <div className="_24Sf1" data-aut-id="gallery-thumbnail">
                      <div className="_24Sf1" data-aut-id="gallery-thumbnail">
                        <div className="slick-slider _18EnX slick-initialized">
                          <div className="slick-list">
                            <div className="slick-track" style={{ width: '50%', left: '0%' }}>

                              <div onClick={() => handleImage(1)} data-index="0" className="slick-slide slick-active slick-current" tabIndex="-1" aria-hidden="false" style={{ outline: 'none', width: '25%' }}>
                                <div>
                                  <div className="_2Ci7P" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                    <button className="_2ToZN lf0Cx _3V0eE" value="0" style={{ backgroundImage: `url(${postDetails.image1})` }}></button>
                                  </div>
                                </div>
                              </div>
                              <div onClick={() => handleImage(2)} data-index="0" className="slick-slide slick-active slick-current" tabIndex="-1" aria-hidden="false" style={{ outline: 'none', width: '25%' }}>
                                <div>
                                  <div className="_2Ci7P" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                    <button className="_2ToZN lf0Cx _3V0eE" value="0" style={{ backgroundImage: `url(${postDetails.image2})` }}></button>
                                  </div>
                                </div>
                              </div>
                              <div onClick={() => handleImage(3)} data-index="0" className="slick-slide slick-active slick-current" tabIndex="-1" aria-hidden="false" style={{ outline: 'none', width: '25%' }}>
                                <div>
                                  <div className="_2Ci7P" tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                    <button className="_2ToZN lf0Cx _3V0eE" value="0" style={{ backgroundImage: `url(${postDetails.image3})` }}></button>
                                  </div>
                                </div>
                              </div>


                              {/* ... More slides as needed */}
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="gZhu1"></div>
                  </div>
                </div>
                <section className="_2Wq-x">
                  <div className="rui-99hme" tabIndex="0" role="button">
                    <div className="rui-oN78c ok1RR">
                      <h3 data-aut-id="itemDescriptonTitle"><span>Details</span></h3>
                      <div data-aut-id="itemParams" className="_3B4o-">
                        <div className="_3nSm3">
                          <div className="_1O2tT">
                            <div className="_2oHc_"><span className="_3V4pD" data-aut-id="key_make">{postDetails.brand}</span><span className="B6X7c" data-aut-id="value_make">{postDetails.title}</span></div>
                          </div>
                        </div>
                      </div>
                      <h3 data-aut-id="itemDescriptonTitle" className="_30eN9">
                        <span>Description</span>
                      </h3>
                      <div data-aut-id="itemDescriptionContent">
                        <p className="">{postDetails.description}</p>
                        {/* <p className="">with great bargains</p>
                      <p className="_1xs4k"></p>
                      <p className="">All iPhone models are available with us</p>
                      <p className="_1xs4k"></p>
                      <p className="">COD available courier charges will be applicable</p> */}
                      </div>
                    </div>
                  </div>
                </section>

              </div>
              {/* <div className="rui-jIycK rui-tOTz6 rui-EY2Ik rui-RVnVw rui-ZvM8x rui-VAm0G">
              <div className="rui-99hme _7qT_t" tabIndex="0" role="button">
                <div className="rui-oN78c">
                  <section className="_8S0h4">
                    <span data-aut-id="itemPrice" className="T8y-z">₹ 22,000</span>
                    <h1 data-aut-id="itemTitle" className="_1hJph">Iphone 14 refurbished amazing top models with bill warranty</h1>
                    <div className="_3dpp8">
                      <div data-aut-id="itemLocation" className="_3ipDN">
                        <div className="_3Uj8e"><span className="_1RkZP">Samudrapur, Maharashtra, India</span></div>
                      </div>
                      <div data-aut-id="itemCreationDate" className="_3n70Q">
                        <span>Yesterday</span>
                      </div>
                    </div>
                  </section>
                  <div className="_3G9pp">
                    <button type="button" className="rui-3a8k1 rui-ByR9G" role="button" tabIndex="0" data-aut-id="btnShare" title="Share">
                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
                       
                      </svg>
                    </button>
                    <button type="button" className="rui-3a8k1 favoriteOff" role="button" tabIndex="0" data-aut-id="btnFavorite" title="Favorite">
                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
                       
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              
            </div> */}
              <div className="rui-jIycK rui-tOTz6 rui-EY2Ik rui-RVnVw rui-ZvM8x rui-VAm0G">
                <div className="rui-99hme _7qT_t" tabIndex="0" role="button">
                  <div className="rui-oN78c">
                    <section className="_8S0h4">
                      <span data-aut-id="itemPrice" className="T8y-z">₹ {postDetails.price}</span>
                      <h1 data-aut-id="itemTitle" className="_1hJph">{postDetails.title}</h1>
                      <h4 data-aut-id="itemTitle" className="_1hJph">{postDetails.description}</h4>
                      <div className="_3dpp8">
                        <div data-aut-id="itemLocation" className="_3ipDN">
                          <div className="_3Uj8e"><span className="_1RkZP">{postDetails.location}</span></div>
                        </div>
                        <div data-aut-id="itemCreationDate" className="_3n70Q">
                          {/* <span>Yesterday</span> */}
                        </div>
                      </div>
                    </section>
                    <div className="_3G9pp">
                      <button type="button" className="rui-3a8k1 rui-ByR9G" role="button" tabIndex="0" data-aut-id="btnShare" title="Share">
                        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
                          {/* ... Share button SVG path */}
                        </svg>
                      </button>
                      <button type="button" className="rui-3a8k1 favoriteOff" role="button" tabIndex="0" data-aut-id="btnFavorite" title="Favorite">
                        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
                          {/* ... Favorite button SVG path */}
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rui-99hme _3faUP" tabIndex="0" role="button">
                  <div className="rui-oN78c">
                    <div className="_3Yuv9 kI9QF">
                      <div className="eHFQs">Seller Details</div>
                      <hr />

                      {userData ? 
                    <div className="_1ibEV" data-aut-id="profileCard">

                    <div className="_2tgkn">
                      <div className="eHFQs">{userData.username}</div>
                      <h6 className='mt-2'>Contact : {userData.mobile}</h6>

                    </div>

                  </div>: null  
                    }
                    </div>
                    <section className="_1cHdI" data-aut-id="callToActionCard"></section>
                  </div>
                </div>
                <div className="_3_VRg">
                  <div id="baxter-ads-details-middle" className="_3nD9j"></div>
                </div>
                {/* <div className="rui-99hme gp-Oc" tabIndex="0" role="button">
                  <div className="rui-oN78c">
                    <h3 className="_1W1LZ">Posted in</h3>
                    <div className="_3Uj8e"><span className="_1RkZP">Samudrapur, Maharashtra, India</span></div>
                  </div>
                </div> */}
                {/* <div className="_1-oS0">
    <strong>
      AD ID
      1736155852
    </strong>
    <p className="_3nhIU">Report this ad</p>
  </div> */}
                <div className="_3_VRg">
                  <div id="baxter-ads-details-middle-bottom" className=""></div>
                </div>
                <div className="_3_VRg">
                  <div id="baxter-ads-details-bottom" className="_27Wkc"></div>
                </div>
              </div>

              {/* ... Other sections and details */}

            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default SinglePost