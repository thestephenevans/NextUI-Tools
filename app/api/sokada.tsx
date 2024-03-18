// @ts-nocheck
'use server'

import { Post, UserType, Plugins } from '@/app/types'
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchPosts(): Promise<Post[]> {
    noStore();
    const response = await fetch('https://sokada.co.uk/wp-json/wp/v2/posts?_embed');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}

export async function fetchUsers(): Promise<UserType[]> {
    noStore();
    const response = await fetch('https://sokada.co.uk/wp-json/wp/v2/users');
    if(!response.ok){
        throw new Error('Failed to fetch users');
    }
    return response.json();
}

export async function fetchPlugins(): Promise<Plugins[]> {
    noStore();
    const response = await fetch('https://sokada.co.uk/wp-json/wp/v2/plugins',
    {
        headers: {
            "Authorization": `${process.env.TOKEN}`
        }
    }
    );

    if(!response.ok){
        throw new Error('Failed to fetch plugins');
    }
    return response.json();
}

export async function fetchPerformance(): Promise {
    noStore();
    const response = await fetch('https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.sokada.co.uk&key=AIzaSyBU02ECKZFfjlwLEqr_HCRtjpvbNJ2y1qY&category=performance&category=accessibility&category=best-practices&category=seo');

    if(!response.ok){
        throw new Error('Failed to fetch performance');
    }

    return response.json();
}