import React from 'react';
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { Card, CardHeader, CardBody, Avatar, User } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	const users = {
		"1": {
            name: "Stephen",
            description: "Website Developer"
        },
		"2": {
            name: "Test",
            description: "Marketing Executive"
        },
		"3": {
            name: "Test 2",
            description: "Analytics"
        }
	}

	return (
		<section className="flex flex-col gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg">
				<h1 className={title({ color: "violet" })}>Stephen's&nbsp;</h1>
				<h1 className={title()}>
					Tools
				</h1>
			</div>
			{Object.entries(users).map(([key, user]) => (
				<Card key={key} className='w-full'>
					<CardHeader>
						<User name = {user.name} description = {user.description} />
					</CardHeader>
					<CardBody>
						<span>Lorem Ipsum</span>
					</CardBody>
				</Card>
			))}

		</section>
	);
}
