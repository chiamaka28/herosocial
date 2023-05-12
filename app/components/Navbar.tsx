import Link from "next/link";
 
const Navbar = () => {
    return ( 
        <nav>
           <div className="my-container flex items-center justify-between py-5">
              <div>
                 <Link href="/" className="text-3xl font-medium">Herosocial</Link>
              </div>
                <div className="relative">
                  <img 
                  className="absolute top-3 left-5"
                  src="https://res.cloudinary.com/dzmpjgmes/image/upload/v1683817284/Union_wgx0tx.png" alt="" />
                <input
                 className="py-3 px-14 w-[38rem] bg-lightGray rounded-3xl"
                 type="text"
                 placeholder="Search for creators, inspirations, projects..."
                 name="" id="" />
             </div>
             <div className="flex items-center gap-5">
              <div className="bg-lightGray p-3 rounded-full"><img  src="https://res.cloudinary.com/dzmpjgmes/image/upload/v1683872656/Union_o0levv.png" alt="" /></div>
              <div className="bg-lightGray p-3 rounded-full"><img src="https://res.cloudinary.com/dzmpjgmes/image/upload/v1683872685/Vector_rh9cf6.png" alt="" /></div>
              <div className="rounded-full overflow-hidden"><img className="block max-w-full" src="https://res.cloudinary.com/dzmpjgmes/image/upload/v1683872648/superman-batman-v-superman-dawn-of-justice-clark-kent-henry-cavill-wallpaper-preview_in83vx.png" alt="" /></div>
             </div>
           </div>
        </nav>
     );
}
 
export default Navbar;