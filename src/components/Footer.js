import React from 'react'

const footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-white" id='footer'>
                <div className="container p-4 pb-0" >
                    <section className="mb-4">
                        {/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f"></i></a> */}
                        {/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a> */}
                        {/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/altamashaseer" target='__blank'><i className="fab fa-github"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" target='__blank' href = "mailto:altamashaseer9@gmail.com"><i className="fa-regular fa-envelope"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/altamash-aseer-746aa3193/" target='__blank'><i className="fab fa-linkedin-in"></i></a>
                    </section>
                </div>

                <div className="text-center p-3" id='f-text' >
                    <a className="text-white" href="www.google.com">NewsJunky</a> © 2022 | Made with <i class="fa-solid fa-heart"></i>  in India                    
                </div>
            </footer>
        </div>
    )
}

export default footer
