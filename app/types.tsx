import { StringLiteral } from "typescript";

export interface Post {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    _embedded: {
        'wp:featuredmedia': [{ source_url: string }]
    };
    link: string;
};

export interface UserType {
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    avatar_urls: {
        [key: string]: string;
    };
}

export interface Plugins {
    name: string;
    description: {raw: string;}
    plugin_uri: string;
    version: string;
}