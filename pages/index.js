import Head from 'next/head'
import {useEffect, useState} from "react";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import Storefront from "../components/Storefront";
import ErrorPlaceholder from "../components/ErrorPlaceholder";
import axios from "axios";

export default function Home() {
    const [status, setStatus] = useState('LOADING')
    const [pageData, setPageData] = useState({})

    useEffect(() => {
        // Fetch store data
        setTimeout(() => {
            axios.get('https://oas6dpen9g.execute-api.us-west-2.amazonaws.com/default/getHollarSampleStorefrontData')
                .then(res => {
                    setPageData(res.data)
                    setStatus('LOADED')
                })
                .catch(() => setStatus('ERROR'))
        }, 1000)


    }, [])
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                {status === 'LOADING' && <LoadingPlaceholder/>}
                {status === 'LOADED' && <Storefront pageData={pageData}/>}
                {status === 'ERROR' && <ErrorPlaceholder/>}
            </main>
            <footer>

            </footer>
        </div>
    )
}
