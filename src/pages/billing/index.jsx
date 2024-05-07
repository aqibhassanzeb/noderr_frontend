import React from 'react'
import PageHeader from '../../components/dashboard/pageHeader/pageHeader'
import "./index.css";

const Billing = () => {
    return (
        <div className="right_dashboard">
            <div className="right_container">
                <PageHeader
                    page_title={"Billing History"}
                    badge={" GM, Noderr"}
                />
                <div className="billing">
                    <h3 className='text'>Connect wallet</h3>
                    <p className='paraghrap'>Please connect your wallet to see your active nodes</p>
                </div>
            </div>
        </div>
    )
}

export default Billing
