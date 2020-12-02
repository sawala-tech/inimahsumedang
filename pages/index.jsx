import { DefaultButton, Dropdown, DropdownItem } from '../components/buttons'
import { Masonry } from '../components/layouts'
import { Card } from '../components/cards'
import Query from '../components/query'
import ARTICLES_QUERY from '../queries/articles/articles'

export default function IndexPage() {
   return (
      <div className="w-4/5 mx-auto my-10">
         <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Artikel</h1>
            <div className="flex items-center">
               <Dropdown>
                  <div>
                     <span className="font-semibold cursor-pointer select-none">
                        Sortir
                        <svg
                           className="inline w-6 h-6 ml-3"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                     </span>
                  </div>
                  <div>
                     <DropdownItem>Terkini</DropdownItem>
                     <DropdownItem>Terpopuler</DropdownItem>
                     <DropdownItem>Diutamakan</DropdownItem>
                     <DropdownItem>Tanggal (Terbaru)</DropdownItem>
                     <DropdownItem>Tanggal (Terdahulu)</DropdownItem>
                  </div>
               </Dropdown>
               <DefaultButton variant="primary" className="ml-10">
                  Tulis Artikel
               </DefaultButton>
            </div>
         </div>
         <div className="mt-10">
            <Query query={ARTICLES_QUERY}>
               {({ data: { articles } }) => {
                  return articles.map(function (article, i) {
                     return (
                        <Masonry key={i}>
                           <Card
                              thumbnail={article.thumbnail.url}
                              title={article.title}
                              categories={article.categories}
                              date={article.createdAt}
                              author={article.author}
                              localImage={false}
                           />
                        </Masonry>
                     )
                  })
               }}
            </Query>
         </div>
      </div>
   )
}
