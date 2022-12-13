import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import moment from 'moment'
import Link from "next/link"

export default function Products() {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://localhost:3001/api/products',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then((response: any) => {
                console.log(response.data);
                setProducts(response.data.data);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className="card p-0">
                        <div className="card-header">
                            <span>Products</span>
                            <Link href="/products/create" className='btn btn-primary btn-sm ms-1 float-end'>
                                Create
                            </Link>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Type</th>
                                        <th>Created On</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products && products.map((product: any) => (
                                        <tr key={product.ProductId}>
                                            <td>{product.ProductId}</td>
                                            <td>{product.Name}</td>
                                            <td>{product.Description}</td>
                                            <td>{product.Type}</td>
                                            <td>{moment(product.CreatedOn).format('DD-MMM-YYYY hh:mm A')}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}