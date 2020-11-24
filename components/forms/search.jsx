export default function searchInput() {
    return(
        <div className="relative">
            <input type="search" name="search" placeholder="Search" className="w-full border-b border-gray-900" />
            <svg class="w-5 h-5 absolute top-0 right-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
    )
}