"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { Card, CardHeader, CardBody, Avatar, User, Input, Button, Checkbox, Skeleton } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { data } from 'autoprefixer';
import clsx from 'clsx';

interface Todo {
    id: number;
    value: string;
    completed: boolean;
}

export default function Page(){
    const [list, setList] = useState<Todo[]>([]);
    const [input, setInput] = useState<string>(''); 
    const [originalList, setOriginalList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const storedList = localStorage.getItem('todoList');
        if (storedList) {
            setList(JSON.parse(storedList));
            setOriginalList(JSON.parse(storedList));
            setIsLoaded(true);
        }
    }, []); // Empty dependency array to run this effect only once when component mounts

    function updateList(newList: Todo[]) {
        localStorage.setItem('todoList', JSON.stringify(newList));
        setList(newList);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(input != ''){
            setList([...list, {id: Date.now(), value: input, completed: false}]);
            setInput('');
        }
    }

    function handleCompleted(id: Number, completed: boolean) {
        const updatedList = list.map(todo => {
            if (todo.id === id) {
                todo.completed = completed;
            }
            return todo;
        });
        updateList(updatedList);
    }

    function handleDelete(id: Number){
        const updatedList = list.filter(todo => todo.id !== id);
        updateList(updatedList);
    }

    return(
        <>
            <div className="flex justify-center items-center flex-col gap-10">
                <h1 className={title({color: "blue"})}>Todo List</h1>

                <div className='flex flex-col gap-5 md:w-6/12 w-full'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                        <Input type="text" label="Add task" value={input} onChange={(e) => setInput(e.target.value)}/>
                        <Button color="primary" type='submit'>
                            Add
                        </Button>
                    </form>
                </div>

                <div className='flex flex-col gap-5 md:w-6/12 w-full'>
                    {list && list.map((item, i) => (
                    <Skeleton key={i} className="rounded-lg" isLoaded={isLoaded}>
                      <Card className={clsx(
                        {
                            'bg-green-600': item.completed,
                            'bg-gray-900':!item.completed
                        }
                      )}>
                        <CardBody className='flex md:flex-row align-center justify-between gap-3 flex-col'>
                            <Checkbox checked={item.completed} defaultSelected={item.completed ? true : undefined} lineThrough onChange={(e) => handleCompleted(item.id, e.target.checked)}>
                                <span className='flex flex-col justify-center'>{item.value}</span>
                            </Checkbox>
                            <Button color="default" variant='light' onClick={() => handleDelete(item.id)}>
                                Delete
                            </Button>
                        </CardBody>
                      </Card>  
                    </Skeleton>
                    ))}
                </div>
            </div>
        </>
    )
}