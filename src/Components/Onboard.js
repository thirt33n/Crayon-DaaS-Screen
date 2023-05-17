

import './Page.css'
import Card from './Card'
export default function Onboard(){
    return(
        <div className='container'>
            <h2 className="head">Step 1: Select a source</h2>
            <h4>Choose from the sources</h4>
            <div className='sources'>
                <Card image="https://digital-banking-solutions.com/storage/2019/11/oracle-flexcube.jpg"/>
                <Card image="https://handwiki.org/wiki/images/2/2e/Finacle_Logo.png"/>
                <Card image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Fiserv_logo.svg/248px-Fiserv_logo.svg.png"/>
                <Card image="https://hives.blob.core.windows.net/qcimages/trademark/6817423/imageshrine/small-5a0a12387f46781db46b6b005a1f1fae.jpg"/>
            </div>
        </div>
    )
}