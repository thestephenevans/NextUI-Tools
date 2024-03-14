'use server'
import { Post, UserType } from '@/app/types'
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