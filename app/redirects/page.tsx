"use client"

import React, { useState, useEffect } from 'react';
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { Card, CardHeader, CardBody, Avatar, User, Input, Button, Checkbox, RadioGroup, Radio } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { data } from 'autoprefixer';
import clsx from 'clsx';
import { ChangeEvent } from 'react';

interface RedirectList{
    from: string,
    to: string
}

export default function Page(){
    const [redirectTo, setRedirectTo] = useState('');
    const [oldSlug, setOldSlug] = useState('');
    const [redirectList, setRedirectList] = useState<RedirectList[]>([]);
    const [redirectType, setRedirectType] = useState('302');
  
    const [generatedList, setGeneratedList] = useState([]);
  
    function handleSetRedirect(url: string) {
      setRedirectTo(url);
    }
  
    function handleSetOldSlug(urlFrom: string) {
      setOldSlug(urlFrom);
    }
  
    function addRedirect(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      const newOldSlugArr = oldSlug.split(',');
      const newOldSlug = {from: newOldSlugArr[0].replace(' ', ''), to: newOldSlugArr[1].replace(' ', '')};
      setRedirectList(prevList => [...prevList, newOldSlug]);
    }
  
    function setSelection(event: ChangeEvent<HTMLInputElement>){
      let selection = event.target.value;
      setRedirectType(selection);
    }
  
    return (
      <div className='flex flex-col items-center gap-10'>
        <h1 className={`${title({color: "cyan"})}`}>Redirects</h1>
        <div className = "flex flex-col justify-center items-center gap-5 w-full">
          <form className='flex flex-col gap-5 items-center md:w-6/12 w-full' onSubmit={e => e.preventDefault()}>
            <Input value = {redirectTo} type="text" className='toURL' label="Redirect to" onChange={e => handleSetRedirect(e.target.value)}/>
          </form>
  
          <form className='flex flex-col gap-5 items-center md:w-6/12 w-full' onSubmit={addRedirect}>
            <Input value={oldSlug} type="text" className='fromURL' label="Redirect slugs" onChange={e => handleSetOldSlug(e.target.value)}/>
            <Button color = "primary" type='submit' className="w-full">Submit</Button>
          </form>
          <div className='flex flex-col gap-5 items-center text-center'>
            <div className='flex flex-row gap-2' onChange={setSelection}>
                <RadioGroup label="Select your redirect type" defaultValue='302' onValueChange={setRedirectType} className='flex items-center text-left'>
                    <Radio value="302" description="Temporary redirect">302</Radio>
                    <Radio value="301" description="Permanent redirect">301</Radio>
                </RadioGroup>
            </div>
            
            <h2 className={subtitle()}><strong>Redirect to:</strong> {redirectTo ? redirectTo : 'No redirect location set'}</h2>
            <h2 className={subtitle()}><strong>Generated redirects:</strong></h2>
            <ul className='redirect-list'>
              {redirectList.length === 0 ? 'No redirects set' : redirectList.map((redirect) => (
                <>
                  <li key={redirect.from} className={subtitle()}>
                    Redirect {redirectType} {redirect.from} {redirectTo}{redirect.to}
                  </li>
                </>
              ))}
            </ul>
  
          </div>
        </div>
    </div>
    );
  }