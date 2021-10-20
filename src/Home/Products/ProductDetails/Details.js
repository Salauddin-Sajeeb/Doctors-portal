import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../product.css'

const Details = () => {
    const { pd } = useParams()
    const [details, setDetails] = useState([])
    const [singledetail, setSingleDetail] = useState({})
    useEffect(() => {
        fetch('https://salauddin-sajeeb.github.io/coronadata/fakeData.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    useEffect(() => {

        const viewdetails = details.find(product => product.key == pd)
        setSingleDetail(viewdetails)
        console.log(viewdetails)

    }, [details])

    return (
        <div>
            <div>
                <h4 className="mt-5">{singledetail?.name}</h4>
                <img className="image" src={singledetail?.img} alt="" />
                <h5 className="mt-4">{singledetail?.description}</h5>

            </div>


        </div>
    );
}

export default Details;