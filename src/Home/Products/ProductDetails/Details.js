import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
            <img src={singledetail?.img} alt="" />
            <h5>this is id{pd}</h5>


        </div>
    );
}

export default Details;