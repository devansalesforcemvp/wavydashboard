import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Content from "./components/Content";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
export default function Home() {
const [leftNavBar, setLeftNavBar] = useState(false)


	const handleSideNav=()=>{
		console.log(leftNavBar);
		leftNavBar? setLeftNavBar(false):setLeftNavBar(true)
return	}

	useEffect(()=>{
		if(leftNavBar===false) {
			document.getElementsByClassName("everything")[0].style.marginLeft="-170px"
			document.getElementsByClassName("everything")[1].style.marginLeft="-170px"
		}else{
 document.getElementsByClassName("everything")[0].style.marginLeft="0"
 document.getElementsByClassName("everything")[1].style.marginLeft="0"
		}
const nodeList = document.getElementsByClassName("everything")
const nodes = [...nodeList]

nodes.forEach((e)=>{
console.log(e.style.marginLeft)})

		

    },[leftNavBar])
	return (
		<div className={styles.container}>
			<Head>
				<title>Create dashboard</title>
				<meta name="description" content="Created by Dr.Fullstack" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<Navbar handleSideNav={handleSideNav}/>
			<div className={styles.container}>
				{leftNavBar && <LeftNavbar />}
				<Header />
				<Content />
			</div>
		</div>
	);
}
