import Head from 'next/head'
import style from '../styles/Layout.module.css'
import HeadNavigation from './HeadNavigation'
import FootBar from "./FootBar"
import { Box, Container } from "@mui/material";
export default function Layout({ children }: any) {
    return (
        <div className={style.container}>
            <Head>
                <title>Shen Lab</title>
                <meta name="author" content="SilverNebula" />
            </Head>
            <div className="page">
                <HeadNavigation />
                <Box component='span'>
                    {children}
                </Box>
                <FootBar />
            </div>
        </div>
    )
}