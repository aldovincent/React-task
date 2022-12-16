import React from 'react'

export default function Content() {
    return (
        <>
            <div class="card bg-dark text-white">
                <img class="card-img" src="../assets/bg1.jpg" alt="Card image" />
                <div class="container-fluid">
                    <div className='row'>
                        <div className='col-sm-1'>

                        </div>
                        <div className='col-sm-4'>
                            <form class="bg-white item rounded-5 shadow-5-strong p-5">
                                <div class="form-outline mb-4 text-dark">
                                    <h4>choose from 25,00+</h4>
                                    <h4>Spaces for your </h4>
                                    <h4>Business</h4>
                                    <p>Get inspired and find your perfect place</p>
                                    {/* <input type="dropdown" id="form1Example1" placeholder="Looking for" class="form-control" /> */}
                                    <div class="dropdown">
                                        <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Looking For
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>

                                </div>

                                <div class="dropdown ">
                                        <button class="btn  dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Select city
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Kozhikode</a>
                                            <a class="dropdown-item" href="#">Ernakulam</a>
                                            <a class="dropdown-item" href="#">Kasargod</a>
                                        </div>
                                </div>

                                {/* <div class="form-outline mb-4">
                                    <input type="dropdown" id="form1Example2" placeholder="Select city" class="form-control" />

                                </div> */}
                                <button type="submit" class="btn btn-primary btn-xl">Search</button>

                            </form>
                        </div>
                        <div className='col-sm-7'>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
