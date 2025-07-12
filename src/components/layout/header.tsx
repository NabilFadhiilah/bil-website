export const Header = () => {
   return (
      <div className="grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-2 gap-4 p-4">
         <div className="lg:col-start-2 lg:col-end-6 md:col-start-1 md:col-end-4 sm:col-start-1 sm:col-end-2">
            <h1 className="font-bold">Nabil Fadhiilah</h1>
            <h2 className="font-light">Product Manager</h2>
         </div>
         <nav className="lg:col-start-11 lg:col-end-12 md:col-start-6 md:col-end-6 sm:col-start-1 sm:col-end-2">
            <h2 className="font-bold md:text-right sm:text-left">About</h2>
         </nav>
      </div>
   )
}