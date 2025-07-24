import {NavLink} from 'react-router-dom'

export default function Header(){
    return <div className='bg-[#109BE9]  h-[45px] px-50 flex items-center justify-start gap-4 text-white shadow shadow-zinc-600'>
        <NavLink to={'/'} className={'hover:text-red-600'}>Home</NavLink>
        <NavLink to={'/business'} className={'hover:text-red-600'}>Business</NavLink>
        <NavLink to={'/entertainment'} className={'hover:text-red-600'}>Entertainment</NavLink>
        <NavLink to={'/general'} className={'hover:text-red-600'}>General</NavLink>
        <NavLink to={'/health'} className={'hover:text-red-600'}>Health</NavLink>
        <NavLink to={'/science'} className={'hover:text-red-600'}>Science</NavLink>
        <NavLink to={'/sports'} className={'hover:text-red-600'}>Sports</NavLink>
        <NavLink to={'/technology'} className={'hover:text-red-600'}>Technology</NavLink>
    </div>
}