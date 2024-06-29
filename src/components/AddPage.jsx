import React from 'react'
import Navbar from './Navbar'

const AddPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Subscribers Name</label>
                        <input type="text" className="form-control" placeholder='Enter the Name'/>
                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" placeholder='Enter the Phone Number'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Address</label>
                    <input type="text" className="form-control" placeholder='Enter the Address' />
                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Pincode</label>
                    <input type="text" className="form-control" placeholder='enter the pincode' />
                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">District</label>
                        <select name="" id="" className="form-select">
                            <option value="Select the District">Select the District</option>
                            <option value="Thiruvanandhapuram" >Thiruvanadhapuram</option>
                            <option value="Kollam" >Kollam</option>
                            <option value="Pathanamthitta" >Pathanamthitta</option>
                            <option value="Alaphuzha" >Alaphuzha</option>
                            <option value="Kottayam" >Kottayam</option>
                            <option value="Idukki" >Idukki</option>
                            <option value="Ernakulam" >Ernakulam</option>
                            <option value="Thissur" >Thissur</option>
                            <option value="Palakad" >Palakad</option>
                            <option value="Malapuram" >Malapuram</option>
                            <option value="Kozikod" >Kozikod</option>
                            <option value="Wayanad" >Wayanad</option>
                            <option value="Kannur" >Kannur</option>
                            <option value="Kasaragod" >Kasaragod</option>
                        </select>
                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Village Office</label>
                    <input type="text" className="form-control" placeholder='Enter your village Office' />
                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Email ID</label>
                    <input type="text" className="form-control" placeholder='Enter your Email ID' />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddPage
