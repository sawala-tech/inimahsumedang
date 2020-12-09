import React from 'react'

import { withAuth, withLoginRequired } from 'use-auth0-hooks'

function Create({ auth }) {
   const { user } = auth
   return (
      <div className="mx-auto my-10 sm:full lg:w-3/5">
         <h1>Create</h1>
         <p>This is the Create page.</p>
         <pre>{JSON.stringify(user || {}, null, 2)}</pre>
      </div>
   )
}

export default withLoginRequired(withAuth(Create))
