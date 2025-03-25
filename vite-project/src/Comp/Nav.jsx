
import React from 'react'
import { Grid2x2 } from 'lucide-react';
import { Image } from 'lucide-react';
import { UserRoundPlus } from 'lucide-react';
import { AtSign } from 'lucide-react';
import { Star } from 'lucide-react';
import { Check } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { PawPrint } from 'lucide-react';
export default function Nav() {
  return (
    <div>
        <h3><b>inbox</b></h3>
       <ul className='nav'>
        <li  className='ferst'><Grid2x2 />Dashboard 
        </li>
        <li> <Image />New</li>
        <li>    <UserRoundPlus />Assigend to me </li>
        <li>   <AtSign />Mantiond </li>
        <li>    <Star />
        Favourite</li>
        <li>    <Check />Closed </li>
        <li> <Pencil />Srafts</li>
        <li>    <PawPrint />Snoozed</li>
       </ul>
    </div>
  )
}
