import { Link, NavLink } from 'react-router-dom';
import logo from '../Assets/Images/logo.png'

const Navbar = ({children}) => {


    const navItems = <>
        <li><NavLink to='/'  className='rounded-lg font-bold '>Home</NavLink></li>
        <li><NavLink activeClassName="active" to="about" className='rounded-lg font-bold '>About Me</NavLink></li>
        <li><NavLink activeClassName="active" to="projects" className='rounded-lg font-bold '>Projects</NavLink></li>
        <li><NavLink to="/blogs" className='rounded-lg font-bold '>Blogs</NavLink></li>
        <li><NavLink to='/contact' className='rounded-lg font-bold '>Contact</NavLink></li>
      
    </>


    return ( 
       <section className='relative '>
         
          <div className="drawer drawer-end ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
                <div className="drawer-content flex flex-col">
                 
                    <div className="w-full navbar bg-base-100 py-10 lg:px-20  sticky top-0 z-50 ">
                         <Link to='/' className="flex-1 px-2 mx-2 text-2xl font-semibold "><img src={logo} alt="logo" /></Link>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div> 
                        
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {navItems}
                            </ul>
                        </div>
                    </div>
                    
                    {children}
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 ">
                         {navItems}
                    </ul>
                    
                </div>
                </div>
       </section>
    );
};

export default Navbar;