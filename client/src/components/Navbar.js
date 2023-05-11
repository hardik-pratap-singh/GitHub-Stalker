import React from 'react'

const Navbar = (props) => {
    const {mode , toggleMode} = props ; 
    let req ; 
    if(mode === "light")
    {
        req = "Dark"; 
    }
    else req = "Light" ; 
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mynav" data-bs-theme={mode==="light" ? "light" : "dark"}>
            <div className="container-fluid">
                <h2 className="navbar-brand"><b>GitHub-Stalker</b></h2>
                <div className="form-check form-switch mx-4">
                    {/* <label class="form-check-label"   style = {{color : mode === "light" ? "black" : "white" }} for="flexSwitchCheckDefault"><b>{mode.substr(0,1).toUpperCase() + mode.substr(1,mode.length)}</b></label> */}
                    <label className="form-check-label"   style = {{color : mode === "light" ? "black" : "white" }} htmlFor="flexSwitchCheckDefault"><b>{req}</b></label>
                    <input className="form-check-input" value={mode === "light" ? "Light" : "Dark" } type="checkbox" role="switch"  onClick={toggleMode} id="flexSwitchCheckDefault" />
                </div>

            </div>
        </nav>
    )
}

export default Navbar
