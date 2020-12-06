import Link from 'next/link'

function BaseLink({ children, href }) {
   console.log(href)
   // Must add passHref to Link
   return (
      <Link href={href} passHref>
         {children}
      </Link>
   )
}

export default BaseLink
