import './footer.css'


const Footer = () => {
  
    return (
        <div>
            <body class="d-flex flex-column">

               
                <footer class="bg-white my-4">
                    <div class="mx-5 ">
                        <div class="row py-4">
                            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3" />

                            <div className="title">
                                    <h6 class="text-uppercase font-weight-bold mb-4 fs-4">Social Media</h6>
                                 
                                    <div className="underline"></div>
                                </div>


                                <p class="font-italic text-muted text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <ul class="list-inline mt-4">
                                    <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="fa fa-twitter fs-1"></i></a></li>
                                    <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fa fa-facebook fs-1"></i></a></li>
                                    <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fa fa-instagram fs-1"></i></a></li>
                                    <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="fa fa-pinterest fs-1"></i></a></li>
                                    <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><i class="fa fa-vimeo fs-1"></i></a></li>
                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">

                                <div className="title">
                                    <h6 class="text-uppercase font-weight-bold mb-4 fs-4">Doctor</h6>

                                    <div className="underline"></div>
                                </div>
                                <ul class="list-unstyled mb-0 text-start">
                                    <li class="mb-2"><a href="#" class="text-muted">For Women</a></li>
                                    <li class="mb-2"><a href="#" class="text-muted">For Men</a></li>
                                    <li class="mb-2"><a href="#" class="text-muted">Stores</a></li>
                                    <li class="mb-2"><a href="#" class="text-muted">Our Blog</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">

                                <div className="title">
                                    <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>


                                    <div className="underline"></div>
                                </div>
                                <ul class="list-unstyled mb-0 text-start">
                                    <li class="mb-2"><a href="#" class="text-muted">Login</a></li>
                                    <li class="mb-2"><a href="#" class="text-muted">Register</a></li>
                                    <li class="mb-2"><a href="#" class="text-muted">Wishlist</a></li>
                                    <li class="mb-2"><a href="#" class="text-muted">Our Products</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-lg-0">

                                <div className="title">
                                    <h6 class="text-uppercase font-weight-bold mb-4">Newsletter</h6>


                                    <div className="underline"></div>
                                </div>
                                <p class="text-muted mb-4 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                                <div class="p-1 rounded border">
                                    <div class="input-group">
                                        <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0" />
                                        <div class="input-group-append">
                                            <button id="button-addon1" type="submit" class="btn btn-link"><i class="fa fa-paper-plane"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="bg-light py-4">
                        <div class="container text-center">
                            <p class="text-muted mb-0 py-2">© 2022  All rights reserved.</p>
                        </div>
                    </div>
                </footer>


            </body>
        </div>
    );
};

export default Footer;