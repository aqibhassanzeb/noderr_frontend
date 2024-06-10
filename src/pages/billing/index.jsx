import React, { useContext } from 'react'
import PageHeader from '../../components/dashboard/pageHeader/pageHeader'
import "./index.css";
import { images } from '../../images';
import { createApiContext } from '../../context/apiContext';

const Billing = () => {
  const {userData } = useContext(createApiContext);

    return (
        <div className="right_dashboard">
            <div className="right_container ">
                <PageHeader
                    page_title={"Billing History"}
                    // badge={" GM, Noderr"}
        //   badge={userData ? `GM, ${userData.firstName} ${userData.lastName}` : "GM, Noderr"}
        badge={userData && userData.firstName && userData.lastName ? `GM, ${userData.firstName} ${userData.lastName}` : "GM, Noderr"}

                    // profilePic={images.FakePic}
          profilePic={userData?.profilePic? `${process.env.REACT_APP_NODE_IMG_URL}${userData.profilePic}` : images.FakePic}

                />
                <div className="billing">
                    <h3 className='text'>Connect wallet</h3>
                    <p className='paragraph'>Please connect your wallet to see your active nodes</p>
                </div>
            </div>
        </div>
    )
}

export default Billing
