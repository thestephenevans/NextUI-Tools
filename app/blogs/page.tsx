'use client'

import React, { useState, useEffect } from 'react';
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { Card, CardHeader, CardBody, Avatar, User, Input, Button, Checkbox, RadioGroup, Radio, Image } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { data } from 'autoprefixer';
import clsx from 'clsx';
import { ChangeEvent } from 'react';

import { fetchPosts } from '@/app/api/sokada';
import { Post } from '@/app/types';

export default function Page(){
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        loadPosts();
    }, []);

    
    console.log(posts);

    return(
        <div>
            <h1 className={title({color: 'violet'})}>Posts</h1>
            <div className='grid grid-cols-2 gap-10'>
                {posts.map(post => (
                    <Card key={post.id} className='flex flex-col flex-1'>
                        <CardHeader>
                            <Image className = "w-full" src = {post._embedded['wp:featuredmedia']['0'].source_url} />
                        </CardHeader>
                        <CardBody>
                            <div className='flex flex-col flex-1 gap-10 justify-between'>
                                <div>
                                    <h2 className={subtitle()}>{post.title.rendered}</h2>
                                    <div>
                                        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className='flex flex-col gap-3'></div>
                                    </div>
                                </div>
                                <Link href={post.link} isExternal>
                                    <Button>Read More</Button>
                                </Link>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    )
}