import React, { useEffect, useState } from 'react'
import "./Card.css"
import fetch from "node-fetch"
import { useRef } from 'react';
// import axios from "axios"; 
import Loader from "react-js-loader";

const Card = (props) => {

    const { mode } = props;

    const ref = useRef(null);
    const [data, setData] = useState("");
    const [res, setRes] = useState([])
    const [isLoading, setLoading] = useState(true)
    // let a = 10  ; 
    useEffect(() => {
        // ref.current.click() ; 
        const getdata = async () => {
            const response = await fetch(`https://githubstalks.onrender.com/hardik-pratap-singh`, {
                method: "GET",
            })

            const json = await response.json();
            // console.log(json)
            if (json.success === true) {
                setRes(json.data);
                setLoading(false) //stop loading when data is fetched
            }
            else {
                setRes(null);
                setLoading(false) //stop loading when data is fetched
            }


        }

        getdata();

    }, [])

    const handleSubmit = async (e) => {

        try {


            setLoading(true);
            e.preventDefault();
            let url;
            if (data === "") {
                url = "hardik-pratap-singh";
            }
            else {
                url = data;
            }
            const response = await fetch(`https://githubstalks.onrender.com/${url}`, {
                method: "GET",
            })
            const json = await response.json();
            console.log(json)
            if (json.success === true) {
                setRes(json.data);
                setLoading(false);
            }
            else {
                setRes(null);
                setLoading(false);
            }

        } catch (error) {
            console.log({"error"  : "error in Card.js"}) ; 
        }
        // console.log(json) ; 
    }

    const stylelight = {
        backgroundColor: "white",
        color: "black",
        width: "18rem"
    }

    const styledark = {
        backgroundColor: "rgb(177 177 177)",
        color: "black",
        width: "18rem"
    }




    return isLoading ? (   //Checkif if is loading
        // <Loader type="box-rotate-x" bgColor={"#FFFFFF"} title={"box-rotate-x"} color={'#FFFFFF'} size={100} />
        <div className="loaderclass">
            {/* rgb(88 75 161); */}
            <Loader type="bubble-scale" bgColor="#FFFFFF" color="#FFFFFF" size={50} />
        </div>
    ) : (
        <div className="container class1"  >

            <form onSubmit={handleSubmit} className="d-flex" role="search">
                <input value={data} onChange={(e) => setData(e.target.value)} className="container form-control me-2 mx-3" type="search" style={{ width: "18rem" }} placeholder="Enter the Username Here.." aria-label="Search" />
                <button ref={ref} className={`btn btn-outline-${mode === "light" ? "primary" : "dark"} mx-3`} type="submit">Search</button>
            </form>

            {res != null ?
                <div className='container ' >
                    <div className="card class2 my-5" style={mode === "light" ? stylelight : styledark}>
                        <div className="myimg">
                            <img src={`${res.avatar_url}`} className="card-img-top" alt="GitHub Profile" />
                        </div>
                        <ul className="list-group list-group-flush" style={mode === "light" ? stylelight : styledark}>
                            <li className="list-group-item" style={mode === "light" ? stylelight : styledark}><b>{res.name === null ? "Data Not Available" : res.name}</b></li>
                            <li className="list-group-item" style={mode === "light" ? stylelight : styledark}><b>Bio : </b>{res.bio === null ? "Data Not Available" : res.bio}</li>
                            <li className="list-group-item" style={mode === "light" ? stylelight : styledark}><b>Repos : </b>{res.public_repos}</li>
                            <li className="list-group-item" style={mode === "light" ? stylelight : styledark}><b>Followers : </b>{res.followers}</li>
                            <li className="list-group-item" style={mode === "light" ? stylelight : styledark}><b>Following : </b>{res.following}</li>
                        </ul>
                        <br />
                        <div className="card-body div1">
                            <a href={`https://twitter.com/${res.twitter_username}`} className="card-link"><button type="button" className="btn btn-primary">Twitter</button></a>
                            <a href={`https://github.com/${res.login}`} className="card-link"><button type="button" className="btn btn-primary">GitHub</button></a>
                        </div>
                    </div>
                </div>

                :

                <>
                    {mode === "light"
                        ?
                        <div className="card nodata">
                            <h3>UserName Doesn't Exist or Request Timed Out !!</h3>
                        </div>
                        :
                        <div className="card nodata1">
                            <h3>UserName Doesn't Exist or Request Timed Out !</h3>
                        </div>

                    }

                </>


            }
        </div>
    )
}

export default Card
