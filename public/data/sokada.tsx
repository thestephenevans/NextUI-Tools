import { Post, UserType } from '@/app/types'
import { revalidatePath } from 'next/cache';

export async function fetchPosts(): Promise<Post[]> {
    const response = await fetch('https://sokada.co.uk/wp-json/wp/v2/posts?_embed');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    revalidatePath('/app/blogs')
    return response.json();
}

export async function fetchUsers(): Promise<UserType[]> {
    const response = await fetch('https://sokada.co.uk/wp-json/wp/v2/users');
    if(!response.ok){
        throw new Error('Failed to fetch users');
    }
    revalidatePath('/app/')
    return response.json();
}