"use client"

import React, { useState, useEffect } from 'react';
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { Card, CardHeader, CardBody, Avatar, User, Input, Button, Checkbox } from "@nextui-org/react";
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
        <div className = "flex flex-col justify-center items-center gap-5">
          <form className='flex flex-col gap-5 items-center' onSubmit={e => e.preventDefault()}>
            <label htmlFor="toURL"><strong>Redirect to:</strong></label>
            <Input value = {redirectTo} type="text" className='toURL' onChange={e => handleSetRedirect(e.target.value)}/>
          </form>
  
          <form className='flex flex-col gap-5 items-center' onSubmit={addRedirect}>
            <label htmlFor="fromURL"><strong>Redirect slugs:</strong> eg. /about/, /about-us/ </label>
            <Input value={oldSlug} type="text" className='fromURL' onChange={e => handleSetOldSlug(e.target.value)}/>
            <Button color = "primary" type='submit'>Submit</Button>
          </form>
          <div className='flex flex-col gap-5 items-center text-center'>
            <div className='flex flex-row gap-2' onChange={setSelection}>
              <label htmlFor="302-selection"><strong>302</strong> </label>
              <input type='radio' className='302-selection' name="selection" value='302' checked={redirectType === '302'}/>
              <label htmlFor="301-selection"><strong>301</strong> </label>
              <input type='radio' className='301-selection' name="selection" value='301' checked={redirectType === '301'}/>
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