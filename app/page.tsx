'use client'

import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { Card, CardHeader, CardBody, Avatar, User, Skeleton, CircularProgress } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Users from "@/app/data/users";

import { fetchUsers, fetchPlugins, fetchPerformance } from '@/app/api/sokada';
import { UserType, Plugins } from '@/app/types';
import { report } from '@/app/data/lighthouse';

export default function Home() {
	const [users, setUsers] = useState<UserType[]>([]);
	const [plugins, setPlugins] = useState<Plugins[]>([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [performance, setPerformance] = useState(0);
	const [accessibility, setAccessibility] = useState(0);
	const [bestPractices, setBestPractices] = useState(0);
	const [seo, setSeo] = useState(0);
	const [stats, setStats] = useState([]);
	

	useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

		const loadPlugins = async () => {
			try {
				const data = await fetchPlugins();
                setPlugins(data);
			} catch (error) {
				console.error('Error fetching plugins:', error);
			}
		}

		const loadPerformance = async () => {
			try {
				const data = await fetchPerformance();
				setPerformance(data.lighthouseResult.categories.performance.score)
				setAccessibility(data.lighthouseResult.categories.accessibility.score)
				setBestPractices(data.lighthouseResult.categories["best-practices"].score)
				setSeo(data.lighthouseResult.categories.seo.score)
				setIsLoaded(true);
			} catch (error) {
				console.error('Error fetching performance:', error);
			}
		}

        loadUsers();
		loadPlugins();
		loadPerformance();
    }, []);

	return (
		<section className="flex flex-col gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg mb-10">
				<h1 className={title({ color: "cyan" })}>Stephen&apos;s&nbsp;</h1>
				<h1 className={title()}>
					Tools
				</h1>
			</div>
			<div className='flex md:flex-row-reverse justify-between flex-col-reverse gap-10'>
				<div className='flex flex-col gap-5'>
					{users.map((user, key) => (
						<Card key={key} className='w-full'>
							<Suspense fallback={<p>Loading...</p>}>
								<CardHeader>
									<User name = {user.name} description = {(
										<Link className = "text-[12px]" href={user.link} size="sm" isExternal>
											{user.link}
										</Link>
									)} avatarProps={{
										src: user.avatar_urls[96]
									}} />
								</CardHeader>
							</Suspense>
						</Card>		
					))}
				</div>

				
				<div className='flex flex-col gap-10'>
					<Card className='w-full pb-5'>
						<Suspense fallback={<p>Loading...</p>}>
							<CardHeader className='flex flex-col text-center gap-5'>
								<div className='md:inline-block mb-10 inline-flex flex-col'>
									<h2 className={title()}>Sokada </h2>
									<h2 className={title({color:'green'})}>Website Stats</h2>
								</div>
								<div>
									<Skeleton isLoaded = {isLoaded} className='rounded-xl'>
										<div className='flex md:flex-row gap-5 flex-col'>
											<CircularProgress
												label="Performance"
												size="lg"
												value={performance * 100}
												color={(performance * 100) < 90 ? "warning" : "success"}
												showValueLabel={true}
												strokeWidth={4}
												classNames={{
													svg: "w-36 h-36 drop-shadow-md",
													value: "text-3xl font-semibold text-white",
												}}
											/>

											<CircularProgress
												label="Accessibility"
												size="lg"
												value={accessibility * 100}
												color={(accessibility * 100) < 70 ? "warning" : "success"}
												showValueLabel={true}
												strokeWidth={4}
												classNames={{
													svg: "w-36 h-36 drop-shadow-md",
													value: "text-3xl font-semibold text-white",
												}}
											/>

											<CircularProgress
												label="Best Practices"
												size="lg"
												value={bestPractices * 100}
												color={(bestPractices * 100) < 70 ? "warning" : "success"}
												showValueLabel={true}
												strokeWidth={4}
												classNames={{
													svg: "w-36 h-36 drop-shadow-md",
													value: "text-3xl font-semibold text-white",
												}}
											/>

											<CircularProgress
												label="SEO"
												size="lg"
												value={seo * 100}
												color={(seo * 100) < 70 ? "warning" : "success"}
												showValueLabel={true}
												strokeWidth={4}
												classNames={{
													svg: "w-36 h-36 drop-shadow-md",
													value: "text-3xl font-semibold text-white",
												}}
											/>
										</div>
									</Skeleton>
								</div>
							</CardHeader>
						</Suspense>
					</Card>	

					<div className='flex flex-col'>
						<h2 className={`${title({color: 'green'})} pb-2`}>Plugins</h2>

						<div className='grid md:grid-cols-2 gap-5 mt-10 grid-cols-1'>
							{plugins.map(plugin => (
								<Card key = {plugin.name} className='w-full'>
									<CardHeader className='flex flex-col text-center'>
										<span className='text-xl'>{plugin.name}</span>
										<Link href = {plugin.plugin_uri} isExternal>{plugin.plugin_uri}</Link>
									</CardHeader>
									<CardBody className='flex flex-col text-center gap-3'>
										{plugin.description.raw}
										<span className='text-2xl'>{plugin.version}</span>
									</CardBody>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>		
		</section>
	);
}
