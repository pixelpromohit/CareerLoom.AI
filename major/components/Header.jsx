import { UserButton, SignInButton, SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {    
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  )
}

export default Header
