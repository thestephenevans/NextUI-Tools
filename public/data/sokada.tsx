import { Post, UserType } from '@/app/types'

export async function fetchPosts(): Promise<Post[]> {
    const response = await fetch('https://sokada.co.uk/wp-json/wp/v2/posts?_embed');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}

export async function fetchUsers(): Promise<UserType[]> {
    const response = await fetch('https://sokada.co.uk/wp-json/wp/v2/users');
    if(!response.ok){
        throw new Error('Failed to fetch users');
    }
    return response.json();
}