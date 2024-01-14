import React from 'react'

function Login() {
    return (
        <>
            <div className='  main-Area '>

                <div class="card  col-md-3 col-10  box-area">
                    <div class="card-body">
                        <div className='d-flex flex-column align-items-center'>
                            {/* <source type="image/webp" srcset="https://statics.olx.in/external/base/img/loginEntryPointPost.webp" /> */}
                            <img src="https://statics.olx.in/external/base/img/loginEntryPointPost.png" className="topicon" alt="" />

                            <p className='text-center icon-text'>Help us become one of the safest places to buy and sell</p>
                        </div>
                        <div className='input-area '>
                            <form>
                                <input className='px-3 mt-2' type="email" placeholder='Email' />
                                <input className='px-3 mt-2' type="text" placeholder='Password' />
                                <button type='submit' className='postBtn mt-2'>Sign in</button>
                            </form>
                        </div>
                        <hr />
                        <div>
                            <p className='text-center acText'>Create New Account</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login