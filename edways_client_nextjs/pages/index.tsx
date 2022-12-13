import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import moment from 'moment'
import Link from "next/link"
import { redirect } from 'next/dist/server/api-utils'
import {
  useRouter
} from 'next/router'

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    router.push('/products', undefined, {
      shallow: true
    })
  }, [])

  return (
    <>

    </>
  )
}
