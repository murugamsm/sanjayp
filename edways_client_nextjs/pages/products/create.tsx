import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import moment from 'moment'

export default function Create() {

    const typeEnums = ['CLOTHES', 'SHOES', 'WATCHES', 'BAGS'];
    const [selectedType, setType] = useState<any>('');

    const validate = () => {
        const name = document.getElementById('name') as any;
        const desc = document.getElementById('Description') as any;
        console.log(selectedType);

        if (!name?.value) {
            alert('Please enter Name');
            name?.focus();
            return false;
        }
        if (!desc?.value) {
            alert('Please enter Description');
            desc?.focus();
            return false;
        }
        if (!selectedType || selectedType === 0) {
            alert('Please select Type');
            return false;
        }

        var data = JSON.stringify({
            "Name": name?.value,
            "Description": desc?.value,
            "Type": selectedType
        });

        var config = {
            method: 'post',
            url: 'http://localhost:3001/api/products/create',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then((response: any) => {
                if (response) {
                    alert('Product added successfully with id:' + response?.ProductId);
                    location.href = "/";
                }
            })
            .catch((error: any) => {
                console.log(error);
                alert('Something went wrong');
            });
    }

    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-6'>
                        <div className="card">
                            <div className="card-header">
                                Create Product
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label"><span className='text-danger'>*</span>Product Name </label>
                                        <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Description" className="form-label"><span className='text-danger'>*</span>Product Description </label>
                                        <input type="text" className="form-control" id="Description" aria-describedby="DescriptionHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label"><span className='text-danger'>*</span>Product Type </label>
                                        <select className="form-select" aria-label="Default select example" id='Type' onChange={(e: any) => setType(e.target.value)}>
                                            <option selected value={0}>Select Product Type</option>
                                            {
                                                typeEnums.map((value: string, index: number) => (
                                                    <option value={value} key={index}>{value}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <button type="button" className="btn btn-primary" onClick={validate}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}