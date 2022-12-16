import React from 'react'
import {Campaign,LocationOn,Login} from "@mui/icons-material"

export default function Navbar() {
    return (
        <>
            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <h5 class="text-white h4">Collapsed content</h5>
                        <span class="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>

                <nav class="navbar navbar-dark fixed-top   bg-white py-3 " >
                    <button class="navbar-toggler ml-5  " type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='row'>
                        <div className='navbar navbar-expand-lg    fixed-top py-lg-0'>
                            <div className='col-sm-2'>
                                <img src='../assets/logo.png' className='ms-5 py-2' width={130} />
                            </div>
                            <div className='col-sm-7'>
                            </div>
                            <div className='col-sm-3 ms-5 '>
                                 <Campaign className='icon1'/>
                                 <span className='text-primary'>Post Ad </span>
                                 <LocationOn  className='icon2'/>
                                 <span className='text-primary'>Near Me</span>
                                 <Login  className='icon3'/>
                                 <span className='text-primary'>Login/Sign Up</span>
                           </div>
                        </div>
                    </div>
              </nav>
            </div>

        </>
    )
}
